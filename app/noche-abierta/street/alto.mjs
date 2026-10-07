// Noche abierta · calle · Barrio Alto: luz blanca y cálida, fachadas pulidas, tilos con lucecitas y un silencio un poco presumido.
const encounters = [
  // ─────────────────────────────────────────── ESCENA 1
  {
    id: "alto-reconoce",
    kind: "escena",
    district: "alto",
    title: "¿Nos conocemos?",
    verb: "HABLAR",
    goal: "Aclarar un malentendido con cortesía, seguir una conversación con preguntas, usar usted y consolar a alguien.",
    cast: [
      {
        id: "beatriz", name: "Beatriz", role: "Señora elegante a la salida del hotel",
        age: "adult", body: "f", build: "average", height: 1.66,
        hair: "bob", hairColor: "#8a4b2a", skin: "#f3d9c4",
        top: "coat", topColor: "#6b1f3a", bottom: "skirt", bottomColor: "#1f1a1e",
        extras: ["earrings", "bag"], pose: "stand", props: ["lime-tree", "bench"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "beatriz", mood: "surprised",
        line: {
          A: "Una señora elegante te toma del brazo y te mira la cara. «¡No puede ser! Tienes los ojos de Lucía. Tu madre se llama Lucía, ¿verdad?»",
          B: "Una señora muy elegante se detiene bajo los tilos y te sujeta del brazo. «¡Eres igual que Lucía a tu edad! Tú eres de la familia de Lucía Ferrer, ¿no?»",
          C: "Una señora de abrigo granate se planta delante de ti con una sonrisa que no admite dudas. «Esa cara la conozco yo. Tú eres de Lucía Ferrer. No me lo niegues.»",
        },
        options: [
          {
            id: "seguir",
            say: { A: "Sí, sí… ¿Y usted cómo se llama?", B: "Eh… sí, claro. Perdone, ¿usted es amiga suya?", C: "Bueno… digamos que sí. Pero refrésqueme la memoria: ¿de qué se conocen ustedes?" },
            reply: { A: "La señora sonríe mucho. «Soy Beatriz. ¡Tu madre y yo éramos inseparables!»", B: "«¡Beatriz! ¿No te habló nunca de mí? Éramos uña y carne», dice, emocionada.", C: "«Beatriz, querida. Beatriz Olmedo», dice, algo herida de que no la recuerdes. «Durante diez años, tu madre y yo fuimos una sola persona.»" },
            mood: "smile", next: "recuerdos",
          },
          {
            id: "aclarar",
            say: { A: "Perdón, creo que se equivoca. Mi madre no se llama Lucía.", B: "Lo siento, pero creo que me confunde con otra persona. No conozco a ninguna Lucía.", C: "Me encantaría decirle que sí, pero me temo que me está confundiendo con otra persona." },
            reply: { A: "La señora no te cree. «¿Seguro? Tienes su misma cara.»", B: "La señora frunce el ceño. «¿Cómo que no? Tienes su misma sonrisa. ¡Es imposible!»", C: "La señora te observa con un escepticismo encantador. «Eso decía Lucía cuando no quería ir a clase. Y tiene la misma sonrisa al mentir.»" },
            mood: "surprised", next: "insiste",
          },
          {
            id: "preguntar",
            say: { A: "¿Quién es Lucía? ¿Es su amiga?", B: "¿Lucía? ¿Y de qué la conoce usted?", C: "Antes de confirmar nada, cuénteme: ¿quién es esa Lucía que tanto me parezco?" },
            reply: { A: "«Mi mejor amiga. Vivimos en esta plaza de jóvenes.»", B: "A la señora le brillan los ojos. «Mi mejor amiga. Vivíamos aquí, en esta misma plaza. Me llamo Beatriz, por cierto.»", C: "«La mejor amiga que he tenido», dice ella, y se presenta: Beatriz. «Y la persona más testaruda de este barrio, que ya es decir.»" },
            mood: "smile", next: "recuerdos",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y un papel.", B: "Sacas el lápiz y escribes tu nombre en un papel.", C: "Sacas el lápiz y escribes tu nombre completo, como quien presenta pruebas." },
            say: { A: "Mire, este es mi nombre. No soy de la familia de Lucía.", B: "Mire, este es mi nombre completo. Creo que no soy quien usted piensa.", C: "Aquí tiene mi nombre completo. Ningún Ferrer a la vista, me temo." },
            reply: { A: "La señora lee el papel. «Mmm… Pero tienes su cara. ¡Es muy raro!»", B: "La señora lee el papel dos veces. «Pues no… Pero te juro que eres igual que ella.»", C: "La señora lee el papel como si fuera un documento falsificado. «El apellido no coincide, pero la cara sí. Esto es un misterio.»" },
            mood: "surprised", next: "insiste",
          },
          libro: {
            act: { A: "La señora ve tu libro.", B: "La señora se fija en el libro que llevas en la mano.", C: "La mirada de la señora baja hasta tu libro y se ilumina." },
            say: { A: "¿Le gusta este libro?", B: "¿Lo conoce? Lo estoy leyendo ahora.", C: "Veo que conoce el libro. ¿Me lo recomienda o me lo desaconseja?" },
            reply: { A: "«¡Es el libro favorito de Lucía! ¿Ves? Eres de su familia.»", B: "«¡El libro favorito de Lucía! ¿Ves cómo tenía razón? Esto no es casualidad.»", C: "«Era el libro de cabecera de Lucía», dice, triunfal. «A mí ya no me quedan dudas, aunque a ti sí.»" },
            mood: "smile", next: "recuerdos",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Te asustas y sacas el gas pimienta.", C: "Ante tanta confianza repentina, sacas el gas pimienta." },
            say: { A: "¡Suélteme, por favor!", B: "¡Suélteme! No la conozco de nada.", C: "Le agradecería que me soltara el brazo. Ahora mismo." },
            reply: { A: "La señora grita y te suelta. «¡Ay! ¡Un ladrón!»", B: "La señora te suelta y aprieta el bolso contra el pecho. «¡Ay, Dios mío! ¿Me quieres robar?»", C: "La señora retrocede y abraza su bolso. «¡Qué barbaridad! Y yo pensando que eras de buena familia.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Se ve tu granada.", B: "Al moverte, la granada asoma del bolsillo.", C: "Al soltarte, la granada asoma del bolsillo con muy mala oportunidad." },
            say: { A: "Perdón, señora. Se equivoca de persona.", B: "Perdone, señora, pero se equivoca de persona.", C: "Señora, con todo respeto, creo que se equivoca de persona." },
            reply: { A: "La señora ve la granada. «¡Ay! ¡Toma mi bolso! ¡Toma!»", B: "La señora ve la granada y te da el bolso. «¡Toma, toma, llévatelo todo!»", C: "La señora le echa una mirada a la granada y te tiende el bolso. «Ya veo que no eres de Lucía. Llévatelo y vete.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "La señora ve tu pistola.", B: "Con el abrazo, la señora nota tu pistola.", C: "Al acercarse, la señora nota la pistola en tu cintura." },
            say: { A: "Hola, señora. ¿Qué pasa?", B: "Buenas noches. ¿Qué le pasa?", C: "Buenas noches. ¿Se encuentra bien?" },
            reply: { A: "La señora se asusta. «¡Un robo! ¡Toma mi bolso!»", B: "La señora se pone pálida. «¡Es un robo! Toma el bolso, pero no me hagas nada.»", C: "La señora palidece. «Lucía jamás… Toma el bolso. Hay poco dinero, pero el bolso es bonito.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Sacas el cuchillo: su collar se enganchó en tu manga.", C: "Sacas el cuchillo: el collar de la señora se ha enredado en tu botón." },
            say: { A: "Un momento. Su collar está en mi botón.", B: "Espere, su collar se enganchó en mi botón. ¿Corto el hilo?", C: "No se mueva: su collar y mi botón se han hecho amigos. ¿Corto el hilo?" },
            reply: { A: "La señora ve el cuchillo. «¡Ay! ¡No, no! ¡Un robo!»", B: "La señora solo ve el cuchillo. «¡No! ¡Es un robo! ¡Socorro!»", C: "La señora no oye la palabra hilo: solo ve el cuchillo. «¡Ay, no! ¡Y yo que te tomé por alguien de la familia de Lucía!»" },
            mood: "scared", next: "calmar",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted quiere mucho a Lucía, ¿verdad?", B: "Se nota que quiere mucho a Lucía. ¿Hace mucho que no la ve?", C: "Por cómo habla de ella, Lucía debe de ser alguien importante. ¿Qué pasó?" },
            reply: { A: "Beatriz se pone triste. «Sí. Hoy es su cumpleaños. Y no hablamos desde hace veinte años.»", B: "La señora suspira. «Me llamo Beatriz. Hoy es el cumpleaños de Lucía y hace veinte años que no hablamos.»", C: "La señora se queda sin sonrisa. «Soy Beatriz. Hoy Lucía cumple sesenta. Y llevo veinte años sin felicitarla.»" },
            mood: "love", next: "secreto",
          },
        },
      },
      recuerdos: {
        who: "beatriz", mood: "smile",
        line: {
          A: "Beatriz habla y habla. «Tu madre y yo bailamos mucho en esta plaza. ¿Lucía todavía canta?»",
          B: "Beatriz se sienta en el borde de la fuente. «Tu madre y yo bailábamos aquí todos los sábados. ¿Sigue cantando en la ducha?»",
          C: "Beatriz señala la fuente con nostalgia. «Aquí tu madre se tiró al agua por una apuesta. Yo me quedé sin apuesta y sin dignidad. ¿Sigue cantando tan mal?»",
        },
        options: [
          {
            id: "verdad",
            say: { A: "Beatriz, tengo que decirle la verdad. No soy de su familia.", B: "Beatriz, perdone, pero tengo que decirle la verdad: no soy de la familia de Lucía.", C: "Beatriz, me sabe fatal cortarle el recuerdo, pero le debo la verdad: no soy de la familia de Lucía." },
            reply: { A: "Beatriz se ríe un poco. «Ay… Ya lo sé. Pero quiero creerlo.»", B: "Beatriz baja la mirada y sonríe. «Lo sé. En el fondo, lo sé. Pero me gustaba imaginarlo.»", C: "Beatriz suspira. «Lo sospechaba desde el principio. Pero hay noches en que una prefiere equivocarse.»" },
            mood: "sad", next: "secreto",
          },
          {
            id: "mentir",
            say: { A: "Sí, canta todos los días. ¡Muy mal!", B: "Sí, y cada vez peor. Toda la casa la escucha.", C: "Peor que nunca. Los vecinos ya han presentado una queja formal." },
            reply: { A: "Beatriz se ríe mucho. «¡Igual que antes! Dile que Beatriz la quiere.»", B: "Beatriz se ríe hasta llorar. «¡No cambia! Por favor, dile que Beatriz la quiere y que la extraña.»", C: "Beatriz se ríe con lágrimas en los ojos. «Entonces dile algo de mi parte: que Beatriz la perdona. Y que le pide perdón.»" },
            mood: "love", end: "mensaje",
          },
          {
            id: "porque",
            say: { A: "¿Por qué no la llama usted?", B: "¿Y por qué no la llama usted misma?", C: "Si la echa tanto de menos, ¿qué le impide llamarla?" },
            reply: { A: "Beatriz deja de sonreír. «Es difícil. Nos peleamos.»", B: "La sonrisa de Beatriz se apaga. «Porque nos peleamos. Hace mucho tiempo.»", C: "Beatriz tarda en contestar. «El orgullo, supongo. Que pesa más que este abrigo.»" },
            mood: "sad", next: "secreto",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Sus recuerdos son muy bonitos. Cuénteme más.", B: "Me encanta escucharla. Se nota que fue una amistad muy especial.", C: "Hablar con usted es como mirar un álbum de fotos. ¿Por qué se separaron?" },
            reply: { A: "Beatriz se emociona. «Gracias. Pero tengo un secreto: Lucía y yo no hablamos.»", B: "Beatriz te toma la mano. «Fue especial, sí. Por eso me duele tanto. Lucía y yo ya no nos hablamos.»", C: "Beatriz te aprieta la mano. «Una tontería, cariño. Una tontería que duró veinte años.»" },
            mood: "love", next: "secreto",
          },
        },
      },
      insiste: {
        who: "beatriz", mood: "surprised",
        line: {
          A: "Beatriz no te suelta. «¡Imposible! Tienes su sonrisa. ¿Seguro?»",
          B: "Beatriz te mira de arriba abajo. «¿Seguro que no? Tienes la misma sonrisa. ¡Y la misma forma de mover las manos!»",
          C: "Beatriz cruza los brazos, poco dispuesta a perder la discusión. «Las sonrisas no se heredan por casualidad, ¿sabes?»",
        },
        options: [
          {
            id: "firme",
            say: { A: "Sí, seguro. Lo siento mucho, señora.", B: "Seguro, de verdad. Lo siento, pero no soy quien busca.", C: "Le aseguro que no. Y lamento sinceramente no serlo." },
            reply: { A: "Beatriz se pone roja. «Ay, perdón. Qué vergüenza.»", B: "Beatriz se pone colorada y se arregla el abrigo. «Ay, perdona. Qué vergüenza. Ya veo mal de noche.»", C: "Beatriz se recompone con elegancia. «Disculpa. A cierta edad, una ve a quien quiere ver.»" },
            mood: "sad", end: "equivocada",
          },
          {
            id: "humor",
            say: { A: "Tengo una cara muy normal. ¡Me pasa mucho!", B: "A lo mejor tengo una cara muy común. Me pasa a menudo.", C: "Tengo una de esas caras que todo el mundo cree conocer. Es una maldición." },
            reply: { A: "Beatriz se ríe. «¡No es normal! Es la cara de Lucía. Bueno… la extraño.»", B: "Beatriz se ríe y luego suspira. «Común no, querida. Es que echo de menos a Lucía y la veo en todas partes.»", C: "Beatriz suelta una carcajada. «Maldición, dice. Lo que pasa es que yo veo a Lucía hasta en las farolas.»" },
            mood: "smile", next: "secreto",
          },
          {
            id: "cuando",
            say: { A: "¿Cuándo vio a Lucía la última vez?", B: "¿Cuándo fue la última vez que vio a Lucía?", C: "Dígame una cosa: ¿cuánto tiempo hace que no la ve?" },
            reply: { A: "Beatriz piensa. «Hace veinte años. Mucho tiempo.»", B: "Beatriz se queda callada. «Hace… veinte años. Madre mía, veinte años.»", C: "Beatriz hace la cuenta y se le nota en la cara. «Veinte años. Dicho en voz alta suena peor.»" },
            mood: "sad", next: "secreto",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "No soy su familia, pero me gusta hablar con usted.", B: "No soy de su familia, pero me encantaría escuchar su historia.", C: "No soy quien busca, pero si quiere, le presto mi cara un rato." },
            reply: { A: "Beatriz sonríe. «Qué amable. Lucía y yo… nos peleamos.»", B: "Beatriz se ríe y se le humedecen los ojos. «Qué amable eres. Lucía y yo nos peleamos hace años.»", C: "Beatriz se ríe, conmovida. «Prestada me sirve. Entonces te cuento lo que nunca le dije a ella.»" },
            mood: "love", next: "secreto",
          },
        },
      },
      secreto: {
        who: "beatriz", mood: "sad",
        line: {
          A: "Beatriz mira la fuente. «Lucía y yo nos peleamos por una tontería. Nunca le dije “perdón”.»",
          B: "Beatriz se sienta en un banco. «Nos peleamos por una tontería, un vestido prestado. Y nunca le dije “lo siento”.»",
          C: "Beatriz juega con el cierre del bolso. «Nos peleamos por un vestido. Un vestido, fíjate. Y ninguna de las dos quiso dar el primer paso.»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Todavía puede llamarla. Hoy es un buen día.", B: "Todavía está a tiempo. ¿Por qué no la llama esta noche?", C: "Veinte años es mucho, pero no es para siempre. ¿Y si la llama ahora, antes de pensarlo?" },
            reply: { A: "Beatriz saca el teléfono. «¿Ahora? Bueno… sí. Ahora.»", B: "Beatriz saca el teléfono con las manos temblando. «Tengo su número todavía. Nunca lo borré.»", C: "Beatriz saca el teléfono. «Nunca borré su número. Supongo que eso ya era una respuesta.»" },
            mood: "worried", end: "llama",
          },
          {
            id: "carta",
            say: { A: "Puede escribirle una carta.", B: "A lo mejor es más fácil escribirle una carta.", C: "Si la voz le falla, quizá una carta. Al papel se le dicen cosas que al teléfono no." },
            reply: { A: "Beatriz sonríe. «Una carta. Sí. Lucía ama las cartas.»", B: "A Beatriz le gusta la idea. «Una carta… A Lucía le encantaban. Esta noche la escribo.»", C: "Beatriz asiente despacio. «Una carta. Muy de nuestra época. Y así no me puede colgar.»" },
            mood: "smile", end: "carta",
          },
          {
            id: "consolar",
            say: { A: "Lo siento mucho. Es una historia triste.", B: "Lo siento mucho. Debe de ser difícil echarla de menos.", C: "Lo siento. Hay ausencias que pesan más que cualquier discusión." },
            reply: { A: "Beatriz te da la mano. «Gracias por escuchar. Buenas noches.»", B: "Beatriz te da una palmadita en la mano. «Gracias por escucharme, de verdad. Ya me siento mejor.»", C: "Beatriz te mira con cariño. «Eres un buen sustituto, ¿sabes? Gracias por escuchar a una vieja tonta.»" },
            mood: "smile", end: "consuelo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted es muy buena persona. Lucía tiene suerte.", B: "Usted es una persona muy cariñosa. Lucía tiene suerte de tenerla.", C: "Quien recuerda así a una amiga no la ha perdido del todo." },
            reply: { A: "Beatriz llora un poco. «Lucía tuvo un hijo ese año. Nunca lo conocí. Por eso te miro tanto.»", B: "Beatriz se emociona. «Ese año Lucía tuvo un hijo y yo nunca lo conocí. Por eso busco su cara en todos los jóvenes.»", C: "Beatriz se seca los ojos. «Ese año nació su hijo y yo no fui a conocerlo. Llevo veinte años buscándolo en caras ajenas.»" },
            mood: "love", end: "abrazo",
          },
        },
      },
      calmar: {
        who: "beatriz", mood: "scared",
        line: {
          A: "Beatriz tiene miedo. Te da su bolso. «¡Toma! ¡Pero déjame en paz!»",
          B: "Beatriz te ofrece el bolso con el brazo estirado. «¡Toma, llévatelo! ¡Pero no me hagas nada!»",
          C: "Beatriz te tiende el bolso con el brazo estirado y la barbilla alta. «Llévatelo. Pero que conste que me has decepcionado.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "¡No, no! No quiero su bolso. Lo guardo. Perdón.", B: "¡No quiero su bolso! Lo guardo ahora mismo. Perdone el susto.", C: "Guarde su bolso, por favor. Esto ha sido un malentendido terrible y lo guardo ya." },
            reply: { A: "Beatriz respira. «Ay… Qué susto. Me voy al hotel.»", B: "Beatriz respira, pero se aleja hacia el hotel. «Bueno… Perdona tú también. Buenas noches.»", C: "Beatriz recupera la compostura. «Disculpas aceptadas. Pero yo me vuelvo al hotel, que ya tuve bastante emoción.»" },
            mood: "worried", end: "susto",
          },
          {
            id: "explicar",
            say: { A: "Es para mi seguridad. No soy un ladrón.", B: "Tranquila, no soy un ladrón. Lo llevo por seguridad.", C: "Le juro que no soy un ladrón. Es… una larga historia." },
            reply: { A: "Beatriz grita: «¡Sebastián! ¡Llame a la policía!»", B: "Beatriz no te escucha. Llama al portero del hotel. «¡Sebastián! ¡La policía, por favor!»", C: "«Las historias largas se las cuentas a la policía», dice Beatriz, y llama al portero del hotel a gritos." },
            mood: "scared", end: "policia",
          },
          {
            id: "broma",
            say: { A: "¿Ladrón? Pero usted dice que soy de la familia de Lucía.", B: "¿Un ladrón? Hace un minuto era de la familia de Lucía.", C: "Hace un minuto era el hijo de su mejor amiga. Qué rápido caen las familias." },
            reply: { A: "Beatriz se ríe, nerviosa. «Es verdad… Perdón. Tienes su humor.»", B: "Beatriz se ríe, todavía nerviosa. «Es verdad… Perdona. Tienes el mismo humor que ella.»", C: "Beatriz suelta una risa nerviosa. «Touché. Lucía también me ganaba siempre las discusiones.»" },
            mood: "smile", next: "recuerdos",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón, señora. Tranquila. Solo quiero hablar.", B: "Perdóneme, de verdad. Solo quiero escuchar su historia.", C: "Perdóneme. Empecé fatal, pero su historia me interesa de verdad." },
            reply: { A: "Beatriz baja el bolso. «Bueno… Lucía y yo no hablamos. Es mi secreto.»", B: "Beatriz baja el bolso poco a poco. «Bueno… Te la cuento. Lucía y yo llevamos años sin hablarnos.»", C: "Beatriz baja el bolso y suspira. «De acuerdo. Te cuento algo que no sabe nadie de este barrio.»" },
            mood: "love", next: "secreto",
          },
        },
      },
      "cuchillo-inicio": {
        who: "beatriz", mood: "terror",
        line: {
          A: "Una señora elegante te toma del brazo… y ve tu cuchillo. Grita y retrocede. «¡Ay! ¿Qué haces con ese cuchillo? ¡Sebastián! ¡Sebastián!»",
          B: "Una señora elegante te sujeta del brazo, ve el cuchillo en tu otra mano y suelta un grito que cruza la plaza. «¿Estás loco? ¿Qué haces con ese cuchillo? ¡Sebastián, llame a la policía!»",
          C: "Una señora de abrigo granate te toma del brazo con familiaridad, ve el cuchillo y retrocede como si el suelo quemara. «¿Estás loco? ¿A quién se le ocurre pasear con un cuchillo por esta plaza? ¡Sebastián!»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Tranquila, señora. Lo guardo. No es para usted.", B: "Tranquila, señora, lo guardo ahora mismo. No es para usted.", C: "Cálmese, señora. Lo guardo ahora mismo; no tiene nada que ver con usted." },
            reply: { A: "Beatriz respira, pero no se acerca. «Guárdalo bien. Me has dado un susto de muerte.»", B: "Beatriz respira hondo sin acercarse. «Guárdalo bien guardado. Casi me da algo. ¿Y por qué me tomé la libertad de agarrarte? Porque tienes la cara de Lucía.»", C: "Beatriz respira, con la mano en el pecho. «Guárdalo donde no lo vea. Y pensar que te agarré porque tienes la cara exacta de Lucía…»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "porque",
            say: { A: "¿Por qué me toma del brazo? ¡No la conozco!", B: "¿Y usted por qué me agarra del brazo? ¡No la conozco de nada!", C: "¿Y usted por qué se cuelga del brazo de un desconocido en plena noche?" },
            reply: { A: "Beatriz grita más. «¡Un ladrón con cuchillo! ¡Policía!» El portero viene corriendo.", B: "Beatriz grita todavía más. «¡Un ladrón con cuchillo! ¡Policía!» El portero del hotel ya viene corriendo.", C: "Beatriz sube el volumen. «¡Un ladrón con cuchillo, y encima insolente! ¡Policía!» El portero del hotel cruza la calle a la carrera." },
            mood: "furious", end: "cuchillo-policia",
          },
          {
            id: "collar",
            say: { A: "Su collar está en mi botón. Solo quiero cortar el hilo.", B: "Es que su collar se enganchó en mi botón. Solo quiero cortar el hilo, nada más.", C: "Su collar se ha enredado en mi botón. El cuchillo es para el hilo, no para usted." },
            reply: { A: "Beatriz mira el collar. «¿El hilo? Ay… Pero baja eso, por favor. Despacio.»", B: "Beatriz mira el collar enredado. «¿El hilo? Ay, Dios… Bueno. Pero baja eso despacio, que me tiemblan las piernas.»", C: "Beatriz mira el collar y luego el cuchillo. «El hilo. Claro. Pues córtalo despacio, que a mi edad los sustos se cobran caros.»" },
            mood: "scared", next: "cuchillo-calma",
          },
        ],
      },
      "cuchillo-calma": {
        who: "beatriz", mood: "worried",
        line: {
          A: "Beatriz se sienta en el banco. Está pálida. «Ya está. Sin cuchillo. Ahora dime: ¿tu madre se llama Lucía?»",
          B: "Beatriz se deja caer en el banco, pálida. «Bueno. Cuchillo guardado, señora viva. Ahora contéstame: ¿tu madre se llama Lucía Ferrer?»",
          C: "Beatriz se sienta en el banco con la dignidad algo descolocada. «Vale la pena que sepas que casi me matas del susto. Y ahora, por favor: ¿eres de Lucía Ferrer o no?»",
        },
        options: [
          {
            id: "no",
            say: { A: "No, señora. No conozco a ninguna Lucía. Perdón por el susto.", B: "No, señora. No conozco a ninguna Lucía. Y perdone el susto del cuchillo.", C: "No, señora. No hay ninguna Lucía en mi vida. Y le pido perdón por el cuchillo." },
            reply: { A: "Beatriz suspira. «Entonces un desconocido con cuchillo me ha dado el mejor susto del año. Me voy al hotel.»", B: "Beatriz suspira y se levanta. «Pues un desconocido con cuchillo me ha dado el mejor susto del año. Me vuelvo al hotel.»", C: "Beatriz se levanta, recompuesta. «Resumen de la noche: un desconocido con cuchillo y sin Lucía. Me retiro al hotel.»" },
            mood: "sad", end: "cuchillo-susto",
          },
          {
            id: "quien",
            say: { A: "¿Quién es Lucía? Usted la quiere mucho, ¿no?", B: "¿Quién es Lucía? Se nota que la quiere mucho.", C: "¿Quién es esa Lucía, para que me agarre del brazo sin mirar lo que llevo en la mano?" },
            reply: { A: "Beatriz sonríe un poco. «Mi mejor amiga. Nos peleamos hace veinte años. Y hoy es su cumpleaños.»", B: "Beatriz sonríe por primera vez. «Mi mejor amiga. Nos peleamos hace veinte años por un vestido, y hoy cumple sesenta.»", C: "Beatriz sonríe, por fin. «Mi mejor amiga. Veinte años sin hablarnos por un vestido prestado. Y hoy cumple sesenta.»" },
            mood: "sad", next: "secreto",
          },
          {
            id: "disculpa",
            say: { A: "Perdón otra vez. ¿Está bien? ¿Quiere agua?", B: "Perdóneme otra vez. ¿Se encuentra bien? ¿Le pido agua en el hotel?", C: "Le pido perdón de nuevo. ¿Se encuentra bien? Puedo pedirle un vaso de agua en el hotel." },
            reply: { A: "Beatriz te mira. «Eres amable. Para ser alguien con cuchillo. Dile a Sebastián que me traiga un té.»", B: "Beatriz te mira con otros ojos. «Eres amable, para ser alguien que saca cuchillos. Dile a Sebastián que me traiga un té.»", C: "Beatriz te observa, divertida a su pesar. «Amable y armado: una combinación rara. Dile a Sebastián que me traiga un té con mucha azúcar.»" },
            mood: "smile", end: "cuchillo-te",
          },
        ],
      },
      "pistola-inicio": {
        who: "beatriz", mood: "terror",
        line: {
          A: "Una señora elegante te toma del brazo y ve tu pistola. Levanta las manos y el bolso. «No, por favor. Toma el bolso. No me hagas nada.»",
          B: "Una señora elegante te sujeta del brazo, ve la pistola en tu cintura y levanta las manos, con el bolso colgando. «No, por favor. Toma el bolso, toma lo que quieras. No me hagas nada.»",
          C: "Una señora de abrigo granate te toma del brazo, ve la pistola y levanta las manos con el bolso colgando de la muñeca. «No, por favor. Llévate el bolso. Hay poco dinero, pero no me hagas nada.»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Baje las manos, señora. No quiero su bolso.", B: "Baje las manos, señora, por favor. No quiero su bolso.", C: "Baje las manos, señora. Su bolso no me interesa en absoluto." },
            reply: { A: "Beatriz baja las manos despacio. «¿Entonces por qué llevas un arma? ¿Por qué?»", B: "Beatriz baja las manos muy despacio. «¿Entonces por qué llevas un arma? En este barrio no se ve eso.»", C: "Beatriz baja las manos centímetro a centímetro. «¿Y entonces para qué llevas un arma? En este barrio las cosas se arreglan con abogados.»" },
            mood: "scared", next: "pistola-porque",
          },
          {
            id: "lucia",
            say: { A: "Tranquila. Usted me habló de Lucía. ¿Quién es?", B: "Tranquila. Usted me paró por Lucía. ¿Quién es Lucía?", C: "Tranquilícese. Me ha parado por una tal Lucía, ¿verdad? Cuénteme quién es." },
            reply: { A: "Beatriz tiembla. «Lucía… mi amiga. Tienes su cara. Pero ella no llevaba pistolas.»", B: "Beatriz tiembla, con las manos todavía a media altura. «Mi mejor amiga. Tienes su misma cara… pero Lucía nunca llevó una pistola.»", C: "Beatriz contesta sin bajar las manos del todo. «Mi mejor amiga. Tienes su cara exacta. Aunque Lucía, en sesenta años, jamás llevó una pistola.»" },
            mood: "scared", next: "pistola-porque",
          },
          {
            id: "seguridad",
            say: { A: "Es por seguridad. La ciudad es peligrosa de noche.", B: "Es solo por seguridad. La ciudad es peligrosa de noche.", C: "Es una medida de seguridad. Esta ciudad, de noche, no es lo que parece." },
            reply: { A: "Beatriz grita: «¡Sebastián! ¡Tiene una pistola!» Un coche de policía dobla la esquina.", B: "Beatriz no espera más: «¡Sebastián! ¡Tiene una pistola!» Un coche de policía dobla la esquina con las luces encendidas.", C: "Beatriz no se lo piensa: «¡Sebastián! ¡Una pistola!» Un coche patrulla dobla la esquina con las luces encendidas." },
            mood: "terror", end: "pistola-patrulla",
          },
        ],
      },
      "pistola-porque": {
        who: "beatriz", mood: "worried",
        line: {
          A: "Beatriz mira la pistola y luego tu cara. «Guarda eso, por favor. Y dime la verdad: ¿eres de la familia de Lucía o eres un ladrón?»",
          B: "Beatriz mira la pistola y luego tu cara, una y otra vez. «Guarda eso, por favor. Y contéstame: ¿eres de la familia de Lucía o eres un ladrón?»",
          C: "Beatriz alterna la mirada entre la pistola y tu cara, como si no pudiera reconciliarlas. «Guarda eso, por favor. Y dime la verdad: ¿familia de Lucía o ladrón? No hay tercera opción.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. No soy ladrón ni familia de Lucía. Solo paso por aquí.", B: "La guardo. No soy ni un ladrón ni familia de Lucía. Solo pasaba por aquí.", C: "La guardo. Ni ladrón ni pariente de Lucía: un simple paseante con una mala idea en la cintura." },
            reply: { A: "Beatriz respira. «Pues vete, por favor. Hoy ya no quiero más sorpresas.»", B: "Beatriz respira por fin. «Pues sigue tu camino, por favor. Con la pistola tapada. Hoy ya no quiero más sorpresas.»", C: "Beatriz exhala. «Entonces sigue tu camino, con eso bien tapado. Mi cuota de sorpresas se ha agotado por esta noche.»" },
            mood: "worried", end: "pistola-adios",
          },
          {
            id: "broma",
            say: { A: "Hace un minuto era de la familia de Lucía. ¡Qué rápido cambia!", B: "Hace un minuto era de la familia de Lucía. Qué rápido cambian las cosas.", C: "Hace un minuto era el hijo de su mejor amiga. Qué rápido se pierde una familia." },
            reply: { A: "Beatriz no se ríe. «Con una pistola no hay bromas. ¡Sebastián!» Llega un coche de policía.", B: "Beatriz no se ríe nada. «Con una pistola no se bromea, jovencito. ¡Sebastián!» Un coche de policía frena en la esquina.", C: "Beatriz no sonríe ni un poco. «Con un arma en la cintura, el humor se te acaba. ¡Sebastián!» Un coche patrulla frena en la esquina." },
            mood: "furious", end: "pistola-patrulla",
          },
          {
            id: "historia",
            say: { A: "Perdón. La guardo. Cuénteme de Lucía. ¿Se pelearon?", B: "Perdóneme. La guardo ya. Cuénteme de Lucía: ¿qué pasó entre ustedes?", C: "Le pido perdón. Guardada. Ahora cuénteme de Lucía: una cara así no se recuerda por nada." },
            reply: { A: "Beatriz se sienta, cansada. «Nos peleamos hace veinte años. Por una tontería.»", B: "Beatriz se sienta en el banco, agotada por el susto. «Nos peleamos hace veinte años. Por una tontería. Y nunca le he pedido perdón.»", C: "Beatriz se sienta, vencida por el susto. «Veinte años sin hablarnos por una tontería. Supongo que la pistola me ha quitado las ganas de fingir.»" },
            mood: "sad", next: "secreto",
          },
        ],
      },
      "granada-inicio": {
        who: "beatriz", mood: "terror",
        line: {
          A: "Una señora elegante te toma del brazo y ve la granada en tu bolsillo. Grita muy fuerte. «¡Una bomba! ¡Sebastián! ¡Una bomba en la plaza!»",
          B: "Una señora elegante te sujeta del brazo, ve la granada en tu bolsillo y suelta un grito que enciende tres ventanas del hotel. «¡Una bomba! ¡Sebastián! ¡Hay una bomba en la plaza!»",
          C: "Una señora de abrigo granate te toma del brazo, repara en la granada de tu bolsillo y lanza un grito que despierta medio hotel. «¡Una bomba! ¡Sebastián! ¡Evacúen el Imperial!»",
        },
        options: [
          {
            id: "falsa",
            say: { A: "¡No grite! No es de verdad. Es… un adorno.", B: "¡No grite, por favor! No es de verdad. Es un adorno, un recuerdo.", C: "¡No grite! No es de verdad. Es un recuerdo, una pieza decorativa absurda." },
            reply: { A: "Beatriz no te cree. Los huéspedes salen del hotel en pijama. «¿Un adorno? ¡Sebastián, saque a todo el mundo!»", B: "Beatriz no te cree ni un poco. Los huéspedes ya salen del hotel en pijama. «¿Un adorno? ¡Sebastián, saque a todo el mundo!»", C: "Beatriz no te cree. Tras ella, los huéspedes del Imperial salen en pijama y bata de seda. «¿Decorativa? ¡Sebastián, desaloje el hotel!»" },
            mood: "scared", next: "granada-evacuacion",
          },
          {
            id: "lucia",
            say: { A: "¿Qué bomba? Usted dijo que soy de la familia de Lucía.", B: "¿Qué bomba? Hace un segundo era de la familia de Lucía.", C: "¿Bomba? Hace un segundo yo era de la familia de Lucía. Decídase." },
            reply: { A: "Beatriz grita y corre al hotel. «¡Lucía no tenía bombas!» Suena una sirena.", B: "Beatriz grita y corre hacia el hotel. «¡Lucía nunca tuvo bombas!» A lo lejos empieza a sonar una sirena.", C: "Beatriz echa a correr hacia el hotel. «¡Lucía jamás tuvo una bomba!» A lo lejos, una sirena se despierta." },
            mood: "terror", end: "granada-corre",
          },
          {
            id: "calma",
            say: { A: "Tranquila. Es mía. No explota. Hablamos un momento, ¿sí?", B: "Tranquila, señora. Es mía y no explota. ¿Hablamos un momento, con calma?", C: "Tranquila, señora. Es mía, no explota, y preferiría hablar de esto sin público." },
            reply: { A: "Beatriz se tapa la boca. Sebastián saca a los huéspedes. «¿No explota? ¿Y tú cómo lo sabes?»", B: "Beatriz se tapa la boca con las dos manos. Sebastián empieza a sacar a los huéspedes. «¿No explota? ¿Y cómo lo sabes tú?»", C: "Beatriz se tapa la boca. Sebastián organiza ya la salida de los huéspedes. «¿No explota? ¿Y esa certeza de dónde la sacas?»" },
            mood: "scared", next: "granada-evacuacion",
          },
        ],
      },
      "granada-evacuacion": {
        who: "beatriz", mood: "scared",
        line: {
          A: "La plaza se llena de gente en pijama. Beatriz te mira desde lejos. «Explica eso. Ahora. ¿Por qué llevas una granada?»",
          B: "La plaza se llena de huéspedes en pijama y portero con linterna. Beatriz te habla desde una distancia prudente. «Explícate. Ahora. ¿Por qué llevas una granada?»",
          C: "La plaza se puebla de huéspedes en bata, un portero con linterna y un murmullo de escándalo. Beatriz te interroga a diez metros. «Explícate, y que sea bueno. ¿Por qué llevas una granada?»",
        },
        options: [
          {
            id: "herencia",
            say: { A: "Es de mi abuelo. Es vieja. No funciona.", B: "Es de mi abuelo. Es muy vieja y no funciona desde hace años.", C: "Es una herencia de mi abuelo. Lleva décadas sin funcionar, como él." },
            reply: { A: "Beatriz se ríe, nerviosa. «¿De tu abuelo? Lucía también tenía un abuelo loco. ¡Sebastián, es falsa!»", B: "Beatriz suelta una risa nerviosa. «¿De tu abuelo? El abuelo de Lucía también guardaba locuras. ¡Sebastián, que es falsa!»", C: "Beatriz se ríe, entre el pánico y el alivio. «¿Herencia? El abuelo de Lucía guardaba una bayoneta en el paragüero. ¡Sebastián, es de utilería!»" },
            mood: "laugh", end: "granada-broma",
          },
          {
            id: "no-se",
            say: { A: "No sé si es de verdad. Nadie lo sabe.", B: "La verdad, no sé si es de verdad. Nadie quiere averiguarlo.", C: "Sinceramente, no sé si es real. Y nadie se ha ofrecido a comprobarlo." },
            reply: { A: "Beatriz grita otra vez. Un helicóptero aparece sobre el hotel con una luz enorme.", B: "Beatriz vuelve a gritar. Sobre el hotel aparece un helicóptero con un foco que ilumina toda la plaza.", C: "Beatriz vuelve a gritar. Un helicóptero asoma sobre el Imperial y su foco convierte la plaza en un escenario." },
            mood: "terror", end: "granada-helicoptero",
          },
          {
            id: "irme",
            say: { A: "Mejor me voy. Perdón por el susto.", B: "Mejor me voy ahora mismo. Perdón por el susto.", C: "Creo que lo más sensato es que me retire. Disculpen el susto." },
            reply: { A: "Beatriz grita: «¡Se escapa!» Un helicóptero te sigue con la luz.", B: "Beatriz señala: «¡Se escapa con la bomba!» Un helicóptero aparece y te sigue con su foco.", C: "Beatriz te señala: «¡Se escapa con la bomba!» Un helicóptero surge sobre los tejados y te persigue con el foco." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "gas-inicio": {
        who: "beatriz", mood: "surprised",
        line: {
          A: "Una señora elegante te toma del brazo. Tú levantas el gas pimienta. Ella saca otro de su bolso. «¿Gas pimienta? Yo también. ¡Baja el tuyo primero!»",
          B: "Una señora elegante te sujeta del brazo y tú levantas el gas pimienta. Ella, sin soltarte, saca otro del bolso. «¿Gas pimienta? Yo también llevo. Baja el tuyo primero.»",
          C: "Una señora de abrigo granate te toma del brazo; tú levantas el gas pimienta y ella, con pasmosa rapidez, saca el suyo del bolso. «¿Gas pimienta? En este barrio todas llevamos. Baja el tuyo primero.»",
        },
        options: [
          {
            id: "juntos",
            say: { A: "A la de tres bajamos los dos. Uno, dos…", B: "Los bajamos los dos a la vez. A la de tres: uno, dos…", C: "Propongo un desarme simultáneo. A la de tres: uno, dos…" },
            reply: { A: "Beatriz baja el suyo. «Tres. Bueno. Me llamo Beatriz. Te agarré porque tienes la cara de Lucía.»", B: "Beatriz baja el suyo despacio. «Tres. Bien. Soy Beatriz. Te agarré porque tienes la cara de mi amiga Lucía. Y porque en este barrio hay que ser rápida.»", C: "Beatriz baja el suyo con elegancia. «Tres. Desarme completado. Soy Beatriz. Te agarré porque tienes la cara de mi amiga Lucía, y porque aquí la rapidez es un deporte.»" },
            mood: "smile", next: "gas-tregua",
          },
          {
            id: "suelte",
            say: { A: "¡Suélteme el brazo! ¡Ahora!", B: "¡Suélteme el brazo ahora mismo!", C: "Suélteme el brazo. Es la última vez que lo pido." },
            reply: { A: "Beatriz aprieta el bote. Un poco de gas sale al aire. Los dos tosen. «¡Ay! ¡Perdón!»", B: "Beatriz aprieta el bote por los nervios. Una nube de gas sale al aire y los dos empiezan a toser. «¡Ay, perdón, perdón!»", C: "A Beatriz se le escapa una rociada por los nervios. Una nube picante los envuelve y los dos tosen sin dignidad. «¡Ay, perdón!»" },
            mood: "pain", end: "gas-nube",
          },
          {
            id: "prudente",
            say: { A: "¿Usted también lleva? Qué prudente.", B: "¿Usted también lleva gas pimienta? Qué prudente.", C: "¿Usted también va armada de pimienta? Qué barrio tan prudente." },
            reply: { A: "Beatriz sonríe sin bajar el gas. «Desde que robaron a mi vecina. Me llamo Beatriz. ¿Y tú por qué llevas?»", B: "Beatriz sonríe, con el gas todavía en alto. «Desde que le robaron a mi vecina en esta misma plaza. Soy Beatriz. ¿Y tú por qué lo llevas?»", C: "Beatriz sonríe sin bajar la guardia. «Desde que asaltaron a mi vecina bajo este mismo tilo. Beatriz, encantada. ¿Y tú, de quién te defiendes?»" },
            mood: "smile", next: "gas-tregua",
          },
        ],
      },
      "gas-tregua": {
        who: "beatriz", mood: "smile",
        line: {
          A: "Beatriz guarda el gas. «Mi amiga Lucía decía que yo veía ladrones en todas partes. Hoy es su cumpleaños. Y no nos hablamos.»",
          B: "Beatriz guarda el gas en el bolso. «Lucía siempre decía que yo veía ladrones hasta en los faroles. Hoy es su cumpleaños y hace veinte años que no nos hablamos.»",
          C: "Beatriz guarda el gas con un suspiro. «Lucía decía que yo veía atracadores hasta en los tilos. Hoy cumple sesenta y llevamos veinte años sin hablarnos. Quizá por eso te agarré.»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Llámela hoy. Dígale que ya no ve ladrones.", B: "Llámela esta noche. Dígale que ya casi no ve ladrones.", C: "Llámela hoy mismo. Dígale que ha bajado el gas por un desconocido, y eso ya es progreso." },
            reply: { A: "Beatriz se ríe. «Casi no. Bueno… la llamo.» Saca el teléfono.", B: "Beatriz se ríe. «Casi no, dices. Bueno… la llamo. Y le cuento lo del gas, que le va a encantar.» Saca el teléfono.", C: "Beatriz se ríe de verdad. «Progreso, dice. Está bien: la llamo. Lo del gas se lo cuento primero, para que se ría.» Saca el teléfono." },
            mood: "love", end: "llama",
          },
          {
            id: "grupo",
            say: { A: "¿Hay más vecinos con gas pimienta? ¿Hacen un grupo?", B: "¿Y hay más vecinos con gas pimienta? ¿Tienen un grupo o algo?", C: "¿Hay más vecinas armadas de pimienta en el barrio? ¿Es un club?" },
            reply: { A: "Beatriz sonríe. «Somos seis. Nos reunimos los martes. Ven, tienes buen reflejo.»", B: "Beatriz sonríe, orgullosa. «Somos seis vecinas. Nos reunimos los martes en el hotel. Ven: tienes buenos reflejos.»", C: "Beatriz se infla de orgullo. «Seis vecinas, los martes, en el salón del Imperial. Quedas invitado: tus reflejos son de nivel.»" },
            mood: "smile", end: "gas-club",
          },
          {
            id: "seguro",
            say: { A: "El barrio es seguro, señora. No necesita gas.", B: "Este barrio es muy seguro, señora. No necesita el gas.", C: "Este es el barrio más seguro de la ciudad, señora. El gas sobra." },
            reply: { A: "Beatriz levanta una ceja. «¿Seguro? ¿Y tú por qué lo llevas?» Te mira hasta que te vas.", B: "Beatriz levanta una ceja. «¿Seguro? ¿Y entonces por qué lo llevas tú?» Y no te quita el ojo de encima hasta que te alejas.", C: "Beatriz arquea una ceja perfecta. «¿Seguro? ¿Y el tuyo, entonces, es de adorno?» Te vigila hasta que desapareces de la plaza." },
            mood: "surprised", end: "gas-vigilada",
          },
        ],
      },
      "lapiz-inicio": {
        who: "beatriz", mood: "surprised",
        line: {
          A: "Una señora elegante te toma del brazo y ve tu lápiz. «¡Un lápiz detrás de la oreja! ¡Como Lucía! ¿Tu madre se llama Lucía?»",
          B: "Una señora elegante te sujeta del brazo y se fija en tu lápiz. «¡Un lápiz detrás de la oreja, como Lucía! Eres de la familia de Lucía Ferrer, ¿verdad?»",
          C: "Una señora de abrigo granate te toma del brazo y descubre tu lápiz con cara de triunfo. «¡Un lápiz detrás de la oreja! Lucía Ferrer no salía de casa sin uno. Eres de los suyos, no me lo niegues.»",
        },
        options: [
          {
            id: "escribir",
            say: { A: "No conozco a Lucía. Pero ¿quiere escribirle algo? Tengo lápiz.", B: "No conozco a ninguna Lucía. Pero si quiere escribirle algo, tengo lápiz y papel.", C: "No conozco a ninguna Lucía, pero el lápiz está a su disposición si quiere escribirle algo." },
            reply: { A: "Beatriz se queda quieta. «¿Escribirle? Hace veinte años que no le escribo. Me llamo Beatriz.»", B: "Beatriz se queda muy quieta. «¿Escribirle? Hace veinte años que no le escribo ni una línea. Me llamo Beatriz, por cierto.»", C: "Beatriz se queda inmóvil, con los ojos en el lápiz. «¿Escribirle? Llevo veinte años sin escribirle una sola línea. Soy Beatriz, disculpa.»" },
            mood: "sad", next: "lapiz-nota",
          },
          {
            id: "dibujar",
            say: { A: "No soy de su familia. Pero puedo dibujarla, si quiere.", B: "No soy de su familia, pero si quiere la dibujo aquí mismo.", C: "No soy de su familia, pero puedo hacerle un retrato aquí mismo, bajo el tilo." },
            reply: { A: "Beatriz se ríe. «¿Un retrato? ¡Qué cosa! Bueno. Mándaselo a Lucía. Me llamo Beatriz.»", B: "Beatriz se ríe, sorprendida. «¿Un retrato a estas horas? Bueno… Hazlo. Y se lo mandas a Lucía. Soy Beatriz.»", C: "Beatriz se ríe, encantada. «¿Un retrato nocturno? Adelante. Y que le llegue a Lucía, para que vea cómo envejezco. Soy Beatriz.»" },
            mood: "smile", next: "lapiz-retrato",
          },
          {
            id: "profe",
            say: { A: "Soy profesor. Por eso llevo lápiz. No conozco a Lucía.", B: "Es que soy profesor; por eso llevo lápiz. Pero no conozco a ninguna Lucía.", C: "Soy profesor, de ahí el lápiz. Lo de Lucía, me temo, es pura coincidencia." },
            reply: { A: "Beatriz suspira. «Lucía también era profesora. Me llamo Beatriz. Nos peleamos hace veinte años.»", B: "Beatriz suspira. «Lucía también era profesora. Yo soy Beatriz. Nos peleamos hace veinte años por una tontería.»", C: "Beatriz suspira hondo. «Lucía también daba clase. Soy Beatriz. Nos peleamos hace veinte años por una tontería con nombre de vestido.»" },
            mood: "sad", next: "secreto",
          },
        ],
      },
      "lapiz-nota": {
        who: "beatriz", mood: "sad",
        line: {
          A: "Beatriz se sienta en el banco y mira tu lápiz. «Escribe tú. Yo dicto. Pero no sé cómo empezar.»",
          B: "Beatriz se sienta en el banco y señala tu lápiz. «Escribe tú, que a mí me tiembla la mano. Yo dicto. Aunque no sé cómo se empieza después de veinte años.»",
          C: "Beatriz se sienta en el banco y te cede el lápiz con un gesto. «Escribe tú; a mí me tiembla el pulso. Yo dicto. Lo difícil es la primera frase después de veinte años.»",
        },
        options: [
          {
            id: "querida",
            say: { A: "Empezamos fácil: «Querida Lucía, feliz cumpleaños».", B: "Empecemos por lo fácil: «Querida Lucía, feliz cumpleaños». ¿Sigo?", C: "Empecemos por lo sencillo: «Querida Lucía, feliz cumpleaños». El resto saldrá solo." },
            reply: { A: "Beatriz asiente. «Feliz cumpleaños… y perdón por el vestido.» Escribes. Ella llora un poco.", B: "Beatriz asiente despacio. «Feliz cumpleaños… y perdón por el vestido. Fue una tontería.» Escribes, y ella llora un poco.", C: "Beatriz asiente. «Feliz cumpleaños. Y perdón por el vestido: era una tontería y la convertimos en veinte años.» Escribes mientras ella llora." },
            mood: "love", end: "lapiz-dictado",
          },
          {
            id: "direccion",
            say: { A: "¿Sabe su dirección? Escribo el sobre primero.", B: "¿Todavía sabe su dirección? Escribo primero el sobre.", C: "¿Conserva su dirección? Empecemos por el sobre; da menos miedo." },
            reply: { A: "Beatriz la dice sin pensar. «Calle de los Tilos, 7. La sé de memoria.»", B: "Beatriz la recita sin pensar. «Calle de los Tilos, 7, segundo piso. Me la sé de memoria, fíjate.»", C: "Beatriz la recita como un poema. «Calle de los Tilos, 7, segundo. Veinte años y no se me ha borrado ni el piso.»" },
            mood: "sad", end: "lapiz-dictado",
          },
          {
            id: "animar",
            say: { A: "Mejor llámela. Es su cumpleaños. El lápiz es para después.", B: "¿Y si mejor la llama? Es su cumpleaños. El lápiz lo usamos después.", C: "Quizá hoy sea día de voz y no de lápiz: es su cumpleaños. Llámela." },
            reply: { A: "Beatriz mira el lápiz y luego el teléfono. «Tienes razón. Primero la voz.»", B: "Beatriz mira el lápiz, luego el teléfono. «Tienes razón. Hoy la voz, mañana la carta.»", C: "Beatriz mira el lápiz y después el teléfono, como si pesaran lo mismo. «Tienes razón. Hoy la voz; mañana, la carta.»" },
            mood: "worried", end: "llama",
          },
        ],
      },
      "lapiz-retrato": {
        who: "beatriz", mood: "smile",
        line: {
          A: "Beatriz se sienta muy recta en el banco. «Sácame guapa. Y no dibujes las arrugas.»",
          B: "Beatriz se sienta muy recta en el banco, con el bolso en las rodillas. «Sácame favorecida. Las arrugas las dejas para otro retrato.»",
          C: "Beatriz se sienta en el banco con la espalda de una reina. «Favorecida, por favor. Las arrugas son confidenciales.»",
        },
        options: [
          {
            id: "rapido",
            say: { A: "Listo. Mire: usted, el tilo y el hotel.", B: "Ya está. Mire: usted, el tilo y el hotel detrás.", C: "Terminado. Usted, el tilo, el Imperial al fondo y ni una arruga." },
            reply: { A: "Beatriz mira el dibujo. «¡Qué joven! Se lo mando a Lucía. Que vea que estoy bien.»", B: "Beatriz mira el dibujo y sonríe. «¡Pero si parezco joven! Se lo mando a Lucía mañana. Que vea que estoy bien. Y que la extraño.»", C: "Beatriz contempla el dibujo. «Me has quitado veinte años. Justo los que llevo sin hablar con Lucía. Se lo mando mañana.»" },
            mood: "love", end: "lapiz-envio",
          },
          {
            id: "lucia",
            say: { A: "¿Y Lucía? ¿Cómo era? La dibujo también.", B: "¿Y cómo era Lucía? Descríbamela y la dibujo al lado.", C: "Descríbame a Lucía. La pongo a su lado, como antes." },
            reply: { A: "Beatriz cierra los ojos. «Pelo corto, risa grande. Siempre con un lápiz. Nos peleamos por un vestido.»", B: "Beatriz cierra los ojos. «Pelo corto, risa enorme, un lápiz detrás de la oreja. Nos peleamos por un vestido prestado, ¿te lo puedes creer?»", C: "Beatriz cierra los ojos para verla. «Pelo corto, una risa que se oía desde la fuente y el lápiz siempre en la oreja. Nos separó un vestido prestado. Un vestido.»" },
            mood: "sad", next: "secreto",
          },
          {
            id: "arrugas",
            say: { A: "Las arrugas son bonitas. Las dibujo.", B: "Las arrugas son bonitas, Beatriz. Las voy a dibujar.", C: "Las arrugas son el mejor trazo del retrato. Van todas." },
            reply: { A: "Beatriz se ríe. «¡Qué atrevimiento! Lucía habría dicho lo mismo.» Mira el dibujo con cariño.", B: "Beatriz se ríe a carcajadas. «¡Qué atrevimiento! Eso lo habría dicho Lucía.» Mira el dibujo con cariño y se lo guarda.", C: "Beatriz se ríe sin reservas. «Qué atrevimiento. Lucía habría dicho exactamente eso.» Guarda el dibujo en el bolso, como un tesoro." },
            mood: "love", end: "lapiz-envio",
          },
        ],
      },
      "libro-inicio": {
        who: "beatriz", mood: "surprised",
        line: {
          A: "Una señora elegante te toma del brazo y ve tu libro. Lo agarra. «¡Este libro! ¡Es el libro de Lucía! ¿Qué haces con un libro en la calle de noche?»",
          B: "Una señora elegante te sujeta del brazo, ve tu libro y te lo quita de la mano. «¡Este libro! ¡Es el libro favorito de Lucía! ¿Y qué haces tú con un libro en la calle a estas horas?»",
          C: "Una señora de abrigo granate te toma del brazo, ve tu libro y se apodera de él sin pedir permiso. «¡Este libro! ¡El libro de cabecera de Lucía Ferrer! ¿Qué hace alguien con un libro en la calle a medianoche?»",
        },
        options: [
          {
            id: "devuelva",
            say: { A: "Es mi libro, señora. Devuélvamelo, por favor.", B: "Es mi libro, señora. ¿Me lo devuelve, por favor?", C: "Ese libro es mío, señora. Le agradecería que me lo devolviera." },
            reply: { A: "Beatriz lo abre. «Un momento. Lucía escribía en la página doce.» Busca. No hay nada. «No es el suyo.»", B: "Beatriz lo abre antes de devolverlo. «Un momento. Lucía siempre escribía algo en la página doce.» Busca. Nada. «No es el suyo. Qué pena.»", C: "Beatriz lo abre antes de soltarlo. «Un segundo. Lucía anotaba cosas en la página doce.» Busca. Nada. «No es el suyo. Lástima.»" },
            mood: "sad", next: "libro-pagina",
          },
          {
            id: "leer",
            say: { A: "Lo leo en el banco. Me gusta leer de noche.", B: "Lo leo en el banco de la plaza. Me gusta leer de noche.", C: "Me gusta leer en ese banco, bajo el tilo. La noche es buena página." },
            reply: { A: "Beatriz se emociona. «¡Lucía leía en ese banco! Me llamo Beatriz. ¿Me lees un poco?»", B: "Beatriz se emociona. «¡Lucía leía en ese mismo banco! Yo soy Beatriz. ¿Me lees un trozo? Solo uno.»", C: "A Beatriz le brillan los ojos. «Lucía leía en ese banco, exactamente ahí. Soy Beatriz. ¿Me lees un fragmento? Uno solo.»" },
            mood: "love", next: "libro-pagina",
          },
          {
            id: "regalo",
            say: { A: "Si es el libro de Lucía, se lo regalo. Déselo a ella.", B: "Si es el libro favorito de Lucía, se lo regalo. Déselo usted.", C: "Si es el libro de Lucía, quédeselo. Pero con una condición: que se lo lleve usted." },
            reply: { A: "Beatriz aprieta el libro. «¿Dárselo yo? No nos hablamos desde hace veinte años.»", B: "Beatriz aprieta el libro contra el pecho. «¿Llevárselo yo? Hace veinte años que no nos hablamos. Me llamo Beatriz, por cierto.»", C: "Beatriz abraza el libro. «¿Yo? Llevamos veinte años sin cruzar palabra. Soy Beatriz, y acabas de ponerme en un aprieto.»" },
            mood: "sad", next: "libro-pagina",
          },
        ],
      },
      "libro-pagina": {
        who: "beatriz", mood: "sad",
        line: {
          A: "Beatriz se sienta con el libro. «Lucía y yo nos peleamos por un vestido. Hoy es su cumpleaños. ¿Qué hago con este libro?»",
          B: "Beatriz se sienta en el banco con el libro en las rodillas. «Lucía y yo nos peleamos por un vestido prestado. Hoy es su cumpleaños. Y ahora tengo su libro en las manos. ¿Qué hago?»",
          C: "Beatriz se sienta con el libro en el regazo, como si pesara. «Veinte años sin hablarnos por un vestido prestado. Hoy cumple sesenta y yo tengo su libro favorito en las manos. ¿Qué se hace con esto?»",
        },
        options: [
          {
            id: "dedicatoria",
            say: { A: "Escríbale una dedicatoria. Y mañana se lo lleva.", B: "Escríbale una dedicatoria en la primera página. Y mañana se lo lleva en persona.", C: "Escríbale una dedicatoria en la primera página y llévelo mañana en persona. El libro hará de excusa." },
            reply: { A: "Beatriz saca un bolígrafo del bolso. «Para Lucía. Perdón. Beatriz.» Cierra el libro. «Mañana voy.»", B: "Beatriz saca un bolígrafo del bolso y escribe: «Para Lucía. Perdón por el vestido. Beatriz.» Cierra el libro. «Mañana se lo llevo.»", C: "Beatriz saca un bolígrafo dorado y escribe: «Para Lucía. El vestido te quedaba mejor. Perdón. Beatriz.» Cierra el libro. «Mañana se lo llevo yo misma.»" },
            mood: "love", end: "libro-dedicatoria",
          },
          {
            id: "leerle",
            say: { A: "Lea un poco en voz alta. Para Lucía.", B: "Lea un trozo en voz alta. Como si Lucía estuviera aquí.", C: "Léalo en voz alta, un fragmento. Lucía no está, pero el banco sí." },
            reply: { A: "Beatriz abre el libro y lee despacio. Su voz tiembla. Luego sonríe.", B: "Beatriz abre el libro por la página doce y lee despacio, con la voz temblorosa. Al terminar, sonríe.", C: "Beatriz abre por la página doce y lee en voz baja, con la voz quebrada en dos frases. Al terminar, sonríe al tilo." },
            mood: "love", end: "libro-lectura",
          },
          {
            id: "devolver",
            say: { A: "Es solo un libro. Devuélvamelo y llámela.", B: "Es solo un libro, Beatriz. Devuélvamelo y llame a Lucía.", C: "Es solo un libro, Beatriz. Devuélvamelo; lo que Lucía quiere es su voz." },
            reply: { A: "Beatriz te lo devuelve. «Tienes razón. Solo un libro.» Saca el teléfono.", B: "Beatriz te devuelve el libro con cuidado. «Tienes razón. Es solo un libro. La voz es lo difícil.» Saca el teléfono.", C: "Beatriz te devuelve el libro. «Tienes razón: el libro es fácil, la voz no.» Saca el teléfono con las manos frías." },
            mood: "worried", end: "llama",
          },
        ],
      },
      "corazon-inicio": {
        who: "beatriz", mood: "love",
        line: {
          A: "Una señora elegante te toma del brazo. Ve el corazón y sonríe con los ojos llenos de luz. «Ay, cariño. Tienes la cara de Lucía. Y hoy es su cumpleaños.»",
          B: "Una señora elegante te sujeta del brazo, ve el corazón y toda ella se ablanda. «Ay, cariño… Tienes la cara de mi amiga Lucía. Y hoy es su cumpleaños. Ven, siéntate conmigo.»",
          C: "Una señora de abrigo granate te toma del brazo, ve el corazón y su gesto severo se deshace en ternura. «Ay, cariño. Tienes la cara de Lucía Ferrer, y hoy cumple sesenta. Siéntate conmigo un momento, por favor.»",
        },
        options: [
          {
            id: "sentarse",
            say: { A: "Claro. Cuénteme de Lucía.", B: "Claro que sí. Cuénteme de Lucía.", C: "Con mucho gusto. Hábleme de Lucía." },
            reply: { A: "Beatriz te toma la mano. «Me llamo Beatriz. Lucía y yo no hablamos desde hace veinte años. Por un vestido.»", B: "Beatriz te toma la mano en el banco. «Soy Beatriz. Lucía y yo llevamos veinte años sin hablarnos. Por un vestido prestado, imagínate.»", C: "Beatriz te toma la mano y te sienta a su lado. «Soy Beatriz. Lucía y yo llevamos veinte años sin hablarnos por un vestido prestado. Con tu cara delante, suena todavía más absurdo.»" },
            mood: "love", next: "corazon-ternura",
          },
          {
            id: "no-soy",
            say: { A: "No soy de su familia. Pero puedo escucharla.", B: "No soy de la familia de Lucía. Pero puedo escucharla un rato.", C: "No soy de la familia de Lucía, pero tengo tiempo y oído para su historia." },
            reply: { A: "Beatriz sonríe. «Ya lo sé, cariño. Pero tu cara me ayuda. Me llamo Beatriz.»", B: "Beatriz sonríe con dulzura. «Ya lo sé, cariño. Pero tu cara me ayuda a decir cosas. Me llamo Beatriz.»", C: "Beatriz sonríe sin soltarte. «Lo sé, cariño. Pero tu cara me afloja la lengua. Soy Beatriz.»" },
            mood: "love", next: "corazon-ternura",
          },
          {
            id: "felicitar",
            say: { A: "¡Feliz cumpleaños a Lucía! ¿Va a verla hoy?", B: "¡Pues feliz cumpleaños a Lucía! ¿La va a ver hoy?", C: "Entonces, feliz cumpleaños a Lucía. ¿Tiene pensado verla hoy?" },
            reply: { A: "Beatriz baja la mirada. «No. Nos peleamos hace veinte años. Me llamo Beatriz.»", B: "Beatriz baja la mirada. «No. Nos peleamos hace veinte años y nunca supe pedirle perdón. Soy Beatriz.»", C: "Beatriz baja la vista al bolso. «No. Nos peleamos hace veinte años y el perdón se me quedó en la garganta. Soy Beatriz.»" },
            mood: "sad", next: "secreto",
          },
        ],
      },
      "corazon-ternura": {
        who: "beatriz", mood: "love",
        line: {
          A: "Beatriz te mira con mucho cariño. «Lucía tuvo un hijo ese año. Nunca lo conocí. ¿Me dejas darte un beso de su parte?»",
          B: "Beatriz te mira con un cariño enorme. «Ese año Lucía tuvo un hijo y yo nunca fui a conocerlo. ¿Me dejas darte un beso en la frente, como si fueras él?»",
          C: "Beatriz te mira como se mira una fotografía antigua. «Ese año nació el hijo de Lucía y yo no fui a conocerlo. ¿Me permites un beso en la frente, como si fueras él?»",
        },
        options: [
          {
            id: "si",
            say: { A: "Claro, Beatriz. Y mañana va a ver a Lucía, ¿sí?", B: "Claro, Beatriz. Pero mañana va a ver a Lucía, ¿de acuerdo?", C: "Por supuesto, Beatriz. A cambio, mañana va a casa de Lucía. Trato hecho." },
            reply: { A: "Beatriz te besa en la frente. «Trato hecho. Mañana voy.»", B: "Beatriz te besa en la frente, despacio. «Trato hecho. Mañana voy a verla. Y le cuento lo de tu cara.»", C: "Beatriz te besa en la frente con una ternura antigua. «Trato hecho. Mañana me presento en su puerta. Y le hablo de tu cara.»" },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "abrazo",
            say: { A: "Mejor un abrazo. Los abrazos sirven para todo.", B: "Mejor un abrazo, Beatriz. Los abrazos sirven para casi todo.", C: "Yo propongo un abrazo, Beatriz. Para lo demás ya tendrá a Lucía." },
            reply: { A: "Beatriz te abraza fuerte. «Veinte años sin un abrazo así.»", B: "Beatriz te abraza fuerte y largo. «Veinte años sin un abrazo como este. Mañana le devuelvo uno a Lucía.»", C: "Beatriz te abraza con los dos brazos y los veinte años. «Esto me lo llevo mañana a casa de Lucía, intacto.»" },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "llamar",
            say: { A: "Mejor llámela ahora. Yo me quedo aquí con usted.", B: "Mejor llámela ahora mismo. Yo me quedo aquí, a su lado.", C: "Mejor llámela ahora, Beatriz. Yo me quedo aquí, de testigo y de apoyo." },
            reply: { A: "Beatriz saca el teléfono sin soltarte la mano. «No lo borré nunca. Mira.»", B: "Beatriz saca el teléfono sin soltarte la mano. «Nunca borré su número. Mira: Lucía.»", C: "Beatriz saca el teléfono con la otra mano, sin soltar la tuya. «Nunca borré su número. Ahí está: Lucía.»" },
            mood: "love", end: "llama",
          },
        ],
      },
    },
    ends: {
      mensaje: { text: { A: "Beatriz te da un beso y se va al hotel. Tú no conoces a Lucía, pero tienes un mensaje para ella.", B: "Beatriz te besa en las mejillas y entra en el hotel. Te quedas con un mensaje para una mujer que no conoces.", C: "Beatriz se despide con dos besos y entra en el hotel. Te quedas con un mensaje para Lucía y un ligero cargo de conciencia." }, change: "se-va", recap: "Seguiste el juego a Beatriz y te llevaste un mensaje para Lucía." },
      equivocada: { text: { A: "Beatriz se va, un poco triste. Antes de entrar en el hotel, te mira otra vez.", B: "Beatriz se aleja hacia el hotel. En la puerta se gira una última vez para mirarte.", C: "Beatriz se aleja con la espalda recta. En la puerta del hotel se gira, por si acaso." }, change: "se-va", recap: "Le explicaste a Beatriz que no eras de la familia de Lucía." },
      llama: { text: { A: "Beatriz llama a Lucía. Primero está nerviosa. Después se ríe mucho.", B: "Beatriz marca el número. Tras un silencio largo, oyes: «¿Lucía? Soy yo, Beatriz…». Y luego, risas.", C: "Beatriz marca. Un silencio eterno, un «¿Lucía?» con la voz rota, y luego una carcajada que llena toda la plaza." }, change: "llama", recap: "Animaste a Beatriz a llamar a su amiga Lucía." },
      carta: { text: { A: "Beatriz se sienta en un banco. Empieza a escribir una carta.", B: "Beatriz se sienta en un banco bajo las luces y empieza a escribir en un papel del hotel.", C: "Beatriz se sienta bajo los tilos y empieza una carta en papel del hotel. La primera frase la tacha tres veces." }, change: "se-sienta", recap: "Le diste a Beatriz la idea de escribir una carta." },
      consuelo: { text: { A: "Beatriz sonríe. Mira la fuente un rato, más tranquila.", B: "Beatriz se queda junto a la fuente, más tranquila, mirando las luces de los tilos.", C: "Beatriz se queda junto a la fuente con una sonrisa serena, como quien por fin ha dicho algo en voz alta." }, change: "sonrie", recap: "Escuchaste y consolaste a Beatriz." },
      abrazo: { text: { A: "Beatriz abre los brazos. «Gracias. Mañana voy a buscar a Lucía y a su hijo.»", B: "Beatriz te abraza. «Mañana voy a buscar a Lucía. Y voy a conocer a ese hijo, aunque tarde.»", C: "Beatriz te abraza fuerte. «Mañana mismo voy a casa de Lucía. Llevo veinte años de retraso, pero llego.»" }, change: "abraza", recap: "Beatriz te contó su secreto y decidió buscar a Lucía." },
      susto: { text: { A: "Beatriz entra rápido en el hotel. Tú te quedas solo en la plaza.", B: "Beatriz se va rápido hacia el hotel, mirando atrás un par de veces.", C: "Beatriz se refugia en el hotel con paso digno y rápido. La plaza vuelve a su silencio pulido." }, change: "se-va", recap: "Asustaste a Beatriz sin querer y se fue al hotel." },
      policia: { text: { A: "Llega la policía. Explicas todo. Beatriz te pide perdón.", B: "Llega la policía. Después de explicarlo todo, Beatriz te pide perdón, un poco avergonzada.", C: "Llega la policía. Tras un buen rato de explicaciones, Beatriz admite que quizá exageró. Un poco." }, change: "policia", recap: "Un malentendido con Beatriz terminó con la policía." },
      "cuchillo-policia": { text: { A: "Llega la policía. Explicas lo del cuchillo. Beatriz te mira desde la puerta del hotel, enojada.", B: "Llega la policía y tardas un buen rato en explicar lo del cuchillo. Beatriz te observa desde la puerta del hotel con los brazos cruzados.", C: "Llega un coche patrulla y explicar lo del cuchillo te cuesta media hora. Beatriz lo observa todo desde la puerta del Imperial, con los brazos cruzados y la razón de su parte." }, change: "policia", recap: "Beatriz vio tu cuchillo y el portero llamó a la policía." },
      "cuchillo-susto": { text: { A: "Beatriz entra en el hotel. Mira tu bolsillo hasta el final.", B: "Beatriz se refugia en el hotel sin quitar la vista de tu bolsillo, por si el cuchillo vuelve a salir.", C: "Beatriz se refugia en el Imperial vigilando tu bolsillo hasta la puerta, por si al cuchillo le da por reaparecer." }, change: "se-va", recap: "Tu cuchillo asustó a Beatriz y se fue al hotel." },
      "cuchillo-te": { text: { A: "Sebastián trae un té. Beatriz lo bebe en el banco. «Mañana cuento esto y nadie me cree.»", B: "Sebastián trae un té del hotel. Beatriz lo bebe en el banco, más tranquila. «Mañana cuento lo del cuchillo y nadie me cree.»", C: "Sebastián aparece con un té en bandeja de plata. Beatriz lo bebe en el banco. «Mañana cuento lo del cuchillo en el club y nadie me cree.»" }, change: "se-sienta", recap: "Después del susto del cuchillo, Beatriz se tomó un té contigo." },
      "pistola-patrulla": { text: { A: "Dos policías bajan del coche. Te piden la pistola. Beatriz entra en el hotel sin mirar atrás.", B: "Dos policías bajan del coche y te piden el arma con mucha calma. Beatriz entra en el hotel sin mirar atrás.", C: "Dos agentes bajan del coche patrulla y te piden el arma con una calma profesional. Beatriz entra en el Imperial sin volverse." }, change: "policia", recap: "Beatriz vio tu pistola y acabaste con la policía." },
      "pistola-adios": { text: { A: "Beatriz se va al hotel muy rápido. Tú guardas la pistola. La plaza está en silencio.", B: "Beatriz se aleja hacia el hotel a paso rápido. Guardas la pistola. La plaza se queda en un silencio incómodo.", C: "Beatriz se retira al hotel con prisa y dignidad. Guardas la pistola. La plaza recupera un silencio que ahora parece acusador." }, change: "se-va", recap: "Tu pistola asustó a Beatriz y la conversación terminó ahí." },
      "granada-corre": { text: { A: "Beatriz corre al hotel. La sirena se acerca. Tú también corres.", B: "Beatriz desaparece dentro del hotel. La sirena se acerca y tú decides correr hacia el otro lado.", C: "Beatriz se pierde dentro del hotel. La sirena se acerca y tú optas por la retirada rápida, granada incluida." }, change: "corre", recap: "Beatriz vio tu granada y huyó al hotel gritando." },
      "granada-broma": { text: { A: "Sebastián hace entrar a los huéspedes. Beatriz se ríe, nerviosa. «¡Qué noche! Lucía se va a reír mucho.»", B: "Sebastián hace volver a los huéspedes. Beatriz se ríe, todavía nerviosa. «¡Qué noche! Esto se lo tengo que contar a Lucía.»", C: "Sebastián devuelve a los huéspedes a sus camas. Beatriz se ríe con los nervios rotos. «Qué noche. Esto tengo que contárselo a Lucía, aunque sea después de veinte años.»" }, change: "sonrie", recap: "Tu granada evacuó el hotel, pero Beatriz terminó riéndose." },
      "granada-helicoptero": { text: { A: "El helicóptero ilumina la plaza. Beatriz señala tu bolsillo. La noche es muy larga.", B: "El helicóptero ilumina toda la plaza. Beatriz señala tu bolsillo desde la puerta del hotel. Va a ser una noche larga.", C: "El foco del helicóptero convierte la plaza en un escenario y Beatriz, desde el hotel, señala tu bolsillo como una fiscal. La noche promete ser larga." }, change: "helicoptero", recap: "Tu granada evacuó el Hotel Imperial y trajo un helicóptero." },
      "gas-nube": { text: { A: "Los dos tosen mucho. Sebastián trae agua. Beatriz dice: «Perdón» diez veces.", B: "Los dos tosen con los ojos rojos. Sebastián trae agua del hotel. Beatriz pide perdón diez veces y se va con el bolso tapándose la cara.", C: "Los dos tosen con los ojos en llamas. Sebastián trae agua en bandeja. Beatriz pide perdón diez veces y se retira tapándose la cara con el bolso." }, change: "se-va", recap: "Beatriz y tú sacaron gas pimienta a la vez y acabaron tosiendo." },
      "gas-club": { text: { A: "Beatriz te da una tarjeta: «Vecinas Alerta. Martes, 19:00». Entra en el hotel sonriendo.", B: "Beatriz te da una tarjeta: «Vecinas Alerta. Martes a las siete, salón del Imperial». Entra en el hotel con una sonrisa.", C: "Beatriz te entrega una tarjeta impresa: «Vecinas Alerta. Martes, 19:00, salón del Imperial». Entra en el hotel con la satisfacción de quien ha reclutado." }, change: "sonrie", recap: "Beatriz te invitó a su grupo de vecinas con gas pimienta." },
      "gas-vigilada": { text: { A: "Beatriz no guarda su gas. Te mira hasta que sales de la plaza.", B: "Beatriz no guarda el gas. Te sigue con la mirada hasta que desapareces de la plaza.", C: "Beatriz no guarda el gas hasta que desapareces de su vista. La prudencia, en este barrio, no se discute." }, change: "sigue", recap: "Beatriz desconfió de tu gas pimienta y te vigiló hasta el final." },
      "lapiz-dictado": { text: { A: "Beatriz dicta y tú escribes. La carta tiene cuatro líneas y mucho cariño.", B: "Beatriz dicta y tú escribes con el lápiz. La carta tiene cuatro líneas, tres tachones y mucho cariño.", C: "Beatriz dicta y tú escribes. La carta cabe en cuatro líneas, tiene tres tachones y veinte años de cariño." }, change: "se-sienta", recap: "Escribiste con tu lápiz la carta de Beatriz para Lucía." },
      "lapiz-envio": { text: { A: "Beatriz guarda el dibujo en el bolso. «Mañana va al correo. Con una carta.»", B: "Beatriz guarda el dibujo en el bolso. «Mañana lo mando. Con una carta, aunque sea corta.»", C: "Beatriz guarda el retrato en el bolso con cuidado. «Mañana sale al correo. Con una carta, por corta que me salga.»" }, change: "sonrie", recap: "Dibujaste a Beatriz con tu lápiz y ella decidió escribir a Lucía." },
      "libro-dedicatoria": { text: { A: "Beatriz se lleva tu libro al hotel. Mañana es de Lucía.", B: "Beatriz se lleva tu libro al hotel, con la dedicatoria. Mañana será de Lucía.", C: "Beatriz entra en el hotel con tu libro bajo el brazo y la dedicatoria fresca. Mañana cambiará de dueña." }, change: "se-va", recap: "Tu libro se convirtió en el regalo de cumpleaños de Beatriz para Lucía." },
      "libro-lectura": { text: { A: "Beatriz cierra el libro y te lo devuelve. Se queda en el banco, tranquila.", B: "Beatriz cierra el libro y te lo devuelve. Se queda en el banco, mirando la fuente, más tranquila.", C: "Beatriz cierra el libro y te lo devuelve. Se queda en el banco de Lucía, mirando la fuente, serena por primera vez." }, change: "se-sienta", recap: "Beatriz leyó en voz alta el libro favorito de Lucía." },
      "corazon-beso": { text: { A: "Beatriz te besa en la frente. Entra en el hotel sonriendo. Mañana va a casa de Lucía.", B: "Beatriz te besa en la frente y entra en el hotel con una sonrisa nueva. Mañana se presenta en casa de Lucía.", C: "Beatriz te besa en la frente, se recompone y entra en el Imperial con una sonrisa recién estrenada. Mañana llama a la puerta de Lucía." }, change: "beso", recap: "Beatriz te dio un beso de parte de Lucía y decidió ir a verla." },
      "corazon-abrazo": { text: { A: "Beatriz te abraza mucho tiempo. Después se va al hotel, ligera.", B: "Beatriz te abraza durante un buen rato. Luego entra en el hotel, más ligera que antes.", C: "Beatriz te abraza largo, sin prisa. Luego entra en el Imperial con veinte años menos de peso." }, change: "abraza", recap: "Beatriz se ablandó con tu corazón y te abrazó." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces cuando una persona te da miedo?", B: "¿Cómo reaccionas cuando alguien grita por tu culpa?", C: "¿Cómo se recupera la confianza de alguien al que has asustado sin querer?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Tienes miedo de la policía?", B: "¿Qué harías si vieras a alguien con un arma en tu barrio?", C: "¿Qué pesa más en una conversación: lo que dices o lo que llevas encima?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué cosa rara pasó en tu calle?", B: "¿Cuál fue el momento más absurdo que viviste en un hotel o en un viaje?", C: "¿Dónde está la frontera entre una broma pesada y un escándalo?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Tu barrio es seguro de noche?", B: "¿Qué haces para sentirte seguro cuando sales de noche?", C: "¿En qué momento la prevención se convierte en paranoia?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes cartas a mano?", B: "¿A quién le escribirías una carta que nunca mandaste?", C: "¿Qué cosas se pueden decir por escrito que nunca dirías en voz alta?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Cuál es tu libro favorito?", B: "¿Qué libro regalarías a un amigo con quien ya no hablas?", C: "¿Por qué un objeto compartido puede pesar más que una discusión?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Quién te da besos en la frente?", B: "¿A quién abrazaste por última vez y por qué?", C: "¿Qué gesto de ternura te desarma por completo?" } },
    },
    speak: {
      A1: "¿Cómo se llama tu mejor amigo o amiga?",
      A2: "¿Dónde conociste a tu mejor amigo?",
      B1: "¿Qué haces cuando alguien te confunde con otra persona?",
      B2: "¿Qué harías si pudieras recuperar una amistad perdida?",
      C1: "¿Qué diferencia hay entre perder el contacto con alguien y perder a alguien?",
      C2: "¿Qué papel juega el orgullo en las relaciones que dejas apagarse?",
    },
  },

  // ─────────────────────────────────────────── ESCENA 2
  {
    id: "alto-turista",
    kind: "escena",
    district: "alto",
    title: "Un turista perdido",
    verb: "AYUDAR",
    goal: "Dar indicaciones (izquierda, derecha, todo recto, cruzar, la segunda calle), repetir más despacio y comprobar que el otro entendió.",
    cast: [
      {
        id: "henrik", name: "Henrik", role: "Turista danés con un mapa de papel",
        age: "young", body: "m", build: "slim", height: 1.92,
        hair: "short", hairColor: "#e2c98a", skin: "#f2d6c0",
        top: "jacket", topColor: "#3f6b4f", bottom: "jeans", bottomColor: "#4a5a78",
        extras: ["backpack", "map", "glasses"], pose: "walk", props: ["street-sign"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "henrik", mood: "worried",
        line: {
          A: "Un chico muy alto mira un mapa de papel. Habla despacio. «Perdón… Hablo poco español. ¿Dónde está… la estación de tren?»",
          B: "Un chico altísimo gira un mapa de papel en todas direcciones. Habla despacio, con cuidado. «Disculpa… ¿Me puedes ayudar? Busco la estación de tren.»",
          C: "Un chico de casi dos metros pelea con un mapa de papel que se niega a doblarse. Elige cada palabra con cuidado. «Disculpa la molestia. Creo que la ciudad me ha… ¿desorientado?»",
        },
        options: [
          {
            id: "directo",
            say: { A: "Sí. Sigue esta avenida todo recto, hacia el oeste. Después, a la izquierda.", B: "Claro. Sigue la avenida principal hacia el oeste y luego gira a la izquierda, hacia el sur.", C: "Fácil: baja por la avenida principal hacia el oeste y, al final, tuerce a la izquierda, hacia el sur." },
            reply: { A: "Henrik mira el mapa. «Perdón… ¿Oeste? ¿Izquierda? Más despacio, por favor.»", B: "Henrik te mira, concentrado. «Perdón… ¿Oeste es por aquí? ¿Puedes repetir más despacio?»", C: "Henrik asiente con cara de no haber entendido nada. «Sí. Sí. Todo claro. ¿Lo puedes repetir? Más despacio y quizá con las manos.»" },
            mood: "worried", next: "repetir",
          },
          {
            id: "preguntar",
            say: { A: "Más despacio. ¿Qué buscas? ¿La estación?", B: "Tranquilo, vamos por partes. ¿Adónde quieres ir exactamente?", C: "Sin prisa. Empecemos por el principio: ¿adónde necesitas llegar y a qué hora?" },
            reply: { A: "Henrik sonríe. «La estación. Pero también tengo hambre. ¿El mercado de noche?»", B: "Henrik respira. «Quiero ir a la estación. Pero también quiero ver el mercado de noche. Y tengo hambre.»", C: "Henrik sonríe, aliviado. «A la estación, en teoría. En la práctica, mi estómago prefiere el mercado de noche.»" },
            mood: "smile", next: "mapa",
          },
          {
            id: "broma",
            say: { A: "Yo también estoy un poco perdido. ¡Vamos a mirar el mapa juntos!", B: "Si te soy sincero, yo también me pierdo aquí. ¿Miramos el mapa juntos?", C: "Te confieso que este barrio también me desorienta a mí. Pero entre dos perdidos sumamos un guía." },
            reply: { A: "Henrik se ríe. «¡Bien! Dos personas, un mapa.»", B: "Henrik se ríe y abre el mapa. «¡Perfecto! Dos perdidos es mejor que uno.»", C: "Henrik se ríe con ganas. «Un guía y medio, entonces. Yo soy el medio.»" },
            mood: "smile", next: "mapa",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz. Dibujas un mapa en su papel.", B: "Sacas el lápiz y le dibujas un mapa sencillo en el margen.", C: "Sacas el lápiz y dibujas un mapa con flechas, una fuente y una estación con humo." },
            say: { A: "Mira: aquí estamos. Todo recto. Después, a la izquierda. Aquí está la estación.", B: "Mira: estamos aquí. Sigues la avenida todo recto, cruzas la plaza y giras a la izquierda.", C: "Mira: tú eres esta X. Recto hasta el final de la avenida, a la izquierda, y donde ves el humo, la estación." },
            reply: { A: "Henrik mira el dibujo. «¡Ah! ¡Ahora entiendo! ¡Muchas gracias!»", B: "A Henrik se le ilumina la cara. «¡Ahora sí! Tu mapa es mejor que el mío.»", C: "Henrik estudia el dibujo con respeto. «Tu mapa es mucho mejor. El mío tiene más calles, pero el tuyo tiene sentido.»" },
            mood: "smile", end: "estacion",
          },
          libro: {
            act: { A: "Henrik ve tu libro.", B: "Henrik ve tu libro y se le ilumina la cara.", C: "Henrik mira tu libro con esperanza." },
            say: { A: "¿Mi libro? No es una guía. Es una novela.", B: "Ah, no, no es una guía de la ciudad. Es una novela, lo siento.", C: "Siento decepcionarte: es una novela. Aunque también se pierde mucha gente en ella." },
            reply: { A: "Henrik se ríe. «Mi guía es muy vieja. ¡Es de 1998!» Abre el mapa.", B: "Henrik se ríe y te enseña su guía. «La mía es peor: es de 1998. El mercado de noche no existe aquí.»", C: "Henrik saca su guía. «La mía es de 1998. Según ella, la estación es un convento.» Despliega el mapa." },
            mood: "smile", next: "mapa",
          },
          gas: {
            act: { A: "Un chico enorme viene rápido hacia ti. Sacas el gas pimienta.", B: "Un chico enorme se acerca muy rápido. Por instinto, sacas el gas pimienta.", C: "Una sombra de casi dos metros se te echa encima y sacas el gas pimienta sin pensar." },
            say: { A: "¡Para! ¿Qué quieres?", B: "¡Para ahí! ¿Qué quieres?", C: "¡Quieto ahí! ¿Qué se te ofrece?" },
            reply: { A: "Henrik levanta las manos. El mapa cae al suelo. «¡No, no! ¡Solo busco la estación!»", B: "Henrik levanta las manos y se le cae el mapa. «¡Perdón, perdón! ¡Solo quiero ir a la estación!»", C: "Henrik se queda congelado con las manos en alto. «¿Esto es… normal aquí? Yo solo quería un tren.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Henrik ve tu granada.", B: "Al buscar tu teléfono, Henrik ve la granada.", C: "Al sacar el teléfono para buscar la ruta, la granada asoma también." },
            say: { A: "Hola. ¿Necesitas ayuda?", B: "Hola, ¿necesitas ayuda? Puedo buscar la ruta.", C: "¿Te ayudo? Te busco la ruta en un segundo." },
            reply: { A: "Henrik mira la granada. «Eh… ¿Es típico de aquí?»", B: "Henrik mira la granada con educación nórdica. «Eh… ¿Es un recuerdo típico de la ciudad?»", C: "Henrik observa la granada y retrocede muy despacio. «Mi guía no habla de esto. Creo que me falta un capítulo.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Henrik ve tu pistola.", B: "Cuando te acercas, Henrik ve tu pistola.", C: "Al acercarte, la pistola queda a la vista de Henrik." },
            say: { A: "Hola. ¿Adónde vas?", B: "Hola. ¿Adónde quieres ir?", C: "Buenas noches. ¿Adónde te diriges?" },
            reply: { A: "Henrik se asusta. «¡Toma mi dinero! ¡Y el mapa!»", B: "Henrik te ofrece la cartera y el mapa. «¡Toma! Pero el mapa no es muy bueno, ¿eh?»", C: "Henrik te tiende la cartera y, por si acaso, el mapa. «Te aviso: el mapa no funciona. Lo he comprobado.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Su mapa nuevo está en un plástico. Sacas el cuchillo.", B: "Su mapa nuevo sigue cerrado en plástico. Sacas el cuchillo para abrirlo.", C: "El mapa sigue precintado y Henrik lucha con él. Sacas el cuchillo." },
            say: { A: "¿Abro el plástico?", B: "Espera, ¿quieres que corte el plástico?", C: "Permíteme. Ese plástico ha ganado demasiadas batallas." },
            reply: { A: "Henrik da un paso atrás, pero dice que sí. «Eh… Bueno. Gracias.»", B: "Henrik se pone tenso, pero asiente. «Eh… sí, por favor. Con cuidado.» El mapa se abre.", C: "Henrik duda un instante, luego te tiende el mapa. «Adelante. Pero que conste que me pongo nervioso.»" },
            mood: "worried", next: "mapa",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Hablas muy bien español. ¿Dónde aprendiste?", B: "Oye, hablas muy bien español. ¿Dónde lo aprendiste?", C: "Para estar tan perdido, hablas un español estupendo. ¿Cuál es tu secreto?" },
            reply: { A: "Henrik sonríe. «Mi abuela era de esta ciudad. Hoy vi su calle.»", B: "Henrik se emociona. «Mi abuela era de aquí. Hoy fui a ver la calle donde vivió. Por eso ahora estoy perdido.»", C: "Henrik sonríe, tímido. «Mi abuela nació aquí. Hoy busqué su antigua casa, y la encontré. Lo demás, ni idea.»" },
            mood: "love", next: "mapa",
          },
        },
      },
      repetir: {
        who: "henrik", mood: "worried",
        line: {
          A: "Henrik gira el mapa. «¿Izquierda o derecha? Perdón. Otra vez, por favor.»",
          B: "Henrik gira el mapa otra vez. «Perdón, ¿a la izquierda o a la derecha? En mi cabeza todo está al revés.»",
          C: "Henrik mira el mapa como si fuera un jeroglífico. «Perdona. En danés es fácil. En español mi izquierda se vuelve derecha.»",
        },
        options: [
          {
            id: "gestos",
            say: { A: "Mira mis manos. Todo recto. En la segunda calle, a la izquierda.", B: "Mira: todo recto por esta avenida, cruzas dos calles y en la segunda giras a la izquierda.", C: "Te lo hago con las manos: todo recto, cruzas dos calles y en la segunda, a la izquierda. La estación no tiene pérdida." },
            reply: { A: "Henrik repite: «Recto… segunda… izquierda». «¡Sí! ¡Gracias!»", B: "Henrik lo repite en voz baja. «Recto, segunda calle, izquierda… ¡Lo tengo! Muchas gracias.»", C: "Henrik repite cada palabra como un mantra. «Recto, segunda, izquierda. Si me pierdo otra vez, es culpa mía.»" },
            mood: "smile", end: "estacion",
          },
          {
            id: "taxi",
            say: { A: "Es un poco lejos. ¿Por qué no tomas un taxi?", B: "La verdad, está un poco lejos. ¿Por qué no pides un taxi en el hotel?", C: "Para no complicarte: en la puerta del hotel hay taxis. Es menos romántico, pero más seguro." },
            reply: { A: "Henrik mira el hotel. «Bueno. Voy a llamar un taxi. Gracias.»", B: "Henrik mira el hotel y asiente. «Buena idea. Mis piernas te lo agradecen.»", C: "Henrik se ríe. «Menos romántico, pero llego. Mi abuela diría que soy un señorito.»" },
            mood: "smile", end: "taxi",
          },
          {
            id: "acompanar",
            say: { A: "Si quieres, te acompaño hasta la avenida.", B: "Mira, te acompaño hasta la avenida y desde allí ya lo ves.", C: "Hagamos algo: te acompaño hasta la avenida y desde ahí ya no tiene misterio." },
            reply: { A: "Henrik sonríe mucho. «¿De verdad? ¡Muchas gracias!»", B: "«¿En serio? Eres muy amable», dice Henrik, y dobla el mapa por fin.", C: "«En Dinamarca esto sería casi un escándalo de amabilidad», dice Henrik, encantado." },
            mood: "smile", end: "estacion",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Tranquilo. Lo haces muy bien. Vamos despacio.", B: "Tranquilo, lo estás haciendo genial. Lo repetimos las veces que haga falta.", C: "No te agobies: entiendes mucho más de lo que crees. Lo repetimos sin prisa." },
            reply: { A: "Henrik se relaja. «Gracias. Mañana conozco a los padres de mi novia. Ellos solo hablan español.»", B: "Henrik respira. «Gracias. Es que mañana conozco a los padres de mi novia, y solo hablan español. Estoy nervioso.»", C: "Henrik confiesa: «Mañana conozco a mis suegros. Solo hablan español. Esta noche era el ensayo general.»" },
            mood: "love", end: "estacion",
          },
        },
      },
      mapa: {
        who: "henrik", mood: "neutral",
        line: {
          A: "Henrik abre el mapa. «Estamos aquí, ¿no? ¿El mercado de noche está cerca? ¿Y la estación?»",
          B: "Henrik señala el mapa. «Estamos aquí, ¿verdad? ¿El mercado de noche está cerca? Mi tren sale a las once y media.»",
          C: "Henrik apoya el mapa en una farola. «Si estamos aquí, el mercado y la estación están en… ¿direcciones opuestas? Mi tren sale a las once y media.»",
        },
        options: [
          {
            id: "mercado",
            say: { A: "El mercado está al oeste, muy cerca. Primero puedes comer.", B: "El mercado está al oeste, a diez minutos. Te da tiempo a comer algo antes del tren.", C: "El mercado queda al oeste, a un paseo. Si comes rápido, llegas al tren sin drama." },
            reply: { A: "Henrik sonríe. «¡Bien! Primero como. Después, el tren.»", B: "Henrik se frota las manos. «Perfecto. Primero comer, después correr.»", C: "«Comer rápido no es mi talento», admite Henrik. «Pero por unas empanadas, lo intento.»" },
            mood: "smile", end: "mercado",
          },
          {
            id: "estacion",
            say: { A: "Primero el tren. Ve todo recto al oeste. Después, a la izquierda.", B: "Yo iría primero a la estación: todo recto hacia el oeste y luego a la izquierda, hacia el sur.", C: "Con el tren a las once y media, yo no me arriesgaría: oeste por la avenida y luego al sur, a la izquierda." },
            reply: { A: "Henrik dobla el mapa. «Sí. Primero el tren. ¡Gracias!»", B: "Henrik asiente, serio. «Tienes razón. Si pierdo el tren, mi novia me mata.» Y se ríe.", C: "Henrik dobla el mapa con decisión. «Sabio consejo. El estómago puede esperar; mi novia, no tanto.»" },
            mood: "smile", end: "estacion",
          },
          {
            id: "alreves",
            say: { A: "Henrik… Tu mapa está al revés.", B: "Oye, Henrik… Creo que tienes el mapa al revés.", C: "No quiero alarmarte, pero llevas toda la noche con el mapa al revés." },
            reply: { A: "Henrik gira el mapa. Se ríe. «¡Oh, no! Entonces… ¿izquierda o derecha?»", B: "Henrik gira el mapa y se pone rojo. «¡Ahora todo cambia! Entonces… ¿la estación es a la izquierda o a la derecha?»", C: "Henrik gira el mapa y se tapa la cara. «Eso explica mucho. Entonces, ¿mi izquierda de antes es mi derecha de ahora?»" },
            mood: "surprised", next: "repetir",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Eres muy simpático. Me gusta ayudarte.", B: "Me cae muy bien la gente valiente como tú, que viaja sola.", C: "Viajar solo con un mapa de papel tiene mérito. Me alegra haberme cruzado contigo." },
            reply: { A: "Henrik sonríe. «¡Gracias! ¿Vamos juntos al mercado? Te invito a comer.»", B: "Henrik se pone contento. «Gracias. Oye, ¿vienes conmigo al mercado? Te invito a una empanada.»", C: "Henrik sonríe de oreja a oreja. «Pues crucémonos un poco más. ¿Me acompañas al mercado? Invito yo.»" },
            mood: "love", end: "juntos",
          },
        },
      },
      calmar: {
        who: "henrik", mood: "scared",
        line: {
          A: "Henrik tiene las manos arriba. «Por favor… Soy turista.»",
          B: "Henrik sigue con las manos en alto. El mapa está en el suelo. «Por favor… Solo soy un turista.»",
          C: "Henrik no se mueve. A su altura, las manos en alto casi tocan las ramas. «Soy turista. Muy inofensivo. Y muy alto, lo sé.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Me asusté. Eres muy alto.", B: "Perdona, lo guardo. Me asusté porque viniste muy rápido.", C: "Perdóname. Lo guardo. Viniste tan rápido que mi instinto habló antes que yo." },
            reply: { A: "Henrik baja las manos. «Bueno. Perdón también.» Recoge el mapa.", B: "Henrik baja las manos y recoge el mapa. «Perdón tú también. Mi madre siempre dice que camino como un tren.»", C: "Henrik recoge el mapa, todavía pálido. «Mi madre dice que camino como una mudanza. Volvamos a empezar.»" },
            mood: "worried", next: "mapa",
          },
          {
            id: "explicar",
            say: { A: "No es para ti. Es por seguridad.", B: "No es para ti, de verdad. Lo llevo solo por seguridad.", C: "No es lo que parece. Bueno, es exactamente lo que parece, pero no es para ti." },
            reply: { A: "Henrik corre. ¡Pero corre al este!", B: "Henrik sale corriendo… hacia el este, justo en dirección contraria a la estación.", C: "Henrik sale corriendo con zancadas enormes. Hacia el este. Es decir, hacia el lado equivocado." },
            mood: "scared", end: "corre",
          },
          {
            id: "rapido",
            say: { A: "Tranquilo. La estación está por allí. ¡Al oeste!", B: "Tranquilo. La estación está al oeste, por esa avenida. Luego, a la izquierda.", C: "Tranquilo, no pasa nada. La estación: oeste por la avenida y luego al sur. Buen viaje." },
            reply: { A: "Henrik toma el mapa y se va rápido. No dice gracias.", B: "Henrik recoge el mapa y se aleja muy rápido, sin mirar atrás.", C: "Henrik murmura un «gracias» poco convencido y se aleja a paso de maratón." },
            mood: "worried", end: "deprisa",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón. Tú no hiciste nada. Te ayudo, ¿de acuerdo?", B: "Perdóname. Tú no hiciste nada malo. Déjame ayudarte con el mapa.", C: "Perdón, el problema era mío, no tuyo. ¿Me dejas compensarlo con unas buenas indicaciones?" },
            reply: { A: "Henrik baja las manos y se ríe. «Bueno. ¡Qué noche!»", B: "Henrik baja las manos y se ríe, nervioso. «Bueno… Acepto. ¡Qué noche tan rara!»", C: "Henrik se ríe, aliviado. «Acepto la compensación. Esta noche la voy a contar en Copenhague durante años.»" },
            mood: "love", next: "mapa",
          },
        },
      },
      "cuchillo-inicio": {
        who: "henrik", mood: "terror",
        line: {
          A: "Un chico muy alto viene con un mapa. Ve tu cuchillo. Grita, deja caer el mapa… y saca una navaja de su mochila. «¡No! ¡Yo también tengo! ¡No te acerques!»",
          B: "Un chico altísimo se acerca con un mapa de papel, ve tu cuchillo y suelta un grito. El mapa cae al suelo y, con las manos temblando, saca una navaja de la mochila. «¡No! ¡Yo también tengo! ¡No te acerques así!»",
          C: "Un chico de casi dos metros se acerca con un mapa, descubre el cuchillo y el mapa se le cae del susto. Un segundo después, sostiene una navaja de camping con pulso dudoso. «¡Yo también tengo! ¡No te acerques, por favor!»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Tranquilo. Bajo el mío. Tú bajas el tuyo. ¿Sí?", B: "Tranquilo, tranquilo. Yo bajo el mío y tú bajas el tuyo, ¿de acuerdo?", C: "Calma. Propongo un desarme mutuo: yo bajo el mío, tú bajas el tuyo, y nadie pierde la dignidad." },
            reply: { A: "Henrik no se mueve. «¿Tú primero? ¿Yo primero? En Dinamarca no hay cuchillos.»", B: "Henrik no se mueve ni un milímetro. «¿Tú primero o yo primero? En Dinamarca no pasa esto. Nunca.»", C: "Henrik no baja nada. «¿Quién primero? En Dinamarca esto no ocurre; no tengo protocolo.»" },
            mood: "scared", next: "cuchillo-duelo",
          },
          {
            id: "mapa",
            say: { A: "¡Es para tu mapa! El plástico. ¡Mira!", B: "¡Es para el plástico de tu mapa! Mira, está cerrado.", C: "¡Es para el precinto del mapa! Mira: todavía está envuelto en plástico." },
            reply: { A: "Henrik mira el mapa en el suelo. Luego el cuchillo. Luego su navaja. «¿El plástico? Ah… Perdón. Qué susto.»", B: "Henrik mira el mapa en el suelo, luego tu cuchillo, luego su navaja. «¿El plástico? Ah… Perdón. Creo que mi corazón se fue a Dinamarca.»", C: "Henrik mira el mapa, el cuchillo y su propia navaja, en ese orden. «¿El precinto? Ah. Perdona. Mi corazón acaba de pedir asilo en Dinamarca.»" },
            mood: "worried", next: "cuchillo-mapa",
          },
          {
            id: "loco",
            say: { A: "¿Estás loco? ¡Guarda esa navaja!", B: "¿Estás loco o qué? ¡Guarda esa navaja ahora mismo!", C: "¿Tú estás loco? ¡Guarda esa navaja antes de que alguien llame a la policía!" },
            reply: { A: "Henrik grita más. «¡Tú primero!» Una señora del hotel grita: «¡Sebastián! ¡Dos cuchillos!»", B: "Henrik grita todavía más. «¡Tú primero!» Desde la puerta del hotel, una señora grita: «¡Sebastián! ¡Dos cuchillos en la plaza!»", C: "Henrik sube la voz. «¡Tú primero!» En la puerta del hotel, una señora se lleva las manos a la cabeza: «¡Sebastián! ¡Dos cuchillos!»" },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-duelo": {
        who: "henrik", mood: "scared",
        line: {
          A: "Los dos tienen el cuchillo en alto. Nadie se mueve. Henrik habla muy despacio. «A la de tres. Los dos. Uno… dos…»",
          B: "Los dos con el cuchillo en alto, a dos metros, bajo el tilo. Henrik habla muy despacio, como si contara en dos idiomas. «A la de tres. Los dos a la vez. Uno… dos…»",
          C: "Dos cuchillos en alto, dos metros de distancia y un tilo de testigo. Henrik cuenta con una calma prestada. «A la de tres, los dos a la vez. Uno… dos…»",
        },
        options: [
          {
            id: "tres",
            say: { A: "¡Tres! Lo guardo. ¿Ves? Ya está.", B: "¡Tres! Guardado. ¿Ves? Se acabó.", C: "¡Tres! Guardado. ¿Lo ves? Fin del duelo." },
            reply: { A: "Henrik guarda la navaja. Respira. «Qué locura. Perdón. Yo solo busco la estación.»", B: "Henrik guarda la navaja y respira con todo el cuerpo. «Qué locura. Perdón. Yo solo buscaba la estación de tren.»", C: "Henrik guarda la navaja y suelta todo el aire. «Qué locura. Perdona. Yo solo quería encontrar la estación.»" },
            mood: "worried", next: "cuchillo-mapa",
          },
          {
            id: "trampa",
            say: { A: "¿Y si guardas tú y yo no? Es broma. ¡Tres!", B: "¿Y si tú guardas y yo no? Es broma, hombre. ¡Tres!", C: "¿Y si tú guardas y yo no? Tranquilo, es broma. ¡Tres!" },
            reply: { A: "Henrik no entiende la broma. Corre. Hacia el este.", B: "Henrik no entiende la broma. Guarda la navaja y sale corriendo… hacia el este.", C: "Henrik no capta la ironía. Guarda la navaja y echa a correr hacia el este, es decir, al lado equivocado." },
            mood: "scared", end: "cuchillo-corre",
          },
          {
            id: "policia",
            say: { A: "Mejor llamamos a la policía. Los dos.", B: "Mejor llamamos a la policía. Los dos, juntos.", C: "Propongo que llamemos a la policía los dos. Es más civilizado." },
            reply: { A: "Henrik asiente. «Sí. Policía. En Dinamarca también.» Saca el celular con la otra mano.", B: "Henrik asiente, aliviado. «Sí. Policía. En Dinamarca haríamos lo mismo.» Saca el celular sin bajar la navaja.", C: "Henrik asiente con alivio. «Sí, policía. En Dinamarca lo haríamos antes.» Marca con una mano, navaja en la otra." },
            mood: "worried", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-mapa": {
        who: "henrik", mood: "worried",
        line: {
          A: "Henrik recoge el mapa. Le tiemblan las manos. «Bueno. Sin cuchillos. ¿Dónde está la estación? Y habla despacio, por favor.»",
          B: "Henrik recoge el mapa del suelo con las manos todavía temblando. «Bueno. Sin cuchillos. ¿Dónde está la estación? Despacio, que después del susto entiendo menos.»",
          C: "Henrik recoge el mapa con un temblor visible. «Bien. Sin cuchillos. ¿Dónde queda la estación? Y despacio, que mi español se ha ido con el susto.»",
        },
        options: [
          {
            id: "recto",
            say: { A: "Todo recto. En la segunda calle, a la izquierda. Sin cuchillos.", B: "Todo recto por la avenida y en la segunda calle a la izquierda. Y sin cuchillos.", C: "Todo recto por la avenida, segunda calle a la izquierda. Y lo de los cuchillos queda entre nosotros." },
            reply: { A: "Henrik repite: «Recto. Segunda. Izquierda. Sin cuchillos.» Sonríe un poco.", B: "Henrik repite en voz baja: «Recto, segunda, izquierda… sin cuchillos.» Y sonríe por primera vez.", C: "Henrik repite como un mantra: «Recto, segunda, izquierda, sin cuchillos.» Y consigue una media sonrisa." },
            mood: "smile", end: "cuchillo-amigos",
          },
          {
            id: "abrir",
            say: { A: "¿Abro el plástico ahora? Con cuidado.", B: "¿Te abro el plástico del mapa ahora? Con mucho cuidado.", C: "¿Abro el precinto del mapa ahora? Prometo lentitud quirúrgica." },
            reply: { A: "Henrik da un paso atrás. «Eh… sí. Despacio.» El mapa se abre. «Gracias. Ahora, la estación.»", B: "Henrik da un paso atrás, pero asiente. «Sí… despacio.» El mapa por fin se abre. «Gracias. Y ahora, ¿la estación?»", C: "Henrik retrocede un paso y asiente. «Sí, pero despacio.» El mapa se abre al fin. «Gracias. Ahora sí: ¿la estación?»" },
            mood: "worried", next: "repetir",
          },
          {
            id: "taxi",
            say: { A: "Después de esto, mejor un taxi. En el hotel hay.", B: "Después de este susto, mejor pide un taxi. En la puerta del hotel hay varios.", C: "Después de un duelo así, te mereces un taxi. En la puerta del hotel hay varios." },
            reply: { A: "Henrik mira el hotel. «Sí. Taxi. Hoy no camino más.» Guarda el mapa.", B: "Henrik mira hacia el hotel. «Sí. Un taxi. Hoy ya no camino más con desconocidos.» Guarda el mapa.", C: "Henrik mira el hotel con alivio. «Sí, un taxi. Por hoy se acabaron los desconocidos armados.» Guarda el mapa." },
            mood: "worried", end: "taxi",
          },
        ],
      },
      "pistola-inicio": {
        who: "henrik", mood: "terror",
        line: {
          A: "Un chico muy alto viene con un mapa. Ve tu pistola. Levanta las manos. El mapa cae. «No, por favor. Toma mi dinero. No quiero problemas.»",
          B: "Un chico altísimo se acerca con un mapa, ve la pistola en tu cintura y levanta las manos de golpe. El mapa cae al suelo. «No, por favor. Toma mi dinero. No quiero problemas.»",
          C: "Un chico de casi dos metros se acerca con un mapa, ve la pistola y levanta las manos tan arriba que roza las ramas. El mapa cae. «No, por favor. Toma mi dinero, pero no quiero problemas.»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Baja las manos. No quiero tu dinero. ¿Qué buscas?", B: "Baja las manos, hombre. No quiero tu dinero. ¿Qué buscas?", C: "Baja las manos, por favor. Tu dinero no me interesa. ¿Qué buscabas?" },
            reply: { A: "Henrik baja las manos muy despacio. «La estación. Pero… ¿por qué llevas un arma?»", B: "Henrik baja las manos muy despacio, sin dejar de mirar la pistola. «La estación de tren. Pero… ¿por qué llevas un arma?»", C: "Henrik baja las manos milímetro a milímetro, con los ojos en la pistola. «La estación. Pero dime: ¿por qué llevas un arma?»" },
            mood: "scared", next: "pistola-guia",
          },
          {
            id: "cartera",
            say: { A: "Guarda tu dinero. Tranquilo. ¿Adónde vas?", B: "Guarda tu dinero, tranquilo. ¿Adónde querías ir?", C: "Guarda la cartera, de verdad. ¿Adónde te dirigías?" },
            reply: { A: "Henrik no baja las manos. «A la estación. ¿Me puedo ir? Por favor.»", B: "Henrik sigue con las manos arriba. «A la estación. ¿Me puedo ir ya? Por favor.»", C: "Henrik mantiene las manos en alto. «A la estación. ¿Puedo irme? Preferiría irme.»" },
            mood: "scared", next: "pistola-guia",
          },
          {
            id: "seguridad",
            say: { A: "Es por seguridad. La ciudad es peligrosa.", B: "Es solo por seguridad. Esta ciudad es peligrosa de noche.", C: "Es una medida de seguridad. Esta ciudad, de noche, tiene sus riesgos." },
            reply: { A: "Henrik corre. Sin el mapa. Hacia el este.", B: "Henrik sale corriendo sin recoger el mapa. Hacia el este, claro.", C: "Henrik echa a correr sin el mapa, con zancadas de dos metros. Hacia el este, naturalmente." },
            mood: "terror", end: "pistola-corre",
          },
        ],
      },
      "pistola-guia": {
        who: "henrik", mood: "scared",
        line: {
          A: "Henrik recoge el mapa sin mirar la pistola. «Dime el camino, por favor. Rápido. Y guarda eso.»",
          B: "Henrik recoge el mapa sin apartar los ojos de la pistola. «Dime el camino, por favor. Rápido. Y guarda eso, que no puedo pensar.»",
          C: "Henrik recoge el mapa con los ojos fijos en tu cintura. «Dime el camino, por favor, y rápido. Y guarda eso, que no me deja pensar en español.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. Mira: todo recto y a la izquierda. Perdón.", B: "La guardo, perdona. Mira: todo recto por la avenida y luego a la izquierda.", C: "La guardo, y te pido perdón. Todo recto por la avenida y después a la izquierda." },
            reply: { A: "Henrik respira. «Recto. Izquierda. Gracias.» Se va rápido, mirando atrás.", B: "Henrik respira por fin. «Recto, izquierda. Gracias.» Se aleja rápido, mirando atrás dos veces.", C: "Henrik respira. «Recto, izquierda. Gracias.» Se aleja a buen paso, con dos miradas atrás por si acaso." },
            mood: "worried", end: "deprisa",
          },
          {
            id: "acompanar",
            say: { A: "Te acompaño hasta la avenida. Sin pistola, mira.", B: "Te acompaño hasta la avenida. Mira: la guardo y vamos.", C: "Te acompaño hasta la avenida. La pistola queda guardada; palabra." },
            reply: { A: "Henrik duda. Luego dice que sí. «Bueno. Pero tú delante.»", B: "Henrik duda mucho. Al final asiente. «Bueno. Pero tú caminas delante.»", C: "Henrik lo piensa más de lo normal. «Está bien. Pero tú vas delante y yo detrás, a distancia.»" },
            mood: "worried", end: "pistola-escolta",
          },
          {
            id: "policia",
            say: { A: "Tranquilo, no pasa nada. ¿Por qué tiemblas tanto?", B: "Tranquilo, que no pasa nada. ¿Por qué tiemblas tanto?", C: "Tranquilo, no va a pasar nada. ¿A qué viene tanto temblor?" },
            reply: { A: "Henrik señala detrás de ti. Un coche de policía para en la esquina. El portero del hotel los llamó.", B: "Henrik señala detrás de ti con la barbilla. Un coche de policía frena en la esquina: el portero del hotel los ha llamado.", C: "Henrik señala detrás de ti sin mover las manos. Un coche patrulla frena en la esquina; el portero del Imperial no pierde el tiempo." },
            mood: "scared", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "henrik", mood: "terror",
        line: {
          A: "Un chico muy alto viene con un mapa. Ve tu granada. Corre, corre mucho. Grita desde detrás de un árbol: «¡¿Es de verdad?!»",
          B: "Un chico altísimo se acerca con un mapa, ve la granada en tu bolsillo y sale corriendo como nunca. Desde detrás de un tilo, a veinte metros, grita: «¡¿Eso es de verdad?!»",
          C: "Un chico de casi dos metros se acerca con un mapa, ve la granada y bate un récord de velocidad. Desde detrás de un tilo, a veinte metros, grita: «¡¿Eso es auténtico?!»",
        },
        options: [
          {
            id: "no-se",
            say: { A: "¡No sé! ¿Necesitas ayuda? ¡Habla desde allí!", B: "¡No lo sé! ¿Necesitabas ayuda? ¡Puedes hablar desde ahí!", C: "¡Ni idea! ¿Necesitabas algo? Podemos hablar a esta distancia." },
            reply: { A: "Henrik grita: «¡La estación! ¡Desde aquí, por favor!» No sale del árbol.", B: "Henrik grita desde el tilo: «¡La estación de tren! ¡Pero desde aquí, por favor!» No piensa moverse.", C: "Henrik grita sin asomar más que la cabeza: «¡La estación! ¡Pero desde aquí, si no te importa!»" },
            mood: "scared", next: "granada-arbol",
          },
          {
            id: "falsa",
            say: { A: "¡Es falsa! ¡Ven! ¡No pasa nada!", B: "¡Es falsa, hombre! ¡Ven, que no pasa nada!", C: "¡Es de utilería! Ven, que no explota nada." },
            reply: { A: "Henrik no viene. «¡En Dinamarca las falsas también dan miedo!» Un guardia del hotel mira.", B: "Henrik no se mueve. «¡En Dinamarca las falsas también dan miedo!» Un guardia de seguridad del hotel ya te está mirando.", C: "Henrik no cede. «¡En Dinamarca las de utilería también asustan!» El guardia de seguridad del hotel te observa con mucho interés." },
            mood: "scared", next: "granada-arbol",
          },
          {
            id: "broma",
            say: { A: "¡Es una broma! ¡Mira, la lanzo al aire!", B: "¡Es una broma! ¡Mira, la lanzo al aire y la agarro!", C: "¡Es una broma! Mira: la lanzo al aire y la recojo, sin más." },
            reply: { A: "Henrik grita. El guardia del hotel grita. Alguien llama a emergencias. Se oye un helicóptero.", B: "Henrik grita. El guardia del hotel grita. Una señora llama a emergencias. A lo lejos empieza a sonar un helicóptero.", C: "Henrik grita; el guardia del hotel grita; una señora de abrigo granate llama a emergencias. Un helicóptero despierta a lo lejos." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-arbol": {
        who: "henrik", mood: "scared",
        line: {
          A: "Henrik habla desde el árbol. «¿Izquierda o derecha? ¡Grita, por favor! ¡No quiero acercarme!»",
          B: "Henrik sigue detrás del tilo y habla a gritos. «¿La estación es a la izquierda o a la derecha? ¡Dímelo desde ahí, que no me acerco!»",
          C: "Henrik, parapetado tras el tilo, negocia a gritos. «¿Izquierda o derecha para la estación? ¡Desde ahí, por favor! No pienso acercarme a eso.»",
        },
        options: [
          {
            id: "gritar",
            say: { A: "¡Todo recto! ¡Segunda calle! ¡Izquierda!", B: "¡Todo recto por la avenida! ¡Segunda calle a la izquierda!", C: "¡Todo recto por la avenida y en la segunda calle, a la izquierda! ¡A gritos, como ves!" },
            reply: { A: "Henrik repite a gritos: «¡Recto! ¡Segunda! ¡Izquierda!» Se va corriendo, pero por el lado correcto.", B: "Henrik repite a gritos: «¡Recto, segunda, izquierda!» Y se va corriendo, esta vez por el lado correcto.", C: "Henrik repite a voz en cuello: «¡Recto, segunda, izquierda!» Y huye, por una vez, en la dirección correcta." },
            mood: "worried", end: "granada-gritos",
          },
          {
            id: "guardar",
            say: { A: "La guardo en la mochila. Ven. Te enseño el mapa.", B: "La guardo en la mochila, mira. Ven, que te enseño el mapa.", C: "La guardo en la mochila; ya no se ve. Ven, que te lo enseño en el mapa." },
            reply: { A: "Henrik viene despacio. Muy despacio. «Bueno. Pero el mapa lo tienes tú.»", B: "Henrik se acerca despacio, muy despacio. «Bueno. Pero tú sujetas el mapa. Yo no me acerco más.»", C: "Henrik se acerca a cámara lenta. «Está bien. Pero el mapa lo sostienes tú; yo me quedo aquí.»" },
            mood: "worried", next: "mapa",
          },
          {
            id: "seguridad",
            say: { A: "Tranquilo, es para mi seguridad.", B: "Tranquilo, la llevo por seguridad.", C: "Tranquilo: es, digamos, mi seguro de vida." },
            reply: { A: "El guardia del hotel llama a alguien. Un helicóptero aparece sobre la plaza.", B: "El guardia del hotel ya está hablando por radio. Sobre la plaza aparece un helicóptero con un foco enorme.", C: "El guardia del hotel habla por radio con voz grave. Un helicóptero asoma sobre los tejados y su foco te encuentra enseguida." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "gas-inicio": {
        who: "henrik", mood: "scared",
        line: {
          A: "Un chico muy alto viene muy rápido con un mapa. Levantas el gas pimienta. Se para en seco. «¡Perdón! ¿Esto es normal aquí? ¿La ciudad es peligrosa?»",
          B: "Un chico altísimo viene hacia ti a toda velocidad con un mapa. Levantas el gas pimienta y frena en seco. «¡Perdón, perdón! ¿Esto es normal aquí? ¿Es una ciudad peligrosa?»",
          C: "Un chico de casi dos metros se te echa encima con un mapa y levantas el gas pimienta. Frena en seco. «¡Perdón! ¿Es normal aquí? ¿Debería preocuparme por esta ciudad?»",
        },
        options: [
          {
            id: "normal",
            say: { A: "Es normal. De noche, mejor prevenir. ¿Qué buscas?", B: "Bastante normal. De noche hay que prevenir. ¿Qué buscabas?", C: "Es relativamente normal. De noche, prevenir sale barato. ¿Qué buscabas?" },
            reply: { A: "Henrik se pone pálido. «¿Peligrosa? Yo busco la estación. ¿Hay taxis?»", B: "Henrik palidece. «¿Entonces es peligrosa? Yo buscaba la estación. ¿Hay taxis? Prefiero un taxi.»", C: "Henrik palidece bajo la farola. «¿O sea que es peligrosa? Yo buscaba la estación. ¿Hay taxis? Me he vuelto partidario del taxi.»" },
            mood: "worried", next: "gas-peligro",
          },
          {
            id: "perdon",
            say: { A: "Perdón. Lo guardo. Viniste muy rápido.", B: "Perdona, lo guardo. Es que viniste muy rápido.", C: "Perdona, lo guardo. Es que llegaste como un tren." },
            reply: { A: "Henrik se ríe, nervioso. «Mi madre dice que camino como un tren. ¿Dónde está la estación? Y guarda eso, por favor.»", B: "Henrik se ríe, nervioso. «Mi madre siempre dice que camino como un tren. ¿Dónde está la estación? Y guarda bien eso.»", C: "Henrik suelta una risa nerviosa. «Mi madre dice que camino como una locomotora. ¿Dónde queda la estación? Y guárdalo bien, por favor.»" },
            mood: "worried", next: "gas-peligro",
          },
          {
            id: "alto",
            say: { A: "¡No te acerques! ¿Qué quieres?", B: "¡No te acerques más! ¿Qué quieres de mí?", C: "¡Ni un paso más! ¿Qué se te ofrece?" },
            reply: { A: "Henrik retrocede con las manos arriba. «Nada. Nada. Me voy. Adiós.» Se va por el lado equivocado.", B: "Henrik retrocede con las manos en alto. «Nada, nada. Me voy. Adiós.» Y se va por el lado equivocado.", C: "Henrik retrocede con las manos en alto. «Nada. Me voy. Buenas noches.» Y se aleja por el lado equivocado de la ciudad." },
            mood: "scared", end: "gas-adios",
          },
        ],
      },
      "gas-peligro": {
        who: "henrik", mood: "worried",
        line: {
          A: "Henrik mira a todos lados. «¿Y si alguien me roba? ¿Camino a la estación o pido taxi? Tú conoces la ciudad.»",
          B: "Henrik mira a todos lados, de repente desconfiado. «¿Y si me roban por el camino? ¿Voy andando a la estación o pido un taxi? Tú conoces la ciudad.»",
          C: "Henrik mira a todos lados como si la plaza fuera una emboscada. «¿Y si me asaltan por el camino? ¿Voy a pie o en taxi? Tú conoces la ciudad; yo solo conozco este gas.»",
        },
        options: [
          {
            id: "taxi",
            say: { A: "Pide un taxi en el hotel. Es más seguro.", B: "Pide un taxi en la puerta del hotel. Es lo más seguro.", C: "Pide un taxi en el hotel. Hoy la seguridad vale lo que cueste." },
            reply: { A: "Henrik asiente mucho. «Sí. Taxi. Gracias por el consejo. Y por no usar el gas.»", B: "Henrik asiente varias veces. «Sí. Un taxi. Gracias por el consejo… y por no usar el gas.»", C: "Henrik asiente con energía. «Sí, un taxi. Gracias por el consejo y, sobre todo, por no apretar el bote.»" },
            mood: "smile", end: "taxi",
          },
          {
            id: "acompanar",
            say: { A: "Te acompaño hasta la avenida. Con el gas guardado.", B: "Te acompaño hasta la avenida. Con el gas guardado, prometido.", C: "Te acompaño hasta la avenida, con el gas en el bolsillo y sin sustos." },
            reply: { A: "Henrik sonríe. «Gracias. Pero tú caminas a tres metros, ¿sí?»", B: "Henrik sonríe, aliviado. «Gracias. Pero caminas a tres metros de mí, ¿de acuerdo?»", C: "Henrik sonríe por fin. «Gracias. Pero a tres metros de distancia, si no te importa.»" },
            mood: "smile", end: "gas-escolta",
          },
          {
            id: "exagerado",
            say: { A: "No exageres. La ciudad es tranquila. Vete andando.", B: "No exageres, hombre. La ciudad es tranquila. Ve andando.", C: "No exageres. Es una ciudad tranquila; ve andando y disfruta." },
            reply: { A: "Henrik mira tu gas. «¿Tranquila? ¿Y eso?» Se va, mirando atrás todo el tiempo.", B: "Henrik mira el gas en tu mano. «¿Tranquila? ¿Y entonces eso?» Se va, mirando atrás todo el rato.", C: "Henrik señala el bote con la barbilla. «¿Tranquila? ¿Y eso qué es, un perfume?» Se aleja mirando atrás cada tres pasos." },
            mood: "worried", end: "gas-adios",
          },
        ],
      },
      "lapiz-inicio": {
        who: "henrik", mood: "smile",
        line: {
          A: "Un chico muy alto viene con un mapa. Ve tu lápiz y sonríe. «¡Un lápiz! ¿Me dibujas el camino? Mi mapa es viejo y yo no entiendo nada.»",
          B: "Un chico altísimo se acerca con un mapa de papel, ve tu lápiz y se le ilumina la cara. «¡Un lápiz! ¿Me puedes dibujar el camino? Mi mapa es de 1998 y mi cabeza, de ayer.»",
          C: "Un chico de casi dos metros se acerca con un mapa de 1998, ve tu lápiz y sonríe como si hubiera encontrado agua. «¡Un lápiz! ¿Me dibujarías el camino? El mapa es viejo y yo estoy peor.»",
        },
        options: [
          {
            id: "dibujar",
            say: { A: "Claro. ¿Adónde vas? Dibujo aquí, en el margen.", B: "Claro. ¿Adónde quieres ir? Te lo dibujo aquí, en el margen.", C: "Por supuesto. ¿Adónde vas? Te lo dibujo en el margen; el resto del mapa ya no sirve." },
            reply: { A: "«A la estación. Pero también al mercado de noche. Tengo hambre.» Henrik sujeta el mapa.", B: "«A la estación. Pero antes al mercado de noche, si da tiempo. Tengo hambre.» Henrik sujeta el mapa con las dos manos.", C: "«A la estación. Y al mercado de noche si el reloj lo permite; el estómago insiste.» Henrik te sostiene el mapa." },
            mood: "smile", next: "lapiz-dibujo",
          },
          {
            id: "palabras",
            say: { A: "Primero escribo las palabras: izquierda, derecha, recto.", B: "Primero te escribo las palabras clave: izquierda, derecha, todo recto.", C: "Antes del mapa, el vocabulario: izquierda, derecha, todo recto. Así no hay excusa." },
            reply: { A: "Henrik lee: «Izquierda… derecha… recto.» Se ríe. «En danés es más fácil.»", B: "Henrik lee en voz alta: «Izquierda, derecha, todo recto.» Se ríe. «En danés suena más corto.»", C: "Henrik lee despacio: «Izquierda, derecha, todo recto.» Se ríe. «En danés lo digo en la mitad de tiempo.»" },
            mood: "smile", next: "lapiz-dibujo",
          },
          {
            id: "guardar",
            say: { A: "Es mi único lápiz. Mejor te lo explico con las manos.", B: "Es mi único lápiz y lo cuido mucho. Mejor te lo explico con las manos.", C: "Es mi único lápiz y le tengo cariño. Te lo explico con las manos, que son gratis." },
            reply: { A: "Henrik se ríe. «Bueno. Manos. ¿Dónde está la estación?»", B: "Henrik se ríe. «De acuerdo, con las manos. ¿Dónde está la estación?»", C: "Henrik se ríe. «Manos, entonces. ¿Por dónde queda la estación?»" },
            mood: "smile", next: "repetir",
          },
        ],
      },
      "lapiz-dibujo": {
        who: "henrik", mood: "neutral",
        line: {
          A: "Dibujas: la plaza, la avenida, una flecha. Henrik mira. «¿Esta X soy yo? ¿Y este humo es la estación?»",
          B: "Dibujas la plaza, la avenida, dos calles y una flecha. Henrik estudia el dibujo. «¿Esta X soy yo? ¿Y ese humo es la estación o el mercado?»",
          C: "Dibujas la plaza, la avenida, dos cruces y una flecha con humo al final. Henrik lo examina con respeto. «¿La X soy yo? ¿Y el humo es la estación, o el mercado con las empanadas?»",
        },
        options: [
          {
            id: "estacion",
            say: { A: "El humo es la estación. Recto y a la izquierda. ¿Lo ves?", B: "El humo es la estación: todo recto y a la izquierda. ¿Lo ves claro?", C: "El humo es la estación: recto por la avenida y a la izquierda. ¿Queda claro?" },
            reply: { A: "Henrik dobla el mapa con tu dibujo. «¡Clarísimo! Tu mapa es mejor que el mío. ¡Gracias!»", B: "Henrik dobla el mapa con tu dibujo dentro. «¡Clarísimo! Tu mapa es mejor que el mío, y el mío costó dinero.»", C: "Henrik dobla el mapa como un tesoro. «Clarísimo. Tu dibujo vale más que mi mapa, y el mapa lo pagó mi abuela.»" },
            mood: "smile", end: "lapiz-mapa",
          },
          {
            id: "mercado",
            say: { A: "Dibujo también el mercado. Aquí, al oeste. Comes y luego el tren.", B: "Te dibujo también el mercado: aquí, al oeste. Comes algo y luego vas al tren.", C: "Añado el mercado: aquí, al oeste. Cena rápida y luego el tren, sin drama." },
            reply: { A: "Henrik sonríe. «Perfecto. Primero comer, después el tren. ¿Me regalas el lápiz? Para el viaje.»", B: "Henrik sonríe de oreja a oreja. «Perfecto: primero comer, después correr. ¿Me prestas el lápiz para el viaje? Quiero apuntar palabras.»", C: "Henrik sonríe. «Perfecto: cena y tren. ¿Me dejarías el lápiz? Quiero apuntar palabras en el viaje.»" },
            mood: "smile", end: "lapiz-regalo",
          },
          {
            id: "alreves",
            say: { A: "Henrik… Tu mapa está al revés. Mi dibujo también ahora.", B: "Henrik… tienes el mapa al revés. Y ahora mi dibujo también.", C: "Henrik, llevas el mapa al revés. Y, por tanto, mi dibujo también." },
            reply: { A: "Henrik gira el mapa. Se ríe. «¡Entonces la izquierda es la derecha!» Te mira, perdido.", B: "Henrik gira el mapa y se pone rojo. «¡Entonces mi izquierda es tu derecha!» Te mira, más perdido que antes.", C: "Henrik gira el mapa y se tapa la cara. «Entonces la izquierda del dibujo es mi derecha de ahora.» Te mira, perdido con estilo." },
            mood: "surprised", next: "repetir",
          },
        ],
      },
      "libro-inicio": {
        who: "henrik", mood: "laugh",
        line: {
          A: "Un chico muy alto viene con un mapa. Ve tu libro y se ríe. «¿Un libro en la calle de noche? ¡Eres como mi abuela! ¿Es una guía?»",
          B: "Un chico altísimo se acerca con un mapa, ve tu libro y se ríe con ganas. «¿Un libro en la calle a estas horas? ¡Eres igual que mi abuela! Dime que es una guía de la ciudad.»",
          C: "Un chico de casi dos metros se acerca con un mapa, ve tu libro y suelta una carcajada. «¿Un libro en plena calle a medianoche? Mi abuela hacía lo mismo. Dime que es una guía, por favor.»",
        },
        options: [
          {
            id: "novela",
            say: { A: "No es una guía. Es una novela. ¿Tu abuela leía en la calle?", B: "No es una guía, es una novela. ¿Tu abuela leía en la calle?", C: "Me temo que es una novela. ¿Tu abuela leía en plena calle?" },
            reply: { A: "Henrik sonríe. «En esta plaza. Ella era de aquí. Hoy vi su casa.»", B: "Henrik sonríe. «En esta plaza, en ese banco. Mi abuela era de aquí. Hoy fui a ver su casa.»", C: "Henrik sonríe con nostalgia. «En esta misma plaza, en ese banco. Mi abuela nació aquí. Hoy he visto su casa.»" },
            mood: "smile", next: "libro-abuela",
          },
          {
            id: "guia",
            say: { A: "¡Sí! Es mi guía. Abro y busco la estación. Un momento.", B: "¡Claro que es una guía! Espera, busco la estación. Un momento.", C: "Es una guía, por supuesto. Dame un segundo que localizo la estación." },
            reply: { A: "Henrik mira la página. Es una novela. Se ríe. «¡Capítulo tres: la estación! Muy útil.»", B: "Henrik mira por encima de tu hombro. Es una novela. Se ríe. «Capítulo tres: el amor. Muy útil para llegar a la estación.»", C: "Henrik lee por encima de tu hombro y descubre la novela. «Capítulo tres: una despedida en la estación. Simbólico, pero poco práctico.»" },
            mood: "laugh", next: "libro-abuela",
          },
          {
            id: "regalar",
            say: { A: "Es una novela. Te la regalo para el tren.", B: "Es una novela. Toma, te la regalo para el tren.", C: "Es una novela. Quédatela para el tren; se lee mejor en movimiento." },
            reply: { A: "Henrik abre los ojos. «¿Para mí? ¡Gracias! Te doy mi guía de 1998. Es un trueque.»", B: "Henrik abre mucho los ojos. «¿Para mí? ¡Gracias! Te doy mi guía de 1998 a cambio. Trueque nórdico.»", C: "Henrik se queda sin palabras un instante. «¿Para mí? Gracias. A cambio te doy mi guía de 1998. Un trueque justo, aunque malo para ti.»" },
            mood: "smile", end: "libro-trueque",
          },
        ],
      },
      "libro-abuela": {
        who: "henrik", mood: "smile",
        line: {
          A: "Henrik se sienta en el banco. «Mi abuela leía aquí. Yo tengo tren a las once y media. ¿Me lees una página? Solo una.»",
          B: "Henrik se sienta en el banco de su abuela, con el mapa olvidado. «Ella leía aquí cada noche. Mi tren sale a las once y media. ¿Me lees una página? Solo una, en español.»",
          C: "Henrik se sienta en el banco con el mapa olvidado. «Mi abuela leía aquí todas las noches. Mi tren sale a las once y media. ¿Me lees una página? Una sola, para oír el español que ella hablaba.»",
        },
        options: [
          {
            id: "leer",
            say: { A: "Una página. Escucha.", B: "Una página, de acuerdo. Escucha.", C: "Una página, y ni una línea más. Escucha." },
            reply: { A: "Lees. Henrik cierra los ojos. «Gracias. Mi tren puede esperar. Hay otro a las doce.»", B: "Lees despacio. Henrik cierra los ojos y sonríe. «Gracias. El tren puede esperar: hay otro a las doce.»", C: "Lees con calma. Henrik cierra los ojos. «Gracias. Que se vaya el tren; hay otro a las doce y esto no se repite.»" },
            mood: "love", end: "libro-banco",
          },
          {
            id: "tren",
            say: { A: "Primero el tren. Mira: todo recto y a la izquierda. El libro, otro día.", B: "Primero el tren, Henrik. Todo recto y a la izquierda. El libro, otro día.", C: "El tren primero, Henrik: recto por la avenida y a la izquierda. El libro puede esperar; el tren, no." },
            reply: { A: "Henrik se levanta. «Tienes razón. Mi novia me mata.» Mira el banco una vez más.", B: "Henrik se levanta de un salto. «Tienes razón. Si pierdo el tren, mi novia me mata.» Mira el banco una última vez.", C: "Henrik se levanta. «Tienes razón; mi novia no entendería la excusa del banco.» Mira el banco una última vez." },
            mood: "smile", end: "estacion",
          },
          {
            id: "llevar",
            say: { A: "Llévate el libro. Lo lees en el tren. Es de tu abuela ahora.", B: "Llévate el libro y léelo en el tren. Ahora es de tu abuela, digamos.", C: "Llévate el libro y léelo en el tren. Considera que ahora es de tu abuela." },
            reply: { A: "Henrik abraza el libro. «Gracias. Te doy mi guía. No sirve, pero es mía.»", B: "Henrik abraza el libro. «Gracias. A cambio, mi guía de 1998. No sirve para nada, pero es mía.»", C: "Henrik abraza el libro como a un pariente. «Gracias. A cambio, mi guía de 1998: inútil, pero sentimental.»" },
            mood: "love", end: "libro-trueque",
          },
        ],
      },
      "corazon-inicio": {
        who: "henrik", mood: "smitten",
        line: {
          A: "Un chico muy alto viene con un mapa. Ve el corazón y se pone rojo. Se le cae el mapa. «Hola… Perdón… Yo… ¿tú vives aquí?»",
          B: "Un chico altísimo se acerca con un mapa, ve el corazón y se pone rojo hasta las orejas. El mapa se le cae. «Hola… perdón… yo… ¿Tú eres de aquí? Qué bonito… la plaza, digo.»",
          C: "Un chico de casi dos metros se acerca con un mapa, ve el corazón y enrojece hasta las orejas. El mapa cae al suelo. «Hola… perdona… yo… ¿Eres de aquí? La plaza es preciosa. Tú también. Digo, la plaza.»",
        },
        options: [
          {
            id: "ayudar",
            say: { A: "Hola. ¿Estás perdido? Te ayudo con gusto.", B: "Hola. ¿Te has perdido? Te ayudo encantado.", C: "Hola. Pareces perdido. Déjame ayudarte; será un placer." },
            reply: { A: "Henrik sonríe mucho. «Sí. Busco la estación. Pero ahora no tengo prisa. Me llamo Henrik.»", B: "Henrik sonríe de oreja a oreja. «Sí, buscaba la estación. Pero de repente no tengo prisa. Me llamo Henrik.»", C: "Henrik sonríe sin control. «Buscaba la estación. Aunque, de pronto, la prisa se me ha pasado. Soy Henrik.»" },
            mood: "love", next: "corazon-henrik",
          },
          {
            id: "mapa",
            say: { A: "Se te cayó el mapa. Toma. Tienes cara de buena persona.", B: "Se te cayó el mapa. Toma. Tienes cara de buena persona, ¿sabes?", C: "Se te ha caído el mapa. Toma. Tienes cara de buena persona, y no lo digo por decir." },
            reply: { A: "Henrik toma el mapa y tu mano se queda un segundo. «Gracias. Me llamo Henrik. Mi abuela era de aquí.»", B: "Henrik toma el mapa y sus dedos rozan los tuyos un segundo de más. «Gracias. Soy Henrik. Mi abuela era de esta plaza.»", C: "Henrik recoge el mapa y el roce dura un segundo más de lo necesario. «Gracias. Soy Henrik. Mi abuela nació en esta plaza.»" },
            mood: "love", next: "corazon-henrik",
          },
          {
            id: "directo",
            say: { A: "¿La estación? Todo recto y a la izquierda. ¡Buen viaje!", B: "¿Buscas la estación? Todo recto y a la izquierda. ¡Buen viaje!", C: "¿La estación? Recto por la avenida y a la izquierda. Buen viaje, Henrik de mapa caído." },
            reply: { A: "Henrik no se mueve. «Gracias… ¿Y tú adónde vas? Te acompaño.»", B: "Henrik no se mueve del sitio. «Gracias… ¿Y tú adónde vas? Te acompaño, si quieres. El tren puede esperar.»", C: "Henrik no da ni un paso. «Gracias… ¿Y tú hacia dónde vas? Te acompaño; los trenes se repiten.»" },
            mood: "smitten", next: "corazon-henrik",
          },
        ],
      },
      "corazon-henrik": {
        who: "henrik", mood: "love",
        line: {
          A: "Henrik dobla el mapa sin mirarlo. «Mañana conozco a los padres de mi novia. Pero esta noche… ¿cenamos en el mercado? Como amigos.»",
          B: "Henrik dobla el mapa sin mirarlo, todavía rojo. «Mañana conozco a los padres de mi novia. Pero esta noche… ¿me acompañas al mercado a cenar? Como amigos, claro.»",
          C: "Henrik dobla el mapa sin mirarlo, con las orejas aún encendidas. «Mañana conozco a mis suegros. Pero esta noche… ¿me acompañas al mercado a cenar? Como amigos. Estrictamente.»",
        },
        options: [
          {
            id: "si",
            say: { A: "Como amigos, sí. Vamos al mercado.", B: "Como amigos, perfecto. Vamos al mercado.", C: "Como amigos, faltaría más. Vamos al mercado." },
            reply: { A: "Henrik sonríe. «¡Genial! En Dinamarca los amigos se dan la mano. Aquí… no sé.» Te da un beso en la mejilla, rojo.", B: "Henrik sonríe. «¡Genial! En Dinamarca los amigos se dan la mano. Aquí… no sé qué se hace.» Y te da un beso en la mejilla, rojísimo.", C: "Henrik sonríe. «Genial. En Dinamarca los amigos se estrechan la mano; aquí no sé el protocolo.» Y te besa la mejilla, incendiado." },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "novia",
            say: { A: "Tu novia tiene suerte. Ve al tren, Henrik.", B: "Tu novia tiene suerte, Henrik. Anda, ve a por ese tren.", C: "Tu novia tiene suerte, Henrik. Corre a ese tren y mañana sé encantador." },
            reply: { A: "Henrik suspira. «Tienes razón. Gracias por… todo.» Te abraza. Es un abrazo muy alto.", B: "Henrik suspira hondo. «Tienes razón. Gracias por… bueno, por todo.» Te abraza. Es un abrazo desde muy arriba.", C: "Henrik suspira. «Tienes razón. Gracias por… todo esto.» Te abraza; a esa altura, parece un rescate." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "broma",
            say: { A: "¿Como amigos? Tienes la cara muy roja, Henrik.", B: "¿Como amigos? Tienes la cara más roja que el hotel, Henrik.", C: "¿Como amigos? Henrik, tienes la cara del mismo color que la alfombra del Imperial." },
            reply: { A: "Henrik se ríe y se tapa la cara. «Es el frío. ¡Es el frío danés!» Te invita a cenar igual.", B: "Henrik se ríe y se tapa la cara con el mapa. «¡Es el frío! El frío danés viaja conmigo.» Y te invita a cenar igual.", C: "Henrik se ríe detrás del mapa. «Es el frío. Frío danés de importación.» Y mantiene la invitación." },
            mood: "laugh", end: "juntos",
          },
        ],
      },
    },
    ends: {
      estacion: { text: { A: "Henrik se va hacia la estación. Va contento. Te dice adiós con el mapa.", B: "Henrik se aleja hacia la estación con paso alegre. En la esquina se gira y te saluda con el mapa.", C: "Henrik se aleja hacia la estación, feliz. En la esquina levanta el mapa, ya bien orientado, a modo de despedida." }, change: "se-va", flag: "henrik", recap: "Le explicaste a Henrik cómo llegar a la estación." },
      mercado: { text: { A: "Henrik va al mercado de noche. Tiene mucha hambre.", B: "Henrik se va hacia el mercado de noche, al oeste, con hambre y prisa.", C: "Henrik pone rumbo al mercado de noche. Su estómago, por fin, ha ganado la discusión." }, change: "se-va", recap: "Mandaste a Henrik a cenar al mercado de noche." },
      juntos: { text: { A: "Vas con Henrik al mercado. Él te habla de su abuela.", B: "Caminas con Henrik hacia el mercado. Por el camino te cuenta historias de su abuela.", C: "Acompañas a Henrik al mercado. Por el camino, entre dos idiomas, te cuenta la vida de su abuela." }, change: "se-va", recap: "Fuiste con Henrik al mercado de noche." },
      taxi: { text: { A: "Henrik llama un taxi en la puerta del hotel.", B: "Henrik pide un taxi en la puerta del hotel y te saluda desde la ventanilla.", C: "Henrik consigue un taxi en la puerta del hotel y te saluda desde dentro, con las rodillas en la barbilla." }, change: "llama", recap: "Le recomendaste a Henrik tomar un taxi." },
      corre: { text: { A: "Henrik corre en la dirección equivocada. Ahora está más perdido.", B: "Henrik desaparece corriendo en la dirección equivocada. Esta noche va a perder el tren.", C: "Henrik desaparece en dirección contraria a la estación. Su tren, sin duda, saldrá sin él." }, change: "corre", recap: "Asustaste a Henrik y salió corriendo hacia el lado equivocado." },
      deprisa: { text: { A: "Henrik se va rápido. No está contento.", B: "Henrik se aleja deprisa. Llega a la estación, pero sin ganas de volver a preguntar a nadie.", C: "Henrik se aleja con prisa. Llegará a la estación, aunque con una opinión discutible sobre la hospitalidad local." }, change: "se-va", recap: "Le diste indicaciones a Henrik, pero se fue asustado." },
      "cuchillo-policia": { text: { A: "Llega la policía. Dos cuchillos sobre el banco. Henrik dice «perdón» en tres idiomas.", B: "Llega la policía y pone los dos cuchillos sobre el banco. Henrik pide perdón en tres idiomas y pierde el tren.", C: "Llega un coche patrulla y los dos cuchillos acaban sobre el banco, etiquetados. Henrik pide perdón en tres idiomas y, por supuesto, pierde el tren." }, change: "policia", recap: "Tu cuchillo y la navaja de Henrik terminaron en manos de la policía." },
      "cuchillo-corre": { text: { A: "Henrik corre hacia el este con la navaja guardada. Va al lado equivocado.", B: "Henrik desaparece corriendo hacia el este, navaja guardada y mapa en el suelo. El lado equivocado, como siempre.", C: "Henrik se pierde corriendo hacia el este, con la navaja guardada y el mapa abandonado. El lado equivocado, fiel a su estilo." }, change: "corre", recap: "El duelo de cuchillos con Henrik terminó con él corriendo." },
      "cuchillo-amigos": { text: { A: "Henrik se va hacia la estación. Levanta la mano sin navaja. «¡Sin cuchillos!», grita.", B: "Henrik se aleja hacia la estación. En la esquina levanta la mano vacía y grita: «¡Sin cuchillos!»", C: "Henrik se aleja hacia la estación y, en la esquina, levanta la mano vacía a modo de tratado de paz: «¡Sin cuchillos!»" }, change: "se-va", flag: "henrik", recap: "Después del duelo de cuchillos, Henrik llegó a la estación." },
      "pistola-corre": { text: { A: "Henrik corre hacia el este. Su mapa se queda en el suelo. Lo recoges.", B: "Henrik desaparece corriendo hacia el este. Su mapa se queda en el suelo. Lo recoges, por si vuelve.", C: "Henrik desaparece hacia el este a grandes zancadas. Su mapa queda en la acera; lo recoges, aunque nadie vuelve a buscarlo." }, change: "corre", recap: "Henrik vio tu pistola y huyó sin su mapa." },
      "pistola-escolta": { text: { A: "Caminas delante. Henrik detrás, a cinco metros. En la avenida dice «gracias» y corre.", B: "Caminas delante y Henrik te sigue a cinco metros. En la avenida murmura «gracias» y sale corriendo hacia la estación.", C: "Caminas delante y Henrik te sigue a cinco metros exactos. Al llegar a la avenida murmura «gracias» y se va corriendo hacia la estación." }, change: "se-va", flag: "henrik", recap: "Henrik te siguió a distancia hasta la avenida, sin perder de vista tu pistola." },
      "pistola-patrulla": { text: { A: "Dos policías bajan del coche. Henrik levanta las manos otra vez. Tú también.", B: "Dos policías bajan del coche. Henrik vuelve a levantar las manos, por costumbre. Tú también, por obligación.", C: "Dos agentes bajan del coche patrulla. Henrik levanta las manos por reflejo; tú, por obligación." }, change: "policia", recap: "El portero del hotel vio tu pistola y llamó a la policía." },
      "granada-gritos": { text: { A: "Henrik corre por la avenida. Grita «¡gracias!» desde muy lejos.", B: "Henrik corre por la avenida y grita «¡gracias!» desde muy lejos, sin girarse.", C: "Henrik corre por la avenida y grita «¡gracias!» desde una distancia prudente, sin mirar atrás ni una vez." }, change: "huye", flag: "henrik", recap: "Le diste indicaciones a Henrik a gritos, con la granada entre los dos." },
      "granada-helicoptero": { text: { A: "Un helicóptero ilumina la plaza. Henrik, detrás del árbol, saluda con el mapa.", B: "Un helicóptero ilumina la plaza entera. Henrik, detrás del tilo, saluda con el mapa, por si sirve de algo.", C: "El foco del helicóptero convierte la plaza en un escenario. Henrik, tras el tilo, saluda con el mapa, por si acaso." }, change: "helicoptero", recap: "Tu granada asustó a Henrik y trajo un helicóptero." },
      "gas-adios": { text: { A: "Henrik se va mirando atrás. No le gusta esta ciudad.", B: "Henrik se aleja mirando atrás cada pocos pasos. Esta ciudad ya no le gusta.", C: "Henrik se aleja mirando atrás a intervalos regulares. La ciudad ha perdido un admirador." }, change: "se-va", recap: "Tu gas pimienta convenció a Henrik de que la ciudad es peligrosa." },
      "gas-escolta": { text: { A: "Caminas con Henrik hasta la avenida. Él, a tres metros. Al final sonríe.", B: "Acompañas a Henrik hasta la avenida. Él mantiene sus tres metros, pero al final sonríe y saluda.", C: "Acompañas a Henrik hasta la avenida; él respeta los tres metros, pero en la esquina sonríe y saluda con el mapa." }, change: "se-va", flag: "henrik", recap: "Acompañaste a Henrik hasta la avenida con el gas guardado." },
      "lapiz-mapa": { text: { A: "Henrik se va con tu dibujo en el mapa. Va contento.", B: "Henrik se aleja hacia la estación con tu dibujo en el margen del mapa. Va contento y orientado.", C: "Henrik se aleja hacia la estación con tu dibujo en el margen. Por primera vez, el mapa y él van en la misma dirección." }, change: "se-va", flag: "henrik", recap: "Dibujaste el camino en el mapa de Henrik con tu lápiz." },
      "lapiz-regalo": { text: { A: "Le das el lápiz. Henrik lo guarda como un tesoro. Se va al mercado.", B: "Le prestas el lápiz. Henrik lo guarda como un tesoro y se va hacia el mercado, apuntando palabras.", C: "Le cedes el lápiz. Henrik lo guarda como una reliquia y pone rumbo al mercado, anotando palabras por el camino." }, change: "se-va", recap: "Henrik se fue al mercado con tu lápiz para apuntar palabras." },
      "libro-trueque": { text: { A: "Henrik tiene tu novela. Tú tienes una guía de 1998. Los dos contentos.", B: "Henrik se va con tu novela bajo el brazo. Tú te quedas con una guía de 1998. Los dos salen ganando, de algún modo.", C: "Henrik se aleja con tu novela bajo el brazo y tú te quedas con una guía de 1998. Un trueque absurdo que, curiosamente, deja a los dos contentos." }, change: "se-va", flag: "henrik", recap: "Cambiaste tu libro por la guía de 1998 de Henrik." },
      "libro-banco": { text: { A: "Henrik se queda en el banco de su abuela. Pierde el tren. No le importa.", B: "Henrik se queda en el banco de su abuela, con los ojos cerrados. Pierde el tren de las once y media. No le importa.", C: "Henrik se queda en el banco de su abuela, con los ojos cerrados y el mapa olvidado. El tren se va sin él; no le importa lo más mínimo." }, change: "se-sienta", recap: "Le leíste una página a Henrik en el banco de su abuela." },
      "corazon-beso": { text: { A: "Henrik te da un beso en la mejilla. Está muy rojo. Van juntos al mercado.", B: "Henrik te da un beso en la mejilla, rojo hasta las orejas. Luego caminan juntos hacia el mercado.", C: "Henrik te besa la mejilla con las orejas en llamas. Luego caminan juntos hacia el mercado, él un poco más alto que antes." }, change: "beso", recap: "Henrik se puso rojo con tu corazón y te dio un beso." },
      "corazon-abrazo": { text: { A: "Henrik te abraza y se va a la estación. Mira atrás tres veces.", B: "Henrik te abraza y se va hacia la estación. Mira atrás tres veces antes de la esquina.", C: "Henrik te abraza y pone rumbo a la estación. Mira atrás tres veces antes de doblar la esquina." }, change: "abraza", flag: "henrik", recap: "Henrik te abrazó y se fue a su tren." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Tienes miedo de la gente desconocida?", B: "¿Qué harías si alguien sacara una navaja delante de ti?", C: "¿Cómo se desactiva una situación tensa sin perder la calma ni el orgullo?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces cuando tienes mucho miedo?", B: "¿Alguna vez obedeciste a alguien por miedo?", C: "¿Qué dice de una ciudad que un turista levante las manos antes de preguntar el camino?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Corres rápido?", B: "¿Cuál fue el momento más ridículo de un viaje tuyo?", C: "¿Qué hace que un momento de pánico se convierta en una buena historia?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Tu ciudad es peligrosa?", B: "¿Qué consejos de seguridad le darías a un turista en tu ciudad?", C: "¿Cuándo un consejo de prudencia acaba asustando más que ayudando?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Dibujas bien?", B: "¿Alguna vez dibujaste un mapa para alguien?", C: "¿Qué se entiende mejor con un dibujo que con mil palabras?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Lees en la calle?", B: "¿Qué libro te recuerda a alguien de tu familia?", C: "¿Qué vale más: llegar a tiempo o quedarse en un momento que no se repite?" } },
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿Te pones rojo fácilmente?", B: "¿Cuándo fue la última vez que te pusiste rojo delante de alguien?", C: "¿Cómo se distingue la amabilidad del coqueteo?" } },
    },
    speak: {
      A1: "¿Qué hay cerca de tu casa?",
      A2: "¿Cuándo te perdiste por última vez?",
      B1: "¿Cómo explicas el camino a alguien que no conoce tu ciudad?",
      B2: "¿Qué prefieres para orientarte en una ciudad nueva: un mapa de papel, el celular o preguntar, y por qué?",
      C1: "¿En qué se nota que alguien entiende de verdad tus indicaciones y no solo asiente por educación?",
      C2: "¿Qué tiene de valioso perderse en un lugar desconocido?",
    },
  },

  // ─────────────────────────────────────────── ESCENA 3
  {
    id: "alto-fiesta",
    kind: "escena",
    district: "alto",
    title: "Salen de una fiesta",
    verb: "HABLAR",
    goal: "Aceptar o rechazar una invitación, negociar condiciones, hacer preguntas sobre un plan y despedirse con amabilidad.",
    cast: [
      {
        id: "leire", name: "Leire", role: "Invitada a la boda, con el ramo",
        age: "young", body: "f", build: "slim", height: 1.7,
        hair: "long", hairColor: "#1d1512", skin: "#f0cba8",
        top: "dress", topColor: "#b0243f", bottom: "skirt", bottomColor: "#b0243f",
        extras: ["earrings", "flowers"], pose: "stand",
      },
      {
        id: "oscar", name: "Óscar", role: "Invitado a la boda",
        age: "young", body: "m", build: "athletic", height: 1.85,
        hair: "buzz", hairColor: "#141010", skin: "#6e4a33",
        top: "shirt", topColor: "#f2efe8", bottom: "pants", bottomColor: "#1e2230",
        extras: [], pose: "dance",
      },
      {
        id: "mavi", name: "Mavi", role: "Invitada a la boda, zapatos en la mano",
        age: "adult", body: "f", build: "heavy", height: 1.6,
        hair: "curly", hairColor: "#7a2f1d", skin: "#d8a57c",
        top: "dress", topColor: "#2f6a5a", bottom: "skirt", bottomColor: "#2f6a5a",
        extras: ["bag"], pose: "carry",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "leire", mood: "smile",
        line: {
          A: "Tres amigos salen del Hotel Imperial. Se ríen mucho. Una chica con un ramo de flores te habla. «¡Hola! ¿Vienes a una fiesta con nosotros?»",
          B: "Tres amigos muy elegantes salen riendo del Hotel Imperial. Una chica con un ramo de novia se acerca. «¡Hola! Nos vamos a otra fiesta. ¿Te apuntas?»",
          C: "Tres invitados de boda salen del Hotel Imperial con la corbata floja y la risa fácil. Una chica agita un ramo de novia como si fuera una antorcha. «¡Tú! Tienes cara de fiesta. ¿Te vienes?»",
        },
        options: [
          {
            id: "aceptar",
            say: { A: "¡Sí, claro! ¿Adónde van?", B: "¡Me apunto! ¿Adónde van exactamente?", C: "Pues mira, no tenía planes. ¿Adónde me quieren secuestrar?" },
            reply: { A: "La chica aplaude. «¡Bien! Me llamo Leire. Vamos a La Fábrica.»", B: "La chica aplaude. «¡Así me gusta! Soy Leire. Vamos a La Fábrica, una fiesta en un almacén viejo.»", C: "La chica se ríe. «Secuestro voluntario. Soy Leire, y el destino es La Fábrica: un almacén viejo con la mejor música de la ciudad.»" },
            mood: "smile", next: "plan",
          },
          {
            id: "rechazar",
            say: { A: "Gracias, pero hoy no puedo.", B: "Muchas gracias, pero esta noche no puedo.", C: "Me halaga mucho, pero esta noche ya tengo otros planes." },
            reply: { A: "Un chico alto se ríe. «¿No? ¡Pero es sábado!»", B: "Un chico alto pone cara de tragedia. «¿Cómo que no? ¡Es sábado por la noche!»", C: "Un chico alto se lleva la mano al pecho, teatral. «¿Otros planes? ¿Mejores que nosotros? Imposible.»" },
            mood: "surprised", next: "insistir",
          },
          {
            id: "boda",
            say: { A: "¿De dónde vienen? ¡Qué elegantes!", B: "¡Qué elegantes! ¿De dónde vienen?", C: "Antes de nada: ¿de dónde salen ustedes tan arreglados a estas horas?" },
            reply: { A: "Leire levanta el ramo. «¡De una boda! Y mira: ¡tengo el ramo!»", B: "La chica levanta el ramo, orgullosa. «¡De una boda! Soy Leire. ¡Y atrapé el ramo de la novia!»", C: "La chica, Leire, levanta el ramo como un trofeo. «De una boda. Y antes de que preguntes: sí, lo atrapé yo. Y no, no tengo pareja.»" },
            mood: "smile", next: "boda",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz.", B: "Sacas el lápiz y un papel.", C: "Sacas el lápiz con aire de organizador profesional." },
            say: { A: "¿Dónde es la fiesta? Escribo la dirección.", B: "¿Me dan la dirección? La apunto, por si acaso.", C: "Díctenme la dirección. Alguien en este grupo tiene que ser responsable." },
            reply: { A: "Mavi sonríe. «¡Bien! Alguien organizado. Es al sudeste, al lado del río.»", B: "Una señora con los zapatos en la mano te mira con cariño. «¡Por fin alguien con sentido común! Soy Mavi. Es al sudeste, junto al río.»", C: "Una señora descalza aplaude. «¡Gracias! Soy Mavi, y llevo toda la noche siendo la responsable. Es al sudeste, junto al río.»" },
            mood: "smile", next: "plan",
          },
          libro: {
            act: { A: "Leire ve tu libro.", B: "Leire te quita el libro de la mano, curiosa.", C: "Leire te quita el libro con la confianza de quien ya ha bailado cinco horas." },
            say: { A: "Es mi libro. ¿Te gusta leer?", B: "¡Eh! Es mi libro. ¿Te gusta leer?", C: "Cuidado con ese libro, que tiene más valor sentimental que literario." },
            reply: { A: "Leire se abanica con el libro. «¡Qué calor! Bailamos cinco horas en la boda.»", B: "Leire se abanica con él. «¡Perfecto para el calor! Venimos de una boda. Bailamos cinco horas.»", C: "Leire lo usa de abanico. «Su mejor uso, sin duda. Venimos de una boda donde bailamos hasta perder la dignidad.»" },
            mood: "smile", next: "boda",
          },
          gas: {
            act: { A: "Vienen hacia ti con mucho ruido. Sacas el gas pimienta.", B: "Se acercan gritando y riendo. Nervioso, sacas el gas pimienta.", C: "Tres desconocidos se te echan encima a gritos y sacas el gas pimienta." },
            say: { A: "¡Alto! ¿Qué quieren?", B: "¡Quietos! ¿Qué quieren de mí?", C: "¡Un momento! ¿Qué está pasando aquí?" },
            reply: { A: "Los tres se paran. Leire grita. «¡Ay! ¡Solo es una invitación!»", B: "Los tres se quedan quietos. Leire esconde la cara detrás del ramo. «¡Solo queríamos invitarte!»", C: "Los tres se congelan. Leire levanta el ramo como escudo. «¡Es una invitación a una fiesta, no un asalto!»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Óscar ve tu granada.", B: "Óscar ve la granada en tu mano.", C: "Óscar descubre la granada y su sonrisa se congela." },
            say: { A: "Hola. ¿Qué fiesta es?", B: "Hola, ¿de qué fiesta hablan?", C: "Cuéntenme más de esa fiesta." },
            reply: { A: "Óscar se ríe y luego no. «¿Es un encendedor? Eh… no. ¡No es un encendedor!»", B: "Óscar se ríe. «¡Qué encendedor tan raro!» Lo mira mejor y se pone serio. «Eso no es un encendedor.»", C: "«Original, el encendedor», dice Óscar. Luego lo mira mejor y empuja a sus amigas hacia atrás. «No. Definitivamente, no es un encendedor.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Mavi ve tu pistola.", B: "Mavi ve tu pistola y deja caer los zapatos.", C: "Mavi ve la pistola y los zapatos se le caen al suelo." },
            say: { A: "Hola. ¿Qué tal la noche?", B: "Hola, ¿qué tal la fiesta?", C: "Buenas noches. ¿Qué tal la celebración?" },
            reply: { A: "Mavi grita. «¡Una pistola! ¡Chicos, atrás!»", B: "Mavi agarra a sus amigos del brazo. «¡Chicos! ¡Tiene una pistola! ¡Atrás!»", C: "Mavi da un paso atrás y tira de sus amigos. «La fiesta iba bien hasta hace un segundo, gracias.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "El vestido de Leire tiene un hilo largo. Sacas el cuchillo.", B: "El vestido de Leire arrastra un hilo larguísimo. Sacas el cuchillo.", C: "Del vestido de Leire cuelga un hilo de un metro. Sacas el cuchillo." },
            say: { A: "Tu vestido tiene un hilo. ¿Lo corto?", B: "Tu vestido está perdiendo un hilo. ¿Quieres que lo corte?", C: "Si no cortamos ese hilo, mañana no te queda vestido. ¿Me permites?" },
            reply: { A: "Leire dice que sí. «¡Gracias! Bailamos mucho en la boda.»", B: "Leire se queda quieta, un poco tensa. «Uf… gracias. Es lo que pasa cuando bailas cinco horas en una boda.»", C: "Leire contiene la respiración. «Gracias. Cinco horas bailando en una boda no las aguanta ni la seda.»" },
            mood: "smile", next: "boda",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "¡Qué bonito tu ramo! ¿Lo atrapaste tú?", B: "Ese ramo es precioso. ¿Lo atrapaste tú? ¡Qué suerte!", C: "Me encanta tu ramo. Dicen que quien lo atrapa se casa pronto, ¿no?" },
            reply: { A: "Leire se ríe. «¡Sí! Pero no tengo novio. ¡Toma, es para ti!» Te da una flor.", B: "Leire se ríe y te da una flor del ramo. «Sí, pero no tengo pareja. Así que comparto la suerte. Ahora vienes con nosotros.»", C: "Leire te pone una flor en la solapa. «Sin pareja a la vista, así que reparto la suerte. Y quien acepta una flor, acepta la fiesta.»" },
            mood: "love", next: "plan",
          },
        },
      },
      boda: {
        who: "oscar", mood: "smile",
        line: {
          A: "Óscar se presenta. «Venimos de una boda. ¡Bailamos cinco horas! Ahora vamos a La Fábrica.»",
          B: "Un chico alto se presenta: Óscar. «La boda fue increíble. Ahora vamos a La Fábrica, un almacén viejo en el sudeste. ¿Vienes?»",
          C: "Óscar, el chico alto, se afloja la corbata. «Boda impecable, discursos interminables. Ahora toca La Fábrica: almacén viejo, música nueva. ¿Te sumas?»",
        },
        options: [
          {
            id: "ir",
            say: { A: "¡Qué bien! ¿Puedo ir con ustedes?", B: "¡Suena genial! ¿De verdad puedo ir con ustedes?", C: "Si me aceptan sin traje de boda, me sumo encantado." },
            reply: { A: "Óscar sonríe. «¡Claro! Cuantos más, mejor.»", B: "Óscar choca los cinco contigo. «¡Claro! Cuantos más, mejor.»", C: "Óscar te mira de arriba abajo. «El traje es opcional. El buen humor, no. Aprobado.»" },
            mood: "smile", next: "plan",
          },
          {
            id: "lejos",
            say: { A: "¿Dónde está La Fábrica? ¿Está lejos?", B: "¿Y dónde está La Fábrica? ¿Queda muy lejos?", C: "¿Y esa Fábrica dónde queda? Porque yo no tengo veinte años de rodillas." },
            reply: { A: "Óscar señala. «En el sudeste, al lado del río. Veinte minutos a pie.»", B: "Óscar señala hacia el sudeste. «Al lado del río, en la zona de los almacenes. Unos veinte minutos andando.»", C: "Óscar señala al sudeste. «Junto al río. Veinte minutos andando, o diez si Mavi no se para a hablar con todo el mundo.»" },
            mood: "smile", next: "plan",
          },
          {
            id: "cansado",
            say: { A: "Me gusta bailar, pero hoy no tengo energía.", B: "Me encanta bailar, pero hoy no tengo energía para nada.", C: "La idea es tentadora, pero mi energía se fue a dormir hace una hora." },
            reply: { A: "Óscar no acepta un no. «¡Solo una hora! ¡Por favor!»", B: "Óscar junta las manos. «¡Una hora! Solo una hora. Te prometo que merece la pena.»", C: "Óscar junta las manos como en misa. «La energía aparece al llegar. Es científico. Solo una hora.»" },
            mood: "surprised", next: "insistir",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "¡Qué feliz estás! ¿La boda de quién es?", B: "Se te ve muy feliz. ¿Quién se casó?", C: "Tienes cara de haber llorado en algún discurso. ¿Me equivoco?" },
            reply: { A: "Óscar sonríe. «Mi mejor amigo. Di un discurso y lloré mucho. ¡Ven con nosotros!»", B: "Óscar se ríe, un poco tímido. «Mi mejor amigo. Hice el discurso y lloré más que la novia. Ahora necesito bailar. ¡Ven!»", C: "Óscar se tapa la cara. «Culpable. Se casó mi mejor amigo y lloré más que su abuela. Necesito bailar para recuperar la reputación. Ven.»" },
            mood: "love", next: "plan",
          },
        },
      },
      insistir: {
        who: "oscar", mood: "surprised",
        line: {
          A: "Óscar insiste. «¡Solo una hora! Nosotros pagamos la entrada.»",
          B: "Óscar no se rinde. «Mira: una hora y te vas. Nosotros te pagamos la entrada. ¿Trato?»",
          C: "Óscar negocia como un abogado. «Última oferta: una hora, entrada pagada y Mavi te presenta a todo el mundo. ¿Trato?»",
        },
        options: [
          {
            id: "negociar",
            say: { A: "Bueno, una hora. Pero a las dos me voy a casa.", B: "Está bien: una hora. Pero a las dos me voy, ¿de acuerdo?", C: "Acepto, con una condición: a las dos me voy, aunque pongan mi canción favorita." },
            reply: { A: "Óscar grita. «¡Sí! ¡Trato hecho!»", B: "Óscar levanta los brazos. «¡Trato hecho! A las dos, ni un minuto más. Bueno, a lo mejor uno.»", C: "Óscar te da la mano con solemnidad. «Trato hecho. Pero si ponen tu canción, la cláusula queda anulada.»" },
            mood: "smile", end: "fabrica",
          },
          {
            id: "no",
            say: { A: "De verdad, no. Pero ¡que lo pasen muy bien!", B: "De verdad que no puedo. Pero ¡que se diviertan mucho!", C: "Agradezco mucho la oferta, pero hoy paso. Bailen también por mí." },
            reply: { A: "Óscar sonríe. «¡Bueno! Otro día.» Los tres se van.", B: "Óscar se encoge de hombros, sonriendo. «Bueno, tú te lo pierdes. ¡Otro día!»", C: "Óscar hace una reverencia. «Bailaremos en tu honor. Pésimamente, pero con cariño.»" },
            mood: "smile", end: "despedida",
          },
          {
            id: "caminar",
            say: { A: "¿Caminamos juntos un poco? Después decido.", B: "¿Y si caminamos juntos un rato y luego decido?", C: "Propongo algo intermedio: los acompaño un trecho y decido por el camino." },
            reply: { A: "Óscar acepta. «¡Bien! Mavi, ¿vamos?»", B: "«Me parece justo», dice Óscar, y llama a su amiga. «¡Mavi! ¡Tenemos un indeciso!»", C: "«Una estrategia muy diplomática», dice Óscar. «Mavi, tenemos a alguien en periodo de prueba.»" },
            mood: "smile", next: "plan",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Eres muy simpático. ¿Por qué quieres que vaya?", B: "Me caes muy bien. Pero, ¿por qué insistes tanto?", C: "Insistes con mucho encanto. ¿Cuál es la verdadera razón?" },
            reply: { A: "Óscar se ríe. «Soy nuevo en la ciudad. No tengo muchos amigos.» Empieza a bailar aquí.", B: "Óscar se pone serio un segundo. «Llegué a la ciudad hace un mes. Quiero hacer amigos.» Y empieza a bailar en la acera.", C: "Óscar baja la voz. «Llevo un mes en la ciudad y estos dos son mis únicos amigos. Busco ampliar la plantilla.» Y se pone a bailar ahí mismo." },
            mood: "love", end: "baile",
          },
        },
      },
      plan: {
        who: "mavi", mood: "smile",
        line: {
          A: "Mavi tiene los zapatos en la mano. «Bueno, ¿vamos? Pero yo no camino veinte minutos.»",
          B: "Mavi, la mayor del grupo, levanta los zapatos. «Muy bien, ¿vamos? Pero con estos pies yo no camino veinte minutos.»",
          C: "Mavi agita los zapatos de tacón como una prueba del delito. «Me apunto a todo, menos a caminar veinte minutos con esto.»",
        },
        options: [
          {
            id: "pie",
            say: { A: "Vamos a pie. La noche está muy bonita.", B: "Vamos caminando despacio. La noche está preciosa.", C: "Vamos dando un paseo, sin prisa. Una noche así no se desperdicia en un taxi." },
            reply: { A: "Mavi suspira y se ríe. «Bueno… ¡Vamos!»", B: "Mavi se ríe. «Bueno, pero si me canso, me llevas tú.»", C: "Mavi resopla con humor. «De acuerdo. Pero si me desmayo, me cargas tú.»" },
            mood: "smile", end: "fabrica",
          },
          {
            id: "taxi",
            say: { A: "Tomamos un taxi. Pagamos entre los cuatro.", B: "Podemos pedir un taxi y pagarlo entre los cuatro.", C: "Propongo un taxi a medias: cuatro personas, cuatro partes, cero ampollas." },
            reply: { A: "Mavi te abraza. «¡Gracias! ¡Por fin una buena idea!»", B: "Mavi te da un abrazo. «¡Por fin alguien piensa en mis pies!»", C: "«Cero ampollas», repite Mavi, emocionada. «Eres la mejor persona que he conocido esta noche.»" },
            mood: "smile", end: "fabrica",
          },
          {
            id: "mejor-no",
            say: { A: "Pensándolo bien, hoy no voy. ¡Que se diviertan!", B: "Pensándolo mejor, hoy me quedo. ¡Que se diviertan!", C: "¿Saben qué? Mejor me retiro a tiempo. Diviértanse por los cuatro." },
            reply: { A: "Mavi sonríe. «Bueno. ¡Buenas noches!»", B: "Mavi te da un beso en la mejilla. «Lo entiendo. ¡Buenas noches!»", C: "Mavi asiente con sabiduría. «Retirarse a tiempo también es un arte. Que descanses.»" },
            mood: "smile", end: "despedida",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Mavi, eres muy divertida. ¿Vas mucho de fiesta?", B: "Mavi, me encanta tu energía. ¿Sales mucho de fiesta?", C: "Mavi, tienes más energía que todos nosotros juntos. ¿Cuál es tu secreto?" },
            reply: { A: "Mavi se ríe. «¡No! Mi primera fiesta en veinte años. ¡Vamos!»", B: "Mavi se ríe. «¿Yo? Es mi primera fiesta en veinte años. Tengo tres hijos. ¡Esta noche es mía!»", C: "Mavi se ríe con picardía. «Tres hijos y veinte años sin salir. Esta noche recupero el tiempo perdido.»" },
            mood: "love", end: "fabrica",
          },
        },
      },
      calmar: {
        who: "leire", mood: "scared",
        line: {
          A: "Los tres tienen miedo. Óscar se pone delante. «¡Calma, calma!»",
          B: "Óscar se pone delante de sus amigas. «¡Calma! Solo queríamos invitarte a una fiesta.»",
          C: "Óscar se planta delante de Leire y Mavi con los brazos abiertos. «Calma. Ha sido un error de comunicación. Nuestro, seguro.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Me asusté un poco.", B: "Perdonen, lo guardo. Me asusté porque llegaron gritando.", C: "Perdonen, de verdad. Lo guardo. Entre los gritos y la oscuridad, me asusté." },
            reply: { A: "Leire respira. «Bueno… Venimos de una boda. Somos muy ruidosos.»", B: "Leire baja el ramo, todavía nerviosa. «Perdona tú también. Venimos de una boda y gritamos mucho.»", C: "Leire baja el ramo. «Justo. Venimos de una boda y aún llevamos el volumen de la pista de baile.»" },
            mood: "worried", next: "boda",
          },
          {
            id: "explicar",
            say: { A: "No es nada. Es para mi seguridad.", B: "No pasa nada. Lo llevo solo por seguridad.", C: "Tranquilos, es solo… un accesorio de seguridad." },
            reply: { A: "Mavi llama al portero del hotel. «¡Sebastián! ¡La policía!»", B: "Mavi corre hacia el portero del hotel. «¡Sebastián! ¡Llama a la policía, por favor!»", C: "«Un accesorio», repite Mavi, y corre hacia el portero del hotel. «¡Sebastián, la policía, por favor!»" },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Mejor me voy.", B: "Perdón por el susto. Mejor me voy.", C: "Perdón. Creo que lo mejor es que me retire." },
            reply: { A: "Los tres se van corriendo.", B: "Los tres se van corriendo, con el ramo y los zapatos en la mano.", C: "Los tres salen corriendo calle abajo, con el ramo en alto y los zapatos en la mano." },
            mood: "scared", end: "corren",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón. Tranquilos. ¡Me gusta su ropa de fiesta!", B: "Perdonen el susto, de verdad. Por cierto, van guapísimos.", C: "Perdonen. Empecé fatal. Pero, para compensar: son el grupo mejor vestido de la ciudad." },
            reply: { A: "Leire se ríe. «¡Gracias! Venimos de una boda.»", B: "Leire se ríe, aliviada. «¡Gracias! Es que venimos de una boda.»", C: "Leire se ríe y hace una reverencia. «Disculpas aceptadas. El halago ayuda. Venimos de una boda.»" },
            mood: "love", next: "boda",
          },
        },
      },
      "cuchillo-inicio": {
        who: "oscar", mood: "furious",
        line: {
          A: "Tres amigos salen del hotel riendo. Leire ve tu cuchillo y grita. Óscar se pone delante… y saca un cuchillo de tarta de la chaqueta. «¡Atrás! ¿Qué haces con eso? ¡Ni un paso!»",
          B: "Tres invitados de boda salen del Hotel Imperial entre risas. Leire ve tu cuchillo y suelta un grito. Óscar se planta delante de ella y saca de la chaqueta un cuchillo de tarta robado del banquete. «¡Atrás! ¿Qué haces con ese cuchillo? ¡Ni un paso más!»",
          C: "Tres invitados de boda salen del Imperial con la corbata floja. Leire ve tu cuchillo y grita; Óscar se interpone y, de la chaqueta, saca un cuchillo de tarta que claramente no es suyo. «¡Atrás! ¿Qué haces tú con eso? ¡Ni un paso más!»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Tranquilo. Lo bajo. ¿Y tú por qué tienes un cuchillo de tarta?", B: "Tranquilo, lo bajo. ¿Y tú por qué llevas un cuchillo de tarta?", C: "Calma, lo bajo. Aunque permíteme la pregunta: ¿por qué llevas un cuchillo de tarta en la chaqueta?" },
            reply: { A: "Óscar mira su cuchillo. «Eh… Lo robé de la boda. Para la fiesta. ¡Pero tú primero!»", B: "Óscar mira su cuchillo como si lo viera por primera vez. «Eh… me lo llevé de la boda, para cortar algo en la fiesta. ¡Pero tú bajas primero!»", C: "Óscar observa su cuchillo con sorpresa. «Me lo llevé del banquete, por si en La Fábrica había tarta. Pero tú bajas primero.»" },
            mood: "worried", next: "cuchillo-duelo",
          },
          {
            id: "hilo",
            say: { A: "¡Es para el vestido! Tiene un hilo largo. ¡Mira!", B: "¡Es para el hilo del vestido de tu amiga! Mira, arrastra un metro.", C: "¡Es para el hilo del vestido de Leire! Mira: lleva un metro de hilo detrás." },
            reply: { A: "Leire mira su vestido. «¡Es verdad!» Óscar no baja el cuchillo. «¿Y por eso sacas un cuchillo en la calle?»", B: "Leire mira hacia abajo. «¡Es verdad, el hilo!» Óscar no baja el suyo. «¿Y para un hilo sacas un cuchillo en plena calle?»", C: "Leire comprueba el hilo. «¡Es verdad!» Óscar mantiene el cuchillo en alto. «¿Y para un hilo sacas eso en mitad de la calle, sin avisar?»" },
            mood: "scared", next: "cuchillo-duelo",
          },
          {
            id: "loco",
            say: { A: "¿Estás loco? ¡Guarda eso! ¡Yo llamo a la policía!", B: "¿Estás loco? ¡Guarda eso ahora mismo o llamo a la policía!", C: "¿Tú estás loco? Guarda eso o la policía nos ve a los dos." },
            reply: { A: "Mavi ya está llamando. «¡Sebastián! ¡Dos cuchillos!» El portero corre hacia ustedes.", B: "Mavi ya está gritando al portero. «¡Sebastián! ¡Dos cuchillos delante del hotel!» El portero cruza corriendo.", C: "Mavi no espera: «¡Sebastián! ¡Dos cuchillos delante del hotel!» El portero cruza la calle a la carrera." },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-duelo": {
        who: "mavi", mood: "angry",
        line: {
          A: "Mavi se pone en medio con los zapatos en la mano. «¡Basta! Los dos bajan el cuchillo a la de tres o les pego con el zapato. Uno… dos…»",
          B: "Mavi se mete en medio con un zapato de tacón en cada mano. «¡Basta ya! A la de tres bajan los dos el cuchillo o les doy con el zapato. Uno… dos…»",
          C: "Mavi se planta entre los dos con un zapato de tacón en cada mano, como una madre harta. «¡Se acabó! A la de tres bajan los dos el cuchillo o les pego con el zapato. Uno… dos…»",
        },
        options: [
          {
            id: "tres",
            say: { A: "¡Tres! Guardado. Perdón, Mavi. Perdón, Óscar.", B: "¡Tres! Guardado. Perdón, Mavi. Y perdón, Óscar.", C: "¡Tres! Guardado. Mis disculpas, Mavi; y las tuyas, Óscar." },
            reply: { A: "Óscar guarda el suyo. Mavi respira. «Bien. Ahora, los dos a la fiesta. Y los cuchillos, a casa.»", B: "Óscar guarda el suyo y Mavi respira. «Bien. Ahora los dos vienen a la fiesta. Y los cuchillos se quedan guardados, ¿entendido?»", C: "Óscar guarda el suyo y Mavi baja los zapatos. «Bien. Ahora los dos se vienen a la fiesta, y los cuchillos no vuelven a salir. ¿Entendido?»" },
            mood: "smile", next: "cuchillo-tregua",
          },
          {
            id: "el-primero",
            say: { A: "Él primero. Él robó un cuchillo de una boda.", B: "Que baje él primero. Él robó un cuchillo de una boda.", C: "Él primero: al fin y al cabo, el suyo es robado de una boda." },
            reply: { A: "Mavi te mira fatal. «¿Perdón? ¡Tres!» Te pega en el brazo con el zapato. Óscar se ríe y guarda el suyo.", B: "Mavi te fulmina con la mirada. «¿Perdón? ¡Tres!» Y te da en el brazo con el zapato. Óscar se ríe y guarda el suyo.", C: "Mavi te dedica una mirada de madre decepcionada. «¿Perdón? ¡Tres!» Te da con el zapato en el brazo. Óscar se ríe y guarda el suyo." },
            mood: "pain", next: "cuchillo-tregua",
          },
          {
            id: "irme",
            say: { A: "Mejor me voy. Perdón por el susto.", B: "Mejor me voy. Perdón por el susto, de verdad.", C: "Creo que lo mejor es retirarme. Disculpen el susto." },
            reply: { A: "Nadie contesta. Los tres te miran hasta que te vas. Leire todavía tiembla.", B: "Nadie contesta. Los tres te miran en silencio mientras te alejas. Leire todavía tiembla detrás del ramo.", C: "Nadie dice nada. Los tres te observan hasta que desapareces. Leire sigue temblando tras el ramo." },
            mood: "sad", end: "cuchillo-silencio",
          },
        ],
      },
      "cuchillo-tregua": {
        who: "leire", mood: "worried",
        line: {
          A: "Leire sale de detrás de Óscar. «Qué susto. Dos cuchillos en mi noche del ramo. Bueno… ¿vienes a La Fábrica o no?»",
          B: "Leire asoma por detrás de Óscar, todavía pálida. «Qué susto. Dos cuchillos la noche en que atrapo el ramo. Bueno… ¿te vienes a La Fábrica o no?»",
          C: "Leire sale de detrás de Óscar, aún sin color. «Menudo susto. Dos cuchillos justo la noche en que atrapo el ramo. En fin… ¿te vienes a La Fábrica o te quedas con tu cuchillo?»",
        },
        options: [
          {
            id: "voy",
            say: { A: "Voy. Pero sin cuchillos. Los dos.", B: "Voy. Pero sin cuchillos, ninguno de los dos.", C: "Voy. Con una condición: los cuchillos se quedan en casa, el mío y el de Óscar." },
            reply: { A: "Óscar levanta las manos. «Trato. El de la tarta se queda aquí.» Lo deja en el banco.", B: "Óscar levanta las manos. «Trato hecho. El de la tarta se queda en este banco.» Y lo deja ahí.", C: "Óscar levanta las manos. «Trato. El de la tarta se jubila en este banco.» Y lo abandona bajo el tilo." },
            mood: "smile", end: "cuchillo-fiesta",
          },
          {
            id: "hilo",
            say: { A: "Primero corto el hilo del vestido. Con cuidado. ¿Puedo?", B: "Primero te corto el hilo del vestido, con cuidado. ¿Me dejas?", C: "Antes de nada, el hilo del vestido. Con cuidado y a la vista de todos. ¿Me permites?" },
            reply: { A: "Leire se queda quieta. Cortas el hilo. «Gracias. Qué noche. Vamos a la fiesta, anda.»", B: "Leire se queda inmóvil. Cortas el hilo. «Gracias. Qué noche tan rara. Anda, vamos a la fiesta.»", C: "Leire contiene la respiración. Cortas el hilo. «Gracias. Qué noche más absurda. Venga, a la fiesta.»" },
            mood: "smile", end: "cuchillo-fiesta",
          },
          {
            id: "no",
            say: { A: "Hoy no. Ya tuve mucha emoción. ¡Que lo pasen bien!", B: "Hoy no, gracias. Ya tuve emoción suficiente. ¡Que lo pasen bien!", C: "Hoy paso. Mi cuota de emociones está cubierta. Diviértanse por mí." },
            reply: { A: "Leire sonríe un poco. «Lo entiendo. Buenas noches.» Se van. Óscar recoge su cuchillo del banco.", B: "Leire sonríe a medias. «Lo entiendo. Buenas noches.» Se van. Óscar recupera su cuchillo del banco, por si acaso.", C: "Leire sonríe a medias. «Lo entiendo. Buenas noches.» Se van, y Óscar recupera su cuchillo del banco con disimulo." },
            mood: "smile", end: "despedida",
          },
        ],
      },
      "pistola-inicio": {
        who: "mavi", mood: "terror",
        line: {
          A: "Tres amigos salen del hotel riendo. Mavi ve tu pistola. Deja caer los zapatos y levanta las manos. «¡No, por favor! ¡Somos de una boda! ¡No tenemos nada!»",
          B: "Tres invitados de boda salen riendo del Hotel Imperial. Mavi ve la pistola en tu cintura, suelta los zapatos y levanta las manos. «¡No, por favor! ¡Venimos de una boda! ¡No llevamos nada!»",
          C: "Tres invitados de boda salen del Imperial con la risa fácil. Mavi ve la pistola, los zapatos se le caen y las manos le suben solas. «¡No, por favor! ¡Venimos de una boda! ¡Solo llevamos flores y resaca!»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Bajen las manos. No quiero nada. Solo paso por aquí.", B: "Bajen las manos, por favor. No quiero nada de ustedes. Solo pasaba.", C: "Bajen las manos, por favor. No quiero nada; simplemente pasaba por aquí." },
            reply: { A: "Mavi no baja las manos. «¿Y entonces por qué llevas una pistola? ¿A una plaza con tilos?»", B: "Mavi no baja las manos ni un centímetro. «¿Y entonces por qué llevas una pistola? ¿A una plaza con tilos y farolas bonitas?»", C: "Mavi mantiene las manos en alto. «¿Y entonces para qué la pistola? Esto es una plaza con tilos, no una película.»" },
            mood: "scared", next: "pistola-mavi",
          },
          {
            id: "fiesta",
            say: { A: "Tranquilos. ¿Qué fiesta? ¿Puedo ir?", B: "Tranquilos. ¿De qué fiesta hablaban? ¿Puedo ir?", C: "Tranquilos. ¿Qué fiesta era esa? ¿Admiten a uno más?" },
            reply: { A: "Óscar habla despacio. «No queremos problemas. La fiesta… es privada. Muy privada.»", B: "Óscar habla muy despacio, con las manos a la vista. «No queremos problemas. La fiesta es… privada. Muy, muy privada.»", C: "Óscar responde con calma de rehén. «No queremos problemas. La fiesta es privada. Extremadamente privada, a partir de ahora.»" },
            mood: "scared", next: "pistola-mavi",
          },
          {
            id: "seguridad",
            say: { A: "Es por seguridad. La calle es peligrosa.", B: "Es solo por seguridad. La calle es peligrosa de noche.", C: "Es una medida de seguridad. De noche, la calle no perdona." },
            reply: { A: "Leire y Óscar corren hacia el hotel. Mavi, descalza, también. «¡Sebastián! ¡Una pistola!»", B: "Leire y Óscar salen corriendo hacia el hotel. Mavi, descalza, los sigue gritando: «¡Sebastián! ¡Una pistola!»", C: "Leire y Óscar huyen hacia el hotel y Mavi, descalza, los sigue a gritos: «¡Sebastián! ¡Una pistola en la plaza!»" },
            mood: "terror", end: "pistola-huyen",
          },
        ],
      },
      "pistola-mavi": {
        who: "mavi", mood: "angry",
        line: {
          A: "Mavi baja las manos y te mira como una madre. «Tengo tres hijos. ¿Tu madre sabe que llevas eso? Guárdala. Ahora.»",
          B: "Mavi baja las manos y te mira como solo mira una madre. «Tengo tres hijos. ¿Tu madre sabe que sales con eso? Guárdala. Ahora mismo.»",
          C: "Mavi baja las manos y te clava una mirada de madre con tres hijos. «¿Tu madre sabe que sales de noche con eso? Guárdala. Ahora, y sin discutir.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. Perdón, Mavi. Mi madre no sabe nada.", B: "La guardo, perdón. Y no, mi madre no sabe nada.", C: "La guardo. Perdón, Mavi. Y no, mi madre no tiene ni idea." },
            reply: { A: "Mavi recoge los zapatos. «Pues mañana se lo cuentas. Y ahora vete a casa. Sin fiesta.»", B: "Mavi recoge los zapatos del suelo. «Pues mañana se lo cuentas tú. Y ahora, a casa. Hoy no hay fiesta para ti.»", C: "Mavi recoge sus zapatos con dignidad. «Pues mañana se lo cuentas. Y esta noche te vas a casa; la fiesta no admite pistolas.»" },
            mood: "worried", end: "pistola-castigo",
          },
          {
            id: "broma",
            say: { A: "¿Y tú por qué llevas los zapatos en la mano? Cada uno con lo suyo.", B: "¿Y tú por qué vas con los zapatos en la mano? Cada uno lleva lo suyo.", C: "¿Y tú por qué vas con los zapatos en la mano? Cada cual carga con lo suyo." },
            reply: { A: "Mavi no se ríe. Leire sí. Óscar señala: un coche de policía dobla la esquina. «Sebastián los llamó.»", B: "Mavi no se ríe; Leire, un poco. Óscar señala la esquina: un coche de policía dobla despacio. «Sebastián ya los llamó.»", C: "Mavi no se ríe; Leire, a su pesar. Óscar señala la esquina, donde un coche patrulla dobla sin prisa. «Sebastián ya ha llamado.»" },
            mood: "worried", end: "pistola-patrulla",
          },
          {
            id: "prometo",
            say: { A: "Prometo dejarla en casa mañana. ¿Me perdonas?", B: "Prometo dejarla en casa a partir de mañana. ¿Me perdonas?", C: "Prometo que a partir de mañana se queda en un cajón. ¿Me perdonas?" },
            reply: { A: "Mavi suspira. «Mis hijos también prometen. Bueno. Vente, pero vigilado.»", B: "Mavi suspira como quien ha oído muchas promesas. «Mis hijos también prometen. Bueno, vente. Pero vigilado.»", C: "Mavi suspira con experiencia. «Mis hijos también prometen cosas. Está bien, vente. Pero bajo vigilancia.»" },
            mood: "smile", end: "pistola-vigilado",
          },
        ],
      },
      "granada-inicio": {
        who: "oscar", mood: "terror",
        line: {
          A: "Tres amigos salen del hotel riendo. Óscar ve tu granada. «¡Qué encendedor tan raro! Ah… no es un encendedor. ¡Corran! ¡Sebastián, saquen a todos del hotel!»",
          B: "Tres invitados de boda salen riendo del Hotel Imperial. Óscar ve la granada en tu mano. «¡Qué encendedor tan raro! Ah… eso no es un encendedor. ¡Corran! ¡Sebastián, evacúen el hotel!»",
          C: "Tres invitados de boda salen del Imperial entre risas. Óscar repara en la granada. «Original, el encendedor… Ah, no. No es un encendedor. ¡Corran! ¡Sebastián, desalojen el hotel!»",
        },
        options: [
          {
            id: "falsa",
            say: { A: "¡No corran! No es de verdad. ¡Es decoración!", B: "¡No corran! No es de verdad. ¡Es de decoración!", C: "¡No corran! No es real. ¡Es un adorno, un objeto de atrezo!" },
            reply: { A: "Nadie te escucha. Los invitados de la boda salen a la calle. La novia también. Está furiosa.", B: "Nadie te escucha. Los invitados de la boda salen en tropel a la plaza. La novia también, con el vestido en la mano y cara de furia.", C: "Nadie te escucha. Los invitados de la boda inundan la plaza. La novia aparece con el vestido recogido y una furia impecable." },
            mood: "scared", next: "granada-boda",
          },
          {
            id: "broma",
            say: { A: "¡Es una broma! Mira, la lanzo al aire.", B: "¡Es una broma! Mira, la lanzo al aire y ya está.", C: "¡Es una broma! Mira: la lanzo al aire, y aquí no pasa nada." },
            reply: { A: "Leire grita. Mavi grita. Un helicóptero aparece sobre el hotel.", B: "Leire grita, Mavi grita, Óscar tira de las dos. Sobre el hotel aparece un helicóptero con un foco enorme.", C: "Leire grita, Mavi grita y Óscar arrastra a las dos. Un helicóptero asoma sobre el Imperial con el foco encendido." },
            mood: "terror", end: "granada-helicoptero",
          },
          {
            id: "tranquilos",
            say: { A: "Tranquilos. Es mía. No explota. ¿Qué fiesta era?", B: "Tranquilos. Es mía y no explota. ¿De qué fiesta hablaban?", C: "Tranquilos: es mía y no explota. ¿Qué fiesta era esa?" },
            reply: { A: "Óscar, desde lejos: «¡La Fábrica! ¡Pero tú no vienes!» La boda entera sale a la plaza.", B: "Óscar contesta desde lejos: «¡La Fábrica! ¡Pero tú no vienes con eso!» Detrás, la boda entera sale a la plaza.", C: "Óscar responde desde una distancia prudente: «¡La Fábrica! ¡Pero tú no vienes con eso!» La boda entera se derrama en la plaza." },
            mood: "scared", next: "granada-boda",
          },
        ],
      },
      "granada-boda": {
        who: "leire", mood: "scared",
        line: {
          A: "La plaza está llena de invitados. La novia grita. Leire te mira con el ramo. «Mi noche del ramo. Y tú con una bomba. Explica.»",
          B: "La plaza se llena de invitados en traje y la novia grita a Sebastián. Leire te apunta con el ramo. «La noche en que atrapo el ramo. Y llegas tú con una bomba. Explícate.»",
          C: "La plaza rebosa invitados y la novia discute a gritos con Sebastián. Leire te apunta con el ramo como con un arma. «La noche en que por fin atrapo el ramo, apareces tú con una bomba. Explícate.»",
        },
        options: [
          {
            id: "abuelo",
            say: { A: "Es de mi abuelo. Es vieja. No funciona. Perdón.", B: "Es de mi abuelo. Es muy vieja y no funciona. Perdón por la boda.", C: "Es una herencia de mi abuelo. No funciona desde hace décadas. Y perdón por la boda." },
            reply: { A: "Leire se ríe, nerviosa. «¿De tu abuelo? ¡Qué familia!» Óscar grita: «¡Es falsa! ¡Todos adentro!»", B: "Leire se ríe, nerviosa. «¿De tu abuelo? ¡Vaya familia!» Óscar grita a la plaza: «¡Es falsa! ¡Todo el mundo adentro!»", C: "Leire suelta una risa nerviosa. «¿Herencia? Vaya familia.» Óscar grita a la plaza: «¡Es de atrezo! ¡Todos adentro!»" },
            mood: "laugh", end: "granada-baile",
          },
          {
            id: "no-se",
            say: { A: "No sé si es de verdad. Nadie lo sabe.", B: "No sé si es de verdad. Nadie quiere averiguarlo.", C: "Sinceramente, no sé si es real. Nadie se ha atrevido a comprobarlo." },
            reply: { A: "La novia te oye. Grita más. Un helicóptero aparece sobre el hotel.", B: "La novia te oye y grita todavía más. Sobre el hotel aparece un helicóptero con el foco encendido.", C: "La novia te oye y su grito sube una octava. Un helicóptero asoma sobre el Imperial con el foco buscándote." },
            mood: "terror", end: "granada-helicoptero",
          },
          {
            id: "irme",
            say: { A: "Mejor me voy. Felicidades a la novia.", B: "Mejor me voy. Felicita a la novia de mi parte.", C: "Creo que lo mejor es que me retire. Felicidades a la novia, de corazón." },
            reply: { A: "Leire tira el ramo al suelo. «¡Vete!» Los tres corren hacia la novia.", B: "Leire tira el ramo al suelo. «¡Vete ya!» Los tres corren hacia la novia, a explicar lo inexplicable.", C: "Leire arroja el ramo al suelo. «¡Vete!» Los tres corren hacia la novia para explicar lo inexplicable." },
            mood: "angry", end: "granada-corren",
          },
        ],
      },
      "gas-inicio": {
        who: "leire", mood: "laugh",
        line: {
          A: "Tres amigos salen del hotel. Vienen rápido. Levantas el gas pimienta. Leire se ríe. «¿Gas pimienta? ¡Yo también! ¡Mira!» Saca uno del bolso. Mavi saca otro.",
          B: "Tres invitados de boda salen del Hotel Imperial y vienen hacia ti gritando. Levantas el gas pimienta. Leire se ríe a carcajadas. «¿Gas pimienta? ¡Yo también llevo! ¡Mira!» Saca uno del bolso. Mavi saca otro.",
          C: "Tres invitados de boda salen del Imperial a gritos y levantas el gas pimienta. Leire estalla en carcajadas. «¿Gas pimienta? ¡Yo también! ¡Mira!» Saca uno del bolso; Mavi, otro. Óscar, nada.",
        },
        options: [
          {
            id: "todas",
            say: { A: "¿Todas llevan gas? ¿Y Óscar?", B: "¿Todas llevan gas pimienta? ¿Y Óscar qué lleva?", C: "¿Todas van armadas de pimienta? ¿Y Óscar, qué aporta?" },
            reply: { A: "Óscar levanta las manos. «Yo llevo el ramo cuando Leire se cansa.» Las dos se ríen.", B: "Óscar levanta las manos, inocente. «Yo llevo el ramo cuando Leire se cansa. Es mi función.» Las dos se ríen.", C: "Óscar levanta las manos con resignación. «Yo cargo el ramo cuando Leire se cansa. Es mi aportación a la seguridad.» Las dos se ríen." },
            mood: "laugh", next: "gas-bolsos",
          },
          {
            id: "bajar",
            say: { A: "Bueno, bajamos todos el gas. Perdón, llegaron gritando.", B: "Bueno, bajamos todas el gas, ¿sí? Perdón, es que llegaron gritando.", C: "Propongo bajar todos el gas. Perdón: llegaron gritando y mi instinto se adelantó." },
            reply: { A: "Mavi guarda el suyo. «Gritamos mucho. Venimos de una boda. Soy Mavi. ¿Vienes a la fiesta?»", B: "Mavi guarda el suyo. «Es que gritamos mucho: venimos de una boda. Soy Mavi. ¿Te vienes a la fiesta?»", C: "Mavi guarda el suyo. «Venimos de una boda y traemos el volumen puesto. Soy Mavi. ¿Te apuntas a la fiesta?»" },
            mood: "smile", next: "gas-bolsos",
          },
          {
            id: "alto",
            say: { A: "¡No se acerquen! ¿Qué quieren?", B: "¡No se acerquen más! ¿Qué quieren de mí?", C: "¡Ni un paso más! ¿Qué pretenden?" },
            reply: { A: "Leire se asusta y aprieta su bote sin querer. Una nube de gas. Todos corren tosiendo.", B: "Leire se asusta y aprieta el bote sin querer. Una nube de gas envuelve al grupo y todos salen corriendo entre toses.", C: "Leire se asusta y el bote se dispara solo. Una nube picante envuelve al grupo, que se dispersa tosiendo." },
            mood: "pain", end: "gas-nube",
          },
        ],
      },
      "gas-bolsos": {
        who: "mavi", mood: "smile",
        line: {
          A: "Mavi enseña su bolso: gas, tiritas, agua, chocolate. «Yo soy la responsable del grupo. ¿Vienes a La Fábrica? Nos hace falta otro gas.»",
          B: "Mavi abre su bolso: gas, tiritas, una botella de agua y chocolate. «Yo soy la madre del grupo. ¿Vienes a La Fábrica? Un gas más nunca sobra.»",
          C: "Mavi abre el bolso como un botiquín: gas, tiritas, agua y chocolate. «Yo soy la madre de este grupo. ¿Te vienes a La Fábrica? Otro gas en la cuadrilla no viene mal.»",
        },
        options: [
          {
            id: "voy",
            say: { A: "Voy. Yo cuido la puerta.", B: "Voy. Me encargo de la puerta.", C: "Voy. Me nombro responsable de la puerta." },
            reply: { A: "Leire aplaude. «¡Tenemos seguridad!» Óscar te pone una flor del ramo.", B: "Leire aplaude. «¡Tenemos servicio de seguridad!» Óscar te coloca una flor del ramo en la solapa.", C: "Leire aplaude. «¡Ya tenemos seguridad privada!» Óscar te prende una flor del ramo en la solapa." },
            mood: "smile", end: "gas-seguridad",
          },
          {
            id: "paranoia",
            say: { A: "¿Tres botes de gas para una fiesta? ¿Tanto miedo tienen?", B: "¿Tres botes de gas para ir a una fiesta? ¿Tanto miedo tienen?", C: "¿Tres botes de gas para una fiesta? ¿De qué tienen tanto miedo?" },
            reply: { A: "Mavi se pone seria. «Miedo no. Memoria. A Leire le robaron el año pasado.» Leire asiente.", B: "Mavi se pone seria. «No es miedo, es memoria. A Leire le robaron el bolso el año pasado, aquí al lado.» Leire asiente.", C: "Mavi se pone seria. «No es miedo; es memoria. A Leire le robaron el año pasado a dos calles de aquí.» Leire asiente en silencio." },
            mood: "worried", end: "gas-memoria",
          },
          {
            id: "no",
            say: { A: "Hoy no voy. Pero cuídense. Buenas noches.", B: "Hoy no voy, pero cuídense mucho. Buenas noches.", C: "Hoy no me sumo, pero cuídense. Buenas noches a las tres… y a Óscar." },
            reply: { A: "Mavi guarda todo. «Nos cuidamos siempre. Buenas noches.» Se van cantando.", B: "Mavi cierra el bolso. «Nos cuidamos solas, cariño. Buenas noches.» Y se van cantando.", C: "Mavi cierra el botiquín. «Nos cuidamos solas, cariño. Buenas noches.» Se alejan cantando desafinado." },
            mood: "smile", end: "despedida",
          },
        ],
      },
      "lapiz-inicio": {
        who: "mavi", mood: "smile",
        line: {
          A: "Tres amigos salen del hotel riendo. Mavi ve tu lápiz. «¡Un lápiz! ¡Por fin! Necesitamos escribir la dirección en la mano de Óscar. Se pierde siempre.»",
          B: "Tres invitados de boda salen riendo del Hotel Imperial. Mavi ve tu lápiz y te agarra del brazo. «¡Un lápiz! ¡Por fin alguien útil! Hay que escribirle la dirección de la fiesta a Óscar en la mano. Se pierde siempre.»",
          C: "Tres invitados de boda salen del Imperial entre risas. Mavi ve tu lápiz y te atrapa del brazo. «¡Un lápiz! ¡Al fin alguien útil! Hay que escribirle la dirección de la fiesta a Óscar en la mano, porque se pierde hasta en el ascensor.»",
        },
        options: [
          {
            id: "escribir",
            say: { A: "Claro. ¿Cuál es la dirección? Dame la mano, Óscar.", B: "Claro. ¿Cuál es la dirección? Óscar, dame la mano.", C: "Con mucho gusto. ¿Cuál es la dirección? Óscar, la mano, por favor." },
            reply: { A: "Óscar te da la mano. Mavi dicta: «La Fábrica, junto al río, sudeste.» Leire añade: «¡Y AGUA, en grande!»", B: "Óscar te tiende la mano, resignado. Mavi dicta: «La Fábrica, junto al río, al sudeste.» Leire añade: «¡Y escribe AGUA en grande!»", C: "Óscar te tiende la mano con resignación. Mavi dicta: «La Fábrica, junto al río, sudeste.» Leire añade: «¡Y AGUA, en mayúsculas!»" },
            mood: "smile", next: "lapiz-mano",
          },
          {
            id: "papel",
            say: { A: "Mejor en un papel. Tengo uno. ¿Me dictan?", B: "Mejor en un papel, que tengo uno. ¿Me dictan la dirección?", C: "Mejor en un papel; llevo uno. ¿Me dictan la dirección?" },
            reply: { A: "Mavi niega con la cabeza. «El papel lo pierde. En la mano. Créeme, tengo tres hijos.»", B: "Mavi niega con la cabeza. «El papel lo pierde en dos minutos. En la mano. Créeme, tengo tres hijos.»", C: "Mavi niega con la cabeza. «El papel lo pierde antes de la esquina. En la mano. Créeme: tengo tres hijos.»" },
            mood: "smile", next: "lapiz-mano",
          },
          {
            id: "mapa",
            say: { A: "Mejor les dibujo un mapa. ¿Dónde es la fiesta?", B: "¿Y si les dibujo un mapa? ¿Dónde es la fiesta exactamente?", C: "Les propongo un mapa. ¿Dónde queda exactamente la fiesta?" },
            reply: { A: "Óscar se emociona. «¡Un mapa! Al sudeste, junto al río. Dibuja el río grande, por favor.»", B: "Óscar se emociona como un niño. «¡Un mapa! Al sudeste, junto al río, en los almacenes. Dibuja el río grande, para que lo vea.»", C: "Óscar se ilusiona de forma preocupante. «¡Un mapa! Sudeste, junto al río, zona de almacenes. Dibuja el río bien grande, por favor.»" },
            mood: "smile", end: "lapiz-plano",
          },
        ],
      },
      "lapiz-mano": {
        who: "oscar", mood: "smile",
        line: {
          A: "Óscar mira su mano: «LA FÁBRICA · RÍO · AGUA». «Perfecto. ¿Y tú vienes? Escribe tu nombre también.»",
          B: "Óscar lee su mano en voz alta: «LA FÁBRICA, RÍO, AGUA». «Perfecto. Ahora ya no me pierdo. ¿Y tú vienes? Escribe tu nombre en la otra mano.»",
          C: "Óscar lee su mano como un contrato: «LA FÁBRICA, RÍO, AGUA». «Perfecto; esta noche no me pierdo. ¿Vienes tú también? Fírmame la otra mano.»",
        },
        options: [
          {
            id: "voy",
            say: { A: "Voy. Y escribo mi nombre aquí, mira.", B: "Voy. Y te escribo mi nombre aquí, mira.", C: "Voy. Y dejo mi nombre en la otra mano, como testigo." },
            reply: { A: "Mavi aplaude. «Otro organizado. ¡Vamos!» Leire reparte flores.", B: "Mavi aplaude. «¡Otra persona organizada! Vamos.» Leire reparte flores del ramo.", C: "Mavi aplaude. «Por fin alguien con método. Vamos.» Leire reparte flores del ramo a todos." },
            mood: "smile", end: "lapiz-direccion",
          },
          {
            id: "numero",
            say: { A: "Hoy no voy. Pero escribo mi número. Para otro día.", B: "Hoy no puedo ir. Pero te escribo mi número para otro día.", C: "Hoy no me sumo, pero te dejo mi número en la mano para otra ocasión." },
            reply: { A: "Óscar sonríe. «Mañana te escribo. Con la mano limpia.»", B: "Óscar sonríe. «Mañana te escribo. Después de lavarme la mano, claro.»", C: "Óscar sonríe. «Mañana te escribo; después de lavarme la mano, por supuesto.»" },
            mood: "smile", end: "lapiz-numero",
          },
          {
            id: "agua",
            say: { A: "¿Por qué AGUA? ¿Óscar bebió mucho?", B: "¿Por qué escribimos AGUA? ¿Óscar ha bebido mucho?", C: "¿A qué viene lo de AGUA? ¿Óscar ha bebido más de la cuenta?" },
            reply: { A: "Mavi se ríe. «Lloró en el discurso. Bebió después. Por eso AGUA.» Óscar se tapa la cara.", B: "Mavi se ríe. «Lloró en el discurso y luego bebió para olvidarlo. Por eso AGUA.» Óscar se tapa la cara.", C: "Mavi se ríe. «Lloró en el discurso y luego brindó para olvidar que había llorado. De ahí lo de AGUA.» Óscar se cubre la cara." },
            mood: "laugh", end: "lapiz-direccion",
          },
        ],
      },
      "libro-inicio": {
        who: "oscar", mood: "laugh",
        line: {
          A: "Tres amigos salen del hotel riendo. Óscar ve tu libro. «¿Un libro en la calle de noche? ¡Es sábado! Apuesto a que bailo con el libro en la cabeza.»",
          B: "Tres invitados de boda salen riendo del Hotel Imperial. Óscar ve tu libro y suelta una carcajada. «¿Un libro en la calle, de noche, un sábado? ¡Apuesto a que bailo con él en la cabeza sin que se caiga!»",
          C: "Tres invitados de boda salen del Imperial entre risas. Óscar descubre tu libro y se ríe. «¿Un libro en plena calle, de noche y en sábado? Apuesto a que bailo con él en la cabeza sin que se caiga.»",
        },
        options: [
          {
            id: "apuesta",
            say: { A: "Acepto la apuesta. Si se cae, me invitan a la fiesta.", B: "Acepto la apuesta. Si se te cae, me invitan a la fiesta.", C: "Acepto. Si se te cae, la entrada a la fiesta corre de su cuenta." },
            reply: { A: "Óscar pone el libro en la cabeza y baila. Mavi cuenta: «Uno… dos…» El libro tiembla.", B: "Óscar se coloca el libro en la cabeza y empieza a bailar. Mavi cuenta los segundos: «Uno… dos… tres…» El libro tiembla.", C: "Óscar se equilibra el libro en la cabeza y arranca un baile. Mavi cuenta: «Uno… dos… tres…» El libro vacila." },
            mood: "laugh", next: "libro-apuesta",
          },
          {
            id: "mavi",
            say: { A: "Leo mucho de noche. ¿Alguien quiere el libro?", B: "Leo por las noches, sí. ¿Alguien lo quiere? Ya lo terminé.", C: "Leo de noche, lo confieso. ¿Alguien lo quiere? Ya lo he terminado." },
            reply: { A: "Mavi lo toma. «Yo. Hace veinte años que no leo. Tres hijos.» Lo abraza.", B: "Mavi lo toma antes que nadie. «Yo. Hace veinte años que no leo un libro entero. Tres hijos, ya sabes.» Lo abraza.", C: "Mavi se adelanta. «Yo. Veinte años sin terminar un libro: tres hijos y cero siestas.» Lo abraza contra el pecho." },
            mood: "love", end: "libro-mavi",
          },
          {
            id: "abanico",
            say: { A: "No es un abanico ni un sombrero. Es un libro. ¿De qué fiesta hablan?", B: "No es un abanico ni un sombrero, es un libro. ¿De qué fiesta hablan?", C: "Ni abanico ni sombrero: es un libro. ¿Y esa fiesta de la que hablan?" },
            reply: { A: "Leire se lo quita y se abanica. «Ahora es abanico. Vamos a La Fábrica. Te explico por el camino.»", B: "Leire te lo quita y se abanica con él. «Ahora es abanico. Vamos a La Fábrica, un almacén viejo. Te lo explico por el camino.»", C: "Leire te lo quita y lo usa de abanico sin pudor. «Ahora es abanico. Vamos a La Fábrica; te lo cuento por el camino.»" },
            mood: "smile", next: "libro-apuesta",
          },
        ],
      },
      "libro-apuesta": {
        who: "mavi", mood: "laugh",
        line: {
          A: "El libro cae al suelo. Óscar lo recoge. Mavi se ríe. «Perdiste, Óscar. ¿Y ahora qué hacemos con este lector?»",
          B: "El libro cae al suelo a los cuatro segundos. Óscar lo recoge, digno. Mavi llora de risa. «Perdiste, Óscar. ¿Y ahora qué hacemos con nuestro lector nocturno?»",
          C: "El libro acaba en el suelo a los cuatro segundos. Óscar lo recoge con dignidad. Mavi llora de risa. «Apuesta perdida, Óscar. ¿Y qué hacemos ahora con nuestro lector nocturno?»",
        },
        options: [
          {
            id: "bailar",
            say: { A: "Ahora bailan conmigo. Aquí. Sin libro.", B: "Ahora bailan conmigo aquí mismo. Sin libro.", C: "Ahora bailan conmigo, aquí mismo y sin libro en la cabeza." },
            reply: { A: "Óscar empieza a bailar en la acera. Leire y Mavi también. El libro mira desde el banco.", B: "Óscar arranca a bailar en la acera. Leire y Mavi se suman. El libro observa desde el banco.", C: "Óscar baila en la acera; Leire y Mavi lo siguen. El libro, desde el banco, asiste a la función." },
            mood: "laugh", end: "libro-baile",
          },
          {
            id: "fiesta",
            say: { A: "Me invitan a la fiesta. Es la apuesta.", B: "Me invitan a la fiesta. Era la apuesta.", C: "Me deben una invitación a la fiesta; esa era la apuesta." },
            reply: { A: "Óscar se inclina. «Entrada pagada. Vamos a La Fábrica. Trae el libro.»", B: "Óscar hace una reverencia. «Entrada pagada. Nos vamos a La Fábrica. Y trae el libro, por si hay revancha.»", C: "Óscar se inclina con teatro. «Entrada pagada. Rumbo a La Fábrica. Trae el libro, por si pido revancha.»" },
            mood: "smile", end: "fabrica",
          },
          {
            id: "regalo",
            say: { A: "El libro es para Mavi. Para leer en casa.", B: "El libro se lo regalo a Mavi. Para leer en casa, con calma.", C: "El libro es para Mavi, para que lo lea en casa, cuando los tres hijos duerman." },
            reply: { A: "Mavi deja de reírse. «¿Para mí? Hace veinte años que no leo.» Lo abraza.", B: "Mavi deja de reírse de golpe. «¿Para mí? Hace veinte años que no termino un libro.» Lo abraza como a un cuarto hijo.", C: "Mavi se queda sin risa. «¿Para mí? Veinte años sin terminar un libro.» Lo abraza como a un cuarto hijo." },
            mood: "love", end: "libro-mavi",
          },
        ],
      },
      "corazon-inicio": {
        who: "leire", mood: "love",
        line: {
          A: "Tres amigos salen del hotel riendo. Leire ve el corazón y se para. «Ay… Tienes algo. No sé qué. Toma una flor del ramo. Toma dos.»",
          B: "Tres invitados de boda salen riendo del Hotel Imperial. Leire ve el corazón y se detiene en seco, con los ojos brillantes. «Ay… tienes algo. No sé qué es, pero lo tienes. Toma una flor del ramo. Toma dos.»",
          C: "Tres invitados de boda salen del Imperial entre risas. Leire ve el corazón y se queda clavada, con los ojos encendidos. «Ay… tienes algo. No sé qué, pero lo tienes. Toma una flor del ramo. Mejor dos.»",
        },
        options: [
          {
            id: "gracias",
            say: { A: "Gracias. ¿Y el ramo? ¿Lo atrapaste tú?", B: "Gracias. ¿Y ese ramo? ¿Lo atrapaste tú?", C: "Gracias. ¿Y ese ramo de novia? ¿Lo atrapaste tú?" },
            reply: { A: "Leire se pone roja. «Sí. Y dicen que quien lo atrapa… Bueno. Me llamo Leire.»", B: "Leire se pone roja. «Sí. Y ya sabes lo que dicen de quien lo atrapa… Bueno. Me llamo Leire.»", C: "Leire enrojece. «Sí. Y ya conoces la superstición sobre quien lo atrapa… En fin. Soy Leire.»" },
            mood: "love", next: "corazon-leire",
          },
          {
            id: "todos",
            say: { A: "Ustedes tres son muy simpáticos. ¿De dónde vienen?", B: "Los tres parecen muy simpáticos. ¿De dónde vienen tan elegantes?", C: "Los tres desprenden simpatía. ¿De dónde salen tan elegantes?" },
            reply: { A: "Óscar y Mavi se acercan. «De una boda. Soy Óscar.» «Soy Mavi.» Los tres te abrazan a la vez.", B: "Óscar y Mavi se acercan, sonriendo sin motivo. «De una boda. Soy Óscar.» «Y yo, Mavi.» Y los tres te abrazan a la vez.", C: "Óscar y Mavi se acercan con sonrisas inexplicables. «De una boda. Óscar.» «Mavi.» Y los tres te envuelven en un abrazo colectivo." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "fiesta",
            say: { A: "¿Adónde van? ¿Puedo ir con ustedes?", B: "¿Adónde van ahora? ¿Puedo ir con ustedes?", C: "¿Hacia dónde van? ¿Admiten compañía?" },
            reply: { A: "Leire te toma de la mano. «A La Fábrica. Y ahora vienes, claro.» Mavi sonríe. «Qué rápido.»", B: "Leire te toma de la mano sin pensarlo. «A La Fábrica. Y ahora vienes, por supuesto.» Mavi sonríe. «Qué rápido va esto.»", C: "Leire te toma de la mano sin consultar a nadie. «A La Fábrica. Y vienes, evidentemente.» Mavi sonríe. «Qué rápido va todo hoy.»" },
            mood: "love", next: "corazon-leire",
          },
        ],
      },
      "corazon-leire": {
        who: "leire", mood: "smitten",
        line: {
          A: "Leire no te suelta la mano. «No tengo pareja. El ramo dice que pronto. ¿Vienes a bailar conmigo a La Fábrica?»",
          B: "Leire no te suelta la mano, con el ramo en la otra. «No tengo pareja. Y el ramo dice que pronto tendré. ¿Vienes a bailar conmigo a La Fábrica?»",
          C: "Leire no te suelta, el ramo en la otra mano. «No tengo pareja. Según la superstición, eso cambia pronto. ¿Vienes a bailar conmigo a La Fábrica?»",
        },
        options: [
          {
            id: "si",
            say: { A: "Sí. Bailo contigo. Pero bailo mal.", B: "Sí, bailo contigo. Aunque te aviso: bailo fatal.", C: "Sí, bailo contigo. Aviso: mi baile es un riesgo para terceros." },
            reply: { A: "Leire se ríe y te besa en la mejilla. «Mejor. Así no me siento mal.»", B: "Leire se ríe y te da un beso en la mejilla. «Mejor. Así no me siento mal yo.»", C: "Leire se ríe y te besa la mejilla. «Mejor todavía: así no destaco por mala.»" },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "flor",
            say: { A: "Te devuelvo una flor. Para tu pareja futura.", B: "Te devuelvo una flor. Para esa pareja que viene pronto.", C: "Te devuelvo una flor: guárdala para esa pareja que, según el ramo, está al caer." },
            reply: { A: "Leire mira la flor y luego a ti. «¿Y si ya llegó?» Óscar tose. Mavi se ríe.", B: "Leire mira la flor y después a ti, muy seria. «¿Y si ya llegó?» Óscar tose; Mavi se ríe por lo bajo.", C: "Leire contempla la flor y luego te mira. «¿Y si ya ha llegado?» Óscar tose; Mavi disimula una risa." },
            mood: "smitten", end: "corazon-beso",
          },
          {
            id: "amigos",
            say: { A: "Vamos todos. Como amigos. Mavi, Óscar, ¡vengan!", B: "Vamos todos juntos, como amigos. Mavi, Óscar, ¡vengan!", C: "Vamos todos, en plan amigos. Mavi, Óscar, ¡que no se queden atrás!" },
            reply: { A: "Mavi y Óscar se unen. Abrazo de grupo en la plaza. Leire guarda la flor para ti.", B: "Mavi y Óscar se suman y la plaza se llena con un abrazo de grupo. Leire guarda una flor «para después».", C: "Mavi y Óscar se unen al abrazo colectivo bajo los tilos. Leire guarda una flor, «para después»." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {
      fabrica: { text: { A: "Vas con Leire, Óscar y Mavi a La Fábrica. Caminan juntos y se ríen.", B: "Te vas con Leire, Óscar y Mavi hacia La Fábrica, al sudeste. Por el camino, Óscar ensaya pasos de baile.", C: "Pones rumbo a La Fábrica con tus nuevos amigos. Óscar ensaya pasos, Mavi critica los pasos y Leire reparte flores." }, change: "se-va", flag: "fiesta-fabrica", recap: "Aceptaste ir a La Fábrica con Leire, Óscar y Mavi." },
      despedida: { text: { A: "Los tres se van cantando. Leire te dice adiós con el ramo.", B: "Los tres se alejan cantando. Al final de la calle, Leire te saluda con el ramo.", C: "El grupo se aleja cantando desafinado. Al final de la calle, Leire te dedica un último saludo con el ramo." }, change: "se-va", recap: "Rechazaste con amabilidad la fiesta en La Fábrica." },
      baile: { text: { A: "Óscar baila en la plaza. Leire y Mavi bailan también. ¡Y tú!", B: "Óscar baila en medio de la plaza. Leire y Mavi se unen, y al final tú también.", C: "Óscar convierte la plaza en pista de baile. Leire y Mavi se suman y, contra todo pronóstico, tú también." }, change: "baila", recap: "Bailaste con Óscar y sus amigas en la plaza." },
      policia: { text: { A: "Llega la policía. Explicas todo. Al final, todos se calman.", B: "Llega la policía. Explicas el malentendido durante un buen rato.", C: "Llega un coche patrulla. Explicar el malentendido te lleva más tiempo que a ellos llegar a la fiesta." }, change: "policia", recap: "Un malentendido con unos invitados de boda terminó con la policía." },
      corren: { text: { A: "Los tres corren calle abajo. La plaza está en silencio otra vez.", B: "Los tres desaparecen corriendo. La plaza vuelve a quedarse en silencio.", C: "Los tres desaparecen calle abajo. Sobre la acera queda una flor del ramo." }, change: "corre", recap: "Asustaste a tres invitados de boda y salieron corriendo." },
      "cuchillo-policia": { text: { A: "Llega la policía. Dos cuchillos sobre el banco. Óscar explica lo de la tarta. Nadie le cree.", B: "Llega la policía y pone los dos cuchillos sobre el banco. Óscar explica lo del cuchillo de la tarta. Nadie le cree.", C: "Llega un coche patrulla y los dos cuchillos acaban sobre el banco. Óscar explica la historia del cuchillo de la tarta; la policía, lógicamente, no le cree." }, change: "policia", recap: "Tu cuchillo y el cuchillo de tarta de Óscar terminaron con la policía." },
      "cuchillo-silencio": { text: { A: "Te vas. Detrás, los tres hablan en voz baja. Leire mira tu bolsillo hasta el final.", B: "Te alejas. A tus espaldas, los tres hablan en voz baja. Leire vigila tu bolsillo hasta que doblas la esquina.", C: "Te alejas. A tu espalda, los tres cuchichean. Leire no deja de mirar tu bolsillo hasta que desapareces." }, change: "se-va", recap: "El duelo de cuchillos dejó a los invitados de boda en silencio." },
      "cuchillo-fiesta": { text: { A: "Vas con ellos a La Fábrica. El cuchillo de tarta se queda en el banco. Óscar mira atrás una vez.", B: "Te vas con ellos hacia La Fábrica. El cuchillo de tarta se queda en el banco. Óscar mira atrás una sola vez, con nostalgia.", C: "Pones rumbo a La Fábrica con los tres. El cuchillo de tarta se queda en el banco; Óscar le dedica una última mirada de duelo." }, change: "se-va", flag: "fiesta-fabrica", recap: "Después del duelo de cuchillos, fuiste a La Fábrica con Leire, Óscar y Mavi." },
      "pistola-huyen": { text: { A: "Los tres entran corriendo en el hotel. Sebastián cierra la puerta. Te quedas con los zapatos de Mavi.", B: "Los tres desaparecen dentro del hotel y Sebastián cierra la puerta con llave. En la acera quedan los zapatos de Mavi.", C: "Los tres se refugian en el hotel y Sebastián echa el cerrojo. Sobre la acera quedan los zapatos de Mavi, solos y elegantes." }, change: "huye", recap: "Tu pistola hizo huir a tres invitados de boda al hotel." },
      "pistola-castigo": { text: { A: "Los tres se van a la fiesta sin ti. Mavi te mira como una madre enojada.", B: "Los tres se van a la fiesta sin ti. Mavi te dedica, desde la esquina, una mirada de madre enojada.", C: "Los tres se van a la fiesta sin ti. Desde la esquina, Mavi te lanza una última mirada de madre decepcionada." }, change: "se-va", recap: "Mavi te mandó a casa por llevar una pistola." },
      "pistola-patrulla": { text: { A: "Dos policías bajan del coche. Mavi les explica todo. Con los zapatos en la mano.", B: "Dos policías bajan del coche. Mavi se lo explica todo, con los zapatos en la mano y mucho detalle.", C: "Dos agentes bajan del coche patrulla. Mavi les cuenta todo, zapatos en mano y con un nivel de detalle preocupante." }, change: "policia", recap: "Tu pistola asustó a los invitados de boda y acabaste con la policía." },
      "pistola-vigilado": { text: { A: "Vas a la fiesta entre Mavi y Óscar. Mavi mira tu cintura todo el camino.", B: "Vas a la fiesta entre Mavi y Óscar, como un detenido simpático. Mavi no deja de mirar tu cintura en todo el camino.", C: "Vas a La Fábrica escoltado entre Mavi y Óscar. Mavi vigila tu cintura durante todo el trayecto, por si acaso." }, change: "se-va", flag: "fiesta-fabrica", recap: "Mavi te perdonó la pistola y te llevó a la fiesta vigilado." },
      "granada-helicoptero": { text: { A: "El helicóptero ilumina la plaza llena de invitados. La novia te señala. Qué noche.", B: "El helicóptero ilumina la plaza llena de invitados de boda. La novia te señala desde el centro. Va a ser una noche larga.", C: "El foco del helicóptero barre una plaza llena de invitados y la novia te señala desde el centro, como en una ópera. Va a ser una noche larga." }, change: "helicoptero", recap: "Tu granada evacuó una boda entera y trajo un helicóptero." },
      "granada-baile": { text: { A: "Los invitados vuelven al hotel. Óscar baila en la acera para calmar a todos. Tú también.", B: "Los invitados vuelven al hotel, refunfuñando. Óscar baila en la acera para quitar tensión, y al final tú también.", C: "Los invitados regresan al hotel entre protestas. Óscar baila en la acera para desactivar el drama y, contra todo pronóstico, tú lo sigues." }, change: "baila", recap: "Tu granada vació una boda, pero Óscar lo arregló bailando." },
      "granada-corren": { text: { A: "Los tres corren hacia la novia. El ramo queda en el suelo. Te vas rápido.", B: "Los tres corren hacia la novia. El ramo queda abandonado en la acera. Te vas antes de que llegue nadie más.", C: "Los tres corren hacia la novia y el ramo queda tirado en la acera. Te retiras antes de que llegue alguien con uniforme." }, change: "corre", recap: "Tu granada arruinó la noche del ramo de Leire." },
      "gas-nube": { text: { A: "Todos tosen. Leire pide perdón. Óscar se ríe con los ojos rojos. Se van al hotel.", B: "Todos tosen con los ojos rojos. Leire pide perdón mil veces. Óscar se ríe entre lágrimas. Vuelven al hotel a lavarse la cara.", C: "Todos tosen con los ojos en llamas. Leire pide perdón sin parar y Óscar se ríe entre lágrimas. Vuelven al hotel a lavarse la cara." }, change: "corre", recap: "El gas pimienta de Leire se disparó y todos terminaron tosiendo." },
      "gas-seguridad": { text: { A: "Vas a La Fábrica con tres botes de gas y un ramo. Nadie se mete con ustedes.", B: "Vas hacia La Fábrica con tres botes de gas, un ramo y una flor en la solapa. Nadie se mete con el grupo.", C: "Pones rumbo a La Fábrica con tres botes de gas, un ramo y una flor en la solapa. Nadie, en toda la ciudad, se atreve a molestar." }, change: "se-va", flag: "fiesta-fabrica", recap: "Te nombraron seguridad del grupo y fuiste a La Fábrica." },
      "gas-memoria": { text: { A: "Mavi guarda el gas. Leire sonríe un poco. Se van a la fiesta, juntas.", B: "Mavi guarda el gas. Leire sonríe un poco y los tres se van a la fiesta, muy juntos.", C: "Mavi guarda el gas. Leire recupera la sonrisa y los tres se alejan hacia la fiesta, pegados como un solo cuerpo." }, change: "se-va", recap: "Supiste por qué Leire y Mavi llevan gas pimienta." },
      "lapiz-plano": { text: { A: "Dibujas un mapa con un río enorme. Óscar lo guarda en el bolsillo del corazón.", B: "Dibujas un mapa con un río enorme y una fábrica. Óscar lo dobla y lo guarda en el bolsillo del pecho.", C: "Dibujas un mapa con un río desproporcionado y una fábrica. Óscar lo guarda en el bolsillo del pecho, como un salvoconducto." }, change: "se-va", recap: "Dibujaste un mapa a La Fábrica para Óscar." },
      "lapiz-direccion": { text: { A: "Vas a La Fábrica. Óscar lee su mano en cada esquina.", B: "Vas hacia La Fábrica. Óscar lee su mano en cada esquina, muy concentrado.", C: "Pones rumbo a La Fábrica. Óscar consulta su mano en cada esquina, como un navegante." }, change: "se-va", flag: "fiesta-fabrica", recap: "Escribiste la dirección en la mano de Óscar y fuiste a la fiesta." },
      "lapiz-numero": { text: { A: "Los tres se van. Óscar mira su mano con tu número y sonríe.", B: "Los tres se alejan. Óscar mira la mano con tu número y sonríe sin darse cuenta.", C: "Los tres se alejan. Óscar contempla tu número en su mano y sonríe sin querer." }, change: "sonrie", recap: "Dejaste tu número escrito en la mano de Óscar." },
      "libro-baile": { text: { A: "Los cuatro bailan en la acera. El libro mira desde el banco.", B: "Los cuatro bailan en la acera, sin música. El libro observa desde el banco.", C: "Los cuatro bailan en la acera sin música ni vergüenza. El libro lo contempla todo desde el banco." }, change: "baila", recap: "Óscar perdió la apuesta del libro y todos bailaron." },
      "libro-mavi": { text: { A: "Mavi se lleva tu libro. «Lo leo esta semana.» Se va sonriendo.", B: "Mavi se lleva tu libro bajo el brazo. «Esta semana lo termino, te lo juro.» Se va sonriendo.", C: "Mavi se va con tu libro bajo el brazo. «Esta semana lo termino, aunque no duerma.» Sonríe como hace veinte años." }, change: "sonrie", recap: "Le regalaste tu libro a Mavi, que llevaba veinte años sin leer." },
      "corazon-beso": { text: { A: "Leire te besa en la mejilla. Van juntos a La Fábrica, de la mano.", B: "Leire te besa en la mejilla y no te suelta la mano. Van juntos a La Fábrica.", C: "Leire te besa la mejilla y no te suelta la mano en todo el camino a La Fábrica." }, change: "beso", flag: "fiesta-fabrica", recap: "Leire te besó y fueron juntos a La Fábrica." },
      "corazon-abrazo": { text: { A: "Abrazo de grupo bajo los tilos. Después, todos a La Fábrica.", B: "Abrazo de grupo bajo los tilos, con ramo y zapatos. Después, todos a La Fábrica.", C: "Un abrazo colectivo bajo los tilos, con ramo y zapatos incluidos. Luego, todos a La Fábrica." }, change: "abraza", flag: "fiesta-fabrica", recap: "Leire, Óscar y Mavi te abrazaron y te llevaron a la fiesta." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Qué haces cuando dos amigos se pelean?", B: "¿Cómo calmas una pelea entre dos personas?", C: "¿Quién pone orden en tu grupo de amigos cuando la situación se descontrola?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Tu madre sabe todo lo que haces?", B: "¿Alguna vez una persona mayor te regañó en la calle?", C: "¿Qué autoridad tiene una desconocida que te habla como tu madre?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Qué pasó en una boda que recuerdas?", B: "¿Cuál fue la boda o la fiesta más caótica a la que fuiste?", C: "¿Por qué los desastres en las celebraciones se recuerdan más que las celebraciones perfectas?" } },
      gas: { start: "gas-inicio", fx: "risa", speak: { A: "¿Qué llevas en tu bolso o mochila?", B: "¿Qué llevas siempre contigo cuando sales de fiesta?", C: "¿Qué objetos revelan los miedos de una persona?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes cosas en la mano?", B: "¿Qué apuntas para no olvidarlo cuando sales?", C: "¿Quién es la persona organizada de tu grupo y qué aguanta por los demás?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Haces apuestas con tus amigos?", B: "¿Qué apuesta tonta hiciste con tus amigos?", C: "¿Qué hace que un libro valga más como regalo que como lectura?" } },
      corazon: { start: "corazon-inicio", fx: "beso", speak: { A: "¿Te gusta bailar con alguien?", B: "¿Alguna vez te invitó a bailar una persona desconocida?", C: "¿Crees en las supersticiones de las bodas, como la del ramo?" } },
    },
    speak: {
      A1: "¿Qué música te gusta para bailar?",
      A2: "¿Qué hiciste en la última fiesta a la que fuiste?",
      B1: "¿Cómo dices que no a una invitación sin ofender a nadie?",
      B2: "¿Qué harías si unos desconocidos simpáticos te invitaran a una fiesta esta noche?",
      C1: "¿Qué distingue una buena excusa de una excusa creíble?",
      C2: "¿Qué dicen de ti las invitaciones que aceptas por compromiso?",
    },
  },

  // ─────────────────────────────────────────── ESCENA 4
  {
    id: "alto-feliz",
    kind: "escena",
    district: "alto",
    title: "Alguien muy feliz",
    verb: "ESCUCHAR",
    goal: "Reaccionar ante una buena noticia, felicitar, hacer preguntas de seguimiento y animar a alguien que tiene miedo al cambio.",
    cast: [
      {
        id: "joaquin", name: "Joaquín", role: "Estudiante con una gran noticia",
        age: "young", body: "m", build: "average", height: 1.74,
        hair: "curly", hairColor: "#2a1a10", skin: "#8d5a3b",
        top: "sweater", topColor: "#e0a526", bottom: "jeans", bottomColor: "#2c3e50",
        extras: ["headphones", "phone"], pose: "dance", props: ["cake-box"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "joaquin", mood: "surprised",
        line: {
          A: "Un chico salta y grita en la plaza. Te ve. «¡Perdona! ¡Me dieron una beca! ¡Me voy a estudiar a Japón!»",
          B: "Un chico salta junto a la fuente con el teléfono en la mano. Corre hacia ti. «¡Perdona, tengo que contárselo a alguien! ¡Me dieron la beca! ¡Me voy a Japón!»",
          C: "Un chico con un jersey amarillo da saltos alrededor de la fuente. Te elige como víctima. «¡Disculpa! ¡Necesito decírselo a un ser humano! ¡Me han dado la beca! ¡Japón!»",
        },
        options: [
          {
            id: "felicitar",
            say: { A: "¡Felicidades! ¡Qué buena noticia!", B: "¡Enhorabuena! ¡Qué noticia tan buena!", C: "¡Pero bueno! ¡Enhorabuena! Eso hay que celebrarlo como es debido." },
            reply: { A: "El chico te da la mano. «¡Gracias! Me llamo Joaquín. ¡Estoy muy feliz!»", B: "El chico te da la mano con las dos suyas. «¡Gracias! Soy Joaquín. ¡No me lo puedo creer todavía!»", C: "El chico te estrecha la mano con un entusiasmo peligroso. «¡Gracias! Joaquín, encantado. Todavía no me lo creo.»" },
            mood: "smile", next: "detalles",
          },
          {
            id: "preguntar",
            say: { A: "¿Una beca? ¿Para estudiar qué?", B: "¿Una beca? ¡Qué bien! ¿Qué vas a estudiar?", C: "¿Japón? ¡Qué salto! ¿Y qué vas a estudiar allí?" },
            reply: { A: "«¡Arquitectura! Me llamo Joaquín. ¡Hola!»", B: "«¡Arquitectura!», grita. «Perdón, soy Joaquín. Estoy un poco emocionado.»", C: "«Arquitectura», dice, y se presenta: Joaquín. «Perdona el volumen. Llevo media hora gritando.»" },
            mood: "smile", next: "detalles",
          },
          {
            id: "porque-yo",
            say: { A: "¡Qué bien! Pero… ¿por qué me lo dices a mí?", B: "¡Genial! Pero… ¿por qué me lo cuentas a mí?", C: "Me alegro muchísimo. Aunque, por curiosidad: ¿por qué me ha tocado a mí?" },
            reply: { A: "El chico se ríe. «Porque nadie contesta el teléfono. ¡Nadie!»", B: "El chico se ríe, un poco triste. «Porque nadie me contesta el teléfono. Es medianoche.»", C: "El chico se encoge de hombros. «Porque mi familia duerme y mis amigos no contestan. Eres mi público.»" },
            mood: "sad", next: "nadie",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y un papel.", B: "Sacas el lápiz y le ofreces un papel.", C: "Sacas el lápiz con gesto solemne." },
            say: { A: "¿Me firmas aquí? Vas a ser famoso.", B: "Fírmame aquí, por favor. Cuando seas un arquitecto famoso, voy a presumir.", C: "Un autógrafo, por favor. Para cuando seas un arquitecto célebre." },
            reply: { A: "El chico firma y se ríe. «Joaquín. ¡Mi primer autógrafo!»", B: "El chico firma, encantado. «Joaquín. ¡Mi primer autógrafo! Voy a estudiar arquitectura, ¿sabes?»", C: "El chico firma con una floritura. «Joaquín, futuro arquitecto. Guárdalo bien: dentro de veinte años costará una fortuna.»" },
            mood: "smile", next: "detalles",
          },
          libro: {
            act: { A: "Le das tu libro.", B: "Le ofreces tu libro.", C: "Le tiendes tu libro con una pequeña reverencia." },
            say: { A: "Toma. Es un regalo para el avión.", B: "Toma, para el viaje. Las horas de avión son muy largas.", C: "Un regalo para el vuelo. Son catorce horas: te va a hacer falta." },
            reply: { A: "El chico abre los ojos. «¿Para mí? ¡Gracias! Me llamo Joaquín. Lo voy a leer en el avión.»", B: "El chico mira el libro, emocionado. «¿En serio? ¡Gracias! Soy Joaquín. Prometo leerlo en el avión.»", C: "El chico abraza el libro. «Soy Joaquín, y este es mi primer regalo de despedida. Me lo leo antes de aterrizar.»" },
            mood: "love", end: "regalo",
          },
          gas: {
            act: { A: "El chico corre hacia ti gritando. Sacas el gas pimienta.", B: "El chico viene hacia ti gritando. Sacas el gas pimienta.", C: "Un desconocido se te echa encima a gritos. Sacas el gas pimienta." },
            say: { A: "¡Para! ¿Qué pasa?", B: "¡Para ahí! ¿Qué te pasa?", C: "¡Quieto! ¿Qué ocurre?" },
            reply: { A: "El chico se para. «¡Ay! ¡Solo estoy contento!»", B: "El chico frena en seco. «¡Perdón! ¡Solo estoy contento! ¡No hice nada!»", C: "El chico se queda paralizado a medio salto. «¡Es alegría! ¡Solo alegría! ¡No es contagiosa!»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "El chico ve tu granada.", B: "El chico ve la granada en tu bolsillo.", C: "El chico repara en la granada que asoma de tu bolsillo." },
            say: { A: "¡Qué bien! ¡Felicidades!", B: "¡Felicidades! ¡Qué noticia!", C: "¡Felicidades! ¡Menuda noticia!" },
            reply: { A: "El chico mira la granada. «Eh… Mi noticia es una bomba. Pero eso…»", B: "El chico se queda quieto. «Mi noticia es una bomba, sí… pero eso es una granada.»", C: "El chico deja de saltar. «Mi noticia es una bomba, pero lo decía en sentido figurado. ¿Y tú?»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "El chico ve tu pistola.", B: "El chico ve tu pistola y deja de saltar.", C: "El chico ve la pistola y se queda clavado en el suelo." },
            say: { A: "Hola. ¿Qué pasa?", B: "Hola. ¿Qué celebras?", C: "Buenas noches. ¿Se puede saber qué celebras?" },
            reply: { A: "El chico levanta las manos. «¡Nada! Bueno… una beca.»", B: "El chico levanta las manos. «¡Nada! Bueno, una beca… pero ya no tanto.»", C: "El chico levanta las manos. «Celebraba una beca. Ahora celebro seguir de pie.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "El chico tiene una tarta. No tiene cuchillo. Tú sí.", B: "El chico lleva una caja con una tarta, pero no tiene cuchillo. Sacas el tuyo.", C: "El chico lleva una tarta para celebrar y ningún cubierto. Sacas el cuchillo." },
            say: { A: "¿Cortamos la tarta?", B: "¿Te ayudo a cortar la tarta?", C: "Una celebración sin tarta cortada no cuenta. ¿Me permites?" },
            reply: { A: "El chico se asusta un poco. Luego se ríe. «¡Sí! ¡Un trozo para ti!»", B: "El chico da un paso atrás, pero se ríe. «¡Ah, para la tarta! Sí, por favor. Soy Joaquín, ¡me dieron una beca!»", C: "El chico pasa del susto a la carcajada. «¡Para la tarta! Claro. Soy Joaquín. Me la compré yo, nadie más se enteró.»" },
            mood: "smile", next: "detalles",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "¡Qué alegría! Estoy muy contento por ti.", B: "¡Me alegro muchísimo por ti! Te lo mereces, seguro.", C: "No te conozco, pero estoy seguro de que te lo has ganado a pulso." },
            reply: { A: "El chico te abraza. «¡Gracias! Soy Joaquín. Soy el primero de mi familia en la universidad.»", B: "El chico te abraza. «¡Gracias! Soy Joaquín. Soy el primero de mi familia que va a la universidad.»", C: "El chico te abraza sin aviso. «Gracias. Soy Joaquín. Mi madre limpia oficinas en este barrio. Y yo me voy a Tokio.»" },
            mood: "love", next: "detalles",
          },
        },
      },
      detalles: {
        who: "joaquin", mood: "smile",
        line: {
          A: "Joaquín habla muy rápido. «¡Arquitectura en Tokio! Un año. Pero… no hablo japonés.»",
          B: "Joaquín no puede parar de hablar. «Un año entero en Tokio, estudiando arquitectura. El único problema: no sé ni una palabra de japonés.»",
          C: "Joaquín habla a toda velocidad. «Un año en Tokio. Arquitectura. Edificios imposibles. Y mi japonés se limita a pedir sushi. Mal.»",
        },
        options: [
          {
            id: "animar",
            say: { A: "¡Vas a aprender rápido! Como yo con el español.", B: "¡Vas a aprender rapidísimo! Mírame a mí con el español.", C: "Si yo sobrevivo con mi español, tú sobrevives con el japonés. Palabra." },
            reply: { A: "Joaquín se ríe. «¡Sí! ¡Vamos a bailar!» Empieza a bailar.", B: "Joaquín se ríe y te toma de las manos. «¡Tienes razón! Esto se celebra bailando.»", C: "Joaquín se ríe a carcajadas. «Trato hecho. Y para sellarlo, un baile.»" },
            mood: "smile", end: "celebrar",
          },
          {
            id: "cuando",
            say: { A: "¿Y cuándo te vas?", B: "¿Y cuándo te vas? ¿Ya tienes el billete?", C: "¿Y para cuándo es el gran salto?" },
            reply: { A: "Joaquín deja de sonreír un poco. «En un mes. Estoy feliz… y tengo miedo.»", B: "La sonrisa de Joaquín se hace más pequeña. «En un mes. Estoy feliz, pero también tengo un poco de miedo.»", C: "Joaquín respira hondo. «En un mes. Y ahora que lo digo en voz alta, me tiemblan un poco las piernas.»" },
            mood: "worried", next: "miedo",
          },
          {
            id: "invitar",
            say: { A: "Entonces… ¿me invitas a Tokio?", B: "Entonces, ¿cuándo me invitas a Tokio?", C: "Te advierto que pienso presentarme en Tokio sin avisar." },
            reply: { A: "Joaquín se ríe. «¡Claro! ¡Mi casa es tu casa!» Y empieza a bailar.", B: "Joaquín se ríe. «¡Cuando quieras! Mi sofá japonés es tuyo.» Y se pone a bailar.", C: "Joaquín se ríe. «Mi sofá diminuto te espera. Ven en primavera, por los cerezos.» Y se pone a bailar." },
            mood: "smile", end: "celebrar",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Estoy muy feliz por ti. ¡Ven aquí!", B: "Me alegro tanto por ti… ¡Ven aquí, un abrazo!", C: "Las buenas noticias, si se comparten, valen el doble. ¡Un abrazo!" },
            reply: { A: "Joaquín te abraza fuerte. «Gracias. Eres la primera persona que me abraza hoy.»", B: "Joaquín te abraza fuerte. «Gracias. Eres la primera persona que me felicita en persona.»", C: "Joaquín te abraza y se le quiebra la voz. «Gracias. Hasta ahora solo lo celebraba con la fuente.»" },
            mood: "love", end: "abrazo",
          },
        },
      },
      nadie: {
        who: "joaquin", mood: "sad",
        line: {
          A: "Joaquín mira su teléfono. «Llamé a mi madre, a mi hermana, a mis amigos… ¡Nadie contesta!»",
          B: "Joaquín te enseña el teléfono. «Llamé a mi madre, a mi hermana, a tres amigos… Nadie contesta. Es medianoche.»",
          C: "Joaquín te enseña la lista de llamadas. «Once llamadas, cero respuestas. Es lo malo de recibir grandes noticias a medianoche.»",
        },
        options: [
          {
            id: "aqui",
            say: { A: "Bueno, aquí estoy yo. ¡Cuéntame todo!", B: "Bueno, pues aquí estoy yo. ¡Cuéntamelo todo!", C: "Pues tienes público. Empieza por el principio y no te ahorres detalles." },
            reply: { A: "Joaquín sonríe otra vez. «¡Bien! ¡Me voy a Tokio!»", B: "A Joaquín se le ilumina la cara. «¡Bien! Entonces escucha: me voy a Tokio.»", C: "Joaquín se aclara la garganta. «Muy bien. Érase una vez un chico que se iba a Tokio.»" },
            mood: "smile", next: "detalles",
          },
          {
            id: "mensaje",
            say: { A: "Mándales un mensaje. Mañana te llaman.", B: "¿Por qué no les mandas un audio? Mañana te van a llamar todos.", C: "Grábales un audio ahora, con toda esta emoción. Mañana lo van a escuchar diez veces." },
            reply: { A: "Joaquín sonríe. «¡Sí! ¡Buena idea!»", B: "«¡Buena idea!», dice Joaquín, y empieza a grabar. «Mamá, siéntate antes de escuchar esto…»", C: "Joaquín se lo piensa dos segundos y empieza a grabar. «Mamá, siéntate. No, mejor túmbate.»" },
            mood: "smile", end: "mensaje",
          },
          {
            id: "prisa",
            say: { A: "Lo siento, tengo prisa. ¡Felicidades!", B: "Perdona, tengo un poco de prisa. ¡Pero felicidades!", C: "Me encantaría quedarme, pero voy tarde. Enhorabuena de corazón." },
            reply: { A: "Joaquín dice adiós. «¡Gracias!» Busca otra persona.", B: "Joaquín te dice adiós con la mano. «¡Gracias!» Y busca a otra persona para contárselo.", C: "«¡Gracias!», dice Joaquín, y ya está buscando a su siguiente oyente." },
            mood: "smile", end: "prisa",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Yo te escucho. Y te doy un abrazo.", B: "Yo te escucho. Y, si quieres, te doy el abrazo que te deben.", C: "Pues el primer abrazo de la noche me lo quedo yo, si me permites." },
            reply: { A: "Joaquín te abraza. «Gracias. Mi madre trabaja de noche. Mañana la sorprendo.»", B: "Joaquín te abraza. «Gracias. Mi madre trabaja de noche. Mañana le llevo el desayuno y se lo cuento.»", C: "Joaquín te abraza fuerte. «Mi madre limpia oficinas por la noche. Mañana la espero a la salida con churros.»" },
            mood: "love", end: "abrazo",
          },
        },
      },
      miedo: {
        who: "joaquin", mood: "worried",
        line: {
          A: "Joaquín se sienta en la fuente. «¿Y si no hago amigos? ¿Y si estoy solo?»",
          B: "Joaquín se sienta en el borde de la fuente. «¿Y si no hago amigos allí? ¿Y si echo mucho de menos mi casa?»",
          C: "Joaquín se sienta en la fuente y mira el agua. «Llevo años queriendo esto. Y ahora que llega, me entra el vértigo.»",
        },
        options: [
          {
            id: "amigos",
            say: { A: "Vas a hacer amigos. Hoy ya tienes uno: yo.", B: "Vas a hacer amigos, seguro. Mira: hoy ya hiciste uno.", C: "Llevas cinco minutos aquí y ya me has hecho tu amigo. En Tokio no tienen ninguna oportunidad." },
            reply: { A: "Joaquín se ríe y se levanta. «¡Es verdad! ¡Vamos a bailar!»", B: "Joaquín se ríe y se levanta de un salto. «¡Es verdad! ¡Esto hay que bailarlo!»", C: "Joaquín se levanta riendo. «Tienes razón. Peligro internacional. Celebremos.»" },
            mood: "smile", end: "celebrar",
          },
          {
            id: "experiencia",
            say: { A: "Es normal. Yo también tuve miedo en un viaje.", B: "Es normal tener miedo. A mí me pasó la primera vez que me fui a vivir fuera.", C: "El miedo es buena señal: significa que te importa. A mí me pasó lo mismo." },
            reply: { A: "Joaquín te escucha. «¿De verdad? Gracias. Me ayuda mucho.»", B: "Joaquín te escucha con atención. «¿En serio? Me ayuda saber que no soy el único.»", C: "Joaquín asiente despacio. «Buena señal. Me lo voy a apuntar en la mano.»" },
            mood: "smile", end: "consejo",
          },
          {
            id: "practico",
            say: { A: "Tienes un mes. Puedes aprender un poco de japonés.", B: "Tienes un mes. ¿Por qué no empiezas mañana con clases de japonés?", C: "Un mes da para mucho. Empieza mañana con el japonés y el miedo se encoge solo." },
            reply: { A: "Joaquín sonríe. «Sí. Mañana empiezo. ¡Arigató!»", B: "Joaquín saca el teléfono. «Tienes razón. Mañana me apunto a clases. ¡Arigató!»", C: "Joaquín ya está buscando academias. «Arigató. Que, por cierto, es la única palabra que sé.»" },
            mood: "smile", end: "consejo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Eres muy valiente. Vas a estar bien.", B: "Eres más valiente de lo que crees. Vas a estar bien.", C: "Tener miedo y aun así ir: eso es exactamente la valentía." },
            reply: { A: "Joaquín te abraza. «Gracias. Mi abuelo dice lo mismo.»", B: "Joaquín te abraza. «Gracias. Mi abuelo me dijo lo mismo antes de morir. Me lo recordaste.»", C: "Joaquín te abraza en silencio. «Mi abuelo decía eso mismo. Hacía mucho que no lo oía.»" },
            mood: "love", end: "abrazo",
          },
        },
      },
      calmar: {
        who: "joaquin", mood: "scared",
        line: {
          A: "Joaquín no se mueve. «Solo estoy contento. ¡No hice nada!»",
          B: "Joaquín tiene el teléfono en la mano y no se mueve. «Solo estaba contento. ¡No hice nada malo!»",
          C: "Joaquín se queda quieto, con el teléfono pegado al pecho. «Te juro que la alegría era lo único peligroso aquí.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. ¿Qué celebras?", B: "Perdona, lo guardo. Me asusté. ¿Qué estabas celebrando?", C: "Perdona. Lo guardo y me olvido. Empecemos de nuevo: ¿qué celebras?" },
            reply: { A: "Joaquín respira. «Una beca. ¡Me voy a Tokio!»", B: "Joaquín respira y vuelve a sonreír. «Una beca. ¡Me voy a estudiar a Tokio!»", C: "Joaquín respira hondo y la sonrisa vuelve sola. «Una beca. Tokio. Me había olvidado del susto ya.»" },
            mood: "smile", next: "detalles",
          },
          {
            id: "explicar",
            say: { A: "Perdón. Gritaste mucho. Me asusté.", B: "Perdona, es que gritaste mucho y me asusté.", C: "Disculpa. Entre los gritos y los saltos, interpreté mal la situación." },
            reply: { A: "Joaquín se ríe, nervioso. «Ah… Es que nadie contesta mi teléfono.»", B: "Joaquín se ríe, nervioso. «Normal. Es que nadie me contesta el teléfono y necesito contárselo a alguien.»", C: "Joaquín suelta una risa nerviosa. «Comprensible. Es que llevo media hora sin nadie a quien contárselo.»" },
            mood: "worried", next: "nadie",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdona el susto. Me voy.", C: "Perdona. Mejor te dejo tranquilo." },
            reply: { A: "Joaquín corre lejos.", B: "Joaquín sale corriendo con su tarta.", C: "Joaquín se aleja corriendo, abrazado a su tarta." },
            mood: "scared", end: "corre",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón. Tú estás feliz. ¡Yo también quiero estar feliz!", B: "Perdóname. Se te ve tan feliz que quiero saber por qué.", C: "Perdón. Tu alegría merece mejor público. ¿Me la cuentas?" },
            reply: { A: "Joaquín se ríe. «¡Una beca! ¡En Tokio!»", B: "Joaquín se relaja y se ríe. «¡Una beca para estudiar en Tokio!»", C: "Joaquín se ríe, aliviado. «Una beca. En Tokio. Y ahora también un susto que contar.»" },
            mood: "love", next: "detalles",
          },
        },
      },
      "cuchillo-inicio": {
        who: "joaquin", mood: "terror",
        line: {
          A: "Un chico salta y grita en la plaza. Corre hacia ti, ve tu cuchillo y frena. Retrocede con la tarta. «¡Eh, eh! ¿Qué haces con ese cuchillo? ¿Estás loco? ¡Yo solo estoy contento!»",
          B: "Un chico salta y grita junto a la fuente. Corre hacia ti, ve el cuchillo y frena en seco. Retrocede abrazado a una caja de tarta. «¡Eh, eh! ¿Qué haces con ese cuchillo? ¿Estás loco? ¡Yo solo estaba contento!»",
          C: "Un chico con jersey amarillo da saltos alrededor de la fuente. Corre hacia ti, ve el cuchillo y clava los frenos. Retrocede con una caja de tarta como escudo. «¡Eh! ¿Qué haces con ese cuchillo? ¿Estás loco? ¡Yo solo celebraba!»",
        },
        options: [
          {
            id: "tarta",
            say: { A: "¡Es para la tarta! Tú tienes tarta y no tienes cuchillo.", B: "¡Es para la tarta! Tú llevas una tarta y no tienes cuchillo, ¿no?", C: "¡Es para la tarta! Llevas una tarta y, por lo que veo, ningún cubierto." },
            reply: { A: "El chico mira la tarta. Mira el cuchillo. «¿Para la tarta? Pero… guárdalo primero. Me diste un susto.»", B: "El chico mira la tarta, luego el cuchillo, luego la tarta. «¿Para la tarta? Vale… pero guárdalo primero. Me has dado un susto de muerte.»", C: "El chico mira la tarta, el cuchillo y otra vez la tarta. «¿Para la tarta? Bueno… pero guárdalo primero. Casi se me cae la celebración.»" },
            mood: "worried", next: "cuchillo-tarta",
          },
          {
            id: "calma",
            say: { A: "Tranquilo. Lo guardo. ¿Por qué gritas?", B: "Tranquilo, lo guardo. ¿Y tú por qué gritabas tanto?", C: "Tranquilo, lo guardo. ¿Y esos gritos?" },
            reply: { A: "El chico respira. «Me dieron una beca. Japón. Pero ahora no puedo gritar. El cuchillo.»", B: "El chico respira hondo. «Me dieron una beca para Japón. Pero ahora no me salen los gritos. Es por el cuchillo.»", C: "El chico recupera el aliento. «Me han dado una beca para Japón. Pero el cuchillo me ha quitado los gritos de golpe.»" },
            mood: "worried", next: "cuchillo-tarta",
          },
          {
            id: "loco",
            say: { A: "¿Loco yo? ¡Tú corres hacia la gente gritando!", B: "¿Loco yo? ¡Tú corres gritando hacia la gente de noche!", C: "¿Loco yo? Tú eres quien corre gritando hacia desconocidos a medianoche." },
            reply: { A: "El chico grita hacia el hotel: «¡Sebastián! ¡Un cuchillo!» El portero toma el teléfono.", B: "El chico grita hacia el hotel: «¡Sebastián! ¡Tiene un cuchillo!» El portero saca el teléfono sin dudar.", C: "El chico se gira hacia el hotel: «¡Sebastián! ¡Un cuchillo!» El portero ya está marcando." },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-tarta": {
        who: "joaquin", mood: "worried",
        line: {
          A: "Joaquín abre la caja despacio. «Me llamo Joaquín. La tarta es por la beca. Bueno… ¿cortamos? Pero con cuidado. Me sigue temblando la mano.»",
          B: "Joaquín abre la caja con cuidado, sin quitarte el ojo de encima. «Soy Joaquín. La tarta es por la beca. Bueno… ¿la cortamos? Pero despacio, que todavía me tiembla la mano por el cuchillo.»",
          C: "Joaquín abre la caja sin perder de vista tu bolsillo. «Soy Joaquín. La tarta es por la beca. ¿La cortamos? Despacio, por favor: el cuchillo todavía me tiene el pulso en huelga.»",
        },
        options: [
          {
            id: "cortar",
            say: { A: "Con cuidado. Un trozo para ti, uno para mí. ¡Felicidades!", B: "Con mucho cuidado. Un trozo para ti y otro para mí. ¡Felicidades, Joaquín!", C: "Con sumo cuidado. Un trozo para ti, otro para mí. ¡Felicidades, Joaquín!" },
            reply: { A: "Joaquín se ríe por fin. «Gracias. Primero el susto, después la tarta. ¡Así es mi vida!»", B: "Joaquín se ríe por fin, con la boca llena. «Gracias. Primero el susto, luego la tarta. Mi vida en una frase.»", C: "Joaquín se ríe al fin, tarta en mano. «Gracias. Primero el susto y luego la tarta: resumen de mi biografía.»" },
            mood: "smile", end: "cuchillo-trozo",
          },
          {
            id: "beca",
            say: { A: "Guardo el cuchillo. Cuéntame la beca.", B: "Guardo el cuchillo del todo. Cuéntame lo de la beca.", C: "El cuchillo queda guardado. Ahora cuéntame lo de la beca." },
            reply: { A: "Joaquín sonríe. «Arquitectura en Tokio. Un año. Pero no hablo japonés.»", B: "Joaquín sonríe con la tarta sin cortar. «Arquitectura en Tokio, un año entero. El problema: no sé ni una palabra de japonés.»", C: "Joaquín sonríe, la tarta intacta. «Arquitectura en Tokio, un año. Pequeño detalle: mi japonés se limita a pedir sushi.»" },
            mood: "smile", next: "detalles",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Felicidades por la beca.", B: "Mejor me voy. Felicidades por la beca, de verdad.", C: "Creo que me retiro. Enhorabuena por la beca." },
            reply: { A: "Joaquín cierra la caja. «Gracias. Y guarda eso, por favor.» Se va con la tarta.", B: "Joaquín cierra la caja. «Gracias. Y guarda eso, por favor, que asustas.» Se aleja abrazado a la tarta.", C: "Joaquín cierra la caja. «Gracias. Y guarda eso, que asustas a la gente feliz.» Se aleja con la tarta en brazos." },
            mood: "worried", end: "cuchillo-adios",
          },
        ],
      },
      "pistola-inicio": {
        who: "joaquin", mood: "terror",
        line: {
          A: "Un chico salta y grita en la plaza. Corre hacia ti, ve tu pistola y levanta las manos con la caja de tarta. «¡No, por favor! ¡Llévate la tarta! ¡Es de chocolate!»",
          B: "Un chico salta y grita junto a la fuente. Corre hacia ti, ve la pistola en tu cintura y levanta las manos con la caja de tarta en alto. «¡No, por favor! ¡Llévate la tarta! ¡Es de chocolate, buenísima!»",
          C: "Un chico con jersey amarillo salta alrededor de la fuente. Corre hacia ti, ve la pistola y levanta las manos, tarta incluida. «¡No, por favor! ¡Llévate la tarta! Es de chocolate; no tengo nada mejor.»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Baja la tarta. No quiero nada. ¿Por qué gritas?", B: "Baja la tarta, hombre. No quiero nada. ¿Por qué gritabas?", C: "Baja la tarta, por favor. No quiero nada. ¿Y esos gritos?" },
            reply: { A: "El chico no baja nada. «Una beca. Me dieron una beca. Pero… ¿por qué llevas un arma?»", B: "El chico no baja ni un brazo. «Una beca. Me dieron una beca para Japón. Pero… ¿por qué llevas un arma?»", C: "El chico mantiene la tarta en alto. «Una beca. Para Japón. Pero dime: ¿por qué llevas un arma a una plaza?»" },
            mood: "scared", next: "pistola-calma",
          },
          {
            id: "felicitar",
            say: { A: "Tranquilo. ¿Qué celebras? ¡Felicidades!", B: "Tranquilo. ¿Qué estabas celebrando? ¡Felicidades!", C: "Tranquilo. ¿Qué celebrabas? Enhorabuena, sea lo que sea." },
            reply: { A: "El chico habla rápido con las manos arriba. «Una beca. Japón. ¿Puedo bajar los brazos? Me llamo Joaquín.»", B: "El chico habla rapidísimo, manos arriba. «Una beca. Japón. Arquitectura. ¿Puedo bajar los brazos? Soy Joaquín.»", C: "El chico suelta todo de golpe, manos en alto. «Una beca. Japón. Arquitectura. ¿Puedo bajar los brazos ya? Soy Joaquín.»" },
            mood: "scared", next: "pistola-calma",
          },
          {
            id: "seguridad",
            say: { A: "Es por seguridad. La ciudad es peligrosa.", B: "Es solo por seguridad. La ciudad es peligrosa de noche.", C: "Es una medida de seguridad; la ciudad, de noche, tiene sus riesgos." },
            reply: { A: "El chico corre con la tarta. Hacia el hotel. «¡Sebastián!»", B: "El chico sale corriendo con la tarta hacia el hotel, gritando: «¡Sebastián! ¡Una pistola!»", C: "El chico huye con la tarta hacia el hotel, gritando: «¡Sebastián! ¡Una pistola en la plaza!»" },
            mood: "terror", end: "pistola-corre",
          },
        ],
      },
      "pistola-calma": {
        who: "joaquin", mood: "worried",
        line: {
          A: "Joaquín baja la tarta despacio. «En Tokio nadie lleva pistola. Lo leí. Guárdala, por favor. Me quitas la alegría.»",
          B: "Joaquín baja la tarta muy despacio. «En Tokio nadie lleva pistola, lo he leído. Guárdala, por favor. Me estás quitando la alegría del día.»",
          C: "Joaquín baja la tarta centímetro a centímetro. «En Tokio nadie lleva pistola; está en todas las guías. Guárdala, por favor: me está robando el mejor día de mi vida.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. Perdón. Cuéntame lo de Tokio.", B: "La guardo. Perdona. Cuéntame lo de Tokio.", C: "La guardo, y te pido perdón. Cuéntame lo de Tokio." },
            reply: { A: "Joaquín respira. La sonrisa vuelve poco a poco. «Arquitectura. Un año. ¡Y no hablo japonés!»", B: "Joaquín respira y la sonrisa vuelve a su cara poco a poco. «Arquitectura, un año entero. ¡Y no hablo ni una palabra de japonés!»", C: "Joaquín respira; la sonrisa regresa con cautela. «Arquitectura, un año. Y mi japonés se reduce a pedir sushi.»" },
            mood: "smile", next: "detalles",
          },
          {
            id: "madre",
            say: { A: "La guardo. ¿Y tu familia sabe lo de la beca?", B: "La guardo. ¿Tu familia ya sabe lo de la beca?", C: "La guardo. ¿Tu familia está al tanto de la beca?" },
            reply: { A: "Joaquín mira el teléfono. «Nadie contesta. Mi madre trabaja de noche. Y ahora tengo más miedo que antes.»", B: "Joaquín mira el teléfono. «Nadie me contesta. Mi madre trabaja de noche. Y ahora, con la pistola, tengo el doble de miedo.»", C: "Joaquín consulta el teléfono. «Nadie contesta. Mi madre limpia oficinas de noche. Y con la pistola me ha subido el miedo al doble.»" },
            mood: "worried", end: "pistola-llamada",
          },
          {
            id: "tokio",
            say: { A: "En Tokio no hay pistolas. Aquí sí. Es la vida.", B: "En Tokio no hay pistolas; aquí sí. Así es la vida.", C: "En Tokio no hay pistolas y aquí sí. Cada ciudad tiene lo suyo." },
            reply: { A: "Joaquín señala detrás de ti. Un coche de policía. «Sebastián llamó. Lo siento.»", B: "Joaquín señala detrás de ti con la barbilla. Un coche de policía frena junto al hotel. «Sebastián ha llamado. Lo siento.»", C: "Joaquín señala por encima de tu hombro. Un coche patrulla frena frente al Imperial. «Sebastián ha llamado. Lo siento de verdad.»" },
            mood: "worried", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "joaquin", mood: "terror",
        line: {
          A: "Un chico salta y grita en la plaza. Corre hacia ti y ve tu granada. Grita más fuerte. «¡Mi noticia es una bomba! ¡Pero eso es una bomba de verdad! ¡Sebastián!»",
          B: "Un chico salta y grita junto a la fuente. Corre hacia ti, ve la granada en tu bolsillo y grita todavía más fuerte. «¡Mi noticia es una bomba! ¡Pero eso es una bomba de verdad! ¡Sebastián! ¡Sebastián!»",
          C: "Un chico con jersey amarillo da saltos junto a la fuente. Corre hacia ti, repara en la granada y su grito cambia de registro. «¡Mi noticia era una bomba! ¡Pero eso es una bomba literal! ¡Sebastián!»",
        },
        options: [
          {
            id: "noticia",
            say: { A: "¿Qué noticia? Cuéntame. No mires la granada.", B: "¿Qué noticia? Cuéntamela. Y no mires la granada.", C: "¿Qué noticia era esa? Cuéntamela y olvida la granada un momento." },
            reply: { A: "El chico no puede. «¡Una beca! ¡Japón! ¡Pero no puedo pensar con eso ahí!» Los huéspedes salen del hotel.", B: "El chico lo intenta sin éxito. «¡Una beca para Japón! ¡Pero no puedo pensar con eso ahí!» Detrás, Sebastián empieza a sacar huéspedes del hotel.", C: "El chico lo intenta. «¡Una beca para Japón! ¡Pero con eso ahí no me sale ni el nombre!» Detrás, Sebastián desaloja el hotel." },
            mood: "scared", next: "granada-sebastian",
          },
          {
            id: "falsa",
            say: { A: "Tranquilo. Es falsa. Mira, la toco y nada.", B: "Tranquilo, es falsa. Mira: la toco y no pasa nada.", C: "Tranquilo, es falsa. Mira: la golpeo con los nudillos y nada." },
            reply: { A: "El chico se tapa los ojos. «¡No la toques!» Sebastián ya saca a los huéspedes del hotel.", B: "El chico se tapa los ojos. «¡No la toques, por favor!» Sebastián ya está sacando a los huéspedes del hotel en pijama.", C: "El chico se cubre los ojos. «¡No la toques!» Sebastián ya evacúa el hotel: huéspedes en bata, por la plaza." },
            mood: "scared", next: "granada-sebastian",
          },
          {
            id: "broma",
            say: { A: "¿Una bomba? ¡Celebremos! La lanzo al aire.", B: "¿Una bomba? ¡Pues celebremos! La lanzo al aire.", C: "¿Bomba? Entonces celebremos a lo grande: la lanzo al aire." },
            reply: { A: "El chico grita. El hotel grita. Un helicóptero aparece sobre la plaza.", B: "El chico grita. Medio hotel grita desde las ventanas. Sobre la plaza aparece un helicóptero con un foco gigante.", C: "El chico grita; medio hotel grita desde las ventanas. Un helicóptero asoma sobre los tilos con el foco encendido." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-sebastian": {
        who: "joaquin", mood: "scared",
        line: {
          A: "La plaza se llena de huéspedes en pijama. Joaquín, detrás de la fuente, grita: «¡Quiero una foto con la granada! ¡Para mis amigos de Tokio! ¿Es de verdad o no?»",
          B: "La plaza se llena de huéspedes en pijama y Sebastián da órdenes. Joaquín, escondido tras la fuente, grita: «¡Quiero una foto con la granada! ¡Para mis futuros amigos de Tokio! Pero dime: ¿es de verdad?»",
          C: "La plaza rebosa huéspedes en bata y Sebastián dirige el desalojo. Joaquín, parapetado tras la fuente, grita: «¡Quiero una foto con la granada para mis futuros amigos de Tokio! Pero antes: ¿es de verdad?»",
        },
        options: [
          {
            id: "foto",
            say: { A: "No sé si es de verdad. Pero la foto, sí. ¡Ven!", B: "No sé si es de verdad. Pero la foto, claro. ¡Ven aquí!", C: "No tengo ni idea de si es real. La foto, desde luego. ¡Ven!" },
            reply: { A: "Joaquín viene corriendo, hace la foto con la granada y la tarta. Sebastián grita: «¡Es falsa! ¡Todos adentro!»", B: "Joaquín llega corriendo, se hace la foto con la granada en una mano y la tarta en la otra. Sebastián anuncia a gritos: «¡Es falsa! ¡Todo el mundo adentro!»", C: "Joaquín llega corriendo y posa con la granada y la tarta. Sebastián decreta a gritos: «¡Es de utilería! ¡Todos adentro!»" },
            mood: "laugh", end: "granada-foto",
          },
          {
            id: "verdad",
            say: { A: "Creo que es de verdad. Mejor no la toques.", B: "Creo que es de verdad. Mejor no la toques.", C: "Me temo que es real. Mejor que no la toques." },
            reply: { A: "Joaquín desaparece detrás de la fuente. Un helicóptero ilumina la plaza.", B: "Joaquín desaparece del todo detrás de la fuente. Un helicóptero aparece y su foco barre la plaza.", C: "Joaquín se esfuma tras la fuente. Un helicóptero asoma y su foco rastrea la plaza." },
            mood: "terror", end: "granada-helicoptero",
          },
          {
            id: "tarta",
            say: { A: "Es falsa. Ven. Comemos tarta y me cuentas Japón.", B: "Es falsa, de verdad. Ven: comemos tarta y me cuentas lo de Japón.", C: "Es falsa, te lo aseguro. Ven, comemos tarta y me cuentas lo de Japón." },
            reply: { A: "Joaquín viene despacio con la tarta. «Si explota, al menos hay tarta.» Sonríe.", B: "Joaquín se acerca despacio con la caja. «Si explota, por lo menos muero con tarta.» Y sonríe.", C: "Joaquín se aproxima con cautela y la tarta. «Si explota, al menos me pilla con tarta.» Sonríe." },
            mood: "smile", next: "detalles",
          },
        ],
      },
      "gas-inicio": {
        who: "joaquin", mood: "scared",
        line: {
          A: "Un chico salta y grita en la plaza. Corre hacia ti. Levantas el gas pimienta. Frena. «¡Ay! ¡Gas! Yo también tengo. Mi madre me obliga. ¡No lo uses!»",
          B: "Un chico salta y grita junto a la fuente. Corre hacia ti y levantas el gas pimienta. Frena en seco. «¡Ay! ¡Gas pimienta! Yo también llevo, mi madre me obliga. ¡Pero no lo uses, por favor!»",
          C: "Un chico con jersey amarillo da saltos junto a la fuente. Corre hacia ti y levantas el gas. Frena en seco. «¡Gas pimienta! Yo también llevo, por orden de mi madre. ¡Pero no lo uses, que hoy es mi día!»",
        },
        options: [
          {
            id: "madre",
            say: { A: "¿Tu madre te obliga? Qué prudente. ¿Por qué gritas?", B: "¿Tu madre te obliga a llevar gas? Qué prudente. ¿Y por qué gritabas?", C: "¿Tu madre te obliga a llevar gas? Prudente, tu madre. ¿Y esos gritos?" },
            reply: { A: "El chico enseña su bote. «Trabaja de noche y le da miedo. Me llamo Joaquín. ¡Me dieron una beca!»", B: "El chico enseña su propio bote. «Trabaja de noche y le da miedo la ciudad. Soy Joaquín. ¡Me dieron una beca para Japón!»", C: "El chico muestra su bote. «Limpia oficinas de noche y le da miedo la ciudad. Soy Joaquín. ¡Me han dado una beca para Japón!»" },
            mood: "smile", next: "gas-madre",
          },
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Viniste gritando.", B: "Perdona, lo guardo. Es que viniste gritando.", C: "Perdona, lo guardo. Es que llegaste a gritos." },
            reply: { A: "El chico se ríe, nervioso. «Normal. Grito porque me dieron una beca. Soy Joaquín. Y guardo el mío también.»", B: "El chico se ríe, nervioso. «Normal. Gritaba porque me dieron una beca. Soy Joaquín. Y guardo el mío también, mira.»", C: "El chico suelta una risa nerviosa. «Comprensible. Gritaba por una beca. Soy Joaquín. Y guardo el mío también, en señal de paz.»" },
            mood: "smile", next: "gas-madre",
          },
          {
            id: "alto",
            say: { A: "¡No te acerques! ¿Qué quieres?", B: "¡No te acerques más! ¿Qué quieres?", C: "¡Ni un paso más! ¿Qué pretendes?" },
            reply: { A: "El chico corre hacia el hotel con la tarta. «¡Solo estoy contento!»", B: "El chico sale corriendo hacia el hotel con la tarta. «¡Solo estaba contento, de verdad!»", C: "El chico huye hacia el hotel con la tarta. «¡Solo estaba contento, lo juro!»" },
            mood: "scared", end: "gas-huye",
          },
        ],
      },
      "gas-madre": {
        who: "joaquin", mood: "worried",
        line: {
          A: "Joaquín mira su bote de gas. «Mi madre dice que la ciudad es peligrosa. En Tokio no sé. ¿Tú crees que necesito gas en Tokio?»",
          B: "Joaquín mira su bote de gas y luego el tuyo. «Mi madre dice que esta ciudad es peligrosa. De Tokio no sé nada. ¿Tú crees que voy a necesitar gas en Tokio?»",
          C: "Joaquín compara su bote con el tuyo. «Mi madre está convencida de que esta ciudad es peligrosa. De Tokio no sé nada. ¿Crees que allí también hará falta el gas?»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Llama a tu madre. Dile que estás bien y que tienes beca.", B: "Llama a tu madre ahora. Dile que estás bien y que tienes la beca.", C: "Llama a tu madre ahora mismo. Dile que estás bien y que la beca es tuya." },
            reply: { A: "Joaquín marca. «¿Mamá? ¡Me dieron la beca! Sí, llevo el gas. Sí, mamá.» Se ríe.", B: "Joaquín marca y esta vez contestan. «¿Mamá? ¡Me dieron la beca! Sí, llevo el gas. Sí, mamá, siempre.» Se ríe.", C: "Joaquín marca y, por fin, alguien contesta. «¿Mamá? ¡Me han dado la beca! Sí, llevo el gas. Sí, mamá, siempre.» Se ríe." },
            mood: "love", end: "gas-llamada",
          },
          {
            id: "tokio",
            say: { A: "En Tokio no necesitas gas. Es muy seguro. Deja el gas aquí.", B: "En Tokio no vas a necesitar gas. Es una ciudad muy segura. Déjalo aquí.", C: "En Tokio el gas sobra; es una de las ciudades más seguras del mundo. Déjalo en casa." },
            reply: { A: "Joaquín sonríe. «¿Seguro? Entonces en Tokio voy a ser libre.» Guarda el gas.", B: "Joaquín sonríe de verdad. «¿En serio? Entonces en Tokio voy a sentirme libre por primera vez.» Guarda el bote.", C: "Joaquín sonríe con alivio. «¿De verdad? Entonces Tokio será la primera ciudad donde camine sin miedo.» Guarda el bote." },
            mood: "smile", end: "consejo",
          },
          {
            id: "paranoia",
            say: { A: "Siempre hay que llevar gas. En todas partes. Confía en nadie.", B: "Siempre hay que llevar gas, en cualquier ciudad. No te fíes de nadie.", C: "El gas se lleva siempre, en cualquier ciudad del mundo. No confíes en nadie." },
            reply: { A: "Joaquín te mira con pena. «Hablas como mi madre.» Guarda el gas y se va, despacio.", B: "Joaquín te mira con cierta pena. «Hablas igual que mi madre.» Guarda el gas y se aleja despacio, con la tarta.", C: "Joaquín te observa con lástima. «Hablas exactamente como mi madre.» Guarda el gas y se aleja despacio, tarta en brazos." },
            mood: "sad", end: "gas-pena",
          },
        ],
      },
      "lapiz-inicio": {
        who: "joaquin", mood: "surprised",
        line: {
          A: "Un chico salta y grita en la plaza. Corre hacia ti y ve tu lápiz. «¡Un lápiz! ¡Escríbeme TOKIO en el brazo! ¡Me dieron una beca y nadie me cree!»",
          B: "Un chico salta y grita junto a la fuente. Corre hacia ti, ve tu lápiz y te agarra del brazo. «¡Un lápiz! ¡Escríbeme TOKIO en el brazo, por favor! Me dieron una beca y necesito que sea real.»",
          C: "Un chico con jersey amarillo da saltos junto a la fuente. Corre hacia ti, ve tu lápiz y se te planta delante. «¡Un lápiz! ¡Escríbeme TOKIO en el brazo! Me han dado una beca y, hasta que lo vea escrito, no me lo creo.»",
        },
        options: [
          {
            id: "brazo",
            say: { A: "Claro. Dame el brazo. T-O-K-I-O. ¡Felicidades!", B: "Claro, dame el brazo. T, O, K, I, O. ¡Felicidades!", C: "Faltaría más. El brazo: T, O, K, I, O. Enhorabuena." },
            reply: { A: "El chico mira su brazo. «¡Es real! ¡Es real!» Salta otra vez. «Me llamo Joaquín.»", B: "El chico mira su brazo como si fuera un pasaporte. «¡Es real! ¡Ahora sí es real!» Salta otra vez. «Soy Joaquín, perdona.»", C: "El chico contempla su brazo como un visado. «¡Es real! ¡Ahora es real!» Vuelve a saltar. «Soy Joaquín, disculpa.»" },
            mood: "smile", next: "lapiz-carta",
          },
          {
            id: "papel",
            say: { A: "Mejor en papel. Dura más. ¿Qué beca?", B: "Mejor en un papel, que dura más. ¿Qué beca es?", C: "Mejor en papel: dura más que la piel. ¿De qué beca hablamos?" },
            reply: { A: "El chico niega. «No, en el brazo. Mañana me lo enseño en el espejo.» Te da el brazo. «Joaquín. Arquitectura. Tokio.»", B: "El chico niega con la cabeza. «No, en el brazo. Mañana me lo quiero ver en el espejo.» Te tiende el brazo. «Joaquín. Arquitectura. Tokio.»", C: "El chico niega. «No, en el brazo. Mañana quiero vérmelo en el espejo al despertar.» Te tiende el brazo. «Joaquín. Arquitectura. Tokio.»" },
            mood: "smile", next: "lapiz-carta",
          },
          {
            id: "japones",
            say: { A: "Te escribo Tokio en japonés. Más o menos.", B: "Te escribo Tokio en japonés. O algo parecido.", C: "Te escribo Tokio en japonés. Aproximadamente, que conste." },
            reply: { A: "Dibujas unos signos inventados. El chico los mira con respeto. «¡Mi primera palabra en japonés!» Se la fotografía.", B: "Dibujas unos signos completamente inventados. El chico los mira con respeto. «¡Mi primera palabra en japonés!» Se hace una foto del brazo.", C: "Dibujas unos signos de dudosa autenticidad. El chico los contempla con veneración. «¡Mi primera palabra en japonés!» Se fotografía el brazo." },
            mood: "laugh", end: "lapiz-brazo",
          },
        ],
      },
      "lapiz-carta": {
        who: "joaquin", mood: "smile",
        line: {
          A: "Joaquín mira su brazo y luego la caja de la tarta. «Mi madre trabaja de noche. Llega a las seis. ¿Me escribes una nota en la caja? Yo dicto.»",
          B: "Joaquín mira su brazo y después la caja de la tarta. «Mi madre trabaja de noche y llega a las seis. ¿Me escribes una nota en la caja? Yo te dicto; a mí me tiembla la mano.»",
          C: "Joaquín mira su brazo y luego la caja de la tarta. «Mi madre limpia oficinas de noche y vuelve a las seis. ¿Me escribes una nota en la caja? Yo dicto, que a mí hoy no me obedece la mano.»",
        },
        options: [
          {
            id: "dictar",
            say: { A: "Dicta. Yo escribo.", B: "Dicta, que yo escribo.", C: "Dicta; yo me encargo de la letra." },
            reply: { A: "Joaquín dicta: «Mamá: la beca es mía. Tokio. La tarta es para ti. Te quiero.» Se le quiebra la voz.", B: "Joaquín dicta despacio: «Mamá: me dieron la beca. Tokio. La tarta es para ti. Te quiero.» Se le quiebra la voz en la última palabra.", C: "Joaquín dicta: «Mamá: la beca es mía. Tokio. La tarta es para ti. Te quiero.» La voz se le rompe justo al final." },
            mood: "love", end: "lapiz-caja",
          },
          {
            id: "tu-mismo",
            say: { A: "Escríbela tú. Con tu letra. Toma el lápiz.", B: "Escríbela tú, con tu propia letra. Toma el lápiz.", C: "Escríbela tú, con tu letra; ella la reconocerá. Toma el lápiz." },
            reply: { A: "Joaquín escribe despacio en la caja. «Mamá, lo conseguí.» Te devuelve el lápiz. «Gracias.»", B: "Joaquín escribe despacio en la tapa de la caja: «Mamá, lo conseguí. Gracias por todo.» Te devuelve el lápiz con cuidado.", C: "Joaquín escribe en la tapa con letra temblorosa: «Mamá, lo conseguí. Gracias por todo.» Te devuelve el lápiz como una reliquia." },
            mood: "love", end: "lapiz-caja",
          },
          {
            id: "bailar",
            say: { A: "Después. Ahora celebramos. ¡A bailar!", B: "Eso después. Ahora toca celebrar. ¡A bailar!", C: "La nota puede esperar. Ahora toca celebrar: ¡a bailar!" },
            reply: { A: "Joaquín levanta el brazo con TOKIO escrito y baila alrededor de la fuente.", B: "Joaquín levanta el brazo con TOKIO escrito como una bandera y baila alrededor de la fuente.", C: "Joaquín alza el brazo con TOKIO escrito, a modo de estandarte, y baila alrededor de la fuente." },
            mood: "laugh", end: "lapiz-brazo",
          },
        ],
      },
      "libro-inicio": {
        who: "joaquin", mood: "laugh",
        line: {
          A: "Un chico salta y grita en la plaza. Corre hacia ti, ve tu libro y se ríe. «¡No! ¡Hoy no quiero ver libros! ¡Me dieron una beca! ¿Es de Japón?»",
          B: "Un chico salta y grita junto a la fuente. Corre hacia ti, ve tu libro y suelta una carcajada. «¡No, por favor! ¡Hoy no quiero ver un libro ni en pintura! ¡Me dieron una beca! Espera… ¿es de Japón?»",
          C: "Un chico con jersey amarillo salta junto a la fuente. Corre hacia ti, ve tu libro y se ríe. «¡No! ¡Hoy no quiero ver un libro ni de lejos! ¡Me han dado una beca! Aunque… ¿es de Japón?»",
        },
        options: [
          {
            id: "no-japon",
            say: { A: "No es de Japón. Es una novela. ¿Qué beca?", B: "No es de Japón, es una novela. ¿Qué beca te dieron?", C: "No tiene nada que ver con Japón; es una novela. ¿Qué beca es esa?" },
            reply: { A: "El chico suspira. «Arquitectura. Tokio. Un año.» Mira el libro. «¿Y de qué va? Para el avión.»", B: "El chico suspira, feliz. «Arquitectura, en Tokio, un año entero.» Mira el libro con interés. «¿Y de qué va? Son catorce horas de avión.»", C: "El chico suspira de felicidad. «Arquitectura, Tokio, un año.» Observa el libro. «¿De qué trata? Tengo catorce horas de avión por delante.»" },
            mood: "smile", next: "libro-trueque",
          },
          {
            id: "senal",
            say: { A: "Abre el libro. La primera frase es tu señal.", B: "Abre el libro por cualquier página. La primera frase será tu señal.", C: "Abre el libro al azar: la primera frase que leas será tu señal para Tokio." },
            reply: { A: "El chico abre y lee: «Y entonces se fue sin mirar atrás.» Se queda callado. «Es una señal. Me llamo Joaquín.»", B: "El chico abre el libro y lee en voz alta: «Y entonces se fue, sin mirar atrás.» Se queda en silencio. «Es una señal. Soy Joaquín.»", C: "El chico abre al azar y lee: «Y entonces se fue, sin mirar atrás.» Guarda silencio. «Es una señal. Soy Joaquín.»" },
            mood: "surprised", next: "libro-trueque",
          },
          {
            id: "regalo",
            say: { A: "Toma el libro. Es tu regalo de beca.", B: "Toma, el libro es tuyo. Regalo de beca.", C: "Toma el libro; considéralo tu regalo de beca." },
            reply: { A: "El chico lo abraza. «¿Para mí? Me llamo Joaquín. Toma un trozo de tarta. Es un cambio.»", B: "El chico lo abraza como a un amigo. «¿Para mí? Soy Joaquín. Toma un trozo de tarta: cambio justo.»", C: "El chico lo estrecha contra el pecho. «¿Para mí? Soy Joaquín. Toma un trozo de tarta; es un trueque justo.»" },
            mood: "love", end: "libro-tarta",
          },
        ],
      },
      "libro-trueque": {
        who: "joaquin", mood: "smile",
        line: {
          A: "Joaquín mira el libro y mira su tarta. «¿Cambiamos? Mi tarta por tu libro. Para el avión. ¿O es muy triste?»",
          B: "Joaquín mira el libro, luego la tarta, luego el libro. «¿Hacemos un cambio? Mi tarta por tu libro, para el avión. ¿O es un libro triste? Porque en el avión no quiero llorar.»",
          C: "Joaquín mira alternativamente el libro y la tarta. «¿Te propongo un cambio? Mi tarta por tu libro, para el vuelo. ¿O es triste? Llorar en el avión me parece un mal comienzo.»",
        },
        options: [
          {
            id: "cambio",
            say: { A: "Cambio hecho. No es triste. Es largo. Perfecto para el avión.", B: "Cambio hecho. No es triste; es largo. Perfecto para catorce horas.", C: "Cambio aceptado. No es triste, es largo: ideal para catorce horas de vuelo." },
            reply: { A: "Joaquín te da la tarta entera. «¡Gracias! Lo leo en el avión y te escribo desde Tokio.»", B: "Joaquín te entrega la caja entera. «¡Gracias! Lo leo en el avión y te escribo desde Tokio cuando lo termine.»", C: "Joaquín te cede la tarta completa. «Gracias. Lo leo en el vuelo y te escribo desde Tokio al terminarlo.»" },
            mood: "love", end: "libro-tarta",
          },
          {
            id: "leer",
            say: { A: "Te leo el principio. Y tú decides.", B: "Te leo el principio y tú decides si lo quieres.", C: "Te leo las primeras líneas y decides tú." },
            reply: { A: "Lees. Joaquín se sienta en la fuente y escucha. «Sigue. Un poco más.» Abre la tarta.", B: "Lees las primeras líneas. Joaquín se sienta en el borde de la fuente y escucha. «Sigue, un poco más.» Abre la tarta.", C: "Lees el comienzo. Joaquín se sienta en la fuente, atento. «Sigue, solo un poco más.» Y abre la tarta." },
            mood: "smile", end: "libro-fuente",
          },
          {
            id: "miedo",
            say: { A: "¿Tienes miedo de llorar en el avión? ¿Por qué?", B: "¿Te da miedo llorar en el avión? ¿Por qué?", C: "¿Tanto miedo te da llorar en el avión? ¿Qué hay detrás?" },
            reply: { A: "Joaquín deja de sonreír. «Es la primera vez que me voy de casa. Un año. Tengo miedo.»", B: "Joaquín pierde la sonrisa un segundo. «Es la primera vez que me voy de casa. Un año entero. Tengo miedo, la verdad.»", C: "Joaquín se queda serio. «Es la primera vez que salgo de casa. Un año. Y, si te soy sincero, tengo miedo.»" },
            mood: "worried", next: "miedo",
          },
        ],
      },
      "corazon-inicio": {
        who: "joaquin", mood: "love",
        line: {
          A: "Un chico salta y grita en la plaza. Corre hacia ti, ve el corazón y se para. Se le llenan los ojos de lágrimas. «¿Me das un abrazo? Me dieron una beca y nadie contesta el teléfono.»",
          B: "Un chico salta y grita junto a la fuente. Corre hacia ti, ve el corazón y se detiene. Los ojos se le llenan de lágrimas. «¿Me das un abrazo? Me dieron una beca para Japón y nadie me contesta el teléfono.»",
          C: "Un chico con jersey amarillo salta junto a la fuente. Corre hacia ti, ve el corazón y frena. Los ojos se le humedecen. «¿Me das un abrazo? Me han dado una beca para Japón y nadie contesta el teléfono.»",
        },
        options: [
          {
            id: "abrazo",
            say: { A: "Claro. Ven aquí. ¡Felicidades!", B: "Claro que sí. Ven aquí. ¡Felicidades!", C: "Por supuesto. Ven aquí. ¡Enhorabuena!" },
            reply: { A: "El chico te abraza y llora un poco. «Me llamo Joaquín. Soy el primero de mi familia en la universidad.»", B: "El chico te abraza y llora un poco en tu hombro. «Soy Joaquín. Soy el primero de mi familia que va a la universidad.»", C: "El chico te abraza y llora un poco contra tu hombro. «Soy Joaquín. El primero de mi familia que pisa una universidad.»" },
            mood: "love", next: "corazon-joaquin",
          },
          {
            id: "quien",
            say: { A: "Claro. ¿A quién llamabas?", B: "Claro. ¿Y a quién estabas llamando?", C: "Claro. ¿A quién intentabas llamar?" },
            reply: { A: "El chico te abraza. «A mi madre. Trabaja de noche. Limpia oficinas. Me llamo Joaquín.»", B: "El chico te abraza sin esperar más. «A mi madre. Trabaja de noche, limpia oficinas aquí al lado. Soy Joaquín.»", C: "El chico te abraza de inmediato. «A mi madre. Trabaja de noche limpiando oficinas de este barrio. Soy Joaquín.»" },
            mood: "love", next: "corazon-joaquin",
          },
          {
            id: "llamar",
            say: { A: "Primero un abrazo. Después llamas otra vez. Yo espero.", B: "Primero el abrazo. Después vuelves a llamar, y yo espero contigo.", C: "Primero el abrazo. Luego vuelves a llamar; yo me quedo contigo mientras tanto." },
            reply: { A: "El chico te abraza y marca. Esta vez contestan. «¿Mamá? ¡Mamá!» Llora y ríe.", B: "El chico te abraza y marca con la otra mano. Esta vez contestan. «¿Mamá? ¡Mamá! ¡Me la dieron!» Llora y ríe a la vez.", C: "El chico te abraza y marca sin soltarte. Esta vez contestan. «¿Mamá? ¡Mamá! ¡Me la han dado!» Llora y ríe al mismo tiempo." },
            mood: "love", end: "corazon-llamada",
          },
        ],
      },
      "corazon-joaquin": {
        who: "joaquin", mood: "love",
        line: {
          A: "Joaquín no te suelta. «Tengo miedo, ¿sabes? Un año en Tokio. Solo. ¿Tú te fuiste alguna vez lejos?»",
          B: "Joaquín sigue abrazado a ti. «Tengo miedo, ¿sabes? Un año entero en Tokio, sin nadie. ¿Tú te has ido alguna vez lejos de casa?»",
          C: "Joaquín no afloja el abrazo. «Tengo miedo, si te soy sincero. Un año en Tokio, sin conocer a nadie. ¿Tú te has ido alguna vez lejos de todo?»",
        },
        options: [
          {
            id: "si",
            say: { A: "Sí. Y tuve miedo. Y fue lo mejor de mi vida.", B: "Sí. Y también tuve miedo. Y fue lo mejor que me ha pasado.", C: "Sí. Y el miedo vino conmigo. Y fue lo mejor que me ha pasado nunca." },
            reply: { A: "Joaquín te abraza más fuerte. «Gracias. Eso quería oír.»", B: "Joaquín te abraza todavía más fuerte. «Gracias. Era justo lo que necesitaba oír.»", C: "Joaquín aprieta el abrazo. «Gracias. Era exactamente lo que necesitaba que alguien me dijera.»" },
            mood: "love", end: "corazon-brazos",
          },
          {
            id: "madre",
            say: { A: "Llama a tu madre otra vez. Yo te abrazo mientras.", B: "Vuelve a llamar a tu madre. Yo te abrazo mientras suena.", C: "Vuelve a llamar a tu madre; yo no te suelto mientras suena." },
            reply: { A: "Joaquín marca. Contestan. «¿Mamá? ¡Me la dieron!» Llora en tu hombro y ríe.", B: "Joaquín marca sin soltarte. Esta vez contestan. «¿Mamá? ¡Me la dieron!» Llora en tu hombro y ríe al mismo tiempo.", C: "Joaquín marca sin deshacer el abrazo. Contestan. «¿Mamá? ¡Me la han dado!» Llora en tu hombro mientras ríe." },
            mood: "love", end: "corazon-llamada",
          },
          {
            id: "bailar",
            say: { A: "El miedo se baila. ¡Vamos!", B: "El miedo se baila, Joaquín. ¡Vamos!", C: "El miedo se baila, Joaquín. En marcha." },
            reply: { A: "Joaquín se ríe entre lágrimas y baila contigo alrededor de la fuente.", B: "Joaquín se ríe entre lágrimas y te arrastra a bailar alrededor de la fuente.", C: "Joaquín se ríe con los ojos húmedos y te arrastra a bailar alrededor de la fuente." },
            mood: "love", end: "celebrar",
          },
        ],
      },
    },
    ends: {
      celebrar: { text: { A: "Joaquín baila alrededor de la fuente. Tú bailas un poco también.", B: "Joaquín baila alrededor de la fuente y te arrastra con él. Desde un balcón, alguien aplaude.", C: "Joaquín convierte la fuente en pista de baile. Desde un balcón del hotel, alguien aplaude con desgana elegante." }, change: "baila", recap: "Celebraste la beca de Joaquín bailando en la plaza." },
      abrazo: { text: { A: "Joaquín abre los brazos. Está muy feliz. Tú también.", B: "Joaquín abre los brazos al cielo y grita «¡Tokio!». La plaza entera lo oye.", C: "Joaquín abre los brazos y grita «¡Tokio!» a los tilos. Un perro, a lo lejos, le contesta." }, change: "abraza", recap: "Compartiste la alegría de Joaquín con un abrazo." },
      mensaje: { text: { A: "Joaquín graba un mensaje para su familia. Habla y se ríe.", B: "Joaquín graba un audio larguísimo para su familia. De vez en cuando se ríe solo.", C: "Joaquín graba un audio de seis minutos. Por cómo se ríe, su madre lo va a escuchar en bucle." }, change: "llama", recap: "Animaste a Joaquín a mandar un mensaje a su familia." },
      prisa: { text: { A: "Te vas. Joaquín le cuenta la noticia a otra persona.", B: "Sigues tu camino. A tus espaldas, Joaquín le cuenta la noticia al portero del hotel.", C: "Sigues tu camino. Detrás de ti, Joaquín ya le cuenta lo de Tokio al portero del hotel, que finge sorpresa." }, change: "sigue", recap: "Felicitaste a Joaquín y seguiste tu camino." },
      consejo: { text: { A: "Joaquín sonríe. Está más tranquilo.", B: "Joaquín se queda en la fuente, más tranquilo, mirando su teléfono con una sonrisa.", C: "Joaquín se queda junto a la fuente, más sereno. El vértigo sigue ahí, pero ahora tiene compañía." }, change: "sonrie", recap: "Le diste ánimos y un consejo a Joaquín." },
      regalo: { text: { A: "Joaquín guarda tu libro. «Lo voy a leer en Japón.»", B: "Joaquín guarda tu libro en la mochila como un tesoro. «Te escribo desde Tokio cuando lo termine.»", C: "Joaquín guarda el libro con cuidado. «Cuando lo termine, te mando una foto con el monte Fuji de fondo.»" }, change: "sonrie", recap: "Le regalaste tu libro a Joaquín para el viaje." },
      corre: { text: { A: "Joaquín se va corriendo. La plaza está en silencio.", B: "Joaquín desaparece corriendo. La plaza se queda en silencio.", C: "Joaquín desaparece. La plaza recupera su silencio, que esta noche suena un poco triste." }, change: "corre", recap: "Asustaste a Joaquín sin querer." },
      "cuchillo-policia": { text: { A: "Llega la policía. Joaquín explica que solo tenía tarta. Tú explicas el cuchillo. Nadie come tarta.", B: "Llega la policía. Joaquín explica que él solo llevaba tarta; tú explicas el cuchillo. Al final nadie come tarta.", C: "Llega un coche patrulla. Joaquín explica que su única arma era una tarta; tú explicas el cuchillo. La tarta, al final, no la come nadie." }, change: "policia", recap: "Tu cuchillo convirtió la celebración de Joaquín en una visita de la policía." },
      "cuchillo-trozo": { text: { A: "Comen tarta junto a la fuente. Joaquín mira tu bolsillo de vez en cuando.", B: "Comen tarta sentados en la fuente. Joaquín mira tu bolsillo de vez en cuando, por si acaso.", C: "Comen tarta en el borde de la fuente. Joaquín vigila tu bolsillo de reojo, por si el cuchillo opina." }, change: "se-sienta", recap: "Después del susto, cortaste la tarta de Joaquín con tu cuchillo." },
      "cuchillo-adios": { text: { A: "Joaquín se va con la tarta. Mira atrás dos veces. La plaza queda en silencio.", B: "Joaquín se aleja abrazado a la tarta, mirando atrás dos veces. La plaza se queda en silencio.", C: "Joaquín se aleja abrazado a la tarta y mira atrás dos veces. La plaza recupera su silencio." }, change: "se-va", recap: "Tu cuchillo le quitó las ganas de celebrar a Joaquín." },
      "pistola-corre": { text: { A: "Joaquín entra en el hotel con la tarta. Sebastián cierra la puerta.", B: "Joaquín desaparece dentro del hotel con la tarta. Sebastián cierra la puerta y te mira fijamente.", C: "Joaquín se refugia en el Imperial con la tarta. Sebastián cierra la puerta sin dejar de mirarte." }, change: "huye", recap: "Tu pistola hizo huir a Joaquín al hotel con su tarta." },
      "pistola-llamada": { text: { A: "Joaquín llama a su madre otra vez. No contesta. Se va a esperarla.", B: "Joaquín vuelve a llamar a su madre. No contesta. Se va, con la tarta, a esperarla a la salida del trabajo.", C: "Joaquín vuelve a llamar a su madre, sin éxito. Se va con la tarta a esperarla a la puerta de la oficina." }, change: "llama", recap: "Tu pistola le dio más miedo a Joaquín y se fue a buscar a su madre." },
      "pistola-patrulla": { text: { A: "Dos policías bajan del coche. Joaquín les cuenta lo de la beca. Ellos no sonríen.", B: "Dos policías bajan del coche. Joaquín les cuenta lo de la beca mientras te piden el arma. No sonríen.", C: "Dos agentes bajan del coche patrulla. Joaquín les habla de la beca mientras te piden el arma; ninguno sonríe." }, change: "policia", recap: "El portero vio tu pistola y la policía interrumpió la celebración de Joaquín." },
      "granada-helicoptero": { text: { A: "El helicóptero ilumina la plaza. Joaquín, detrás de la fuente, grita «¡Tokio!» igual.", B: "El helicóptero ilumina toda la plaza. Joaquín, desde detrás de la fuente, grita «¡Tokio!» de todas formas.", C: "El foco del helicóptero inunda la plaza. Joaquín, tras la fuente, grita «¡Tokio!» a pesar de todo." }, change: "helicoptero", recap: "Tu granada evacuó el hotel y trajo un helicóptero a la celebración de Joaquín." },
      "granada-foto": { text: { A: "Joaquín mira la foto: él, la tarta y la granada. «Mis amigos de Tokio no van a creerlo.»", B: "Joaquín mira la foto: él, la tarta, la granada y medio hotel en pijama. «Mis futuros amigos de Tokio no se lo van a creer.»", C: "Joaquín contempla la foto: él, la tarta, la granada y medio hotel en bata. «En Tokio nadie va a creerse esto.»" }, change: "sonrie", recap: "Joaquín se hizo una foto con tu granada para sus amigos de Tokio." },
      "gas-huye": { text: { A: "Joaquín entra en el hotel con la tarta. Sebastián te mira mal.", B: "Joaquín desaparece dentro del hotel con la tarta. Sebastián te mira con cara de pocos amigos.", C: "Joaquín se refugia en el Imperial con la tarta. Sebastián te dedica una mirada profesional de desaprobación." }, change: "corre", recap: "Tu gas pimienta hizo huir a Joaquín en su noche más feliz." },
      "gas-llamada": { text: { A: "Joaquín habla con su madre. Llora y ríe. Guarda su gas. Tú también.", B: "Joaquín habla con su madre junto a la fuente, llorando y riendo. Guarda su gas. Tú guardas el tuyo.", C: "Joaquín habla con su madre junto a la fuente, entre lágrimas y risas. Guarda su gas; tú, el tuyo." }, change: "llama", recap: "Joaquín llamó a su madre y guardaron el gas los dos." },
      "gas-pena": { text: { A: "Joaquín se va despacio con la tarta. Ya no salta.", B: "Joaquín se aleja despacio con la tarta. Ya no salta ni grita.", C: "Joaquín se aleja despacio, tarta en brazos. Los saltos se han quedado en la plaza." }, change: "triste", recap: "Le hablaste a Joaquín como su madre y se fue sin celebrar." },
      "lapiz-caja": { text: { A: "Joaquín se sienta en la fuente con la caja. Lee la nota tres veces.", B: "Joaquín se sienta en el borde de la fuente con la caja en las rodillas. Lee la nota tres veces.", C: "Joaquín se sienta en la fuente con la caja en el regazo. Lee la nota tres veces, sin voz." }, change: "se-sienta", recap: "Escribiste con tu lápiz la nota de Joaquín para su madre." },
      "lapiz-brazo": { text: { A: "Joaquín baila con el brazo en alto. TOKIO se ve desde el hotel.", B: "Joaquín baila alrededor de la fuente con el brazo en alto. TOKIO se lee desde los balcones del hotel.", C: "Joaquín baila alrededor de la fuente con el brazo en alto; TOKIO se lee desde los balcones del Imperial." }, change: "baila", recap: "Escribiste TOKIO en el brazo de Joaquín y bailó." },
      "libro-tarta": { text: { A: "Tú tienes una tarta. Joaquín tiene tu libro. Los dos contentos.", B: "Te quedas con una tarta entera. Joaquín se va con tu libro bajo el brazo. Un buen cambio para los dos.", C: "Te quedas con una tarta entera y Joaquín se va con tu libro bajo el brazo. Un trueque que deja a los dos satisfechos." }, change: "se-va", recap: "Cambiaste tu libro por la tarta de Joaquín." },
      "libro-fuente": { text: { A: "Lees junto a la fuente. Joaquín come tarta y escucha.", B: "Lees en voz alta junto a la fuente. Joaquín come tarta y escucha, sin prisa.", C: "Lees en voz alta junto a la fuente. Joaquín come tarta y escucha, sin prisa por irse a ningún sitio." }, change: "se-sienta", recap: "Le leíste tu libro a Joaquín junto a la fuente." },
      "corazon-brazos": { text: { A: "Joaquín te abraza mucho tiempo. Después grita «¡Tokio!» al cielo.", B: "Joaquín te abraza durante un buen rato. Luego grita «¡Tokio!» al cielo, con la voz rota.", C: "Joaquín te abraza largamente. Después grita «¡Tokio!» a los tilos, con la voz quebrada." }, change: "abraza", recap: "Joaquín te abrazó y le quitaste el miedo a Tokio." },
      "corazon-llamada": { text: { A: "Joaquín habla con su madre en tu hombro. Llora y ríe. Tú no te mueves.", B: "Joaquín habla con su madre apoyado en tu hombro. Llora y ríe. Tú no te mueves ni un centímetro.", C: "Joaquín habla con su madre con la cabeza en tu hombro. Llora y ríe. Tú te quedas quieto, de apoyo." }, change: "llama", recap: "Joaquín habló por fin con su madre, abrazado a ti." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué comes para celebrar?", B: "¿Alguna vez un susto te arruinó una celebración?", C: "¿Cómo se recupera el ánimo de una celebración después de un susto?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué ciudad es segura para ti?", B: "¿En qué ciudad te sentirías seguro caminando de noche?", C: "¿Qué le quita a una buena noticia la presencia del miedo?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Haces fotos raras?", B: "¿Cuál es la foto más absurda que tienes en tu celular?", C: "¿Por qué queremos fotografiar los momentos más caóticos de nuestra vida?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Tu madre tiene miedo por ti?", B: "¿Qué cosas haces solo porque tu familia te lo pide?", C: "¿Cuándo el cuidado de una madre se convierte en una carga?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Qué palabra escribirías en tu brazo?", B: "¿Qué logro tuyo necesitaste ver escrito para creerlo?", C: "¿Qué cambia cuando una noticia pasa de la voz al papel?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Qué lees en el avión?", B: "¿Qué libro te llevarías a un viaje de un año?", C: "¿Qué frase de un libro leíste como si fuera una señal para tu vida?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿A quién abrazas cuando estás feliz?", B: "¿Quién fue la primera persona que te abrazó después de una buena noticia?", C: "¿Qué tiene un abrazo que una llamada no puede dar?" } },
    },
    speak: {
      A1: "¿Qué país quieres visitar?",
      A2: "¿Qué buena noticia recibiste este año?",
      B1: "¿A quién llamas primero cuando tienes una buena noticia, y por qué?",
      B2: "¿Qué echarías de menos si te fueras a vivir un año a otro país?",
      C1: "¿Cómo se distingue una alegría que se comparte de una que se presume?",
      C2: "¿Por qué crees que los grandes logros vienen a veces acompañados de miedo?",
    },
  },

  // ─────────────────────────────────────────── ESCENA 5
  {
    id: "alto-misterioso",
    kind: "escena",
    district: "alto",
    title: "Una desconocida con sombrero",
    verb: "ACERCARME",
    goal: "Aceptar o rechazar un encargo, pedir aclaraciones, expresar desconfianza con cortesía y tratar de usted.",
    cast: [
      {
        id: "dolores", name: "Dolores", role: "Señora misteriosa con sombrero",
        age: "old", body: "f", build: "slim", height: 1.62,
        hair: "bun", hairColor: "#cfcac2", skin: "#e7c6a6",
        top: "coat", topColor: "#3b2f2a", bottom: "skirt", bottomColor: "#2a2525",
        extras: ["hat", "scarf"], pose: "stand", props: ["lime-tree", "fountain"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "dolores", mood: "neutral",
        line: {
          A: "Una señora mayor sale de detrás de un árbol. Tiene sombrero y abrigo largo. «Buenas noches. Usted tiene cara de persona honesta. Tome esta llave.»",
          B: "Una señora mayor, con abrigo largo y sombrero, aparece entre los tilos. Te tiende una llave antigua. «Buenas noches. Usted parece una persona honesta. Esta llave no es mía.»",
          C: "Entre los tilos surge una señora de abrigo largo y sombrero, como salida de otra época. Sostiene una llave antigua. «Buenas noches. Llevo una hora buscando una cara honesta. Usted servirá.»",
        },
        options: [
          {
            id: "llave",
            say: { A: "¿Una llave? ¿De quién es?", B: "¿Una llave? ¿Y de quién es?", C: "¿Una llave? Antes de tocarla, me gustaría saber de quién es." },
            reply: { A: "La señora sonríe. «Me llamo Dolores. La llave tiene una etiqueta: T-7.»", B: "La señora le da la vuelta a la etiqueta: «T-7». «Me llamo Dolores. Y no es mía, pero sé de quién es.»", C: "«Prudente. Me gusta», dice ella. «Me llamo Dolores. La etiqueta dice T-7, y yo sé dónde está su dueño.»" },
            mood: "smile", next: "encargo",
          },
          {
            id: "rechazar",
            say: { A: "Perdone, no acepto cosas de personas que no conozco.", B: "Perdone, pero no acepto cosas de desconocidos.", C: "Con todo respeto, señora, mi madre me enseñó a no aceptar llaves de desconocidas." },
            reply: { A: "La señora levanta una ceja. «Muy bien. Pero escuche primero.»", B: "La señora levanta una ceja, divertida. «Hace bien. Pero escuche antes de decidir.»", C: "La señora sonríe bajo el sombrero. «Su madre es una mujer sensata. Pero no le dijo nada de escuchar, ¿verdad?»" },
            mood: "surprised", next: "dudas",
          },
          {
            id: "quien",
            say: { A: "¿Quién es usted?", B: "Perdone, pero… ¿quién es usted?", C: "Disculpe la franqueza, pero ¿quién es usted exactamente?" },
            reply: { A: "«Me llamo Dolores. Vivo aquí. Camino de noche.»", B: "«Me llamo Dolores. Una vecina que camina de noche. Nada más.»", C: "«Dolores. Vecina de este barrio desde antes de que pusieran las farolas», dice. «Lo demás no importa.»" },
            mood: "smile", next: "encargo",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz.", B: "Sacas el lápiz para apuntar sus palabras.", C: "Sacas el lápiz: esta conversación merece notas." },
            say: { A: "Un momento. Voy a escribir todo.", B: "Espere, déjeme apuntarlo todo, por si acaso.", C: "Permítame tomar nota. Mi memoria nocturna no es de fiar." },
            reply: { A: "La señora sonríe. «Bien. Me llamo Dolores. Escriba: T-7.»", B: "La señora asiente, satisfecha. «Me llamo Dolores. Apunte: la llave dice T-7.»", C: "«Una persona metódica. Mejor todavía», dice la señora. «Dolores. Apunte: T-7.»" },
            mood: "smile", next: "encargo",
          },
          libro: {
            act: { A: "La señora ve tu libro.", B: "La señora se fija en tu libro.", C: "La señora mira tu libro con interés." },
            say: { A: "¿Le gusta este libro?", B: "¿Lo ha leído? Es muy bueno.", C: "¿Lo conoce? Me tiene completamente atrapado." },
            reply: { A: "La señora pone la llave dentro del libro. «Así no se pierde. Me llamo Dolores.»", B: "La señora mete la llave entre las páginas. «Así no se pierde. Las llaves y los libros se entienden. Soy Dolores.»", C: "La señora desliza la llave entre las páginas, como un marcapáginas. «Las llaves y los libros guardan secretos. Soy Dolores.»" },
            mood: "smile", next: "encargo",
          },
          gas: {
            act: { A: "Te asustas. Sacas el gas pimienta.", B: "Te pone nervioso y sacas el gas pimienta.", C: "Tanto misterio te pone nervioso y sacas el gas pimienta." },
            say: { A: "¡No se acerque, por favor!", B: "¡No se acerque más, por favor!", C: "Le pido que no dé ni un paso más." },
            reply: { A: "La señora no se mueve. «Muy bien. Ahora guarde eso.»", B: "La señora no se mueve ni un centímetro. «Tengo ochenta años, joven. Guarde eso.»", C: "La señora te mira con una calma inquietante. «He visto guerras más interesantes. Guarde eso.»" },
            mood: "surprised", next: "calmar",
          },
          granada: {
            act: { A: "La señora ve tu granada.", B: "La señora ve la granada en tu mano.", C: "La señora repara en la granada sin pestañear." },
            say: { A: "Buenas noches. ¿Qué quiere?", B: "Buenas noches. ¿Qué quiere de mí?", C: "Buenas noches. ¿En qué puedo ayudarla?" },
            reply: { A: "La señora da un paso atrás. «Ay… Eso es peligroso.»", B: "La señora da un paso atrás, por primera vez insegura. «Eso… no lo esperaba.»", C: "Por primera vez, la señora parece sorprendida. «Vaya. Yo traía un misterio, pero usted trae otro.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "La señora ve tu pistola.", B: "La señora ve tu pistola.", C: "La pistola queda a la vista de la señora." },
            say: { A: "¿Qué llave es?", B: "¿Qué llave es esa?", C: "¿De qué llave me habla?" },
            reply: { A: "La señora guarda la llave. «Mejor no.»", B: "La señora esconde la llave en el abrigo. «Quizá me equivoqué de cara.»", C: "La señora esconde la llave en el abrigo. «Parece que me he equivocado de cara honesta.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "La llave tiene una cuerda vieja. Sacas el cuchillo.", B: "La llave está atada con un cordón viejo a su guante. Sacas el cuchillo.", C: "La llave cuelga de un cordón anudado a su guante. Sacas el cuchillo." },
            say: { A: "¿Corto la cuerda?", B: "¿Quiere que corte el cordón?", C: "Si me permite, corto el cordón y nos ahorramos el nudo." },
            reply: { A: "La señora dice que sí. «Bien. Me llamo Dolores.»", B: "La señora te tiende la mano, tranquila. «Hágalo. Me llamo Dolores. El nudo lo hice yo hace años.»", C: "La señora extiende la mano sin miedo. «Adelante. Soy Dolores. Ese nudo lleva ahí más que usted en el mundo.»" },
            mood: "smile", next: "encargo",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted parece cansada. ¿Puedo ayudarla?", B: "La veo cansada. ¿Puedo ayudarla en algo?", C: "Parece que lleva mucho peso para una llave tan pequeña. ¿La ayudo?" },
            reply: { A: "La señora sonríe. «Me llamo Dolores. Hace años, alguien me ayudó a mí. Ahora le toca a usted.»", B: "La señora sonríe por primera vez. «Soy Dolores. Hace cincuenta años, alguien me devolvió algo muy importante. Ahora le toca a usted.»", C: "La señora sonríe bajo el ala del sombrero. «Dolores. Hace cincuenta años alguien me devolvió una llave. Las deudas así se pagan hacia delante.»" },
            mood: "love", next: "encargo",
          },
        },
      },
      encargo: {
        who: "dolores", mood: "neutral",
        line: {
          A: "Dolores te da la llave. «Tiene que devolverla a quien la perdió: en el mercado, al fondo del callejón.»",
          B: "Dolores te pone la llave en la mano. «Hay que devolverla a quien la perdió: en el mercado, al fondo del callejón. Yo ya no puedo ir.»",
          C: "Dolores te cierra los dedos sobre la llave. «Devuélvala a quien la perdió: en el mercado, al fondo del callejón. Mis rodillas ya no llegan tan lejos.»",
        },
        options: [
          {
            id: "acepto",
            say: { A: "De acuerdo. Yo la llevo.", B: "Está bien. Yo me encargo de llevarla.", C: "Cuente conmigo. Aunque no entienda nada, la llave llegará." },
            reply: { A: "Dolores sonríe. «Gracias. Sabía que usted era la persona.»", B: "Dolores asiente despacio. «Gracias. Lo supe en cuanto le vi la cara.»", C: "Dolores te mira con aprobación. «Entender está sobrevalorado. Gracias.»" },
            mood: "smile", end: "llave",
          },
          {
            id: "preguntas",
            say: { A: "¿Y cómo sé quién la perdió?", B: "Pero ¿cómo voy a saber quién la perdió?", C: "Un detalle práctico: ¿cómo reconoceré a su dueño?" },
            reply: { A: "Dolores se ríe un poco. «Usted pregunta mucho.»", B: "Dolores se ríe por lo bajo. «Pregunta mucho, ¿eh? Eso me gusta.»", C: "Dolores sonríe con media boca. «Las preguntas son buenas. Pero no todas tienen respuesta esta noche.»" },
            mood: "surprised", next: "dudas",
          },
          {
            id: "no-puedo",
            say: { A: "Lo siento. Esta noche no puedo.", B: "Lo siento mucho, pero esta noche no puedo.", C: "Lo lamento de veras, pero no me veo con fuerzas para misterios esta noche." },
            reply: { A: "Dolores guarda la llave. «Bueno. Buenas noches.»", B: "Dolores guarda la llave, decepcionada. «Lo entiendo. Buenas noches.»", C: "Dolores guarda la llave sin reproches, pero con tristeza. «Lo entiendo. Las llaves esperan. Yo, cada vez menos.»" },
            mood: "sad", end: "rechazo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Gracias por confiar en mí. ¿Es importante para usted?", B: "Gracias por confiar en mí. Esta llave es importante para usted, ¿verdad?", C: "Gracias por la confianza. Intuyo que esta llave significa más de lo que dice." },
            reply: { A: "Dolores sonríe. «Sí. Hace años, yo también tuve una llave perdida. Alguien me la devolvió. Así conocí a mi marido.»", B: "Dolores sonríe, tierna. «Hace cincuenta años se me cayó una llave. El chico que me la devolvió fue mi marido. Quizá esta trae suerte.»", C: "Dolores se ríe con dulzura. «Hace medio siglo, un muchacho me devolvió una llave. Me casé con él. Vaya usted a saber qué abre esta.»" },
            mood: "love", end: "llave",
          },
        },
      },
      dudas: {
        who: "dolores", mood: "surprised",
        line: {
          A: "Dolores tiene la llave en la mano. Espera. «La llave pesa. Y yo estoy cansada.»",
          B: "Dolores sostiene la llave frente a ti y espera. «Las preguntas son buenas. Pero la llave pesa, y yo estoy cansada.»",
          C: "Dolores sostiene la llave entre dos dedos, paciente. «Usted puede seguir preguntando, o puede ser útil. Las dos cosas a la vez son raras.»",
        },
        options: [
          {
            id: "acepto2",
            say: { A: "Bueno, la llevo. ¡Pero si es una broma…!", B: "Está bien, la llevo. Pero si es una broma, vuelvo a buscarla.", C: "De acuerdo. Pero si esto es una cámara oculta, exijo salir guapo." },
            reply: { A: "Dolores se ríe. «No es una broma. Gracias.»", B: "Dolores se ríe de verdad. «No es una broma. Y no me va a encontrar.»", C: "Dolores suelta una risa breve. «Sale usted muy bien. Y no, no es una broma.»" },
            mood: "smile", end: "llave",
          },
          {
            id: "policia",
            say: { A: "¿Por qué no la llevamos a la policía?", B: "¿Y por qué no la llevamos a la policía? Es lo más normal.", C: "¿No sería más razonable dejarla en una comisaría?" },
            reply: { A: "Dolores se ríe. «La policía no abre esa puerta.» Y se va.", B: "Dolores sonríe. «La policía no abre esa puerta, joven.» Y se aleja entre los árboles.", C: "«Lo razonable rara vez abre puertas», dice Dolores. Guarda la llave y se aleja entre los tilos." },
            mood: "smile", end: "misterio",
          },
          {
            id: "no",
            say: { A: "No, gracias. Lo siento.", B: "Lo siento, pero prefiero no meterme en esto.", C: "Le agradezco la confianza, pero prefiero mantenerme al margen." },
            reply: { A: "Dolores guarda la llave. «Bueno. Buenas noches.»", B: "Dolores guarda la llave con un suspiro. «Lo entiendo. Buenas noches.»", C: "Dolores guarda la llave sin discutir. «Al margen se está tranquilo. Buenas noches.»" },
            mood: "sad", end: "rechazo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted me cae muy bien, Dolores. La ayudo.", B: "Me cae muy bien, Dolores. Cuente conmigo.", C: "Dolores, tiene usted un encanto peligroso. De acuerdo, la ayudo." },
            reply: { A: "Dolores sonríe. «Usted también. La persona del T-7 lleva años esperando.»", B: "Dolores sonríe de verdad. «Usted también. La persona del T-7 lleva años esperando esta llave.»", C: "Dolores te da la llave con una sonrisa. «Peligroso es dejar una puerta cerrada demasiado tiempo. La del T-7 lleva años así.»" },
            mood: "love", end: "llave",
          },
        },
      },
      calmar: {
        who: "dolores", mood: "surprised",
        line: {
          A: "Dolores te mira mucho tiempo. «Esta noche vi cosas raras. Usted es la más rara.»",
          B: "Dolores te mira en silencio un buen rato. «Esta noche he visto muchas cosas raras. Usted es la más rara.»",
          C: "Dolores te observa en silencio, como quien evalúa un cuadro dudoso. «De todas las rarezas de esta noche, usted se lleva el premio.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Tuve miedo.", B: "Perdone, lo guardo. Me puso nervioso tanto misterio.", C: "Le pido disculpas. Lo guardo. Su misterio me pilló con la guardia demasiado alta." },
            reply: { A: "Dolores asiente. «Bien. Ahora escuche. Me llamo Dolores.»", B: "Dolores asiente. «Disculpas aceptadas. Me llamo Dolores. Y ahora, escuche.»", C: "Dolores asiente con gravedad. «Mejor así. Me llamo Dolores. Y ahora, preste atención.»" },
            mood: "neutral", next: "encargo",
          },
          {
            id: "explicar",
            say: { A: "Es para mi seguridad. Usted es muy rara.", B: "Es por seguridad. Perdone, pero usted es un poco rara.", C: "Es por seguridad. Comprenda que una señora que regala llaves en la oscuridad…" },
            reply: { A: "Dolores llama al portero del hotel. «¡Sebastián! ¡Policía, por favor!»", B: "Dolores levanta la mano y llama al portero del hotel. «Sebastián, sea tan amable de llamar a la policía.»", C: "«Comprendo perfectamente», dice Dolores, y hace una seña al portero del hotel. «Sebastián, la policía, si es tan amable.»" },
            mood: "neutral", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdone. Mejor me voy.", C: "Disculpe. Creo que lo mejor es que me retire." },
            reply: { A: "Dolores no dice nada. Se va entre los árboles.", B: "Dolores no contesta. Se da la vuelta y desaparece entre los árboles.", C: "Dolores no responde. Da media vuelta y se disuelve entre los tilos, como si nunca hubiera estado." },
            mood: "neutral", end: "misterio",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón, señora. Usted es valiente. Me gusta.", B: "Perdóneme. Y admiro su calma, de verdad.", C: "Perdóneme. Y permítame decirle que su sangre fría es admirable." },
            reply: { A: "Dolores sonríe. «Gracias. Me llamo Dolores. Ahora, escuche.»", B: "Dolores sonríe un poco. «Ochenta años dan mucha calma. Me llamo Dolores. Escuche.»", C: "Dolores casi se ríe. «Ochenta años de práctica. Soy Dolores. Y ahora, a lo nuestro.»" },
            mood: "love", next: "encargo",
          },
        },
      },
      "cuchillo-inicio": {
        who: "dolores", mood: "scared",
        line: {
          A: "Una señora mayor sale de detrás de un árbol con una llave. Ve tu cuchillo. Da un paso atrás y esconde la llave. «¿Qué hace con ese cuchillo? Baje eso. No se acerque así a una anciana.»",
          B: "Una señora mayor, con sombrero y abrigo largo, aparece entre los tilos con una llave antigua. Ve el cuchillo y retrocede un paso, guardando la llave en el abrigo. «¿Qué hace usted con ese cuchillo? Baje eso. A una anciana no se le acerca uno así.»",
          C: "Entre los tilos surge una señora de abrigo largo y sombrero, con una llave antigua en la mano. Ve el cuchillo y retrocede un paso, la llave desaparece en el abrigo. «¿Qué hace usted con ese cuchillo? Bájelo. A mi edad, los sustos se cobran caros.»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Perdón, señora. Lo bajo. ¿Qué llave es esa?", B: "Perdone, señora. Lo bajo ahora mismo. ¿Qué llave era esa?", C: "Le pido perdón, señora. Lo bajo. ¿Y esa llave que acaba de esconder?" },
            reply: { A: "La señora te mira mucho tiempo. «Primero el cuchillo al bolsillo. Luego hablamos de llaves.»", B: "La señora te observa un buen rato sin moverse. «Primero el cuchillo al bolsillo, del todo. Después hablaremos de llaves.»", C: "La señora te estudia en silencio. «Primero, el cuchillo al bolsillo. Del todo. Luego, si acaso, hablamos de llaves.»" },
            mood: "neutral", next: "cuchillo-prueba",
          },
          {
            id: "cordon",
            say: { A: "La llave tiene una cuerda vieja. Solo quería cortarla.", B: "La llave colgaba de un cordón viejo. Solo quería cortarlo.", C: "La llave colgaba de un cordón ajado. Mi única intención era cortarlo." },
            reply: { A: "La señora levanta una ceja. «¿Cortar? Nadie le pidió nada. Ese nudo lo hice yo. Guarde el cuchillo.»", B: "La señora levanta una ceja. «¿Cortarlo? Nadie se lo ha pedido. Ese nudo lo hice yo hace cuarenta años. Guarde el cuchillo.»", C: "La señora arquea una ceja. «¿Cortarlo? Nadie se lo pidió. Ese nudo es mío desde hace cuarenta años. Guarde el cuchillo.»" },
            mood: "angry", next: "cuchillo-prueba",
          },
          {
            id: "rara",
            say: { A: "Usted sale de detrás de un árbol de noche. Yo tengo miedo.", B: "Usted sale de detrás de un árbol en plena noche. El que tiene miedo soy yo.", C: "Usted aparece de detrás de un árbol a medianoche. Permítame que el asustado sea yo." },
            reply: { A: "La señora levanta la mano. «¡Sebastián! Este joven tiene un cuchillo.» El portero viene.", B: "La señora levanta la mano hacia el hotel, sin prisa. «Sebastián, este joven tiene un cuchillo.» El portero cruza la calle.", C: "La señora alza la mano hacia el hotel, con calma glacial. «Sebastián, este joven lleva un cuchillo.» El portero cruza la calle." },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-prueba": {
        who: "dolores", mood: "neutral",
        line: {
          A: "La señora saca la llave otra vez. «Me llamo Dolores. Mi marido también llevaba un cuchillo. Y esta llave. ¿Usted es capaz de devolver una llave sin cortar nada?»",
          B: "La señora saca de nuevo la llave. «Me llamo Dolores. Mi marido también llevaba siempre un cuchillo. Y esta misma llave. ¿Sería usted capaz de devolverla sin cortar nada por el camino?»",
          C: "La señora vuelve a sacar la llave, despacio. «Soy Dolores. Mi marido también iba por la vida con un cuchillo. Y con esta llave. ¿Sería usted capaz de devolverla sin cortar nada por el camino?»",
        },
        options: [
          {
            id: "si",
            say: { A: "Sí. La devuelvo. Sin cuchillo. ¿Adónde?", B: "Sí, la devuelvo. Sin cuchillo, prometido. ¿Adónde hay que llevarla?", C: "Sí. La devuelvo con el cuchillo guardado, palabra. ¿Adónde?" },
            reply: { A: "Dolores te da la llave. «Al mercado. Al fondo del callejón. Pregunte por el T-7.»", B: "Dolores te pone la llave en la mano. «Al mercado, al fondo del callejón. Pregunte por el T-7. Y el cuchillo, en el bolsillo.»", C: "Dolores te cierra los dedos sobre la llave. «Al mercado, al fondo del callejón. Pregunte por el T-7. El cuchillo no sale del bolsillo.»" },
            mood: "smile", end: "cuchillo-llave",
          },
          {
            id: "marido",
            say: { A: "¿Su marido? ¿Qué hacía con el cuchillo y la llave?", B: "¿Su marido? ¿Y qué hacía con un cuchillo y esta llave?", C: "¿Su marido? ¿Qué hacía un hombre con un cuchillo y esta llave?" },
            reply: { A: "Dolores sonríe un poco. «Cortaba cuerdas en el mercado. Abría una puerta con la llave. Nunca cortó nada que no fuera suyo.»", B: "Dolores sonríe apenas. «Cortaba cuerdas en el mercado, de día. De noche abría una puerta con esta llave. Nunca cortó nada que no fuera suyo.»", C: "Dolores sonríe con media boca. «De día cortaba cuerdas en el mercado; de noche abría una puerta con esta llave. Jamás cortó nada que no le perteneciera.»" },
            mood: "smile", next: "encargo",
          },
          {
            id: "no",
            say: { A: "No, gracias. Llaves y cuchillos juntos, no.", B: "No, gracias. Llaves de desconocidas y cuchillos no se mezclan.", C: "No, gracias. Una llave de desconocida y un cuchillo en el mismo bolsillo me parecen demasiado." },
            reply: { A: "Dolores guarda la llave. «Sensato. Y cobarde. Buenas noches.»", B: "Dolores guarda la llave en el abrigo. «Sensato. Y un poco cobarde. Buenas noches.»", C: "Dolores guarda la llave. «Sensato. Y ligeramente cobarde. Buenas noches.»" },
            mood: "sad", end: "rechazo",
          },
        ],
      },
      "pistola-inicio": {
        who: "dolores", mood: "neutral",
        line: {
          A: "Una señora mayor sale de detrás de un árbol con una llave. Ve tu pistola. No grita. Guarda la llave y levanta las manos despacio. «A mi edad, un arma no me da miedo. Me aburre. ¿Qué quiere?»",
          B: "Una señora mayor, con sombrero y abrigo largo, aparece entre los tilos con una llave antigua. Ve la pistola y no grita. Guarda la llave en el abrigo y levanta las manos sin prisa. «A mi edad, joven, un arma no me asusta. Me aburre. ¿Qué quiere usted?»",
          C: "Entre los tilos surge una señora de abrigo largo y sombrero con una llave antigua. Ve la pistola y ni pestañea. Guarda la llave y alza las manos con parsimonia. «A mi edad, un arma ya no asusta; aburre. ¿Qué desea usted?»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Baje las manos, señora. No quiero nada. ¿Qué llave era esa?", B: "Baje las manos, señora. No quiero nada. ¿Qué llave era esa?", C: "Baje las manos, señora. No pretendo nada. ¿Qué llave era esa?" },
            reply: { A: "La señora baja las manos. «Una llave para una persona honesta. Usted lleva pistola. ¿Es honesto?»", B: "La señora baja las manos con calma. «Una llave para una persona honesta. Usted lleva una pistola. Dígame: ¿es honesto?»", C: "La señora baja las manos sin prisa. «Una llave destinada a alguien honesto. Usted lleva pistola. ¿Lo es?»" },
            mood: "neutral", next: "pistola-prueba",
          },
          {
            id: "porque",
            say: { A: "¿Por qué sale de detrás de un árbol? Casi disparo.", B: "¿Por qué sale usted de detrás de un árbol a estas horas? Casi me asusta.", C: "¿Por qué aparece usted de detrás de un árbol a medianoche? Por poco se lleva un susto de los dos." },
            reply: { A: "La señora no se inmuta. «Yo salgo de donde quiero. Usted dispara a quien quiere. Mala combinación.»", B: "La señora ni se inmuta. «Yo salgo de donde me da la gana. Usted apunta a quien le da la gana. Mala combinación.»", C: "La señora permanece impasible. «Yo salgo de donde quiero; usted apunta a quien quiere. Pésima combinación.»" },
            mood: "neutral", next: "pistola-prueba",
          },
          {
            id: "seguridad",
            say: { A: "Es por seguridad. La ciudad es peligrosa.", B: "Es solo por seguridad. La ciudad es peligrosa de noche.", C: "Es una medida de seguridad. Esta ciudad, de noche, no es lo que parece." },
            reply: { A: "La señora sonríe. «Ya lo sé. Por eso llamé a la policía hace cinco minutos. Ahí vienen.»", B: "La señora sonríe bajo el sombrero. «Lo sé perfectamente. Por eso llamé a la policía hace cinco minutos, cuando le vi la cintura. Ahí llegan.»", C: "La señora sonríe bajo el ala del sombrero. «Lo sé de sobra. Por eso llamé a la policía hace cinco minutos, en cuanto le vi la cintura. Ahí llegan.»" },
            mood: "smile", end: "pistola-patrulla",
          },
        ],
      },
      "pistola-prueba": {
        who: "dolores", mood: "neutral",
        line: {
          A: "La señora te mira sin miedo. «Me llamo Dolores. Guarde la pistola y le doy la llave. No la guarde y me voy. Elija.»",
          B: "La señora te mira sin una pizca de miedo. «Me llamo Dolores. Guarde la pistola y le doy la llave. Si no la guarda, me voy entre los árboles. Usted elige.»",
          C: "La señora sostiene tu mirada sin el menor temor. «Soy Dolores. Guarde la pistola y le entrego la llave. Si no, me vuelvo a los tilos. La elección es suya.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. Deme la llave. ¿Adónde la llevo?", B: "La guardo. Deme la llave. ¿Adónde tengo que llevarla?", C: "La guardo. Deme la llave. ¿Adónde debo llevarla?" },
            reply: { A: "Dolores te da la llave. «Al mercado, al fondo del callejón. T-7. Y la pistola, en casa, la próxima vez.»", B: "Dolores te entrega la llave. «Al mercado, al fondo del callejón. T-7. Y la próxima vez, la pistola se queda en casa.»", C: "Dolores te cierra la mano sobre la llave. «Al mercado, al fondo del callejón. T-7. Y la próxima vez, la pistola se queda en un cajón.»" },
            mood: "smile", end: "pistola-llave",
          },
          {
            id: "no",
            say: { A: "No la guardo. No la conozco.", B: "No la guardo. No la conozco de nada.", C: "No la guardo; no sé quién es usted." },
            reply: { A: "Dolores se da la vuelta. «Entonces adiós.» Desaparece entre los árboles.", B: "Dolores se da la vuelta sin más. «Entonces, adiós.» Y desaparece entre los tilos.", C: "Dolores gira sobre sus talones. «Entonces, adiós.» Y se disuelve entre los tilos." },
            mood: "neutral", end: "pistola-desaparece",
          },
          {
            id: "honesto",
            say: { A: "Soy honesto. Pero tengo miedo de noche. Por eso la pistola.", B: "Soy honesto. Pero de noche tengo miedo, y por eso la pistola.", C: "Soy honesto. Lo que pasa es que la noche me da miedo; de ahí la pistola." },
            reply: { A: "Dolores asiente. «El miedo es honesto. La pistola, no.» Te da la llave igual.", B: "Dolores asiente despacio. «El miedo es honesto. La pistola, no tanto.» Y te da la llave de todas formas.", C: "Dolores asiente. «El miedo es honesto; la pistola, no.» Aun así, te entrega la llave." },
            mood: "smile", end: "pistola-llave",
          },
        ],
      },
      "granada-inicio": {
        who: "dolores", mood: "terror",
        line: {
          A: "Una señora mayor sale de detrás de un árbol con una llave. Ve tu granada. Por primera vez en la noche, corre. Rápido. Se esconde detrás de la fuente. «¡Eso no! ¡Eso no, joven!»",
          B: "Una señora mayor, con sombrero y abrigo largo, aparece entre los tilos con una llave antigua. Ve la granada en tu mano y, por primera vez en toda la noche, corre. Sorprendentemente rápido. Se esconde tras la fuente. «¡Eso no! ¡Eso no, joven!»",
          C: "Entre los tilos surge una señora de abrigo largo y sombrero con una llave antigua. Ve la granada y, contra todo pronóstico, echa a correr con una agilidad imposible. Se parapeta tras la fuente. «¡Eso no! ¡Eso sí que no, joven!»",
        },
        options: [
          {
            id: "calma",
            say: { A: "¡Tranquila! No explota. ¿Qué quería usted?", B: "¡Tranquila, señora! No explota. ¿Qué quería decirme?", C: "¡Tranquila, señora! No explota. ¿Qué quería usted de mí?" },
            reply: { A: "Desde la fuente: «¡Darle una llave! ¡Pero ahora no sé! ¡Guarde eso!»", B: "Desde detrás de la fuente: «¡Darle una llave! ¡Pero ya no sé si quiero! ¡Guarde eso de una vez!»", C: "Desde la fuente llega su voz: «¡Darle una llave! ¡Aunque ahora dudo! ¡Guarde eso de inmediato!»" },
            mood: "scared", next: "granada-fuente",
          },
          {
            id: "rapida",
            say: { A: "¡Qué rápido corre usted! ¿Cuántos años tiene?", B: "¡Qué rápido corre usted! ¿Cuántos años dijo que tenía?", C: "¡Qué velocidad, señora! ¿Cuántos años dijo que tenía?" },
            reply: { A: "Desde la fuente: «¡Ochenta! ¡Y con una bomba, veinte! ¡Guarde eso!»", B: "Desde detrás de la fuente: «¡Ochenta! ¡Pero con una bomba delante, veinte! ¡Guarde eso!»", C: "Desde la fuente: «¡Ochenta! ¡Con una bomba delante, veinte! ¡Guárdela ya!»" },
            mood: "laugh", next: "granada-fuente",
          },
          {
            id: "broma",
            say: { A: "Es una broma. Mire, la lanzo al aire.", B: "Es una broma, señora. Mire, la lanzo al aire.", C: "Es una broma, señora. Observe: la lanzo al aire." },
            reply: { A: "Dolores grita. Sebastián sale del hotel gritando. Un helicóptero aparece.", B: "Dolores grita desde la fuente. Sebastián sale del hotel gritando. Sobre la plaza aparece un helicóptero con un foco.", C: "Dolores grita desde la fuente y Sebastián sale del hotel a voces. Un helicóptero asoma sobre los tejados con el foco encendido." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-fuente": {
        who: "dolores", mood: "scared",
        line: {
          A: "Dolores habla desde detrás de la fuente. «Me llamo Dolores. La llave es para el mercado, el T-7. Se la lanzo. Usted la agarra. No se acerque.»",
          B: "Dolores negocia desde detrás de la fuente, con solo el sombrero visible. «Me llamo Dolores. La llave hay que llevarla al mercado, al fondo del callejón, al T-7. Se la lanzo y usted la atrapa. Pero no se acerque.»",
          C: "Dolores negocia tras la fuente; solo asoma el sombrero. «Soy Dolores. La llave va al mercado, al fondo del callejón, al T-7. Se la lanzo y usted la atrapa. Ni un paso hacia aquí.»",
        },
        options: [
          {
            id: "atrapar",
            say: { A: "De acuerdo. Lance la llave. Yo la llevo.", B: "De acuerdo. Lance la llave; yo la llevo.", C: "De acuerdo. Lance la llave y yo me encargo." },
            reply: { A: "La llave vuela sobre la fuente. La agarras. «¡Bien! ¡Y ahora váyase lejos, con eso!»", B: "La llave vuela por encima de la fuente y la atrapas al vuelo. «¡Bien! ¡Y ahora váyase lejos, con eso!»", C: "La llave describe un arco sobre la fuente y la atrapas. «¡Bien! ¡Y ahora aléjese con eso cuanto antes!»" },
            mood: "smile", end: "granada-llave",
          },
          {
            id: "guardar",
            say: { A: "La guardo en la mochila. Ya está. Salga, por favor.", B: "La guardo en la mochila. Ya está, no se ve. Salga, por favor.", C: "La guardo en la mochila; ya no está a la vista. Salga, por favor." },
            reply: { A: "Dolores sale despacio. Te mira la mochila. «Bueno. Escuche. La llave…»", B: "Dolores sale de detrás de la fuente muy despacio, sin apartar los ojos de la mochila. «Bueno. Escuche. La llave…»", C: "Dolores emerge con cautela, los ojos fijos en la mochila. «Está bien. Escuche. La llave…»" },
            mood: "neutral", next: "encargo",
          },
          {
            id: "no-se",
            say: { A: "No sé si explota. Mejor me voy con ella.", B: "No sé si explota. Mejor me voy con ella lejos.", C: "No sé si explota. Lo prudente es que me aleje con ella." },
            reply: { A: "Dolores grita: «¡Sebastián!» Un helicóptero aparece sobre el hotel.", B: "Dolores grita hacia el hotel: «¡Sebastián!» Y sobre el Imperial aparece un helicóptero con el foco encendido.", C: "Dolores llama a gritos: «¡Sebastián!» Un helicóptero asoma sobre el Imperial, foco en marcha." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "gas-inicio": {
        who: "dolores", mood: "smile",
        line: {
          A: "Una señora mayor sale de detrás de un árbol. Levantas el gas pimienta. Ella saca otro del abrigo. Es viejo. «¿Gas? Yo llevo el mío desde 1975. Usted hace bien.»",
          B: "Una señora mayor, con sombrero y abrigo largo, aparece entre los tilos. Levantas el gas pimienta. Ella, sin inmutarse, saca otro del abrigo, antiguo y abollado. «¿Gas pimienta? Yo llevo el mío desde 1975. Hace usted bien.»",
          C: "Entre los tilos surge una señora de abrigo largo y sombrero. Levantas el gas pimienta y ella, con total naturalidad, saca del abrigo un bote antiguo y abollado. «¿Gas pimienta? El mío es de 1975. Hace usted muy bien.»",
        },
        options: [
          {
            id: "desde",
            say: { A: "¿Desde 1975? ¿Lo ha usado alguna vez?", B: "¿Desde 1975? ¿Y lo ha usado alguna vez?", C: "¿Desde 1975? ¿Ha tenido que usarlo alguna vez?" },
            reply: { A: "La señora sonríe. «Dos veces. Me llamo Dolores. Las dos veces, en este barrio.»", B: "La señora sonríe bajo el sombrero. «Dos veces. Me llamo Dolores. Y las dos veces, en este barrio tan elegante.»", C: "La señora sonríe. «Dos veces. Soy Dolores. Ambas en este barrio tan respetable.»" },
            mood: "smile", next: "gas-charla",
          },
          {
            id: "bajar",
            say: { A: "Bajamos los dos. Perdón. Usted salió del árbol de repente.", B: "Bajemos los dos, ¿sí? Perdone. Es que salió del árbol de repente.", C: "Bajemos los dos. Disculpe: apareció de detrás del árbol sin avisar." },
            reply: { A: "La señora guarda el suyo. «Yo salgo de donde quiero. Me llamo Dolores. Usted tiene buenos reflejos.»", B: "La señora guarda el suyo con calma. «Yo salgo de donde me apetece. Me llamo Dolores. Tiene usted buenos reflejos, por cierto.»", C: "La señora guarda el suyo sin prisa. «Yo aparezco donde me place. Soy Dolores. Buenos reflejos, por cierto.»" },
            mood: "smile", next: "gas-charla",
          },
          {
            id: "alto",
            say: { A: "¡No se acerque! ¿Qué quiere?", B: "¡No se acerque más! ¿Qué quiere de mí?", C: "¡Ni un paso más! ¿Qué pretende usted?" },
            reply: { A: "La señora no se mueve. «Quería darle una llave. Ya no. Usted no está para llaves.» Se va.", B: "La señora no mueve ni un dedo. «Quería darle una llave. Ya no quiero. Usted no está en condiciones de recibir llaves.» Se aleja.", C: "La señora permanece inmóvil. «Pensaba confiarle una llave. Ya no. No está usted para confianzas.» Se retira." },
            mood: "neutral", end: "gas-retirada",
          },
        ],
      },
      "gas-charla": {
        who: "dolores", mood: "neutral",
        line: {
          A: "Dolores saca una llave antigua. «En este barrio todos sonríen y nadie ayuda. Por eso llevo gas. Y por eso necesito a alguien con gas para esta llave.»",
          B: "Dolores saca del abrigo una llave antigua. «En este barrio todo el mundo sonríe y nadie ayuda a nadie. Por eso llevo gas. Y por eso busco a alguien con gas y cabeza para esta llave.»",
          C: "Dolores extrae del abrigo una llave antigua. «En este barrio todos sonríen y nadie mueve un dedo. Por eso llevo gas. Y por eso necesito a alguien con gas y criterio para esta llave.»",
        },
        options: [
          {
            id: "acepto",
            say: { A: "Deme la llave. ¿Adónde va?", B: "Deme la llave. ¿Adónde tiene que ir?", C: "Deme la llave. ¿Cuál es su destino?" },
            reply: { A: "Dolores te la da. «Al mercado, al fondo del callejón. T-7. Con el gas a mano, por si acaso.»", B: "Dolores te la pone en la mano. «Al mercado, al fondo del callejón. T-7. Y con el gas a mano, que el callejón es oscuro.»", C: "Dolores te la entrega. «Al mercado, al fondo del callejón. T-7. Y el gas, a mano: el callejón no tiene farolas.»" },
            mood: "smile", end: "gas-llave",
          },
          {
            id: "consejo",
            say: { A: "¿Y qué consejo me da para la noche, con su experiencia?", B: "¿Qué consejo me daría para la noche, con toda su experiencia?", C: "Con toda su experiencia, ¿qué consejo me daría para sobrevivir a esta noche?" },
            reply: { A: "Dolores guarda la llave. «Camine despacio. Mire a los ojos. Y desconfíe de quien sonríe mucho.»", B: "Dolores guarda la llave sin dársela. «Camine despacio. Mire a los ojos. Y desconfíe de quien sonríe demasiado. Buenas noches.»", C: "Dolores guarda la llave, pensativa. «Camine despacio, mire a los ojos y desconfíe de quien sonríe en exceso. Buenas noches.»" },
            mood: "smile", end: "gas-consejo",
          },
          {
            id: "policia",
            say: { A: "¿Y por qué no lleva la llave a la policía?", B: "¿Y por qué no lleva usted la llave a la policía?", C: "¿No sería más sensato entregar esa llave a la policía?" },
            reply: { A: "Dolores se ríe. «La policía no abre esa puerta.» Y se va entre los árboles.", B: "Dolores suelta una risa breve. «La policía no abre esa puerta, joven.» Y se aleja entre los tilos.", C: "Dolores ríe por lo bajo. «La policía no abre esa puerta.» Y se desvanece entre los tilos." },
            mood: "smile", end: "misterio",
          },
        ],
      },
      "lapiz-inicio": {
        who: "dolores", mood: "smile",
        line: {
          A: "Una señora mayor sale de detrás de un árbol con una llave. Ve tu lápiz. «Un lápiz. Perfecto. Escriba T-7 en su mano. Ahora. Y luego le explico.»",
          B: "Una señora mayor, con sombrero y abrigo largo, aparece entre los tilos con una llave antigua. Ve tu lápiz y asiente, satisfecha. «Un lápiz. Perfecto. Escríbase T-7 en la mano. Ahora mismo. Después le explico.»",
          C: "Entre los tilos surge una señora de abrigo largo y sombrero con una llave antigua. Ve tu lápiz y asiente como quien confirma una sospecha. «Un lápiz. Perfecto. Apúntese T-7 en la mano. Ahora. Las explicaciones vienen después.»",
        },
        options: [
          {
            id: "escribir",
            say: { A: "T-7. Listo. ¿Qué es T-7?", B: "T-7. Ya está escrito. ¿Y qué es T-7?", C: "T-7. Anotado en la mano. ¿Qué significa?" },
            reply: { A: "La señora sonríe. «Una puerta en el mercado. Me llamo Dolores. Esta llave la abre.»", B: "La señora sonríe por primera vez. «Una puerta al fondo del callejón del mercado. Me llamo Dolores. Esta llave la abre.»", C: "La señora sonríe. «Una puerta al fondo del callejón del mercado. Soy Dolores. Esta llave es la suya.»" },
            mood: "smile", next: "lapiz-dictado",
          },
          {
            id: "mapa",
            say: { A: "Mejor dibujo un mapa. ¿Dónde está esa puerta?", B: "Mejor le dibujo un mapa. ¿Dónde está esa puerta?", C: "Prefiero un mapa. ¿Dónde está exactamente esa puerta?" },
            reply: { A: "La señora señala al oeste. «El mercado. El callejón del fondo. La última puerta. Me llamo Dolores.»", B: "La señora señala hacia el oeste. «El mercado de noche. El callejón del fondo. La última puerta a la derecha. Me llamo Dolores.»", C: "La señora apunta al oeste. «El mercado nocturno, el callejón del fondo, la última puerta a la derecha. Soy Dolores.»" },
            mood: "smile", next: "lapiz-dictado",
          },
          {
            id: "no",
            say: { A: "No escribo nada. No la conozco.", B: "No escribo nada en mi mano. No la conozco.", C: "No pienso escribirme nada. No sé quién es usted." },
            reply: { A: "La señora guarda la llave. «Lástima. Tenía usted cara de buena letra.» Se va.", B: "La señora guarda la llave. «Lástima. Tenía usted cara de tener buena letra.» Y se aleja.", C: "La señora guarda la llave. «Una pena. Tenía usted cara de buena caligrafía.» Y se retira." },
            mood: "sad", end: "rechazo",
          },
        ],
      },
      "lapiz-dictado": {
        who: "dolores", mood: "neutral",
        line: {
          A: "Dolores te da la llave y un papel del hotel. «Escriba una nota para quien abra la puerta. Yo dicto. Usted firma por mí.»",
          B: "Dolores te entrega la llave y un papel con el membrete del hotel. «Escriba una nota para la persona que abra esa puerta. Yo dicto y usted firma por mí; mi mano ya no obedece.»",
          C: "Dolores te entrega la llave y una cuartilla con membrete del Imperial. «Escriba una nota para quien abra esa puerta. Yo dicto; usted firma por mí, que mi pulso ya no es de fiar.»",
        },
        options: [
          {
            id: "dictar",
            say: { A: "Dicte. Escribo.", B: "Dicte, que yo escribo.", C: "Dicte; yo me encargo de la letra." },
            reply: { A: "Dolores dicta: «Perdón por los años. La llave siempre fue tuya. D.» Firmas una D.", B: "Dolores dicta despacio: «Perdón por tantos años. La llave siempre fue tuya. D.» Firmas una D temblorosa por ella.", C: "Dolores dicta: «Perdón por los años perdidos. La llave siempre fue tuya. D.» Firmas una D en su nombre." },
            mood: "sad", end: "lapiz-nota",
          },
          {
            id: "quien",
            say: { A: "¿Quién abre esa puerta? ¿Para quién es la nota?", B: "¿Y quién va a abrir esa puerta? ¿Para quién es la nota?", C: "¿Quién abre esa puerta? ¿A quién va dirigida la nota?" },
            reply: { A: "Dolores mira la fuente. «Mi hija. No hablamos desde hace treinta años. Escriba solo: perdón.»", B: "Dolores mira hacia la fuente. «Mi hija. Treinta años sin hablarnos. Escriba solo una palabra: perdón.»", C: "Dolores mira la fuente un instante. «Mi hija. Treinta años de silencio. Escriba una sola palabra: perdón.»" },
            mood: "sad", end: "lapiz-nota",
          },
          {
            id: "mapa",
            say: { A: "Mejor dibujo el camino en el papel. Para no perderme.", B: "Mejor le dibujo el camino en el papel, para no perderme.", C: "Prefiero dibujar el camino en el papel; así no me pierdo." },
            reply: { A: "Dolores asiente. «Mercado, callejón, última puerta. Dibuje bien. La llave es paciente, yo no.»", B: "Dolores asiente. «Mercado, callejón del fondo, última puerta. Dibújelo bien. La llave es paciente; yo, cada vez menos.»", C: "Dolores asiente. «Mercado, callejón del fondo, última puerta. Dibújelo con cuidado: la llave tiene paciencia; yo, ya no.»" },
            mood: "neutral", end: "lapiz-mapa",
          },
        ],
      },
      "libro-inicio": {
        who: "dolores", mood: "surprised",
        line: {
          A: "Una señora mayor sale de detrás de un árbol con una llave. Ve tu libro. «¿Un libro a estas horas? Mi marido leía ese libro. Ábralo por la página cuarenta.»",
          B: "Una señora mayor, con sombrero y abrigo largo, aparece entre los tilos con una llave antigua. Ve tu libro y se queda muy quieta. «¿Un libro en la calle a estas horas? Mi marido leía ese mismo libro. Ábralo por la página cuarenta.»",
          C: "Entre los tilos surge una señora de abrigo largo y sombrero con una llave antigua. Ve tu libro y se detiene en seco. «¿Un libro en plena calle a medianoche? Mi marido leía exactamente ese. Ábralo por la página cuarenta.»",
        },
        options: [
          {
            id: "abrir",
            say: { A: "¿La cuarenta? A ver… Aquí está. ¿Y ahora?", B: "¿La página cuarenta? A ver… Aquí está. ¿Y ahora qué?", C: "¿La cuarenta? Veamos… Aquí la tengo. ¿Y ahora?" },
            reply: { A: "La señora mete la llave entre las páginas. «Así no se pierde. Me llamo Dolores. Esa página era su favorita.»", B: "La señora desliza la llave entre las páginas. «Así no se pierde. Me llamo Dolores. Esa página era la favorita de mi marido.»", C: "La señora introduce la llave entre las páginas. «Así no se extravía. Soy Dolores. Esa página era la preferida de mi marido.»" },
            mood: "smile", next: "libro-marido",
          },
          {
            id: "marido",
            say: { A: "¿Su marido? ¿Dónde está?", B: "¿Su marido? ¿Y dónde está él ahora?", C: "¿Su marido? ¿Dónde está él esta noche?" },
            reply: { A: "La señora mira la fuente. «Murió hace diez años. Me llamo Dolores. Esta llave era suya.»", B: "La señora mira hacia la fuente. «Murió hace diez años. Me llamo Dolores. Esta llave era suya, y nunca supe qué abría.»", C: "La señora mira la fuente. «Murió hace diez años. Soy Dolores. La llave era suya; nunca llegué a saber qué abría.»" },
            mood: "sad", next: "libro-marido",
          },
          {
            id: "no",
            say: { A: "No abro nada. No la conozco. Buenas noches.", B: "No voy a abrir nada. No la conozco. Buenas noches.", C: "No abriré nada. No sé quién es usted. Buenas noches." },
            reply: { A: "La señora guarda la llave. «Él habría abierto. Buenas noches.» Se va.", B: "La señora guarda la llave en el abrigo. «Él lo habría abierto sin preguntar. Buenas noches.» Y se aleja.", C: "La señora guarda la llave. «Él lo habría abierto sin dudar. Buenas noches.» Y se retira entre los tilos." },
            mood: "sad", end: "rechazo",
          },
        ],
      },
      "libro-marido": {
        who: "dolores", mood: "sad",
        line: {
          A: "Dolores toca la portada del libro. «Él leía en esa fuente. Tenía esta llave y nunca me dijo qué abría. Está en el mercado, al fondo del callejón. ¿Usted va?»",
          B: "Dolores acaricia la portada del libro. «Él leía en esa fuente cada noche. Guardaba esta llave y nunca me dijo qué abría. Es una puerta del mercado, al fondo del callejón. ¿Iría usted?»",
          C: "Dolores roza la portada con un dedo enguantado. «Él leía en esa fuente cada noche. Guardó esta llave toda la vida y jamás me dijo qué abría. Es una puerta del mercado, al fondo del callejón. ¿Iría usted?»",
        },
        options: [
          {
            id: "voy",
            say: { A: "Voy. Con la llave en el libro. Y le cuento qué abre.", B: "Voy. Con la llave dentro del libro. Y le cuento qué abre.", C: "Iré. Con la llave dentro del libro. Y volveré a contarle qué abre." },
            reply: { A: "Dolores sonríe. «Gracias. Él habría elegido a alguien con un libro. Usted sirve.»", B: "Dolores sonríe con los ojos húmedos. «Gracias. Él habría elegido a alguien con un libro en la mano. Usted servirá.»", C: "Dolores sonríe, los ojos brillantes. «Gracias. Él habría escogido a alguien con un libro. Usted servirá.»" },
            mood: "smile", end: "libro-llave",
          },
          {
            id: "leer",
            say: { A: "Le leo la página cuarenta. Aquí, ahora.", B: "Le leo la página cuarenta. Aquí mismo, ahora.", C: "Le leo la página cuarenta, aquí y ahora." },
            reply: { A: "Lees. Dolores cierra los ojos. Al terminar, te deja la llave en el libro. «Vaya usted. Yo ya oí lo que quería.»", B: "Lees despacio. Dolores cierra los ojos bajo el sombrero. Al terminar, deja la llave dentro del libro. «Vaya usted al mercado. Yo ya he oído lo que necesitaba.»", C: "Lees con calma. Dolores cierra los ojos bajo el ala del sombrero. Al acabar, deja la llave entre las páginas. «Vaya usted al mercado. Yo ya he oído lo que quería oír.»" },
            mood: "love", end: "libro-pagina",
          },
          {
            id: "regalar",
            say: { A: "Quédese el libro. Y la llave. Son suyos.", B: "Quédese con el libro. Y con la llave. Son suyos.", C: "Quédese el libro, y la llave con él. Le pertenecen." },
            reply: { A: "Dolores abraza el libro. «No. El libro sí. La llave, no. Vaya al mercado.» Te devuelve la llave.", B: "Dolores abraza el libro contra el abrigo. «El libro sí. La llave, no. Esa tiene que viajar. Vaya al mercado.» Te devuelve la llave.", C: "Dolores estrecha el libro contra el pecho. «El libro, sí. La llave, no: esa debe viajar. Vaya al mercado.» Te devuelve la llave." },
            mood: "love", end: "libro-llave",
          },
        ],
      },
      "corazon-inicio": {
        who: "dolores", mood: "love",
        line: {
          A: "Una señora mayor sale de detrás de un árbol con una llave. Ve el corazón y se le ablanda la cara. «Ay. Usted tiene lo que tenía él. Siéntese conmigo. Le cuento una historia.»",
          B: "Una señora mayor, con sombrero y abrigo largo, aparece entre los tilos con una llave antigua. Ve el corazón y su cara severa se ablanda de golpe. «Ay… Usted tiene lo mismo que tenía él. Siéntese conmigo un momento. Le voy a contar una historia.»",
          C: "Entre los tilos surge una señora de abrigo largo y sombrero con una llave antigua. Ve el corazón y la severidad se le cae del rostro. «Ay… Usted tiene exactamente lo que tenía él. Siéntese conmigo. Le debo una historia.»",
        },
        options: [
          {
            id: "sentarse",
            say: { A: "Claro. ¿Quién era él?", B: "Claro que sí. ¿Quién era él?", C: "Con mucho gusto. ¿Quién era él?" },
            reply: { A: "La señora se sienta en la fuente. «Mi marido. Me llamo Dolores. Él me devolvió una llave hace cincuenta años. Así nos conocimos.»", B: "La señora se sienta en el borde de la fuente. «Mi marido. Me llamo Dolores. Hace cincuenta años me devolvió una llave perdida, y así empezó todo.»", C: "La señora toma asiento en el borde de la fuente. «Mi marido. Soy Dolores. Hace cincuenta años me devolvió una llave perdida; así empezó todo.»" },
            mood: "love", next: "corazon-marido",
          },
          {
            id: "llave",
            say: { A: "¿Y esa llave? ¿Es de él?", B: "¿Y esa llave que lleva? ¿Era de él?", C: "¿Y esa llave que sostiene? ¿Era suya, de él?" },
            reply: { A: "La señora mira la llave. «Sí. Me llamo Dolores. Él murió hace diez años y nunca supe qué abría.»", B: "La señora mira la llave en su guante. «Sí. Me llamo Dolores. Él murió hace diez años y nunca llegué a saber qué abría.»", C: "La señora contempla la llave. «Sí. Soy Dolores. Él murió hace diez años y jamás supe qué abría.»" },
            mood: "sad", next: "corazon-marido",
          },
          {
            id: "cansada",
            say: { A: "Usted parece cansada. ¿La acompaño a casa?", B: "La veo cansada. ¿Quiere que la acompañe a casa?", C: "Parece agotada. ¿Me permite acompañarla a casa?" },
            reply: { A: "Dolores te toma del brazo. «Cansada de esperar. Me llamo Dolores. Primero, la historia. Después, la llave.»", B: "Dolores te toma del brazo con cariño. «Cansada de esperar, más bien. Me llamo Dolores. Primero la historia; luego, la llave.»", C: "Dolores se cuelga de tu brazo con ternura. «Cansada de esperar, sobre todo. Soy Dolores. Primero la historia; después, la llave.»" },
            mood: "love", next: "corazon-marido",
          },
        ],
      },
      "corazon-marido": {
        who: "dolores", mood: "love",
        line: {
          A: "Dolores te toma la mano. «Él tenía esta llave. Es de una puerta del mercado, al fondo del callejón. Nunca fui. Tengo miedo de lo que hay. ¿Usted va por mí?»",
          B: "Dolores te toma la mano entre sus guantes. «Él guardaba esta llave. Es de una puerta del mercado, al fondo del callejón. Nunca me atreví a ir. Me da miedo lo que pueda haber. ¿Iría usted por mí?»",
          C: "Dolores te toma la mano entre sus guantes. «Él guardó esta llave toda la vida. Abre una puerta del mercado, al fondo del callejón. Nunca me atreví a ir; me asusta lo que pueda haber. ¿Iría usted por mí?»",
        },
        options: [
          {
            id: "voy",
            say: { A: "Voy. Y vuelvo a contarle. Prometido.", B: "Voy. Y vuelvo a contárselo todo. Se lo prometo.", C: "Iré. Y volveré a contárselo todo. Tiene mi palabra." },
            reply: { A: "Dolores te besa en la frente. «Él también prometía así.» Te da la llave.", B: "Dolores te besa en la frente, despacio. «Él también prometía así, con esa cara.» Te pone la llave en la mano.", C: "Dolores te besa en la frente con ternura antigua. «Él prometía igual, con esa misma cara.» Te entrega la llave." },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "juntos",
            say: { A: "Vamos juntos. Yo la acompaño al mercado.", B: "¿Y si vamos juntos? Yo la acompaño al mercado.", C: "¿Y si vamos los dos? La acompaño al mercado." },
            reply: { A: "Dolores niega con la cabeza. «Mis rodillas no. Pero gracias.» Te abraza. «Vaya usted.»", B: "Dolores niega con la cabeza, sonriendo. «Mis rodillas no llegan tan lejos. Pero gracias.» Te abraza. «Vaya usted por mí.»", C: "Dolores niega con una sonrisa. «Mis rodillas no están para callejones. Pero gracias.» Te abraza. «Vaya usted por mí.»" },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "miedo",
            say: { A: "¿Miedo de qué? Él la quería. No hay nada malo.", B: "¿Miedo de qué, Dolores? Él la quería. No puede haber nada malo.", C: "¿Miedo de qué, Dolores? Él la quería; detrás de esa puerta no puede haber nada malo." },
            reply: { A: "Dolores llora un poco. «Miedo de que haya otra mujer. O de que haya solo polvo.» Te da la llave.", B: "Dolores llora en silencio. «Miedo de que haya otra mujer. O miedo de que solo haya polvo.» Te da la llave.", C: "Dolores llora sin ruido. «Miedo de encontrar a otra mujer. O de encontrar solo polvo.» Te entrega la llave." },
            mood: "sad", end: "corazon-beso",
          },
        ],
      },
    },
    ends: {
      llave: { text: { A: "Tienes la llave T-7. Dolores se va entre los árboles. Ahora tienes que ir al mercado.", B: "Guardas la llave T-7. Cuando levantas la vista, Dolores ya no está. Te espera el callejón del mercado.", C: "Guardas la llave T-7. Al levantar la vista, Dolores se ha desvanecido entre los tilos. El callejón del mercado te espera." }, change: "se-va", flag: "llave", recap: "Aceptaste la llave T-7 de Dolores para llevarla al mercado." },
      rechazo: { text: { A: "Dolores se va despacio. Está un poco triste.", B: "Dolores se aleja despacio, con la llave en el bolsillo del abrigo.", C: "Dolores se aleja despacio. Por un momento te parece que la llave brilla en su bolsillo." }, change: "triste", recap: "Rechazaste la llave de Dolores." },
      misterio: { text: { A: "Dolores desaparece entre los árboles. No sabes nada de la llave.", B: "Dolores desaparece entre los tilos. Te quedas con la duda de qué abría esa llave.", C: "Dolores se esfuma. Te quedas con la sensación de haber dejado pasar una historia." }, change: "se-va", recap: "Dolores se fue con su llave y su misterio." },
      policia: { text: { A: "Llega la policía. Dolores dice: «No pasa nada». Y se va.", B: "Llega la policía. Mientras explicas el malentendido, Dolores desaparece sin decir nada.", C: "Llega la policía. Cuando terminas de explicarte, buscas a Dolores: no queda ni rastro de ella." }, change: "policia", recap: "Un malentendido con Dolores terminó con la policía." },
      "cuchillo-policia": { text: { A: "Llega la policía. Dolores explica todo con calma. Después desaparece entre los árboles.", B: "Llega la policía. Dolores lo explica todo con una calma inquietante y, mientras hablas con los agentes, desaparece entre los tilos.", C: "Llega un coche patrulla. Dolores lo explica todo con calma glacial y, mientras te explicas, se desvanece entre los tilos." }, change: "policia", recap: "Tu cuchillo asustó a Dolores y el portero llamó a la policía." },
      "cuchillo-llave": { text: { A: "Tienes la llave T-7. El cuchillo está guardado. Dolores se va entre los árboles.", B: "Guardas la llave T-7 en un bolsillo y el cuchillo en otro. Cuando levantas la vista, Dolores ya no está.", C: "Guardas la llave T-7 en un bolsillo y el cuchillo en el otro. Al alzar la vista, Dolores se ha esfumado entre los tilos." }, change: "se-va", flag: "llave", recap: "Dolores te dio la llave T-7 a cambio de guardar el cuchillo." },
      "pistola-patrulla": { text: { A: "Dos policías bajan del coche. Dolores les dice: «Ese». Y se va.", B: "Dos policías bajan del coche. Dolores los señala hacia ti con la barbilla: «Ese». Y se va tranquilamente.", C: "Dos agentes bajan del coche patrulla. Dolores te señala con la barbilla: «Ese». Y se retira sin prisa." }, change: "policia", recap: "Dolores vio tu pistola y ya había llamado a la policía." },
      "pistola-llave": { text: { A: "Tienes la llave T-7. La pistola, guardada. Dolores desaparece entre los árboles.", B: "Guardas la llave T-7. La pistola se queda en la cintura, pero tapada. Dolores desaparece entre los tilos.", C: "Guardas la llave T-7 y la pistola queda tapada y olvidada. Dolores se desvanece entre los tilos." }, change: "se-va", flag: "llave", recap: "Dolores te confió la llave T-7 a pesar de la pistola." },
      "pistola-desaparece": { text: { A: "Dolores desaparece entre los árboles con su llave. Guardas la pistola. Tarde.", B: "Dolores desaparece entre los tilos con su llave. Guardas la pistola, demasiado tarde.", C: "Dolores se esfuma entre los tilos con su llave. Guardas la pistola; ya es tarde para eso." }, change: "se-va", recap: "No guardaste la pistola y Dolores se fue con su llave." },
      "granada-helicoptero": { text: { A: "El helicóptero ilumina la plaza. Dolores no está. Solo queda su sombrero junto a la fuente.", B: "El helicóptero ilumina toda la plaza. Dolores ya no está. Junto a la fuente queda su sombrero.", C: "El foco del helicóptero barre la plaza. De Dolores no queda rastro, salvo el sombrero junto a la fuente." }, change: "helicoptero", recap: "Tu granada hizo correr a Dolores y trajo un helicóptero." },
      "granada-llave": { text: { A: "Tienes la llave T-7. Dolores grita desde la fuente: «¡Al mercado! ¡Y lejos de mí!»", B: "Guardas la llave T-7. Dolores grita desde la fuente: «¡Al mercado, al fondo del callejón! ¡Y lejos de mí!»", C: "Guardas la llave T-7. Desde la fuente, Dolores grita: «¡Al mercado, al fondo del callejón! ¡Y cuanto más lejos de mí, mejor!»" }, change: "se-va", flag: "llave", recap: "Dolores te lanzó la llave T-7 desde detrás de la fuente." },
      "gas-retirada": { text: { A: "Dolores se va entre los árboles con su gas y su llave. Tú te quedas con el tuyo.", B: "Dolores se aleja entre los tilos con su gas de 1975 y su llave. Tú te quedas con tu gas y sin historia.", C: "Dolores se retira entre los tilos con su gas de 1975 y su llave. Tú te quedas con el tuyo y sin historia." }, change: "se-va", recap: "Desconfiaste de Dolores y se fue con su llave." },
      "gas-llave": { text: { A: "Tienes la llave T-7 y el gas a mano. Dolores desaparece entre los árboles.", B: "Guardas la llave T-7 con el gas a mano. Dolores desaparece entre los tilos, satisfecha.", C: "Guardas la llave T-7 y dejas el gas a mano. Dolores se desvanece entre los tilos, satisfecha." }, change: "se-va", flag: "llave", recap: "Dolores te confió la llave T-7 porque llevas gas pimienta." },
      "gas-consejo": { text: { A: "Dolores se va despacio. Tú caminas despacio también. Y miras a los ojos.", B: "Dolores se aleja despacio entre los tilos. Tú sigues tu camino despacio, mirando a los ojos.", C: "Dolores se aleja sin prisa entre los tilos. Tú sigues tu camino, despacio y mirando a los ojos." }, change: "sigue", recap: "Dolores te dio consejos de supervivencia nocturna." },
      "lapiz-nota": { text: { A: "Tienes la llave, la nota y T-7 en la mano. Dolores se va entre los árboles.", B: "Guardas la llave y la nota. T-7 sigue escrito en tu mano. Dolores desaparece entre los tilos.", C: "Guardas la llave y la nota; T-7 sigue en tu mano. Dolores se desvanece entre los tilos." }, change: "se-va", flag: "llave", recap: "Escribiste la nota de Dolores y te llevaste la llave T-7." },
      "lapiz-mapa": { text: { A: "Dibujas el camino. Dolores lo mira. «Bien.» Te da la llave y se va.", B: "Dibujas el camino al callejón. Dolores lo aprueba. «Bien.» Te da la llave y se aleja.", C: "Dibujas el camino al callejón. Dolores lo examina. «Bien.» Te entrega la llave y se retira." }, change: "se-va", flag: "llave", recap: "Dibujaste el camino al T-7 y Dolores te dio la llave." },
      "libro-llave": { text: { A: "La llave está en la página cuarenta. Dolores se va. Tú vas al mercado.", B: "La llave viaja en la página cuarenta de tu libro. Dolores desaparece entre los tilos. Te espera el mercado.", C: "La llave viaja en la página cuarenta. Dolores se desvanece entre los tilos y el mercado te espera." }, change: "se-va", flag: "llave", recap: "Dolores guardó la llave T-7 en tu libro." },
      "libro-pagina": { text: { A: "Dolores se queda en la fuente con los ojos cerrados. Tú te vas con el libro y la llave.", B: "Dolores se queda en la fuente, con los ojos cerrados, oyendo todavía la página. Te vas con el libro y la llave.", C: "Dolores permanece en la fuente, ojos cerrados, con la página aún en el aire. Te vas con el libro y la llave." }, change: "se-sienta", flag: "llave", recap: "Le leíste a Dolores la página favorita de su marido." },
      "corazon-beso": { text: { A: "Dolores te besa en la frente. Se va despacio. Tienes su llave.", B: "Dolores te besa en la frente y se aleja despacio entre los tilos. Tienes su llave y su historia.", C: "Dolores te besa en la frente y se aleja despacio entre los tilos. Llevas su llave y su historia." }, change: "beso", flag: "llave", recap: "Dolores te besó en la frente y te confió la llave de su marido." },
      "corazon-abrazo": { text: { A: "Dolores te abraza. Te da la llave. Se queda en la fuente, tranquila.", B: "Dolores te abraza y te pone la llave en la mano. Se queda en la fuente, en paz.", C: "Dolores te abraza y te entrega la llave. Se queda en la fuente, por fin en paz." }, change: "abraza", flag: "llave", recap: "Dolores te abrazó y te mandó al mercado con su llave." },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Tienes miedo de la gente mayor?", B: "¿Cómo reaccionas cuando alguien mayor te regaña?", C: "¿Qué autoridad tiene la calma de una persona frente a una amenaza?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué cosas te aburren?", B: "¿Qué cosas ya no te asustan como antes?", C: "¿Es la honestidad compatible con la desconfianza?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Corres rápido cuando tienes miedo?", B: "¿Qué cosa absurda hiciste por miedo?", C: "¿Qué revela el pánico sobre una persona que siempre parece serena?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Qué llevas para tu seguridad?", B: "¿Desconfías de la gente que sonríe mucho?", C: "¿Por qué la gente de barrios elegantes a veces desconfía más que nadie?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes cosas en la mano para no olvidar?", B: "¿Alguna vez escribiste una nota para alguien de parte de otra persona?", C: "¿Qué palabra escribirías para alguien con quien llevas años sin hablar?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Qué libro leía alguien de tu familia?", B: "¿Qué libro te recuerda a una persona que ya no está?", C: "¿Qué secretos guardan los libros de las personas que amamos?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Conoces una historia de amor bonita?", B: "¿Cómo se conocieron tus abuelos o tus padres?", C: "¿Qué preferirías: conocer un secreto doloroso o vivir con la duda?" } },
    },
    speak: {
      A1: "¿Cuántas llaves tienes?",
      A2: "¿Qué objeto importante perdiste alguna vez?",
      B1: "¿Qué haces cuando encuentras algo que no es tuyo?",
      B2: "¿En qué situaciones confiarías en un desconocido?",
      C1: "¿Dónde pones el límite entre la prudencia y la desconfianza?",
      C2: "¿Qué nos atrae de los misterios que nunca llegamos a resolver?",
    },
  },

  // ─────────────────────────────────────────── RINCONES
  {
    id: "alto-estatua",
    kind: "rincon",
    district: "alto",
    title: "La poeta de la plaza",
    verb: "LEER",
    goal: "Leer una inscripción breve, reaccionar con opiniones y preguntar por la historia de un lugar.",
    cast: [
      {
        id: "fermin", name: "Fermín", role: "Barrendero nocturno",
        age: "old", body: "m", build: "heavy", height: 1.68,
        hair: "short", hairColor: "#bfbab2", skin: "#c9a27e",
        top: "uniform", topColor: "#e86f1c", bottom: "pants", bottomColor: "#2a4a3a",
        extras: ["mustache"], pose: "sweep", props: ["statue", "broom-cart"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "fermin", mood: "neutral",
        line: {
          A: "Hay una estatua de bronce. Una placa dice: «Amparo Ruiz, poeta. Escribía de noche. La noche no es oscura: es una página.» Un barrendero te mira.",
          B: "Una estatua de bronce de una mujer con una pluma. La placa dice: «Amparo Ruiz (1890-1961), poeta. La noche no es oscura: es una página.» Un barrendero se apoya en su escoba.",
          C: "Bajo un tilo, una poeta de bronce mira al cielo con la pluma en alto. La placa reza: «Amparo Ruiz. La noche no es oscura: es una página.» Un barrendero deja de barrer para observarte.",
        },
        options: [
          {
            id: "leer",
            say: { A: "«La noche es una página.» ¡Qué bonito!", B: "«La noche no es oscura: es una página.» Me encanta esa frase.", C: "«La noche no es oscura: es una página.» Dicho así, dan ganas de escribir algo." },
            reply: { A: "El barrendero sonríe. «A mí también me gusta. Soy Fermín.»", B: "El barrendero asiente. «Es mi frase favorita. Me llamo Fermín. Limpio esta plaza hace treinta años.»", C: "«Ese es el efecto», dice el barrendero. «Fermín, para servirle. Treinta años barriendo alrededor de Amparo.»" },
            mood: "smile", end: "pagina",
          },
          {
            id: "quien",
            say: { A: "¿Quién es Amparo Ruiz?", B: "¿Usted sabe quién era Amparo Ruiz?", C: "Disculpe, ¿sabe algo de esta Amparo Ruiz?" },
            reply: { A: "«Una poeta. Vivía en ese balcón. Escribía toda la noche.»", B: "El barrendero señala un balcón. «Vivía ahí. Escribía de noche porque de día trabajaba en una fábrica.»", C: "El barrendero señala un balcón. «Obrera de día, poeta de noche. Como yo, pero con mejor letra.»" },
            mood: "smile", end: "pagina",
          },
          {
            id: "en-voz-alta",
            say: { A: "Voy a leer la placa en voz alta.", B: "¿Le importa si leo la placa en voz alta?", C: "Permítame leerla en voz alta. Las palabras de noche suenan distinto." },
            reply: { A: "Lees la frase. Una luz se enciende en el balcón de arriba.", B: "Lees la frase despacio. De repente, se enciende la luz del balcón de arriba. El barrendero se ríe.", C: "Lees la frase y, como si la hubieran llamado, se enciende la luz del balcón de arriba. El barrendero se santigua, divertido." },
            mood: "surprised", end: "luz",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted mira la estatua con cariño. ¿Le gusta la poesía?", B: "Mira usted la estatua con mucho cariño. ¿Le gusta la poesía?", C: "Barre usted alrededor de ella con mucha delicadeza. ¿Es lector de poesía?" },
            reply: { A: "El barrendero se pone rojo. «Me llamo Fermín. Yo también escribo poemas. Escuche…»", B: "El barrendero se pone colorado. «Soy Fermín. Yo también escribo, ¿sabe? Pequeños poemas. Escuche este…»", C: "El barrendero se sonroja. «Fermín. Escribo versos en las pausas. Nunca se los he leído a nadie. Escuche…»" },
            mood: "love", end: "poema",
          },
          lapiz: {
            act: { A: "Sacas el lápiz y un papel.", B: "Sacas el lápiz y escribes una frase en un papel.", C: "Sacas el lápiz y escribes un verso improvisado." },
            say: { A: "Voy a dejar una frase para Amparo.", B: "Le dejo una frase a Amparo, a sus pies.", C: "Le dejo un verso a Amparo. Malo, pero sincero." },
            reply: { A: "El barrendero sonríe. «Mucha gente deja papeles. Yo no los barro nunca.»", B: "El barrendero sonríe. «Mucha gente le deja papelitos. Yo nunca los barro. Soy Fermín.»", C: "«Los papeles de Amparo no se barren», dice el barrendero. «Es la única norma que me salto. Soy Fermín.»" },
            mood: "smile", end: "pagina",
          },
          libro: {
            act: { A: "Dejas tu libro a los pies de la estatua.", B: "Dejas tu libro a los pies de la estatua, como una ofrenda.", C: "Depositas tu libro a los pies de la poeta, a modo de homenaje." },
            say: { A: "Un libro para una poeta.", B: "Un libro para Amparo. Seguro que le gusta.", C: "Un pequeño tributo de un lector a una autora." },
            reply: { A: "El barrendero se ríe. «¡Qué bonito! Mañana lo lee alguien.»", B: "El barrendero se ríe. «Mañana algún madrugador se lo lleva. Así funciona aquí.»", C: "«Ese libro no llega al amanecer», dice el barrendero, encantado. «Amparo siempre lo comparte todo.»" },
            mood: "smile", end: "pagina",
          },
        },
      },
      "corazon-inicio": {
        who: "fermin", mood: "love",
        line: {
          A: "Hay una estatua de bronce de una poeta. Un barrendero te mira, ve el corazón y sonríe con los ojos brillantes. «Usted tiene cara de leer poesía. Yo escribo. Nunca se lo dije a nadie.»",
          B: "Una estatua de bronce de una poeta con la pluma en alto. El barrendero te mira, ve el corazón y se le ablanda la cara. «Tiene usted cara de leer poesía. Yo también escribo, ¿sabe? Nunca se lo he dicho a nadie.»",
          C: "Bajo un tilo, una poeta de bronce mira al cielo. El barrendero deja la escoba, ve el corazón y se le ilumina el gesto. «Tiene usted cara de lector de poesía. Yo escribo versos en las pausas. Jamás se lo he confesado a nadie.»",
        },
        options: [
          {
            id: "leer",
            say: { A: "¿Me lee uno? Por favor.", B: "¿Me lee uno? Me encantaría.", C: "¿Me leería uno? Sería un honor." },
            reply: { A: "El barrendero se pone rojo. «Me llamo Fermín. Bueno… uno corto.» Saca un papel del bolsillo.", B: "El barrendero se pone colorado. «Me llamo Fermín. Está bien… uno corto.» Saca un papel doblado del bolsillo.", C: "El barrendero enrojece. «Fermín, para servirle. De acuerdo… uno breve.» Saca del bolsillo un papel muy doblado." },
            mood: "love", next: "corazon-poema",
          },
          {
            id: "amparo",
            say: { A: "¿Por eso cuida tanto a la poeta?", B: "¿Por eso cuida tanto la estatua de la poeta?", C: "¿Por eso barre alrededor de la poeta con tanto cuidado?" },
            reply: { A: "El barrendero sonríe. «Amparo me enseñó. Bueno, su placa. Me llamo Fermín. Le leo algo.»", B: "El barrendero sonríe, tímido. «Amparo me enseñó a escribir. Bueno, su placa. Soy Fermín. Le leo algo, si quiere.»", C: "El barrendero sonríe con timidez. «Amparo me enseñó, o su placa, más bien. Soy Fermín. Le leo algo, si me lo permite.»" },
            mood: "love", next: "corazon-poema",
          },
        ],
      },
      "corazon-poema": {
        who: "fermin", mood: "smile",
        line: {
          A: "Fermín lee bajito: «La escoba sueña con la luna. La luna barre el cielo.» Te mira. «¿Es malo? Diga la verdad.»",
          B: "Fermín lee en voz baja: «La escoba sueña con la luna. La luna, por su parte, barre el cielo cada noche.» Te mira con miedo. «¿Es malo? Dígame la verdad.»",
          C: "Fermín lee casi en susurros: «La escoba sueña con la luna; la luna, en cambio, barre el cielo sin que nadie se lo pida.» Te mira, expuesto. «¿Es malo? Sea sincero.»",
        },
        options: [
          {
            id: "bueno",
            say: { A: "Es muy bonito, Fermín. De verdad.", B: "Es precioso, Fermín. De verdad que sí.", C: "Es hermoso, Fermín. Y lo digo con total sinceridad." },
            reply: { A: "Fermín sonríe. Guarda el papel. «Gracias. Mañana escribo otro.»", B: "Fermín sonríe de oreja a oreja y guarda el papel como un tesoro. «Gracias. Mañana escribo otro. Para Amparo.»", C: "Fermín sonríe y guarda el papel con cuidado. «Gracias. Mañana escribo otro, para Amparo.»" },
            mood: "love", end: "corazon-recita",
          },
          {
            id: "alto",
            say: { A: "Léalo en voz alta. Para Amparo.", B: "Léalo en voz alta, para Amparo.", C: "Léaselo en voz alta a Amparo; ella lo entendería." },
            reply: { A: "Fermín lo lee a la estatua. Se enciende la luz del balcón de arriba. Fermín se ríe, asustado.", B: "Fermín se lo lee a la estatua, en voz alta. De pronto se enciende la luz del balcón de arriba. Fermín se ríe, entre asustado y feliz.", C: "Fermín se lo recita a la estatua, en voz alta. Al terminar, se enciende la luz del balcón de arriba. Fermín ríe, asustado y feliz a partes iguales." },
            mood: "surprised", end: "corazon-balcon",
          },
        ],
      },
      "cuchillo-inicio": {
        who: "fermin", mood: "scared",
        line: {
          A: "Hay una estatua de bronce de una poeta. Un barrendero te mira, ve tu cuchillo y levanta la escoba como una lanza. «¡Eh! ¿Qué hace con eso? ¡No se acerque a la poeta!»",
          B: "Una estatua de bronce de una poeta con la pluma en alto. El barrendero te mira, ve el cuchillo y levanta la escoba como una lanza. «¡Eh! ¿Qué hace usted con ese cuchillo? ¡No se acerque a la poeta ni a mí!»",
          C: "Bajo un tilo, una poeta de bronce. El barrendero repara en tu cuchillo y empuña la escoba como una lanza. «¡Eh! ¿Qué pretende con ese cuchillo? ¡Ni un paso hacia la poeta, ni hacia mí!»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Tranquilo. Lo guardo. Solo quería leer la placa.", B: "Tranquilo, lo guardo. Solo quería leer la placa.", C: "Calma, lo guardo. Solo pretendía leer la placa." },
            reply: { A: "El barrendero no baja la escoba. «¿La placa? Con cuchillo nadie lee. Guárdelo del todo.»", B: "El barrendero no baja la escoba. «¿La placa? Con un cuchillo en la mano no se lee nada. Guárdelo del todo.»", C: "El barrendero mantiene la escoba en alto. «¿La placa? Con un cuchillo no se lee nada. Guárdelo del todo, por favor.»" },
            mood: "worried", next: "cuchillo-escoba",
          },
          {
            id: "escoba",
            say: { A: "¿Una escoba contra un cuchillo? ¿Está loco?", B: "¿Una escoba contra un cuchillo? ¿Usted está loco?", C: "¿Una escoba contra un cuchillo? ¿Ha perdido el juicio?" },
            reply: { A: "El barrendero silba muy fuerte. El portero del hotel levanta el teléfono. «Treinta años aquí. Conozco a todos.»", B: "El barrendero suelta un silbido que cruza la plaza. El portero del hotel levanta el teléfono al instante. «Treinta años aquí. Conozco a todo el mundo.»", C: "El barrendero emite un silbido que atraviesa la plaza. El portero del hotel ya marca un número. «Treinta años aquí. Conozco a todo el barrio.»" },
            mood: "angry", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-escoba": {
        who: "fermin", mood: "worried",
        line: {
          A: "Fermín baja la escoba poco a poco. «Me llamo Fermín. Amparo escribía de noche. Usted lleva cuchillos de noche. ¿Qué es mejor?»",
          B: "Fermín baja la escoba poco a poco, sin soltarla. «Me llamo Fermín. Amparo escribía de noche. Usted pasea cuchillos de noche. ¿Cuál de los dos aprovecha mejor la noche?»",
          C: "Fermín baja la escoba despacio, sin soltarla. «Soy Fermín. Amparo escribía de noche; usted pasea con cuchillos. ¿Quién de los dos aprovecha mejor la página?»",
        },
        options: [
          {
            id: "amparo",
            say: { A: "Amparo, claro. Perdón por el susto, Fermín.", B: "Amparo, sin duda. Perdone el susto, Fermín.", C: "Amparo, evidentemente. Le pido perdón por el susto, Fermín." },
            reply: { A: "Fermín sonríe un poco. «Buena respuesta. Lea la placa, anda. Sin cuchillo.»", B: "Fermín sonríe apenas. «Buena respuesta. Lea la placa, anda. Y el cuchillo, en el bolsillo.»", C: "Fermín esboza una sonrisa. «Buena respuesta. Lea la placa, anda; el cuchillo, en el bolsillo.»" },
            mood: "smile", end: "cuchillo-paz",
          },
          {
            id: "corte",
            say: { A: "Hay papeles atados a la estatua. ¿Corto los hilos?", B: "Hay papeles atados a la estatua con hilos. ¿Quiere que los corte?", C: "Hay papeles atados a la estatua con hilo. ¿Quiere que los corte?" },
            reply: { A: "Fermín levanta la escoba otra vez. «¡Los papeles de Amparo no se tocan!» Silba. El portero llama.", B: "Fermín vuelve a levantar la escoba. «¡Los papeles de Amparo no se tocan!» Silba, y el portero del hotel ya está llamando.", C: "Fermín alza la escoba de nuevo. «¡Los papeles de Amparo no se tocan!» Silba y el portero del hotel marca sin dudar." },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "fermin", mood: "terror",
        line: {
          A: "Hay una estatua de bronce de una poeta. Un barrendero te mira, ve tu pistola y levanta las manos con la escoba. «No, por favor. Yo solo barro. No tengo nada.»",
          B: "Una estatua de bronce de una poeta con la pluma en alto. El barrendero ve la pistola en tu cintura y levanta las manos, escoba incluida. «No, por favor. Yo solo barro. No llevo nada encima.»",
          C: "Bajo un tilo, una poeta de bronce. El barrendero ve la pistola y alza las manos con la escoba en alto. «No, por favor. Yo solo barro. No llevo nada que valga la pena.»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Baje las manos. No quiero nada. ¿Quién es la poeta?", B: "Baje las manos, hombre. No quiero nada. ¿Quién es la poeta?", C: "Baje las manos, por favor. No quiero nada. ¿Quién es la poeta de la estatua?" },
            reply: { A: "El barrendero baja la escoba despacio. «Amparo Ruiz. Me llamo Fermín. ¿Por qué lleva un arma a una plaza con poeta?»", B: "El barrendero baja la escoba muy despacio. «Amparo Ruiz. Me llamo Fermín. ¿Y por qué trae usted un arma a una plaza con poeta?»", C: "El barrendero baja la escoba con cautela. «Amparo Ruiz. Soy Fermín. ¿Por qué trae usted un arma a una plaza con poeta?»" },
            mood: "scared", next: "pistola-placa",
          },
          {
            id: "seguridad",
            say: { A: "Es por seguridad. La noche es peligrosa.", B: "Es solo por seguridad. La noche es peligrosa.", C: "Es una medida de seguridad; la noche tiene sus riesgos." },
            reply: { A: "El barrendero silba. El portero del hotel levanta el teléfono. «Perdone. Treinta años aquí.»", B: "El barrendero silba fuerte. El portero del hotel levanta el teléfono. «Perdone, pero llevo treinta años aquí y esto no lo había visto.»", C: "El barrendero silba con fuerza. El portero del hotel marca de inmediato. «Perdone: treinta años aquí y nunca había visto esto.»" },
            mood: "worried", end: "pistola-patrulla",
          },
        ],
      },
      "pistola-placa": {
        who: "fermin", mood: "worried",
        line: {
          A: "Fermín señala la placa sin acercarse. «La noche no es oscura: es una página. Con una pistola, es otra cosa. Guárdela y le enseño el balcón de Amparo.»",
          B: "Fermín señala la placa desde lejos. «La noche no es oscura: es una página. Con una pistola es otra cosa, créame. Guárdela y le enseño el balcón donde escribía Amparo.»",
          C: "Fermín señala la placa sin acercarse ni un paso. «La noche no es oscura: es una página. Con una pistola, la página se mancha. Guárdela y le enseño el balcón de Amparo.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. Perdón. ¿Dónde está el balcón?", B: "La guardo. Perdone. ¿Cuál es el balcón?", C: "La guardo, con disculpas. ¿Cuál es el balcón de Amparo?" },
            reply: { A: "Fermín señala arriba. «Ese. Obrera de día, poeta de noche.» Vuelve a barrer, pero te mira.", B: "Fermín señala hacia arriba. «Ese. Obrera de día, poeta de noche.» Vuelve a barrer, sin perderte de vista.", C: "Fermín señala un balcón. «Ese. Obrera de día, poeta de noche.» Retoma la escoba, vigilándote de reojo." },
            mood: "neutral", end: "pistola-barrido",
          },
          {
            id: "no",
            say: { A: "No la guardo. Es mía. ¿Algún problema?", B: "No la guardo. Es mía. ¿Algún problema?", C: "No la guardo; es mía. ¿Supone eso un problema?" },
            reply: { A: "Fermín silba. El portero del hotel llama. «Problema, no. Policía, sí.»", B: "Fermín silba y el portero del hotel marca un número. «Problema, ninguno. Policía, toda.»", C: "Fermín silba y el portero del Imperial marca. «Problema, ninguno. Policía, toda la que haga falta.»" },
            mood: "angry", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "fermin", mood: "surprised",
        line: {
          A: "Hay una estatua de bronce de una poeta. Un barrendero ve tu granada. Primero se ríe. «¿Es arte moderno? ¿Para la plaza?» Luego deja de reír. «No. No es arte.»",
          B: "Una estatua de bronce de una poeta con la pluma en alto. El barrendero ve la granada en tu mano y se ríe. «¿Es arte moderno? ¿La van a poner junto a Amparo?» Luego deja de reírse. «No. Eso no es arte.»",
          C: "Bajo un tilo, una poeta de bronce. El barrendero repara en la granada y suelta una risa. «¿Arte moderno? ¿La instalan junto a Amparo?» La risa se le apaga. «No. Eso no es arte.»",
        },
        options: [
          {
            id: "arte",
            say: { A: "Sí, es arte. Se llama «Noche». ¿Le gusta?", B: "Sí, es arte. La obra se llama «Noche». ¿Le gusta?", C: "Sí, es arte. La pieza se titula «Noche». ¿Qué le parece?" },
            reply: { A: "El barrendero la mira con la escoba en alto. «¿Arte? Amparo también decía cosas raras. Pero no explotaban.»", B: "El barrendero la mira sin bajar la escoba. «¿Arte? Amparo también decía cosas raras, pero sus cosas no explotaban.»", C: "El barrendero la observa con la escoba en guardia. «¿Arte? Amparo también decía rarezas, pero las suyas no explotaban.»" },
            mood: "worried", next: "granada-plaza",
          },
          {
            id: "broma",
            say: { A: "Es una broma. Mire, la lanzo al aire.", B: "Es una broma, hombre. Mire, la lanzo al aire.", C: "Es una broma. Observe: la lanzo al aire." },
            reply: { A: "Fermín grita y se esconde detrás de la estatua. El portero del hotel grita también. Se oye un helicóptero.", B: "Fermín grita y se esconde detrás de Amparo. El portero del hotel grita por teléfono. A lo lejos, un helicóptero.", C: "Fermín grita y se parapeta tras Amparo. El portero del Imperial grita al teléfono. Un helicóptero despierta a lo lejos." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-plaza": {
        who: "fermin", mood: "worried",
        line: {
          A: "Fermín se pone delante de la estatua. «Me llamo Fermín. Si eso explota, Amparo se rompe. Guárdela o váyase. Elija.»",
          B: "Fermín se planta delante de la estatua con la escoba. «Me llamo Fermín. Si eso explota, Amparo se rompe en mil pedazos. Guárdela o váyase lejos. Elija.»",
          C: "Fermín se coloca delante de la estatua, escoba en ristre. «Soy Fermín. Si eso explota, Amparo salta en pedazos. Guárdela o aléjese. Usted decide.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. Perdón. Amparo está a salvo.", B: "La guardo. Perdone. Amparo está a salvo.", C: "La guardo. Disculpe. Amparo queda a salvo." },
            reply: { A: "Fermín respira. Toca la estatua. «Gracias. Ahora lea la placa. En voz alta.» Lees. Se enciende el balcón.", B: "Fermín respira y toca el bronce de Amparo. «Gracias. Ahora lea la placa, en voz alta.» Lees, y se enciende la luz del balcón de arriba.", C: "Fermín respira y acaricia el bronce. «Gracias. Ahora lea la placa, en voz alta.» Lees, y el balcón de arriba se ilumina." },
            mood: "surprised", end: "granada-arte",
          },
          {
            id: "no-se",
            say: { A: "No sé si explota. Nadie lo sabe.", B: "No sé si explota. Nadie quiere averiguarlo.", C: "No sé si explota. Nadie se ha atrevido a comprobarlo." },
            reply: { A: "Fermín silba muy fuerte. El portero llama. Un helicóptero aparece sobre la plaza.", B: "Fermín silba con todas sus fuerzas. El portero del hotel llama. Sobre la plaza aparece un helicóptero con un foco.", C: "Fermín silba con toda el alma. El portero del Imperial llama y un helicóptero asoma sobre la plaza, foco en marcha." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
    },
    ends: {
      "corazon-recita": { text: { A: "Fermín barre despacio. Dice versos en voz baja mientras trabaja.", B: "Fermín vuelve a barrer, despacio, recitando versos en voz baja mientras trabaja.", C: "Fermín retoma la escoba sin prisa, recitando versos en voz baja al compás del barrido." }, change: "sonrie", recap: "Fermín te leyó un poema suyo gracias a tu corazón." },
      "corazon-balcon": { text: { A: "La luz del balcón sigue encendida. Fermín mira arriba con el papel en la mano.", B: "El balcón de Amparo sigue iluminado. Fermín lo mira con el poema en la mano, sin palabras.", C: "El balcón de Amparo permanece encendido. Fermín lo contempla con el poema en la mano, mudo." }, change: "luz", recap: "Fermín le recitó su poema a la poeta y se encendió un balcón." },
      "cuchillo-policia": { text: { A: "Llega la policía. Fermín explica con la escoba en la mano. La poeta mira el cielo.", B: "Llega la policía. Fermín lo explica todo con la escoba en la mano. La poeta de bronce sigue mirando el cielo.", C: "Llega un coche patrulla. Fermín lo explica todo, escoba en mano. La poeta de bronce sigue mirando al cielo, ajena." }, change: "policia", recap: "Fermín vio tu cuchillo y el portero llamó a la policía." },
      "cuchillo-paz": { text: { A: "Lees la placa con el cuchillo guardado. Fermín barre, pero te vigila.", B: "Lees la placa con el cuchillo guardado. Fermín vuelve a barrer, sin quitarte el ojo de encima.", C: "Lees la placa con el cuchillo en el bolsillo. Fermín retoma la escoba, vigilándote de reojo." }, change: "sonrie", recap: "Guardaste el cuchillo y Fermín te dejó leer la placa de Amparo." },
      "pistola-patrulla": { text: { A: "Dos policías bajan del coche. Fermín señala tu cintura. Sigue barriendo.", B: "Dos policías bajan del coche. Fermín señala tu cintura con la escoba y sigue barriendo.", C: "Dos agentes bajan del coche patrulla. Fermín señala tu cintura con la escoba y continúa barriendo." }, change: "policia", recap: "Tu pistola asustó a Fermín y llegó la policía." },
      "pistola-barrido": { text: { A: "Fermín barre alrededor de la poeta. No te quita el ojo de encima.", B: "Fermín barre alrededor de la poeta, muy despacio, sin perderte de vista.", C: "Fermín barre alrededor de la poeta sin prisa y sin perderte de vista ni un segundo." }, change: "sigue", recap: "Guardaste la pistola y Fermín te enseñó el balcón de Amparo." },
      "granada-helicoptero": { text: { A: "El helicóptero ilumina la estatua. Fermín, detrás de Amparo, no sale.", B: "El helicóptero ilumina la estatua de Amparo. Fermín, escondido detrás, no piensa salir.", C: "El foco del helicóptero baña la estatua. Fermín, parapetado tras Amparo, no piensa moverse." }, change: "helicoptero", recap: "Tu granada asustó a Fermín y trajo un helicóptero a la plaza de la poeta." },
      "granada-arte": { text: { A: "La luz del balcón está encendida. Fermín dice: «Eso sí es arte.»", B: "El balcón de Amparo sigue encendido. Fermín asiente: «Eso sí que es arte. Lo suyo, no.»", C: "El balcón de Amparo permanece iluminado. Fermín sentencia: «Eso sí es arte. Lo suyo, no.»" }, change: "luz", recap: "Guardaste la granada y la placa de Amparo encendió un balcón." },
      pagina: { text: { A: "Fermín barre la plaza. Tú miras la estatua un rato más.", B: "Fermín vuelve a barrer, silbando. Tú te quedas un momento mirando a Amparo.", C: "Fermín retoma la escoba, silbando. Tú te quedas un rato más frente a Amparo y su noche de papel." }, change: "sonrie", recap: "Leíste la placa de la poeta Amparo Ruiz." },
      luz: { text: { A: "La luz del balcón está encendida. Fermín se ríe.", B: "El balcón de Amparo sigue iluminado. Fermín dice que pasa a veces, cuando alguien lee bien.", C: "El balcón sigue encendido. Fermín asegura que solo ocurre cuando alguien lee la frase como se merece." }, change: "luz", recap: "Leíste en voz alta la frase de una poeta y se encendió un balcón." },
      poema: { text: { A: "Fermín lee su poema. Es corto y muy bonito.", B: "Fermín te recita un poema corto sobre una escoba enamorada de la luna. Es precioso.", C: "Fermín recita un poema breve sobre una escoba enamorada de la luna. Al terminar, carraspea, avergonzado y feliz." }, change: "sonrie", recap: "Fermín, el barrendero, te recitó un poema." },
    },
    speak: {
      A1: "¿Qué te gusta leer?",
      A2: "¿Qué poema o canción aprendiste de memoria?",
      B1: "¿Qué frase te inspira y por qué?",
      B2: "¿A qué persona de tu ciudad le pondrías una estatua?",
      C1: "¿Qué diferencia hay entre recordar a alguien con una estatua y recordarlo con sus palabras?",
      C2: "¿Qué cambia en tu manera de pensar cuando escribes de noche?",
    },
    variants: {
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿Escribes poemas?", B: "¿Qué cosa creativa haces y nunca enseñas a nadie?", C: "¿Qué hace falta para confesar un talento secreto?" } },
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué proteges tú?", B: "¿Qué cosa defenderías aunque te dieran miedo?", C: "¿Qué dice de una persona lo que está dispuesta a defender con una escoba?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Tienes miedo de noche?", B: "¿Cómo reaccionas ante una persona asustada?", C: "¿Qué significa para ti que la noche sea una página?" } },
      granada: { start: "granada-inicio", fx: "risa", speak: { A: "¿Qué es arte para ti?", B: "¿Qué objeto absurdo te parece una obra de arte?", C: "¿Dónde termina la broma y empieza el peligro?" } },
    },
  },
  {
    id: "alto-portero",
    kind: "rincon",
    district: "alto",
    title: "El portero del Imperial",
    verb: "HABLAR",
    goal: "Hacer cumplidos, preguntar por la vida de otros con discreción y pedir algo con cortesía.",
    cast: [
      {
        id: "sebastian", name: "Sebastián", role: "Portero del Hotel Imperial",
        age: "adult", body: "m", build: "athletic", height: 1.9,
        hair: "bald", hairColor: "#2a1d16", skin: "#4a2f22",
        top: "uniform", topColor: "#6b1422", bottom: "pants", bottomColor: "#1b1b1b",
        extras: ["hat", "mustache"], pose: "stand", props: ["hotel-door"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "sebastian", mood: "neutral",
        line: {
          A: "En la puerta del Hotel Imperial hay un portero con uniforme rojo. Es muy serio. «Buenas noches. ¿Es usted cliente del hotel?»",
          B: "Un portero con uniforme granate y botones dorados vigila la puerta del Hotel Imperial. «Buenas noches. ¿Tiene usted reserva?»",
          C: "Un portero impecable, de uniforme granate y bigote perfecto, te examina de arriba abajo. «Buenas noches. ¿Viene usted a alojarse o solo a admirar?»",
        },
        options: [
          {
            id: "cumplido",
            say: { A: "No. Pero su uniforme es muy elegante.", B: "No, solo paseo. Pero qué uniforme tan elegante lleva.", C: "Solo a admirar. Empezando por ese uniforme, que es una obra de arte." },
            reply: { A: "El portero sonríe un poco. «Gracias. Me llamo Sebastián. Trabajo aquí hace veintidós años.»", B: "El portero se estira, orgulloso. «Gracias. Soy Sebastián. Veintidós años en esta puerta.»", C: "El portero se permite media sonrisa. «Sebastián, a su servicio. Veintidós años en esta puerta, y nunca una mancha.»" },
            mood: "smile", next: "chisme",
          },
          {
            id: "entrar",
            say: { A: "No. ¿Puedo ver el hotel por dentro?", B: "No, pero ¿podría ver el vestíbulo un momento?", C: "Me temo que no. ¿Habría alguna posibilidad de echar un vistazo al vestíbulo?" },
            reply: { A: "El portero piensa. «Un minuto. Solo uno.» Abre la puerta.", B: "El portero duda y mira a los lados. «Un minuto. Y no toque nada.» Abre la puerta.", C: "El portero suspira con dignidad. «Sesenta segundos. Y no se siente en los sillones, que son de 1912.»" },
            mood: "neutral", end: "vestibulo",
          },
          {
            id: "huespedes",
            say: { A: "¿Hay gente famosa en el hotel?", B: "¿Se alojan muchos famosos aquí?", C: "Un lugar así debe de estar lleno de historias. ¿Algún huésped célebre?" },
            reply: { A: "El portero baja la voz. «Yo no digo nada… pero sí.»", B: "El portero mira a los lados y baja la voz. «Yo no he dicho nada. Pero esta noche, sí.»", C: "El portero se inclina un poco. «La discreción es mi oficio. Pero el oficio también tiene descansos.»" },
            mood: "smile", next: "chisme",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted hace muy bien su trabajo. ¿Le gusta?", B: "Se nota que hace su trabajo con orgullo. ¿Siempre quiso ser portero?", C: "Lleva usted ese uniforme como un actor lleva su papel. ¿Me equivoco?" },
            reply: { A: "El portero sonríe. «Me llamo Sebastián. De joven quería ser actor. Esta puerta es mi teatro.»", B: "El portero se ríe. «Soy Sebastián. Quería ser actor. Aquí actúo todas las noches.»", C: "El portero suelta una carcajada. «Sebastián. Quise ser actor. Ahora tengo el mejor escenario de la ciudad y el público cambia cada noche.»" },
            mood: "love", next: "chisme",
          },
          lapiz: {
            act: { A: "Sacas el lápiz y un papel.", B: "Sacas el lápiz y un papel.", C: "Sacas el lápiz con cara de periodista." },
            say: { A: "¿Me da su autógrafo?", B: "¿Me firma un autógrafo? Es el portero más elegante de la ciudad.", C: "Un autógrafo, por favor. Algún día valdrá más que el de los huéspedes." },
            reply: { A: "El portero se ríe y firma. «Sebastián. ¡Nadie me pide autógrafos!»", B: "El portero firma con una letra preciosa. «Sebastián. Veintidós años y es el primer autógrafo que firmo.»", C: "El portero firma con una caligrafía de otro siglo. «Sebastián. Guárdelo. Y no lo venda barato.»" },
            mood: "love", next: "chisme",
          },
          pistola: {
            act: { A: "El portero ve tu pistola.", B: "El portero ve tu pistola.", C: "El portero detecta tu pistola con ojo profesional." },
            say: { A: "Buenas noches. ¿Puedo entrar?", B: "Buenas noches. ¿Puedo pasar un momento?", C: "Buenas noches. ¿Me permite pasar?" },
            reply: { A: "El portero no abre. Toma el teléfono. «Un momento, por favor.»", B: "El portero se coloca delante de la puerta y saca el teléfono. «Un momento, por favor. No se mueva.»", C: "El portero no pierde la sonrisa, pero sí la paciencia. «Un momento, por favor», dice, marcando un número." },
            mood: "scared", end: "policia",
          },
        },
      },
      chisme: {
        who: "sebastian", mood: "smile",
        line: {
          A: "Sebastián habla bajo. «Hay una cantante en la 305. Pidió cuarenta limones.»",
          B: "Sebastián baja la voz. «Esta noche hay una cantante famosa en la 305. Pidió cuarenta limones. ¡Cuarenta!»",
          C: "Sebastián habla sin mover el bigote. «En la 305 hay una cantante muy conocida. Ha pedido cuarenta limones. No pregunte para qué: yo tampoco lo sé.»",
        },
        options: [
          {
            id: "mas",
            say: { A: "¡Cuarenta limones! ¿Y qué más?", B: "¿Cuarenta? ¡Cuénteme más, por favor!", C: "Fascinante. ¿Y qué otros secretos guarda esta puerta?" },
            reply: { A: "Sebastián se ríe. «La novia de la boda se cambió de vestido tres veces.»", B: "Sebastián se ríe. «Y la novia de la boda de hoy se ha cambiado de vestido tres veces. Y son las doce.»", C: "«La novia de esta noche va por su tercer vestido», confiesa Sebastián. «A este ritmo, el cuarto será el pijama.»" },
            mood: "smile", end: "chisme",
          },
          {
            id: "discreto",
            say: { A: "Usted no puede contar eso, ¿no?", B: "Oiga, ¿usted puede contar estas cosas?", C: "¿No se supone que la discreción era sagrada?" },
            reply: { A: "Sebastián se pone serio. «Tiene razón. Yo no dije nada.»", B: "Sebastián se pone serio de golpe. «Tiene toda la razón. Yo no he dicho nada. Buenas noches.»", C: "Sebastián recupera la compostura al instante. «Sagrada. Por eso usted no ha oído nada. Buenas noches.»" },
            mood: "neutral", end: "adios",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted es muy divertido, Sebastián.", B: "Es usted el portero más divertido del mundo, Sebastián.", C: "Sebastián, debería escribir sus memorias. Serían un éxito." },
            reply: { A: "Sebastián abre la puerta. «Para usted, un minuto dentro. Gratis.»", B: "Sebastián se ríe y abre la puerta. «Por ese cumplido, le enseño el vestíbulo. Un minuto.»", C: "Sebastián abre la puerta con una reverencia. «Capítulo uno: el día que dejé entrar a un admirador. Pase.»" },
            mood: "love", end: "vestibulo",
          },
        },
      },
      "corazon-inicio": {
        who: "sebastian", mood: "love",
        line: {
          A: "En la puerta del Hotel Imperial, un portero con uniforme rojo te mira. Ve el corazón y sonríe por primera vez. «Buenas noches. Hoy no pregunto si es cliente. Hoy le abro la puerta.»",
          B: "Un portero de uniforme granate vigila la puerta del Hotel Imperial. Ve el corazón y, contra toda su disciplina, sonríe. «Buenas noches. Hoy no le pregunto si tiene reserva. Hoy le abro la puerta y ya está.»",
          C: "Un portero impecable, de uniforme granate y bigote perfecto, te examina. Ve el corazón y la disciplina se le derrite en una sonrisa. «Buenas noches. Hoy no pregunto por reservas. Hoy, sencillamente, le abro la puerta.»",
        },
        options: [
          {
            id: "porque",
            say: { A: "¿Por qué hoy? Usted parece muy serio siempre.", B: "¿Y por qué hoy? Tiene fama de ser muy serio.", C: "¿Por qué hoy? Dicen que es usted el portero más serio de la ciudad." },
            reply: { A: "El portero se ríe. «Me llamo Sebastián. Soy serio por trabajo. De joven quería ser actor. Esta puerta es mi teatro.»", B: "El portero se ríe bajito. «Soy Sebastián. La seriedad es parte del uniforme. De joven quería ser actor. Esta puerta es mi teatro.»", C: "El portero ríe por lo bajo. «Sebastián. La seriedad viene con el uniforme. De joven quise ser actor; esta puerta es mi escenario.»" },
            mood: "love", next: "corazon-actor",
          },
          {
            id: "gracias",
            say: { A: "Gracias. Es usted muy amable. ¿Cómo se llama?", B: "Muchas gracias. Es usted muy amable. ¿Cómo se llama?", C: "Se lo agradezco. Es usted muy amable. ¿Cómo se llama?" },
            reply: { A: "El portero se inclina. «Sebastián. Veintidós años aquí. Y nadie me pregunta el nombre. Pase.»", B: "El portero se inclina con elegancia. «Sebastián. Veintidós años en esta puerta y casi nadie me pregunta el nombre. Pase, por favor.»", C: "El portero hace una leve reverencia. «Sebastián. Veintidós años en esta puerta y rara vez alguien pregunta mi nombre. Pase.»" },
            mood: "love", next: "corazon-actor",
          },
        ],
      },
      "corazon-actor": {
        who: "sebastian", mood: "smile",
        line: {
          A: "Sebastián abre la puerta. La luz dorada del vestíbulo sale a la calle. «¿Quiere ver mi escenario? Un minuto. Después, otra vez serio.»",
          B: "Sebastián abre la puerta y la luz dorada del vestíbulo se derrama sobre la acera. «¿Quiere ver mi escenario? Un minuto. Después vuelvo a ser una estatua.»",
          C: "Sebastián abre la puerta y la luz dorada del vestíbulo inunda la acera. «¿Quiere conocer mi escenario? Un minuto. Luego vuelvo a mi papel de estatua.»",
        },
        options: [
          {
            id: "ver",
            say: { A: "Sí, por favor. Un minuto.", B: "Sí, por favor. Solo un minuto.", C: "Con mucho gusto. Un minuto, ni uno más." },
            reply: { A: "Sebastián te acompaña. Lámpara enorme, alfombras rojas. «Aquí actúo cada noche.»", B: "Sebastián te acompaña al vestíbulo. Una lámpara enorme, alfombras rojas, sillones de 1912. «Aquí actúo cada noche, para un público que cambia.»", C: "Sebastián te guía al vestíbulo: lámpara monumental, alfombras rojas, sillones de 1912. «Aquí actúo cada noche, ante un público que nunca repite.»" },
            mood: "love", end: "corazon-escenario",
          },
          {
            id: "abrazo",
            say: { A: "Mejor un abrazo, Sebastián. Usted lo merece.", B: "Mejor un abrazo, Sebastián. Se lo merece.", C: "Mejor un abrazo, Sebastián. Se lo tiene más que merecido." },
            reply: { A: "Sebastián mira a los lados. Luego te abraza. «Veintidós años. Primer abrazo en la puerta.»", B: "Sebastián mira a los lados, por si lo ve alguien. Luego te abraza. «Veintidós años. El primer abrazo en esta puerta.»", C: "Sebastián comprueba que nadie mira y te abraza. «Veintidós años. Primer abrazo en esta puerta. Que no se entere la dirección.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "cuchillo-inicio": {
        who: "sebastian", mood: "angry",
        line: {
          A: "En la puerta del Hotel Imperial, un portero con uniforme rojo te mira. Ve tu cuchillo. Se pone delante de la puerta. «Alto. Aquí no entra nadie con eso. Guárdelo o llamo a la policía.»",
          B: "Un portero de uniforme granate vigila la puerta del Hotel Imperial. Ve el cuchillo y se coloca delante de la puerta, enorme. «Alto ahí. Con eso no entra nadie. Guárdelo ahora mismo o llamo a la policía.»",
          C: "Un portero impecable, de uniforme granate y bigote perfecto, repara en tu cuchillo y se interpone ante la puerta con toda su envergadura. «Alto. Con eso no entra nadie. Guárdelo de inmediato o aviso a la policía.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Lo guardo. Perdón. No quería entrar. Solo pasear.", B: "Lo guardo, perdone. No quería entrar; solo paseaba.", C: "Lo guardo, con disculpas. No pretendía entrar; simplemente paseaba." },
            reply: { A: "El portero no se mueve. «Guardado del todo. Bien. Me llamo Sebastián. ¿Para qué lleva eso?»", B: "El portero no se aparta de la puerta. «Guardado del todo. Bien. Soy Sebastián. ¿Se puede saber para qué lleva eso?»", C: "El portero sigue plantado ante la puerta. «Guardado. Bien. Sebastián, a su servicio. ¿Para qué lleva usted eso?»" },
            mood: "neutral", next: "cuchillo-cocina",
          },
          {
            id: "loco",
            say: { A: "¿Está loco? Es mi cuchillo. ¿Qué problema hay?", B: "¿Está usted loco? Es mi cuchillo. ¿Cuál es el problema?", C: "¿Ha perdido el juicio? Es mi cuchillo. ¿Qué problema hay?" },
            reply: { A: "El portero saca el teléfono sin mirarlo. «El problema, señor, es la policía. Ya viene.»", B: "El portero saca el teléfono sin apartar los ojos de ti. «El problema, señor, se llama policía. Ya viene.»", C: "El portero marca sin dejar de mirarte. «El problema, señor, tiene uniforme y ya está de camino.»" },
            mood: "angry", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-cocina": {
        who: "sebastian", mood: "neutral",
        line: {
          A: "Sebastián te mira de arriba abajo. «En la cocina del hotel hay un cocinero que colecciona cuchillos. ¿Es bueno el suyo? Déjelo aquí y le enseño el vestíbulo.»",
          B: "Sebastián te examina de arriba abajo. «En la cocina del hotel hay un cocinero que colecciona cuchillos. ¿Es bueno el suyo? Déjelo en mi mostrador y le enseño el vestíbulo un minuto.»",
          C: "Sebastián te evalúa de arriba abajo. «El cocinero del hotel colecciona cuchillos. ¿Es bueno el suyo? Déjelo en mi mostrador y le enseño el vestíbulo durante un minuto.»",
        },
        options: [
          {
            id: "dejar",
            say: { A: "De acuerdo. Lo dejo aquí. Un minuto.", B: "De acuerdo, lo dejo aquí. Un minuto.", C: "De acuerdo. Lo dejo en su mostrador. Un minuto." },
            reply: { A: "Sebastián guarda el cuchillo en un cajón. Abre la puerta. «Un minuto. Y no toque nada.»", B: "Sebastián guarda el cuchillo en un cajón con llave y abre la puerta. «Un minuto. Y no toque nada, que es de 1912.»", C: "Sebastián guarda el cuchillo bajo llave y abre la puerta. «Un minuto. Y no toque nada: todo es de 1912.»" },
            mood: "smile", end: "cuchillo-vestibulo",
          },
          {
            id: "no",
            say: { A: "No lo dejo. Es mío. Me voy.", B: "No lo dejo, es mío. Mejor me voy.", C: "No lo dejaré; es mío. Me retiro." },
            reply: { A: "Sebastián asiente. «Buenas noches.» Te mira hasta la esquina. Y llama a alguien.", B: "Sebastián asiente. «Buenas noches.» Te sigue con la mirada hasta la esquina y, por si acaso, hace una llamada.", C: "Sebastián asiente. «Buenas noches.» Te vigila hasta la esquina y, por protocolo, hace una llamada." },
            mood: "neutral", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "sebastian", mood: "neutral",
        line: {
          A: "En la puerta del Hotel Imperial, un portero con uniforme rojo te mira. Ve tu pistola. No se mueve. Aprieta un botón en la pared. «Buenas noches. La policía llega en dos minutos. ¿Quiere esperar o hablar?»",
          B: "Un portero de uniforme granate vigila la puerta del Hotel Imperial. Ve la pistola en tu cintura y no pierde la calma. Aprieta un botón discreto en la pared. «Buenas noches. La policía tarda dos minutos. ¿Prefiere esperar o conversar?»",
          C: "Un portero impecable, de uniforme granate y bigote perfecto, detecta tu pistola con ojo profesional. Sin inmutarse, pulsa un botón discreto en la pared. «Buenas noches. La policía tarda dos minutos. ¿Espera o conversamos?»",
        },
        options: [
          {
            id: "hablar",
            say: { A: "Hablar. La guardo. Es por seguridad. Perdón.", B: "Conversar. La guardo ahora mismo. Es por seguridad, perdone.", C: "Conversemos. La guardo de inmediato. Es por seguridad; le pido disculpas." },
            reply: { A: "El portero asiente. «Me llamo Sebastián. Veintidós años aquí. Tres pistolas. Usted es la cuarta.»", B: "El portero asiente, impasible. «Soy Sebastián. Veintidós años en esta puerta. He visto tres pistolas. Usted es la cuarta.»", C: "El portero asiente sin alterarse. «Sebastián. Veintidós años aquí. Tres pistolas vistas; la suya es la cuarta.»" },
            mood: "neutral", next: "pistola-cuarta",
          },
          {
            id: "irse",
            say: { A: "Me voy. No quiero problemas.", B: "Me voy ahora mismo. No quiero problemas.", C: "Me retiro de inmediato. No busco problemas." },
            reply: { A: "El portero no te detiene. «Dos minutos, señor. Corra.» Y sonríe muy poco.", B: "El portero no te detiene. «Dos minutos, señor. Le recomiendo correr.» Y sonríe apenas.", C: "El portero no mueve un dedo. «Dos minutos, señor. Le sugiero correr.» Esboza media sonrisa." },
            mood: "neutral", end: "pistola-retirada",
          },
        ],
      },
      "pistola-cuarta": {
        who: "sebastian", mood: "neutral",
        line: {
          A: "Sebastián mira la calle. «Las tres primeras acabaron en la comisaría. Usted todavía puede elegir: deme la pistola y la policía no lo encuentra con ella.»",
          B: "Sebastián observa la calle, tranquilo. «Las tres primeras terminaron en la comisaría. Usted todavía puede elegir: me entrega la pistola y la policía no lo encuentra con ella encima.»",
          C: "Sebastián contempla la calle con calma. «Las tres anteriores acabaron en comisaría. Usted aún puede elegir: me entrega la pistola y la policía no lo encuentra armado.»",
        },
        options: [
          {
            id: "entregar",
            say: { A: "Tome. Es suya. Perdón por todo.", B: "Tome, es suya. Perdone por todo.", C: "Tómela. Y disculpe las molestias." },
            reply: { A: "Sebastián la guarda en un cajón. «Bien hecho. Váyase antes de los dos minutos.» Abre la puerta para un cliente.", B: "Sebastián la guarda en un cajón con llave. «Bien hecho. Váyase antes de que pasen los dos minutos.» Y abre la puerta a un huésped.", C: "Sebastián la guarda bajo llave. «Bien hecho. Márchese antes de que se cumplan los dos minutos.» Y abre la puerta a un huésped." },
            mood: "neutral", end: "pistola-retirada",
          },
          {
            id: "no",
            say: { A: "No se la doy. Es mía.", B: "No se la doy. Es mía.", C: "No pienso entregársela; es mía." },
            reply: { A: "Un coche de policía para delante del hotel. Sebastián señala. «Dos minutos exactos.»", B: "Un coche de policía frena delante del hotel. Sebastián lo señala con elegancia. «Dos minutos exactos.»", C: "Un coche patrulla frena ante el hotel. Sebastián lo señala con un gesto mínimo. «Dos minutos clavados.»" },
            mood: "neutral", end: "policia",
          },
        ],
      },
      "granada-inicio": {
        who: "sebastian", mood: "scared",
        line: {
          A: "En la puerta del Hotel Imperial, un portero con uniforme rojo te mira. Ve tu granada. Grita hacia dentro: «¡Todos fuera! ¡Evacuación!» Los huéspedes salen en pijama.",
          B: "Un portero de uniforme granate vigila la puerta del Hotel Imperial. Ve la granada en tu mano y, por primera vez en veintidós años, grita: «¡Evacuación! ¡Todo el mundo fuera!» Los huéspedes salen en pijama.",
          C: "Un portero impecable, de uniforme granate y bigote perfecto, repara en tu granada. Por primera vez en veintidós años, grita: «¡Evacuación! ¡Todos fuera!» Los huéspedes salen en pijama y bata de seda.",
        },
        options: [
          {
            id: "falsa",
            say: { A: "¡No! Es falsa. ¡Es decoración!", B: "¡No, no! Es falsa. ¡Es decoración!", C: "¡No! Es de utilería. ¡Pura decoración!" },
            reply: { A: "El portero no te escucha. Cuenta huéspedes. «Treinta y dos… treinta y tres… ¿Decoración? ¡Guárdela!»", B: "El portero no te hace caso; cuenta huéspedes en la acera. «Treinta y dos, treinta y tres… ¿Decoración? ¡Pues guárdela!»", C: "El portero te ignora mientras cuenta huéspedes. «Treinta y dos, treinta y tres… ¿Decoración? ¡Guárdela de una vez!»" },
            mood: "scared", next: "granada-huespedes",
          },
          {
            id: "broma",
            say: { A: "Es una broma. Mire, la lanzo al aire.", B: "Es una broma, hombre. Mire, la lanzo al aire.", C: "Es una broma. Observe: la lanzo al aire." },
            reply: { A: "Los huéspedes gritan. El portero grita. Un helicóptero aparece sobre el hotel.", B: "Los huéspedes gritan en la acera. El portero grita más. Sobre el hotel aparece un helicóptero con un foco.", C: "Los huéspedes gritan en la acera y el portero los supera. Un helicóptero asoma sobre el Imperial con el foco encendido." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-huespedes": {
        who: "sebastian", mood: "worried",
        line: {
          A: "Sebastián se pone delante de los huéspedes. «Me llamo Sebastián. Veintidós años sin una evacuación. Guárdela y explíquelo a estas treinta y tres personas.»",
          B: "Sebastián se coloca entre tú y los huéspedes en pijama. «Soy Sebastián. Veintidós años sin una sola evacuación. Guarde eso y explíqueselo a estas treinta y tres personas.»",
          C: "Sebastián se interpone entre tú y una fila de huéspedes en bata. «Sebastián. Veintidós años sin una evacuación. Guárdela y explíqueselo usted mismo a estas treinta y tres personas.»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Perdón a todos. Es falsa. Es de mi abuelo. No funciona.", B: "Perdón a todos. Es falsa. Era de mi abuelo y no funciona.", C: "Mis disculpas a todos. Es falsa: una herencia de mi abuelo que no funciona." },
            reply: { A: "Una señora en bata se ríe. Luego otro. Sebastián suspira. «Todos adentro. Y usted, afuera.»", B: "Una señora en bata se ríe. Luego otro huésped. Sebastián suspira. «Todo el mundo adentro. Y usted, se queda fuera.»", C: "Una señora en bata ríe; luego otro huésped. Sebastián suspira. «Todos adentro. Usted, fuera.»" },
            mood: "smile", end: "granada-broma",
          },
          {
            id: "no-se",
            say: { A: "No sé si es de verdad. Nadie lo sabe.", B: "No sé si es de verdad. Nadie quiere averiguarlo.", C: "No sé si es real. Nadie ha querido comprobarlo." },
            reply: { A: "Los huéspedes corren. Sebastián habla por radio. Un helicóptero ilumina la plaza.", B: "Los huéspedes echan a correr. Sebastián habla por radio con voz grave. Un helicóptero ilumina la plaza.", C: "Los huéspedes se dispersan corriendo. Sebastián habla por radio y un helicóptero ilumina la plaza." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
    },
    ends: {
      "corazon-escenario": { text: { A: "Un minuto en el vestíbulo dorado. Sebastián te mira como un actor a su público.", B: "Pasas un minuto en el vestíbulo dorado. Sebastián te observa como un actor mira a su único espectador.", C: "Un minuto en el vestíbulo dorado. Sebastián te contempla como un actor a su único espectador de la noche." }, change: "luz", recap: "Sebastián te enseñó su escenario: el vestíbulo del Imperial." },
      "corazon-abrazo": { text: { A: "Sebastián vuelve a su puesto. Serio otra vez. Pero sonríe un poco.", B: "Sebastián vuelve a su posición, serio como una estatua. Pero se le escapa una sonrisa.", C: "Sebastián recupera su puesto y su seriedad de estatua. Aun así, se le escapa una sonrisa." }, change: "abraza", recap: "Le diste a Sebastián su primer abrazo en veintidós años de puerta." },
      "cuchillo-policia": { text: { A: "Llega la policía. Sebastián explica con calma. Tú explicas el cuchillo. Tarda mucho.", B: "Llega la policía. Sebastián lo explica todo con calma profesional. Tú explicas el cuchillo, y tarda bastante.", C: "Llega un coche patrulla. Sebastián informa con calma profesional. Tú explicas el cuchillo; lleva su tiempo." }, change: "policia", recap: "Sebastián vio tu cuchillo y llamó a la policía." },
      "cuchillo-vestibulo": { text: { A: "Ves el vestíbulo sin cuchillo. Al salir, Sebastián te lo devuelve. «Buen acero.»", B: "Recorres el vestíbulo sin el cuchillo. Al salir, Sebastián te lo devuelve. «Buen acero. El cocinero lo aprobaría.»", C: "Visitas el vestíbulo desarmado. Al salir, Sebastián te devuelve el cuchillo. «Buen acero. El cocinero lo aprobaría.»" }, change: "luz", recap: "Dejaste el cuchillo en el mostrador y Sebastián te enseñó el vestíbulo." },
      "pistola-retirada": { text: { A: "Te vas rápido. Sebastián mira el reloj. La policía llega cuando doblas la esquina.", B: "Te alejas rápido. Sebastián consulta el reloj. La policía llega justo cuando doblas la esquina.", C: "Te retiras deprisa. Sebastián consulta su reloj. La policía llega en el instante en que doblas la esquina." }, change: "huye", recap: "Sebastián llamó a la policía por tu pistola y te fuiste a tiempo." },
      "granada-helicoptero": { text: { A: "El helicóptero ilumina el hotel. Sebastián cuenta huéspedes en la acera.", B: "El helicóptero ilumina la fachada del hotel. Sebastián sigue contando huéspedes en la acera, impasible.", C: "El foco del helicóptero barre la fachada del Imperial. Sebastián sigue contando huéspedes en la acera, imperturbable." }, change: "helicoptero", recap: "Tu granada evacuó el Hotel Imperial y trajo un helicóptero." },
      "granada-broma": { text: { A: "Los huéspedes entran. Sebastián cierra la puerta. Te mira a través del cristal.", B: "Los huéspedes vuelven a entrar. Sebastián cierra la puerta y te observa a través del cristal, sin palabras.", C: "Los huéspedes regresan al hotel. Sebastián cierra la puerta y te observa a través del cristal, mudo." }, change: "sonrie", recap: "Tu granada evacuó el hotel, pero los huéspedes acabaron riéndose." },
      chisme: { text: { A: "Sebastián te guiña un ojo y abre la puerta a un cliente.", B: "Sebastián te guiña un ojo y vuelve a su posición, serio como una estatua.", C: "Sebastián te guiña un ojo y recupera la seriedad justo cuando llega un huésped." }, change: "sonrie", recap: "Sebastián, el portero, te contó secretos del Hotel Imperial." },
      vestibulo: { text: { A: "Sebastián abre la puerta. Ves una lámpara enorme y alfombras rojas.", B: "Sebastián abre la puerta y la luz dorada del vestíbulo sale a la calle. Ves una lámpara gigante.", C: "Sebastián abre la puerta y la luz dorada del vestíbulo se derrama sobre la acera. Durante un minuto, eres huésped de honor." }, change: "luz", recap: "Sebastián te dejó ver el vestíbulo del Hotel Imperial." },
      adios: { text: { A: "Sebastián se pone serio otra vez. Mira la calle.", B: "Sebastián vuelve a mirar la calle, muy serio, como si nada.", C: "Sebastián vuelve a su papel de estatua. Pero ahora sabes que debajo hay un actor." }, change: "sigue", recap: "Hablaste con Sebastián, el portero del hotel." },
      policia: { text: { A: "Llega la policía. Explicas todo. Sebastián te mira con desconfianza.", B: "Llega la policía. Tardas un buen rato en explicar que solo querías ver el hotel.", C: "Llega un coche patrulla. Sebastián observa la escena con la satisfacción de quien hace bien su trabajo." }, change: "policia", recap: "El portero del Hotel Imperial llamó a la policía." },
    },
    speak: {
      A1: "¿Qué ropa llevas para salir de noche?",
      A2: "¿En qué hotel dormiste alguna vez?",
      B1: "¿Qué trabajo te parece interesante para conocer gente?",
      B2: "¿Qué harías si supieras un secreto de una persona famosa?",
      C1: "¿Cuándo un chisme deja de ser inofensivo?",
      C2: "¿Qué papel interpretas tú en tu vida diaria sin darte cuenta?",
    },
    variants: {
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿Quieres ser actor?", B: "¿Qué querías ser de pequeño y qué eres ahora?", C: "¿Qué tiene de escenario tu trabajo de cada día?" } },
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Tienes cuchillos en casa?", B: "¿Qué objeto tuyo no dejarías en manos de un desconocido?", C: "¿Cuándo se convierte una herramienta en una amenaza?" } },
      pistola: { start: "pistola-inicio", fx: "policia", speak: { A: "¿Conoces a algún policía?", B: "¿Qué harías si tuvieras dos minutos para decidir algo importante?", C: "¿Qué pesa más en una decisión: el miedo a las consecuencias o el orgullo?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Dormiste alguna vez en un hotel?", B: "¿Cuál fue la noche más caótica que pasaste en un hotel o en un viaje?", C: "¿Por qué el pánico colectivo es tan contagioso?" } },
    },
  },
  {
    id: "alto-vinoteca",
    kind: "rincon",
    district: "alto",
    title: "La puerta de la vinoteca",
    verb: "PREGUNTAR",
    goal: "Pedir una recomendación, expresar gustos y preferencias, y rechazar u ofrecer una alternativa con cortesía.",
    cast: [
      {
        id: "renata", name: "Renata", role: "Sumiller de la vinoteca",
        age: "adult", body: "f", build: "slim", height: 1.76,
        hair: "ponytail", hairColor: "#d7b56d", skin: "#c68e64",
        top: "apron", topColor: "#3a1f2b", bottom: "pants", bottomColor: "#151515",
        extras: ["earrings"], pose: "lean", props: ["wine-shop", "barrel"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "renata", mood: "smile",
        line: {
          A: "Una mujer con delantal está en la puerta de una vinoteca. «¡Hola! ¿Quieres probar algo? Tenemos vino y también mosto, sin alcohol.»",
          B: "Una sumiller con delantal granate está apoyada en un barril, junto a la puerta. «Buenas noches. ¿Te recomiendo algo? Hay vinos y también mosto, sin alcohol.»",
          C: "Una sumiller de mirada experta te detiene con un gesto amable. «¿Te apetece descubrir algo? Tenemos vinos con historia y un mosto que convence hasta a los escépticos.»",
        },
        options: [
          {
            id: "mosto",
            say: { A: "Sin alcohol, por favor. ¿Qué es el mosto?", B: "Prefiero algo sin alcohol. ¿Cómo es el mosto?", C: "Me quedo con la opción sin alcohol. ¿Qué tiene de especial ese mosto?" },
            reply: { A: "La mujer sonríe. «Es zumo de uva. Muy rico. Me llamo Renata.»", B: "«Es zumo de uva tinta, del mismo viñedo que nuestro mejor vino», dice. «Soy Renata. Pruébalo.»", C: "«Es zumo de la misma uva que nuestro tinto estrella. Todo el sabor, nada de dolor de cabeza», dice. «Soy Renata.»" },
            mood: "smile", end: "mosto",
          },
          {
            id: "recomendar",
            say: { A: "¿Qué me recomiendas?", B: "No sé nada de vinos. ¿Qué me recomiendas?", C: "Confieso mi ignorancia total. Sorpréndeme con una recomendación." },
            reply: { A: "«Este tinto es de mi región. Huele a fresas. Me llamo Renata.»", B: "La sumiller te enseña una botella. «Soy Renata. Este tinto huele a fresas y a tierra mojada. Perfecto para una noche así.»", C: "«La ignorancia es el mejor punto de partida», dice. «Soy Renata. Este tinto huele a fresas y a lluvia. Ideal para conversar, no para correr.»" },
            mood: "smile", end: "consejo",
          },
          {
            id: "no",
            say: { A: "No, gracias. Solo estoy paseando.", B: "Muchas gracias, pero esta noche solo estoy paseando.", C: "Te lo agradezco, pero esta noche me limito a mirar escaparates." },
            reply: { A: "La mujer sonríe. «¡Muy bien! Buenas noches.»", B: "La sumiller sonríe. «Perfecto. Buen paseo, y vuelve cuando quieras.»", C: "«Mirar también es un placer», dice la sumiller. «Buen paseo.»" },
            mood: "smile", end: "paseo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Se ve que te gusta mucho tu trabajo.", B: "Hablas de los vinos con mucho cariño. ¿De dónde viene eso?", C: "Se te ilumina la cara al hablar de vino. ¿Cuál es la historia?" },
            reply: { A: "La mujer sonríe. «Me llamo Renata. Mi abuelo tenía un viñedo. Yo jugaba entre las uvas.»", B: "La sumiller se emociona. «Soy Renata. Mi abuelo tenía un viñedo pequeño. Yo crecí entre sus uvas.»", C: "La sumiller sonríe. «Renata. Mi abuelo tenía cuatro filas de viñas y mucho orgullo. Cada botella me lo recuerda.»" },
            mood: "love", end: "historia",
          },
          cuchillo: {
            act: { A: "Ves un queso en la mesa. Sacas el cuchillo.", B: "En la mesita de la entrada hay un queso entero. Sacas el cuchillo.", C: "Sobre la mesa de la entrada, un queso entero espera. Sacas el cuchillo." },
            say: { A: "¿Te ayudo a cortar el queso?", B: "¿Quieres que te ayude con el queso?", C: "Ese queso pide a gritos que alguien lo corte. ¿Me permites?" },
            reply: { A: "La mujer da un paso atrás. «Eh… no, gracias. Yo lo corto. Me llamo Renata.»", B: "La sumiller te detiene con una mano, un poco tensa. «Gracias, pero el queso lo corto yo. Soy Renata.»", C: "La sumiller se interpone con elegancia. «El queso es territorio sagrado. Soy Renata, y yo lo corto.»" },
            mood: "worried", end: "paseo",
          },
        },
      },
      "corazon-inicio": {
        who: "renata", mood: "love",
        line: {
          A: "Una mujer con delantal está en la puerta de una vinoteca. Ve el corazón y sonríe con los ojos. «Hola. Tú no necesitas una recomendación. Tú necesitas una copa conmigo.»",
          B: "Una sumiller con delantal granate se apoya en un barril junto a la puerta. Ve el corazón y se le escapa una sonrisa. «Buenas noches. Tú no necesitas una recomendación. Tú necesitas una copa, y yo, compañía.»",
          C: "Una sumiller de mirada experta te detiene desde la puerta. Ve el corazón y la sonrisa se le escapa sola. «Buenas noches. Tú no vienes a por una recomendación. Tú vienes a por una copa conmigo, aunque aún no lo sepas.»",
        },
        options: [
          {
            id: "copa",
            say: { A: "Una copa contigo. ¿De qué?", B: "Una copa contigo, entonces. ¿De qué la quieres?", C: "Una copa contigo, pues. ¿Qué propones?" },
            reply: { A: "La mujer saca dos copas. «Mosto, si no bebes. Me llamo Renata. Mi abuelo tenía un viñedo.»", B: "La sumiller saca dos copas de debajo del barril. «Mosto, si no bebes alcohol. Soy Renata. Mi abuelo tenía un viñedo pequeño.»", C: "La sumiller saca dos copas de debajo del barril. «Mosto, si prefieres sin alcohol. Soy Renata. Mi abuelo tenía cuatro filas de viñas.»" },
            mood: "love", next: "corazon-copa",
          },
          {
            id: "trabajo",
            say: { A: "¿Siempre invitas a la gente así?", B: "¿Siempre invitas a desconocidos así?", C: "¿Tienes por costumbre invitar así a los desconocidos?" },
            reply: { A: "La mujer se ríe. «Nunca. Me llamo Renata. Hoy es raro. Tú eres raro.»", B: "La sumiller se ríe. «Nunca. Soy Renata. Hoy es una noche rara. Y tú eres raro, en el buen sentido.»", C: "La sumiller ríe. «Jamás. Soy Renata. Esta noche es rara, y tú lo eres también, en el mejor sentido.»" },
            mood: "love", next: "corazon-copa",
          },
        ],
      },
      "corazon-copa": {
        who: "renata", mood: "smitten",
        line: {
          A: "Renata sirve dos copas de mosto. «Por mi abuelo. Y por ti, que no sé quién eres.» Te mira mucho tiempo.",
          B: "Renata sirve dos copas de mosto con ceremonia. «Por mi abuelo. Y por ti, que no sé quién eres pero me caes bien.» Te sostiene la mirada más de la cuenta.",
          C: "Renata sirve dos copas de mosto con la ceremonia de un gran reserva. «Por mi abuelo. Y por ti, que no sé quién eres y ya me caes bien.» La mirada se le queda contigo un rato largo.",
        },
        options: [
          {
            id: "brindar",
            say: { A: "Por tu abuelo. Y por esta noche rara.", B: "Por tu abuelo. Y por esta noche tan rara.", C: "Por tu abuelo. Y por esta noche, rara y espléndida." },
            reply: { A: "Renata choca la copa. Se ríe. Enciende las luces del escaparate: fotos de su abuelo.", B: "Renata choca su copa con la tuya y se ríe. Luego enciende las luces del escaparate: fotos antiguas de su abuelo entre las viñas.", C: "Renata brinda y ríe. Luego enciende el escaparate: entre las botellas, su abuelo sonríe con las manos manchadas de uva." },
            mood: "love", end: "corazon-brindis",
          },
          {
            id: "beso",
            say: { A: "Renata… ¿te puedo dar un beso?", B: "Renata… ¿puedo darte un beso?", C: "Renata… ¿me permites un beso?" },
            reply: { A: "Renata deja la copa. «Hoy es raro. Sí.» Te besa en la mejilla, cerca de la boca.", B: "Renata deja la copa en el barril. «Hoy es una noche rara. Sí.» Y te besa en la mejilla, muy cerca de la boca.", C: "Renata posa la copa en el barril. «Esta noche es rara. Sí.» Te besa la mejilla, peligrosamente cerca de la boca." },
            mood: "love", end: "corazon-beso",
          },
        ],
      },
      "cuchillo-inicio": {
        who: "renata", mood: "angry",
        line: {
          A: "Una mujer con delantal está en la puerta de una vinoteca. Ve tu cuchillo. Saca una navaja pequeña del delantal. «¿Un cuchillo? Yo también tengo. Es de sumiller. Corta más que el tuyo. ¿Qué quieres?»",
          B: "Una sumiller con delantal granate se apoya en un barril junto a la puerta. Ve el cuchillo en tu mano y saca del delantal una navaja pequeña y brillante. «¿Un cuchillo? Yo también tengo. Navaja de sumiller: corta más que el tuyo. ¿Qué quieres?»",
          C: "Una sumiller de mirada experta repara en tu cuchillo y, sin alterarse, saca del delantal una navaja pequeña y afilada. «¿Un cuchillo? Yo también tengo. Navaja de sumiller: más pequeña, pero mejor afilada. ¿Qué se te ofrece?»",
        },
        options: [
          {
            id: "queso",
            say: { A: "Tranquila. Es para el queso. Hay un queso en la mesa.", B: "Tranquila, es para el queso. Hay un queso entero en la mesa.", C: "Calma. Es para el queso; hay uno entero en la mesa de la entrada." },
            reply: { A: "La mujer no baja la navaja. «El queso lo corto yo. Me llamo Renata. Guarda eso y hablamos.»", B: "La sumiller no baja la navaja. «El queso lo corto yo, con esto. Soy Renata. Guarda eso y hablamos de queso.»", C: "La sumiller mantiene la navaja. «El queso es mío y lo corto yo. Soy Renata. Guarda eso y, si quieres, hablamos de queso.»" },
            mood: "worried", next: "cuchillo-tregua",
          },
          {
            id: "loca",
            say: { A: "¿Estás loca? ¡Guarda esa navaja!", B: "¿Estás loca? ¡Guarda esa navaja ahora!", C: "¿Has perdido el juicio? ¡Guarda esa navaja!" },
            reply: { A: "La mujer silba. El portero del hotel mira. «Guarda tú primero. O lo guarda la policía.»", B: "La sumiller silba hacia el hotel. El portero levanta la cabeza. «Guarda tú primero. O lo guarda la policía por los dos.»", C: "La sumiller silba y el portero del hotel se gira. «Guarda tú primero. O lo guarda la policía, por los dos.»" },
            mood: "angry", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-tregua": {
        who: "renata", mood: "worried",
        line: {
          A: "Renata baja la navaja un poco. «A la de tres, los dos guardamos. Uno, dos… tres.» Guarda la suya y espera.",
          B: "Renata baja la navaja unos centímetros. «A la de tres guardamos los dos. Uno, dos… tres.» Guarda la suya y se queda mirándote.",
          C: "Renata baja la navaja apenas. «A la de tres, los dos guardamos. Uno, dos… tres.» Guarda la suya y te observa, expectante.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Guardado. Perdón. ¿Me das queso ahora?", B: "Guardado. Perdona. ¿Ahora sí me das un poco de queso?", C: "Guardado. Disculpa. ¿Me concedes ahora un trozo de queso?" },
            reply: { A: "Renata corta el queso con su navaja. Te da un trozo. «Con mosto. Y sin cuchillos.»", B: "Renata corta el queso con su propia navaja y te ofrece un trozo. «Con mosto. Y sin cuchillos en la mesa.»", C: "Renata corta el queso con su navaja y te tiende un trozo. «Con mosto. Y sin cuchillos sobre la mesa.»" },
            mood: "smile", end: "cuchillo-queso",
          },
          {
            id: "no",
            say: { A: "No lo guardo. Guarda tú.", B: "No lo guardo. Guárdalo tú.", C: "No lo guardo; guárdalo tú." },
            reply: { A: "Renata saca la navaja otra vez. Silba. El portero del hotel llama a la policía.", B: "Renata vuelve a sacar la navaja y silba. El portero del hotel ya está llamando a la policía.", C: "Renata desenfunda de nuevo y silba. El portero del hotel marca a la policía sin dudar." },
            mood: "angry", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "renata", mood: "terror",
        line: {
          A: "Una mujer con delantal está en la puerta de una vinoteca. Ve tu pistola. Levanta las manos con una botella. «No, por favor. Toma la botella. Es la mejor. No me hagas nada.»",
          B: "Una sumiller con delantal granate se apoya en un barril. Ve la pistola en tu cintura y levanta las manos, botella incluida. «No, por favor. Llévate la botella. Es la mejor que tengo. Pero no me hagas nada.»",
          C: "Una sumiller de mirada experta repara en tu pistola y alza las manos con una botella en una de ellas. «No, por favor. Llévate la botella; es la mejor de la casa. Pero no me hagas nada.»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Baja las manos. No quiero nada. Perdón.", B: "Baja las manos, por favor. No quiero nada. Perdona.", C: "Baja las manos, por favor. No quiero nada; disculpa." },
            reply: { A: "La mujer baja la botella despacio. «Me llamo Renata. ¿Por qué llevas un arma a una vinoteca?»", B: "La sumiller baja la botella muy despacio. «Soy Renata. ¿Se puede saber por qué traes un arma a una vinoteca?»", C: "La sumiller baja la botella con cautela. «Soy Renata. ¿Por qué traes un arma a la puerta de una vinoteca?»" },
            mood: "scared", next: "pistola-botella",
          },
          {
            id: "seguridad",
            say: { A: "Es por seguridad. La calle es peligrosa.", B: "Es solo por seguridad. La calle es peligrosa de noche.", C: "Es una medida de seguridad; la calle, de noche, no perdona." },
            reply: { A: "La mujer entra en la vinoteca y cierra con llave. Por el cristal, la ves llamar.", B: "La sumiller entra en la vinoteca y cierra la puerta con llave. A través del cristal, la ves llamar por teléfono.", C: "La sumiller se refugia en la vinoteca y echa la llave. A través del cristal la ves llamar, sin apartar los ojos de ti." },
            mood: "terror", end: "pistola-patrulla",
          },
        ],
      },
      "pistola-botella": {
        who: "renata", mood: "worried",
        line: {
          A: "Renata deja la botella en el barril. «Guarda la pistola y te regalo la botella. Es de mi abuelo. Si no la guardas, llamo al portero del hotel.»",
          B: "Renata deja la botella sobre el barril. «Guarda la pistola y la botella es tuya, de regalo. Es del viñedo de mi abuelo. Si no la guardas, llamo al portero del hotel.»",
          C: "Renata posa la botella en el barril. «Guarda la pistola y te regalo la botella: es del viñedo de mi abuelo. Si no la guardas, aviso al portero del hotel.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. Gracias. Perdón otra vez.", B: "La guardo. Gracias, y perdón otra vez.", C: "La guardo. Gracias, y disculpa de nuevo." },
            reply: { A: "Renata te da la botella. «Para una noche sin pistolas. Vete, anda.»", B: "Renata te entrega la botella. «Para una noche sin pistolas. Anda, vete ya.»", C: "Renata te tiende la botella. «Para una noche sin pistolas. Anda, márchate.»" },
            mood: "worried", end: "pistola-regalo",
          },
          {
            id: "no",
            say: { A: "No la guardo. Dame la botella igual.", B: "No la guardo. Dame la botella de todas formas.", C: "No la guardo. Y dame la botella de todos modos." },
            reply: { A: "Renata grita: «¡Sebastián!» El portero ya está llamando.", B: "Renata grita hacia el hotel: «¡Sebastián!» El portero ya tiene el teléfono en la mano.", C: "Renata llama a gritos: «¡Sebastián!» El portero del hotel ya marca." },
            mood: "angry", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "renata", mood: "terror",
        line: {
          A: "Una mujer con delantal está en la puerta de una vinoteca. Ve tu granada. Corre adentro con la botella. Grita desde la puerta: «¡Lejos de las botellas! ¡Lejos!»",
          B: "Una sumiller con delantal granate se apoya en un barril. Ve la granada en tu mano, agarra una botella y corre adentro. Desde la puerta, grita: «¡Lejos de las botellas! ¡Hay vinos de cuarenta años!»",
          C: "Una sumiller de mirada experta repara en tu granada, agarra una botella y desaparece dentro de la vinoteca. Desde la puerta grita: «¡Aléjate de las botellas! ¡Hay vinos de cuarenta años ahí dentro!»",
        },
        options: [
          {
            id: "calma",
            say: { A: "¡Tranquila! No explota. ¿Me das mosto?", B: "¡Tranquila! No explota. ¿Me sirves un mosto igual?", C: "¡Tranquila! No explota. ¿Me servirías un mosto de todas formas?" },
            reply: { A: "Desde dentro: «¿Mosto? ¡Con eso en la mano, no! Guárdala y hablamos.»", B: "Desde dentro: «¿Mosto? ¡Con eso en la mano, ni agua! Guárdala y hablamos.»", C: "Desde el interior: «¿Mosto? ¡Con eso en la mano, ni agua del grifo! Guárdala y hablamos.»" },
            mood: "scared", next: "granada-barril",
          },
          {
            id: "broma",
            say: { A: "Es una broma. Mira, la lanzo al aire.", B: "Es una broma, mujer. Mira, la lanzo al aire.", C: "Es una broma. Mira: la lanzo al aire." },
            reply: { A: "Renata grita. El portero del hotel grita. Un helicóptero aparece sobre la calle.", B: "Renata grita desde dentro. El portero del hotel grita desde fuera. Sobre la calle aparece un helicóptero.", C: "Renata grita desde el interior; el portero del hotel, desde la acera. Un helicóptero asoma sobre la calle." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-barril": {
        who: "renata", mood: "scared",
        line: {
          A: "Renata asoma la cabeza. «Me llamo Renata. Guárdala en la mochila. Ya. Y luego te doy mosto. Lejos de los barriles.»",
          B: "Renata asoma la cabeza por la puerta. «Soy Renata. Guárdala en la mochila, ya. Después te sirvo un mosto. Pero lejos de los barriles.»",
          C: "Renata asoma apenas la cabeza. «Soy Renata. Guárdala en la mochila, ahora mismo. Luego te sirvo un mosto, lejos de los barriles.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Guardada. Mira. Ahora el mosto.", B: "Guardada, mira. Ahora el mosto, por favor.", C: "Guardada; compruébalo. Ahora, el mosto." },
            reply: { A: "Renata sale con un vaso. Te lo da desde lejos, con el brazo estirado. «Bebe rápido y vete.»", B: "Renata sale con un vaso de mosto y te lo da con el brazo estirado al máximo. «Bebe rápido y vete, por favor.»", C: "Renata sale con un vaso y te lo tiende con el brazo completamente extendido. «Bebe rápido y márchate.»" },
            mood: "worried", end: "granada-mosto",
          },
          {
            id: "no-se",
            say: { A: "No sé si explota. Mejor no la toco.", B: "No sé si explota. Prefiero no tocarla.", C: "No sé si explota. Prefiero no manipularla." },
            reply: { A: "Renata cierra la puerta con llave. Llama al portero. Un helicóptero aparece.", B: "Renata cierra la puerta con llave y llama al portero del hotel. Sobre la calle aparece un helicóptero.", C: "Renata echa la llave y avisa al portero del hotel. Un helicóptero asoma sobre la calle." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
    },
    ends: {
      "corazon-brindis": { text: { A: "Brindan con mosto. Las fotos del abuelo brillan en el escaparate.", B: "Brindan con mosto bajo la luz del escaparate. Las fotos del abuelo de Renata parecen brindar también.", C: "Brindan con mosto a la luz del escaparate. Las fotos del abuelo de Renata parecen sumarse al brindis." }, change: "luz", recap: "Brindaste con Renata por su abuelo." },
      "corazon-beso": { text: { A: "Renata te besa. Después se ríe. «Hoy es raro.» Enciende el escaparate.", B: "Renata te besa y luego se ríe, nerviosa. «Esta noche es rara.» Y enciende el escaparate.", C: "Renata te besa y ríe, nerviosa. «Esta noche es rara.» Luego enciende el escaparate." }, change: "beso", recap: "Renata te dio un beso en la puerta de la vinoteca." },
      "cuchillo-policia": { text: { A: "Llega la policía. Dos cuchillos sobre el barril. Renata explica lo del queso.", B: "Llega la policía y pone los dos cuchillos sobre el barril. Renata explica lo del queso con mucha dignidad.", C: "Llega un coche patrulla y los dos cuchillos acaban sobre el barril. Renata explica lo del queso con dignidad de sumiller." }, change: "policia", recap: "Tu cuchillo y la navaja de Renata terminaron con la policía." },
      "cuchillo-queso": { text: { A: "Comes queso con mosto. Renata guarda su navaja. Tú, la tuya… el tuyo.", B: "Comes queso con mosto en la puerta. Renata guarda su navaja y no vuelve a mencionar el cuchillo.", C: "Comes queso con mosto en la puerta de la vinoteca. Renata guarda su navaja y da el asunto por cerrado." }, change: "sonrie", recap: "Después del duelo de cuchillos, Renata te dio queso y mosto." },
      "pistola-patrulla": { text: { A: "Llega la policía. Renata mira desde dentro, con la botella abrazada.", B: "Llega la policía. Renata observa desde dentro de la vinoteca, con la botella abrazada.", C: "Llega un coche patrulla. Renata observa desde el interior, abrazada a su mejor botella." }, change: "policia", recap: "Tu pistola asustó a Renata y llegó la policía." },
      "pistola-regalo": { text: { A: "Te vas con la botella. Renata entra y cierra con llave.", B: "Te alejas con la botella del abuelo. Renata entra en la vinoteca y cierra con llave.", C: "Te alejas con la botella del abuelo. Renata entra y echa la llave sin mirarte." }, change: "se-va", recap: "Renata te regaló una botella a cambio de guardar la pistola." },
      "granada-helicoptero": { text: { A: "El helicóptero ilumina la vinoteca. Renata abraza una botella detrás del cristal.", B: "El helicóptero ilumina la vinoteca. Renata abraza una botella detrás del cristal, sin moverse.", C: "El foco del helicóptero baña la vinoteca. Renata, tras el cristal, abraza una botella de cuarenta años." }, change: "helicoptero", recap: "Tu granada asustó a Renata y trajo un helicóptero." },
      "granada-mosto": { text: { A: "Bebes el mosto rápido. Renata te mira desde la puerta. Te vas.", B: "Bebes el mosto de un trago. Renata te vigila desde la puerta hasta que te alejas.", C: "Bebes el mosto de un trago. Renata te vigila desde la puerta hasta perderte de vista." }, change: "se-va", recap: "Renata te sirvió un mosto con el brazo estirado por la granada." },
      mosto: { text: { A: "Renata te da un vaso de mosto. Está muy rico.", B: "Renata te sirve un vaso de mosto. Sabe a uva de verdad, dulce y fresca.", C: "Renata te sirve el mosto con la misma ceremonia que un gran reserva. Y, sorprendentemente, lo merece." }, change: "sonrie", recap: "Probaste el mosto de Renata en la vinoteca." },
      consejo: { text: { A: "Renata te escribe el nombre del vino en una tarjeta.", B: "Renata apunta el nombre del vino en una tarjeta. «Para una ocasión especial», dice.", C: "Renata te entrega una tarjeta con el nombre del vino. «Para cuando tengas algo que celebrar sin prisa.»" }, change: "sonrie", recap: "Renata te recomendó un vino para una ocasión especial." },
      paseo: { text: { A: "Renata vuelve a la vinoteca. Tú sigues paseando.", B: "Renata vuelve dentro de la vinoteca. Tú sigues tu paseo por el barrio.", C: "Renata vuelve a su barril y a su queso. Tú sigues paseando entre escaparates iluminados." }, change: "sigue", recap: "Pasaste junto a la vinoteca de Renata." },
      historia: { text: { A: "Renata enciende las luces del escaparate. Hay fotos de su abuelo.", B: "Renata enciende las luces del escaparate: ves fotos antiguas de su abuelo entre las viñas.", C: "Renata enciende el escaparate: entre las botellas hay una foto de su abuelo, sonriente, con las manos manchadas de uva." }, change: "luz", recap: "Renata te contó la historia del viñedo de su abuelo." },
    },
    speak: {
      A1: "¿Qué bebes en una cena especial?",
      A2: "¿Qué comida nueva probaste el mes pasado?",
      B1: "¿Qué haces cuando te ofrecen algo que no te apetece?",
      B2: "¿Qué recomendarías a un visitante para probar en tu país?",
      C1: "¿Cómo se rechaza una invitación sin parecer descortés?",
      C2: "¿Qué relación hay entre los sabores y la memoria familiar?",
    },
    variants: {
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿Con quién brindas?", B: "¿Por quién brindarías esta noche?", C: "¿Qué hace que una noche cualquiera se vuelva rara y espléndida?" } },
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Te gusta el queso?", B: "¿Qué harías si alguien respondiera a tu miedo con más miedo?", C: "¿Por qué dos personas asustadas se amenazan en vez de hablar?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué regalo te gusta recibir?", B: "¿Qué darías para que una situación peligrosa terminara?", C: "¿Se puede comprar la calma de alguien con un regalo?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Qué cosa cuidas mucho?", B: "¿Qué objeto protegerías primero en una emergencia?", C: "¿Qué revela sobre alguien lo primero que salva en un momento de pánico?" } },
    },
  },
  {
    id: "alto-galeria",
    kind: "rincon",
    district: "alto",
    title: "El cuadro del escaparate",
    verb: "MIRAR",
    goal: "Describir una imagen, interpretar y dar una opinión, y reaccionar ante la opinión de otra persona.",
    cast: [
      {
        id: "ulises", name: "Ulises", role: "Galerista",
        age: "adult", body: "m", build: "slim", height: 1.83,
        hair: "long", hairColor: "#77736e", skin: "#e9cdb5",
        top: "sweater", topColor: "#141414", bottom: "pants", bottomColor: "#141414",
        extras: ["glasses", "beard"], pose: "lean", props: ["gallery-window", "painting"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "ulises", mood: "neutral",
        line: {
          A: "En el escaparate de una galería hay un cuadro negro con un punto amarillo. Un hombre con gafas sale. «Buenas noches. ¿Qué ves en este cuadro?»",
          B: "En el escaparate iluminado de una galería cuelga un cuadro enorme: todo negro, salvo un pequeño punto amarillo. Un hombre de jersey negro sale a la puerta. «¿Qué ves tú en él?»",
          C: "En la galería, un lienzo inmenso y negro, interrumpido solo por un punto amarillo en una esquina. Un hombre de jersey negro sale, cruza los brazos. «Dime con sinceridad: ¿qué ves?»",
        },
        options: [
          {
            id: "sincero",
            say: { A: "Veo un punto amarillo. Nada más.", B: "Sinceramente, veo un punto amarillo en un fondo negro.", C: "Con toda sinceridad: un punto amarillo perdido en mucha oscuridad." },
            reply: { A: "El hombre sonríe. «¡Bien! Eso es. Me llamo Ulises.»", B: "El hombre asiente, satisfecho. «Exacto. La mayoría inventa cosas. Tú no. Soy Ulises.»", C: "«Perdido», repite el hombre. «Has dicho más de lo que crees. Soy Ulises.»" },
            mood: "smile", next: "opinion",
          },
          {
            id: "creativo",
            say: { A: "Veo una ventana con luz en la noche.", B: "Veo una ventana encendida en una ciudad dormida.", C: "Veo la última ventana despierta de una ciudad que ya se ha rendido al sueño." },
            reply: { A: "El hombre abre los ojos. «¡Sí! Me llamo Ulises. Tú entiendes el arte.»", B: "El hombre se emociona. «¡Eso es! Soy Ulises. Llevo un mes esperando que alguien diga eso.»", C: "El hombre se lleva la mano al pecho. «Soy Ulises. Y acabas de describir el cuadro mejor que el catálogo.»" },
            mood: "love", end: "luz",
          },
          {
            id: "broma",
            say: { A: "Veo que el pintor no tiene mucha pintura amarilla.", B: "Veo que al pintor se le acabó la pintura amarilla.", C: "Veo un pintor con un presupuesto muy ajustado en amarillo." },
            reply: { A: "El hombre no se ríe. «Mmm. Me llamo Ulises. ¿Y qué piensas del negro?»", B: "El hombre no se ríe mucho. «Ya. Soy Ulises. ¿Y del negro no tienes nada que decir?»", C: "El hombre arquea una ceja. «Ingenioso. Soy Ulises. ¿Y el negro también te parece un problema de presupuesto?»" },
            mood: "angry", next: "opinion",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted mira el cuadro con mucho cariño. ¿Por qué?", B: "Mira el cuadro con mucho cariño. ¿Es especial para usted?", C: "Lo mira usted como se mira a un hijo. ¿Me equivoco?" },
            reply: { A: "El hombre sonríe. «Me llamo Ulises. Yo pinté este cuadro. Nadie lo compra.»", B: "El hombre suspira. «Soy Ulises. Lo pinté yo, la noche que nació mi hija. Nadie lo entiende.»", C: "El hombre sonríe con tristeza. «Ulises. Lo pinté la noche que nació mi hija: todo oscuro y, de pronto, ella.»" },
            mood: "love", end: "luz",
          },
          lapiz: {
            act: { A: "Sacas el lápiz y dibujas un punto en un papel.", B: "Sacas el lápiz y dibujas tu propia versión en un papel.", C: "Sacas el lápiz y haces un boceto de tu propia versión." },
            say: { A: "Mire: mi cuadro. ¡Es igual!", B: "Mire, yo también puedo hacer arte moderno.", C: "Mi versión. ¿Cuánto me daría por ella?" },
            reply: { A: "El hombre se ríe. «¡Es muy bueno! Me llamo Ulises.»", B: "El hombre mira tu papel y se ríe, a su pesar. «No está mal. Soy Ulises. ¿Y qué ves tú en el mío?»", C: "El hombre examina tu boceto. «Nada. Pero me has hecho reír, y eso tiene su mérito. Soy Ulises. ¿Qué ves en el mío?»" },
            mood: "smile", next: "opinion",
          },
        },
      },
      opinion: {
        who: "ulises", mood: "neutral",
        line: {
          A: "Ulises mira el cuadro. «Se llama Medianoche. ¿Te gusta o no?»",
          B: "Ulises señala la placa: «Medianoche». «Ahora que sabes el título, ¿te gusta o no?»",
          C: "Ulises señala la placa: «Medianoche». «¿Cambia algo el título? ¿Te gusta, o solo lo toleras?»",
        },
        options: [
          {
            id: "gusta",
            say: { A: "Ahora sí me gusta. Es la luna, ¿no?", B: "Con el título, me gusta más. ¿El punto es la luna?", C: "El título lo cambia todo. ¿El punto es la luna, o alguien que no duerme?" },
            reply: { A: "Ulises sonríe. «Tú decides. Eso es el arte.»", B: "Ulises sonríe, contento. «Puede ser. Cada persona ve algo distinto.»", C: "Ulises sonríe, encantado. «Las dos cosas. O ninguna. Por eso lo pinté así.»" },
            mood: "smile", end: "luz",
          },
          {
            id: "no-gusta",
            say: { A: "Lo siento. No me gusta mucho.", B: "Lo siento, pero no me gusta. Prefiero el arte más clásico.", C: "Le seré franco: no me dice nada. Soy más de cuadros con caras." },
            reply: { A: "Ulises se cruza de brazos. «Bueno. Buenas noches.» Entra en la galería.", B: "Ulises se pone serio. «Respeto tu opinión. Buenas noches.» Y cierra la puerta.", C: "Ulises aprieta los labios. «Las caras están en el museo de enfrente. Buenas noches.» Y cierra la puerta." },
            mood: "angry", end: "ofendido",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "No entiendo el arte, pero me gusta hablar con usted.", B: "No sé mucho de arte, pero me encanta cómo habla usted de él.", C: "No sé si entiendo el cuadro, pero entiendo que a usted le importa muchísimo." },
            reply: { A: "Ulises se ríe. «Gracias. Lo pinté yo, ¿sabes?» Enciende la luz del escaparate.", B: "Ulises sonríe por fin. «Lo pinté yo. Eres la primera persona que me pregunta algo.» Y enciende más luces.", C: "Ulises baja los brazos. «Lo pinté yo. Y sí, me importa demasiado.» Enciende todas las luces del escaparate." },
            mood: "love", end: "luz",
          },
        },
      },
      "corazon-inicio": {
        who: "ulises", mood: "love",
        line: {
          A: "En el escaparate de una galería hay un cuadro negro con un punto amarillo. Un hombre con gafas sale, ve el corazón y se le suaviza la cara. «Hola. A ti sí te lo cuento: ese cuadro lo pinté yo. La noche que nació mi hija.»",
          B: "En el escaparate iluminado de una galería cuelga un cuadro enorme: negro, con un punto amarillo. Un hombre de jersey negro sale, ve el corazón y baja los brazos. «Hola. A ti te lo voy a contar: ese cuadro lo pinté yo, la noche que nació mi hija.»",
          C: "En la galería, un lienzo inmenso y negro con un solo punto amarillo. Un hombre de jersey negro sale, ve el corazón y la guardia se le cae. «Hola. A ti te lo cuento: ese cuadro lo pinté yo, la noche en que nació mi hija.»",
        },
        options: [
          {
            id: "hija",
            say: { A: "¿El punto es su hija?", B: "¿Entonces el punto amarillo es su hija?", C: "¿El punto amarillo es, entonces, su hija?" },
            reply: { A: "El hombre sonríe. «Me llamo Ulises. Sí. Todo oscuro y, de pronto, ella. Nadie lo entiende.»", B: "El hombre sonríe, conmovido. «Soy Ulises. Sí. Todo estaba oscuro y, de pronto, ella. Nadie lo ha entendido nunca.»", C: "El hombre sonríe con los ojos húmedos. «Ulises. Sí. Todo era oscuridad y, de pronto, ella. Nadie lo ha entendido jamás.»" },
            mood: "love", next: "corazon-hija",
          },
          {
            id: "gracias",
            say: { A: "Gracias por contármelo. ¿Cómo se llama su hija?", B: "Gracias por contármelo. ¿Cómo se llama su hija?", C: "Gracias por confiármelo. ¿Cómo se llama su hija?" },
            reply: { A: "El hombre se emociona. «Luz. Se llama Luz. Me llamo Ulises. Nadie me pregunta por ella.»", B: "El hombre se emociona de golpe. «Luz. Se llama Luz. Yo soy Ulises. Nadie me pregunta nunca por ella.»", C: "El hombre se emociona sin esperarlo. «Luz. Se llama Luz. Soy Ulises. Nadie me pregunta nunca por ella.»" },
            mood: "love", next: "corazon-hija",
          },
        ],
      },
      "corazon-hija": {
        who: "ulises", mood: "smile",
        line: {
          A: "Ulises mira el cuadro. «Luz tiene cinco años. Vive con su madre. El cuadro se llama Medianoche, pero debería llamarse Luz. ¿Cambio el nombre?»",
          B: "Ulises mira el cuadro un buen rato. «Luz tiene cinco años y vive con su madre. El cuadro se llama Medianoche, pero debería llamarse Luz. ¿Le cambio el nombre?»",
          C: "Ulises contempla el lienzo largamente. «Luz tiene cinco años y vive con su madre. El cuadro se titula Medianoche, pero debería llamarse Luz. ¿Le cambio el título?»",
        },
        options: [
          {
            id: "si",
            say: { A: "Sí. Llámelo Luz. Y llame a Luz.", B: "Sí, llámelo Luz. Y llame a Luz, también.", C: "Sí: llámelo Luz. Y, de paso, llame a Luz." },
            reply: { A: "Ulises se ríe y llora a la vez. Cambia la placa. Enciende todas las luces del escaparate.", B: "Ulises se ríe y llora al mismo tiempo. Cambia la placa con un rotulador. Enciende todas las luces del escaparate.", C: "Ulises ríe y llora a la vez. Corrige la placa con un rotulador y enciende todas las luces del escaparate." },
            mood: "love", end: "corazon-luz",
          },
          {
            id: "abrazo",
            say: { A: "Primero un abrazo, Ulises. Después el cuadro.", B: "Primero un abrazo, Ulises. Luego hablamos del cuadro.", C: "Primero un abrazo, Ulises. Del cuadro hablamos después." },
            reply: { A: "Ulises te abraza. Huele a pintura. «Gracias. Nadie me abraza en esta calle.»", B: "Ulises te abraza; huele a pintura y a café. «Gracias. En esta calle nadie abraza a nadie.»", C: "Ulises te abraza; huele a óleo y a café frío. «Gracias. En esta calle los abrazos no se estilan.»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "cuchillo-inicio": {
        who: "ulises", mood: "terror",
        line: {
          A: "En el escaparate de una galería hay un cuadro negro con un punto amarillo. Un hombre con gafas sale, ve tu cuchillo y se pone delante del cristal con los brazos abiertos. «¡El cuadro no! ¡Lo que quieras, pero el cuadro no!»",
          B: "En el escaparate iluminado de una galería cuelga un cuadro enorme: negro, con un punto amarillo. Un hombre de jersey negro sale, ve el cuchillo y se planta delante del cristal con los brazos abiertos. «¡El cuadro no! ¡Llévate lo que quieras, pero el cuadro no!»",
          C: "En la galería, un lienzo inmenso y negro con un punto amarillo. Un hombre de jersey negro sale, ve tu cuchillo y se interpone ante el cristal con los brazos en cruz. «¡El cuadro no! ¡Lo que quieras, pero el cuadro no!»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Tranquilo. No quiero su cuadro. Lo guardo.", B: "Tranquilo, no quiero su cuadro. Lo guardo ahora mismo.", C: "Calma. No tengo interés en su cuadro. Lo guardo." },
            reply: { A: "El hombre no se mueve del cristal. «Me llamo Ulises. Ese cuadro es mi hija. Guárdalo del todo y hablamos.»", B: "El hombre no se aparta del cristal. «Soy Ulises. Ese cuadro es mi hija, en cierto modo. Guárdalo del todo y hablamos.»", C: "El hombre sigue pegado al cristal. «Soy Ulises. Ese cuadro es mi hija, a su manera. Guárdalo del todo y hablamos.»" },
            mood: "worried", next: "cuchillo-marco",
          },
          {
            id: "broma",
            say: { A: "¿Un cuadro negro? Con un corte sería más interesante.", B: "¿Un cuadro negro? Con un corte, sería más interesante.", C: "¿Un cuadro negro? Un corte lo haría mucho más interesante." },
            reply: { A: "El hombre grita: «¡Sebastián! ¡Policía!» El portero del hotel cruza la calle.", B: "El hombre grita hacia el hotel: «¡Sebastián! ¡Policía!» El portero cruza la calle corriendo.", C: "El hombre grita hacia el hotel: «¡Sebastián! ¡La policía!» El portero cruza la calle a la carrera." },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-marco": {
        who: "ulises", mood: "worried",
        line: {
          A: "Ulises respira. Señala un paquete en la puerta. «Hay un cuadro nuevo con cuerdas. No tengo nada para cortarlas. ¿Me ayudas? Con cuidado. Muy cerca de mí.»",
          B: "Ulises respira por fin y señala un paquete junto a la puerta. «Hay un cuadro nuevo atado con cuerdas y no tengo nada para cortarlas. ¿Me ayudas? Con cuidado y a la vista.»",
          C: "Ulises exhala y señala un paquete en la entrada. «Hay un cuadro nuevo atado con cuerdas y no tengo con qué cortarlas. ¿Me ayudas? Con cuidado y sin perderte de vista.»",
        },
        options: [
          {
            id: "cortar",
            say: { A: "Claro. Corto las cuerdas. Nada más.", B: "Claro. Corto las cuerdas y nada más.", C: "Por supuesto. Las cuerdas y nada más." },
            reply: { A: "Cortas las cuerdas. Ulises desenvuelve otro cuadro negro con un punto. «Es la hermana.» Sonríe.", B: "Cortas las cuerdas con cuidado. Ulises desenvuelve otro cuadro negro con un punto amarillo. «Es su hermana», dice, y sonríe por fin.", C: "Cortas las cuerdas con cuidado. Ulises desenvuelve otro lienzo negro con un punto amarillo. «Su hermana», dice, y sonríe al fin." },
            mood: "smile", end: "cuchillo-hermana",
          },
          {
            id: "no",
            say: { A: "No. Mejor me voy. Perdón por el susto.", B: "No, mejor me voy. Perdone el susto.", C: "No; mejor me retiro. Disculpe el susto." },
            reply: { A: "Ulises asiente. «Gracias por irte.» Cierra la galería con llave. Y llama a alguien.", B: "Ulises asiente. «Gracias por irte, de verdad.» Cierra la galería con llave y hace una llamada.", C: "Ulises asiente. «Te agradezco que te vayas.» Cierra con llave y hace una llamada." },
            mood: "worried", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "ulises", mood: "terror",
        line: {
          A: "En el escaparate de una galería hay un cuadro negro con un punto amarillo. Un hombre con gafas sale, ve tu pistola y levanta las manos. «No, por favor. Llévate el cuadro. Nadie lo compra. Pero no dispares.»",
          B: "En el escaparate iluminado de una galería cuelga un cuadro enorme: negro, con un punto amarillo. Un hombre de jersey negro sale, ve la pistola y levanta las manos. «No, por favor. Llévate el cuadro, nadie lo compra. Pero no dispares.»",
          C: "En la galería, un lienzo inmenso y negro con un punto amarillo. Un hombre de jersey negro sale, ve tu pistola y alza las manos. «No, por favor. Llévate el cuadro; nadie lo compra de todos modos. Pero no dispares.»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Baje las manos. No quiero el cuadro. ¿Qué es?", B: "Baje las manos. No quiero su cuadro. ¿Qué representa?", C: "Baje las manos. No quiero el cuadro. ¿Qué representa?" },
            reply: { A: "El hombre baja las manos despacio. «Me llamo Ulises. Es… una ventana. ¿Por qué llevas un arma?»", B: "El hombre baja las manos muy despacio. «Soy Ulises. Es… una ventana encendida. ¿Y por qué llevas tú un arma?»", C: "El hombre baja las manos con cautela. «Soy Ulises. Es… una ventana encendida. ¿Y por qué llevas un arma?»" },
            mood: "scared", next: "pistola-cuadro",
          },
          {
            id: "seguridad",
            say: { A: "Es por seguridad. La calle es peligrosa.", B: "Es solo por seguridad. La calle es peligrosa de noche.", C: "Es una medida de seguridad; la calle, de noche, no perdona." },
            reply: { A: "El hombre entra en la galería y cierra. Por el cristal lo ves llamar.", B: "El hombre entra en la galería y cierra la puerta con llave. A través del cristal lo ves llamar por teléfono.", C: "El hombre se encierra en la galería. A través del cristal lo ves llamar, sin dejar de mirarte." },
            mood: "terror", end: "pistola-patrulla",
          },
        ],
      },
      "pistola-cuadro": {
        who: "ulises", mood: "worried",
        line: {
          A: "Ulises mira la pistola y el cuadro. «Guárdala y te regalo el cuadro. Nadie lo compra. Si no la guardas, llamo al portero.»",
          B: "Ulises mira la pistola, luego el cuadro. «Guárdala y te regalo el cuadro. Total, nadie lo compra. Si no la guardas, llamo al portero del hotel.»",
          C: "Ulises alterna la mirada entre la pistola y el cuadro. «Guárdala y el cuadro es tuyo; nadie lo compra, de todos modos. Si no la guardas, aviso al portero del hotel.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. Pero el cuadro es suyo. Quédeselo.", B: "La guardo. Pero el cuadro es suyo; quédeselo.", C: "La guardo. Pero el cuadro es suyo; consérvelo." },
            reply: { A: "Ulises respira. «Gracias. Es mi hija, en realidad. El punto.» Enciende un foco.", B: "Ulises respira por fin. «Gracias. El punto es mi hija, en realidad.» Y enciende un foco sobre el cuadro.", C: "Ulises respira. «Gracias. El punto es mi hija, en realidad.» Enciende un foco sobre el lienzo." },
            mood: "smile", end: "pistola-foco",
          },
          {
            id: "no",
            say: { A: "No la guardo. Dame el cuadro.", B: "No la guardo. Dame el cuadro.", C: "No la guardo. Y el cuadro me lo llevo." },
            reply: { A: "Ulises grita: «¡Sebastián!» Un coche de policía dobla la esquina.", B: "Ulises grita hacia el hotel: «¡Sebastián!» Un coche de policía ya dobla la esquina.", C: "Ulises grita hacia el hotel: «¡Sebastián!» Un coche patrulla dobla la esquina." },
            mood: "angry", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "ulises", mood: "laugh",
        line: {
          A: "En el escaparate de una galería hay un cuadro negro con un punto amarillo. Un hombre con gafas sale, ve tu granada y se ríe. «¡Eso! ¡Eso es lo que le falta a mi exposición! ¿Me la prestas?»",
          B: "En el escaparate iluminado de una galería cuelga un cuadro enorme: negro, con un punto amarillo. Un hombre de jersey negro sale, ve la granada y se ríe a carcajadas. «¡Eso! ¡Eso es exactamente lo que le falta a mi exposición! ¿Me la prestas?»",
          C: "En la galería, un lienzo inmenso y negro con un punto amarillo. Un hombre de jersey negro sale, ve tu granada y estalla en carcajadas. «¡Eso! ¡Justo lo que le faltaba a mi exposición! ¿Me la prestas?»",
        },
        options: [
          {
            id: "prestar",
            say: { A: "¿Prestarla? ¿Para qué?", B: "¿Prestársela? ¿Para qué exactamente?", C: "¿Prestársela? ¿Con qué fin, exactamente?" },
            reply: { A: "El hombre la mira de cerca. «Junto al cuadro. Medianoche y Peligro. ¿Es de verdad?» Deja de reír.", B: "El hombre se acerca a mirarla. «La pongo junto al cuadro: Medianoche y Peligro. Espera… ¿es de verdad?» Deja de reírse.", C: "El hombre se acerca para examinarla. «La coloco junto al cuadro: Medianoche y Peligro. Un momento… ¿es real?» La risa se le corta." },
            mood: "worried", next: "granada-expo",
          },
          {
            id: "broma",
            say: { A: "Es arte. Mire, la lanzo al aire.", B: "Es arte, claro. Mire, la lanzo al aire.", C: "Es arte, por supuesto. Observe: la lanzo al aire." },
            reply: { A: "El hombre grita y entra en la galería. El portero del hotel grita. Un helicóptero aparece.", B: "El hombre grita y se encierra en la galería. El portero del hotel grita. Sobre la calle aparece un helicóptero.", C: "El hombre grita y se refugia en la galería. El portero del hotel grita. Un helicóptero asoma sobre la calle." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-expo": {
        who: "ulises", mood: "worried",
        line: {
          A: "Ulises retrocede un paso. «Me llamo Ulises. Si es de verdad, no la quiero. Si es falsa, la quiero mucho. ¿Cuál es?»",
          B: "Ulises retrocede un paso, sin dejar de mirarla. «Soy Ulises. Si es de verdad, no la quiero ni ver. Si es falsa, la quiero muchísimo. ¿Cuál de las dos?»",
          C: "Ulises da un paso atrás sin apartar la vista. «Soy Ulises. Si es real, no la quiero ni cerca. Si es falsa, la quiero con pasión. ¿Cuál es el caso?»",
        },
        options: [
          {
            id: "falsa",
            say: { A: "Es falsa. Es suya. Para la exposición.", B: "Es falsa. Quédesela para la exposición.", C: "Es falsa. Se la cedo para la exposición." },
            reply: { A: "Ulises la pone en el escaparate junto al cuadro. Enciende un foco. «Medianoche y Peligro. Perfecto.»", B: "Ulises la coloca en el escaparate, junto al cuadro, y enciende un foco. «Medianoche y Peligro. Es perfecto.»", C: "Ulises la instala en el escaparate junto al lienzo y enciende un foco. «Medianoche y Peligro. Perfecto.»" },
            mood: "smile", end: "granada-escaparate",
          },
          {
            id: "no-se",
            say: { A: "No sé. Nadie lo sabe.", B: "No lo sé. Nadie quiere averiguarlo.", C: "No lo sé; nadie se ha atrevido a comprobarlo." },
            reply: { A: "Ulises entra en la galería y cierra. Llama al portero. Un helicóptero aparece.", B: "Ulises se encierra en la galería y llama al portero del hotel. Sobre la calle aparece un helicóptero.", C: "Ulises se encierra en la galería y avisa al portero del hotel. Un helicóptero asoma sobre la calle." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
    },
    ends: {
      "corazon-luz": { text: { A: "La placa dice ahora «Luz». Ulises llama a su hija desde la puerta.", B: "La placa dice ahora «Luz». Ulises marca el número de su hija desde la puerta de la galería.", C: "La placa reza ahora «Luz». Ulises marca el número de su hija desde la puerta de la galería." }, change: "luz", recap: "Ulises cambió el nombre de su cuadro por el de su hija." },
      "corazon-abrazo": { text: { A: "Ulises te abraza delante del cuadro. El punto amarillo brilla.", B: "Ulises te abraza delante del escaparate. El punto amarillo parece brillar más.", C: "Ulises te abraza frente al escaparate. El punto amarillo parece brillar con más fuerza." }, change: "abraza", recap: "Ulises, el galerista, te abrazó gracias a tu corazón." },
      "cuchillo-policia": { text: { A: "Llega la policía. Ulises explica que el cuadro es su hija. Nadie entiende.", B: "Llega la policía. Ulises explica que el cuadro es su hija. Los agentes no entienden nada.", C: "Llega un coche patrulla. Ulises explica que el cuadro es su hija; los agentes no entienden nada." }, change: "policia", recap: "Ulises vio tu cuchillo y temió por su cuadro." },
      "cuchillo-hermana": { text: { A: "Dos cuadros negros en el escaparate. Ulises enciende un foco. Tú guardas el cuchillo.", B: "Dos cuadros negros con un punto cuelgan ahora en el escaparate. Ulises enciende un foco. Guardas el cuchillo.", C: "Dos lienzos negros con un punto amarillo cuelgan ahora en el escaparate. Ulises enciende un foco; tú guardas el cuchillo." }, change: "luz", recap: "Cortaste las cuerdas del nuevo cuadro de Ulises." },
      "pistola-patrulla": { text: { A: "Llega la policía. Ulises mira desde dentro. El punto amarillo también.", B: "Llega la policía. Ulises observa desde dentro de la galería. El punto amarillo, también.", C: "Llega un coche patrulla. Ulises observa desde el interior de la galería; el punto amarillo, también." }, change: "policia", recap: "Tu pistola asustó a Ulises y llegó la policía." },
      "pistola-foco": { text: { A: "El foco ilumina el punto amarillo. Ulises no te mira. Mira a su hija.", B: "El foco ilumina el punto amarillo. Ulises no te mira a ti; mira a su hija.", C: "El foco enciende el punto amarillo. Ulises ya no te mira; mira a su hija." }, change: "luz", recap: "Guardaste la pistola y Ulises te habló de su hija." },
      "granada-helicoptero": { text: { A: "El helicóptero ilumina la galería. El punto amarillo brilla más que nunca.", B: "El helicóptero ilumina la galería entera. El punto amarillo brilla más que nunca.", C: "El foco del helicóptero inunda la galería. El punto amarillo brilla como nunca." }, change: "helicoptero", recap: "Tu granada trajo un helicóptero a la galería de Ulises." },
      "granada-escaparate": { text: { A: "Tu granada está en el escaparate. Ulises pone una placa: «Peligro».", B: "Tu granada reposa en el escaparate, junto al cuadro. Ulises coloca una placa: «Peligro».", C: "Tu granada descansa en el escaparate junto al lienzo. Ulises coloca una placa: «Peligro»." }, change: "luz", recap: "Tu granada se convirtió en parte de la exposición de Ulises." },
      luz: { text: { A: "Ulises enciende una luz. El punto amarillo brilla mucho.", B: "Ulises enciende un foco sobre el cuadro. De pronto, el punto amarillo parece brillar de verdad.", C: "Ulises enciende un foco y el punto amarillo cobra vida. Por un momento, el cuadro entero respira." }, change: "luz", recap: "Interpretaste un cuadro extraño con Ulises, el galerista." },
      ofendido: { text: { A: "Ulises cierra la puerta. Está un poco enojado.", B: "Ulises cierra la galería, un poco ofendido. Desde fuera, el punto amarillo te sigue mirando.", C: "Ulises cierra con un golpe seco. El punto amarillo, impasible, sigue brillando en la oscuridad." }, change: "enojado", recap: "Le diste tu opinión sincera a Ulises y no le gustó." },
    },
    speak: {
      A1: "¿Qué colores te gustan?",
      A2: "¿Qué museo o exposición visitaste?",
      B1: "¿Qué tipo de arte te gusta y por qué?",
      B2: "¿Qué piensas cuando ves una obra que no entiendes?",
      C1: "¿Qué diferencia hay entre entender una obra de arte y sentirla?",
      C2: "¿En qué medida el significado de una obra depende de quien la mira?",
    },
    variants: {
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿Tienes una foto favorita?", B: "¿Qué obra o foto representa a alguien que quieres?", C: "¿Qué nombre le pondrías al cuadro de tu vida?" } },
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué objeto cuidas más?", B: "¿Qué protegerías con tu cuerpo si alguien lo amenazara?", C: "¿Qué convierte un objeto en algo irremplazable?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué cuadro te gusta?", B: "¿Qué regalarías para que alguien dejara de tener miedo?", C: "¿Qué dice de una obra que su autor la regale para salvarse?" } },
      granada: { start: "granada-inicio", fx: "risa", speak: { A: "¿Qué cosa rara viste en un museo?", B: "¿Qué objeto absurdo pondrías en una exposición?", C: "¿Dónde está el límite entre el arte y el peligro?" } },
    },
  },
  {
    id: "alto-balcon",
    kind: "rincon",
    district: "alto",
    title: "Un saludo desde el balcón",
    verb: "SALUDAR",
    goal: "Saludar a alguien conocido, preguntar cómo está, reaccionar ante una sorpresa y bromear con confianza.",
    requires: "gustavo-hotel",
    cast: [
      {
        id: "gustavo", name: "Gustavo", role: "Invitado de la boda, en un balcón del hotel",
        age: "adult", body: "m", build: "average", height: 1.8,
        hair: "short", hairColor: "#3a2e26", skin: "#e8c4a0",
        top: "suit", topColor: "#2b3550", bottom: "pants", bottomColor: "#2b3550",
        extras: ["scarf"], pose: "balcony", props: ["hotel-balcony"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "gustavo", mood: "smile",
        line: {
          A: "Desde un balcón del Hotel Imperial, alguien te saluda. ¡Es Gustavo, el chico de la boda! «¡Eh! ¡Tú! ¡Gracias por ayudarme!»",
          B: "Desde un balcón del Hotel Imperial, un hombre agita la bufanda. Es Gustavo, el invitado que ayudaste en el Barrio Viejo. «¡Eh! ¡Mi salvador! ¡Llegué al hotel gracias a ti!»",
          C: "Un hombre agita la bufanda desde un balcón del Imperial como si despidiera un barco. Es Gustavo, tu invitado perdido del Barrio Viejo. «¡Eh, ahí abajo! ¡Mi héroe! ¡Llegué sano, salvo y casi digno!»",
        },
        options: [
          {
            id: "como",
            say: { A: "¡Hola, Gustavo! ¿Cómo estás ahora?", B: "¡Gustavo! ¿Qué tal estás? ¿Ya te sientes mejor?", C: "¡Gustavo! Te veo mucho más vertical que antes. ¿Cómo va eso?" },
            reply: { A: "Gustavo levanta un vaso. «¡Muy bien! Ahora bebo agua. Mucha agua.»", B: "Gustavo levanta un vaso. «¡Mucho mejor! Ahora solo bebo agua. Mi hermana me vigila.»", C: "Gustavo alza un vaso con solemnidad. «Agua. Exclusivamente agua. Mi hermana me ha puesto un guardaespaldas: ella misma.»" },
            mood: "smile", next: "hermana",
          },
          {
            id: "broma",
            say: { A: "¡Cuidado en el balcón, Gustavo!", B: "¡Ten cuidado en ese balcón! No quiero rescatarte otra vez.", C: "¡No te asomes tanto! Mi servicio de rescate cierra a medianoche." },
            reply: { A: "Gustavo se ríe. «¡Tranquilidad! Ya estoy bien. ¡Es la boda de mi hermana!»", B: "Gustavo se ríe a carcajadas. «¡No hace falta! Ya estoy bien. ¿Sabes? ¡La boda es de mi hermana!»", C: "Gustavo se ríe tanto que tiene que agarrarse a la barandilla. «Prometido. Además, hoy no puedo fallar: la novia es mi hermana.»" },
            mood: "smile", next: "hermana",
          },
          {
            id: "boda",
            say: { A: "¿Qué tal la boda?", B: "¿Qué tal la boda? ¿Llegaste a tiempo?", C: "¿Y la boda? ¿Llegaste antes del brindis o después del drama?" },
            reply: { A: "«¡Llegué a tiempo! Y mira: ¡es la boda de mi hermana!»", B: "«¡Justo a tiempo para el baile!», dice Gustavo. «Y menos mal: la novia es mi hermana.»", C: "«Llegué entre el brindis y el drama», confiesa Gustavo. «Lo cual, siendo la boda de mi hermana, fue un milagro.»" },
            mood: "smile", next: "hermana",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "¡Me alegro mucho de verte bien, Gustavo!", B: "¡Qué alegría verte tan bien, Gustavo! Me quedé preocupado.", C: "Gustavo, verte ahí arriba, entero y feliz, me arregla la noche." },
            reply: { A: "Gustavo se emociona. «¡Gracias! Mi hermana quiere conocerte. ¡Espera!»", B: "Gustavo se lleva la mano al pecho. «¡Gracias! Le conté todo a mi hermana, la novia. ¡Quiere conocerte!»", C: "Gustavo se emociona. «Eres un buen tipo. Le he contado a mi hermana, la novia, que me salvó un desconocido. Quiere verte.»" },
            mood: "love", end: "novia",
          },
          libro: {
            act: { A: "Levantas tu libro.", B: "Le enseñas tu libro desde abajo.", C: "Levantas tu libro, a modo de saludo literario." },
            say: { A: "¡Gustavo! ¿Quieres un libro para dormir?", B: "¿Quieres algo para leer antes de dormir? Te lo lanzo.", C: "¿Te lanzo algo de lectura para la resaca de mañana?" },
            reply: { A: "Gustavo se ríe. «¡No, gracias! Hoy no duermo. ¡Es la boda de mi hermana!»", B: "Gustavo se ríe. «¡Hoy no se duerme! Es la boda de mi hermana. Bueno… la boda de mi hermana y mi gran vergüenza.»", C: "«Hoy no hay resaca permitida», dice Gustavo. «Es la boda de mi hermana y ya di bastante espectáculo.»" },
            mood: "smile", next: "hermana",
          },
        },
      },
      hermana: {
        who: "gustavo", mood: "smile",
        line: {
          A: "Gustavo está contento. «Mi hermana se casa hoy. ¡Y yo estaba perdido! ¡Qué vergüenza!»",
          B: "Gustavo se apoya en la barandilla. «Mi hermana se casa hoy y yo, perdido por el barrio. Si no es por ti, me pierdo el baile.»",
          C: "Gustavo apoya los codos en la barandilla. «Mi hermana se casa y yo, el padrino, me pierdo por el Barrio Viejo. Si no llegas a aparecer, me deshereda.»",
        },
        options: [
          {
            id: "felicitar",
            say: { A: "¡Felicidades a tu hermana!", B: "¡Felicita a tu hermana de mi parte!", C: "Dile a tu hermana que le deseo toda la felicidad del mundo." },
            reply: { A: "Gustavo baila en el balcón. «¡Sí! ¡Viva la novia!»", B: "Gustavo se pone a bailar en el balcón. «¡Se lo digo ahora mismo! ¡Viva la novia!»", C: "Gustavo improvisa un baile en el balcón. «¡Mensaje recibido! ¡Vivan los novios y vivan los desconocidos amables!»" },
            mood: "smile", end: "baila",
          },
          {
            id: "consejo",
            say: { A: "Bebe agua y baila mucho.", B: "Ahora disfruta, pero bebe mucha agua, ¿eh?", C: "Disfruta, pero sigue con el agua. Una aventura por noche es suficiente." },
            reply: { A: "Gustavo levanta el vaso. «¡Sí, señor! Agua y baile.»", B: "Gustavo levanta el vaso de agua como en un brindis. «¡Prometido! Agua y baile.»", C: "Gustavo levanta el vaso de agua. «Por las aventuras: una por noche, y con final feliz.»" },
            mood: "smile", end: "saludo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Eres un buen hermano, Gustavo.", B: "Se nota que quieres mucho a tu hermana, Gustavo.", C: "Para haberte perdido, se nota que no te perderías esta boda por nada." },
            reply: { A: "Gustavo se emociona. «Sí. Ella me cuidó toda la vida. Espera, ¡la llamo!»", B: "Gustavo se emociona. «Me cuidó cuando éramos pequeños. Hoy quería cuidarla yo… ¡Espera, la llamo!»", C: "A Gustavo se le humedecen los ojos. «Me crió ella, ¿sabes? Hoy me tocaba estar a la altura. Espera, que te la presento.»" },
            mood: "love", end: "novia",
          },
        },
      },
      "corazon-inicio": {
        who: "gustavo", mood: "love",
        line: {
          A: "Desde un balcón del Hotel Imperial, Gustavo te saluda. Ve el corazón y se lleva la mano al pecho. «¡Mi salvador! ¡Y encima con ese brillo! ¡Espera, no te muevas!»",
          B: "Desde un balcón del Hotel Imperial, Gustavo agita la bufanda. Ve el corazón y se lleva la mano al pecho, emocionado. «¡Mi salvador! ¡Y con ese brillo encima! ¡No te muevas de ahí, espera!»",
          C: "Desde un balcón del Imperial, Gustavo agita la bufanda como un náufrago. Ve el corazón y se lleva la mano al corazón, teatral. «¡Mi héroe! ¡Y con esa luz! ¡No te muevas de ahí!»",
        },
        options: [
          {
            id: "esperar",
            say: { A: "Espero. ¿Qué pasa, Gustavo?", B: "Aquí espero. ¿Qué pasa, Gustavo?", C: "Aquí me quedo. ¿Qué ocurre, Gustavo?" },
            reply: { A: "Gustavo desaparece. Vuelve con una copa y una flor. «¡Esto es para ti! ¡La novia también quiere verte!»", B: "Gustavo desaparece un segundo y vuelve con una copa y una flor del centro de mesa. «¡Esto es para ti! ¡Y la novia quiere verte!»", C: "Gustavo desaparece y regresa con una copa y una flor robada del centro de mesa. «¡Para ti! ¡Y la novia exige verte!»" },
            mood: "love", next: "corazon-flor",
          },
          {
            id: "alegro",
            say: { A: "¡Me alegro de verte bien, Gustavo!", B: "¡Qué alegría verte tan bien, Gustavo!", C: "Gustavo, verte así de entero me alegra la noche." },
            reply: { A: "Gustavo se emociona. «¡Gracias! Espera. ¡Tengo algo para ti!» Vuelve con una flor.", B: "Gustavo se emociona de verdad. «¡Gracias! Espera, tengo algo para ti.» Vuelve con una flor del centro de mesa.", C: "Gustavo se emociona. «¡Gracias! Espera, tengo algo para ti.» Vuelve con una flor del centro de mesa." },
            mood: "love", next: "corazon-flor",
          },
        ],
      },
      "corazon-flor": {
        who: "gustavo", mood: "smitten",
        line: {
          A: "Gustavo lanza la flor desde el balcón. Cae en tus manos. «¡Perfecto! Ahora canta conmigo. ¡Es la boda de mi hermana!»",
          B: "Gustavo lanza la flor desde el balcón y cae justo en tus manos. «¡Perfecto! Ahora canta conmigo desde ahí abajo. ¡Es la boda de mi hermana!»",
          C: "Gustavo lanza la flor desde el balcón y aterriza en tus manos. «¡Perfecto! Ahora canta conmigo desde abajo. ¡Es la boda de mi hermana y lo exige!»",
        },
        options: [
          {
            id: "cantar",
            say: { A: "¡Canto! Pero canto muy mal.", B: "¡Canto! Pero aviso: canto fatal.", C: "¡Canto! Aunque mi voz es un atentado." },
            reply: { A: "Gustavo canta. Tú cantas. La gente de la calle aplaude. Alguien baila.", B: "Gustavo canta desde el balcón y tú desde la calle. Los vecinos aplauden y alguien se pone a bailar.", C: "Gustavo canta desde el balcón y tú desde la acera. Los vecinos aplauden; alguien baila bajo las farolas." },
            mood: "love", end: "corazon-canta",
          },
          {
            id: "novia",
            say: { A: "Mejor dile a la novia que salga. Quiero felicitarla.", B: "Mejor dile a la novia que salga. Quiero felicitarla en persona.", C: "Mejor que salga la novia; quiero felicitarla como se merece." },
            reply: { A: "Gustavo grita hacia dentro. Se enciende el balcón de al lado. Sale la novia.", B: "Gustavo grita hacia dentro: «¡Hermana!» Se enciende el balcón de al lado y sale la novia, con el vestido blanco.", C: "Gustavo grita hacia el interior: «¡Hermana!» Se ilumina el balcón contiguo y aparece la novia, de blanco." },
            mood: "love", end: "corazon-novia",
          },
        ],
      },
      "cuchillo-inicio": {
        who: "gustavo", mood: "scared",
        line: {
          A: "Desde un balcón del Hotel Imperial, Gustavo te saluda. Ve tu cuchillo. Se agarra a la barandilla. «¡Eh! ¿Qué haces con eso? ¿Otra vez problemas? ¡Guárdalo o llamo a seguridad!»",
          B: "Desde un balcón del Hotel Imperial, Gustavo agita la bufanda. Ve el cuchillo en tu mano y se agarra a la barandilla. «¡Eh! ¿Qué haces con eso? ¿Más problemas esta noche? ¡Guárdalo o aviso a seguridad!»",
          C: "Desde un balcón del Imperial, Gustavo agita la bufanda. Ve tu cuchillo y se aferra a la barandilla. «¡Eh! ¿Qué haces con eso? ¿No tuvimos bastante esta noche? ¡Guárdalo o aviso a seguridad!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Lo guardo, Gustavo. Tranquilo. ¿Qué tal la boda?", B: "Lo guardo, Gustavo. Tranquilo. ¿Qué tal la boda?", C: "Lo guardo, Gustavo. Calma. ¿Cómo va la boda?" },
            reply: { A: "Gustavo respira. «Uf. Bien. Pero mira: hay globos atados al balcón. No puedo quitarlos.»", B: "Gustavo respira hondo. «Uf. Bien, bien. Oye, ya que tienes eso: hay globos atados a la barandilla y no consigo soltarlos.»", C: "Gustavo respira. «Uf. Bien. Oye, ya que llevas eso: hay globos atados a la barandilla y no hay manera de soltarlos.»" },
            mood: "worried", next: "cuchillo-globos",
          },
          {
            id: "loco",
            say: { A: "¿Estás loco? Es solo un cuchillo. ¡Yo te ayudé!", B: "¿Estás loco? Es solo un cuchillo. ¡Yo te ayudé esta noche!", C: "¿Tú estás loco? Es un simple cuchillo. ¡Yo te he ayudado esta noche!" },
            reply: { A: "Gustavo grita hacia dentro: «¡Seguridad!» Dos hombres de traje salen del hotel.", B: "Gustavo grita hacia dentro: «¡Seguridad!» Dos hombres de traje oscuro salen del hotel hacia ti.", C: "Gustavo grita hacia el interior: «¡Seguridad!» Dos hombres de traje oscuro salen del Imperial en tu dirección." },
            mood: "scared", end: "cuchillo-seguridad",
          },
        ],
      },
      "cuchillo-globos": {
        who: "gustavo", mood: "smile",
        line: {
          A: "Gustavo baja una cuerda con globos hasta la calle. «Corta la cuerda. Los globos son para ti. Pero con cuidado, que seguridad mira.»",
          B: "Gustavo descuelga una cuerda con globos de boda hasta la calle. «Corta la cuerda. Los globos son tuyos. Pero con cuidado, que seguridad está mirando.»",
          C: "Gustavo descuelga hasta la acera una cuerda con globos de boda. «Corta la cuerda y los globos son tuyos. Con cuidado, que seguridad no te quita el ojo.»",
        },
        options: [
          {
            id: "cortar",
            say: { A: "Corto. ¡Listo! Globos para mí.", B: "Corto. ¡Listo! Globos para mí.", C: "Corto. ¡Hecho! Los globos son míos." },
            reply: { A: "Los globos suben al cielo. Gustavo aplaude. La gente de la calle también.", B: "Los globos se escapan hacia el cielo. Gustavo aplaude desde el balcón y la gente de la calle también.", C: "Los globos ascienden hacia la noche. Gustavo aplaude desde el balcón; la calle entera lo imita." },
            mood: "laugh", end: "cuchillo-globos-cielo",
          },
          {
            id: "no",
            say: { A: "No corto nada. Mejor guardo el cuchillo. Adiós.", B: "No corto nada. Mejor guardo el cuchillo. ¡Adiós, Gustavo!", C: "No corto nada; guardo el cuchillo. ¡Adiós, Gustavo!" },
            reply: { A: "Gustavo se ríe. «Prudente. Más que yo.» Te saluda con la bufanda.", B: "Gustavo se ríe. «Prudente. Más que yo esta noche, desde luego.» Y te despide con la bufanda.", C: "Gustavo ríe. «Prudente. Bastante más que yo esta noche.» Te despide agitando la bufanda." },
            mood: "smile", end: "saludo",
          },
        ],
      },
      "pistola-inicio": {
        who: "gustavo", mood: "terror",
        line: {
          A: "Desde un balcón del Hotel Imperial, Gustavo te saluda. Ve tu pistola. Se agacha detrás de la barandilla. «¡Una pistola! ¿Tú? ¡No, no! ¡Guárdala! ¡Es la boda de mi hermana!»",
          B: "Desde un balcón del Hotel Imperial, Gustavo agita la bufanda. Ve la pistola en tu cintura y se tira detrás de la barandilla. «¡Una pistola! ¿Tú, mi salvador? ¡Guárdala! ¡Es la boda de mi hermana!»",
          C: "Desde un balcón del Imperial, Gustavo agita la bufanda. Ve tu pistola y se lanza detrás de la barandilla. «¡Una pistola! ¿Tú, precisamente tú? ¡Guárdala! ¡Es la boda de mi hermana!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. Perdón, Gustavo. Es por seguridad.", B: "La guardo, perdona, Gustavo. Es solo por seguridad.", C: "La guardo. Disculpa, Gustavo. Es solo por seguridad." },
            reply: { A: "Gustavo asoma la cabeza. «¿Seguridad? ¡Si eres el más amable de la ciudad! Guardada del todo, ¿sí?»", B: "Gustavo asoma solo la cabeza. «¿Seguridad? ¡Si eres la persona más amable de la ciudad! ¿Guardada del todo?»", C: "Gustavo asoma apenas la cabeza. «¿Seguridad? ¡Si eres la persona más amable de esta ciudad! ¿Está guardada del todo?»" },
            mood: "worried", next: "pistola-barandilla",
          },
          {
            id: "broma",
            say: { A: "¿Y qué? Tú estabas borracho. Cada uno con lo suyo.", B: "¿Y qué? Tú ibas borracho esta noche. Cada uno con lo suyo.", C: "¿Y qué? Tú ibas borracho esta noche. Cada cual carga con lo suyo." },
            reply: { A: "Gustavo desaparece del balcón. Oyes: «¡Seguridad! ¡Abajo! ¡Con pistola!»", B: "Gustavo desaparece del balcón. Desde dentro se oye: «¡Seguridad! ¡Abajo hay alguien con pistola!»", C: "Gustavo se esfuma del balcón. Desde el interior llega: «¡Seguridad! ¡Hay alguien armado abajo!»" },
            mood: "terror", end: "pistola-patrulla",
          },
        ],
      },
      "pistola-barandilla": {
        who: "gustavo", mood: "worried",
        line: {
          A: "Gustavo se levanta despacio. «Mi hermana no puede ver esto. Vete a casa, deja la pistola y vuelve. Te presento a la novia. ¿Trato?»",
          B: "Gustavo se incorpora despacio, todavía pálido. «Mi hermana no puede ver esto. Vete a casa, deja la pistola y vuelve. Entonces te presento a la novia. ¿Trato?»",
          C: "Gustavo se incorpora con cautela, aún sin color. «Mi hermana no puede ver esto. Ve a casa, deja la pistola y vuelve; entonces te presento a la novia. ¿Trato?»",
        },
        options: [
          {
            id: "trato",
            say: { A: "Trato. Vuelvo sin pistola.", B: "Trato hecho. Vuelvo sin pistola.", C: "Trato hecho. Regreso desarmado." },
            reply: { A: "Gustavo sonríe por fin. «Te espero con agua. Mucha agua.» Agita la bufanda.", B: "Gustavo sonríe por fin. «Te espero aquí, con agua. Mucha agua.» Y agita la bufanda.", C: "Gustavo recupera la sonrisa. «Te espero aquí con agua. Mucha agua.» Agita la bufanda." },
            mood: "smile", end: "pistola-trato",
          },
          {
            id: "no",
            say: { A: "No. La pistola viene conmigo.", B: "No. La pistola se queda conmigo.", C: "No. La pistola viene conmigo." },
            reply: { A: "Gustavo entra. Se cierra el balcón. Un coche de policía para en la puerta del hotel.", B: "Gustavo entra y cierra el balcón. Un minuto después, un coche de policía frena en la puerta del hotel.", C: "Gustavo entra y cierra el balcón. Un minuto después, un coche patrulla frena ante el hotel." },
            mood: "worried", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "gustavo", mood: "terror",
        line: {
          A: "Desde un balcón del Hotel Imperial, Gustavo te saluda. Ve tu granada. Grita. La novia sale al balcón de al lado. «¿Qué pasa?» «¡Tiene una bomba! ¡Mi salvador tiene una bomba!»",
          B: "Desde un balcón del Hotel Imperial, Gustavo agita la bufanda. Ve la granada y grita. La novia sale al balcón de al lado, alarmada. «¿Qué pasa?» «¡Tiene una bomba! ¡Mi salvador tiene una bomba!»",
          C: "Desde un balcón del Imperial, Gustavo agita la bufanda. Ve tu granada y suelta un grito. La novia aparece en el balcón contiguo. «¿Qué ocurre?» «¡Tiene una bomba! ¡Mi salvador lleva una bomba!»",
        },
        options: [
          {
            id: "calma",
            say: { A: "¡Tranquilos! No explota. ¡Felicidades a la novia!", B: "¡Tranquilos! No explota. ¡Y felicidades a la novia!", C: "¡Calma! No explota. ¡Y felicidades a la novia!" },
            reply: { A: "La novia mira a Gustavo. «¿Este es tu salvador?» Gustavo asiente. «Era mejor antes.»", B: "La novia mira a su hermano. «¿Este es tu famoso salvador?» Gustavo asiente. «Hace una hora era mejor persona.»", C: "La novia mira a su hermano. «¿Este es tu célebre salvador?» Gustavo asiente. «Hace una hora tenía mejor fama.»" },
            mood: "worried", next: "granada-novia",
          },
          {
            id: "broma",
            say: { A: "Es una broma. ¡Mira, la lanzo al aire!", B: "Es una broma. ¡Mira, la lanzo al aire!", C: "Es una broma. ¡Observa: la lanzo al aire!" },
            reply: { A: "Gritan los dos. Grita la boda entera. Un helicóptero aparece sobre el hotel.", B: "Gritan los dos balcones. Grita la boda entera desde las ventanas. Sobre el hotel aparece un helicóptero.", C: "Gritan ambos balcones y, tras ellos, la boda entera. Un helicóptero asoma sobre el Imperial." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-novia": {
        who: "gustavo", mood: "scared",
        line: {
          A: "Gustavo habla desde detrás de la barandilla. «Guárdala. Y mi hermana te manda una copa. Desde arriba. ¿Brindamos a distancia?»",
          B: "Gustavo habla desde detrás de la barandilla. «Guárdala, por favor. Mi hermana dice que te manda una copa desde arriba. ¿Brindamos a distancia?»",
          C: "Gustavo negocia desde detrás de la barandilla. «Guárdala, por favor. Mi hermana te ofrece una copa desde arriba. ¿Brindamos a distancia prudente?»",
        },
        options: [
          {
            id: "brindar",
            say: { A: "Guardada. ¡Brindo! ¡Por la novia!", B: "Guardada. ¡Brindo desde aquí! ¡Por la novia!", C: "Guardada. ¡Brindo desde aquí abajo! ¡Por la novia!" },
            reply: { A: "Los dos balcones levantan las copas. Gustavo baila. La novia se ríe.", B: "Los dos balcones levantan las copas. Gustavo baila con la bufanda y la novia se ríe.", C: "Ambos balcones alzan las copas. Gustavo baila con la bufanda; la novia ríe." },
            mood: "laugh", end: "granada-brindis",
          },
          {
            id: "no-se",
            say: { A: "No sé si explota. Mejor me voy.", B: "No sé si explota. Mejor me voy lejos.", C: "No sé si explota. Lo sensato es que me aleje." },
            reply: { A: "La novia grita: «¡Seguridad!» Un helicóptero aparece sobre el hotel.", B: "La novia grita hacia dentro: «¡Seguridad!» Sobre el hotel aparece un helicóptero con un foco.", C: "La novia llama a gritos: «¡Seguridad!» Un helicóptero asoma sobre el Imperial, foco en marcha." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
    },
    ends: {
      "corazon-canta": { text: { A: "Gustavo y tú cantan. La calle aplaude. La novia sale a mirar.", B: "Gustavo y tú cantan a dúo, balcón y calle. Los vecinos aplauden y la novia sale a ver qué pasa.", C: "Gustavo y tú cantan a dúo entre balcón y acera. Los vecinos aplauden; la novia sale a comprobar el escándalo." }, change: "baila", recap: "Cantaste con Gustavo desde la calle para celebrar la boda." },
      "corazon-novia": { text: { A: "La novia te saluda con la mano. «¡Gracias por mi hermano!» Gustavo llora un poco.", B: "La novia te saluda desde el balcón. «¡Gracias por devolverme a mi hermano!» Gustavo llora un poco, de felicidad.", C: "La novia te saluda desde el balcón. «¡Gracias por devolverme a mi hermano!» Gustavo llora, feliz." }, change: "luz", recap: "La novia salió al balcón a darte las gracias por Gustavo." },
      "cuchillo-seguridad": { text: { A: "Dos hombres de seguridad te piden el cuchillo. Gustavo mira desde arriba, triste.", B: "Dos hombres de seguridad del hotel te piden el cuchillo con mucha educación. Gustavo mira desde el balcón, triste.", C: "Dos hombres de seguridad del Imperial te piden el cuchillo con exquisita educación. Gustavo observa desde el balcón, apenado." }, change: "policia", recap: "Gustavo vio tu cuchillo y llamó a seguridad del hotel." },
      "cuchillo-globos-cielo": { text: { A: "Los globos de la boda suben al cielo. Gustavo y tú los miran.", B: "Los globos de la boda se pierden en el cielo. Gustavo y tú los siguen con la mirada.", C: "Los globos de la boda se pierden en la noche. Gustavo y tú los siguen con la vista hasta que desaparecen." }, change: "luz", recap: "Cortaste la cuerda de los globos de la boda con tu cuchillo." },
      "pistola-patrulla": { text: { A: "Dos policías bajan del coche. Gustavo no está en el balcón.", B: "Dos policías bajan del coche. En el balcón ya no hay nadie.", C: "Dos agentes bajan del coche patrulla. El balcón de Gustavo está vacío." }, change: "policia", recap: "Tu pistola hizo que Gustavo llamara a la policía." },
      "pistola-trato": { text: { A: "Te vas a casa a dejar la pistola. Gustavo te saluda con la bufanda.", B: "Te vas a casa a dejar la pistola. Gustavo te despide con la bufanda desde el balcón.", C: "Te alejas hacia casa para dejar la pistola. Gustavo te despide con la bufanda desde el balcón." }, change: "se-va", recap: "Gustavo te pidió que dejaras la pistola en casa antes de conocer a la novia." },
      "granada-helicoptero": { text: { A: "El helicóptero ilumina el hotel. La boda entera mira desde las ventanas.", B: "El helicóptero ilumina la fachada del hotel. La boda entera mira desde las ventanas.", C: "El foco del helicóptero baña la fachada del Imperial. La boda entera se asoma a las ventanas." }, change: "helicoptero", recap: "Tu granada trajo un helicóptero a la boda de la hermana de Gustavo." },
      "granada-brindis": { text: { A: "Brindan a distancia. Gustavo baila en el balcón. La novia se ríe.", B: "Brindan a distancia, balcón y calle. Gustavo baila y la novia se ríe.", C: "Brindan a distancia entre balcón y acera. Gustavo baila; la novia ríe." }, change: "baila", recap: "Brindaste a distancia con Gustavo y la novia por tu granada." },
      saludo: { text: { A: "Gustavo te dice adiós y entra en la fiesta.", B: "Gustavo te dice adiós con la bufanda y vuelve a la fiesta.", C: "Gustavo se despide agitando la bufanda y desaparece en la música de la boda." }, change: "sonrie", recap: "Gustavo te saludó desde un balcón del Hotel Imperial." },
      baila: { text: { A: "Gustavo baila en el balcón. La gente de la calle aplaude.", B: "Gustavo baila en el balcón y unos vecinos le aplauden desde la calle.", C: "Gustavo baila en el balcón con más entusiasmo que talento. Desde la calle, alguien aplaude." }, change: "baila", recap: "Gustavo bailó en el balcón para celebrar la boda de su hermana." },
      novia: { text: { A: "Se enciende otra luz. La novia sale al balcón y te dice: «¡Gracias!»", B: "Se enciende la luz del balcón de al lado. Sale la novia, con su vestido blanco, y te grita: «¡Gracias por traerme a mi hermano!»", C: "Se ilumina el balcón contiguo y aparece la novia. «¡Gracias por devolverme a este desastre de hermano!», grita, riendo." }, change: "luz", recap: "Conociste a la hermana de Gustavo, la novia." },
    },
    speak: {
      A1: "¿Cómo se llaman tus hermanos o primos?",
      A2: "¿A qué boda o celebración fuiste?",
      B1: "¿Cómo das las gracias a alguien que te ayudó?",
      B2: "¿Qué harías si te perdieras el día de un evento familiar importante?",
      C1: "¿Qué gestos de gratitud te parecen más sinceros?",
      C2: "¿Por qué a veces nos cuesta más aceptar ayuda que darla?",
    },
    variants: {
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿Cantas en las fiestas?", B: "¿Cuándo cantaste en público por última vez?", C: "¿Qué te hace olvidar la vergüenza en una celebración?" } },
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Te gustan los globos?", B: "¿Cuándo te asustó alguien que antes te había ayudado?", C: "¿Qué pasa con la gratitud cuando aparece el miedo?" } },
      pistola: { start: "pistola-inicio", fx: "retrocede", speak: { A: "¿Qué dejas en casa cuando sales?", B: "¿Qué condición pondrías para presentar a alguien a tu familia?", C: "¿Qué estarías dispuesto a dejar atrás para ser bienvenido?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Con quién brindas en una boda?", B: "¿Qué harías si tu invitado arruinara una boda familiar?", C: "¿Qué distingue una anécdota de boda de una catástrofe?" } },
    },
  },
];
export default encounters;
