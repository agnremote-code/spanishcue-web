// Noche abierta · calle · Barrio Alto: luz blanca y cálida, fachadas pulidas, tilos con lucecitas y un silencio un poco presumido.
export default [
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
    },
    ends: {
      estacion: { text: { A: "Henrik se va hacia la estación. Va contento. Te dice adiós con el mapa.", B: "Henrik se aleja hacia la estación con paso alegre. En la esquina se gira y te saluda con el mapa.", C: "Henrik se aleja hacia la estación, feliz. En la esquina levanta el mapa, ya bien orientado, a modo de despedida." }, change: "se-va", flag: "henrik", recap: "Le explicaste a Henrik cómo llegar a la estación." },
      mercado: { text: { A: "Henrik va al mercado de noche. Tiene mucha hambre.", B: "Henrik se va hacia el mercado de noche, al oeste, con hambre y prisa.", C: "Henrik pone rumbo al mercado de noche. Su estómago, por fin, ha ganado la discusión." }, change: "se-va", recap: "Mandaste a Henrik a cenar al mercado de noche." },
      juntos: { text: { A: "Vas con Henrik al mercado. Él te habla de su abuela.", B: "Caminas con Henrik hacia el mercado. Por el camino te cuenta historias de su abuela.", C: "Acompañas a Henrik al mercado. Por el camino, entre dos idiomas, te cuenta la vida de su abuela." }, change: "se-va", recap: "Fuiste con Henrik al mercado de noche." },
      taxi: { text: { A: "Henrik llama un taxi en la puerta del hotel.", B: "Henrik pide un taxi en la puerta del hotel y te saluda desde la ventanilla.", C: "Henrik consigue un taxi en la puerta del hotel y te saluda desde dentro, con las rodillas en la barbilla." }, change: "llama", recap: "Le recomendaste a Henrik tomar un taxi." },
      corre: { text: { A: "Henrik corre en la dirección equivocada. Ahora está más perdido.", B: "Henrik desaparece corriendo en la dirección equivocada. Esta noche va a perder el tren.", C: "Henrik desaparece en dirección contraria a la estación. Su tren, sin duda, saldrá sin él." }, change: "corre", recap: "Asustaste a Henrik y salió corriendo hacia el lado equivocado." },
      deprisa: { text: { A: "Henrik se va rápido. No está contento.", B: "Henrik se aleja deprisa. Llega a la estación, pero sin ganas de volver a preguntar a nadie.", C: "Henrik se aleja con prisa. Llegará a la estación, aunque con una opinión discutible sobre la hospitalidad local." }, change: "se-va", recap: "Le diste indicaciones a Henrik, pero se fue asustado." },
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
    },
    ends: {
      fabrica: { text: { A: "Vas con Leire, Óscar y Mavi a La Fábrica. Caminan juntos y se ríen.", B: "Te vas con Leire, Óscar y Mavi hacia La Fábrica, al sudeste. Por el camino, Óscar ensaya pasos de baile.", C: "Pones rumbo a La Fábrica con tus nuevos amigos. Óscar ensaya pasos, Mavi critica los pasos y Leire reparte flores." }, change: "se-va", flag: "fiesta-fabrica", recap: "Aceptaste ir a La Fábrica con Leire, Óscar y Mavi." },
      despedida: { text: { A: "Los tres se van cantando. Leire te dice adiós con el ramo.", B: "Los tres se alejan cantando. Al final de la calle, Leire te saluda con el ramo.", C: "El grupo se aleja cantando desafinado. Al final de la calle, Leire te dedica un último saludo con el ramo." }, change: "se-va", recap: "Rechazaste con amabilidad la fiesta en La Fábrica." },
      baile: { text: { A: "Óscar baila en la plaza. Leire y Mavi bailan también. ¡Y tú!", B: "Óscar baila en medio de la plaza. Leire y Mavi se unen, y al final tú también.", C: "Óscar convierte la plaza en pista de baile. Leire y Mavi se suman y, contra todo pronóstico, tú también." }, change: "baila", recap: "Bailaste con Óscar y sus amigas en la plaza." },
      policia: { text: { A: "Llega la policía. Explicas todo. Al final, todos se calman.", B: "Llega la policía. Explicas el malentendido durante un buen rato.", C: "Llega un coche patrulla. Explicar el malentendido te lleva más tiempo que a ellos llegar a la fiesta." }, change: "policia", recap: "Un malentendido con unos invitados de boda terminó con la policía." },
      corren: { text: { A: "Los tres corren calle abajo. La plaza está en silencio otra vez.", B: "Los tres desaparecen corriendo. La plaza vuelve a quedarse en silencio.", C: "Los tres desaparecen calle abajo. Sobre la acera queda una flor del ramo." }, change: "corre", recap: "Asustaste a tres invitados de boda y salieron corriendo." },
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
    },
    ends: {
      celebrar: { text: { A: "Joaquín baila alrededor de la fuente. Tú bailas un poco también.", B: "Joaquín baila alrededor de la fuente y te arrastra con él. Desde un balcón, alguien aplaude.", C: "Joaquín convierte la fuente en pista de baile. Desde un balcón del hotel, alguien aplaude con desgana elegante." }, change: "baila", recap: "Celebraste la beca de Joaquín bailando en la plaza." },
      abrazo: { text: { A: "Joaquín abre los brazos. Está muy feliz. Tú también.", B: "Joaquín abre los brazos al cielo y grita «¡Tokio!». La plaza entera lo oye.", C: "Joaquín abre los brazos y grita «¡Tokio!» a los tilos. Un perro, a lo lejos, le contesta." }, change: "abraza", recap: "Compartiste la alegría de Joaquín con un abrazo." },
      mensaje: { text: { A: "Joaquín graba un mensaje para su familia. Habla y se ríe.", B: "Joaquín graba un audio larguísimo para su familia. De vez en cuando se ríe solo.", C: "Joaquín graba un audio de seis minutos. Por cómo se ríe, su madre lo va a escuchar en bucle." }, change: "llama", recap: "Animaste a Joaquín a mandar un mensaje a su familia." },
      prisa: { text: { A: "Te vas. Joaquín le cuenta la noticia a otra persona.", B: "Sigues tu camino. A tus espaldas, Joaquín le cuenta la noticia al portero del hotel.", C: "Sigues tu camino. Detrás de ti, Joaquín ya le cuenta lo de Tokio al portero del hotel, que finge sorpresa." }, change: "sigue", recap: "Felicitaste a Joaquín y seguiste tu camino." },
      consejo: { text: { A: "Joaquín sonríe. Está más tranquilo.", B: "Joaquín se queda en la fuente, más tranquilo, mirando su teléfono con una sonrisa.", C: "Joaquín se queda junto a la fuente, más sereno. El vértigo sigue ahí, pero ahora tiene compañía." }, change: "sonrie", recap: "Le diste ánimos y un consejo a Joaquín." },
      regalo: { text: { A: "Joaquín guarda tu libro. «Lo voy a leer en Japón.»", B: "Joaquín guarda tu libro en la mochila como un tesoro. «Te escribo desde Tokio cuando lo termine.»", C: "Joaquín guarda el libro con cuidado. «Cuando lo termine, te mando una foto con el monte Fuji de fondo.»" }, change: "sonrie", recap: "Le regalaste tu libro a Joaquín para el viaje." },
      corre: { text: { A: "Joaquín se va corriendo. La plaza está en silencio.", B: "Joaquín desaparece corriendo. La plaza se queda en silencio.", C: "Joaquín desaparece. La plaza recupera su silencio, que esta noche suena un poco triste." }, change: "corre", recap: "Asustaste a Joaquín sin querer." },
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
    },
    ends: {
      llave: { text: { A: "Tienes la llave T-7. Dolores se va entre los árboles. Ahora tienes que ir al mercado.", B: "Guardas la llave T-7. Cuando levantas la vista, Dolores ya no está. Te espera el callejón del mercado.", C: "Guardas la llave T-7. Al levantar la vista, Dolores se ha desvanecido entre los tilos. El callejón del mercado te espera." }, change: "se-va", flag: "llave", recap: "Aceptaste la llave T-7 de Dolores para llevarla al mercado." },
      rechazo: { text: { A: "Dolores se va despacio. Está un poco triste.", B: "Dolores se aleja despacio, con la llave en el bolsillo del abrigo.", C: "Dolores se aleja despacio. Por un momento te parece que la llave brilla en su bolsillo." }, change: "triste", recap: "Rechazaste la llave de Dolores." },
      misterio: { text: { A: "Dolores desaparece entre los árboles. No sabes nada de la llave.", B: "Dolores desaparece entre los tilos. Te quedas con la duda de qué abría esa llave.", C: "Dolores se esfuma. Te quedas con la sensación de haber dejado pasar una historia." }, change: "se-va", recap: "Dolores se fue con su llave y su misterio." },
      policia: { text: { A: "Llega la policía. Dolores dice: «No pasa nada». Y se va.", B: "Llega la policía. Mientras explicas el malentendido, Dolores desaparece sin decir nada.", C: "Llega la policía. Cuando terminas de explicarte, buscas a Dolores: no queda ni rastro de ella." }, change: "policia", recap: "Un malentendido con Dolores terminó con la policía." },
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
    },
    ends: {
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
    },
    ends: {
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
    },
    ends: {
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
    },
    ends: {
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
    },
    ends: {
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
  },
];
