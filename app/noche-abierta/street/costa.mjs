// Noche abierta · calle · La Costanera: un paseo junto al canal, tranquilo, romántico y un poco melancólico, con viento.
const encounters = [
  // ───────────────────────────── 1. Alguien llora junto al agua
  {
    id: "costa-llorando",
    kind: "escena",
    district: "costa",
    title: "Alguien llora junto al agua",
    verb: "ACERCARME",
    goal: "Mostrar empatía, consolar, preguntar con tacto, distraer a alguien triste y respetar su espacio.",
    cast: [
      {
        id: "malena", name: "Malena", role: "Ilustradora que acaba de recibir una mala noticia",
        age: "young", body: "f", build: "slim", height: 1.62,
        hair: "curly", hairColor: "#1a1412", skin: "#b07a52",
        top: "coat", topColor: "#7a2e3a", bottom: "skirt", bottomColor: "#1f1f2a",
        extras: ["scarf", "phone"], pose: "cry", props: ["bench"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "malena", mood: "sad",
        line: {
          A: "Una chica llora en un banco, frente al agua. Mira su celular. «Perdón… No pasa nada. Bueno, sí pasa.»",
          B: "Una chica llora en un banco junto al canal, con el celular en la mano. Al verte, se seca la cara rápido. «Perdón, qué vergüenza. No suelo llorar en público.»",
          C: "Una chica llora en un banco con el celular apretado contra el pecho. Te ve y suelta una risa mojada. «Tranquilo, no es contagioso. Es solo… un mensaje.»",
        },
        options: [
          {
            id: "preguntar",
            say: { A: "Hola. ¿Estás bien? ¿Puedo ayudarte?", B: "Perdona que me meta, pero ¿estás bien? ¿Necesitas algo?", C: "No quiero molestar, pero tampoco me parece bien pasar de largo. ¿Estás bien?" },
            reply: { A: "La chica respira. «No mucho. Tengo una mala noticia.»", B: "La chica suspira. «Gracias por preguntar. Acabo de recibir un mensaje que no quería leer.»", C: "«Bien, lo que se dice bien, no», admite la chica. «Digamos que el celular acaba de arruinarme la noche.»" },
            mood: "sad", next: "mensaje",
          },
          {
            id: "panuelo",
            act: { A: "Te sientas a su lado, sin hablar.", B: "Te sientas en la otra punta del banco, en silencio.", C: "Te sientas a una distancia prudente y miras el agua, como ella." },
            say: { A: "No tienes que hablar. Me quedo aquí un rato.", B: "No hace falta que me cuentes nada. Si quieres, me quedo un rato.", C: "No te voy a pedir explicaciones. Solo me pareció que esta noche no tenías que estar sola." },
            reply: { A: "La chica asiente. Después de un minuto, habla. «Me llamo Malena.»", B: "La chica no dice nada durante un rato. Luego sonríe un poco. «Me llamo Malena. Y gracias.»", C: "Pasa un minuto largo. «Malena», dice al fin. «Y que conste que el silencio también se agradece.»" },
            mood: "sad", next: "mensaje",
          },
          {
            id: "distraer",
            say: { A: "Mira, hay dos patos allí. Parecen muy enojados.", B: "Perdona, pero esos dos patos llevan un rato discutiendo. ¿Qué crees que se dicen?", C: "No sé qué te pasa, pero esos dos patos parecen tener un problema más serio que el tuyo." },
            reply: { A: "La chica mira los patos y se ríe un poco. «Sí. Como yo con mi celular.»", B: "La chica se ríe entre lágrimas. «Seguro que uno le dijo al otro que no lo eligieron para el trabajo.»", C: "La chica suelta una carcajada que no esperaba. «Lo dudo. A esos patos nadie les acaba de decir que no.»" },
            mood: "smile", next: "mensaje",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz.", B: "Sacas el lápiz y buscas un papel en el bolsillo.", C: "Sacas el lápiz y un ticket arrugado, por si acaso." },
            say: { A: "¿Quieres escribir lo que sientes?", B: "A veces ayuda escribir lo que uno siente. ¿Quieres probar?", C: "Dicen que escribir ordena las ideas. No prometo nada, pero aquí tienes." },
            reply: { A: "La chica mira el lápiz y casi sonríe. «Yo no escribo. Yo dibujo.»", B: "La chica toma el lápiz con cuidado, como si fuera algo conocido. «Escribir no. Pero dibujar… eso sí.»", C: "«Escribir se me da fatal», dice ella, y ya está girando el lápiz entre los dedos. «Lo mío es dibujar.»" },
            mood: "smile", next: "dibujo",
          },
          libro: {
            act: { A: "Le muestras tu libro.", B: "Le ofreces tu libro, por si quiere distraerse.", C: "Le tiendes tu libro con una solemnidad un poco ridícula." },
            say: { A: "¿Quieres leer un poco? Es un buen libro.", B: "No sé si ayuda, pero leer a mí me calma. ¿Lo quieres?", C: "No es un pañuelo, pero a veces cumple la misma función." },
            reply: { A: "La chica mira la portada. «Qué bonito dibujo. ¿Quién lo hizo?»", B: "La chica se fija en la portada. «Me encanta esta ilustración. Yo quería hacer cosas así.»", C: "La chica acaricia la portada. «Qué ilustración tan buena. Justo lo que no voy a hacer, al parecer.»" },
            mood: "sad", next: "mensaje",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Por si es una trampa, sacas el gas pimienta.", C: "Por precaución, y sin mucho criterio, sacas el gas pimienta." },
            say: { A: "Hola. ¿Qué haces aquí sola?", B: "Hola. ¿Qué te pasa? ¿Estás sola?", C: "Perdona la desconfianza. ¿Qué haces aquí sola a estas horas?" },
            reply: { A: "La chica se levanta de golpe, asustada. «¿Qué? ¡No hice nada! ¡Solo estoy llorando!»", B: "La chica se levanta asustada y se pega a la baranda. «¿Eso es gas pimienta? ¡Solo estaba llorando!»", C: "La chica se levanta de un salto. «¿En serio? Llorar en un banco ahora es sospechoso, por lo visto.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Se ve tu granada.", B: "Al sentarte, se te ve la granada.", C: "Al sentarte, la granada asoma del bolsillo con muy poca discreción." },
            say: { A: "Hola. ¿Puedo sentarme?", B: "Hola, ¿puedo sentarme? Pareces triste.", C: "¿Te importa si me siento? Ignora lo que llevo, no tiene que ver contigo." },
            reply: { A: "Malena se aleja del banco. «¡Eso es una granada! ¡No, no!»", B: "La chica se levanta y retrocede. «¿Es una granada? ¡Por favor, aléjate!»", C: "La chica deja de llorar de golpe. «Ah, bueno. Mi noche no podía empeorar, y mira tú.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al acercarte, se ve tu pistola.", C: "Al inclinarte hacia ella, la pistola queda a la vista." },
            say: { A: "Hola. ¿Por qué lloras?", B: "Hola, ¿qué te pasó? ¿Te puedo ayudar?", C: "¿Estás bien? Tranquila, solo quiero saber si necesitas algo." },
            reply: { A: "La chica ve la pistola y tiembla. «Toma mi celular. Pero vete, por favor.»", B: "La chica te ofrece el celular con las manos temblando. «Llévatelo, pero no me hagas nada.»", C: "«Llévate el celular», dice ella, pálida. «Total, solo trae malas noticias.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Ves que su bufanda está atrapada en el banco y sacas el cuchillo.", C: "Su bufanda se ha enganchado en un clavo del banco. Sacas el cuchillo para soltarla." },
            say: { A: "Tu bufanda está atrapada. ¿La corto un poco?", B: "Tu bufanda se enganchó en el banco. ¿Quieres que corte el hilo?", C: "Tu bufanda está prisionera del banco. ¿La libero con un corte pequeño?" },
            reply: { A: "Malena se asusta, pero después mira la bufanda. «Ah… Sí. Gracias.»", B: "La chica se pone tensa, luego ve el hilo. «Ah, era eso. Sí, córtalo. Me la regaló mi abuela.»", C: "La chica se queda rígida, después mira el clavo. «Ah, era eso. Adelante. Hoy todo se me engancha.»" },
            mood: "worried", next: "mensaje",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Llorar está bien. Estoy aquí contigo.", B: "Llorar no tiene nada de malo. Si quieres, te acompaño un rato.", C: "Llora todo lo que necesites. Yo no tengo ninguna prisa." },
            reply: { A: "Malena se ríe de repente. «En la entrevista dibujé un pato. Con corbata. Por eso no me eligieron.»", B: "Malena se ríe entre lágrimas. «¿Sabes qué? En la entrevista me puse nerviosa y dibujé un pato con corbata. Seguro que fue por eso.»", C: "Malena suelta una carcajada. «Te voy a confesar algo absurdo: en la entrevista, de los nervios, les dibujé un pato con corbata. Muy elegante, eso sí.»" },
            mood: "love", next: "futuro",
          },
        },
      },
      mensaje: {
        who: "malena", mood: "sad",
        line: {
          A: "Malena te muestra el celular. «Quería trabajar en un estudio de dibujos animados. Hoy me dijeron que no.»",
          B: "Malena te enseña el mensaje. «Llevo un año preparándome para trabajar en un estudio de animación. Y hoy: “Gracias, pero elegimos a otra persona”.»",
          C: "Malena gira el celular hacia ti. «“Tu perfil es muy interesante, pero…” Ese “pero” me costó un año de dibujos.»",
        },
        options: [
          {
            id: "consolar",
            say: { A: "Lo siento mucho. Vas a tener otras oportunidades.", B: "Lo siento mucho. Ahora duele, pero seguro que vienen otras oportunidades.", C: "Lo siento. Ya sé que “vendrán otras” no consuela nada esta noche, pero es verdad." },
            reply: { A: "Malena se encoge de hombros. «Eso dice mi mamá. Pero ¿y ahora qué hago?»", B: "«Eso mismo me dijo mi madre», dice Malena. «Lo que no me dijo es qué hago mañana.»", C: "«Mi madre dice lo mismo», contesta Malena. «Lo que nadie dice es qué hacer con el mientras tanto.»" },
            mood: "worried", next: "futuro",
          },
          {
            id: "contar",
            say: { A: "¿Qué trabajo era? Cuéntame.", B: "¿Qué tipo de trabajo era? Cuéntame un poco.", C: "¿Y qué ibas a hacer allí? Me interesa, de verdad." },
            reply: { A: "Malena habla un poco más tranquila. «Dibujar personajes. Animales, sobre todo. Me encanta.»", B: "A Malena se le ilumina la cara. «Diseñar personajes. Animales que hablan, ese tipo de cosas. Es lo que más me gusta.»", C: "Malena se anima sin querer. «Diseñar personajes. Animales con problemas existenciales, básicamente. Soy buenísima en eso.»" },
            mood: "smile", next: "futuro",
          },
          {
            id: "irse",
            say: { A: "Lo siento. Te dejo sola, ¿de acuerdo?", B: "Lo siento mucho. Te dejo tranquila, pero si me necesitas, estoy cerca.", C: "Te dejo tranquila; a veces uno necesita su espacio. Cuídate mucho, ¿sí?" },
            reply: { A: "Malena asiente. «Gracias. Sí, quiero estar sola un poco.»", B: "Malena asiente. «Gracias. Creo que necesito un rato a solas.»", C: "Malena sonríe apenas. «Gracias por entenderlo sin que te lo pida.»" },
            mood: "sad", end: "espacio",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Tú dibujas bien. Seguro. Lo veo en tus ojos.", B: "No te conozco, pero algo me dice que dibujas muy bien.", C: "No he visto ni un dibujo tuyo, pero estoy dispuesto a apostar que eres buenísima." },
            reply: { A: "Malena se ríe. «¿En mis ojos? ¡Ja! Mira, te dibujo en un minuto.»", B: "Malena se ríe. «Eso es muy fácil de decir. Bueno, te lo demuestro: ¿te hago un retrato?»", C: "«Apuesta arriesgada», dice Malena, y saca un bolígrafo. «Quédate quieto. Vas a perder o a ganar un retrato.»" },
            mood: "love", next: "dibujo",
          },
        },
      },
      dibujo: {
        who: "malena", mood: "smile",
        line: {
          A: "Malena dibuja en un papel. Dibuja el canal, el puente y… a ti. «No te muevas.»",
          B: "Malena dibuja deprisa en el reverso de un ticket: el canal, las farolas, y una figura que se parece mucho a ti. «Quieto, que estás saliendo bien.»",
          C: "Malena dibuja sin levantar la vista: el agua, las luces, y tú con una cara bastante más interesante que la real. «No te muevas, que te estoy mejorando.»",
        },
        options: [
          {
            id: "admirar",
            say: { A: "¡Qué bonito! Dibujas muy bien.", B: "¡Es precioso! ¿Cómo puede ser que no te eligieran?", C: "Esto es muy bueno. Ese estudio no sabe lo que se perdió." },
            reply: { A: "Malena sonríe. «Gracias. Voy a dibujar el canal un rato más.»", B: "Malena se sonroja. «Gracias. Creo que voy a quedarme un rato dibujando el canal.»", C: "«Lo voy a enmarcar, ese comentario», dice Malena. «Y ahora déjame terminar el canal, que me vino la inspiración.»" },
            mood: "smile", end: "dibuja",
          },
          {
            id: "porque",
            say: { A: "¿Por qué lloras? Si quieres, me cuentas.", B: "Dibujas muy bien. ¿Por qué estabas llorando, entonces?", C: "Con ese talento, me cuesta entender las lágrimas. ¿Qué pasó?" },
            reply: { A: "Malena deja de dibujar. «Por un trabajo. Mira.»", B: "Malena deja el lápiz un momento. «Justamente por esto. Mira el mensaje.»", C: "Malena suspira y te pasa el celular. «Justamente por el talento. O por la falta, según ellos.»" },
            mood: "sad", next: "mensaje",
          },
          {
            id: "regalo",
            say: { A: "¿Me lo regalas? Me gusta mucho.", B: "¿Me lo regalas? Prometo guardarlo cuando seas famosa.", C: "¿Me lo firmas? Algún día valdrá una fortuna y quiero estar preparado." },
            reply: { A: "Malena firma el dibujo y te lo da. «Para ti. Y ahora, ¿qué hago yo?»", B: "Malena lo firma con una floritura. «Toma. Pero ahora dime: ¿qué hago con mi vida?»", C: "Malena lo firma con exagerada elegancia. «Hecho. Ahora, ya que estás, resuélveme el futuro.»" },
            mood: "smile", next: "futuro",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Hoy fue un mal día. Pero tú tienes mucho talento.", B: "Hoy fue un mal día, pero eso no cambia el talento que tienes.", C: "Un mensaje no decide lo que vales. Este dibujo lo demuestra." },
            reply: { A: "Malena te abraza. «Gracias. Mañana voy a mandar mis dibujos a otro estudio.»", B: "Malena te da un abrazo rápido. «Gracias. Mañana mismo mando el portafolio a otros tres estudios.»", C: "Malena te abraza sin avisar. «Me quedo con eso. Mañana bombardeo de portafolios a todos los estudios del país.»" },
            mood: "love", end: "abrazo",
          },
        },
      },
      futuro: {
        who: "malena", mood: "worried",
        line: {
          A: "Malena mira el agua. «¿Y ahora qué hago?»",
          B: "Malena se abraza las rodillas y mira el agua. «¿Y ahora qué? No tengo un plan B.»",
          C: "Malena mira el canal como si ahí estuviera escrita la respuesta. «El plan A era este. El plan B… nunca lo dibujé.»",
        },
        options: [
          {
            id: "casa",
            say: { A: "Hoy vas a casa a descansar. Mañana piensas.", B: "Yo creo que es mejor que hoy descanses. Mañana lo ves todo más claro.", C: "Esta noche no se toman decisiones. Ve a casa, duerme y mañana lo replanteas." },
            reply: { A: "Malena se levanta. «Tienes razón. Gracias por quedarte.»", B: "Malena asiente y se pone de pie. «Tienes razón. Mañana será otro día.»", C: "«Una noche sin decisiones», repite Malena. «Me gusta. Es la primera buena idea del día.»" },
            mood: "smile", end: "casa",
          },
          {
            id: "pasear",
            say: { A: "¿Vamos a caminar hasta el puente?", B: "¿Y si caminamos un poco hasta el puente? El aire ayuda.", C: "Te propongo un paseo hasta el puente. Caminar ordena las ideas, o al menos cansa." },
            reply: { A: "Malena se pone la bufanda. «Bueno. Vamos.»", B: "Malena se pone la bufanda y se levanta. «Bueno, vamos. Pero despacio, ¿eh?»", C: "«Si no ordena las ideas, por lo menos me cansa», dice Malena, ya de pie. «Vamos.»" },
            mood: "smile", end: "paseo",
          },
          {
            id: "dibujar",
            say: { A: "¿Por qué no dibujas el canal ahora?", B: "¿Por qué no dibujas algo ahora mismo? Este canal es precioso.", C: "Si lo tuyo es dibujar, quizá el plan B sea simplemente seguir dibujando. Empieza por este canal." },
            reply: { A: "Malena saca una libreta. «Sí. Me gusta la idea.»", B: "Malena saca una libreta del abrigo. «Siempre la llevo. Lo había olvidado.»", C: "Malena saca una libreta del abrigo. «Llevo un año dibujando para ellos. Esta noche dibujo para mí.»" },
            mood: "smile", end: "dibuja",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "No sé qué hacer. Pero no estás sola.", B: "No tengo la respuesta, pero no estás sola en esto.", C: "No tengo un plan B para ti. Pero sí tengo tiempo y compañía, si te sirven." },
            reply: { A: "Malena se ríe y te abraza. «¿Sabes qué? Tampoco me gustaba mucho ese estudio.»", B: "Malena te abraza riéndose. «¿Sabes lo peor? Ese estudio ni siquiera me gustaba tanto. Lloraba por orgullo.»", C: "Malena te abraza y se ríe. «Confesión final: el estudio me caía fatal. Lloraba por orgullo, no por amor.»" },
            mood: "love", end: "abrazo",
          },
        },
      },
      calmar: {
        who: "malena", mood: "scared",
        line: {
          A: "Malena tiene miedo. Toma su bolso y te mira.",
          B: "Malena aprieta el bolso contra el pecho. Mira a su alrededor buscando a alguien.",
          C: "Malena te mira con el bolso por delante, como si fuera un escudo. Ya no llora: ahora tiene otro problema.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón, perdón. Lo guardo. Solo quiero ayudar.", B: "Perdóname, lo guardo ya mismo. Solo quería ver si estabas bien.", C: "Perdona, fue una entrada pésima. Lo guardo y te pregunto otra vez: ¿estás bien?" },
            reply: { A: "Malena respira. «Bueno… Me asustaste mucho.»", B: "Malena respira despacio. «Bueno. Qué susto. Ya tenía bastante con lo mío.»", C: "«Ahora mejor», dice Malena, todavía temblando. «Mi noche iba mal, pero no tanto.»" },
            mood: "worried", next: "mensaje",
          },
          {
            id: "explicar",
            say: { A: "No es nada. Es normal llevar esto.", B: "No es para tanto, en serio. Lo llevo siempre.", C: "Es solo un accesorio, de verdad. No le des importancia." },
            reply: { A: "Malena no responde. Se va rápido hacia el puente.", B: "Malena no se lo cree. Toma sus cosas y se va casi corriendo.", C: "«Un accesorio», repite Malena, y se aleja a paso muy rápido sin mirar atrás." },
            mood: "scared", end: "corre",
          },
          {
            id: "alejarse",
            say: { A: "Perdón. Me voy. Lo siento.", B: "Perdona el susto. Me alejo, no te preocupes.", C: "Te pido disculpas. Me voy y te dejo en paz, que ya tienes suficiente." },
            reply: { A: "Malena se sienta otra vez, sola.", B: "Malena asiente sin decir nada y se vuelve a sentar.", C: "Malena asiente, aliviada, y vuelve a sentarse frente al agua." },
            mood: "sad", end: "espacio",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón. No tengas miedo. Solo vi que llorabas.", B: "Perdóname, de verdad. Solo vi que llorabas y me preocupé.", C: "Perdóname: empecé fatal. Solo vi a alguien llorando y no quise pasar de largo." },
            reply: { A: "Malena se calma. «Bueno… Tienes cara de buena persona.»", B: "Malena se calma poco a poco. «Bueno… Tienes cara de buena persona. Rara, pero buena.»", C: "Malena baja el bolso. «Raro, pero sincero. Me sirve», y casi se ríe al decirlo." },
            mood: "love", next: "mensaje",
          },
        },
      },
      "cuchillo-inicio": {
        who: "malena", mood: "terror",
        line: {
          A: "La chica ve tu cuchillo y salta del banco. Grita. «¡¿Qué haces con ese cuchillo?! ¡No te acerques! ¡Voy a llamar a la policía!»",
          B: "La chica ve el cuchillo antes que tu cara. Se levanta de un salto, con el celular como escudo. «¡¿Qué haces con un cuchillo?! ¡No te acerques así! ¡Tengo a la policía en el celular!»",
          C: "La chica deja de llorar en seco: acaba de ver el cuchillo. Retrocede hasta la baranda, celular en alto. «¿Estás loco? ¿Con un cuchillo, de noche, a una que está llorando? Un paso más y llamo a la policía.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas el cuchillo despacio.", B: "Guardas el cuchillo muy despacio, con las manos a la vista.", C: "Guardas el cuchillo con una lentitud exagerada, como quien desactiva algo." },
            say: { A: "Perdón, perdón. Ya lo guardo. No es para ti.", B: "Perdona, lo guardo ahora mismo. No es para ti, de verdad. Solo vi que llorabas.", C: "Lo guardo, mira: ya está. Entiendo el susto. Lo llevo por trabajo, no por ti, y vine solo a preguntar si estabas bien." },
            reply: { A: "La chica respira, pero no se sienta. «No me acerques eso nunca más. Me llamo Malena.»", B: "La chica respira hondo sin soltar el celular. «Bueno. Guardado. Pero no vuelvas a sacarlo. Soy Malena.»", C: "La chica baja el celular unos centímetros, no más. «Guardado. Eso ayuda. Malena. Y todavía te tengo bajo observación.»" },
            mood: "scared", next: "cuchillo-calma",
          },
          {
            id: "trabajo",
            say: { A: "Tranquila. Es para el trabajo. Trabajo en una cocina.", B: "Tranquila, es del trabajo. Soy cocinero y salgo del turno. Ni me acordaba de que lo llevaba.", C: "Calma, por favor: es un cuchillo de cocina y yo, un cocinero que acaba de salir del turno. Lo olvidé en el bolsillo, nada más." },
            reply: { A: "La chica mira el cuchillo otra vez. «¿Cocinero? Guárdalo. Ahora.»", B: "La chica mira el cuchillo, luego a ti, luego el cuchillo. «¿Cocinero? Pues guárdalo, porque yo no soy una cebolla.»", C: "«¿Cocinero?», repite la chica, sin fiarse del todo. «Entonces trátame como a un plato delicado y guárdalo ya.»" },
            mood: "worried", next: "cuchillo-calma",
          },
          {
            id: "broma",
            say: { A: "¿La policía? ¿Por un cuchillo? Qué exagerada.", B: "¿La policía por un cuchillito? No exageres, mujer, que no es para tanto.", C: "¿La policía? Por favor. Si llamaras a la policía por cada cuchillo de esta ciudad, no te atenderían nunca." },
            reply: { A: "La chica marca el número. «¿Exagerada? ¡Hola, policía! ¡Un hombre con un cuchillo en la Costanera!»", B: "La chica no lo duda: marca y habla. «¿Policía? Hay un tipo con un cuchillo en la Costanera, junto al puente. Sí, ahora mismo.»", C: "La chica te mira con una calma peligrosa y marca. «¿Policía? Un hombre con un cuchillo que opina que exagero. Costanera, frente al puente.»" },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-calma": {
        who: "malena", mood: "scared",
        line: {
          A: "Malena se sienta en la punta del banco, lejos de ti. «Todavía me tiemblan las manos. ¿Sabes qué pasa? Hoy ya tuve un día horrible.»",
          B: "Malena se sienta en la otra punta del banco, con el bolso en medio como frontera. «Me tiemblan las manos por tu cuchillo y por un mensaje. Hoy un estudio de animación me dijo que no.»",
          C: "Malena se sienta lo más lejos que permite el banco, con el bolso de barricada. «Ahora me tiemblan las manos por dos motivos: tu cuchillo y un mensaje de un estudio de animación que acaba de decirme que no.»",
        },
        options: [
          {
            id: "disculpa",
            say: { A: "Perdón otra vez por el susto. ¿Qué pasó con el estudio?", B: "Perdóname otra vez por el susto. ¿Qué pasó con ese estudio?", C: "Te pido perdón de nuevo: fue un susto que no necesitabas. ¿Qué pasó con ese estudio?" },
            reply: { A: "Malena mira el agua. «Un año de dibujos. Y hoy: “no”. Pero bueno, por lo menos nadie me cortó.»", B: "Malena mira el canal. «Un año preparando mi carpeta y hoy me dicen “gracias, pero no”. Lo peor de la noche eras tú hasta hace un minuto.»", C: "Malena mira el agua. «Un año entero de dibujos para un “gracias, pero no”. Pensé que nada podía empeorar la noche; luego llegaste tú con un cuchillo.»" },
            mood: "sad", next: "cuchillo-charla",
          },
          {
            id: "quedarse",
            say: { A: "No tengo prisa. Si quieres, me quedo aquí, lejos.", B: "No tengo prisa. Me quedo en esta punta del banco, sin moverme, si te parece bien.", C: "Me quedo aquí, en mi punta del banco, quieto como una estatua. Sin cuchillo, sin preguntas, si prefieres." },
            reply: { A: "Malena asiente. «Bueno. Pero lejos.»", B: "Malena asiente despacio. «Bueno. Pero lejos, y con las manos donde las vea.»", C: "Malena asiente. «De acuerdo. Lejos, y con las manos donde yo pueda verlas, señor cocinero.»" },
            mood: "worried", end: "cuchillo-banco",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Ya te asusté bastante.", B: "Mejor me voy, ya te asusté bastante por hoy.", C: "Creo que lo mejor que puedo hacer por ti esta noche es irme. Ya te he dado suficiente susto." },
            reply: { A: "Malena no dice nada. Mira el agua.", B: "Malena no contesta. Vuelve a mirar el agua, todavía con el celular en la mano.", C: "Malena no responde; solo vuelve la cara hacia el agua, con el celular todavía listo por si acaso." },
            mood: "sad", end: "espacio",
          },
        ],
      },
      "cuchillo-charla": {
        who: "malena", mood: "worried",
        line: {
          A: "Malena se ríe un poco, nerviosa. «Qué noche. Un “no” y un cuchillo. ¿Y ahora qué hago?»",
          B: "Malena suelta una risa nerviosa. «Vaya noche: un rechazo y un desconocido con un cuchillo. ¿Qué hago ahora, me voy a casa o me quedo a ver qué más pasa?»",
          C: "Malena se ríe, todavía temblando. «Esta noche tiene de todo: un rechazo profesional y un cocinero armado. ¿Qué sigue? ¿Me voy a casa o espero el siguiente capítulo?»",
        },
        options: [
          {
            id: "casa",
            say: { A: "Vete a casa, descansa. Mañana dibujas otra vez.", B: "Vete a casa y descansa. Mañana, con calma, vuelves a dibujar.", C: "Vete a casa y duerme. Mañana el “no” pesará menos, y el cuchillo será una anécdota." },
            reply: { A: "Malena se levanta. «Sí. Y no le cuento a nadie lo del cuchillo.»", B: "Malena se levanta y se cuelga el bolso. «Sí. Y lo del cuchillo no se lo cuento a nadie, que no me creen.»", C: "Malena se levanta. «De acuerdo. Lo del cuchillo me lo guardo: nadie me creería que terminé charlando contigo.»" },
            mood: "smile", end: "casa",
          },
          {
            id: "policia-yo",
            say: { A: "Si quieres, llamas a la policía y yo espero aquí. Para que estés tranquila.", B: "Si todavía tienes miedo, llama a la policía y yo espero aquí contigo. Prefiero eso a que te quedes asustada.", C: "Si te queda algo de miedo, llama a la policía y yo me quedo aquí sentado hasta que lleguen. Prefiero una patrulla a dejarte asustada." },
            reply: { A: "Malena te mira sorprendida. «No… Ya no hace falta. Pero gracias.»", B: "Malena te mira, sorprendida. «No, ya no hace falta. Nadie que quiera hacerme daño ofrece eso.»", C: "Malena te observa, desconcertada. «No hace falta. La gente peligrosa no ofrece esperar a la patrulla.»" },
            mood: "smile", end: "cuchillo-banco",
          },
          {
            id: "pedir-dibujo",
            say: { A: "¿Me dibujas con el cuchillo? Para recordar esta noche.", B: "¿Me dibujas con el cuchillo en la mano? Así recuerdas que el susto terminó bien.", C: "Dibújame con el cuchillo en la mano, cara de cocinero tonto incluida. Que esta noche termine en un dibujo y no en una denuncia." },
            reply: { A: "Malena se ríe. «¡Sí! Con cara de tonto.»", B: "Malena se ríe por fin. «Está bien. Pero te dibujo con cara de tonto, que es la verdad.»", C: "Malena se ríe de verdad. «Trato hecho. Te pongo cara de tonto; el cuchillo lo dibujo pequeñito, por piedad.»" },
            mood: "smile", end: "cuchillo-dibujo",
          },
        ],
      },
      "pistola-inicio": {
        who: "malena", mood: "terror",
        line: {
          A: "La chica ve tu pistola. Levanta las manos. Llora más. «No, por favor. Toma el celular. Toma el bolso. Pero no me hagas nada.»",
          B: "La chica ve la pistola y levanta las manos, con las lágrimas todavía en la cara. «No, por favor, no. Toma el celular, toma el bolso, llévate todo. Pero no me hagas nada.»",
          C: "La chica ve la pistola y levanta las manos sin dejar de llorar. «Perfecto, justo lo que faltaba. Toma el celular, el bolso, lo que quieras. Solo no me hagas nada, por favor.»",
        },
        options: [
          {
            id: "bajar",
            act: { A: "Guardas la pistola.", B: "Guardas la pistola y le muestras las manos vacías.", C: "Guardas la pistola y le enseñas las palmas, como quien se rinde." },
            say: { A: "Baja las manos, por favor. No es un robo. No quiero nada.", B: "Baja las manos, por favor. Esto no es un robo, no quiero tu celular ni tu bolso.", C: "Baja las manos, te lo pido. No es un asalto: no quiero tu celular, ni tu bolso, ni nada tuyo." },
            reply: { A: "La chica baja las manos despacio. Tiembla. «¿Entonces qué quieres?»", B: "La chica baja las manos muy despacio, sin dejar de temblar. «¿Y entonces qué quieres de mí?»", C: "La chica baja las manos milímetro a milímetro. «Si no es un robo, ¿qué es? Porque con una pistola, todo parece un robo.»" },
            mood: "scared", next: "pistola-temblor",
          },
          {
            id: "llorar",
            say: { A: "No quiero tu celular. Solo quiero saber por qué lloras.", B: "No quiero tu celular. Vi que llorabas y vine a preguntar, nada más.", C: "Guarda ese celular. Lo único que quiero es saber por qué una chica llora sola junto al agua." },
            reply: { A: "La chica no entiende. «¿Lloro… y tú tienes una pistola? ¡Guárdala, por favor!»", B: "La chica te mira sin entender nada. «¿Me preguntas por qué lloro con una pistola en la mano? ¡Guárdala, por favor!»", C: "La chica te mira como a un loco. «¿Me preguntas eso con una pistola en la mano? Guárdala y quizá te lo cuente.»" },
            mood: "scared", next: "pistola-temblor",
          },
          {
            id: "juguete",
            say: { A: "Tranquila, es de juguete.", B: "Tranquila, mujer, que es de juguete.", C: "Relájate, es de juguete. Una pistola de verdad pesaría más, créeme." },
            reply: { A: "La chica no te cree. Toma su bolso y corre. «¡Socorro!»", B: "La chica no te cree ni un segundo. Agarra el bolso y sale corriendo. «¡Socorro! ¡Tiene una pistola!»", C: "La chica no se queda a comprobarlo. Agarra el bolso y huye gritando. «¡Socorro! ¡Un hombre armado en la Costanera!»" },
            mood: "terror", end: "pistola-corre",
          },
        ],
      },
      "pistola-temblor": {
        who: "malena", mood: "scared",
        line: {
          A: "Malena se sienta porque le tiemblan las piernas. «Me llamo Malena. Hoy me dijeron que no en un trabajo. Y ahora esto.»",
          B: "Malena se deja caer en el banco porque las piernas no la sostienen. «Soy Malena. Hoy un estudio de animación me rechazó, y ahora un desconocido con pistola me pregunta por qué lloro.»",
          C: "Malena se sienta porque las piernas no le responden. «Malena. Hoy un estudio de animación me dijo que no, y ahora un hombre armado se interesa por mis sentimientos. Qué noche.»",
        },
        options: [
          {
            id: "sentarse",
            say: { A: "Perdón por el susto. Me siento lejos. ¿Qué trabajo era?", B: "Perdón por el susto. Me siento en la otra punta del banco. ¿Qué trabajo era ese?", C: "Te debo una disculpa enorme. Me siento aquí, lejos, sin tocar nada. ¿Qué trabajo era?" },
            reply: { A: "Malena respira. «Dibujar personajes. Animales. Como los patos de allí.»", B: "Malena respira hondo. «Diseñar personajes. Animales, sobre todo. Como esos patos de allí, pero con corbata.»", C: "Malena respira por fin. «Diseñar personajes. Animales con problemas, básicamente. Como esos patos, que me miran igual que tú hace un minuto.»" },
            mood: "worried", next: "pistola-noticia",
          },
          {
            id: "policia",
            say: { A: "Si quieres, llama a la policía. Yo espero aquí, sin la pistola.", B: "Si quieres, llama a la policía. Yo espero aquí sentado, con las manos a la vista.", C: "Si te deja más tranquila, llama a la policía. Me quedo aquí, con las manos donde las veas, hasta que lleguen." },
            reply: { A: "Malena llama. Una patrulla llega en dos minutos.", B: "Malena no lo piensa: llama. Una patrulla aparece en dos minutos, con las luces encendidas.", C: "Malena marca sin dudarlo. En dos minutos, una patrulla ilumina la Costanera de azul." },
            mood: "worried", end: "pistola-policia",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Perdón.", B: "Mejor me voy. Perdóname por todo esto.", C: "Me voy, es lo más sensato. Lamento haberte dado un susto así." },
            reply: { A: "Malena no dice nada. Se queda con las manos en la cara.", B: "Malena no contesta. Se queda con la cara entre las manos, más sola que antes.", C: "Malena no dice nada. Se queda con la cara entre las manos, y tú sabes que acabas de empeorar su noche." },
            mood: "sad", end: "pistola-sola",
          },
        ],
      },
      "pistola-noticia": {
        who: "malena", mood: "worried",
        line: {
          A: "Malena mira el agua. «Qué noche. Un “no” y una pistola. ¿Y ahora qué hago?»",
          B: "Malena mira el canal. «Vaya noche: un “no” y una pistola. ¿Qué hago ahora, me voy a casa o espero a que pase algo peor?»",
          C: "Malena mira el agua, agotada. «Un rechazo y una pistola en la misma noche. ¿Qué me recomiendas, irme a casa o quedarme a ver si cae un meteorito?»",
        },
        options: [
          {
            id: "casa",
            say: { A: "Ve a casa. Descansa. Mañana dibujas.", B: "Vete a casa y descansa. Mañana vuelves a dibujar, con calma.", C: "Vete a casa y duerme. El “no” se cura dibujando mañana; lo de la pistola, olvidándome." },
            reply: { A: "Malena se levanta. «Sí. Y tú guarda eso para siempre.»", B: "Malena se levanta. «Sí. Y tú guarda esa pistola para siempre, por favor.»", C: "Malena se levanta. «Me voy. Y tú, por favor, tira esa pistola al canal antes de asustar a alguien más.»" },
            mood: "smile", end: "casa",
          },
          {
            id: "puente",
            say: { A: "Te acompaño hasta el puente. Sin pistola, lo prometo.", B: "Te acompaño hasta el puente, si quieres. La pistola se queda guardada, prometido.", C: "Te acompaño hasta el puente, si me lo permites. La pistola no vuelve a salir, palabra." },
            reply: { A: "Malena duda, después acepta. «Bueno. Pero tú caminas delante.»", B: "Malena lo piensa y asiente. «Está bien. Pero caminas delante de mí, donde te vea.»", C: "Malena lo medita y accede. «Está bien. Pero caminas delante, y yo decido la distancia.»" },
            mood: "smile", end: "pistola-puente",
          },
          {
            id: "patos",
            say: { A: "Mira los patos. ¿Los dibujas? Con corbata.", B: "Mira esos patos. ¿Por qué no los dibujas ahora, con corbata y todo?", C: "Ahí tienes a tus patos con corbata. Dibújalos ahora, que esta noche merece quedar en papel." },
            reply: { A: "Malena saca un lápiz. «Bueno. Pero tú no te muevas. Ni la pistola.»", B: "Malena saca un lápiz del bolso. «De acuerdo. Pero no te muevas, y la pistola tampoco.»", C: "Malena saca un lápiz. «Está bien. Tú quieto, la pistola quieta, y los patos que hagan lo que quieran.»" },
            mood: "smile", end: "dibuja",
          },
        ],
      },
      "granada-inicio": {
        who: "malena", mood: "terror",
        line: {
          A: "La chica ve tu granada y grita muy fuerte. «¡¡Una granada!! ¡¡Socorro!!» Los patos salen volando. La gente del paseo mira.",
          B: "La chica ve la granada y suelta un grito que cruza el canal. «¡¡Una granada!! ¡¡Socorro!!» Los patos salen volando y medio paseo se da vuelta.",
          C: "La chica ve la granada y grita con una potencia que no esperabas de alguien que lloraba. «¡¡Una granada!! ¡¡Socorro!!» Los patos despegan y el paseo entero se vuelve hacia ustedes.",
        },
        options: [
          {
            id: "llavero",
            say: { A: "¡No grites! Es un llavero. Es falsa.", B: "¡No grites, por favor! Es un llavero, es de mentira.", C: "¡No grites! Es un llavero decorativo, de muy mal gusto, lo admito, pero de mentira." },
            reply: { A: "La chica se esconde detrás del banco. «¿Un llavero? ¿Quién tiene un llavero así?»", B: "La chica se agacha detrás del banco. «¿Un llavero? ¿Quién lleva un llavero con forma de granada?»", C: "La chica se parapeta detrás del banco. «¿Un llavero? ¿Qué clase de persona elige una granada como llavero?»" },
            mood: "scared", next: "granada-duda",
          },
          {
            id: "verguenza",
            say: { A: "Por favor, no grites. Todos nos miran. Qué vergüenza.", B: "Por favor, deja de gritar, que nos mira todo el paseo. Qué vergüenza.", C: "Te lo suplico, deja de gritar: nos mira hasta el pescador. Me muero de vergüenza." },
            reply: { A: "La chica grita más bajo. «¿Vergüenza? ¡Tú tienes una granada!»", B: "La chica baja el volumen, pero no mucho. «¿Vergüenza tú? ¡Eres tú el que lleva una granada!»", C: "La chica grita un poco menos. «¿Vergüenza? ¿Te da vergüenza el grito y no la granada? Qué prioridades.»" },
            mood: "scared", next: "granada-duda",
          },
          {
            id: "verdad",
            say: { A: "Sí, es de verdad. Por eso yo también lloro.", B: "Sí, es de verdad. Por eso estoy tan nervioso como tú.", C: "Es de verdad, sí. Por eso yo también vengo a llorar al canal: no sé qué hacer con ella." },
            reply: { A: "La chica corre. Otras personas corren. Alguien llama a la policía.", B: "La chica sale corriendo y, detrás de ella, medio paseo. Alguien ya está llamando a la policía.", C: "La chica huye y arrastra con ella a medio paseo. A lo lejos, alguien ya le da tu descripción a la policía." },
            mood: "terror", end: "granada-evacuacion",
          },
        ],
      },
      "granada-duda": {
        who: "malena", mood: "scared",
        line: {
          A: "Malena mira la granada desde detrás del banco. «Me llamo Malena. Si es falsa, dámela. Quiero verla.»",
          B: "Malena mira la granada desde detrás del banco, con un ojo cerrado. «Soy Malena. Si es de mentira, dámela. Quiero verla con mis propias manos.»",
          C: "Malena observa la granada desde su trinchera. «Malena. Si de verdad es de mentira, pásamela. Quiero comprobarlo antes de decidir si sigo gritando.»",
        },
        options: [
          {
            id: "dar",
            act: { A: "Le das la granada.", B: "Le das la granada con cuidado.", C: "Le entregas la granada con una ceremonia absurda." },
            say: { A: "Toma. Pero con cuidado.", B: "Toma. Con cuidado, por favor.", C: "Toma. Con cuidado, aunque no sé muy bien de qué." },
            reply: { A: "Malena la toma. Pesa. Se ríe nerviosa. «Pesa como de verdad. ¡Estás loco!»", B: "Malena la sopesa y suelta una risa nerviosa. «Pesa como una de verdad. Estás completamente loco.»", C: "Malena la sopesa, palidece, y después se ríe con nervios. «Pesa como una de verdad. Estás loco, pero al menos ya no lloro.»" },
            mood: "laugh", next: "granada-risa",
          },
          {
            id: "agua",
            say: { A: "¿Quieres? La tiro al agua.", B: "Si te deja más tranquila, la tiro al canal ahora mismo.", C: "Si así duermes tranquila, la lanzo al canal ahora mismo. Los patos ya se fueron." },
            reply: { A: "Malena asiente. «¡Sí! ¡Tírala!»", B: "Malena asiente con todo el cuerpo. «¡Sí, tírala, tírala!»", C: "Malena asiente con entusiasmo. «Sí. Tírala. Ahora. Lo más lejos posible.»" },
            mood: "surprised", end: "granada-agua",
          },
          {
            id: "quedarse",
            say: { A: "Bueno. Me quedo con ella. ¿Por qué llorabas?", B: "Bueno, me la quedo. Y ahora, ¿me cuentas por qué llorabas?", C: "Me la quedo, entonces. ¿Y ahora me cuentas por qué llorabas, o la granada sigue siendo el tema?" },
            reply: { A: "Malena niega con la cabeza. «No. Vete con tu granada. Por favor.»", B: "Malena niega con la cabeza. «No. Vete con tu granada y déjame llorar en paz.»", C: "Malena niega con la cabeza. «No. Llévate la granada y déjame con mi tristeza, que era más tranquila.»" },
            mood: "sad", end: "granada-sola",
          },
        ],
      },
      "granada-risa": {
        who: "malena", mood: "laugh",
        line: {
          A: "Malena te devuelve la granada. Se ríe y llora a la vez. «Hoy me dijeron que no en un trabajo. Y ahora tengo una granada en la mano. Qué noche.»",
          B: "Malena te devuelve la granada, riéndose y llorando a la vez. «Hoy un estudio de animación me rechazó, y ahora estoy sosteniendo una granada falsa. Esta noche es un dibujo animado.»",
          C: "Malena te devuelve la granada entre risas y lágrimas. «Hoy un estudio de animación me dijo que no, y ahora sostengo una granada de mentira en la Costanera. Si lo dibujara, nadie me creería.»",
        },
        options: [
          {
            id: "dibujar",
            say: { A: "¡Dibújalo! Tú con la granada. Y los patos volando.", B: "¡Pues dibújalo! Tú con la granada y los patos saliendo volando.", C: "Dibújalo, entonces: tú con la granada, los patos huyendo, el paseo entero mirando. Es tu mejor escena." },
            reply: { A: "Malena saca un lápiz. «¡Sí! Esto lo mando al estudio.»", B: "Malena saca un lápiz del bolso. «¡Sí! Esto se lo mando al estudio, a ver si ahora me dicen que no.»", C: "Malena saca un lápiz. «Lo dibujo y se lo mando al estudio. A ver si rechazan una granada.»" },
            mood: "smile", end: "granada-dibujo",
          },
          {
            id: "cafe",
            say: { A: "¿Vamos a tomar algo? Lejos de la granada.", B: "¿Vamos a tomar algo? Yo invito, por el susto.", C: "¿Te invito a algo caliente? Es lo mínimo después de hacerte gritar así." },
            reply: { A: "Malena se seca la cara. «Bueno. Pero la granada se queda en el bolsillo.»", B: "Malena se seca la cara. «Está bien. Pero la granada se queda en el bolsillo toda la noche.»", C: "Malena se seca la cara. «Acepto. Con la condición de que la granada no vuelva a ver la luz.»" },
            mood: "smile", end: "paseo",
          },
          {
            id: "policia-llega",
            say: { A: "Ay. Alguien llamó a la policía. Mira las luces.", B: "Uy. Alguien del paseo llamó a la policía. Mira las luces, ahí vienen.", C: "Vaya. Alguien del paseo se tomó tu grito en serio: esas luces azules vienen por nosotros." },
            reply: { A: "Malena se ríe. «¡Tú explicas lo de la granada! Yo explico lo de los gritos.»", B: "Malena se ríe. «Tú les explicas lo de la granada y yo lo de los gritos. Cada uno con lo suyo.»", C: "Malena se ríe con ganas. «Tú explicas la granada; yo, los gritos. Reparto justo de responsabilidades.»" },
            mood: "laugh", end: "granada-patrulla",
          },
        ],
      },
      "gas-inicio": {
        who: "malena", mood: "scared",
        line: {
          A: "La chica ve tu gas pimienta y saca el suyo. Dos botes, uno frente al otro. «¡Yo también tengo! ¡No te acerques!»",
          B: "La chica ve tu gas pimienta y saca el suyo del bolso en un segundo. Dos botes apuntándose. «¡Yo también tengo! ¡Ni un paso más!»",
          C: "La chica ve tu gas pimienta y, con reflejos de campeona, saca el suyo del bolso. Dos botes frente a frente, como en un duelo. «Yo también tengo. Ni un paso más, por favor.»",
        },
        options: [
          {
            id: "bajar",
            act: { A: "Bajas tu bote.", B: "Bajas tu bote despacio.", C: "Bajas tu bote primero, como gesto de buena voluntad." },
            say: { A: "Tranquila. Yo lo bajo primero. ¿De acuerdo?", B: "Tranquila. Lo bajo yo primero, ¿de acuerdo? Nadie quiere llorar más esta noche.", C: "Calma. Lo bajo yo primero, ¿de acuerdo? Ya hay suficientes lágrimas en este banco sin necesidad de pimienta." },
            reply: { A: "La chica baja el suyo un poco. «Bueno. Pero lo tengo en la mano. Soy Malena.»", B: "La chica baja el suyo, pero no lo guarda. «Está bien. Pero lo tengo en la mano. Me llamo Malena.»", C: "La chica baja el suyo unos centímetros. «De acuerdo. Pero sigue en mi mano. Malena, y no me fío de nadie esta noche.»" },
            mood: "worried", next: "gas-tregua",
          },
          {
            id: "noche",
            say: { A: "Es solo por la noche. Es normal, ¿no? Tú también tienes.", B: "Lo llevo por la noche, nada más. Es normal, ¿no? Tú también tienes uno.", C: "Lo llevo por la noche, como media ciudad. Tú también tienes uno, así que entendemos la lógica." },
            reply: { A: "La chica piensa. «Sí. Es normal. Pero no me gusta. Me llamo Malena.»", B: "La chica lo piensa un momento. «Sí, es normal. No me gusta, pero es normal. Me llamo Malena.»", C: "La chica lo considera. «Es normal, sí. Deprimente, pero normal. Malena. Y seguimos apuntándonos.»" },
            mood: "worried", next: "gas-tregua",
          },
          {
            id: "duelo",
            say: { A: "A ver quién dispara primero.", B: "A ver quién aprieta primero.", C: "Bueno, parece que esto es un duelo. A ver quién aprieta primero." },
            reply: { A: "Ella aprieta primero. Te arden los ojos. Malena corre.", B: "Ella aprieta primero, claro. Te arden los ojos y, entre lágrimas, la ves correr hacia el puente.", C: "Ella aprieta primero, sin dudarlo. Te arden los ojos y, entre lágrimas, distingues a Malena corriendo hacia el puente." },
            mood: "pain", end: "gas-ojos",
          },
        ],
      },
      "gas-tregua": {
        who: "malena", mood: "worried",
        line: {
          A: "Malena guarda su bote. «Qué par. Los dos con gas pimienta. Lloraba por un mensaje. Hoy me dijeron que no en un trabajo.»",
          B: "Malena guarda el bote, por fin. «Qué par de paranoicos. Yo lloraba por un mensaje: hoy un estudio de animación me dijo que no.»",
          C: "Malena guarda el bote, con un suspiro. «Menudo par: dos desconocidos apuntándose con pimienta. Yo lloraba por un mensaje: un estudio de animación acaba de decirme que no.»",
        },
        options: [
          {
            id: "contar",
            say: { A: "Lo siento. ¿Qué trabajo era?", B: "Lo siento mucho. ¿Qué trabajo era?", C: "Lo siento de verdad. ¿Qué trabajo era, si se puede saber?" },
            reply: { A: "Malena se sienta. «Dibujar personajes. Animales. Como esos dos patos que nos miran.»", B: "Malena se sienta otra vez. «Diseñar personajes. Animales, sobre todo. Como esos dos patos que nos miraron apuntarnos.»", C: "Malena vuelve a sentarse. «Diseñar personajes. Animales, básicamente. Como esos dos patos que acaban de vernos hacer el ridículo.»" },
            mood: "sad", next: "gas-charla",
          },
          {
            id: "acompanar",
            say: { A: "Te acompaño hasta el puente. Los dos con el gas guardado.", B: "Te acompaño hasta el puente, si quieres. Los dos con el gas bien guardado.", C: "Te acompaño hasta el puente, si te parece. Los dos con el gas guardado y las manos a la vista." },
            reply: { A: "Malena sonríe un poco. «Bueno. Pero tú a la izquierda.»", B: "Malena sonríe un poquito. «Está bien. Pero tú caminas a la izquierda, lejos de mi bolso.»", C: "Malena sonríe apenas. «De acuerdo. Tú a la izquierda, a distancia de pimienta.»" },
            mood: "smile", end: "gas-vecinos",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Perdón por el susto.", B: "Mejor me voy. Perdona por el susto, no era mi intención.", C: "Me voy, que ya te he dado bastante susto por una noche. Perdona." },
            reply: { A: "Malena asiente. «Sí. Mejor.»", B: "Malena asiente. «Sí, mejor. Buenas noches.»", C: "Malena asiente, aliviada. «Sí, mejor. Buenas noches, y guarda bien eso.»" },
            mood: "sad", end: "espacio",
          },
        ],
      },
      "gas-charla": {
        who: "malena", mood: "smile",
        line: {
          A: "Malena se ríe un poco. «Dos personas con gas pimienta hablando de dibujos. Qué noche. ¿Y ahora qué hago?»",
          B: "Malena se ríe por fin. «Dos desconocidos con gas pimienta hablando de dibujos animados. ¿Y ahora qué hago con mi vida?»",
          C: "Malena se ríe, por primera vez sin lágrimas. «Dos desconocidos armados con pimienta hablando de animación. ¿Y ahora qué hago, dibujo esto o me voy a casa?»",
        },
        options: [
          {
            id: "dibujar",
            say: { A: "Dibújanos. Los dos con el gas. Es gracioso.", B: "Dibújanos: los dos apuntándonos con el gas. Es demasiado gracioso para perderlo.", C: "Dibújanos, por favor: dos tontos apuntándose con pimienta frente al canal. Si eso no es un personaje, no sé qué lo es." },
            reply: { A: "Malena saca un lápiz. «Sí. Con los patos mirando.»", B: "Malena saca un lápiz. «Hecho. Y los patos que nos miran con cara de juicio.»", C: "Malena saca un lápiz. «Vendido. Y los patos de jueces, con corbata.»" },
            mood: "smile", end: "gas-amigos",
          },
          {
            id: "casa",
            say: { A: "Ve a casa y descansa. Mañana es otro día.", B: "Vete a casa y descansa. Mañana lo ves todo diferente.", C: "Vete a casa y duerme. Mañana el “no” pesa menos, y lo de la pimienta será una anécdota." },
            reply: { A: "Malena se levanta. «Sí. Y guardo el gas. Esta noche ya no hace falta.»", B: "Malena se levanta. «Sí. Y el gas, al fondo del bolso. Esta noche ya no hace falta.»", C: "Malena se levanta. «De acuerdo. El gas, al fondo del bolso: esta noche ya tuvo su momento.»" },
            mood: "smile", end: "casa",
          },
          {
            id: "patos",
            say: { A: "¿Caminamos hasta el puente? Los patos ya volvieron.", B: "¿Caminamos hasta el puente? Mira, los patos ya volvieron.", C: "¿Caminamos hasta el puente? Los patos ya volvieron; parece que nos perdonaron." },
            reply: { A: "Malena sonríe. «Bueno. Pero el gas, guardado.»", B: "Malena sonríe. «Está bien. Pero el gas, guardado, los dos.»", C: "Malena sonríe. «Vamos. Con el gas guardado, los dos, como gente normal.»" },
            mood: "smile", end: "gas-vecinos",
          },
        ],
      },
      "lapiz-inicio": {
        who: "malena", mood: "surprised",
        line: {
          A: "La chica ve tu lápiz y deja de llorar. «¿Un lápiz 4B? ¿Dibujas? Yo también. Bueno, yo dibujaba.»",
          B: "La chica ve el lápiz en tu mano y se olvida de llorar un segundo. «¿Eso es un 4B? ¿Dibujas? Yo también. Bueno, hasta hoy.»",
          C: "La chica se fija en tu lápiz antes que en ti y se le corta el llanto. «¿Un 4B? ¿Dibujas? Yo también. Al menos hasta hace media hora.»",
        },
        options: [
          {
            id: "poco",
            say: { A: "Un poco. ¿Y tú? ¿Por qué dibujabas?", B: "Un poco, mal. ¿Y tú? ¿Por qué “dibujabas”, en pasado?", C: "Un poco, sin talento. ¿Y por qué “dibujaba”, en pasado? Eso suena a historia." },
            reply: { A: "La chica saca el celular. «Hoy un estudio me dijo que no. Soy Malena.»", B: "La chica te muestra un mensaje en el celular. «Hoy un estudio de animación me dijo que no. Me llamo Malena.»", C: "La chica te enseña un mensaje. «Hoy un estudio de animación me rechazó. Malena. Y el pasado es por eso.»" },
            mood: "sad", next: "lapiz-reto",
          },
          {
            id: "escribo",
            say: { A: "No, yo escribo. Pero el lápiz es tuyo si lo quieres.", B: "No, yo escribo. Pero te lo presto, si te sirve.", C: "Yo escribo, no dibujo. Pero el lápiz es tuyo si le das mejor uso que yo." },
            reply: { A: "La chica toma el lápiz. «Gracias. Hoy me dijeron que no en un estudio. Soy Malena.»", B: "La chica toma el lápiz como quien toma la mano de alguien. «Gracias. Hoy un estudio me dijo que no. Soy Malena.»", C: "La chica acepta el lápiz como si fuera un salvavidas. «Gracias. Hoy un estudio de animación me dijo que no. Malena.»" },
            mood: "sad", next: "lapiz-reto",
          },
          {
            id: "regalo",
            act: { A: "Le das el lápiz.", B: "Le pones el lápiz en la mano.", C: "Le dejas el lápiz en la mano, sin ceremonia." },
            say: { A: "Es para ti. No dejes de dibujar.", B: "Quédatelo. Y no dejes de dibujar, por favor.", C: "Es tuyo. Con la única condición de que no dejes de dibujar." },
            reply: { A: "La chica mira el lápiz y llora, pero sonríe. «Gracias. Soy Malena.»", B: "La chica mira el lápiz y llora otra vez, pero ahora sonríe. «Gracias. Me llamo Malena.»", C: "La chica mira el lápiz y vuelve a llorar, aunque esta vez sonríe. «Gracias. Malena. Esto es más de lo que me dieron hoy.»" },
            mood: "smile", end: "lapiz-regalo",
          },
        ],
      },
      "lapiz-reto": {
        who: "malena", mood: "smile",
        line: {
          A: "Malena saca un papel. «Un reto. Tú dibujas un pato. Yo dibujo otro. El peor paga un café.»",
          B: "Malena saca una servilleta del bolso. «Un reto: tú dibujas un pato con el lápiz, yo dibujo otro. El peor paga el café.»",
          C: "Malena saca una servilleta arrugada. «Te propongo un duelo: un pato cada uno, con tu lápiz. Quien lo haga peor paga el café.»",
        },
        options: [
          {
            id: "aceptar",
            act: { A: "Dibujas un pato horrible.", B: "Dibujas un pato bastante horrible.", C: "Dibujas un pato de una fealdad notable." },
            say: { A: "Listo. Mi pato. ¿Y el tuyo?", B: "Listo, aquí está mi pato. A ver el tuyo.", C: "Ahí lo tienes: mi pato. Ahora enséñame el tuyo y aceptemos la humillación." },
            reply: { A: "Malena dibuja un pato perfecto, con corbata. Se ríe. «Pagas tú.»", B: "Malena dibuja en diez segundos un pato perfecto, con corbata. Se ríe. «Pagas tú, claramente.»", C: "Malena dibuja en diez segundos un pato perfecto con corbata. Se ríe de verdad. «Pagas tú, sin discusión.»" },
            mood: "laugh", end: "lapiz-patos",
          },
          {
            id: "animar",
            say: { A: "Tu pato es mejor. Manda tu dibujo a otro estudio.", B: "Tu pato es muchísimo mejor. Manda tus dibujos a otro estudio mañana.", C: "Tu pato es de otro nivel. Mañana mandas la carpeta a otro estudio, y si dicen que no, a otro." },
            reply: { A: "Malena guarda el papel. «Sí. Mañana. Con este lápiz.»", B: "Malena guarda la servilleta. «Sí. Mañana mismo. Y con este lápiz, para tener suerte.»", C: "Malena dobla la servilleta. «Mañana. Con este lápiz como amuleto, aunque no sea mío.»" },
            mood: "smile", end: "lapiz-portafolio",
          },
          {
            id: "hablar",
            say: { A: "Antes del reto, cuéntame qué pasó con el estudio.", B: "Antes del reto, cuéntame qué pasó con ese estudio.", C: "Antes de ningún duelo, cuéntame qué pasó con ese estudio; los patos pueden esperar." },
            reply: { A: "Malena baja el lápiz. «Un año de dibujos. Y hoy, “no”.»", B: "Malena baja el lápiz. «Un año preparando mi carpeta. Y hoy, un “gracias, pero no”.»", C: "Malena baja el lápiz. «Un año entero de carpeta para un “gracias, pero no”. Así de simple.»" },
            mood: "sad", next: "lapiz-noticia",
          },
        ],
      },
      "lapiz-noticia": {
        who: "malena", mood: "worried",
        line: {
          A: "Malena juega con tu lápiz. «¿Y ahora qué hago? ¿Dibujo otra cosa? ¿Dejo de dibujar?»",
          B: "Malena gira tu lápiz entre los dedos. «¿Y ahora qué hago? ¿Dibujo otra cosa, busco otro estudio, o lo dejo?»",
          C: "Malena hace girar tu lápiz entre los dedos como si fuera una decisión. «¿Y ahora qué? ¿Otro estudio, otra cosa, o dejo de dibujar de una vez?»",
        },
        options: [
          {
            id: "nota",
            say: { A: "Escribe con el lápiz: “Mañana mando otra carpeta”. Y fírmalo.", B: "Escribe con el lápiz, ahora: “Mañana mando otra carpeta”. Y fírmalo, que así vale.", C: "Escribe con ese lápiz: “Mañana mando la carpeta a otro estudio”. Fírmalo; firmado, es un contrato." },
            reply: { A: "Malena escribe y firma. «Listo. Firmado. Ahora tengo que hacerlo.»", B: "Malena escribe la frase y la firma. «Listo. Firmado. Ahora no tengo excusa.»", C: "Malena escribe la frase y la firma con una floritura. «Firmado. Ahora no me queda más remedio que cumplirlo.»" },
            mood: "smile", end: "lapiz-portafolio",
          },
          {
            id: "pato",
            say: { A: "Ahora dibuja el pato. Con corbata. Para mí.", B: "Ahora dibuja el pato con corbata. Para mí, de recuerdo.", C: "Ahora dibuja el pato con corbata, para mí. Quiero el primer dibujo de tu segunda carrera." },
            reply: { A: "Malena dibuja. Un pato con corbata. Se ríe. «Toma. Mi mejor pato.»", B: "Malena dibuja un pato con corbata en un minuto. «Toma. Mi mejor pato, y es tuyo.»", C: "Malena dibuja un pato con corbata en un minuto. «Toma. Mi mejor pato hasta la fecha, y es tuyo.»" },
            mood: "laugh", end: "lapiz-patos",
          },
          {
            id: "descansar",
            say: { A: "Hoy nada. Ve a casa. Mañana decides con el lápiz en la mano.", B: "Hoy no decidas nada. Vete a casa; mañana lo decides con el lápiz en la mano.", C: "Hoy no decidas nada. Vete a casa y mañana lo piensas con el lápiz en la mano, que piensa mejor que la cabeza." },
            reply: { A: "Malena se levanta con el lápiz. «¿Me lo prestas hasta mañana?»", B: "Malena se levanta con el lápiz en la mano. «¿Me lo prestas hasta mañana? Te lo devuelvo.»", C: "Malena se levanta, lápiz en mano. «¿Me lo prestas hasta mañana? Prometo devolverlo con un dibujo.»" },
            mood: "smile", end: "casa",
          },
        ],
      },
      "libro-inicio": {
        who: "malena", mood: "surprised",
        line: {
          A: "La chica ve tu libro y deja de llorar. «¡Ese libro! La portada es de mi profesora. Yo era su alumna.»",
          B: "La chica ve tu libro y se queda mirando la portada. «¡Ese libro! La ilustración es de mi profesora de dibujo. Fui su alumna tres años.»",
          C: "La chica repara en tu libro y el llanto se le corta. «¡Ese libro! La portada la hizo mi profesora de ilustración. Me enseñó todo lo que sé, que hoy, por lo visto, no es suficiente.»",
        },
        options: [
          {
            id: "cuenta",
            say: { A: "¿Tu profesora? ¡Cuéntame! ¿Cómo es ella?", B: "¿Tu profesora hizo esta portada? Cuéntame, ¿cómo es?", C: "¿Tu profesora es la autora de esta portada? Cuéntame cómo es; llevo el libro por la portada, no por el texto." },
            reply: { A: "La chica sonríe. «Es muy buena. Me dijo: “No te rindas”. Hoy me rindo. Soy Malena.»", B: "La chica sonríe entre lágrimas. «Es la mejor. Me decía siempre: “No te rindas”. Y hoy me estoy rindiendo. Soy Malena.»", C: "La chica sonríe con la cara mojada. «Es extraordinaria. Me repetía “no te rindas” en cada clase. Hoy estoy fallándole. Malena.»" },
            mood: "sad", next: "libro-profe",
          },
          {
            id: "porque",
            say: { A: "¿Y por qué lloras con el celular? ¿Pasó algo?", B: "¿Y por qué llorabas con el celular? ¿Pasó algo con el dibujo?", C: "¿Y qué hace una alumna suya llorando frente al celular? ¿Pasó algo con el dibujo?" },
            reply: { A: "La chica muestra el celular. «Un estudio me dijo que no. Hoy. Soy Malena.»", B: "La chica te enseña el celular. «Un estudio de animación me rechazó hoy. Me llamo Malena.»", C: "La chica te muestra el mensaje. «Un estudio de animación me rechazó esta tarde. Malena. Alumna aventajada, por lo visto no tanto.»" },
            mood: "sad", next: "libro-profe",
          },
          {
            id: "regalar",
            act: { A: "Le das el libro.", B: "Le pones el libro en las manos.", C: "Le entregas el libro sin pensarlo dos veces." },
            say: { A: "Es tuyo. Para recordar a tu profesora.", B: "Quédatelo. Para que te acuerdes de tu profesora.", C: "Es tuyo. Que la portada de tu profesora te acompañe a casa esta noche." },
            reply: { A: "La chica abraza el libro. «Gracias. Soy Malena. Hoy fue un día horrible, y esto es lo mejor del día.»", B: "La chica abraza el libro contra el pecho. «Gracias. Soy Malena. Hoy fue un día horrible y esto es lo único bueno.»", C: "La chica aprieta el libro contra el pecho. «Gracias. Malena. Hoy fue un día espantoso, y este libro acaba de salvarlo.»" },
            mood: "smile", end: "libro-regalo",
          },
        ],
      },
      "libro-profe": {
        who: "malena", mood: "worried",
        line: {
          A: "Malena abre tu libro y mira la portada. «Ella me creía buena. Hoy un estudio dijo que no. ¿Quién tiene razón?»",
          B: "Malena abre tu libro por la portada y la acaricia. «Ella creía que yo valía. Hoy un estudio de animación dice que no. ¿Quién tiene razón?»",
          C: "Malena abre tu libro y se queda en la portada. «Ella estaba convencida de que yo valía. Hoy un estudio opina lo contrario. ¿A quién le creo?»",
        },
        options: [
          {
            id: "profesora",
            say: { A: "Tu profesora. Ella te conoce. El estudio no.", B: "A tu profesora, claro. Ella te vio dibujar tres años; el estudio vio un correo.", C: "A tu profesora, sin duda. Ella te vio dibujar durante años; el estudio vio un archivo adjunto." },
            reply: { A: "Malena cierra el libro. «Sí. La voy a llamar. Ahora.»", B: "Malena cierra el libro con decisión. «Tienes razón. La voy a llamar ahora mismo.»", C: "Malena cierra el libro de golpe. «Tienes razón. La llamo ahora, aunque sea tarde.»" },
            mood: "smile", end: "libro-llamada",
          },
          {
            id: "dedicatoria",
            say: { A: "Dibuja algo en mi libro. Al lado de la portada de tu profesora.", B: "Dibuja algo en mi libro, en la primera página, junto a la portada de tu profesora.", C: "Dibuja algo en la primera página de mi libro: alumna y profesora, juntas en el mismo ejemplar." },
            reply: { A: "Malena saca un lápiz y dibuja un pato con corbata. «Listo. Alumna y profesora.»", B: "Malena saca un lápiz y dibuja un pato con corbata en la primera página. «Listo. Alumna y profesora en el mismo libro.»", C: "Malena saca un lápiz y dibuja un pato con corbata en la primera página. «Ahí está. Alumna y profesora, el mismo libro, distinta suerte.»" },
            mood: "smile", end: "libro-dedicatoria",
          },
          {
            id: "estudio",
            say: { A: "El estudio tiene razón hoy. Mañana, tú.", B: "Hoy tiene razón el estudio. Mañana puedes tenerla tú.", C: "Hoy, quizá el estudio. Pero la razón cambia de dueño cada mañana, y mañana puede ser tuya." },
            reply: { A: "Malena piensa. «Mañana. Bueno. Me voy a casa con esa idea.»", B: "Malena lo piensa un rato. «Mañana. Está bien. Me voy a casa con esa idea y con la portada en la cabeza.»", C: "Malena lo medita. «Mañana. De acuerdo. Me llevo esa idea a casa, junto con la portada.»" },
            mood: "worried", end: "casa",
          },
        ],
      },
      "corazon-inicio": {
        who: "malena", mood: "love",
        line: {
          A: "El corazón llega a la chica. Ella deja de llorar y sonríe. Hay corazones en el aire. «¿Qué… qué es esto? Me siento mejor. Qué raro.»",
          B: "El corazón la alcanza en pleno llanto. Malena parpadea, sonríe sin querer, y unos corazones flotan sobre el banco. «¿Qué es esto? De pronto me siento… mejor. Qué raro, y qué bien.»",
          C: "El corazón la envuelve antes de que digas nada. Malena deja de llorar, sonríe y mira los corazones que flotan sobre el banco. «No sé qué acabas de hacer, pero ya no me duele tanto. Qué noche tan extraña.»",
        },
        options: [
          {
            id: "contar",
            say: { A: "Es un corazón. Ahora cuéntame: ¿por qué llorabas?", B: "Es solo un corazón. Ahora, ¿me cuentas por qué llorabas?", C: "Es un corazón, nada más. Ahora que no duele, ¿me cuentas qué te hizo llorar?" },
            reply: { A: "Malena se ríe. «Un estudio me dijo que no. Y en la entrevista dibujé un pato con corbata. Soy Malena.»", B: "Malena se ríe. «Un estudio de animación me dijo que no. En la entrevista, de los nervios, dibujé un pato con corbata. Soy Malena.»", C: "Malena se ríe. «Un estudio de animación me rechazó. En la entrevista, de puros nervios, les dibujé un pato con corbata. Malena, encantada.»" },
            mood: "smitten", next: "corazon-pato",
          },
          {
            id: "abrazo",
            say: { A: "¿Te doy un abrazo? Sin preguntas.", B: "¿Te doy un abrazo? Sin preguntas, sin explicaciones.", C: "¿Te doy un abrazo? Sin preguntas; las explicaciones pueden esperar." },
            reply: { A: "Malena se levanta y te abraza. «Sí. Gracias.»", B: "Malena se levanta y te abraza sin pensarlo. «Sí. Gracias, de verdad.»", C: "Malena se levanta y te abraza como si te conociera de siempre. «Sí. Gracias. Era justo lo que necesitaba.»" },
            mood: "love", end: "abrazo",
          },
          {
            id: "patos",
            say: { A: "Mira, los patos también tienen corazones.", B: "Mira, hasta los patos tienen corazones ahora.", C: "Mira a los patos: hasta ellos están rodeados de corazones. Es contagioso." },
            reply: { A: "Malena se ríe mucho. «¡Es verdad! Soy Malena. Hoy me dijeron que no en un estudio, pero ahora mismo no me importa.»", B: "Malena se ríe con ganas. «¡Es verdad! Soy Malena. Hoy un estudio me dijo que no, pero ahora mismo me da igual.»", C: "Malena se ríe de verdad. «¡Es cierto! Malena. Hoy un estudio me rechazó, y por primera vez en toda la tarde no me importa.»" },
            mood: "smitten", next: "corazon-pato",
          },
        ],
      },
      "corazon-pato": {
        who: "malena", mood: "smitten",
        line: {
          A: "Malena te mira con ojos brillantes. «Eres muy raro. Pero me gustas. ¿Qué hago ahora con mi noche?»",
          B: "Malena te mira con los ojos brillantes. «Eres rarísimo, pero me caes muy bien. ¿Y ahora qué hago con el resto de la noche?»",
          C: "Malena te mira con un brillo nuevo en los ojos. «Eres rarísimo, y me gustas por eso. ¿Qué hago ahora con lo que queda de noche?»",
        },
        options: [
          {
            id: "beso",
            say: { A: "Primero, un beso en la mejilla. Después, lo que quieras.", B: "Primero, un beso en la mejilla. Después, lo que tú decidas.", C: "Primero, un beso en la mejilla, si me lo permites. Después, lo que tú quieras." },
            reply: { A: "Malena te besa la mejilla. «Gracias. Hoy fue horrible y tú lo arreglaste.»", B: "Malena te da un beso en la mejilla. «Gracias. Hoy fue horrible y tú lo arreglaste en cinco minutos.»", C: "Malena te besa la mejilla, despacio. «Gracias. Un día horrible, arreglado en cinco minutos. Eso no lo hace nadie.»" },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "puente",
            say: { A: "Caminamos hasta el puente. Y me cuentas tus personajes.", B: "Caminamos hasta el puente y me cuentas todos tus personajes.", C: "Caminamos hasta el puente y, por el camino, me presentas a todos tus personajes." },
            reply: { A: "Malena toma tu brazo. «Bueno. Empiezo por el pato.»", B: "Malena se cuelga de tu brazo. «Vamos. Empiezo por el pato con corbata, claro.»", C: "Malena se cuelga de tu brazo. «Vamos. Te presento primero al pato con corbata; el resto es su familia.»" },
            mood: "love", end: "corazon-puente",
          },
          {
            id: "dibujar",
            say: { A: "Dibuja. Ahora. Con corazones.", B: "Dibuja ahora mismo. Con corazones, si quieres.", C: "Dibuja ahora, mientras dure esto. Con corazones y todo." },
            reply: { A: "Malena saca un lápiz. «Sí. El canal. Y tú. Y corazones.»", B: "Malena saca un lápiz del bolso. «Sí. El canal, tú, y muchos corazones.»", C: "Malena saca un lápiz. «Sí. El canal, tú en el banco, y corazones por todas partes. Mi primer dibujo feliz en semanas.»" },
            mood: "love", end: "dibuja",
          },
        ],
      },
    },
    ends: {
      abrazo: { text: { A: "Malena te abraza. Ya no llora. Ahora sonríe y mira el agua.", B: "Malena te abraza fuerte. Cuando se separa, ya no llora: tiene una sonrisa nueva.", C: "Malena te abraza un largo rato. Cuando se separa, ya no llora; se ríe sola, como quien acaba de entender algo." }, change: "abraza", recap: "Consolaste a Malena y la hiciste reír." },
      casa: { text: { A: "Malena se va a casa. Antes, te dice adiós con la mano.", B: "Malena se va a su casa más tranquila. Desde el puente, te dice adiós con la mano.", C: "Malena se aleja hacia el puente, más ligera. Antes de cruzarlo, se da vuelta y te saluda." }, change: "se-va", recap: "Convenciste a Malena de ir a casa a descansar." },
      paseo: { text: { A: "Caminas con Malena hasta el puente. Habla de sus dibujos.", B: "Caminas con Malena hasta el puente. Por el camino te cuenta todos los personajes que quiere crear.", C: "Caminas con Malena hasta el puente. Para cuando llegan, ya tiene tres personajes nuevos y ninguna lágrima." }, change: "se-va", recap: "Paseaste con Malena junto al canal." },
      dibuja: { text: { A: "Malena dibuja el canal. Está tranquila.", B: "Malena se queda en el banco dibujando el canal. Parece en paz.", C: "Malena se queda dibujando el canal, concentrada. La noche, de pronto, parece suya." }, change: "se-sienta", recap: "Animaste a Malena a dibujar otra vez." },
      espacio: { text: { A: "Malena se queda sola en el banco. Mira el agua.", B: "Malena se queda en el banco, mirando el agua. Necesita tiempo.", C: "Malena se queda frente al agua. A veces respetar el silencio de alguien también es ayudar." }, change: "triste", recap: "Dejaste a Malena a solas con su tristeza." },
      corre: { text: { A: "Malena se va rápido. No mira atrás.", B: "Malena se aleja deprisa hacia el puente, todavía asustada.", C: "Malena se aleja casi corriendo. Su noche ya era mala, y tú no la mejoraste." }, change: "corre", recap: "Asustaste a Malena y se fue corriendo." },
      "cuchillo-policia": { text: { A: "Una patrulla llega. Malena señala tu cuchillo. Tienes que explicar todo.", B: "Una patrulla aparece en dos minutos. Malena señala tu cuchillo y tú te pasas media hora explicando que eres cocinero.", C: "La patrulla llega en dos minutos. Malena señala el cuchillo y tú pasas la siguiente media hora explicando, sin mucho éxito, lo del turno de cocina." }, change: "policia", recap: "Malena llamó a la policía por tu cuchillo." },
      "cuchillo-banco": { text: { A: "Malena se queda en el banco. Tú, en la otra punta. Miran el agua. Ya no tiene miedo.", B: "Malena se queda en su punta del banco y tú en la tuya. Miran el agua en silencio. El miedo se va poco a poco.", C: "Cada uno en su punta del banco, miran el agua sin hablar. El susto del cuchillo se disuelve despacio, como las luces en el canal." }, change: "se-sienta", recap: "Después del susto del cuchillo, te quedaste con Malena, a distancia." },
      "cuchillo-dibujo": { text: { A: "Malena te dibuja con el cuchillo y cara de tonto. Se ríe. Guarda el dibujo.", B: "Malena te dibuja con el cuchillo y una cara de tonto perfecta. Se ríe tanto que se olvida del rechazo. Guarda el dibujo.", C: "Malena te dibuja con el cuchillo y una cara de tonto que roza el retrato fiel. Se ríe hasta olvidar el rechazo, y guarda el dibujo como prueba." }, change: "sonrie", recap: "Malena convirtió el susto del cuchillo en un dibujo." },
      "pistola-corre": { text: { A: "Malena corre por el paseo gritando. La gente te mira. Tú te vas rápido.", B: "Malena corre por el paseo pidiendo socorro. Todo el mundo te mira. Lo más sensato es irte, y rápido.", C: "Malena huye por el paseo pidiendo socorro, y de pronto todo el paseo te mira. Te vas rápido, con la pistola bien escondida." }, change: "huye", recap: "Malena huyó gritando por tu pistola." },
      "pistola-policia": { text: { A: "Una patrulla llega. Levantas las manos. Malena explica. Tú también. Es una noche muy larga.", B: "Llega una patrulla con las luces encendidas. Levantas las manos. Malena explica, tú explicas, y la noche se hace muy larga.", C: "La patrulla llega con las luces azules. Levantas las manos antes de que te lo pidan. Malena explica, tú explicas, y la noche se vuelve interminable." }, change: "manos-arriba", recap: "Malena llamó a la policía y acabaste con las manos arriba." },
      "pistola-sola": { text: { A: "Malena se queda sola, con miedo. Mira el agua. Tú te vas.", B: "Malena se queda sola en el banco, temblando todavía. Te vas sin mirar atrás.", C: "Malena se queda sola en el banco, temblando. Te vas sabiendo que esta noche la va a recordar por la pistola, no por el mensaje." }, change: "triste", recap: "Dejaste a Malena sola y asustada por tu pistola." },
      "pistola-puente": { text: { A: "Caminas delante. Malena detrás. Llegan al puente. Ella sonríe un poco. «Gracias. Y guarda eso.»", B: "Caminas delante y Malena detrás, a su distancia. En el puente, sonríe por fin. «Gracias. Y guarda eso para siempre.»", C: "Caminas delante; Malena marca la distancia. En el puente, sonríe por primera vez. «Gracias. Y esa pistola, guárdala para siempre.»" }, change: "se-va", recap: "Acompañaste a Malena al puente, con la pistola guardada." },
      "granada-evacuacion": { text: { A: "Todo el paseo corre. Llega la policía. Un helicóptero vuela sobre el canal. Tú y tu granada son famosos.", B: "Medio paseo huye hacia el puente. Llega la policía, cierran la Costanera y un helicóptero ilumina el canal. Tú y tu granada son la noticia de la noche.", C: "El paseo entero se vacía en un minuto. La policía cierra la Costanera y un helicóptero barre el canal con su foco. Tú y tu granada acaban de convertirse en la noticia de la noche." }, change: "helicoptero", recap: "Tu granada evacuó la Costanera." },
      "granada-agua": { text: { A: "Tiras la granada al agua. ¡Plof! No pasa nada. Malena se ríe. Se seca la cara.", B: "Lanzas la granada al canal. ¡Plof! Nada. Malena se ríe hasta llorar, pero esta vez de risa.", C: "Lanzas la granada al canal. Un “plof” y nada más. Malena se ríe hasta las lágrimas, que por primera vez esta noche son de risa." }, change: "sonrie", recap: "Tiraste la granada al canal y Malena se rió." },
      "granada-sola": { text: { A: "Malena se queda detrás del banco. Tú te vas con tu granada.", B: "Malena se queda detrás del banco hasta que te alejas con tu granada.", C: "Malena no sale de detrás del banco hasta que tú y tu granada desaparecen por el paseo." }, change: "triste", recap: "Malena prefirió quedarse sola antes que cerca de tu granada." },
      "granada-dibujo": { text: { A: "Malena dibuja la escena: ella con la granada, los patos volando. Se ríe. Es su mejor dibujo.", B: "Malena dibuja la escena entera: ella con la granada, los patos despegando, el paseo mirando. Se ríe. Dice que es su mejor dibujo.", C: "Malena dibuja toda la escena: ella con la granada, los patos despegando, el paseo entero girándose. Se ríe y jura que es lo mejor que ha dibujado en un año." }, change: "sonrie", recap: "Malena dibujó el caos de la granada." },
      "granada-patrulla": { text: { A: "Llega la policía. Tú explicas la granada. Malena explica los gritos. Los policías se ríen.", B: "Llega la patrulla. Tú explicas lo de la granada de mentira; Malena, lo de los gritos. Al final, los policías se ríen.", C: "Llega la patrulla. Explicas la granada de utilería; Malena explica el grito. Los policías terminan riéndose, aunque te miran raro." }, change: "policia", recap: "La policía llegó por el grito de Malena y la granada." },
      "gas-ojos": { text: { A: "Te arden los ojos. Lloras tú ahora. Malena corre por el puente.", B: "Te arden los ojos y ahora el que llora eres tú. Malena desaparece por el puente a toda velocidad.", C: "Te arden los ojos y el que llora en el banco ahora eres tú. Malena cruza el puente corriendo y no mira atrás." }, change: "huye", recap: "Malena te roció con gas pimienta y huyó." },
      "gas-vecinos": { text: { A: "Caminas con Malena hasta el puente. Tú a la izquierda. Los dos con el gas guardado. Ella se ríe.", B: "Caminas con Malena hasta el puente, tú a la izquierda, los dos con el gas guardado. Por el camino, ella se ríe del duelo.", C: "Caminas con Malena hasta el puente, tú a la izquierda, ambos con la pimienta guardada. Por el camino se ríe del duelo, y casi del rechazo." }, change: "se-va", recap: "Tras el duelo de gas pimienta, acompañaste a Malena al puente." },
      "gas-amigos": { text: { A: "Malena dibuja a los dos con el gas, y los patos mirando. Se ríe. Te da el dibujo.", B: "Malena dibuja a los dos apuntándose con el gas, con los patos de jueces. Se ríe mucho y te regala el dibujo.", C: "Malena dibuja el duelo de pimienta con los patos de jueces, corbata incluida. Se ríe y te regala el dibujo: la mejor noche mala de su vida." }, change: "sonrie", recap: "Malena dibujó el duelo de gas pimienta." },
      "lapiz-regalo": { text: { A: "Malena se va a casa con tu lápiz. Lo lleva en la mano, como algo importante.", B: "Malena se va a casa con tu lápiz en la mano, como si fuera un trofeo pequeño.", C: "Malena se va a casa con tu lápiz en la mano, sujetándolo como un trofeo diminuto." }, change: "se-va", recap: "Le regalaste el lápiz a Malena." },
      "lapiz-patos": { text: { A: "Dos patos en una servilleta: uno horrible, el tuyo; uno perfecto, el de Malena. Se ríen mucho.", B: "Dos patos en una servilleta: el tuyo, horrible; el de Malena, perfecto y con corbata. Se ríen hasta que duele.", C: "Dos patos en una servilleta: el tuyo, un desastre; el de Malena, una obra con corbata. Se ríen hasta que el rechazo parece lejano." }, change: "sonrie", recap: "Malena ganó el duelo de patos con tu lápiz." },
      "lapiz-portafolio": { text: { A: "Malena guarda el papel firmado. Mañana manda otra carpeta. Se va tranquila.", B: "Malena guarda el papel firmado en el bolso. Mañana manda la carpeta a otro estudio. Se va decidida.", C: "Malena guarda el papel firmado como un contrato. Mañana manda la carpeta a otro estudio. Se va con una decisión en el bolso." }, change: "se-va", recap: "Malena firmó con tu lápiz que mañana lo intenta otra vez." },
      "libro-regalo": { text: { A: "Malena se va a casa con tu libro. Mira la portada todo el camino.", B: "Malena se va a casa abrazando tu libro. Mira la portada de su profesora todo el camino.", C: "Malena se va a casa con tu libro contra el pecho, mirando la portada de su profesora como si fuera una carta." }, change: "se-va", recap: "Le regalaste el libro con la portada de su profesora." },
      "libro-llamada": { text: { A: "Malena llama a su profesora. Habla y llora, pero sonríe. Tú te vas despacio.", B: "Malena llama a su profesora. Habla, llora, se ríe. Tú te alejas despacio, con el libro en la mano.", C: "Malena llama a su profesora. Habla, llora y se ríe a la vez. Te alejas despacio, con el libro, sin interrumpir." }, change: "llama", recap: "Malena llamó a su profesora por tu libro." },
      "libro-dedicatoria": { text: { A: "Tu libro tiene un pato con corbata en la primera página. Malena sonríe. «Ahora vale más.»", B: "Tu libro tiene ahora un pato con corbata en la primera página. Malena sonríe. «Ahora vale más que antes.»", C: "Tu libro lleva ahora un pato con corbata en la primera página, firmado. Malena sonríe. «Ahora vale el doble: profesora y alumna.»" }, change: "sonrie", recap: "Malena dibujó en tu libro, junto a la portada de su profesora." },
      "corazon-beso": { text: { A: "Malena te besa la mejilla. Hay corazones en el aire. Se va a casa feliz.", B: "Malena te besa la mejilla y los corazones flotan un rato más. Se va a casa sonriendo.", C: "Malena te besa la mejilla y los corazones tardan en disolverse. Se va a casa sonriendo, con el rechazo en el bolsillo y el beso en la cara." }, change: "beso", recap: "Malena te dio un beso de agradecimiento." },
      "corazon-puente": { text: { A: "Caminas con Malena hasta el puente, del brazo. Te cuenta sus personajes. Hay corazones.", B: "Caminas con Malena del brazo hasta el puente. Te presenta a todos sus personajes, con corazones alrededor.", C: "Caminas con Malena del brazo hasta el puente. Te presenta a sus personajes, uno por uno, rodeados de corazones." }, change: "abraza", recap: "Malena te llevó del brazo hasta el puente." },
    },
    speak: {
      A1: "¿Qué haces cuando estás triste?",
      A2: "¿Qué hiciste la última vez que recibiste una mala noticia?",
      B1: "¿Cómo te gusta que te consuelen cuando algo te sale mal?",
      B2: "¿Qué harías si un desconocido llorara a tu lado en un lugar público?",
      C1: "¿Cómo distingues entre acompañar a alguien y invadir su intimidad?",
      C2: "¿Qué papel crees que tienen los fracasos en la construcción de lo que uno es?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces si ves un cuchillo en la calle?", B: "¿Cuándo pensaste en llamar a la policía y por qué?", C: "¿Hasta qué punto crees que el miedo justifica una reacción violenta?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Tienes miedo de noche en tu ciudad?", B: "¿Qué harías si alguien te pidiera el celular con un arma?", C: "¿Qué consecuencias deja una amenaza aunque nadie salga herido?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué broma te da miedo?", B: "¿Cuál fue la situación más absurda que viviste de noche?", C: "¿Por qué crees que el pánico se contagia tan rápido entre desconocidos?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Llevas algo para defenderte?", B: "¿Desconfías de las personas que se acercan de noche?", C: "¿Dónde termina la prevención razonable y dónde empieza la paranoia?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Dibujas bien?", B: "¿Qué prefieres, escribir a mano o en la computadora?", C: "¿Qué te ayuda más a ordenar las ideas: hablar, escribir o dibujar?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Cuál es tu libro favorito?", B: "¿Qué libro regalarías a alguien triste?", C: "¿Qué libro te enseñó algo que ninguna persona te había explicado?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Quién te consuela cuando lloras?", B: "¿Cuándo fue la última vez que alguien te sorprendió con ternura?", C: "¿Qué gestos pequeños te parecen más consoladores que las palabras?" } },
    },
  },

  // ───────────────────────────── 2. Una pareja discute
  {
    id: "costa-pareja",
    kind: "escena",
    district: "costa",
    title: "Una pareja discute",
    verb: "ESCUCHAR",
    goal: "Mediar en un conflicto, pedir explicaciones, dar una opinión con cortesía, proponer soluciones o retirarse.",
    cast: [
      {
        id: "paula", name: "Paula", role: "Le ofrecieron un trabajo en otra ciudad",
        age: "adult", body: "f", build: "slim", height: 1.7,
        hair: "bob", hairColor: "#a33b2b", skin: "#f3d3bd",
        top: "dress", topColor: "#2b4a7a", bottom: "skirt", bottomColor: "#1d2233",
        extras: ["earrings", "bag"], pose: "arms", props: ["railing"],
      },
      {
        id: "nacho", name: "Nacho", role: "Su pareja, que no quiere mudarse",
        age: "adult", body: "m", build: "average", height: 1.8,
        hair: "short", hairColor: "#3a2a1e", skin: "#d49a6a",
        top: "jacket", topColor: "#3d5a40", bottom: "jeans", bottomColor: "#22252e",
        extras: ["beard"], pose: "stand",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "paula", mood: "angry",
        line: {
          A: "Una pareja discute junto a la baranda. Ella habla muy alto. «¡Siempre lo mismo, Nacho! ¡Nunca quieres cambiar nada!»",
          B: "Una pareja discute junto a la baranda del canal. Ella gesticula; él mira el suelo. «¡Es la oportunidad de mi vida, Nacho, y tú ni siquiera quieres hablarlo!»",
          C: "Junto a la baranda, una pareja discute a ese volumen que finge ser privado. «No es una discusión, Nacho», dice ella. «Es un monólogo, porque tú no contestas.»",
        },
        options: [
          {
            id: "mediar",
            say: { A: "Perdón. ¿Están bien? ¿Puedo ayudar?", B: "Perdonen que me meta. ¿Está todo bien? ¿Puedo ayudar en algo?", C: "Disculpen la intromisión, pero se los oye desde el otro puente. ¿Todo bien?" },
            reply: { A: "La mujer se calma un poco. «Perdón. Soy Paula. Él es Nacho. Tenemos un problema.»", B: "La mujer respira hondo. «Perdón por el espectáculo. Soy Paula, y este es Nacho. Tenemos un problema serio.»", C: "La mujer se pone roja. «Qué vergüenza. Soy Paula. Este es Nacho, el hombre que no contesta.»" },
            mood: "worried", next: "problema",
          },
          {
            id: "pasar",
            say: { A: "Perdón, solo paso por aquí.", B: "Perdón, no quiero molestar. Solo estoy pasando.", C: "Ustedes sigan, yo solo soy un peatón con muy mala suerte." },
            reply: { A: "El hombre te para. «No, espera. Tú. ¿Tú qué piensas?»", B: "El hombre te detiene con un gesto. «No, espera. Necesitamos una opinión de fuera. ¿Tú qué harías?»", C: "«Un momento», dice el hombre. «Por fin alguien neutral. Escucha esto y dinos quién tiene razón.»" },
            mood: "surprised", next: "opinion",
          },
          {
            id: "humor",
            say: { A: "Perdón, pero los patos están asustados.", B: "Perdonen, pero los patos del canal están muy preocupados por ustedes.", C: "Solo vengo a decirles que los patos del canal piden un poco de calma, por favor." },
            reply: { A: "La mujer se ríe sin querer. «Perdón, patos. Soy Paula. Él es Nacho.»", B: "La mujer se ríe a pesar de todo. «Perdón a los patos. Soy Paula, y él es Nacho. Estamos… negociando.»", C: "La mujer suelta una risa. «Pido disculpas a la fauna local. Soy Paula. Él es Nacho. Estamos en plena crisis.»" },
            mood: "smile", next: "problema",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y un papel.", B: "Sacas el lápiz y arrancas un papel de tu libreta.", C: "Sacas el lápiz con la seriedad de un notario." },
            say: { A: "¿Escribimos lo bueno y lo malo?", B: "¿Y si escribimos una lista? Lo bueno y lo malo de mudarse.", C: "Propongo un método científico: dos columnas, pros y contras. Sin gritos." },
            reply: { A: "Paula toma el papel. «Buena idea. Soy Paula. Él es Nacho.»", B: "Paula toma el lápiz, sorprendida. «Buena idea. Soy Paula, por cierto. Y él, Nacho.»", C: "Paula te mira como si fueras un genio. «Paula. Y él es Nacho. Nunca hemos hecho nada científico juntos.»" },
            mood: "neutral", next: "lista",
          },
          libro: {
            act: { A: "Abres tu libro y lees una frase.", B: "Abres tu libro al azar y lees una frase en voz alta.", C: "Abres tu libro al azar y lees en voz alta, con tono de oráculo." },
            say: { A: "Mira, aquí dice: «El amor es caminar juntos».", B: "Escuchen esto: «El amor no es mirarse, es mirar juntos en la misma dirección».", C: "Según este libro: «Amar es mirar juntos en la misma dirección». No sé si ayuda, pero suena bien." },
            reply: { A: "Los dos se callan. Paula sonríe un poco. «Bonito. Soy Paula.»", B: "Los dos se quedan callados. Paula se ríe un poco. «Qué oportuno. Soy Paula. Él es Nacho.»", C: "Silencio. Nacho tose. «El problema es justo la dirección», dice Paula. «Soy Paula. Él es Nacho.»" },
            mood: "smile", next: "problema",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Ves que gritan y sacas el gas pimienta.", C: "Ante tanto grito, sacas el gas pimienta por si acaso." },
            say: { A: "¡Eh! ¿Qué pasa aquí?", B: "¡Eh! ¿Qué está pasando aquí? ¿Necesitas ayuda?", C: "¡Eh, eh! ¿Todo bien por aquí? ¿Alguien está en peligro?" },
            reply: { A: "Los dos se asustan. «¡No pasa nada! ¡Solo hablamos!»", B: "Los dos levantan las manos a la vez. «¡Tranquilo! ¡Solo estamos discutiendo!»", C: "Los dos levantan las manos, perfectamente sincronizados por primera vez. «¡Solo discutimos! ¡Es una discusión normal!»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Muestras la granada.", B: "Les muestras la granada para que te escuchen.", C: "Les muestras la granada, convencido de que así se calman." },
            say: { A: "Basta. Silencio, por favor.", B: "Por favor, ¿pueden dejar de gritar un momento?", C: "Les pido un minuto de silencio. Por la paz de todos." },
            reply: { A: "Los dos se quedan blancos. «¿Eso es una granada?»", B: "Los dos se quedan petrificados. «¿Eso es… una granada?», susurra Nacho.", C: "Silencio absoluto. «Bueno», dice Nacho con un hilo de voz, «silencio conseguido.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al acercarte, se ve tu pistola.", C: "Al acercarte, la chaqueta se abre y la pistola queda a la vista." },
            say: { A: "Hola. ¿Por qué gritan?", B: "Hola. ¿Por qué gritan tanto? Se oye desde lejos.", C: "Buenas noches. Se oye la discusión desde lejos. ¿Qué pasa?" },
            reply: { A: "Nacho se pone delante de Paula. «¡No queremos problemas!»", B: "Nacho se pone delante de Paula, muy pálido. «Tranquilo. No queremos problemas.»", C: "Nacho se pone delante de Paula. «Ninguno. Ningún problema. Estábamos a punto de reconciliarnos.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Sacas el cuchillo para cortar una cuerda de tu mochila.", C: "Sacas el cuchillo para un asunto de tu mochila, sin pensar en el contexto." },
            say: { A: "Perdón. ¿Están bien?", B: "Perdón, ¿está todo bien? Se oyen gritos.", C: "Perdón, no es lo que parece. ¿Está todo bien por aquí?" },
            reply: { A: "Paula grita. «¡Nacho, tiene un cuchillo!»", B: "Paula agarra el brazo de Nacho. «¡Nacho! ¡Tiene un cuchillo!»", C: "«Nacho», dice Paula sin moverse, «el señor del cuchillo dice que no es lo que parece.»" },
            mood: "scared", next: "calmar",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Ustedes se quieren mucho. Se ve.", B: "Se nota que se quieren mucho. Por eso discuten así, ¿no?", C: "Perdonen, pero solo discute así la gente que se quiere de verdad." },
            reply: { A: "Nacho mira a Paula. «Es verdad. Tengo miedo de perderla. Por eso no quiero irme.»", B: "Nacho baja la voz. «Es eso. No es la ciudad. Tengo miedo de que allí ella sea feliz… sin mí.»", C: "Nacho suspira. «Ahí está el problema. Tengo miedo de que en otra ciudad Paula descubra que no me necesita.»" },
            mood: "love", next: "opinion",
          },
        },
      },
      problema: {
        who: "nacho", mood: "angry",
        line: {
          A: "Nacho cruza los brazos. «A Paula le ofrecieron un trabajo en otra ciudad. Yo no quiero irme.»",
          B: "Nacho cruza los brazos. «A Paula le ofrecieron un trabajo a quinientos kilómetros. Y quiere que nos vayamos el mes que viene.»",
          C: "Nacho cruza los brazos. «Resumen: a Paula le ofrecieron el trabajo de sus sueños. En otra ciudad. Con fecha de salida en un mes.»",
        },
        options: [
          {
            id: "nacho",
            say: { A: "Nacho, ¿por qué no quieres ir?", B: "Nacho, ¿por qué no quieres mudarte? ¿Qué te preocupa?", C: "Nacho, ¿cuál es el problema de fondo? Porque no parece solo la ciudad." },
            reply: { A: "Nacho mira el agua. «Mi papá vive aquí. Está mayor y solo.»", B: "Nacho baja la voz. «Mi padre está mayor y vive solo aquí. No puedo dejarlo.»", C: "Nacho tarda en contestar. «Mi padre. Está mayor, vive solo y no quiere admitir que me necesita.»" },
            mood: "sad", next: "opinion",
          },
          {
            id: "paula",
            say: { A: "Paula, ¿es un trabajo importante para ti?", B: "Paula, ¿qué significa este trabajo para ti?", C: "Paula, ¿hasta qué punto es importante para ti este trabajo?" },
            reply: { A: "Paula sonríe. «Mucho. Es el trabajo de mis sueños.»", B: "Paula se emociona. «Es lo que siempre quise. Llevo diez años esperando algo así.»", C: "Paula habla más bajo. «Es el trabajo que imaginaba a los quince años. No sé si vuelve a pasar.»" },
            mood: "worried", next: "opinion",
          },
          {
            id: "evitar",
            say: { A: "Uf. Es cosa de ustedes. Me voy.", B: "Uf, esto es cosa de ustedes. Mejor los dejo hablar.", C: "Esto es demasiado personal para un desconocido. Los dejo con su conversación." },
            reply: { A: "Te vas. Ellos siguen gritando.", B: "Te alejas. Detrás de ti, la discusión vuelve a subir de volumen.", C: "Te alejas, y la discusión retoma su volumen original como si nunca hubieras existido." },
            mood: "angry", end: "siguen",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Los dos tienen miedo. Es normal.", B: "Creo que los dos tienen miedo de perder algo. Es normal.", C: "Me parece que aquí nadie está enojado. Los dos están asustados, que es distinto." },
            reply: { A: "Paula toma la mano de Nacho. «Yo también tengo miedo. Mucho.»", B: "Paula se queda callada y toma la mano de Nacho. «Es verdad. Yo también tengo miedo. De ir sola.»", C: "Paula toma la mano de Nacho. «Confieso: llevo una semana sin dormir. No de emoción. De miedo.»" },
            mood: "love", next: "opinion",
          },
        },
      },
      opinion: {
        who: "paula", mood: "worried",
        line: {
          A: "Paula y Nacho te miran. «Tú, ¿qué harías?»",
          B: "Paula y Nacho te miran esperando. «Bueno, tú lo ves desde fuera. ¿Qué harías en nuestro lugar?»",
          C: "Los dos te miran como si fueras el árbitro de una final. «A ver, voz imparcial», dice Paula. «¿Tú qué harías?»",
        },
        options: [
          {
            id: "acuerdo",
            say: { A: "¿Y si Paula va seis meses y Nacho viaja los fines de semana?", B: "¿Y si lo prueban seis meses? Paula empieza allá y Nacho la visita los fines de semana.", C: "Propongo un término medio: seis meses de prueba, fines de semana alternos y una evaluación honesta al final." },
            reply: { A: "Paula y Nacho se miran. Nacho sonríe. «Seis meses… Puede ser.»", B: "Paula y Nacho se miran. «Seis meses», repite Nacho. «Eso sí lo puedo hacer.»", C: "Se miran en silencio. «Una evaluación honesta», dice Nacho. «Somos malísimos en eso, pero podemos aprender.»" },
            mood: "smile", end: "abrazo",
          },
          {
            id: "pro-paula",
            say: { A: "Yo creo que Paula tiene que aceptar. Es su sueño.", B: "Sinceramente, yo creo que Paula debería aceptar. No es justo que renuncie.", C: "Con todo respeto, a mí me parece que un sueño así no se rechaza. Paula debería aceptar." },
            reply: { A: "Nacho se enoja. «¡Claro! ¿Y yo qué?» Y siguen discutiendo.", B: "Nacho levanta la voz. «¡Claro, y mi padre que se arregle solo!» La discusión empieza otra vez.", C: "«Fantástico, otro voto en contra», dice Nacho, y la discusión vuelve a arrancar con más fuerza." },
            mood: "angry", end: "siguen",
          },
          {
            id: "pro-nacho",
            say: { A: "Yo no me voy. La familia es primero.", B: "Yo creo que la familia es lo primero. Yo no me iría.", C: "Yo, la verdad, no me iría. Hay oportunidades que vuelven; las personas mayores, no siempre." },
            reply: { A: "Paula toma su bolso. «Ya veo. Me voy a casa.» Y se va.", B: "Paula toma el bolso, dolida. «Perfecto. Dos contra uno. Me voy a casa.»", C: "Paula toma el bolso. «Qué casualidad: el mundo entero opina lo mismo que Nacho.» Y se va." },
            mood: "angry", end: "se-va",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Yo no sé. Pero ustedes se quieren. Hablen con calma.", B: "Yo no puedo decidir por ustedes, pero se nota que se quieren. Eso es lo más importante.", C: "No me toca decidir. Pero cualquier solución que encuentren juntos va a ser mejor que la mía." },
            reply: { A: "Nacho se ríe. «¿Sabes qué? Mi papá me dijo: “Ve con ella, tonto”.»", B: "Nacho suelta una risa nerviosa. «¿Sabes lo peor? Mi padre ya me dijo que vaya con ella. El problema soy yo.»", C: "Nacho se ríe por fin. «Confesión: mi padre ya me ordenó que me fuera con ella. Él es el valiente de la familia.»" },
            mood: "love", end: "abrazo",
          },
        },
      },
      lista: {
        who: "paula", mood: "neutral",
        line: {
          A: "Paula escribe en el papel: «Bueno» y «Malo». Nacho mira. «A ver…»",
          B: "Paula dibuja dos columnas: “A favor” y “En contra”. Nacho se acerca, curioso a su pesar. «A ver qué pones…»",
          C: "Paula traza dos columnas con pulso de cirujana. Nacho se asoma, desconfiado. «Ojo, que ya sé cuál va a ser más larga.»",
        },
        options: [
          {
            id: "bueno",
            say: { A: "Primero, lo bueno de irse.", B: "Empiecen por lo bueno. ¿Qué ganarían si se van?", C: "Empecemos por lo positivo, que siempre es lo más difícil de escribir en medio de una discusión." },
            reply: { A: "Paula escribe mucho. Nacho escribe una cosa: «el mar». Paula lo mira.", B: "Paula llena media columna. Nacho escribe solo dos palabras: “el mar”. Paula lo mira en silencio.", C: "Paula llena la columna. Nacho, tras pensarlo, escribe “el mar”. «Siempre quisiste vivir cerca del mar», dice ella." },
            mood: "surprised", next: "opinion",
          },
          {
            id: "malo",
            say: { A: "Ahora, lo malo.", B: "Ahora lo malo. Sean sinceros.", C: "Ahora la columna difícil. Sinceridad total, que el papel no se enoja." },
            reply: { A: "Nacho escribe: «Mi papá». Paula se queda callada.", B: "Nacho escribe despacio: “Mi papá, solo”. Paula deja de discutir.", C: "Nacho escribe una sola línea: “Mi padre, solo”. Paula se queda callada, porque eso no lo sabía." },
            mood: "sad", next: "opinion",
          },
          {
            id: "nacho-escribe",
            say: { A: "Nacho, escribe tú una cosa.", B: "Nacho, toma el lápiz y escribe lo que no te atreves a decir.", C: "Nacho, te toca. Escribe aquello que llevas toda la noche sin decir." },
            reply: { A: "Nacho escribe: «Voy contigo, pero tengo miedo». Paula lo abraza.", B: "Nacho escribe algo y se lo da a Paula. Ella lee: “Voy contigo. Pero tengo miedo.” Y lo abraza.", C: "Nacho escribe en silencio y dobla el papel. Paula lo abre: “Voy contigo, aunque me muero de miedo”." },
            mood: "love", end: "abrazo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Escriban también por qué se quieren.", B: "Falta una columna: por qué se quieren.", C: "Les falta una tercera columna, la que de verdad importa: por qué siguen juntos." },
            reply: { A: "Paula se ríe. «Esa columna es muy larga.» Nacho la abraza.", B: "Paula se ríe. «Esa no cabe en el papel.» Nacho le quita el lápiz y la abraza.", C: "Paula se ríe. «Esa necesita otra hoja. O un libro.» Nacho la abraza antes de que termine la frase." },
            mood: "love", end: "abrazo",
          },
        },
      },
      calmar: {
        who: "nacho", mood: "scared",
        line: {
          A: "Nacho y Paula tienen miedo. Ya no discuten.",
          B: "Nacho y Paula retroceden juntos, tomados de la mano. Ya no discuten.",
          C: "Nacho y Paula retroceden tomados de la mano. Es lo más unidos que han estado en toda la noche.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Solo quería ayudar.", B: "Perdonen, lo guardo ya. Solo quería ver si estaban bien.", C: "Perdonen, me equivoqué de método. Lo guardo y empezamos otra vez, ¿sí?" },
            reply: { A: "Nacho respira. «Bueno… El problema es otro.»", B: "Nacho respira, todavía nervioso. «Bueno… Ya que estás, te cuento el problema.»", C: "«Empezar otra vez», repite Nacho. «Es justo lo que discutíamos, mira qué casualidad.»" },
            mood: "worried", next: "problema",
          },
          {
            id: "explicar",
            say: { A: "Tranquilos. Es para mi seguridad.", B: "Tranquilos, es solo por seguridad. Esta zona de noche…", C: "Es por precaución. Uno nunca sabe con quién se cruza junto al canal." },
            reply: { A: "Nacho y Paula corren hacia el puente.", B: "Nacho y Paula se miran y salen corriendo hacia el puente, juntos.", C: "«Exacto, nunca se sabe», dice Nacho, y salen los dos corriendo hacia el puente." },
            mood: "scared", end: "huyen",
          },
          {
            id: "broma",
            say: { A: "Bueno, por lo menos ya no gritan.", B: "Bueno, por lo menos ya no discuten. Funcionó, ¿no?", C: "Admitan que, como terapia de pareja, ha sido rapidísima." },
            reply: { A: "Nadie se ríe. Paula y Nacho se van corriendo.", B: "Nadie se ríe. Paula tira de Nacho y se van corriendo.", C: "Nadie aprecia el humor. Paula y Nacho se alejan corriendo, eso sí, de la mano." },
            mood: "scared", end: "huyen",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón. Fue una tontería. Solo quiero ayudar.", B: "Perdón, fue una tontería enorme. Solo quería ayudar.", C: "Perdón, fue una idea pésima. Lo único que quería era bajar el volumen." },
            reply: { A: "Paula sonríe un poco. «Bueno. Te lo contamos.»", B: "Paula se relaja un poco. «Bueno… Por lo menos nos unió. Te contamos.»", C: "Paula casi se ríe. «Hay que reconocer que nos puso de acuerdo. Bueno, te contamos.»" },
            mood: "love", next: "problema",
          },
        },
      },
      "cuchillo-inicio": {
        who: "nacho", mood: "furious",
        line: {
          A: "Nacho ve tu cuchillo. Saca una navaja y se pone delante de Paula. «¡Atrás! ¡Paula, detrás de mí! ¿Qué quieres? ¿Qué haces con ese cuchillo?»",
          B: "Nacho ve tu cuchillo antes de que abras la boca. Saca una navaja del bolsillo y se planta delante de Paula. «¡Atrás! Paula, detrás de mí. ¿Qué haces con ese cuchillo? ¿Qué quieres de nosotros?»",
          C: "Nacho ve tu cuchillo y, por primera vez en la noche, actúa: saca una navaja y se interpone entre tú y Paula. «Ni un paso más. Paula, detrás de mí. ¿Qué pretendes con ese cuchillo?»",
        },
        options: [
          {
            id: "bajar",
            act: { A: "Guardas el cuchillo primero.", B: "Guardas el cuchillo primero, despacio.", C: "Guardas el cuchillo primero, con las manos bien a la vista." },
            say: { A: "Tranquilo. Lo guardo. No quiero nada. Baja la navaja tú también.", B: "Tranquilo, lo guardo primero. No quiero nada de ustedes. Ahora baja tú la navaja, por favor.", C: "Calma. Lo guardo yo primero, mira. No quiero nada de ustedes. Ahora baja tú esa navaja y hablamos como personas." },
            reply: { A: "Nacho baja la navaja despacio. Paula grita: «¡Están locos los dos!»", B: "Nacho baja la navaja muy despacio, sin dejar de mirarte. Paula explota: «¡Están locos! ¡Los dos!»", C: "Nacho baja la navaja milímetro a milímetro. Paula, desde atrás: «¡Están locos los dos! ¡Esto es una discusión, no una película!»" },
            mood: "scared", next: "cuchillo-tregua",
          },
          {
            id: "tu-primero",
            say: { A: "Baja tú primero. Yo no te ataqué.", B: "Baja tú primero. Yo no he atacado a nadie.", C: "Baja tú primero: el que sacó una navaja contra alguien fuiste tú." },
            reply: { A: "Dos segundos de silencio. Los dos bajan a la vez. Paula: «¡Guarden eso! ¡Ya!»", B: "Dos segundos eternos. Los dos bajan la hoja al mismo tiempo. Paula: «¡Guarden eso los dos, ya!»", C: "Dos segundos que duran una hora. Bajan los dos a la vez, como si lo hubieran ensayado. Paula: «¡Guarden eso ahora mismo!»" },
            mood: "worried", next: "cuchillo-tregua",
          },
          {
            id: "ayudar",
            say: { A: "Solo quería ayudar con la discusión. Tranquilos.", B: "Solo vine a ayudar con la discusión. Tranquilos, no pasa nada.", C: "Solo me acerqué a mediar en la discusión. No sé por qué tanto drama." },
            reply: { A: "Paula ya tiene el celular. «¿Ayudar con un cuchillo? ¡Policía! ¡Dos hombres con cuchillos en la Costanera!»", B: "Paula ya está llamando. «¿Ayudar con un cuchillo en la mano? ¿Policía? Hay dos hombres con cuchillos en la Costanera.»", C: "Paula ya tiene el celular en la oreja. «¿Mediar con un cuchillo? ¿Policía? Dos hombres armados en la Costanera, uno de ellos mi novio.»" },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-tregua": {
        who: "paula", mood: "scared",
        line: {
          A: "Paula tiembla. «Nacho, ¿desde cuándo llevas una navaja? ¿Y tú? ¿Qué haces con un cuchillo de noche?»",
          B: "Paula tiembla de rabia y de miedo. «Nacho, ¿desde cuándo llevas una navaja encima? ¿Y tú, qué haces con un cuchillo a estas horas?»",
          C: "Paula tiembla, entre el miedo y la furia. «Nacho, ¿desde cuándo llevas una navaja encima? ¿Y tú? Explícame qué hace un desconocido con un cuchillo en un paseo romántico.»",
        },
        options: [
          {
            id: "miedo",
            say: { A: "Nacho tiene miedo. Por eso lleva navaja. Por eso no quiere irse.", B: "Yo creo que Nacho tiene miedo. Por eso lleva navaja y por eso no quiere irse a otra ciudad.", C: "Diría que Nacho tiene miedo: de esta ciudad, de la otra, de todo. La navaja y el “no me voy” son lo mismo." },
            reply: { A: "Nacho baja la cabeza. «Sí. Tengo miedo. De todo.»", B: "Nacho baja la cabeza. «Sí. Tengo miedo. De la ciudad nueva, de perderte, de todo.»", C: "Nacho baja la cabeza, derrotado. «Sí. Tengo miedo. De la ciudad nueva, de perderte, de no servir allí para nada.»" },
            mood: "sad", next: "cuchillo-miedo",
          },
          {
            id: "trabajo",
            say: { A: "Paula, con navajas o sin navajas: ¿aceptas el trabajo?", B: "Paula, con navajas o sin ellas, la pregunta es la misma: ¿vas a aceptar el trabajo?", C: "Paula, dejemos las navajas: la pregunta sigue siendo si aceptas el trabajo o no." },
            reply: { A: "Paula mira a Nacho. «Quiero aceptar. Pero no quiero irme sin él.»", B: "Paula mira a Nacho. «Quiero aceptarlo. Pero no quiero irme sin él, y él no quiere venir.»", C: "Paula mira a Nacho. «Quiero aceptarlo. Lo que no quiero es irme sola, y él parece preferir la navaja al tren.»" },
            mood: "worried", next: "cuchillo-miedo",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy. Ya hay demasiados cuchillos aquí.", B: "Perdón, me voy. Hay demasiados cuchillos en esta conversación.", C: "Me retiro. Esta conversación tiene más filo del que puedo manejar." },
            reply: { A: "Paula asiente. «Sí. Vete. Y tú, Nacho, tira esa navaja.»", B: "Paula asiente. «Sí, vete. Y tú, Nacho, tira esa navaja al canal.»", C: "Paula asiente sin mirarte. «Sí, vete. Nacho, esa navaja va al canal, ahora.»" },
            mood: "sad", end: "cuchillo-sola",
          },
        ],
      },
      "cuchillo-miedo": {
        who: "nacho", mood: "sad",
        line: {
          A: "Nacho tira la navaja al canal. «Listo. Sin navaja. Paula, tengo miedo, pero tengo más miedo de perderte.»",
          B: "Nacho tira la navaja al canal, sin mirar. «Listo. Sin navaja. Paula, tengo miedo de irme, pero mucho más de perderte.»",
          C: "Nacho lanza la navaja al canal sin mirarla caer. «Ya está. Sin navaja. Paula, me da miedo irme; perderte me da pánico.»",
        },
        options: [
          {
            id: "abrazo",
            say: { A: "Paula, abrázalo. Y después hablen del tren.", B: "Paula, abrázalo. Luego hablan de trenes y de fines de semana.", C: "Paula, abrázalo ya. Los horarios de tren pueden esperar cinco minutos." },
            reply: { A: "Paula abraza a Nacho. «Idiota. Casi te peleas con un cuchillo.»", B: "Paula abraza a Nacho con fuerza. «Idiota. Casi te peleas a cuchillo por mí.»", C: "Paula abraza a Nacho. «Idiota. Casi te bates a cuchillo por mí, y no eres capaz de subirte a un tren.»" },
            mood: "love", end: "cuchillo-paz",
          },
          {
            id: "sola",
            say: { A: "Paula, decide tú. Es tu trabajo, es tu vida.", B: "Paula, decide tú. Es tu trabajo y es tu vida.", C: "Paula, la decisión es tuya. Es tu trabajo y tu vida, no la navaja de nadie." },
            reply: { A: "Paula respira. «Me voy. Sola. Nacho, llámame cuando no tengas miedo.»", B: "Paula respira hondo. «Me voy. Sola. Nacho, llámame el día que se te pase el miedo.»", C: "Paula respira hondo. «Me voy sola. Nacho, llámame cuando el miedo te deje marcar mi número.»" },
            mood: "sad", end: "cuchillo-sola",
          },
          {
            id: "cuchillo-mio",
            act: { A: "Tiras tu cuchillo al canal.", B: "Tiras tu cuchillo al canal, igual que Nacho.", C: "Lanzas tu cuchillo al canal, en solidaridad." },
            say: { A: "Yo también. Sin cuchillo. Ahora somos tres personas normales.", B: "El mío también. Ya está. Ahora somos tres personas normales hablando.", C: "El mío también va al canal. Ya está: tres personas normales y dos cuchillos menos en la ciudad." },
            reply: { A: "Paula se ríe, nerviosa. «Los peces van a tener miedo. Bueno. Hablemos.»", B: "Paula suelta una risa nerviosa. «Los peces van a estar aterrados. Está bien. Hablemos.»", C: "Paula se ríe por los nervios. «El canal está más armado que nosotros. De acuerdo. Hablemos.»" },
            mood: "smile", end: "cuchillo-paz",
          },
        ],
      },
      "pistola-inicio": {
        who: "paula", mood: "terror",
        line: {
          A: "Paula ve tu pistola. Levanta las manos. Nacho también. «¡No dispares! ¡Nacho, haz algo!» Nacho: «¿Qué quieres que haga? ¡Tiene una pistola!»",
          B: "Paula ve la pistola y levanta las manos; Nacho la imita al instante. «¡No dispares, por favor! ¡Nacho, haz algo!» Nacho, con las manos en alto: «¿Qué quieres que haga? ¡Tiene una pistola!»",
          C: "Paula ve la pistola y levanta las manos; Nacho, medio segundo después. «¡No dispares! ¡Nacho, haz algo, por una vez!» Nacho, manos arriba: «¿Qué quieres que haga? ¡El hombre tiene una pistola!»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la pistola.", B: "Guardas la pistola y muestras las manos.", C: "Guardas la pistola y les enseñas las palmas vacías." },
            say: { A: "Bajen las manos. No es un robo. Perdón.", B: "Bajen las manos, por favor. No es un robo. Perdón por el susto.", C: "Bajen las manos. No es un asalto, y les pido perdón por el susto." },
            reply: { A: "Bajan las manos despacio. Paula: «¿Y por qué llevas un arma?»", B: "Bajan las manos muy despacio. Paula: «¿Y entonces por qué llevas un arma por la Costanera?»", C: "Bajan las manos con cautela. Paula: «¿Y se puede saber por qué paseas con un arma junto al canal?»" },
            mood: "scared", next: "pistola-bajar",
          },
          {
            id: "sigan",
            say: { A: "Sigan discutiendo. Yo solo escucho.", B: "Sigan con su discusión. Yo solo escucho, no se preocupen.", C: "No se detengan por mí: sigan discutiendo, yo solo soy público." },
            reply: { A: "Con las manos arriba, Nacho: «¡Es que no quiero irme!» Paula: «¡Ni con una pistola cambias!»", B: "Con las manos en alto, Nacho: «¡Es que no quiero irme!» Paula: «¡Ni con una pistola en la cara cambias de opinión!»", C: "Manos arriba, Nacho: «¡Es que no quiero irme!» Paula: «¡Increíble! ¡Ni a punta de pistola cambias de opinión!»" },
            mood: "angry", next: "pistola-bajar",
          },
          {
            id: "juguete",
            say: { A: "Es de juguete. Miren.", B: "Es de juguete, miren, no pasa nada.", C: "Es de juguete, en serio. Miren, ni siquiera pesa." },
            reply: { A: "No miran. Corren los dos, de la mano, hacia el puente.", B: "No miran. Salen corriendo los dos, de la mano, hacia el puente.", C: "No se quedan a mirar. Huyen los dos, de la mano, hacia el puente; por fin de acuerdo en algo." },
            mood: "terror", end: "pistola-corren",
          },
        ],
      },
      "pistola-bajar": {
        who: "nacho", mood: "scared",
        line: {
          A: "Nacho respira. «Con una pistola delante lo veo claro: me voy con Paula a donde sea.» Paula: «¿Necesitabas una pistola para decidir?»",
          B: "Nacho respira hondo. «Mira, con una pistola delante lo tengo clarísimo: me voy con Paula a donde haga falta.» Paula: «¿En serio? ¿Necesitabas una pistola para decidirte?»",
          C: "Nacho respira por fin. «Con una pistola delante, todo se aclara: me voy con Paula a donde sea.» Paula: «¿De verdad hacía falta un arma para que te decidieras?»",
        },
        options: [
          {
            id: "decidido",
            say: { A: "Entonces decidido. Se van juntos. Y yo guardo esto para siempre.", B: "Pues decidido: se van juntos. Y yo guardo esto para siempre, prometido.", C: "Decidido, entonces: se van juntos. Y yo prometo que esta pistola no vuelve a ver la luz." },
            reply: { A: "Paula abraza a Nacho. «Qué manera tan rara de decidir.»", B: "Paula abraza a Nacho, todavía temblando. «Qué forma tan rara de tomar una decisión.»", C: "Paula abraza a Nacho, aún temblando. «La decisión más importante de nuestra vida, tomada a punta de pistola. Qué romántico.»" },
            mood: "love", end: "pistola-juntos",
          },
          {
            id: "policia",
            say: { A: "Si quieren, llamen a la policía. Yo espero aquí.", B: "Si quieren llamar a la policía, háganlo. Yo espero aquí, con las manos a la vista.", C: "Si prefieren llamar a la policía, adelante. Me quedo aquí, con las manos a la vista, hasta que lleguen." },
            reply: { A: "Paula llama. Nacho te mira. «Perdón, pero sí. Es una pistola.»", B: "Paula marca sin dudar. Nacho te mira. «Perdón, pero es que es una pistola, ¿entiendes?»", C: "Paula marca sin pensarlo. Nacho se encoge de hombros. «Lo siento, pero es una pistola. No hay otra forma de verlo.»" },
            mood: "worried", end: "pistola-policia",
          },
          {
            id: "paula",
            say: { A: "¿Y tú, Paula? ¿Todavía quieres irte con él?", B: "¿Y tú, Paula? Después de esto, ¿todavía quieres irte con él?", C: "¿Y tú, Paula? Después de verlo decidir con un arma delante, ¿todavía quieres llevártelo?" },
            reply: { A: "Paula mira a Nacho. «Sí. Pero quiero que lo decida sin pistola. Mañana.»", B: "Paula mira a Nacho un buen rato. «Sí. Pero quiero que lo decida mañana, sin pistola delante.»", C: "Paula mira a Nacho largo rato. «Sí. Pero quiero oírselo decir mañana, sin pistola y sin susto.»" },
            mood: "worried", end: "pistola-manana",
          },
        ],
      },
      "granada-inicio": {
        who: "paula", mood: "furious",
        line: {
          A: "Nacho ve tu granada y corre. Sin decir nada. Paula se queda sola. «¡¿Se fue?! ¡Me dejó con una granada!»",
          B: "Nacho ve la granada y sale corriendo sin decir una palabra. Paula se queda sola frente a ti. «¡¿Se fue?! ¡Me acaba de dejar sola con una granada!»",
          C: "Nacho ve la granada y desaparece hacia el puente sin mediar palabra. Paula se queda plantada. «¿Se fue? ¿De verdad acaba de dejarme sola con un desconocido y una granada?»",
        },
        options: [
          {
            id: "falsa",
            say: { A: "Tranquila. Es falsa. Es un llavero.", B: "Tranquila, es de mentira. Es un llavero, nada más.", C: "Tranquila, es de utilería. Un llavero de pésimo gusto, pero inofensivo." },
            reply: { A: "Paula no mira la granada. Mira el puente. «Falsa o no. Él corrió.»", B: "Paula ni mira la granada; mira hacia el puente. «De mentira o no, él salió corriendo.»", C: "Paula ignora la granada; tiene los ojos en el puente. «Me da igual que sea falsa. Lo que es verdad es que él corrió.»" },
            mood: "angry", next: "granada-sola",
          },
          {
            id: "correr",
            say: { A: "¡Corre tú también! ¡Es peligrosa!", B: "¡Corre tú también! ¡Es peligrosa, de verdad!", C: "¡Corre tú también, por favor! Esto es peligroso de verdad." },
            reply: { A: "Paula corre hacia el puente. Grita: «¡Nacho! ¡Espérame!»", B: "Paula sale corriendo hacia el puente, gritando: «¡Nacho! ¡Espérame, cobarde!»", C: "Paula echa a correr hacia el puente. «¡Nacho! ¡Espérame, cobarde!», grita, y la noche se la traga." },
            mood: "terror", end: "granada-corre",
          },
          {
            id: "volvera",
            say: { A: "Va a volver. Seguro.", B: "Va a volver, seguro. Solo se asustó.", C: "Va a volver, seguro. Solo se asustó; cualquiera se asusta de una granada." },
            reply: { A: "Paula cruza los brazos. «¿Seguro? Yo no estoy segura de nada.»", B: "Paula cruza los brazos. «¿Seguro? Yo ya no estoy segura de nada, y menos de él.»", C: "Paula cruza los brazos. «¿Seguro? Lo único seguro es que, a la hora de la verdad, corre más rápido que yo.»" },
            mood: "angry", next: "granada-sola",
          },
        ],
      },
      "granada-sola": {
        who: "paula", mood: "angry",
        line: {
          A: "Paula mira el puente vacío. «Ahora sé la respuesta. Acepto el trabajo. Me voy a la otra ciudad. Sola.»",
          B: "Paula mira el puente vacío. «Bueno, ya tengo mi respuesta. Acepto el trabajo y me voy a la otra ciudad. Sola.»",
          C: "Paula mira el puente por donde desapareció Nacho. «Pues ya tengo la respuesta que llevaba un mes buscando. Acepto el trabajo. Me voy sola.»",
        },
        options: [
          {
            id: "oportunidad",
            say: { A: "Perdónalo. Tenía miedo. Mira, ahí vuelve.", B: "Perdónalo, solo tuvo miedo. Y mira, ahí viene de vuelta.", C: "Perdónalo; el miedo no se elige. Y mira: ahí vuelve, sin aliento." },
            reply: { A: "Nacho vuelve corriendo. Trae a un policía. «¡Paula! ¡Fui por ayuda!»", B: "Nacho vuelve corriendo, con un policía detrás. «¡Paula! ¡No huí! ¡Fui a buscar ayuda!»", C: "Nacho vuelve a la carrera con un policía detrás. «¡Paula! No huí: fui a buscar ayuda, como una persona sensata.»" },
            mood: "surprised", next: "granada-vuelve",
          },
          {
            id: "razon",
            say: { A: "Tienes razón. Vete. Es tu vida.", B: "Tienes razón. Vete. Es tu vida y tu trabajo.", C: "Tienes razón. Vete. Es tu vida, y hoy viste quién corre y quién se queda." },
            reply: { A: "Paula asiente. «Gracias. Y tira esa granada, por favor.»", B: "Paula asiente, decidida. «Gracias. Y, por favor, tira esa granada antes de asustar a alguien más.»", C: "Paula asiente, firme. «Gracias. Y deshazte de esa granada: ya me sirvió, pero a otra persona puede arruinarle la noche.»" },
            mood: "neutral", end: "granada-decide",
          },
          {
            id: "mira",
            say: { A: "Mira. Nacho vuelve. Con un policía.", B: "Mira, ahí vuelve Nacho. Y trae a un policía.", C: "Mira hacia el puente: Nacho vuelve, y viene acompañado de un policía." },
            reply: { A: "Paula se gira. Nacho llega sin aire. «¡Paula! ¡Fui por ayuda!»", B: "Paula se da vuelta. Nacho llega sin aliento. «¡Paula! ¡No me fui, fui a buscar ayuda!»", C: "Paula se gira. Nacho llega jadeando. «¡Paula! No me escapé, fui por ayuda. Un policía, mira.»" },
            mood: "surprised", next: "granada-vuelve",
          },
        ],
      },
      "granada-vuelve": {
        who: "nacho", mood: "scared",
        line: {
          A: "El policía mira tu granada. Nacho mira a Paula. «No huí de ti. Huí de la granada. ¿Me crees?»",
          B: "El policía observa tu granada con cara de pocos amigos. Nacho mira a Paula. «No huí de ti, huí de la granada. ¿Me crees?»",
          C: "El policía estudia tu granada con el ceño fruncido. Nacho solo mira a Paula. «No huí de ti. Huí de la granada, y volví por ti. ¿Me crees?»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Señor policía, es un llavero. Mire. Y ellos solo discutían.", B: "Agente, es un llavero, mire. Ellos solo estaban discutiendo de trabajo.", C: "Agente, es un llavero de utilería, compruébelo. Ellos solo discutían sobre una mudanza." },
            reply: { A: "El policía la mira. «Un llavero. Qué gracioso. Acompáñeme.»", B: "El policía la revisa. «Un llavero. Muy gracioso. Acompáñeme a la patrulla, por favor.»", C: "El policía la examina. «Un llavero. Graciosísimo. Acompáñeme a la patrulla; allí me lo explica con calma.»" },
            mood: "worried", end: "granada-policia",
          },
          {
            id: "creer",
            say: { A: "Paula, créele. Volvió. Eso es lo importante.", B: "Paula, créele. Se fue, pero volvió. Eso es lo que importa.", C: "Paula, créele. Huyó, sí, pero volvió con ayuda. Eso dice más que un mes de discusiones." },
            reply: { A: "Paula abraza a Nacho. «Volviste. Bueno. Mañana hablamos del trabajo.»", B: "Paula abraza a Nacho. «Volviste. Está bien. Mañana hablamos del trabajo, sin granadas.»", C: "Paula abraza a Nacho. «Volviste. De acuerdo. Mañana hablamos del trabajo, en un lugar sin granadas.»" },
            mood: "love", end: "granada-perdon",
          },
          {
            id: "helicoptero",
            say: { A: "¿Oyen eso? Es un helicóptero. Creo que alguien más llamó.", B: "¿Oyen eso? Un helicóptero. Creo que alguien más llamó por la granada.", C: "¿Oyen eso? Un helicóptero. Parece que el paseo entero llamó por la granada." },
            reply: { A: "Un helicóptero ilumina el canal. El policía te toma del brazo. Paula y Nacho se abrazan.", B: "Un helicóptero ilumina el canal con su foco. El policía te toma del brazo. Paula y Nacho se abrazan, por fin de acuerdo.", C: "Un helicóptero barre el canal con el foco. El policía te sujeta del brazo. Paula y Nacho se abrazan: por fin están de acuerdo en algo." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "gas-inicio": {
        who: "paula", mood: "furious",
        line: {
          A: "Paula ve tu gas pimienta. «¡Préstamelo! ¡Un segundo!» Nacho se esconde detrás de la baranda. «¡Paula, no!»",
          B: "Paula ve el gas pimienta en tu mano y extiende la suya. «¡Préstamelo! ¡Solo un segundo!» Nacho se esconde detrás de la baranda. «¡Paula, ni se te ocurra!»",
          C: "Paula repara en tu gas pimienta y estira la mano. «¡Préstamelo un segundo!» Nacho se refugia detrás de la baranda. «¡Paula, no, por favor, hablemos!»",
        },
        options: [
          {
            id: "no",
            say: { A: "No. Es para peligro de verdad. Nacho no es peligroso.", B: "No. Es para peligros de verdad, y Nacho no parece muy peligroso.", C: "No. Esto es para un peligro real, y Nacho, escondido detrás de la baranda, no parece calificar." },
            reply: { A: "Nacho asoma la cabeza. «¡Gracias! ¿Ves, Paula? En esta ciudad todos llevan gas. ¡Y tú quieres ir a una más grande!»", B: "Nacho asoma la cabeza. «¡Gracias! ¿Ves, Paula? Aquí hasta la gente amable lleva gas pimienta. ¡Y tú quieres irte a una ciudad más grande!»", C: "Nacho asoma la cabeza. «¡Gracias! ¿Lo ves, Paula? Aquí hasta los que vienen a ayudar llevan gas pimienta. ¿Y quieres mudarte a una ciudad más grande?»" },
            mood: "scared", next: "gas-nacho",
          },
          {
            id: "toma",
            act: { A: "Le das el gas a Paula.", B: "Le das el bote a Paula, con mucha duda.", C: "Le entregas el bote a Paula, en contra de tu propio criterio." },
            say: { A: "Toma. Pero no lo uses. Es solo para que él escuche.", B: "Toma. Pero no lo uses, es solo para que él te escuche.", C: "Toma. Pero no lo uses: es solo para que, por una vez, él escuche." },
            reply: { A: "Paula apunta a Nacho. «Ahora sí me escuchas.» Nacho: «¡Te escucho! ¡Te escucho!»", B: "Paula apunta a Nacho sin apretar. «Ahora sí me vas a escuchar.» Nacho, desde la baranda: «¡Te escucho! ¡Te juro que te escucho!»", C: "Paula apunta a Nacho con una calma inquietante. «Ahora sí vas a escucharme.» Nacho: «¡Te escucho! ¡Nunca te escuché tanto!»" },
            mood: "scared", next: "gas-nacho",
          },
          {
            id: "nacho",
            say: { A: "Mejor se lo doy a Nacho. Él parece el que tiene miedo.", B: "Mejor se lo doy a Nacho, que es el que parece tener miedo.", C: "Mejor se lo doy a Nacho: de los dos, es claramente el que más miedo tiene." },
            reply: { A: "Nacho no lo toma. Corre hacia el puente. Paula: «¡Perfecto! ¡Otra vez corre!»", B: "Nacho ni lo toca: sale corriendo hacia el puente. Paula: «¡Perfecto! ¡Otra vez huye!»", C: "Nacho no lo acepta; sale corriendo hacia el puente. Paula: «¡Magnífico! ¡Es lo único que sabe hacer: huir!»" },
            mood: "angry", end: "gas-huye",
          },
        ],
      },
      "gas-nacho": {
        who: "nacho", mood: "scared",
        line: {
          A: "Nacho sale de detrás de la baranda. «Esta ciudad me da miedo. La otra es más grande. Por eso no quiero irme. No es por Paula.»",
          B: "Nacho sale de detrás de la baranda, con las manos a la vista. «Esta ciudad ya me da miedo, y la otra es el doble de grande. Por eso no quiero irme. No es por Paula, es por mí.»",
          C: "Nacho abandona la baranda con las manos en alto. «Esta ciudad ya me asusta; la otra es el doble de grande. Por eso no quiero irme. No tiene que ver con Paula, sino conmigo.»",
        },
        options: [
          {
            id: "miedo",
            say: { A: "Entonces tu problema es el miedo, no Paula. Díselo.", B: "Entonces tu problema es el miedo, no Paula. Díselo a ella, no a mí.", C: "Entonces tu problema es el miedo, no Paula ni el trabajo. Díselo a ella, con esas mismas palabras." },
            reply: { A: "Nacho mira a Paula. «Tengo miedo. Pero contigo tengo menos.» Paula baja el gas.", B: "Nacho mira a Paula. «Tengo miedo. Pero contigo tengo menos miedo que solo.» Paula baja el bote.", C: "Nacho mira a Paula. «Tengo miedo. Pero contigo tengo menos que quedándome solo aquí.» Paula baja el bote, despacio." },
            mood: "sad", next: "gas-charla",
          },
          {
            id: "peligrosa",
            say: { A: "Paula, ¿la otra ciudad es peligrosa?", B: "Paula, ¿de verdad la otra ciudad es tan peligrosa?", C: "Paula, con sinceridad: ¿la otra ciudad es tan peligrosa como él cree?" },
            reply: { A: "Paula se ríe. «¡Es más tranquila que esta! Nacho, allí nadie lleva gas.»", B: "Paula se ríe por primera vez. «¡Es más tranquila que esta! Nacho, allí nadie lleva gas pimienta en el bolsillo.»", C: "Paula se ríe, sorprendida. «¡Es más tranquila que esta! Nacho, allí la gente sale de noche sin gas pimienta.»" },
            mood: "smile", next: "gas-charla",
          },
          {
            id: "irse",
            say: { A: "Me voy con mi gas. Ustedes sigan.", B: "Me llevo mi gas y me voy. Ustedes sigan con lo suyo.", C: "Recupero mi gas y me retiro. Ustedes continúen; ya tienen bastante sin mí." },
            reply: { A: "Paula te devuelve el bote. «Gracias por nada.» Siguen discutiendo.", B: "Paula te devuelve el bote de mala gana. «Gracias por nada.» Y siguen discutiendo.", C: "Paula te devuelve el bote con desgana. «Gracias por nada.» La discusión se reanuda donde la dejaron." },
            mood: "angry", end: "siguen",
          },
        ],
      },
      "gas-charla": {
        who: "paula", mood: "worried",
        line: {
          A: "Paula te devuelve el gas. «Bueno. Ya sabemos el problema: el miedo. ¿Y ahora qué?»",
          B: "Paula te devuelve el bote. «Bueno, ya tenemos el diagnóstico: miedo. ¿Y ahora qué hacemos con él?»",
          C: "Paula te devuelve el bote. «Perfecto, ya tenemos el diagnóstico: miedo puro. ¿Y ahora qué hacemos con eso?»",
        },
        options: [
          {
            id: "plan",
            say: { A: "Van juntos un fin de semana. Sin gas. A ver la ciudad.", B: "Vayan juntos un fin de semana a conocer la ciudad. Sin gas pimienta.", C: "Vayan juntos un fin de semana a conocer esa ciudad. Sin gas pimienta, como prueba de confianza." },
            reply: { A: "Nacho asiente. «Un fin de semana. Puedo.» Paula lo abraza.", B: "Nacho asiente despacio. «Un fin de semana. Eso sí puedo.» Paula lo abraza.", C: "Nacho asiente. «Un fin de semana. Eso lo puedo hacer.» Paula lo abraza, aliviada." },
            mood: "love", end: "gas-plan",
          },
          {
            id: "sola",
            say: { A: "Paula, ve tú primero. Él va después, cuando no tenga miedo.", B: "Paula, vete tú primero. Él va después, cuando se le pase el miedo.", C: "Paula, adelántate tú. Él irá después, cuando el miedo se lo permita." },
            reply: { A: "Paula asiente. «Sí. Primero yo.» Nacho no dice nada.", B: "Paula asiente. «Sí. Primero yo.» Nacho no dice nada, pero no corre.", C: "Paula asiente. «Sí. Primero yo.» Nacho calla, pero esta vez no huye." },
            mood: "sad", end: "gas-primero",
          },
          {
            id: "gas-regalo",
            act: { A: "Le das el gas a Nacho.", B: "Le dejas el bote a Nacho.", C: "Le dejas el bote a Nacho, con solemnidad." },
            say: { A: "Nacho, toma. Para la ciudad nueva. Así tienes menos miedo.", B: "Nacho, quédatelo. Para la ciudad nueva, por si te da menos miedo.", C: "Nacho, es tuyo. Llévalo a la ciudad nueva; con suerte no lo necesitas nunca." },
            reply: { A: "Nacho lo guarda. «Gracias. Es raro, pero ayuda.» Paula se ríe.", B: "Nacho lo guarda en el bolsillo. «Gracias. Es rarísimo, pero ayuda.» Paula se ríe.", C: "Nacho lo guarda con cuidado. «Gracias. Es absurdo, pero me tranquiliza.» Paula se ríe de los dos." },
            mood: "smile", end: "gas-plan",
          },
        ],
      },
      "lapiz-inicio": {
        who: "paula", mood: "angry",
        line: {
          A: "Paula ve tu lápiz y lo toma. «¡Perfecto! Nacho, escribe. Escribe por qué no quieres irte. Si no puedes hablar, escribe.»",
          B: "Paula ve el lápiz y te lo quita de la mano. «¡Perfecto! Nacho, toma. Escribe por qué no quieres irte. Ya que hablar no puedes, escribe.»",
          C: "Paula ve el lápiz y lo confisca. «¡Justo lo que hacía falta! Nacho, escribe por qué no quieres irte. Si no te salen las palabras, que te salgan las letras.»",
        },
        options: [
          {
            id: "nacho",
            say: { A: "Nacho, toma el lápiz. Escribe. Nadie lee hasta que termines.", B: "Nacho, toma el lápiz y escribe. Nadie lee nada hasta que termines.", C: "Nacho, toma el lápiz y escribe. Prometo que nadie lee ni una línea hasta que termines." },
            reply: { A: "Nacho toma el lápiz. Escribe en el ticket del supermercado. Le tiembla la mano.", B: "Nacho toma el lápiz y escribe en el reverso de un ticket del supermercado. Le tiembla la mano.", C: "Nacho acepta el lápiz y escribe en el dorso de un ticket de supermercado, con la mano temblorosa." },
            mood: "worried", next: "lapiz-nota",
          },
          {
            id: "paula",
            say: { A: "Mejor escribe tú primero, Paula. Qué quieres de verdad.", B: "Mejor escribe tú primero, Paula. Lo que quieres de verdad.", C: "Mejor empieza tú, Paula. Escribe lo que quieres de verdad, sin gritos." },
            reply: { A: "Paula escribe rápido: «Quiero ir. Contigo.» Se lo da a Nacho. Nacho toma el lápiz.", B: "Paula escribe deprisa: «Quiero irme. Pero contigo.» Se lo pasa a Nacho, que toma el lápiz.", C: "Paula escribe sin pensar: «Quiero irme. Pero contigo.» Le pasa el papel a Nacho, que toma el lápiz." },
            mood: "sad", next: "lapiz-nota",
          },
          {
            id: "mapa",
            act: { A: "Dibujas un mapa en un papel.", B: "Dibujas un mapa rápido: esta ciudad, la otra, una línea.", C: "Dibujas un mapa en un papel: esta ciudad, la otra, y la línea de tren entre ambas." },
            say: { A: "Miren. Aquí esta ciudad. Aquí la otra. ¿Cuántas horas hay?", B: "Miren: esta ciudad aquí, la otra aquí. ¿Cuántas horas hay entre las dos?", C: "Miren el mapa: esta ciudad, la otra, y esta línea. ¿Cuántas horas de tren hay entre ambas?" },
            reply: { A: "Paula: «Tres horas en tren.» Nacho mira el mapa. «¿Solo tres?»", B: "Paula: «Tres horas en tren.» Nacho mira el mapa como si fuera nuevo. «¿Solo tres?»", C: "Paula: «Tres horas en tren.» Nacho estudia el dibujo como si nunca lo hubiera pensado. «¿Tres? ¿Nada más?»" },
            mood: "surprised", next: "lapiz-mapa",
          },
        ],
      },
      "lapiz-nota": {
        who: "nacho", mood: "sad",
        line: {
          A: "Nacho termina de escribir. Te da el papel: «Tengo miedo de que te vayas y no vuelvas». Paula lo lee.",
          B: "Nacho termina y te pasa el ticket: «Tengo miedo de que te vayas y no vuelvas nunca». Paula lo lee por encima de tu hombro.",
          C: "Nacho termina y te entrega el ticket: «Tengo miedo de que te vayas y de que, al volver, ya no seas tú». Paula lo lee por encima de tu hombro.",
        },
        options: [
          {
            id: "leer",
            say: { A: "Paula, léelo en voz alta. Y después contesta. Por escrito.", B: "Paula, léelo en voz alta. Y después contéstale, por escrito también.", C: "Paula, léelo en voz alta. Y respóndele por escrito, con el mismo lápiz." },
            reply: { A: "Paula lee. Llora. Escribe: «Vuelvo siempre». Nacho la abraza.", B: "Paula lo lee en voz alta y se le quiebra la voz. Escribe debajo: «Vuelvo siempre». Nacho la abraza.", C: "Paula lee en voz alta y se le rompe la voz a mitad de frase. Escribe debajo: «Vuelvo siempre». Nacho la abraza." },
            mood: "love", end: "lapiz-carta",
          },
          {
            id: "romper",
            say: { A: "Paula, ¿qué piensas?", B: "Paula, ¿qué piensas de lo que escribió?", C: "Paula, ¿qué te parece lo que acaba de escribir?" },
            reply: { A: "Paula rompe el papel. «¿Miedo? ¡Yo también tengo miedo! ¡Pero yo no me quedo!»", B: "Paula rompe el ticket en dos. «¿Miedo? ¡Yo también tengo miedo! La diferencia es que yo no me quedo quieta.»", C: "Paula rompe el ticket. «¿Miedo? ¡Todos tenemos miedo! La diferencia es que yo no uso el mío de excusa.»" },
            mood: "furious", end: "lapiz-rompe",
          },
          {
            id: "firmar",
            say: { A: "Nacho, firma debajo: “Voy contigo”. Solo si es verdad.", B: "Nacho, firma debajo: “Voy contigo”. Pero solo si es verdad.", C: "Nacho, firma debajo: “Voy contigo”. Solo si es verdad; una firma falsa es peor que un no." },
            reply: { A: "Nacho mira el lápiz un minuto. Firma. Paula no puede hablar.", B: "Nacho mira el lápiz durante un minuto largo. Firma. Paula se queda sin palabras.", C: "Nacho contempla el lápiz un minuto entero. Firma. Paula, por primera vez en la noche, no tiene nada que decir." },
            mood: "love", end: "lapiz-carta",
          },
        ],
      },
      "lapiz-mapa": {
        who: "paula", mood: "neutral",
        line: {
          A: "Paula toma el lápiz y escribe sobre el mapa: «Viernes: Nacho viene. Domingo: Paula va». «¿Y así?»",
          B: "Paula toma el lápiz y escribe sobre tu mapa: «Viernes: Nacho viene. Domingo: Paula vuelve». Mira a Nacho. «¿Y así, qué?»",
          C: "Paula toma el lápiz y anota sobre tu mapa: «Viernes: Nacho viaja. Domingo: Paula vuelve». Lo mira. «¿Y así, qué me dices?»",
        },
        options: [
          {
            id: "tren",
            say: { A: "Tres horas de tren. Es menos que una discusión de ustedes.", B: "Tres horas de tren. Dura menos que una discusión de ustedes dos.", C: "Tres horas de tren. Menos de lo que dura una discusión de ustedes, por lo que he visto." },
            reply: { A: "Nacho se ríe. «Es verdad. Bueno. Pruebo seis meses.»", B: "Nacho se ríe sin querer. «Es verdad. Está bien. Probamos seis meses.»", C: "Nacho se ríe a su pesar. «Tienes razón. De acuerdo: seis meses de prueba.»" },
            mood: "smile", end: "lapiz-tren",
          },
          {
            id: "nacho-escribe",
            say: { A: "Nacho, tu turno. Escribe algo en el mapa.", B: "Nacho, te toca. Escribe algo en el mapa, lo que sea.", C: "Nacho, tu turno con el lápiz. Escribe lo que sea en el mapa, pero escribe." },
            reply: { A: "Nacho escribe junto a la otra ciudad: «Nacho también». Paula lo besa.", B: "Nacho escribe junto a la otra ciudad: «Nacho también vive aquí». Paula lo besa.", C: "Nacho escribe junto a la otra ciudad: «Aquí también vive Nacho». Paula lo besa sin avisar." },
            mood: "love", end: "lapiz-carta",
          },
          {
            id: "duda",
            say: { A: "Paula, ¿y si él no viene los viernes?", B: "Paula, ¿y si él no viene ningún viernes?", C: "Paula, ¿y si los viernes llegan y él nunca sube al tren?" },
            reply: { A: "Paula rompe el mapa. «Entonces se acabó. Mejor saberlo ahora.»", B: "Paula rompe el mapa. «Entonces se acabó. Prefiero saberlo ahora que en seis meses.»", C: "Paula rompe el mapa en dos. «Entonces se terminó. Prefiero saberlo hoy que descubrirlo un viernes.»" },
            mood: "angry", end: "lapiz-rompe",
          },
        ],
      },
      "libro-inicio": {
        who: "paula", mood: "laugh",
        line: {
          A: "Paula ve tu libro y se ríe muy fuerte. «¡No lo puedo creer! ¡Es una guía de la ciudad del norte! ¡Nacho, mira! ¡Es una señal!»",
          B: "Paula ve la portada de tu libro y suelta una carcajada. «¡No puede ser! ¡Es una guía de la ciudad del norte! ¡Nacho, mira esto! ¡Es una señal!»",
          C: "Paula ve la portada de tu libro y se ríe con ganas por primera vez. «¡Esto es increíble! ¡Una guía de la ciudad del norte! Nacho, mira: el universo opina.»",
        },
        options: [
          {
            id: "senal",
            say: { A: "Sí, es una señal. Nacho, el libro dice que te vayas.", B: "Pues sí, parece una señal. Nacho, hasta el libro dice que te vayas.", C: "Lo es: una señal en toda regla. Nacho, hasta la guía turística te está diciendo que te vayas." },
            reply: { A: "Nacho te mira mal. «¿Te pagó ella? ¿Quién lleva una guía de noche?»", B: "Nacho te mira con sospecha. «¿Te pagó ella? ¿Quién lleva una guía turística por la Costanera a estas horas?»", C: "Nacho entrecierra los ojos. «¿Te pagó ella? Porque nadie pasea de noche con una guía de otra ciudad por casualidad.»" },
            mood: "angry", next: "libro-nacho",
          },
          {
            id: "fotos",
            say: { A: "¿Quieren ver? Tiene fotos. Miren el río del norte.", B: "¿Quieren verla? Tiene fotos. Miren el río del norte, por ejemplo.", C: "¿Quieren echarle un vistazo? Tiene fotos; miren el río del norte, por ejemplo." },
            reply: { A: "Paula abre el libro. «¡Mira, Nacho! ¡Tiene un canal como este!»", B: "Paula abre la guía por las fotos. «¡Mira, Nacho! ¡Tiene un canal igual que este, con patos y todo!»", C: "Paula abre la guía por las fotos. «¡Mira, Nacho! Tiene un canal como este, con patos y todo. Hasta podrías discutir conmigo allí.»" },
            mood: "smile", next: "libro-fotos",
          },
          {
            id: "casualidad",
            say: { A: "Es casualidad. Lo compré hoy, en el mercado.", B: "Es pura casualidad. Lo compré esta tarde en el mercado.", C: "Es casualidad, lo juro. Lo compré esta tarde en el mercado por dos monedas." },
            reply: { A: "Nacho cruza los brazos. «Casualidad. Claro. ¿Y qué dice de la ciudad?»", B: "Nacho cruza los brazos. «Casualidad, claro. ¿Y qué dice la guía de esa ciudad?»", C: "Nacho cruza los brazos. «Casualidad, por supuesto. ¿Y qué cuenta la guía de esa maravillosa ciudad?»" },
            mood: "angry", next: "libro-nacho",
          },
        ],
      },
      "libro-nacho": {
        who: "nacho", mood: "angry",
        line: {
          A: "Nacho toma el libro. Lo abre. Hay una foto de un puente de noche. Se queda callado. «Parece bonito. No lo digas.»",
          B: "Nacho te quita el libro y lo abre al azar. Una foto de un puente de noche. Se queda callado un rato. «Parece bonito. Ni se te ocurra decirlo.»",
          C: "Nacho te arrebata el libro y lo abre al azar: un puente de noche, con luces en el agua. Se queda mudo. «Es bonito. Y no quiero oír ni una palabra.»",
        },
        options: [
          {
            id: "regalar",
            say: { A: "Es tuyo, Nacho. Léelo esta noche. Mañana decides.", B: "Quédatelo, Nacho. Léelo esta noche y mañana decides.", C: "Es tuyo, Nacho. Léelo esta noche, con calma, y mañana decides con la guía en la mano." },
            reply: { A: "Nacho guarda el libro. «Bueno. Lo leo. No prometo nada.» Paula sonríe.", B: "Nacho se guarda el libro bajo el brazo. «Está bien. Lo leo. No prometo nada.» Paula sonríe.", C: "Nacho se guarda la guía bajo el brazo. «De acuerdo, la leo. No prometo nada más.» Paula sonríe, y eso ya es bastante." },
            mood: "smile", end: "libro-regalo",
          },
          {
            id: "canal",
            say: { A: "Si no te gusta, tíralo al canal.", B: "Si no te gusta, tíralo al canal y ya está.", C: "Si tanto te molesta, tíralo al canal y asunto resuelto." },
            reply: { A: "Nacho lo tira al agua. Paula grita: «¡Nacho! ¡Era de él!»", B: "Nacho lo tira al agua sin dudar. Paula grita: «¡Nacho! ¡Ese libro no era tuyo!»", C: "Nacho lo lanza al agua sin pensarlo. Paula: «¡Nacho! ¡Ese libro ni siquiera era tuyo!»" },
            mood: "furious", end: "libro-canal",
          },
          {
            id: "leer",
            say: { A: "Lee una página en voz alta. La del puente.", B: "Lee en voz alta una página, la del puente.", C: "Lee en voz alta la página del puente, solo esa." },
            reply: { A: "Nacho lee: «El puente del norte, el mejor lugar para discutir mirando el agua». Paula se ríe mucho.", B: "Nacho lee: «El puente del norte: el mejor lugar de la ciudad para discutir mirando el agua». Paula llora de risa.", C: "Nacho lee: «El puente del norte, lugar predilecto de las parejas para discutir con vistas». Paula llora de la risa." },
            mood: "laugh", next: "libro-fotos",
          },
        ],
      },
      "libro-fotos": {
        who: "paula", mood: "smile",
        line: {
          A: "Paula señala una foto. «Nacho, en este café podemos pelear los domingos. ¿Qué dices?»",
          B: "Paula señala una foto del libro. «Nacho, mira este café. Aquí podemos discutir los domingos, como aquí. ¿Qué me dices?»",
          C: "Paula señala una foto de la guía. «Nacho, en este café podemos discutir los domingos, igual que aquí, pero con mejor café. ¿Qué dices?»",
        },
        options: [
          {
            id: "plan",
            say: { A: "Nacho, di que sí. El libro ya eligió el café.", B: "Nacho, di que sí. El libro ya eligió hasta el café.", C: "Nacho, di que sí. La guía ya decidió el café; a ti solo te queda el tren." },
            reply: { A: "Nacho suspira. «Sí. Pero el café lo pago yo.» Paula lo abraza.", B: "Nacho suspira. «Está bien. Sí. Pero el café lo pago yo.» Paula lo abraza.", C: "Nacho suspira, vencido. «Sí. Pero el café corre por mi cuenta.» Paula lo abraza." },
            mood: "love", end: "libro-plan",
          },
          {
            id: "regalo",
            say: { A: "Les regalo el libro. Para el viaje.", B: "Les regalo la guía. Para el viaje, cuando sea.", C: "Les dejo la guía de regalo. Para el viaje, sea cuando sea." },
            reply: { A: "Paula toma el libro. «Gracias. Nacho lo lee en el tren.» Nacho: «Veremos.»", B: "Paula se queda con la guía. «Gracias. Nacho la lee en el tren.» Nacho: «Ya veremos.»", C: "Paula acepta la guía. «Gracias. Nacho la leerá en el tren.» Nacho: «Eso está por verse.»" },
            mood: "smile", end: "libro-regalo",
          },
          {
            id: "mio",
            say: { A: "Bueno, el libro es mío. Me lo llevo. Ustedes decidan.", B: "Bueno, el libro es mío y me lo llevo. Ustedes decidan solos.", C: "La guía es mía, así que me la llevo. La decisión, en cambio, es de ustedes." },
            reply: { A: "Paula cierra el libro. «Gracias igual.» Nacho mira el agua, pensando.", B: "Paula cierra la guía y te la devuelve. «Gracias igual.» Nacho se queda mirando el agua, pensativo.", C: "Paula cierra la guía y te la devuelve. «Gracias de todos modos.» Nacho mira el agua con una cara nueva." },
            mood: "neutral", end: "libro-piensa",
          },
        ],
      },
      "corazon-inicio": {
        who: "paula", mood: "love",
        line: {
          A: "El corazón llega a los dos. Dejan de gritar. Se miran. Hay corazones en el aire. Paula: «¿Por qué… te quiero tanto ahora mismo, Nacho?»",
          B: "El corazón alcanza a los dos en mitad del grito. Se callan. Se miran, rodeados de corazones. Paula: «¿Por qué de repente te quiero tanto, Nacho? Estaba furiosa.»",
          C: "El corazón los alcanza a los dos a mitad de frase. Se callan y se miran, con corazones flotando entre ellos. Paula: «No entiendo nada: hace un segundo te odiaba y ahora te quiero muchísimo, Nacho.»",
        },
        options: [
          {
            id: "sentir",
            say: { A: "Díganse lo que sienten. Ahora. Sin gritar.", B: "Díganse lo que sienten, ahora, sin gritar.", C: "Díganse lo que sienten ahora mismo, mientras dura, y sin gritar." },
            reply: { A: "Nacho: «Tengo miedo de perderte.» Paula: «Yo tengo miedo de irme sin ti.»", B: "Nacho: «Tengo miedo de perderte.» Paula: «Y yo tengo miedo de irme sin ti.» Ninguno grita.", C: "Nacho: «Tengo miedo de perderte.» Paula: «Y yo, de irme sin ti.» Es la primera vez que se dicen lo mismo." },
            mood: "smitten", next: "corazon-nacho",
          },
          {
            id: "decidir",
            say: { A: "Ahora decidan. Con calma. Con corazones.", B: "Ahora decidan, con calma, mientras duran los corazones.", C: "Ahora decidan, con calma; los corazones no duran para siempre." },
            reply: { A: "Nacho toma la mano de Paula. «Me voy contigo. A donde sea.»", B: "Nacho toma la mano de Paula. «Me voy contigo. A donde sea, de verdad.»", C: "Nacho toma la mano de Paula. «Me voy contigo. A donde sea, y lo digo con corazones o sin ellos.»" },
            mood: "love", next: "corazon-nacho",
          },
          {
            id: "solos",
            say: { A: "Los dejo solos. Creo que ya no me necesitan.", B: "Los dejo solos. Creo que ya no me necesitan para nada.", C: "Los dejo solos: está claro que ya no hacen falta terceros." },
            reply: { A: "No te oyen. Se besan junto a la baranda. Los patos miran.", B: "No te oyen. Se están besando junto a la baranda, y los patos miran con interés.", C: "No te escuchan: se besan contra la baranda, y hasta los patos parecen aprobarlo." },
            mood: "love", end: "corazon-beso",
          },
        ],
      },
      "corazon-nacho": {
        who: "nacho", mood: "smitten",
        line: {
          A: "Nacho mira a Paula con ojos de corazón. «Seis meses, un año, lo que quieras. ¿Qué hacemos ahora?»",
          B: "Nacho mira a Paula con los ojos llenos de corazones. «Seis meses, un año, lo que tú digas. ¿Y ahora qué hacemos?»",
          C: "Nacho mira a Paula con auténticos ojos de corazón. «Seis meses, un año, una vida: lo que tú digas. ¿Y ahora qué hacemos con la noche?»",
        },
        options: [
          {
            id: "beso",
            say: { A: "Ahora, un beso. Después, las maletas.", B: "Ahora, un beso. Las maletas, después.", C: "Ahora, un beso. Las maletas pueden esperar hasta mañana." },
            reply: { A: "Se besan. Los corazones suben hasta las farolas.", B: "Se besan, y los corazones suben hasta las farolas.", C: "Se besan, y los corazones flotan hasta las farolas del paseo." },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "bailar",
            say: { A: "Bailen. Aquí. Sin música.", B: "Bailen aquí mismo, sin música.", C: "Bailen aquí mismo; la música la ponen los corazones." },
            reply: { A: "Paula se ríe y toma a Nacho. Bailan junto al canal.", B: "Paula se ríe y arrastra a Nacho. Bailan junto al canal, sin música.", C: "Paula se ríe y arrastra a Nacho a la baranda. Bailan sin música, con corazones." },
            mood: "love", end: "corazon-baile",
          },
          {
            id: "plan",
            say: { A: "Hagan un plan: seis meses allí. Fines de semana aquí.", B: "Hagan un plan ahora: seis meses allí, fines de semana aquí.", C: "Hagan un plan mientras dura el efecto: seis meses allí, fines de semana aquí." },
            reply: { A: "Paula: «Seis meses.» Nacho: «Y vengo todos los viernes.» Se abrazan.", B: "Paula: «Seis meses.» Nacho: «Y yo voy todos los viernes.» Se abrazan sin discutir.", C: "Paula: «Seis meses.» Nacho: «Y yo tomo el tren todos los viernes.» Se abrazan, y nadie discute." },
            mood: "love", end: "corazon-plan",
          },
        ],
      },
    },
    ends: {
      abrazo: { text: { A: "Paula y Nacho se abrazan. Después caminan juntos por el canal.", B: "Paula y Nacho se abrazan. Luego se van caminando junto al canal, hablando bajito.", C: "Paula y Nacho se abrazan largo rato. Luego se alejan junto al agua, discutiendo los detalles, pero en voz baja." }, change: "abraza", recap: "Ayudaste a Paula y a Nacho a reconciliarse." },
      "se-va": { text: { A: "Paula se va sola. Nacho se queda mirando el agua.", B: "Paula se va sola hacia el puente. Nacho se queda en la baranda, sin saber qué hacer.", C: "Paula se aleja sin mirar atrás. Nacho se queda en la baranda, preguntándose en qué momento perdió la discusión." }, change: "se-va", recap: "Diste tu opinión y Paula se fue enojada." },
      siguen: { text: { A: "Paula y Nacho siguen discutiendo. Los patos se van.", B: "La pareja sigue discutiendo, más fuerte que antes. Hasta los patos se van a otra parte.", C: "La discusión continúa, ahora con argumentos nuevos. Los patos, prudentes, se mudan al otro lado del canal." }, change: "enojado", recap: "Paula y Nacho siguieron discutiendo." },
      huyen: { text: { A: "Paula y Nacho corren juntos. Ya no discuten.", B: "Paula y Nacho se van corriendo de la mano. Por lo menos ahora están de acuerdo en algo.", C: "Paula y Nacho huyen juntos. Paradójicamente, no los has visto tan unidos en toda la noche." }, change: "corre", recap: "Asustaste a una pareja que discutía." },
      "cuchillo-policia": { text: { A: "Una patrulla llega. Tú y Nacho explican los cuchillos. Paula explica todo lo demás.", B: "Llega una patrulla. Tú y Nacho explican lo de los cuchillos durante media hora. Paula explica todo lo demás.", C: "Llega una patrulla. Tú y Nacho dan explicaciones sobre los cuchillos durante media hora; Paula se encarga del resto de la historia." }, change: "policia", recap: "Paula llamó a la policía por los dos cuchillos." },
      "cuchillo-paz": { text: { A: "Dos cuchillos en el canal. Paula y Nacho se abrazan. Hablan del tren, por fin.", B: "Dos cuchillos en el fondo del canal. Paula y Nacho se abrazan y, por fin, hablan de trenes y fines de semana.", C: "Dos cuchillos descansan en el fondo del canal. Paula y Nacho se abrazan y, por fin, hablan de horarios de tren en vez de gritarse." }, change: "abraza", recap: "Tras el duelo de cuchillos, Paula y Nacho hicieron las paces." },
      "cuchillo-sola": { text: { A: "Paula se va sola. Nacho se queda en la baranda, sin navaja y sin Paula.", B: "Paula se va sola hacia el puente. Nacho se queda en la baranda, sin navaja y sin Paula.", C: "Paula se aleja sola hacia el puente. Nacho se queda apoyado en la baranda, sin navaja, sin Paula y sin argumentos." }, change: "se-va", recap: "Después de la navaja, Paula se fue sola." },
      "pistola-corren": { text: { A: "Paula y Nacho corren de la mano hacia el puente. Por fin están de acuerdo.", B: "Paula y Nacho huyen de la mano hacia el puente. Es la primera vez que están de acuerdo en algo.", C: "Paula y Nacho huyen de la mano hacia el puente; tu pistola logró lo que un mes de discusiones no pudo: ponerlos de acuerdo." }, change: "huye", recap: "Paula y Nacho huyeron juntos de tu pistola." },
      "pistola-juntos": { text: { A: "Paula y Nacho se abrazan. Se van juntos. Tú guardas la pistola y te vas por el otro lado.", B: "Paula y Nacho se abrazan y se van juntos hacia el puente. Tú guardas la pistola y te vas por el otro lado.", C: "Paula y Nacho se abrazan y se alejan juntos hacia el puente. Guardas la pistola y te vas por el lado contrario, con la sensación de haber decidido la vida de dos personas." }, change: "abraza", recap: "Nacho decidió irse con Paula, con tu pistola delante." },
      "pistola-policia": { text: { A: "Llega la policía. Tú, con las manos arriba. Paula y Nacho explican. Nacho dice que ya decidió.", B: "Llega la policía y ahora eres tú el que tiene las manos arriba. Paula y Nacho explican todo. Nacho aclara que, eso sí, ya decidió.", C: "Llega la policía y esta vez las manos arriba son las tuyas. Paula y Nacho lo explican todo; Nacho aprovecha para aclarar que, pistola aparte, ya decidió." }, change: "manos-arriba", recap: "Paula llamó a la policía por tu pistola." },
      "pistola-manana": { text: { A: "Paula y Nacho se van juntos, pero sin decidir. Mañana, sin pistola, hablan.", B: "Paula y Nacho se van juntos, pero sin decidir nada. Mañana, sin pistola y sin susto, lo hablan.", C: "Paula y Nacho se van juntos, sin decidir nada todavía. Mañana, sin pistola de por medio, lo hablarán en serio." }, change: "sigue", recap: "Paula quiere que Nacho decida mañana, sin tu pistola." },
      "granada-corre": { text: { A: "Paula y Nacho corren por el puente. Tú te quedas con tu granada y los patos.", B: "Paula y Nacho corren por el puente, cada uno por su lado. Te quedas solo con la granada y los patos.", C: "Paula y Nacho corren por el puente, cada uno a su ritmo. Te quedas solo con la granada, los patos y una discusión sin terminar." }, change: "corre", recap: "Tu granada hizo correr a Paula y a Nacho." },
      "granada-decide": { text: { A: "Paula se va sola. Decidida. Nacho no vuelve.", B: "Paula se va sola hacia el puente, decidida. Nacho no vuelve.", C: "Paula se aleja sola hacia el puente, con la decisión tomada. Nacho no regresa." }, change: "se-va", recap: "Paula decidió irse sola cuando Nacho huyó de la granada." },
      "granada-policia": { text: { A: "El policía te lleva a la patrulla con la granada. Paula y Nacho miran. Nacho dice: «Volví, ¿eh?»", B: "El policía te lleva a la patrulla con tu llavero. Paula y Nacho miran. Nacho, bajito: «Volví, ¿eh? Que conste.»", C: "El policía te escolta a la patrulla, llavero incluido. Paula y Nacho miran. Nacho, en voz baja: «Volví, que conste.»" }, change: "policia", recap: "Nacho volvió con un policía por tu granada." },
      "granada-perdon": { text: { A: "Paula abraza a Nacho. El policía se lleva tu granada. Todos respiran.", B: "Paula abraza a Nacho. El policía se queda con tu granada y todos respiran.", C: "Paula abraza a Nacho. El policía confisca tu granada y todos respiran, cada uno por un motivo." }, change: "abraza", recap: "Paula perdonó a Nacho por huir de la granada." },
      "granada-helicoptero": { text: { A: "Un helicóptero vuela sobre el canal. El policía te lleva. Paula y Nacho se abrazan bajo la luz.", B: "Un helicóptero sobrevuela el canal con el foco encendido. El policía te lleva. Paula y Nacho se abrazan bajo esa luz.", C: "Un helicóptero ronda el canal con el foco encendido. El policía te lleva; Paula y Nacho se abrazan bajo esa luz, como en una película cara." }, change: "helicoptero", recap: "Tu granada trajo un helicóptero y unió a Paula y a Nacho." },
      "gas-huye": { text: { A: "Nacho corre por el puente. Paula se queda con tu gas en la mano. «Siempre igual.»", B: "Nacho huye por el puente. Paula se queda con tu bote en la mano. «Siempre igual, este hombre.»", C: "Nacho huye por el puente. Paula se queda con tu bote en la mano. «Siempre lo mismo: a la primera, corre.»" }, change: "huye", recap: "Nacho huyó del gas pimienta y Paula se quedó sola." },
      "gas-plan": { text: { A: "Paula y Nacho se abrazan. Van a viajar un fin de semana. Sin gas.", B: "Paula y Nacho se abrazan. El plan: un fin de semana en la otra ciudad, sin gas pimienta.", C: "Paula y Nacho se abrazan. El plan: un fin de semana en la otra ciudad, sin gas pimienta y sin discusiones." }, change: "abraza", recap: "Paula y Nacho planearon un viaje de prueba." },
      "gas-primero": { text: { A: "Paula se va primero. Nacho se queda, pero no corre. Es un comienzo.", B: "Paula se va primero. Nacho se queda en la baranda, pero esta vez no corre. Es un comienzo.", C: "Paula se va primero. Nacho se queda en la baranda y, por una vez, no huye. Es un comienzo pequeño." }, change: "se-va", recap: "Paula se va primero; Nacho irá cuando se le pase el miedo." },
      "lapiz-carta": { text: { A: "El ticket con el lápiz dice: «Tengo miedo» y «Vuelvo siempre». Se abrazan. Se lo llevan.", B: "El ticket escrito a lápiz dice «Tengo miedo» y, debajo, «Vuelvo siempre». Se abrazan y se lo llevan como un contrato.", C: "El ticket escrito a lápiz dice «Tengo miedo» y, debajo, «Vuelvo siempre». Se abrazan y se lo guardan como el contrato más importante de su vida." }, change: "abraza", recap: "Con tu lápiz, Nacho y Paula se escribieron lo que no podían decir." },
      "lapiz-rompe": { text: { A: "Paula rompe el papel y se va. Nacho se queda con tu lápiz en la mano.", B: "Paula rompe el papel y se va hacia el puente. Nacho se queda con tu lápiz en la mano, sin saber qué escribir.", C: "Paula rompe el papel y se marcha hacia el puente. Nacho se queda con tu lápiz en la mano y ninguna palabra que escribir." }, change: "enojado", recap: "Paula rompió lo que Nacho escribió con tu lápiz." },
      "lapiz-tren": { text: { A: "Nacho guarda el mapa. Seis meses de prueba. Paula sonríe por primera vez.", B: "Nacho dobla el mapa y se lo guarda. Seis meses de prueba. Paula sonríe por primera vez en la noche.", C: "Nacho dobla el mapa con cuidado y se lo guarda. Seis meses de prueba. Paula sonríe por primera vez en toda la noche." }, change: "sonrie", recap: "Tu mapa a lápiz convenció a Nacho de probar seis meses." },
      "libro-regalo": { text: { A: "Nacho se va con tu libro bajo el brazo. Paula camina a su lado. Nadie grita.", B: "Nacho se va con tu guía bajo el brazo. Paula camina a su lado y, por primera vez, nadie grita.", C: "Nacho se aleja con tu guía bajo el brazo; Paula camina a su lado y, por primera vez en la noche, nadie levanta la voz." }, change: "se-va", recap: "Nacho se llevó tu guía de la otra ciudad." },
      "libro-canal": { text: { A: "Tu libro flota en el canal. Paula se va furiosa. Nacho mira el agua.", B: "Tu libro flota en el canal. Paula se va furiosa. Nacho se queda mirando cómo se hunde.", C: "Tu libro se hunde despacio en el canal. Paula se va furiosa; Nacho se queda mirando cómo desaparece la guía y, quizá, el viaje." }, change: "enojado", recap: "Nacho tiró tu libro al canal." },
      "libro-plan": { text: { A: "Paula y Nacho se abrazan con el libro en medio. Ya tienen café para los domingos.", B: "Paula y Nacho se abrazan con la guía en medio. Ya tienen un café para discutir los domingos.", C: "Paula y Nacho se abrazan con la guía aplastada entre los dos. Ya tienen café para discutir los domingos; solo falta el tren." }, change: "abraza", recap: "Tu guía eligió el café de los domingos de Paula y Nacho." },
      "libro-piensa": { text: { A: "Te llevas tu libro. Nacho mira el agua. Está pensando. Paula espera.", B: "Te llevas tu guía. Nacho se queda mirando el agua, pensando. Paula espera sin gritar.", C: "Te llevas la guía. Nacho se queda mirando el agua, pensando de verdad. Paula espera, y por una vez no insiste." }, change: "sigue", recap: "Tu guía dejó a Nacho pensando." },
      "corazon-beso": { text: { A: "Paula y Nacho se besan junto al canal. Hay corazones hasta las farolas.", B: "Paula y Nacho se besan junto a la baranda. Los corazones suben hasta las farolas.", C: "Paula y Nacho se besan contra la baranda. Los corazones flotan hasta las farolas y el canal parece otro." }, change: "beso", recap: "El corazón convirtió la discusión en un beso." },
      "corazon-baile": { text: { A: "Paula y Nacho bailan junto al agua. Sin música. La gente del paseo aplaude.", B: "Paula y Nacho bailan junto al canal, sin música. La gente del paseo se detiene y aplaude.", C: "Paula y Nacho bailan junto al canal sin música. El paseo se detiene a mirar y alguien aplaude." }, change: "baila", recap: "Paula y Nacho bailaron junto al canal." },
      "corazon-plan": { text: { A: "Seis meses allí, viernes aquí. Paula y Nacho se abrazan. El plan está hecho.", B: "Seis meses allí y todos los viernes aquí. Paula y Nacho se abrazan: el plan está hecho.", C: "Seis meses allí, todos los viernes aquí. Paula y Nacho se abrazan: por fin tienen un plan y no una discusión." }, change: "abraza", recap: "Paula y Nacho hicieron un plan con el corazón." },
    },
    speak: {
      A1: "¿Con quién hablas cuando tienes un problema?",
      A2: "¿Qué cambio importante hiciste en tu vida?",
      B1: "¿Por qué te mudarías o no te mudarías a otra ciudad por trabajo?",
      B2: "¿Qué es más importante para ti, una gran oportunidad profesional o estar cerca de tu gente?",
      C1: "¿Cuándo crees que es legítimo opinar sobre los conflictos de pareja de otras personas?",
      C2: "¿Qué renuncias consideras parte del amor y cuáles te parecen una forma de perderse a uno mismo?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Qué haces cuando dos personas pelean?", B: "¿Alguna vez una pelea te asustó de verdad?", C: "¿Cómo reaccionas cuando alguien se pone violento para proteger a otra persona?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Obedeces cuando tienes miedo?", B: "¿Qué decisión tomarías más rápido bajo presión?", C: "¿Qué revela de una pareja la forma en que reacciona ante un peligro compartido?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Corres o te quedas cuando hay peligro?", B: "¿Alguien te dejó solo en un momento difícil?", C: "¿Qué te parece más grave: huir por miedo o quedarse por orgullo?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Tu ciudad es peligrosa de noche?", B: "¿Qué precauciones tomas en una ciudad nueva?", C: "¿Hasta qué punto el miedo a lo desconocido decide por nosotros?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes cartas a alguien?", B: "¿Qué es más fácil para ti, decir o escribir lo que sientes?", C: "¿Qué conversación importante preferirías tener por escrito y por qué?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Qué ciudad quieres conocer?", B: "¿Crees en las señales o en las casualidades?", C: "¿Qué libro cambió tu idea de un lugar antes de conocerlo?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Cómo haces las paces después de una pelea?", B: "¿Qué gesto de cariño te calma cuando estás enojado?", C: "¿Qué distingue una reconciliación sincera de una tregua por cansancio?" } },
    },
  },

  // ───────────────────────────── 3. Dormida en un banco
  {
    id: "costa-dormida",
    kind: "escena",
    district: "costa",
    title: "Dormida en un banco",
    verb: "ACERCARME",
    goal: "Preguntar por el estado de alguien, despertar con cortesía (usted), informar de la hora y dar indicaciones.",
    cast: [
      {
        id: "gloria", name: "Gloria", role: "Enfermera entre dos turnos",
        age: "adult", body: "f", build: "heavy", height: 1.6,
        hair: "bun", hairColor: "#2a1d16", skin: "#5a3826",
        top: "scrubs", topColor: "#6fb7b0", bottom: "pants", bottomColor: "#6fb7b0",
        extras: ["bag"], pose: "sleep", props: ["bench"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "gloria", mood: "sleepy",
        line: {
          A: "Una mujer con ropa de hospital duerme en un banco. Su celular vibra, pero no se despierta.",
          B: "Una mujer con uniforme de enfermera duerme sentada en un banco. En su bolso, el celular vibra una y otra vez, y ella ni se mueve.",
          C: "Una enfermera duerme en un banco con la cabeza apoyada en el bolso. El celular vibra con insistencia; ella ronca con más insistencia todavía.",
        },
        options: [
          {
            id: "despertar",
            act: { A: "Le tocas el hombro.", B: "Le tocas el hombro con suavidad.", C: "Le tocas el hombro con la delicadeza de quien desactiva una bomba." },
            say: { A: "Perdone, señora. ¿Está bien?", B: "Perdone, señora, ¿se encuentra bien? Su celular está sonando.", C: "Disculpe que la despierte, pero su celular lleva un buen rato reclamando su atención." },
            reply: { A: "La mujer abre un ojo. «Mmm… Cinco minutos más, mamá.»", B: "La mujer abre un ojo, sin entender nada. «¿Eh? Cinco minutos más… ¿Qué hora es?»", C: "La mujer abre un ojo. «Cinco minutos», murmura, «y le prometo que me levanto. ¿Qué hora es?»" },
            mood: "sleepy", next: "despertar",
          },
          {
            id: "mirar",
            say: { A: "Mejor no la despierto. Solo miro si está bien.", B: "Mejor no la despierto todavía. Primero miro si respira bien y si está herida.", C: "Antes de despertar a nadie, prefiero comprobar que solo está dormida." },
            reply: { A: "Respira bien. En su ropa hay una tarjeta: «Gloria. Clínica del Puente».", B: "Respira tranquila. Ves una credencial colgada: “Gloria Ruiz. Enfermera. Clínica del Puente”.", C: "Respira con total serenidad. Una credencial cuelga del uniforme: “Gloria Ruiz, enfermera, Clínica del Puente”." },
            mood: "sleepy", next: "reloj",
          },
          {
            id: "dejar",
            say: { A: "Está durmiendo. La dejo tranquila.", B: "Está cansada, nada más. Mejor la dejo dormir.", C: "Quién soy yo para interrumpir un sueño tan profundo. La dejo en paz." },
            reply: { A: "La mujer sigue durmiendo. El celular vibra otra vez.", B: "La mujer sigue durmiendo. El celular vibra una vez más y luego se calla.", C: "La mujer sigue durmiendo plácidamente. El celular, vencido, deja de vibrar." },
            mood: "sleepy", end: "duerme",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz para escribir una nota.", B: "Sacas el lápiz para dejarle una nota: “Su celular está sonando”.", C: "Sacas el lápiz para dejarle una nota discreta, por si no quiere ser despertada." },
            say: { A: "Le escribo: «Su celular está sonando».", B: "Le dejo una nota: “Su celular no para de sonar. Puede ser importante”.", C: "Le dejo una nota: “Su celular insiste. Quizá usted debería insistir en despertarse”." },
            reply: { A: "Al poner la nota, ves su tarjeta: «Gloria. Clínica del Puente».", B: "Al dejar la nota en su bolso, ves la credencial: “Gloria Ruiz. Enfermera. Clínica del Puente”.", C: "Al dejar la nota, lees su credencial: “Gloria Ruiz, enfermera, Clínica del Puente”. Y ves algo más en el celular." },
            mood: "sleepy", next: "reloj",
          },
          libro: {
            act: { A: "Se te cae el libro al suelo. ¡Pum!", B: "Al acercarte, se te cae el libro al suelo con un golpe seco.", C: "Tu libro elige ese preciso momento para caerse al suelo con estruendo." },
            say: { A: "¡Ay! Perdón, perdón.", B: "¡Uy! Perdón, no quería hacer ruido.", C: "Perdón. Mi libro tiene un sentido del humor pésimo." },
            reply: { A: "La mujer se despierta. «¿Qué? ¿Qué pasa? ¿Qué hora es?»", B: "La mujer se despierta de golpe. «¿Qué? ¿Quién? ¿Qué hora es?»", C: "La mujer se incorpora de golpe. «¡Estoy despierta! Totalmente despierta. ¿Qué hora es?»" },
            mood: "surprised", next: "despertar",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Por si es una trampa, sacas el gas pimienta antes de acercarte.", C: "Desconfiado, sacas el gas pimienta antes de tocarle el hombro." },
            say: { A: "Oiga. ¡Oiga! Despierte.", B: "Oiga, despierte. ¿Qué hace aquí?", C: "Oiga, despierte. ¿Se puede saber qué hace aquí?" },
            reply: { A: "La mujer abre los ojos y grita. «¡Ah! ¡No me haga nada!»", B: "La mujer se despierta y ve el gas pimienta. «¡Ay, Dios! ¡No, no! ¡Soy enfermera!»", C: "La mujer abre los ojos y ve el gas apuntándola. «¡Soy enfermera! ¡Solo estaba durmiendo! ¡Eso no es delito!»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Muestras la granada.", B: "Al agacharte, se ve la granada en tu mano.", C: "Te agachas a su lado con la granada en la mano, sin pensarlo demasiado." },
            say: { A: "Señora, despierte, por favor.", B: "Señora, despierte, por favor. ¿Está bien?", C: "Señora, disculpe. ¿Me oye? ¿Se encuentra bien?" },
            reply: { A: "La mujer abre los ojos y ve la granada. «¡¿Qué es eso?!»", B: "La mujer se despierta y se queda helada. «¿Eso es una granada? ¿Estoy soñando?»", C: "La mujer abre los ojos, ve la granada y vuelve a cerrarlos. «Esto es una pesadilla. Seguro que es una pesadilla.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al inclinarte, se te ve la pistola.", C: "Al inclinarte sobre ella, la pistola queda a la altura de su cara." },
            say: { A: "Señora, ¿está bien?", B: "Señora, ¿está bien? ¿Me oye?", C: "Señora, ¿me oye? No se asuste." },
            reply: { A: "La mujer se despierta. «¡No tengo dinero! ¡Solo tengo el celular!»", B: "La mujer se despierta de un salto. «¡No tengo dinero! ¡Llévese el celular!»", C: "La mujer se despierta y abraza el bolso. «Que no me asuste, dice. Llévese el celular, pero no me haga nada.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Se ve tu cuchillo.", B: "Al sacar algo del bolsillo, se ve tu cuchillo.", C: "Buscando el celular en tu bolsillo, sacas el cuchillo primero." },
            say: { A: "Perdone. ¿Está bien?", B: "Perdone, ¿se encuentra bien?", C: "Perdone, no es lo que parece. ¿Se encuentra bien?" },
            reply: { A: "La mujer se despierta y grita. «¡Socorro!»", B: "La mujer abre los ojos, ve el cuchillo y grita. «¡Socorro! ¡Ayuda!»", C: "La mujer abre los ojos y grita con una potencia sorprendente. «¡Socorro! ¡Me quieren robar el sándwich!»" },
            mood: "scared", next: "calmar",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Hola. Perdone. Despierte, por favor.", B: "Perdone, señora. Siento despertarla, pero su celular no para.", C: "Siento muchísimo interrumpir ese sueño, que parece buenísimo, pero su celular insiste." },
            reply: { A: "Gloria se despierta sonriendo. «Soñaba con un recién nacido. Nacen muchos en mi turno.»", B: "Gloria se despierta con una sonrisa. «Estaba soñando con un recién nacido. Trabajo en maternidad, ¿sabe? Esta noche nacen tres.»", C: "Gloria se despierta sonriendo. «Soñaba con los bebés de esta noche. Soy partera. Tres nacimientos programados y… ¿qué hora es?»" },
            mood: "love", next: "reloj",
          },
        },
      },
      despertar: {
        who: "gloria", mood: "sleepy",
        line: {
          A: "La mujer se frota los ojos. «¿Qué hora es? Me llamo Gloria. Soy enfermera.»",
          B: "La mujer se frota los ojos. «Perdone, me quedé dormida. Soy Gloria, enfermera. ¿Qué hora es?»",
          C: "La mujer se frota los ojos con las dos manos. «Gloria, enfermera, doble turno. Si me pregunta algo más, no lo sé. ¿Qué hora es?»",
        },
        options: [
          {
            id: "hora",
            say: { A: "Son las once menos diez.", B: "Son las once menos diez. ¿Tiene que ir a algún sitio?", C: "Las once menos diez. Por su cara, intuyo que eso es una mala noticia." },
            reply: { A: "Gloria se levanta de golpe. «¡¿Qué?! ¡Mi turno es a las once!»", B: "Gloria se levanta de un salto. «¿Las once menos diez? ¡Mi turno empieza a las once!»", C: "Gloria se pone de pie como un resorte. «Pésima. Mi turno empieza a las once. La alarma… ¡no sonó!»" },
            mood: "surprised", next: "prisa",
          },
          {
            id: "salud",
            say: { A: "¿Está bien? ¿Necesita algo?", B: "¿Se encuentra bien? ¿Necesita agua o algo?", C: "¿Seguro que está bien? Dormir en un banco no es lo más habitual." },
            reply: { A: "Gloria sonríe. «Solo estoy cansada. Trabajo mucho.» Mira el celular.", B: "«Solo cansada. Doble turno», dice Gloria, y mira el celular. Algo no le gusta.", C: "«Cansancio, nada más», dice Gloria. «Doble turno. Habitual en mi profesión.» Mira el celular y se le borra la sonrisa." },
            mood: "worried", next: "reloj",
          },
          {
            id: "seguir",
            say: { A: "Perdón. Siga durmiendo.", B: "Perdone que la despertara. Siga durmiendo, no pasa nada.", C: "Nada, nada, olvide que existo. Siga durmiendo." },
            reply: { A: "Gloria cierra los ojos otra vez. «Gracias…»", B: "Gloria sonríe y vuelve a cerrar los ojos. «Qué amable…»", C: "«Usted es un ángel», murmura Gloria, y se vuelve a dormir en el acto." },
            mood: "sleepy", end: "duerme",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted trabaja mucho. Se ve muy cansada.", B: "Se nota que trabaja muchísimo. Pero creo que su celular la necesita.", C: "Se nota que cuida de todo el mundo. Esta vez déjeme cuidarla a usted: mire su celular." },
            reply: { A: "Gloria sonríe y mira el celular. «¡Ay, no! ¡Mi turno! ¡Es a las once!»", B: "Gloria sonríe y mira el celular. «Ay, qué amable… ¡Ay, no! ¡Mi turno empieza en diez minutos!»", C: "Gloria sonríe, enternecida, y mira el celular. «Qué cosa tan bonita… ¡Diez minutos! Mi jefa me va a hacer trabajar en Navidad.»" },
            mood: "love", next: "prisa",
          },
        },
      },
      reloj: {
        who: "gloria", mood: "sleepy",
        line: {
          A: "En el celular de Gloria dice: «Turno 23:00». Ahora son las 22:50.",
          B: "En la pantalla del celular de Gloria aparece una alarma: “TURNO 23:00”. Son las 22:50 y ella sigue con los ojos medio cerrados.",
          C: "La pantalla del celular de Gloria lo deja claro: “TURNO 23:00”, alarma ignorada tres veces. Son las 22:50.",
        },
        options: [
          {
            id: "avisar",
            say: { A: "¡Gloria! ¡Despierte! ¡Su turno es en diez minutos!", B: "¡Gloria, despierte! Su turno empieza en diez minutos.", C: "Gloria, siento ser yo quien se lo diga, pero su turno empieza en diez minutos." },
            reply: { A: "Gloria se levanta de golpe. «¡No! ¡Llego tarde!»", B: "Gloria abre los ojos de golpe. «¿Diez minutos? ¡Ay, no, no, no!»", C: "Gloria se levanta como si el banco quemara. «¿Diez? ¡Mi jefa me va a hacer trabajar la Nochebuena!»" },
            mood: "surprised", next: "prisa",
          },
          {
            id: "clinica",
            say: { A: "Voy a llamar a la clínica.", B: "¿Y si llamo a la clínica para avisar que llega tarde?", C: "Quizá lo más útil sea llamar a la clínica y avisar de que su enfermera está en camino." },
            reply: { A: "Gloria se despierta con el ruido. «¿La clínica? ¿Qué hora es?»", B: "Gloria oye la palabra “clínica” y se despierta de golpe. «¿Qué? ¿Qué hora es?»", C: "La palabra “clínica” funciona mejor que cualquier alarma. Gloria se incorpora. «¿Qué pasa? ¿Qué hora es?»" },
            mood: "surprised", next: "prisa",
          },
          {
            id: "no-molestar",
            say: { A: "Bueno. No es mi problema.", B: "Bueno, seguro que alguien la llama. No es asunto mío.", C: "Supongo que es una adulta y sabe lo que hace. No es asunto mío." },
            reply: { A: "Te vas. Gloria sigue durmiendo.", B: "Te alejas. Gloria sigue durmiendo, ajena a todo.", C: "Te alejas. Gloria sigue durmiendo, y el reloj sigue avanzando." },
            mood: "sleepy", end: "duerme",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Gloria, despierte. Sus pacientes la esperan.", B: "Gloria, despierte, por favor. Seguro que sus pacientes la necesitan.", C: "Gloria, despierte. Hay gente que la está esperando, y apuesto a que la quieren mucho." },
            reply: { A: "Gloria abre los ojos. «Sí… Mis bebés. Trabajo con bebés. ¡Y llego tarde!»", B: "Gloria abre los ojos y sonríe. «Mis bebés… Trabajo en neonatos, ¿sabe? ¡Ay! ¡Llego tarde!»", C: "Gloria sonríe sin abrir los ojos. «Mis bebés. Soy enfermera de neonatos.» Luego los abre de golpe. «¡Llego tarde!»" },
            mood: "love", next: "prisa",
          },
        },
      },
      prisa: {
        who: "gloria", mood: "surprised",
        line: {
          A: "Gloria toma su bolso. «¿Dónde estoy? ¿Dónde está la clínica?»",
          B: "Gloria toma el bolso, desorientada. «¿Por dónde se va a la Clínica del Puente? Me quedé dormida y no sé ni dónde estoy.»",
          C: "Gloria da una vuelta completa sobre sí misma. «Pregunta vergonzosa: ¿hacia dónde queda la Clínica del Puente?»",
        },
        options: [
          {
            id: "indicar",
            say: { A: "Está al otro lado del puente. Si corre, llega.", B: "Cruce el puente y gire a la derecha. Si va rápido, llega a tiempo.", C: "Cruce el puente, a la derecha y todo recto. Corriendo, llega con un minuto de sobra." },
            reply: { A: "Gloria corre. «¡Gracias! ¡Gracias!»", B: "Gloria sale corriendo. «¡Gracias! ¡Me salvó la vida!»", C: "«¡Me salvó el turno!», grita Gloria, ya corriendo. «Y quizá la carrera.»" },
            mood: "smile", end: "corre",
          },
          {
            id: "llamar",
            say: { A: "Tranquila. Primero llame a la clínica.", B: "Tranquila. Llame primero a la clínica y avise de que va para allá.", C: "Respire. Llame primero, avise de que va en camino y luego corra sin culpa." },
            reply: { A: "Gloria llama y habla. Después sonríe. «Está bien. Me esperan. ¡Gracias!»", B: "Gloria llama a la clínica. «Me esperan. Dicen que no pasa nada.» Te sonríe, aliviada.", C: "Gloria llama. «Dice mi jefa que tranquila, que me guardan el café.» Te sonríe con todo el cansancio del mundo." },
            mood: "smile", end: "sonrie",
          },
          {
            id: "cafe",
            say: { A: "¿Quiere un café antes? Hay un bar cerca.", B: "¿No quiere un café antes? Le va a hacer falta.", C: "¿Un café para el camino? Lo digo por el bien de sus pacientes." },
            reply: { A: "Gloria se ríe. «¡No hay tiempo!» Y corre hacia el puente.", B: "Gloria se ríe. «¡No hay tiempo! Allá hay una máquina.» Y sale corriendo.", C: "Gloria se ríe. «En la clínica hay una máquina horrible. Es mi favorita.» Y sale corriendo." },
            mood: "smile", end: "corre",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "La acompaño. Vamos juntas.", B: "La acompaño hasta el puente, ¿de acuerdo? Así no se pierde.", C: "La acompaño hasta la puerta. Usted cuida de todos; alguien tiene que cuidarla a usted." },
            reply: { A: "Gloria te toma del brazo. «Qué amable. Tengo un hijo de tu edad, ¿sabes?»", B: "Gloria te toma del brazo. «Qué amable. Mi hijo tiene tu edad y nunca me acompaña a ningún lado.»", C: "Gloria se emociona. «Nadie me había dicho eso en veinte años de enfermera. Vamos, que hoy llego como una reina.»" },
            mood: "love", end: "sonrie",
          },
        },
      },
      calmar: {
        who: "gloria", mood: "scared",
        line: {
          A: "Gloria está muy asustada. Toma su bolso con las dos manos.",
          B: "Gloria se pega al respaldo del banco, con el bolso delante. Respira muy rápido.",
          C: "Gloria te mira como si fueras parte de la pesadilla de la que acaba de despertarse.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Su celular estaba sonando.", B: "Perdone, lo guardo. Solo quería despertarla: su celular no paraba de sonar.", C: "Perdóneme, de verdad. Lo guardo. Solo intentaba avisarle de que su celular la reclama." },
            reply: { A: "Gloria respira y mira el celular. «¡Ay, no! ¡Mi turno!»", B: "Gloria respira y mira el celular. «Mi alarma… ¡Ay, no! ¡Mi turno empieza ya!»", C: "Gloria mira el celular y el susto cambia de motivo. «¡Mi turno! ¡Empieza en diez minutos!»" },
            mood: "surprised", next: "prisa",
          },
          {
            id: "trabajo",
            say: { A: "¡Su trabajo! ¡Llega tarde a la clínica!", B: "No le voy a hacer nada. Pero mire la hora: llega tarde a la clínica.", C: "Ignore esto un segundo y mire su credencial: si no sale ya, llega tarde a la clínica." },
            reply: { A: "Gloria mira la hora. Corre sin decir nada.", B: "Gloria mira la hora, suelta un grito y sale corriendo sin decir nada más.", C: "Gloria mira el reloj, duda entre dos terrores y elige el de su jefa. Sale corriendo." },
            mood: "scared", end: "susto",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdone el susto. Ya me voy.", C: "Disculpe la intrusión. Me retiro." },
            reply: { A: "Gloria toma sus cosas y se va muy rápido.", B: "Gloria toma sus cosas y se aleja casi corriendo.", C: "Gloria no espera a que te retires: se retira ella, a toda velocidad." },
            mood: "scared", end: "susto",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón. No tenga miedo. Solo quería ayudar.", B: "Perdóneme, de verdad. No quería asustarla; solo quería ayudar.", C: "Perdóneme. Qué manera tan torpe de despertar a alguien. Solo quería ayudar." },
            reply: { A: "Gloria se calma. «Bueno… Ay, ¿qué hora es?»", B: "Gloria se calma poco a poco. «Bueno, bueno. Qué susto. ¿Qué hora es?»", C: "Gloria se lleva la mano al pecho. «Torpe es poco. Pero tiene cara de buena gente. ¿Qué hora es?»" },
            mood: "love", next: "despertar",
          },
        },
      },
      "cuchillo-inicio": {
        who: "gloria", mood: "terror",
        line: {
          A: "La mujer abre los ojos y ve tu cuchillo. Grita y levanta el bolso como escudo. «¡Aléjate! ¡Soy enfermera! ¡Sé lo que hace un cuchillo!»",
          B: "La mujer abre un ojo, luego el otro, y ve el cuchillo. Grita y se cubre con el bolso. «¡Aléjate! ¡Soy enfermera, sé perfectamente lo que hace un cuchillo!»",
          C: "La mujer abre los ojos y lo primero que ve es tu cuchillo. Grita, retrocede sobre el banco y se escuda con el bolso. «¡Ni un paso! Soy enfermera: he cosido lo que hace un cuchillo y no quiero ser el siguiente caso.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas el cuchillo.", B: "Guardas el cuchillo rápido y muestras las manos.", C: "Guardas el cuchillo y le enseñas las manos vacías." },
            say: { A: "Perdone, perdone. Ya lo guardo. Su celular está sonando.", B: "Perdone, ya lo guardo. Solo quería avisarle: su celular no deja de sonar.", C: "Perdóneme, ya está guardado. Me acerqué porque su celular lleva un rato sonando, nada más." },
            reply: { A: "La mujer baja el bolso. Mira el celular. «¡Las 22:50! Mi turno es a las once. Me llamo Gloria. Y no vuelva a sacar eso.»", B: "La mujer baja el bolso y mira el celular. «¡Las 22:50! Entro a las once. Soy Gloria. Y guarde ese cuchillo donde no lo vea.»", C: "La mujer baja el bolso y consulta el celular. «¡Las 22:50! Entro a las once. Gloria. Y ese cuchillo, lejos de mi vista, por favor.»" },
            mood: "worried", next: "cuchillo-turno",
          },
          {
            id: "cocinero",
            say: { A: "Tranquila, soy cocinero. Vengo del trabajo.", B: "Tranquila, señora, soy cocinero y salgo del trabajo. Es de la cocina.", C: "Calma, señora: soy cocinero, salgo del turno y el cuchillo es de la cocina, no de la calle." },
            reply: { A: "La mujer respira. «¿Cocinero? Guárdelo igual. Soy Gloria. Enfermera. ¿Qué hora es?»", B: "La mujer respira hondo. «¿Cocinero? Me da igual, guárdelo. Soy Gloria, enfermera. ¿Qué hora es?»", C: "La mujer recupera el aire. «¿Cocinero? Guárdelo de todos modos. Gloria, enfermera de urgencias. ¿Qué hora es?»" },
            mood: "scared", next: "cuchillo-turno",
          },
          {
            id: "abuela",
            say: { A: "Tranquila, abuela. No pasa nada.", B: "Tranquila, abuela, que no pasa nada.", C: "Tranquila, abuela, que nadie le va a hacer nada." },
            reply: { A: "«¿Abuela?» La mujer te pega con el bolso y corre hacia el puente.", B: "«¿Abuela?» La mujer te da un golpe con el bolso en la cara y sale corriendo hacia el puente.", C: "«¿Abuela?» La mujer te cruza la cara con el bolso y huye hacia el puente a una velocidad notable." },
            mood: "furious", end: "cuchillo-bolso",
          },
        ],
      },
      "cuchillo-turno": {
        who: "gloria", mood: "worried",
        line: {
          A: "Gloria se levanta. «Diez minutos para mi turno. En urgencias veo tres cuchillos cada noche. Hoy, uno antes de entrar.»",
          B: "Gloria se pone de pie y se arregla el uniforme. «Diez minutos para entrar. En urgencias veo tres heridas de cuchillo por noche. Hoy vi el cuchillo antes de empezar.»",
          C: "Gloria se levanta y se alisa el uniforme. «Diez minutos para mi turno. En urgencias atiendo tres heridas de arma blanca por noche; hoy el cuchillo llegó antes que yo.»",
        },
        options: [
          {
            id: "indicar",
            say: { A: "La clínica está al otro lado del puente. Si corre, llega.", B: "La clínica está al otro lado del puente. Si corre, llega a tiempo.", C: "La clínica queda justo al otro lado del puente. Si corre, llega con un minuto de margen." },
            reply: { A: "Gloria toma el bolso. «Gracias. Y si se corta con eso, venga a urgencias. Pregunte por Gloria.»", B: "Gloria agarra el bolso. «Gracias. Y si se corta con ese cuchillo, venga a urgencias y pregunte por Gloria.»", C: "Gloria se cuelga el bolso. «Gracias. Y si algún día se corta con ese cuchillo, venga a urgencias y pregunte por Gloria. Le haré descuento.»" },
            mood: "smile", end: "cuchillo-urgencias",
          },
          {
            id: "heridas",
            say: { A: "¿Tres cuchillos cada noche? ¿Qué hace usted?", B: "¿Tres heridas de cuchillo por noche? ¿Y qué hace usted con ellas?", C: "¿Tres heridas de arma blanca por noche? ¿Qué hace usted exactamente cuando llegan?" },
            reply: { A: "Gloria mira tu bolsillo. «Limpio, coso, calmo. Y escucho la misma historia: “era un amigo”.»", B: "Gloria mira hacia tu bolsillo. «Limpio la herida, la coso, calmo al paciente. Y siempre escucho lo mismo: “era un amigo”.»", C: "Gloria mira tu bolsillo con cara de haberlo visto todo. «Limpio, suturo, tranquilizo. Y escucho siempre la misma frase: “era un amigo, no sé qué pasó”.»" },
            mood: "sad", next: "cuchillo-historia",
          },
          {
            id: "llamar",
            say: { A: "Llame a la clínica. Diga que llega en cinco minutos.", B: "Llame a la clínica y avise que llega en cinco minutos.", C: "Llame a la clínica ahora y avise que llega en cinco minutos; así no la dan por perdida." },
            reply: { A: "Gloria llama. «Soy Gloria. Llego en cinco. No, no estoy herida. Es largo de explicar.»", B: "Gloria llama mientras camina. «Soy Gloria. Llego en cinco minutos. No, no estoy herida, luego les cuento.»", C: "Gloria marca sin dejar de caminar. «Gloria. Llego en cinco. No, no estoy herida, aunque por un momento lo dudé.»" },
            mood: "smile", end: "sonrie",
          },
        ],
      },
      "cuchillo-historia": {
        who: "gloria", mood: "sad",
        line: {
          A: "Gloria mira el agua. «Un chico de veinte años, la semana pasada. Un corte aquí, en el brazo. Lloraba. ¿Sabe qué? Todos lloran.»",
          B: "Gloria mira el canal un segundo. «La semana pasada, un chico de veinte años. Un corte en el brazo, hasta el hueso. Lloraba como un niño. Todos lloran, al final.»",
          C: "Gloria mira el agua, solo un segundo. «La semana pasada, un chico de veinte años con un corte en el brazo hasta el hueso. Lloraba como un niño. Todos lloran, sin excepción.»",
        },
        options: [
          {
            id: "consejo",
            say: { A: "Entiendo. ¿Qué hago con el cuchillo?", B: "Entiendo. ¿Qué me aconseja hacer con el cuchillo?", C: "Lo entiendo. ¿Qué me aconseja, como enfermera, hacer con este cuchillo?" },
            reply: { A: "Gloria sonríe un poco. «En la mochila, no en el bolsillo. Y nunca para discutir.»", B: "Gloria sonríe apenas. «Guárdelo en la mochila, no en el bolsillo. Y nunca lo saque en una discusión.»", C: "Gloria sonríe por primera vez. «En la mochila, no en el bolsillo. Y jamás lo saque en una discusión; ahí empiezan todas mis noches.»" },
            mood: "smile", end: "cuchillo-consejo",
          },
          {
            id: "acompanar",
            say: { A: "La acompaño a la clínica. Sin cuchillo. Lo llevo guardado.", B: "La acompaño hasta la clínica, con el cuchillo bien guardado.", C: "La acompaño hasta la clínica, con el cuchillo en el fondo del bolsillo y las manos a la vista." },
            reply: { A: "Gloria acepta. «Camine a mi lado. Rápido. Y hábleme de otra cosa.»", B: "Gloria acepta. «Camine a mi lado, rápido, y hábleme de cualquier otra cosa.»", C: "Gloria acepta. «A mi lado, rápido, y cuénteme algo que no tenga filo.»" },
            mood: "worried", end: "cuchillo-urgencias",
          },
          {
            id: "hora",
            say: { A: "Gloria, ¡son las 22:55! ¡Su turno!", B: "¡Gloria, son las 22:55! ¡Su turno empieza en cinco minutos!", C: "Gloria, son las 22:55: su turno empieza en cinco minutos y usted sigue hablando de cuchillos." },
            reply: { A: "Gloria mira el celular. «¡Ay, no!» Corre hacia el puente.", B: "Gloria mira el celular y palidece. «¡Ay, no!» Sale corriendo hacia el puente.", C: "Gloria mira el celular y se le va el color. «¡Ay, no!» Echa a correr hacia el puente, bolso en mano." },
            mood: "surprised", end: "corre",
          },
        ],
      },
      "pistola-inicio": {
        who: "gloria", mood: "scared",
        line: {
          A: "La mujer abre los ojos y ve tu pistola. Levanta las manos despacio. «Está bien. Manos arriba. No tengo dinero. Tengo turno.»",
          B: "La mujer abre los ojos, ve la pistola y levanta las manos sin prisa, como si lo hubiera practicado. «Está bien. Manos arriba. No tengo dinero, solo tengo turno a las once.»",
          C: "La mujer abre los ojos, registra la pistola y levanta las manos con una calma inquietante. «De acuerdo. Manos arriba. No llevo dinero; lo único que tengo es un turno a las once.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la pistola.", B: "Guardas la pistola enseguida.", C: "Guardas la pistola de inmediato, avergonzado." },
            say: { A: "Perdone. No es un robo. Baje las manos. Su celular está sonando.", B: "Perdone, no es un robo. Baje las manos, por favor. Solo quería avisarle de que su celular no para de sonar.", C: "Perdóneme, no es un asalto. Baje las manos, se lo ruego. Me acerqué porque su celular lleva diez minutos sonando." },
            reply: { A: "La mujer baja las manos. «¿Y por qué lleva un arma para avisar eso? Soy Gloria. ¿Qué hora es?»", B: "La mujer baja las manos muy despacio. «¿Y hace falta un arma para avisar de un celular? Soy Gloria. ¿Qué hora es?»", C: "La mujer baja las manos, sin dejar de mirarte. «¿Necesita un arma para avisar de un celular? Gloria, enfermera. ¿Qué hora es?»" },
            mood: "worried", next: "pistola-turno",
          },
          {
            id: "no-robo",
            say: { A: "No, no, no es un robo. Perdón. Es que… la llevo siempre.", B: "No, no es un robo, perdone. Es que la llevo siempre, ni me acuerdo.", C: "No, no es un robo, discúlpeme. La llevo siempre encima y ya ni me doy cuenta." },
            reply: { A: "La mujer no baja las manos. «¿Siempre? Qué tranquilidad. Soy Gloria. Enfermera. ¿Qué hora es?»", B: "La mujer sigue con las manos arriba. «¿La lleva siempre? Qué tranquilizador. Gloria, enfermera. ¿Qué hora es?»", C: "La mujer mantiene las manos en alto. «¿Siempre? Qué consuelo. Gloria, enfermera de urgencias. ¿Me dice la hora?»" },
            mood: "worried", next: "pistola-turno",
          },
          {
            id: "juguete",
            say: { A: "Tranquila, señora, es de juguete.", B: "Tranquila, señora, que es de juguete.", C: "Tranquila, señora, es de juguete; nadie va a hacerle nada." },
            reply: { A: "La mujer se levanta, camina y marca el celular. «¿Policía? Un hombre con una pistola “de juguete” en la Costanera.»", B: "La mujer se levanta y, mientras se aleja, marca. «¿Policía? Hay un hombre con una pistola “de juguete” en la Costanera. Sí, eso dijo.»", C: "La mujer se levanta, se aleja a paso firme y marca. «¿Policía? Un hombre con una pistola, supuestamente de juguete, en la Costanera. Sí, yo tampoco le creo.»" },
            mood: "angry", end: "pistola-policia",
          },
        ],
      },
      "pistola-turno": {
        who: "gloria", mood: "worried",
        line: {
          A: "Gloria mira el celular. «Las 22:52. Mi turno es a las once. He visto heridas de bala. Guarde eso bien, por favor.»",
          B: "Gloria consulta el celular. «Las 22:52. Entro a las once. En urgencias he visto lo que hace una bala; guarde eso bien, por favor.»",
          C: "Gloria mira el celular. «Las 22:52. Entro a las once. He visto heridas de bala de cerca, así que guarde eso bien y no lo vuelva a sacar.»",
        },
        options: [
          {
            id: "acompanar",
            say: { A: "La acompaño a la clínica. Camino delante, sin la pistola.", B: "La acompaño hasta la clínica. Camino delante, con la pistola guardada.", C: "La acompaño hasta la clínica, caminando delante y con la pistola donde no se vea." },
            reply: { A: "Gloria asiente. «Delante. Y rápido.»", B: "Gloria asiente. «Delante, y rápido, que no llego.»", C: "Gloria asiente. «Delante, rápido, y sin movimientos raros.»" },
            mood: "worried", end: "pistola-acompana",
          },
          {
            id: "miedo",
            say: { A: "¿Por qué no tiene miedo? Yo tendría miedo.", B: "¿Cómo es que no tiene miedo? Yo estaría temblando.", C: "¿Cómo consigue no tener miedo? Cualquiera estaría temblando." },
            reply: { A: "Gloria se encoge de hombros. «Tengo miedo. Pero en urgencias aprendes a no mostrarlo.»", B: "Gloria se encoge de hombros. «Sí tengo miedo. En urgencias aprendes a no mostrarlo, nada más.»", C: "Gloria se encoge de hombros. «Tengo miedo, claro. En urgencias solo aprendes a esconderlo mientras trabajas.»" },
            mood: "neutral", next: "pistola-calma",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy. Llegue bien.", B: "Perdone, me voy. Que llegue bien a su turno.", C: "Le pido perdón y me voy. Que llegue bien y que la noche sea tranquila." },
            reply: { A: "Gloria toma el bolso y camina rápido. Le tiemblan las manos.", B: "Gloria agarra el bolso y se va deprisa. Ahora sí le tiemblan las manos.", C: "Gloria recoge el bolso y se aleja a paso rápido. Ahora que te vas, le tiemblan las manos." },
            mood: "sad", end: "pistola-sola",
          },
        ],
      },
      "pistola-calma": {
        who: "gloria", mood: "neutral",
        line: {
          A: "Gloria se pone el bolso. «Cuando llega un herido, no puedo temblar. Ahora, ¿me ayuda? ¿Dónde está el puente?»",
          B: "Gloria se cuelga el bolso. «Cuando entra un herido, no puedo temblar; tiemblo después, en casa. ¿Me ayuda? ¿Por dónde queda el puente?»",
          C: "Gloria se cuelga el bolso al hombro. «Cuando entra un herido, no me puedo permitir temblar; eso lo dejo para casa. ¿Me ayuda a llegar? ¿Dónde está el puente?»",
        },
        options: [
          {
            id: "indicar",
            say: { A: "Allí, a la derecha. La clínica está al otro lado. Corra.", B: "Allí, a la derecha. La clínica está justo al otro lado. Si corre, llega.", C: "Allí, a la derecha. La clínica queda justo al otro lado; corriendo, llega." },
            reply: { A: "Gloria corre. Desde el puente grita: «¡Y tire esa pistola al canal!»", B: "Gloria sale corriendo. Desde el puente, grita: «¡Y tire esa pistola al canal!»", C: "Gloria echa a correr. Desde la mitad del puente, grita: «¡Y la pistola, al canal!»" },
            mood: "smile", end: "pistola-acompana",
          },
          {
            id: "policia",
            say: { A: "¿Quiere llamar a la policía por mí? Lo entiendo.", B: "Si quiere llamar a la policía por lo de la pistola, lo entiendo.", C: "Si prefiere llamar a la policía por lo del arma, lo entendería perfectamente." },
            reply: { A: "Gloria lo piensa. «Sí. Lo siento. Es mi deber.» Llama mientras camina.", B: "Gloria lo piensa un segundo. «Sí. Lo siento, pero es mi deber.» Llama mientras camina hacia el puente.", C: "Gloria lo medita un instante. «Sí. Lo lamento, pero es mi obligación.» Marca mientras se aleja hacia el puente." },
            mood: "worried", end: "pistola-policia",
          },
          {
            id: "gracias",
            say: { A: "Gracias por la calma. Me enseñó algo. Buenas noches.", B: "Gracias por la calma, me enseñó algo esta noche. Buenas noches.", C: "Gracias por la calma; me ha enseñado más que cualquier susto. Buenas noches." },
            reply: { A: "Gloria sonríe un poco. «Enseñe usted algo también: guarde eso para siempre.»", B: "Gloria sonríe apenas. «Pues aprenda algo más: esa pistola, guardada para siempre.»", C: "Gloria esboza una sonrisa. «Entonces aprenda la lección completa: esa pistola no vuelve a salir.»" },
            mood: "smile", end: "sonrie",
          },
        ],
      },
      "granada-inicio": {
        who: "gloria", mood: "terror",
        line: {
          A: "La mujer abre los ojos, ve tu granada y grita como en el hospital: «¡Granada! ¡Todos al suelo! ¡Evacuen el paseo!»",
          B: "La mujer abre los ojos, ve la granada y grita con voz de urgencias: «¡Granada! ¡Todos al suelo! ¡Evacuen el paseo, ya!»",
          C: "La mujer abre los ojos, ve la granada y, sin un segundo de duda, grita con voz de jefa de urgencias: «¡Granada! ¡Todos al suelo! ¡Evacuen el paseo, ahora!»",
        },
        options: [
          {
            id: "falsa",
            say: { A: "¡No, no! Es falsa. Es un llavero. Tranquila.", B: "¡No, no, es falsa! Es un llavero, tranquila, no grite.", C: "¡No, no, es de mentira! Es un llavero, nada más; no hace falta evacuar a nadie." },
            reply: { A: "La mujer te mira furiosa. «¿Falsa? Soy enfermera. ¿Sabe cuántas granadas “falsas” llegan a urgencias?»", B: "La mujer te fulmina con la mirada. «¿Falsa? Soy enfermera. ¿Sabe cuántas granadas “falsas” acaban en urgencias?»", C: "La mujer te clava una mirada de furia. «¿Falsa? Soy enfermera. ¿Tiene idea de cuántas granadas “falsas” he visto llegar a urgencias?»" },
            mood: "angry", next: "granada-duda",
          },
          {
            id: "turno",
            say: { A: "Señora, su celular sonaba. Creo que llega tarde al trabajo.", B: "Señora, su celular estaba sonando. Creo que llega tarde al trabajo.", C: "Señora, su celular llevaba un rato sonando; me parece que llega tarde a su turno." },
            reply: { A: "La mujer mira el celular sin dejar de mirar la granada. «¡Las 22:50! Soy Gloria. ¿Y eso qué es?»", B: "La mujer mira el celular sin perder de vista la granada. «¡Las 22:50! Soy Gloria, enfermera. ¿Y eso qué demonios es?»", C: "La mujer consulta el celular sin quitarle el ojo a la granada. «¡Las 22:50! Gloria, enfermera. ¿Y me explica qué es eso?»" },
            mood: "angry", next: "granada-duda",
          },
          {
            id: "suelo",
            say: { A: "¡Sí! ¡Todos al suelo!", B: "¡Sí! ¡Todos al suelo, rápido!", C: "¡Eso! ¡Todos al suelo, ya!" },
            reply: { A: "Todo el paseo se tira al suelo. Alguien llama a la policía. Se oye un helicóptero.", B: "Medio paseo se lanza al suelo. Alguien llama a la policía y, en minutos, se oye un helicóptero.", C: "El paseo entero se tira al suelo. Alguien llama a la policía y, al poco, un helicóptero ilumina el canal." },
            mood: "terror", end: "granada-evacuacion",
          },
        ],
      },
      "granada-duda": {
        who: "gloria", mood: "angry",
        line: {
          A: "Gloria extiende la mano. «Deme eso. Ahora. En la clínica hay un policía. Él decide si es falsa.»",
          B: "Gloria extiende la mano, firme. «Deme eso ahora mismo. En la clínica hay un policía de guardia; que él decida si es falsa.»",
          C: "Gloria tiende la mano con autoridad. «Démela. Ahora. En la clínica hay un policía de guardia; que decida él si es de mentira.»",
        },
        options: [
          {
            id: "dar",
            act: { A: "Le das la granada.", B: "Le entregas la granada.", C: "Le entregas la granada sin discutir." },
            say: { A: "Tome. Perdón. Es suya.", B: "Tome. Perdón por el susto. Es suya.", C: "Tómela. Perdone el susto; se la regalo." },
            reply: { A: "Gloria la guarda en el bolso. «Gracias. Y usted viene conmigo. A explicarlo.»", B: "Gloria la mete en el bolso. «Gracias. Y usted viene conmigo a la clínica, a explicárselo al policía.»", C: "Gloria la guarda en el bolso como si fuera un termómetro. «Gracias. Y usted me acompaña: se lo explica al policía.»" },
            mood: "worried", end: "granada-clinica",
          },
          {
            id: "risa",
            say: { A: "¿Un policía en la clínica? ¿Y qué va a hacer? ¿Darle una aspirina?", B: "¿Un policía en la clínica? ¿Y qué va a hacer, darle una aspirina a la granada?", C: "¿Un policía de guardia en la clínica? ¿Y qué va a hacer, recetarle reposo a la granada?" },
            reply: { A: "Gloria se ríe sin querer. «Idiota.» Mira el celular. «¡Las 22:55!» Corre.", B: "Gloria se ríe a su pesar. «Es usted idiota.» Mira el celular. «¡Las 22:55!» Y sale corriendo.", C: "Gloria se ríe contra su voluntad. «Idiota.» Mira el celular. «¡Las 22:55!» Y echa a correr hacia el puente." },
            mood: "laugh", end: "granada-risa",
          },
          {
            id: "no",
            say: { A: "No. Es mía. Váyase a su turno.", B: "No, es mía. Váyase a su turno y olvídelo.", C: "No, es mía. Váyase a su turno y olvide que la vio." },
            reply: { A: "Gloria retrocede. Marca el celular. «¿Policía? Un hombre con una granada en la Costanera.»", B: "Gloria retrocede sin darte la espalda y marca. «¿Policía? Un hombre con una granada en la Costanera, junto al puente.»", C: "Gloria retrocede sin perderte de vista y marca. «¿Policía? Un hombre con una granada en la Costanera, frente al puente. Sí, de verdad o no, da igual.»" },
            mood: "angry", end: "granada-patrulla",
          },
        ],
      },
      "gas-inicio": {
        who: "gloria", mood: "laugh",
        line: {
          A: "La mujer abre los ojos, ve tu gas pimienta y se ríe. «¿Gas pimienta? Trabajo en urgencias. A mí me rocían cada semana.»",
          B: "La mujer abre los ojos, ve el bote de gas pimienta y se ríe. «¿Gas pimienta? Trabajo en urgencias, muchacho. A mí me rocían casi cada semana.»",
          C: "La mujer abre los ojos, repara en el gas pimienta y suelta una carcajada. «¿Gas pimienta? Trabajo en urgencias; me rocían con más frecuencia de la que le gustaría saber.»",
        },
        options: [
          {
            id: "serio",
            say: { A: "¿En serio? ¿Y qué hace cuando le rocían?", B: "¿En serio? ¿Y qué hace usted cuando le rocían?", C: "¿En serio? ¿Y qué hace una enfermera cuando la rocían con pimienta?" },
            reply: { A: "La mujer se sienta derecha. «Agua, mucha agua. No frotar. Soy Gloria. ¿Qué hora es?»", B: "La mujer se endereza. «Agua, mucha agua, y nada de frotarse. Soy Gloria. ¿Qué hora es?»", C: "La mujer se endereza en el banco. «Agua, mucha agua, y nunca frotarse. Gloria, enfermera. ¿Me dice la hora?»" },
            mood: "smile", next: "gas-consejo",
          },
          {
            id: "noche",
            say: { A: "Lo llevo por la noche. Por si acaso.", B: "Lo llevo por la noche, por si acaso.", C: "Lo llevo de noche, por si acaso; uno nunca sabe." },
            reply: { A: "La mujer se ríe. «Por si acaso. Yo llevo esto.» Muestra un silbato. «Soy Gloria. ¿Qué hora es?»", B: "La mujer se ríe. «Por si acaso. Yo llevo esto», y te enseña un silbato. «Soy Gloria. ¿Qué hora es?»", C: "La mujer se ríe. «Por si acaso. Yo llevo esto», y saca un silbato del bolso. «Gloria, enfermera. ¿Qué hora es?»" },
            mood: "smile", next: "gas-consejo",
          },
          {
            id: "irse",
            say: { A: "Perdón. Siga durmiendo.", B: "Perdone, siga durmiendo.", C: "Perdone la molestia; siga durmiendo." },
            reply: { A: "La mujer cierra los ojos. «Gracias. Y guarde eso.» Se duerme otra vez.", B: "La mujer cierra los ojos. «Gracias. Y guarde eso.» Se vuelve a dormir al instante.", C: "La mujer cierra los ojos. «Gracias. Y guarde ese bote.» Se duerme otra vez en dos segundos." },
            mood: "sleepy", end: "duerme",
          },
        ],
      },
      "gas-consejo": {
        who: "gloria", mood: "smile",
        line: {
          A: "Gloria se ríe. «Consejo gratis: con el gas, el otro llora, pero usted también si hay viento. ¿Y qué hora es?»",
          B: "Gloria se ríe otra vez. «Consejo gratis de enfermera: con el gas, el otro llora, pero con viento llora usted también. Bueno, ¿qué hora es?»",
          C: "Gloria se ríe de nuevo. «Consejo gratuito de enfermera: el gas hace llorar al otro, pero con viento le toca a usted. Y bien, ¿la hora?»",
        },
        options: [
          {
            id: "hora",
            say: { A: "Son las 22:52. ¿Su turno es a las once?", B: "Son las 22:52. ¿Su turno empieza a las once?", C: "Las 22:52. ¿Y su turno no empezaba a las once?" },
            reply: { A: "Gloria salta del banco. «¡Las 22:52! ¡El puente!» Corre y grita: «¡Agua, no frotar!»", B: "Gloria salta del banco. «¡Las 22:52! ¡Mi turno!» Sale corriendo y grita desde lejos: «¡Agua y no frotar!»", C: "Gloria pega un salto. «¡Las 22:52! ¡Mi turno!» Corre hacia el puente y grita, ya lejos: «¡Agua, y nunca frotar!»" },
            mood: "surprised", end: "gas-corre",
          },
          {
            id: "regalo",
            act: { A: "Le das el gas.", B: "Le ofreces el bote.", C: "Le ofreces el bote de gas." },
            say: { A: "Tome, para el camino. Yo tengo el silbato.", B: "Tómelo, para el camino. Yo me quedo con el silbato.", C: "Quédeselo para el camino. Yo me quedo con el silbato, que pesa menos." },
            reply: { A: "Gloria lo guarda. «Trato hecho. Agua, no frotar.» Te da el silbato.", B: "Gloria lo guarda en el bolso. «Trato hecho. Y recuerde: agua, no frotar.» Te da el silbato.", C: "Gloria lo guarda. «Trato hecho. Agua y nada de frotarse, no lo olvide.» Te entrega el silbato con ceremonia." },
            mood: "smile", end: "gas-regalo",
          },
          {
            id: "clinica",
            say: { A: "Casi las once. Llamo a la clínica por usted.", B: "Son casi las once. Si quiere, llamo yo a la clínica.", C: "Casi las once. Si quiere, llamo yo a la clínica y aviso que va en camino." },
            reply: { A: "Gloria te da el celular. «Diga que Gloria llega en cinco. Y que no me rociaron.»", B: "Gloria te pasa el celular. «Diga que Gloria llega en cinco minutos. Y que no me rociaron, por si preguntan.»", C: "Gloria te pasa el celular. «Diga que Gloria llega en cinco. Y aclare que nadie me roció, que en urgencias se preocupan.»" },
            mood: "smile", end: "gas-corre",
          },
        ],
      },
      "lapiz-inicio": {
        who: "gloria", mood: "sleepy",
        line: {
          A: "La mujer abre un ojo y ve tu lápiz. «¿Un lápiz? Perfecto. Escriba: “Gloria, turno a las once, no te duermas”. Me duermo en todos lados.»",
          B: "La mujer abre un ojo y se fija en tu lápiz. «¿Un lápiz? Justo lo que necesito. Escríbame: “Gloria, turno a las once, no te duermas”. Me quedo dormida en cualquier parte.»",
          C: "La mujer abre un ojo y detecta el lápiz. «¿Un lápiz? Providencial. Escríbame: “Gloria, turno a las once, no te duermas”. Tengo el don de dormirme en cualquier sitio.»",
        },
        options: [
          {
            id: "mano",
            act: { A: "Escribes en su mano.", B: "Le escribes la frase en la palma de la mano.", C: "Le escribes la frase en la palma de la mano, con letra grande." },
            say: { A: "Listo. En la mano. ¿Qué hora es su turno?", B: "Listo, en la mano, para que lo vea. ¿A qué hora dijo que era el turno?", C: "Hecho, en la mano, para que no lo pierda. ¿A qué hora era el turno, exactamente?" },
            reply: { A: "Gloria mira su mano. «A las once.» Mira el celular. «¡Son las 22:50!»", B: "Gloria mira su mano y sonríe. «A las once.» Luego mira el celular. «¡Son las 22:50!»", C: "Gloria lee su propia mano. «A las once.» Mira el celular. «¡Las 22:50! ¡Ni siquiera la nota me salvó!»" },
            mood: "surprised", next: "lapiz-mano",
          },
          {
            id: "nota",
            act: { A: "Escribes la nota en un papel.", B: "Escribes la nota en un papel y la pegas en su bolso.", C: "Escribes la nota en un papel y la encajas en la correa del bolso." },
            say: { A: "Listo. Aquí, en el bolso. Y ahora: son las 22:50.", B: "Listo, pegada al bolso. Y otra cosa: son las 22:50.", C: "Listo, la nota va en el bolso. Y ahora, el dato importante: son las 22:50." },
            reply: { A: "Gloria lee la nota. «¡Las 22:50! ¡Diez minutos!» Se levanta.", B: "Gloria lee la nota, luego el celular. «¡Las 22:50! ¡Me quedan diez minutos!» Se levanta de un salto.", C: "Gloria lee la nota y después el celular. «¡Las 22:50! ¡Diez minutos!» Se pone de pie de un salto." },
            mood: "surprised", next: "lapiz-mano",
          },
          {
            id: "mapa",
            act: { A: "Dibujas un mapa.", B: "Dibujas un mapa rápido: el banco, el puente, la clínica.", C: "Dibujas un mapa en un papel: el banco, el puente y la clínica, con una flecha." },
            say: { A: "Mejor le dibujo el camino. Banco, puente, clínica.", B: "Mejor le dibujo el camino: aquí el banco, aquí el puente, aquí la clínica.", C: "Mejor le dibujo el camino: el banco, el puente, la clínica, y una flecha que dice “corra”." },
            reply: { A: "Gloria mira el mapa. «¿Es tan cerca? ¿Y qué hora es?»", B: "Gloria mira el mapa. «¿Tan cerca está? ¿Y qué hora es?»", C: "Gloria estudia el mapa. «¿Tan cerca queda? ¿Y me dice qué hora es?»" },
            mood: "sleepy", next: "lapiz-mapa",
          },
        ],
      },
      "lapiz-mano": {
        who: "gloria", mood: "surprised",
        line: {
          A: "Gloria toma tu lápiz. «Espere. Yo también escribo algo.» Escribe en tu mano: “Receta: dormir ocho horas”. «Firmado, Gloria.»",
          B: "Gloria te quita el lápiz un segundo. «Espere, me toca a mí.» Te escribe en la mano: “Receta: dormir ocho horas”. «Firmado, Gloria, enfermera.»",
          C: "Gloria te pide el lápiz con un gesto. «Un momento, ahora yo.» Te escribe en la palma: “Receta: dormir ocho horas”. «Firmado, Gloria. Es la única receta que puedo dar.»",
        },
        options: [
          {
            id: "correr",
            say: { A: "Gracias por la receta. ¡Ahora corra! El puente está allí.", B: "Gracias por la receta. ¡Y ahora corra! El puente está justo allí.", C: "Gracias por la receta, doctora. ¡Ahora corra! El puente está ahí mismo." },
            reply: { A: "Gloria corre con la mano escrita en alto. «¡No me duermo! ¡Lo dice mi mano!»", B: "Gloria sale corriendo con la mano escrita en alto. «¡No me duermo! ¡Lo dice mi mano!»", C: "Gloria corre hacia el puente con la mano en alto, como un cartel. «¡No me duermo! ¡Está escrito!»" },
            mood: "smile", end: "lapiz-corre",
          },
          {
            id: "firma",
            say: { A: "Fírmeme también el papel. Lo guardo.", B: "Fírmeme también el papel, que lo guardo de recuerdo.", C: "Fírmeme también el papel; una receta así merece guardarse." },
            reply: { A: "Gloria firma. «Gloria Ruiz. Y ahora me voy, que llego tarde.» Sonríe.", B: "Gloria firma con una floritura. «Gloria Ruiz. Y me voy, que ya llego tarde.» Sonríe por primera vez.", C: "Gloria firma con floritura. «Gloria Ruiz, enfermera. Y me voy ya, que llego tarde a cumplir mi propia receta al revés.»" },
            mood: "smile", end: "lapiz-firma",
          },
          {
            id: "llamar",
            say: { A: "Antes, llame a la clínica. Diga que va.", B: "Antes de correr, llame a la clínica y avise que va.", C: "Antes de salir corriendo, llame a la clínica y avise que está en camino." },
            reply: { A: "Gloria llama mientras camina. «Soy Gloria. Llego en cinco. Tengo una nota en la mano, luego les cuento.»", B: "Gloria llama mientras camina rápido. «Soy Gloria. Llego en cinco. Tengo una nota en la mano, ya les contaré.»", C: "Gloria llama sin dejar de caminar. «Gloria. Llego en cinco minutos. Traigo una nota en la mano; después se lo explico.»" },
            mood: "smile", end: "sonrie",
          },
        ],
      },
      "lapiz-mapa": {
        who: "gloria", mood: "surprised",
        line: {
          A: "«Son las 22:51», le dices. Gloria toma el mapa y el lápiz. Escribe debajo: “Gracias”. «¿Me acompaña? Leo mal los mapas.»",
          B: "«Las 22:51», le dices. Gloria agarra el mapa y el lápiz, y escribe debajo: “Gracias, desconocido”. «¿Me acompaña? Soy un desastre con los mapas.»",
          C: "«Las 22:51», le dices. Gloria toma el mapa y el lápiz, y escribe al pie: “Gracias, desconocido con lápiz”. «¿Me acompaña? Los mapas y yo no nos entendemos.»",
        },
        options: [
          {
            id: "acompanar",
            say: { A: "Claro. Vamos. Rápido.", B: "Claro que sí. Vamos, rápido.", C: "Por supuesto. Vamos, y a buen paso." },
            reply: { A: "Gloria camina rápido a tu lado. Mira el mapa cada diez metros.", B: "Gloria camina deprisa a tu lado, mirando el mapa cada diez metros.", C: "Gloria avanza a tu lado a paso rápido, consultando el mapa cada diez metros como si fuera a cambiar." },
            mood: "smile", end: "lapiz-corre",
          },
          {
            id: "flecha",
            say: { A: "No necesita el mapa. Siga la flecha. Corra.", B: "No necesita el mapa, solo la flecha. Corra.", C: "Olvide el mapa: siga la flecha y corra." },
            reply: { A: "Gloria guarda el mapa. «La flecha. Bueno.» Corre hacia el puente.", B: "Gloria se guarda el mapa en el bolsillo. «La flecha. Está bien.» Y corre hacia el puente.", C: "Gloria dobla el mapa y lo guarda. «La flecha, entendido.» Y echa a correr hacia el puente." },
            mood: "smile", end: "corre",
          },
          {
            id: "quedar",
            say: { A: "Quédese con el mapa y el lápiz. Para la próxima vez.", B: "Quédese con el mapa y con el lápiz, para la próxima vez que se duerma.", C: "Quédese con el mapa y con el lápiz; para la próxima siesta en un banco." },
            reply: { A: "Gloria sonríe. «Habrá próxima vez. Gracias.» Se va caminando rápido.", B: "Gloria sonríe. «Seguro que hay próxima vez. Gracias.» Se va a paso rápido.", C: "Gloria sonríe. «Habrá próxima vez, lo garantizo. Gracias.» Se aleja a paso rápido, con el lápiz en el bolsillo." },
            mood: "smile", end: "lapiz-firma",
          },
        ],
      },
      "libro-inicio": {
        who: "gloria", mood: "sleepy",
        line: {
          A: "La mujer abre un ojo y ve tu libro. «¿Un libro? Léame algo. Cinco minutos. Después me levanto. Lo prometo.»",
          B: "La mujer abre un ojo y ve tu libro. «¿Un libro? Léame un poco. Cinco minutos y me levanto, se lo prometo.»",
          C: "La mujer entreabre un ojo y descubre tu libro. «¿Un libro? Léame algo, lo que sea. Cinco minutos y me levanto, palabra de enfermera.»",
        },
        options: [
          {
            id: "leer",
            act: { A: "Abres el libro y lees.", B: "Abres el libro y lees en voz baja.", C: "Abres el libro al azar y lees en voz baja." },
            say: { A: "Bueno. «La noche era tranquila y el canal…»", B: "Está bien. «La noche era tranquila, y el canal reflejaba las luces…»", C: "De acuerdo. «La noche era tranquila; el canal devolvía las luces una a una…»" },
            reply: { A: "La mujer cierra los ojos. «Qué bonito… Soy Gloria… Siga…»", B: "La mujer cierra los ojos y sonríe. «Qué bonito… Me llamo Gloria… Siga, siga…»", C: "La mujer cierra los ojos con una sonrisa. «Qué bonito… Gloria, enfermera… No pare…»" },
            mood: "sleepy", next: "libro-lectura",
          },
          {
            id: "hora",
            say: { A: "No, señora. Son las 22:50. Su celular dice: turno a las once.", B: "No, señora, nada de leer: son las 22:50 y su celular dice “turno a las 23:00”.", C: "Nada de lecturas, señora: son las 22:50 y su celular anuncia “turno 23:00”." },
            reply: { A: "La mujer abre los dos ojos. «¡Las 22:50! Soy Gloria. ¡Y llego tarde!»", B: "La mujer abre los dos ojos de golpe. «¡Las 22:50! Soy Gloria. ¡Y llego tarde!»", C: "La mujer abre ambos ojos de golpe. «¡Las 22:50! Gloria, enfermera. ¡Y voy tarde!»" },
            mood: "surprised", next: "libro-hora",
          },
          {
            id: "regalo",
            act: { A: "Le das el libro.", B: "Le pones el libro en las manos.", C: "Le dejas el libro en las manos." },
            say: { A: "Tome. Para las horas tranquilas del turno. Son las 22:50.", B: "Tómelo. Para las horas tranquilas del turno. Y son las 22:50, por cierto.", C: "Quédeselo para las horas muertas del turno. Y dicho sea de paso: son las 22:50." },
            reply: { A: "La mujer mira el libro y el celular. «¡Las 22:50! Gracias. Soy Gloria.» Corre con el libro.", B: "La mujer mira el libro, luego el celular. «¡Las 22:50! Gracias. Soy Gloria.» Y sale corriendo con el libro.", C: "La mujer mira el libro, después el celular. «¡Las 22:50! Gracias. Gloria.» Y se va corriendo, libro en mano." },
            mood: "surprised", end: "libro-regalo",
          },
        ],
      },
      "libro-lectura": {
        who: "gloria", mood: "sleepy",
        line: {
          A: "Gloria duerme otra vez. Respira despacio. Su celular vibra: «Turno 23:00». Son las 22:53.",
          B: "Gloria se ha vuelto a dormir con tu lectura. Respira despacio. El celular vibra: “Turno 23:00”. Son las 22:53.",
          C: "Gloria se ha dormido del todo con tu lectura. Respira hondo, feliz. El celular vibra: “Turno 23:00”. Son las 22:53.",
        },
        options: [
          {
            id: "despertar",
            act: { A: "Cierras el libro fuerte.", B: "Cierras el libro de golpe.", C: "Cierras el libro de golpe, junto a su oreja." },
            say: { A: "¡Gloria! ¡Son las 22:53! ¡Su turno!", B: "¡Gloria! ¡Son las 22:53! ¡Su turno es en siete minutos!", C: "¡Gloria! ¡Las 22:53! ¡Le quedan siete minutos para el turno!" },
            reply: { A: "Gloria salta. «¡¿Qué?! ¡El libro me durmió!»", B: "Gloria pega un salto. «¡¿Qué?! ¡Su libro me durmió del todo!»", C: "Gloria se incorpora de un salto. «¡¿Qué?! ¡Su maldito libro me durmió!»" },
            mood: "surprised", next: "libro-hora",
          },
          {
            id: "seguir",
            say: { A: "Sigo leyendo. Se ve tan tranquila…", B: "Sigo leyendo un poco más. Se la ve tan tranquila…", C: "Sigo leyendo; se la ve tan en paz que despertarla parece un crimen." },
            reply: { A: "Gloria duerme. El celular vibra. Son las 23:00. Y las 23:10.", B: "Gloria sigue durmiendo. El celular vibra una y otra vez. Son las 23:00. Luego las 23:10.", C: "Gloria duerme profundamente. El celular vibra sin descanso. Dan las 23:00, y luego las 23:10." },
            mood: "sleepy", end: "libro-duerme",
          },
          {
            id: "celular",
            act: { A: "Pones el celular junto a su oreja.", B: "Le acercas el celular, que vibra, a la oreja.", C: "Le colocas el celular vibrando junto a la oreja." },
            say: { A: "Gloria. Su celular. La clínica.", B: "Gloria, su celular. Es la clínica.", C: "Gloria, su celular: la clínica la está buscando." },
            reply: { A: "Gloria abre los ojos. «¿La clínica? ¡Las 22:53!»", B: "Gloria abre los ojos de golpe. «¿La clínica? ¡Las 22:53! ¡Ay!»", C: "Gloria abre los ojos de par en par. «¿La clínica? ¡Las 22:53! ¡Ay, no!»" },
            mood: "surprised", next: "libro-hora",
          },
        ],
      },
      "libro-hora": {
        who: "gloria", mood: "surprised",
        line: {
          A: "Gloria toma el bolso. «¿Dónde está el puente? ¿Y de qué era el libro? Para terminarlo otro día.»",
          B: "Gloria agarra el bolso. «¿Por dónde queda el puente? ¿Y de qué era el libro? Quiero terminarlo otro día.»",
          C: "Gloria recoge el bolso de un manotazo. «¿Por dónde está el puente? Y dígame de qué era el libro; quiero terminarlo un día que no trabaje.»",
        },
        options: [
          {
            id: "indicar",
            say: { A: "Allí. Al otro lado del puente. Corra.", B: "Allí mismo, al otro lado del puente. Corra.", C: "Justo allí, al otro lado del puente. Corra, que llega." },
            reply: { A: "Gloria corre. Grita desde el puente: «¡El título! ¡Dígame el título!»", B: "Gloria sale corriendo y grita desde el puente: «¡El título! ¡Dígame el título!»", C: "Gloria corre hacia el puente y, desde la mitad, grita: «¡El título! ¡No me deje sin el título!»" },
            mood: "smile", end: "libro-corre",
          },
          {
            id: "regalar",
            act: { A: "Le das el libro.", B: "Le das el libro mientras camina.", C: "Le pones el libro en el bolso mientras ya camina." },
            say: { A: "Llévese el libro. Lo termina en el turno.", B: "Llévese el libro y lo termina en el turno.", C: "Llévese el libro: lo termina en alguna hora tranquila del turno." },
            reply: { A: "Gloria lo guarda. «Gracias. Si me duermo en el trabajo, es culpa suya.»", B: "Gloria lo guarda en el bolso. «Gracias. Si me duermo en el trabajo, la culpa es suya.»", C: "Gloria lo guarda sin dejar de caminar. «Gracias. Si me duermo en urgencias, ya sé a quién culpar.»" },
            mood: "smile", end: "libro-regalo",
          },
          {
            id: "cafe",
            say: { A: "Primero un café. Hay un bar al lado del puente.", B: "Primero tómese un café. Hay un bar justo al lado del puente.", C: "Primero un café, se lo ruego. Hay un bar pegado al puente." },
            reply: { A: "Gloria mira el bar. «Un café. Rápido. Y el libro me lo cuenta en dos minutos.»", B: "Gloria mira el bar. «Un café, rápido. Y en dos minutos me cuenta de qué va el libro.»", C: "Gloria mira el bar. «Un café exprés, y en dos minutos me resume el libro.»" },
            mood: "smile", end: "corre",
          },
        ],
      },
      "corazon-inicio": {
        who: "gloria", mood: "love",
        line: {
          A: "El corazón llega a la mujer dormida. Abre los ojos sonriendo. Hay corazones alrededor. «Ay… qué sueño tan bonito. ¿Eres tú? Me siento muy bien.»",
          B: "El corazón alcanza a la mujer dormida. Abre los ojos con una sonrisa, rodeada de corazones. «Ay, qué sueño tan bonito estaba teniendo… ¿Eres tú? Me siento de maravilla.»",
          C: "El corazón envuelve a la mujer dormida. Abre los ojos sonriendo, con corazones flotando sobre el banco. «Qué sueño tan hermoso… ¿Eras tú? Hacía años que no me despertaba así.»",
        },
        options: [
          {
            id: "hora",
            say: { A: "Hola. Son las 22:50. Su celular dice: turno a las once.", B: "Hola. Son las 22:50 y su celular dice “turno a las 23:00”.", C: "Hola. Lamento interrumpir el sueño: son las 22:50 y su celular anuncia turno a las once." },
            reply: { A: "La mujer se ríe. «¡Las 22:50! Soy Gloria. Qué manera tan dulce de llegar tarde.»", B: "La mujer se ríe. «¡Las 22:50! Soy Gloria. Nunca me habían avisado de que llego tarde con tanta dulzura.»", C: "La mujer se ríe. «¡Las 22:50! Gloria. Es la forma más dulce de enterarme de que llego tarde.»" },
            mood: "smitten", next: "corazon-turno",
          },
          {
            id: "sueno",
            say: { A: "¿Qué soñaba?", B: "¿Y qué soñaba, si se puede saber?", C: "¿Y qué soñaba, si no es indiscreción?" },
            reply: { A: "La mujer suspira. «Que nadie llegaba herido a urgencias. Soy Gloria. ¿Y tú?»", B: "La mujer suspira. «Que nadie llegaba herido a urgencias en toda la noche. Soy Gloria. ¿Y tú?»", C: "La mujer suspira. «Que en toda la noche no entraba ni un herido en urgencias. Gloria, enfermera. ¿Y tú, quién eres?»" },
            mood: "love", next: "corazon-sueno",
          },
          {
            id: "dormir",
            say: { A: "Duerma cinco minutos más. Yo vigilo.", B: "Duerma cinco minutos más, yo vigilo.", C: "Duerma cinco minutos más; yo me quedo de guardia." },
            reply: { A: "La mujer cierra los ojos sonriendo. «Gracias… Gloria… cinco minutos…» Los corazones se quedan.", B: "La mujer cierra los ojos con la sonrisa puesta. «Gracias… me llamo Gloria… cinco minutos…» Los corazones siguen ahí.", C: "La mujer cierra los ojos sin perder la sonrisa. «Gracias… Gloria… solo cinco minutos…» Los corazones no se van." },
            mood: "love", end: "corazon-duerme",
          },
        ],
      },
      "corazon-turno": {
        who: "gloria", mood: "smitten",
        line: {
          A: "Gloria se levanta con una sonrisa enorme. «Diez minutos. Y no tengo miedo. ¿Me acompañas al puente?»",
          B: "Gloria se levanta con una sonrisa enorme, todavía rodeada de corazones. «Diez minutos y no tengo ni pizca de miedo. ¿Me acompañas al puente?»",
          C: "Gloria se levanta con una sonrisa que no le cabe en la cara. «Diez minutos y, por primera vez, llegar tarde no me asusta. ¿Me acompañas hasta el puente?»",
        },
        options: [
          {
            id: "abrazo",
            say: { A: "Claro. Pero primero, un abrazo rápido.", B: "Claro que sí. Pero primero, un abrazo rápido.", C: "Por supuesto. Pero antes, un abrazo rápido; lo tiene merecido." },
            reply: { A: "Gloria te abraza fuerte. «Gracias. Hoy el turno va a ser bueno.» Corre.", B: "Gloria te abraza con fuerza. «Gracias. Hoy el turno va a ser bueno, lo sé.» Y sale corriendo.", C: "Gloria te abraza con fuerza. «Gracias. Hoy el turno será bueno, lo presiento.» Y corre hacia el puente." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "cafe",
            say: { A: "La acompaño. Y mañana, un café. ¿Sí?", B: "La acompaño. Y mañana nos tomamos un café, ¿sí?", C: "La acompaño. Y mañana, cuando salga del turno, un café. ¿Trato hecho?" },
            reply: { A: "Gloria sonríe. «Mañana a las ocho. Aquí. Yo invito.»", B: "Gloria sonríe. «Mañana a las ocho, aquí mismo. Invito yo.»", C: "Gloria sonríe. «Mañana a las ocho, en este banco. Invito yo, que es lo mínimo.»" },
            mood: "love", end: "corazon-cafe",
          },
          {
            id: "correr",
            say: { A: "Mejor corra. El puente está allí. Yo la miro.", B: "Mejor corra, el puente está allí. Yo la miro desde aquí.", C: "Mejor corra: el puente está ahí mismo. Yo me quedo mirando cómo llega." },
            reply: { A: "Gloria corre. Desde el puente manda un beso con la mano.", B: "Gloria sale corriendo. Desde el puente, te manda un beso con la mano.", C: "Gloria corre hacia el puente y, desde la mitad, te lanza un beso con la mano." },
            mood: "love", end: "corazon-cafe",
          },
        ],
      },
      "corazon-sueno": {
        who: "gloria", mood: "love",
        line: {
          A: "Gloria mira los corazones. «Trabajo de noche desde hace diez años. Nadie me despierta así. ¿Qué hora es?»",
          B: "Gloria mira los corazones que flotan. «Llevo diez años trabajando de noche y nunca nadie me despertó así. ¿Qué hora es?»",
          C: "Gloria observa los corazones. «Diez años de turnos de noche y nadie me había despertado así jamás. ¿Qué hora es, por cierto?»",
        },
        options: [
          {
            id: "hora",
            say: { A: "Las 22:52. Su turno es a las once.", B: "Las 22:52. Y su turno es a las once.", C: "Las 22:52. Y su turno, según el celular, empieza a las once." },
            reply: { A: "Gloria se levanta. «¡Ay! Bueno. Hoy no me importa.» Te abraza.", B: "Gloria se levanta de un salto. «¡Ay! Bueno, hoy ni eso me importa.» Y te abraza.", C: "Gloria se pone de pie. «¡Ay! Bueno, por una vez no me importa.» Y te abraza." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "manana",
            say: { A: "Mañana la despierto otra vez. Con café.", B: "Mañana la despierto otra vez, pero con café.", C: "Mañana la despierto de nuevo, esta vez con café en la mano." },
            reply: { A: "Gloria se ríe. «A las ocho. Aquí. Trato hecho.»", B: "Gloria se ríe. «A las ocho, aquí mismo. Trato hecho.»", C: "Gloria se ríe. «A las ocho, en este banco. Trato hecho, y no se duerma.»" },
            mood: "love", end: "corazon-cafe",
          },
          {
            id: "dormir",
            say: { A: "Duerma un poco más. Yo cuido el bolso.", B: "Duerma un poquito más, yo le cuido el bolso.", C: "Duerma un rato más; yo vigilo el bolso y los corazones." },
            reply: { A: "Gloria cierra los ojos. «Dos minutos…» Los corazones se quedan.", B: "Gloria cierra los ojos. «Dos minutos, nada más…» Los corazones se quedan con ella.", C: "Gloria cierra los ojos. «Dos minutos, lo juro…» Los corazones se quedan velando." },
            mood: "love", end: "corazon-duerme",
          },
        ],
      },
    },
    ends: {
      corre: { text: { A: "Gloria corre por el puente. Llega a la clínica a tiempo.", B: "Gloria cruza el puente corriendo. A lo lejos, ves que entra en la clínica justo a tiempo.", C: "Gloria cruza el puente a una velocidad admirable. A las once en punto, la puerta de la clínica se cierra tras ella." }, change: "corre", recap: "Despertaste a Gloria y llegó a tiempo a su turno." },
      sonrie: { text: { A: "Gloria te da las gracias. Camina tranquila hacia la clínica.", B: "Gloria te da las gracias con una gran sonrisa y se va caminando, tranquila, hacia la clínica.", C: "Gloria te sonríe como se sonríe a un aliado. Se va hacia la clínica sin prisa: la crisis está resuelta." }, change: "sonrie", recap: "Ayudaste a Gloria a no perder su turno." },
      duerme: { text: { A: "Gloria sigue durmiendo. El celular vibra otra vez.", B: "Gloria sigue durmiendo en el banco. Su celular vibra de nuevo, sin resultado.", C: "Gloria sigue durmiendo, ajena al mundo. En algún lugar, una jefa de enfermeras mira el reloj." }, change: "duerme", recap: "Dejaste dormir a Gloria en el banco." },
      susto: { text: { A: "Gloria se va corriendo, asustada. Va hacia la clínica.", B: "Gloria se va corriendo, asustada. Por suerte, corre en dirección a la clínica.", C: "Gloria huye despavorida. Por pura casualidad, huye exactamente hacia su trabajo." }, change: "corre", recap: "Asustaste a Gloria al despertarla." },
      "cuchillo-bolso": { text: { A: "Te duele la cara. Gloria corre por el puente con el bolso. Llega a la clínica, y no por el turno.", B: "Te arde la cara. Gloria cruza el puente corriendo con el bolso en alto. Llega a la clínica, aunque no por el turno.", C: "Te arde la mejilla. Gloria cruza el puente a la carrera, bolso en alto. Llega a la clínica, pero no precisamente por el turno." }, change: "huye", recap: "Gloria te golpeó con el bolso por el cuchillo y huyó." },
      "cuchillo-urgencias": { text: { A: "Gloria llega a la clínica a tiempo. Antes de entrar grita: «¡Si se corta, pregunte por Gloria!»", B: "Gloria llega a la clínica justo a tiempo. Antes de entrar, grita: «¡Si se corta con eso, pregunte por Gloria!»", C: "Gloria llega a la clínica con un minuto de margen. Antes de entrar, grita: «¡Si se corta con ese cuchillo, pregunte por Gloria!»" }, change: "corre", recap: "Gloria llegó a su turno y te invitó a urgencias si te cortas." },
      "cuchillo-consejo": { text: { A: "Guardas el cuchillo en la mochila. Gloria se va a la clínica. «Nunca para discutir», repite.", B: "Guardas el cuchillo en la mochila, como te dijo. Gloria se va hacia la clínica repitiendo: «Nunca para discutir».", C: "Guardas el cuchillo en el fondo de la mochila, como te indicó. Gloria se aleja hacia la clínica repitiendo: «Jamás en una discusión»." }, change: "se-va", recap: "Gloria te dio un consejo de enfermera sobre el cuchillo." },
      "pistola-policia": { text: { A: "Una patrulla llega. Gloria ya cruzó el puente. Tú explicas la pistola con las manos arriba.", B: "Una patrulla llega en tres minutos. Gloria ya está al otro lado del puente. Tú explicas lo de la pistola con las manos arriba.", C: "Una patrulla aparece en tres minutos. Gloria ya cruzó el puente hacia su turno. Tú explicas lo de la pistola con las manos en alto." }, change: "manos-arriba", recap: "Gloria llamó a la policía por tu pistola." },
      "pistola-acompana": { text: { A: "Gloria llega a la clínica. En la puerta dice: «Gracias. Y esa pistola, al canal.»", B: "Gloria llega a la clínica a tiempo. En la puerta, se gira: «Gracias. Y esa pistola, al canal.»", C: "Gloria llega a la clínica a tiempo. En la puerta se da vuelta: «Gracias. Y la pistola, al canal; es una orden médica.»" }, change: "se-va", recap: "Acompañaste a Gloria a la clínica con la pistola guardada." },
      "pistola-sola": { text: { A: "Gloria camina sola hacia la clínica. Le tiemblan las manos. Llega, pero asustada.", B: "Gloria camina sola hacia la clínica, con las manos temblando. Llega al turno, pero asustada.", C: "Gloria se aleja sola hacia la clínica, con las manos temblorosas. Llega a su turno, pero con el susto puesto." }, change: "corre", recap: "Dejaste a Gloria asustada por tu pistola." },
      "granada-evacuacion": { text: { A: "La Costanera está vacía. Un helicóptero vuela sobre el canal. Gloria dirige todo. Tú y tu granada son el centro.", B: "La Costanera queda vacía en minutos. Un helicóptero sobrevuela el canal. Gloria dirige la evacuación como en urgencias. Tú y tu granada, en el centro de todo.", C: "La Costanera se vacía en minutos. Un helicóptero ronda el canal. Gloria coordina la evacuación con voz de urgencias. Tú y tu granada son el centro del operativo." }, change: "helicoptero", recap: "Gloria evacuó la Costanera por tu granada." },
      "granada-clinica": { text: { A: "Vas con Gloria a la clínica. El policía mira la granada. Es falsa. Nadie se ríe.", B: "Acompañas a Gloria hasta la clínica. El policía de guardia examina la granada: es de mentira. Nadie se ríe.", C: "Acompañas a Gloria hasta la clínica. El policía de guardia examina la granada y confirma que es de utilería. Nadie se ríe, salvo Gloria, por dentro." }, change: "policia", recap: "Gloria se llevó tu granada a la clínica." },
      "granada-risa": { text: { A: "Gloria corre por el puente, riéndose. «¡Una aspirina!» Llega a tiempo.", B: "Gloria cruza el puente corriendo y riéndose. «¡Una aspirina para la granada!» Llega a tiempo.", C: "Gloria cruza el puente a la carrera, riéndose sola. «¡Reposo para la granada!» Llega a tiempo." }, change: "corre", recap: "Gloria se rió de tu granada y corrió a su turno." },
      "granada-patrulla": { text: { A: "Gloria llama y se va. Una patrulla llega. Tienes que explicar el llavero.", B: "Gloria llama y se va a su turno. Una patrulla llega en minutos y tienes que explicar el llavero.", C: "Gloria llama y se va a su turno. Una patrulla llega en minutos; te toca explicar el llavero con detalle." }, change: "policia", recap: "Gloria llamó a la policía por tu granada." },
      "gas-corre": { text: { A: "Gloria corre por el puente. Grita: «¡Agua, no frotar!» Llega a tiempo.", B: "Gloria cruza el puente corriendo y grita: «¡Agua, y no frotar!» Llega a su turno a tiempo.", C: "Gloria cruza el puente a la carrera y grita, ya lejos: «¡Agua, y nunca frotar!» Llega a su turno justo a tiempo." }, change: "corre", recap: "Gloria te dio un consejo sobre el gas y corrió a su turno." },
      "gas-regalo": { text: { A: "Gloria se va con tu gas. Tú con su silbato. Los dos se ríen.", B: "Gloria se va a la clínica con tu gas pimienta. Tú te quedas con su silbato. Los dos se ríen.", C: "Gloria se va a su turno con tu gas pimienta; tú te quedas con su silbato. Un intercambio justo, y los dos se ríen." }, change: "se-va", recap: "Cambiaste tu gas pimienta por el silbato de Gloria." },
      "lapiz-corre": { text: { A: "Gloria llega a la clínica con la mano escrita. La muestra a todos. Se ríen.", B: "Gloria llega a la clínica con la mano escrita en alto. Se la enseña a todos; se ríen.", C: "Gloria entra en la clínica con la mano escrita en alto, como un cartel. Se la enseña a todos y se ríen." }, change: "corre", recap: "Gloria llegó con tu nota escrita en la mano." },
      "lapiz-firma": { text: { A: "Tienes una receta firmada por Gloria: dormir ocho horas. Ella se va a la clínica.", B: "Tienes una receta a lápiz firmada por Gloria: dormir ocho horas. Ella se va a su turno.", C: "Tienes una receta a lápiz firmada por Gloria Ruiz: dormir ocho horas. Ella se va a su turno a cumplir lo contrario." }, change: "se-va", recap: "Gloria te firmó una receta con tu lápiz." },
      "libro-regalo": { text: { A: "Gloria corre con tu libro. Lo lee en el turno, en las horas tranquilas.", B: "Gloria corre hacia la clínica con tu libro. Lo leerá en las horas tranquilas del turno.", C: "Gloria corre hacia la clínica con tu libro bajo el brazo. Lo leerá en las horas muertas del turno, si las hay." }, change: "se-va", recap: "Gloria se llevó tu libro al turno." },
      "libro-duerme": { text: { A: "Gloria duerme. Son las 23:10. El celular vibra. Tu libro la durmió.", B: "Gloria sigue durmiendo. Son las 23:10 y el celular no para. Tu libro fue un somnífero.", C: "Gloria sigue dormida. Son las 23:10 y el celular vibra sin descanso. Tu lectura resultó un somnífero perfecto." }, change: "duerme", recap: "Tu libro durmió a Gloria y perdió el turno." },
      "libro-corre": { text: { A: "Gloria corre por el puente. Le gritas el título del libro. Ella sonríe.", B: "Gloria cruza el puente corriendo. Le gritas el título del libro y ella levanta el pulgar.", C: "Gloria cruza el puente a la carrera. Le gritas el título del libro y ella responde con el pulgar en alto." }, change: "corre", recap: "Gloria llegó a tiempo y se llevó el título de tu libro." },
      "corazon-duerme": { text: { A: "Gloria duerme con una sonrisa. Hay corazones. Tú vigilas. El turno puede esperar.", B: "Gloria duerme sonriendo, rodeada de corazones. Tú vigilas. El turno, por una vez, puede esperar.", C: "Gloria duerme con una sonrisa, entre corazones. Tú montas guardia. El turno, por una vez, puede esperar." }, change: "duerme", recap: "Dejaste a Gloria dormir entre corazones." },
      "corazon-abrazo": { text: { A: "Gloria te abraza y corre a la clínica. Llega con corazones alrededor.", B: "Gloria te abraza y sale corriendo hacia la clínica. Llega con los corazones todavía alrededor.", C: "Gloria te abraza y corre hacia la clínica. Entra al turno con los corazones todavía flotando a su alrededor." }, change: "abraza", recap: "Gloria te abrazó y se fue feliz a su turno." },
      "corazon-cafe": { text: { A: "Gloria se va a la clínica. Mañana a las ocho, café en el banco.", B: "Gloria se va a la clínica, sonriendo. Mañana a las ocho, café en este banco.", C: "Gloria se aleja hacia la clínica, sonriendo. Mañana a las ocho, café en este mismo banco." }, change: "sonrie", recap: "Gloria te citó a un café mañana." },
    },
    speak: {
      A1: "¿Cuántas horas duermes normalmente?",
      A2: "¿Cuándo llegaste tarde por última vez y por qué?",
      B1: "¿Qué haces para no quedarte dormido cuando estás muy cansado?",
      B2: "¿Qué trabajo nocturno te parecería más duro y por qué?",
      C1: "¿En qué situaciones crees que despertar a un desconocido es un deber y en cuáles una intromisión?",
      C2: "¿Qué dice de una sociedad el modo en que trata a quienes trabajan mientras los demás duermen?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces si alguien te asusta?", B: "¿Alguna vez te despertaste con un susto?", C: "¿Cómo crees que cambia a una persona ver heridas cada noche?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces si ves una pistola?", B: "¿Cómo mantienes la calma en una situación peligrosa?", C: "¿Qué profesiones crees que enseñan a no perder el control ante el peligro?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué haces en una emergencia?", B: "¿Alguna vez participaste en una evacuación o un simulacro?", C: "¿Por qué crees que algunas personas se vuelven más eficientes en pleno caos?" } },
      gas: { start: "gas-inicio", fx: "risa", speak: { A: "¿Qué haces cuando te duelen los ojos?", B: "¿Qué consejo de salud repites siempre a tus amigos?", C: "¿Qué riesgos crees que aceptan las personas que trabajan de noche en urgencias?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes notas para no olvidar cosas?", B: "¿Cómo te organizas cuando tienes muchas cosas que recordar?", C: "¿Qué recuerdas mejor, lo que escribes a mano o lo que guardas en el celular?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Lees antes de dormir?", B: "¿Qué libro te ayuda a dormir y cuál te quita el sueño?", C: "¿Qué papel tiene la lectura en tus rutinas de descanso?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Qué sueñas normalmente?", B: "¿Cómo te gusta que te despierten?", C: "¿Qué pequeñas ternuras hacen más soportable un trabajo agotador?" } },
    },
  },

  // ───────────────────────────── 4. Toto bajo el banco
  {
    id: "costa-toto",
    kind: "escena",
    district: "costa",
    title: "Un perro bajo el banco",
    verb: "AYUDAR",
    requires: "toto-buscado",
    goal: "Calmar a un animal, describir un lugar por teléfono, dar indicaciones y tranquilizar a su dueña.",
    cast: [
      {
        id: "toto", name: "Toto", role: "Perro perdido de Camila", kind: "animal", species: "dog", color: "#7a5230", size: "small",
        age: "adult", body: "m", build: "slim", height: 0.35, hair: "short", hairColor: "#7a5230", skin: "#7a5230",
        top: "tshirt", topColor: "#c0282d", bottom: "pants", bottomColor: "#7a5230", pose: "lie", props: ["bench"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "toto", mood: "scared",
        line: {
          A: "Debajo de un banco hay un perro pequeño, marrón, con collar rojo. Tiembla. «Grrr…»",
          B: "Debajo de un banco, junto al río, hay un perrito marrón con un collar rojo. Tiembla y gruñe bajito. ¡Es Toto, el perro de Camila!",
          C: "Bajo un banco, pegado al muro, un perrito marrón con collar rojo tiembla como una hoja. Gruñe sin convicción. Es Toto, sin duda.",
        },
        options: [
          {
            id: "llamar",
            say: { A: "¡Toto! ¡Ven, Toto!", B: "¡Toto! Ven aquí, Toto. Ven, pequeño.", C: "¡Toto! Ven, campeón, que tu dueña está desesperada." },
            reply: { A: "Toto levanta las orejas. Pero no sale. «¿Guau?»", B: "Toto levanta las orejas al oír su nombre, pero no se mueve. «¿Guau?»", C: "Toto levanta una oreja, analiza la situación y decide que todavía no se fía. «¿Guau?»" },
            mood: "worried", next: "confianza",
          },
          {
            id: "agacharse",
            act: { A: "Te agachas despacio.", B: "Te agachas despacio y le muestras la mano.", C: "Te sientas en el suelo, despacio, para parecer más pequeño." },
            say: { A: "Hola, pequeño. Tranquilo. No pasa nada.", B: "Hola, pequeño. Tranquilo, no te voy a hacer nada.", C: "Hola, amigo. Tranquilo, que yo también me asusto con este viento." },
            reply: { A: "Toto deja de gruñir. Mira tu mano.", B: "Toto deja de gruñir y estira el cuello para olerte la mano.", C: "Toto deja de gruñir. Te observa un rato largo, con mucha dignidad, y estira el hocico." },
            mood: "worried", next: "confianza",
          },
          {
            id: "camila",
            say: { A: "Voy a llamar a Camila. Ella sabe qué hacer.", B: "Mejor llamo a Camila primero. Ella sabrá cómo calmarlo.", C: "Antes de hacer algo torpe, mejor llamo a la experta: Camila." },
            reply: { A: "Marcas el número. Toto te mira desde el banco.", B: "Marcas el número de Camila. Toto te mira desde debajo del banco, sin moverse.", C: "Marcas el número. Toto te mira con la desconfianza de quien sabe que lo están delatando." },
            mood: "worried", next: "telefono",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz. Miras la placa del collar.", B: "Sacas el lápiz y te acercas a leer la placa del collar.", C: "Sacas el lápiz para apuntar el número de la placa, por si acaso." },
            say: { A: "A ver… Escribo el número de la placa.", B: "A ver, déjame ver tu placa, Toto. Apunto el número.", C: "Con permiso, Toto. Solo voy a copiar tus datos personales." },
            reply: { A: "Toto te deja mirar. En la placa dice: «Toto. Camila» y un número.", B: "Toto se deja. En la placa dice “Toto” y un número de teléfono. Lo apuntas.", C: "Toto se deja leer la placa con resignación. Apuntas el número; ahora puedes llamar a Camila." },
            mood: "worried", next: "telefono",
          },
          libro: {
            act: { A: "Abres tu libro y lees en voz baja.", B: "Te sientas y lees tu libro en voz baja, con calma.", C: "Te sientas en el suelo y lees en voz baja, como si nada." },
            say: { A: "Voy a leer un poco. Escucha, Toto.", B: "Te leo un poco, Toto. Escucha, que es una historia bonita.", C: "Toto, te leo un capítulo. Es sobre un perro valiente. No, mentira, pero escucha." },
            reply: { A: "Toto escucha. Poco a poco, sale un poco.", B: "Toto escucha tu voz. Poco a poco, asoma la cabeza.", C: "Toto escucha con atención crítica. Al segundo párrafo, asoma el hocico para opinar." },
            mood: "smile", next: "confianza",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Por si muerde, sacas el gas pimienta.", C: "Por si el perro muerde, sacas el gas pimienta." },
            say: { A: "Tranquilo, perro. Quieto.", B: "Quieto, perro. No me muerdas, ¿eh?", C: "Quieto. Vamos a llevarnos bien, ¿de acuerdo?" },
            reply: { A: "Toto huele el gas y se esconde más. «¡Grrr!»", B: "Toto huele el gas, estornuda y se esconde todavía más al fondo. «¡Grrr!»", C: "Toto estornuda, ofendido, y se retira al fondo del banco. Ahora sí gruñe con convicción." },
            mood: "scared", next: "susto",
          },
          granada: {
            act: { A: "Se te cae la granada. Rueda.", B: "Se te cae la granada y rueda hacia el banco.", C: "La granada se te escapa del bolsillo y rueda directamente hacia Toto." },
            say: { A: "¡No, no! ¡Eso no!", B: "¡No, Toto, eso no es una pelota!", C: "¡Toto, no! ¡Eso no es una pelota, por mucho que lo parezca!" },
            reply: { A: "Toto sale y quiere jugar. Tomas la granada rápido.", B: "Toto sale disparado: cree que es una pelota. Tomas la granada antes que él. Toto mueve la cola.", C: "Toto sale del escondite convencido de que es una pelota. La recuperas antes. Toto mueve la cola, ofendido pero curioso." },
            mood: "surprised", next: "confianza",
          },
          pistola: {
            act: { A: "Sacas la pistola.", B: "Por si acaso, sacas la pistola.", C: "Sin mucho sentido, sacas la pistola." },
            say: { A: "Tranquilo, perro. Ven.", B: "Tranquilo, perro. Ven aquí despacio.", C: "Tranquilo, perro. Todo bajo control." },
            reply: { A: "Un pescador grita: «¡Eh! ¡Deja al perro!» Toto ladra mucho.", B: "Un pescador te grita desde lejos: «¡Eh, tú! ¡Deja al perro!» Toto ladra y se esconde más.", C: "«¡Eh! ¿Qué hace con eso?», grita un pescador desde lejos. Toto ladra y se atrinchera bajo el banco." },
            mood: "scared", next: "susto",
          },
          cuchillo: {
            act: { A: "Ves la correa atrapada. Sacas el cuchillo.", B: "La correa de Toto está enredada en el banco. Sacas el cuchillo.", C: "Ves por qué Toto no sale: la correa está enredada en la pata del banco. Sacas el cuchillo." },
            say: { A: "Tranquilo. Corto la correa. Ya está.", B: "Quieto, Toto. Te corto la correa y ya puedes salir.", C: "Un segundo, Toto. Un corte y vuelves a ser un perro libre." },
            reply: { A: "Toto tiembla, pero ya está libre. Te mira.", B: "Toto tiembla mientras cortas, pero se queda quieto. Ya está libre. Te mira, sorprendido.", C: "Toto aguanta el corte con valentía. Ya libre, te mira como quien no sabe si darte las gracias." },
            mood: "worried", next: "confianza",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Ven, Toto. Te quiero mucho. Eres un perro muy bueno.", B: "Ven, Toto. Eres un perro muy bueno y muy valiente. Te llevo con Camila.", C: "Toto, eres el perro más valiente de la Costanera. Camila te está esperando." },
            reply: { A: "Toto sale. Te lame la mano y mueve la cola. «¡Guau!»", B: "Toto sale del banco moviendo la cola y te llena la mano de lametones. «¡Guau, guau!»", C: "Toto sale disparado y se tumba patas arriba a tus pies, pidiendo caricias. Valiente, lo que se dice valiente…" },
            mood: "love", next: "telefono",
          },
        },
      },
      confianza: {
        who: "toto", mood: "worried",
        line: {
          A: "Toto huele tu mano. Mueve la cola un poco.",
          B: "Toto huele tu mano con cuidado. Mueve la cola, pero todavía tiembla.",
          C: "Toto te huele la mano con minuciosidad de inspector. La cola empieza a moverse, aunque él todavía no lo ha decidido.",
        },
        options: [
          {
            id: "acariciar",
            act: { A: "Acaricias a Toto.", B: "Le acaricias la cabeza despacio.", C: "Le acaricias detrás de las orejas, despacio." },
            say: { A: "Muy bien, Toto. Eres un perro muy bueno.", B: "Muy bien, Toto. Ya está. Ahora llamamos a Camila.", C: "Muy bien, Toto. Ya pasó lo peor. Ahora, a casa." },
            reply: { A: "Toto sale y se sienta a tu lado. «Guau.»", B: "Toto sale del banco y se sienta pegado a tu pierna. «Guau.»", C: "Toto sale y se apoya en tu pierna con un suspiro dramático. «Guau.»" },
            mood: "smile", next: "telefono",
          },
          {
            id: "paciencia",
            say: { A: "No hay prisa. Espero aquí contigo.", B: "No hay prisa, Toto. Me quedo aquí hasta que quieras salir.", C: "Tómate tu tiempo. Yo me quedo aquí, mirando el agua, sin presionarte." },
            reply: { A: "Toto sale despacio. Pone la cabeza en tu pie.", B: "Después de un rato, Toto sale solo y apoya la cabeza en tu zapato.", C: "Al cabo de un minuto, Toto sale por iniciativa propia y se instala sobre tu zapato." },
            mood: "smile", next: "telefono",
          },
          {
            id: "agarrar",
            act: { A: "Tomas el collar rápido.", B: "Intentas agarrar el collar rápido.", C: "Intentas agarrarlo del collar de un golpe." },
            say: { A: "¡Ya te tengo!", B: "¡Ya está! ¡Te tengo!", C: "¡Ajá! ¡Te tengo!" },
            reply: { A: "Toto se asusta y corre. Se va por el canal.", B: "Toto se asusta, se escapa de tu mano y sale corriendo por la orilla.", C: "Toto, ofendido por la emboscada, se escapa y desaparece corriendo por la orilla." },
            mood: "scared", end: "escapa",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Toto, eres muy guapo. Vamos con Camila.", B: "Toto, eres guapísimo. Vamos a buscar a Camila, ¿quieres?", C: "Toto, eres un galán. Vamos a darle una alegría a Camila." },
            reply: { A: "Toto salta a tus brazos. «¡Guau!»", B: "Toto salta a tus brazos y te lame la cara. «¡Guau!»", C: "Toto salta a tus brazos y te lame la cara con un entusiasmo que no estaba en el plan." },
            mood: "love", next: "telefono",
          },
        },
      },
      susto: {
        who: "toto", mood: "scared",
        line: {
          A: "Toto está muy asustado. Gruñe y no sale.",
          B: "Toto está pegado al muro, al fondo del banco. Gruñe y te enseña los dientes.",
          C: "Toto te enseña los dientes desde el fondo de su trinchera. Ahora mismo, no eres su persona favorita.",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas todo y te sientas.", B: "Lo guardas todo y te sientas en el suelo.", C: "Lo guardas todo y te sientas en el suelo, quieto." },
            say: { A: "Perdón, Toto. Ya está. Tranquilo.", B: "Perdón, Toto. Ya lo guardé. Tranquilo.", C: "Perdóname, Toto. Error mío. Empezamos de nuevo." },
            reply: { A: "Toto deja de gruñir. Te mira.", B: "Poco a poco, Toto deja de gruñir y te mira de reojo.", C: "Toto deja de gruñir, aunque todavía te observa de reojo." },
            mood: "worried", next: "confianza",
          },
          {
            id: "llamar-camila",
            say: { A: "Voy a llamar a Camila.", B: "Mejor llamo a Camila. Así no lo asusto más.", C: "Llamo a Camila. Yo ya he hecho bastante daño." },
            reply: { A: "Marcas el número. Toto te mira.", B: "Marcas el número de Camila. Toto te observa sin moverse.", C: "Marcas el número. Toto te observa con aire de testigo." },
            mood: "worried", next: "telefono",
          },
          {
            id: "dejar",
            say: { A: "Bueno. Me voy.", B: "Bueno, no quiere salir. Me voy.", C: "Bueno, Toto, tú ganas. Me retiro." },
            reply: { A: "Te vas. Toto se queda debajo del banco.", B: "Te alejas. Toto se queda escondido bajo el banco.", C: "Te alejas. Toto se queda en su trinchera, temblando." },
            mood: "sad", end: "solo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón, Toto. Eres bueno. No te voy a hacer nada.", B: "Perdón, Toto. No quería asustarte. Eres un perro muy bueno.", C: "Perdóname, Toto. Te prometo que soy de los buenos." },
            reply: { A: "Toto sale un poco y te lame la mano.", B: "Toto asoma el hocico y te lame la mano, como diciendo “bueno, te perdono”.", C: "Toto asoma el hocico y te lame un dedo. Perdón concedido, con condiciones." },
            mood: "love", next: "confianza",
          },
        },
      },
      telefono: {
        who: "toto", mood: "smile",
        line: {
          A: "Llamas a Camila. «¿Sí? ¿Encontraste a Toto? ¿Está bien?»",
          B: "Camila contesta al primer tono. «¿Sí? ¿Lo encontraste? Dime que está bien, por favor.»",
          C: "Camila contesta antes de que suene. «¿Sí? ¿Toto? ¿Está bien? ¿Dónde? Habla, por favor.»",
        },
        options: [
          {
            id: "lugar",
            say: { A: "Sí, está bien. Está en la Costanera, cerca del puente.", B: "Sí, está bien. Estamos en la Costanera, en un banco cerca del puente.", C: "Está perfecto, solo un poco asustado. Estamos en la Costanera, en el banco junto al puente." },
            reply: { A: "«¡Gracias! ¡Voy ahora mismo!» Toto mueve la cola.", B: "«¡Ay, gracias, gracias! Llego en cinco minutos.» Toto oye su voz y mueve la cola.", C: "«¡Gracias! ¡Voy corriendo!» Al oír la voz de Camila, Toto empieza a girar en círculos." },
            mood: "smile", end: "encontrado",
          },
          {
            id: "calmar-camila",
            say: { A: "Tranquila. Está bien. Está conmigo.", B: "Tranquila, Camila. Está bien y está conmigo. No me muevo de aquí.", C: "Respira, Camila. Toto está sano, salvo y bastante enamorado de mi zapato." },
            reply: { A: "Camila llora de alegría. «¡Gracias! ¡Voy para allá!»", B: "Camila llora de alegría al otro lado. «Gracias. Voy para allá. No lo sueltes.»", C: "Camila se ríe y llora a la vez. «Típico de él. Voy para allá. No lo sueltes ni un segundo.»" },
            mood: "smile", end: "encontrado",
          },
          {
            id: "consejo",
            say: { A: "Tiene miedo. ¿Qué hago?", B: "Todavía tiene miedo. ¿Cómo lo calmo hasta que llegues?", C: "Sigue nervioso. ¿Algún truco para calmarlo hasta que llegues?" },
            reply: { A: "«Cántale. Le gusta mucho.» Cantas. Toto se tranquiliza.", B: "«Cántale algo. Le encanta.» Cantas bajito y Toto se tumba, tranquilo.", C: "«Cántale. Cualquier cosa, no es exigente.» Cantas fatal, pero Toto se relaja igual." },
            mood: "smile", end: "encontrado",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Camila, Toto está bien. Es un perro muy bueno.", B: "Camila, Toto está bien. Es un perro precioso, de verdad.", C: "Camila, Toto está perfecto. Y tengo que decirte que tu perro es un encanto." },
            reply: { A: "Camila se ríe. «¡Gracias! Voy ya. ¿Te invito a un helado?»", B: "Camila se ríe, emocionada. «Gracias. Voy ya mismo. Y te debo un helado. O diez.»", C: "Camila se ríe entre lágrimas. «Eres mi persona favorita del año. Voy ya. Te debo una cena.»" },
            mood: "love", end: "encontrado",
          },
        },
      },
      "cuchillo-inicio": {
        who: "toto", mood: "terror",
        line: {
          A: "Toto ve tu cuchillo. Se pega al muro, debajo del banco. Muestra los dientes. «¡Grrr! ¡Guau!» Tiembla mucho.",
          B: "Toto ve el cuchillo antes que a ti. Se pega al muro, lo más lejos posible, y enseña los dientes. «¡Grrr! ¡Guau! ¡Guau!» Tiembla de pies a cabeza.",
          C: "Toto repara en el cuchillo y se aplasta contra el muro, en el rincón más hondo del banco. Enseña todos los dientes que tiene. «¡Grrr! ¡Guau!» Tiembla como una hoja, pero no cede.",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas el cuchillo y te agachas.", B: "Guardas el cuchillo, te agachas y muestras las manos vacías.", C: "Guardas el cuchillo, te agachas despacio y le enseñas las palmas vacías." },
            say: { A: "Perdón, Toto. Ya está. Mira, sin cuchillo. Tranquilo.", B: "Perdón, Toto, ya está. Mira, sin cuchillo. Tranquilo, pequeño.", C: "Perdóname, Toto. Ya no hay cuchillo, mira. Tranquilo, nadie te va a hacer nada." },
            reply: { A: "Toto deja de gruñir. Pero no sale. Mira tu bolsillo.", B: "Toto deja de gruñir, pero no se mueve ni un centímetro. Mira tu bolsillo con desconfianza.", C: "Toto deja de gruñir, aunque no avanza. Tiene los ojos clavados en el bolsillo donde guardaste la hoja." },
            mood: "scared", next: "cuchillo-calma",
          },
          {
            id: "correa",
            say: { A: "Toto, tu collar está atrapado en el banco. Con el cuchillo lo corto. Quieto.", B: "Toto, tu collar está enganchado en un clavo del banco. Voy a cortarlo con el cuchillo. Quieto, por favor.", C: "Toto, tu collar está enganchado en un clavo del banco; por eso no sales. Voy a cortar la correa con el cuchillo. Quieto, campeón." },
            reply: { A: "Toto gruñe más fuerte. Pero el collar lo tiene atrapado. No puede correr.", B: "Toto gruñe con más fuerza, pero es verdad: el collar lo tiene sujeto al banco y no puede escapar.", C: "Toto redobla el gruñido, pero no puede ir a ninguna parte: el collar lo ata al clavo." },
            mood: "worried", next: "cuchillo-correa",
          },
          {
            id: "llamar",
            say: { A: "¡Toto! ¡Ven! ¡Ven aquí!", B: "¡Toto! Ven aquí ahora mismo.", C: "¡Toto! Ven aquí, vamos, que no hay tiempo." },
            reply: { A: "Toto ve el cuchillo en tu mano, da un tirón y escapa por el canal.", B: "Toto ve el cuchillo todavía en tu mano, da un tirón desesperado y escapa corriendo por la orilla.", C: "Toto ve el cuchillo que aún tienes en la mano, pega un tirón de pánico y huye por la orilla del canal." },
            mood: "terror", end: "cuchillo-escapa",
          },
        ],
      },
      "cuchillo-calma": {
        who: "toto", mood: "scared",
        line: {
          A: "Toto respira rápido. No sale. Mira tu mano, mira tu bolsillo. Mira tu mano otra vez.",
          B: "Toto respira deprisa y sigue debajo del banco. Mira tu mano, luego tu bolsillo, luego tu mano otra vez.",
          C: "Toto jadea sin salir de su refugio. Alterna la mirada entre tu mano y tu bolsillo, como quien vigila a un sospechoso.",
        },
        options: [
          {
            id: "camila",
            act: { A: "Llamas a Camila.", B: "Llamas a Camila con la otra mano.", C: "Llamas a Camila, con la mano del cuchillo bien lejos." },
            say: { A: "Camila, encontré a Toto. Está asustado. Yo lo asusté. Ven, por favor.", B: "Camila, encontré a Toto. Está asustado, y la culpa es mía. ¿Puedes venir?", C: "Camila, tengo a Toto, pero está aterrado, y confieso que lo asusté yo. ¿Puedes venir a la Costanera?" },
            reply: { A: "«¡Voy!» Camila llega corriendo. Toto sale y salta a sus brazos.", B: "«¡Voy ahora mismo!» Camila llega corriendo en minutos. Toto sale disparado y salta a sus brazos.", C: "«¡Voy!» Camila llega a la carrera en cinco minutos. Toto sale como un cohete y se lanza a sus brazos." },
            mood: "smile", end: "cuchillo-camila",
          },
          {
            id: "esperar",
            say: { A: "Bueno, Toto. No hay prisa. Me siento aquí. Lejos del banco.", B: "Está bien, Toto, no hay prisa. Me siento aquí, lejos del banco, y esperamos.", C: "De acuerdo, Toto, sin prisa. Me siento aquí, a distancia, y esperamos juntos." },
            reply: { A: "Toto se calma poco a poco. Pero no sale. Tú esperas.", B: "Toto se va calmando poco a poco, pero no sale. Tú esperas, mirando el agua.", C: "Toto se tranquiliza por grados, pero no abandona el banco. Tú esperas con la vista en el canal." },
            mood: "worried", end: "cuchillo-espera",
          },
          {
            id: "cuchillo-agua",
            act: { A: "Tiras el cuchillo al canal.", B: "Sacas el cuchillo y lo tiras al canal.", C: "Sacas el cuchillo y lo lanzas al canal, delante de él." },
            say: { A: "Mira, Toto. Al agua. Ya no hay cuchillo.", B: "Mira, Toto: al agua. Ya no hay ningún cuchillo.", C: "Mira, Toto: al canal. Se acabó el cuchillo para siempre." },
            reply: { A: "Toto mira el agua. Mueve la cola un poco. Sale despacio.", B: "Toto mira el agua, mueve la cola un poquito y sale despacio del banco.", C: "Toto observa el agua, mueve la cola con timidez y sale de debajo del banco paso a paso." },
            mood: "smile", end: "cuchillo-camila",
          },
        ],
      },
      "cuchillo-correa": {
        who: "toto", mood: "worried",
        line: {
          A: "Cortas la correa con cuidado. ¡Clac! Toto está libre. Te mira. Mira el cuchillo. Mira el canal.",
          B: "Cortas la correa con mucho cuidado. ¡Clac! Toto queda libre. Te mira, mira el cuchillo, mira el canal.",
          C: "Cortas la correa con precisión. ¡Clac! Toto queda libre y, por un segundo, calcula: te mira, mira el cuchillo, mira el canal.",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas el cuchillo rápido.", B: "Guardas el cuchillo enseguida y abres los brazos.", C: "Guardas el cuchillo al instante y abres los brazos." },
            say: { A: "Listo, Toto. Sin cuchillo. Ven.", B: "Listo, Toto, sin cuchillo. Ven aquí.", C: "Ya está, Toto, cuchillo guardado. Ven aquí." },
            reply: { A: "Toto salta a tus brazos. Te lame la cara. Llamas a Camila.", B: "Toto salta a tus brazos y te lame la cara entera. Llamas a Camila.", C: "Toto se lanza a tus brazos y te lame la cara de arriba abajo. Llamas a Camila." },
            mood: "smile", end: "cuchillo-libre",
          },
          {
            id: "agarrar",
            say: { A: "¡Ya te tengo!", B: "¡Ahora sí, ya te tengo!", C: "¡Ahora sí que te tengo!" },
            reply: { A: "Toto ve el cuchillo todavía en tu mano. Corre por el canal.", B: "Toto ve el cuchillo todavía en tu otra mano y sale corriendo por la orilla.", C: "Toto ve que el cuchillo sigue en tu otra mano y huye por la orilla a toda velocidad." },
            mood: "terror", end: "cuchillo-escapa",
          },
          {
            id: "collar",
            say: { A: "Tu collar rojo, Toto. Lo guardo para Camila.", B: "Tu collar rojo, Toto. Me lo guardo para dárselo a Camila.", C: "Tu collar rojo, Toto; me lo quedo para devolvérselo a Camila." },
            reply: { A: "Toto huele el collar. Se sienta a tu lado. Llamas a Camila.", B: "Toto huele el collar en tu mano y se sienta a tu lado, tranquilo. Llamas a Camila.", C: "Toto olfatea el collar y se sienta a tu lado, como si firmara una tregua. Llamas a Camila." },
            mood: "smile", end: "cuchillo-libre",
          },
        ],
      },
      "pistola-inicio": {
        who: "toto", mood: "furious",
        line: {
          A: "Toto ve tu pistola y ladra muy fuerte. «¡GUAU! ¡GUAU! ¡GUAU!» La gente del paseo mira. Alguien grita: «¡Tiene una pistola!»",
          B: "Toto ve la pistola y ladra como nunca. «¡GUAU! ¡GUAU! ¡GUAU!» Medio paseo se da vuelta. Alguien grita: «¡Ese hombre tiene una pistola!»",
          C: "Toto ve la pistola y rompe a ladrar con una potencia imposible para su tamaño. «¡GUAU! ¡GUAU!» El paseo entero se gira. Alguien grita: «¡Tiene una pistola!»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la pistola.", B: "Guardas la pistola y levantas las manos.", C: "Guardas la pistola y levantas las manos para que el paseo lo vea." },
            say: { A: "¡Ya está! ¡Guardada! Toto, calla, por favor.", B: "¡Ya está, guardada! Toto, cállate, por favor.", C: "¡Guardada, miren, guardada! Toto, cállate de una vez, por favor." },
            reply: { A: "Toto ladra menos. La gente sigue mirando. Toto gruñe bajito.", B: "Toto baja el volumen, pero la gente sigue con los ojos puestos en ti. Toto gruñe bajito, vigilando.", C: "Toto ladra menos, aunque el paseo sigue pendiente de ti. Gruñe bajito, sin bajar la guardia." },
            mood: "worried", next: "pistola-silencio",
          },
          {
            id: "callar",
            say: { A: "¡Toto, shh! ¡Silencio!", B: "¡Toto, shh! ¡Silencio, que nos miran!", C: "¡Toto, silencio! ¡Nos está mirando todo el paseo!" },
            reply: { A: "Toto no calla. Sale del banco y corre por el canal, ladrando.", B: "Toto no se calla: sale del banco y huye por la orilla, ladrando sin parar.", C: "Toto no obedece. Sale disparado del banco y huye por la orilla, ladrando como una alarma." },
            mood: "terror", end: "pistola-escapa",
          },
          {
            id: "seguir",
            say: { A: "No es nada. Es un perro. Yo solo lo busco.", B: "No pasa nada, es solo un perro. Yo solo lo estoy buscando.", C: "No pasa nada, es solo un perro perdido. Yo lo estaba buscando, nada más." },
            reply: { A: "La pistola sigue en tu mano. Alguien llama a la policía. Toto ladra más.", B: "La pistola sigue a la vista. Alguien del paseo ya está llamando a la policía. Toto ladra más fuerte.", C: "La pistola sigue en tu mano, y el paseo lo nota: alguien llama a la policía. Toto ladra con más ganas." },
            mood: "scared", end: "pistola-policia",
          },
        ],
      },
      "pistola-silencio": {
        who: "toto", mood: "worried",
        line: {
          A: "Toto está callado, pero no sale. La gente del paseo todavía mira. Un señor dice: «¿Está bien el perro?»",
          B: "Toto se ha callado, pero no sale. La gente del paseo sigue mirando. Un señor pregunta desde lejos: «¿Está bien el perro?»",
          C: "Toto guarda silencio, sin abandonar el banco. El paseo sigue atento. Un señor pregunta a distancia: «¿El perro está bien?»",
        },
        options: [
          {
            id: "camila",
            act: { A: "Llamas a Camila.", B: "Llamas a Camila, con las manos a la vista.", C: "Llamas a Camila, con las manos bien visibles para el paseo." },
            say: { A: "Camila, encontré a Toto. Ven rápido. La gente me mira raro.", B: "Camila, encontré a Toto. Ven rápido, por favor, que la gente me mira raro.", C: "Camila, tengo a Toto. Ven lo antes posible: el paseo entero me mira como a un criminal." },
            reply: { A: "Camila llega corriendo. Toto sale y salta. La gente aplaude.", B: "Camila llega corriendo en minutos. Toto sale disparado y salta a sus brazos. La gente, aliviada, aplaude.", C: "Camila aparece a la carrera. Toto sale como un cohete a sus brazos y el paseo, aliviado, aplaude." },
            mood: "smile", end: "pistola-camila",
          },
          {
            id: "suelo",
            act: { A: "Te sientas en el suelo, lejos.", B: "Te sientas en el suelo, a dos metros del banco.", C: "Te sientas en el suelo, a un par de metros, con las manos sobre las rodillas." },
            say: { A: "Toto, me siento aquí. Sin pistola. Tú decides.", B: "Toto, me siento aquí, sin pistola. Tú decides cuándo salir.", C: "Toto, me quedo aquí sentado, sin pistola. Sal cuando quieras." },
            reply: { A: "Toto sale despacio. Huele tu zapato. Mueve la cola.", B: "Toto sale muy despacio, te huele el zapato y mueve la cola un poco.", C: "Toto sale paso a paso, te olfatea el zapato y, al fin, mueve la cola." },
            mood: "smile", next: "pistola-suelo",
          },
          {
            id: "senor",
            say: { A: "Sí, está bien. Es Toto. Se perdió. Lo busco.", B: "Sí, está bien. Se llama Toto, se perdió y lo estoy buscando.", C: "Sí, está bien. Se llama Toto, se escapó de su dueña y lo estoy buscando." },
            reply: { A: "El señor no te cree. «¿Con una pistola?» Llama a la policía.", B: "El señor no se lo traga. «¿Buscando a un perro con una pistola?» Y llama a la policía.", C: "El señor no te cree ni una palabra. «¿Buscando a un perro con una pistola en la mano?» Y marca a la policía." },
            mood: "worried", end: "pistola-policia",
          },
        ],
      },
      "pistola-suelo": {
        who: "toto", mood: "smile",
        line: {
          A: "Toto se sienta a tu lado. Mira tu bolsillo. Mira tus ojos. Pone la cabeza en tu pierna.",
          B: "Toto se sienta a tu lado. Mira el bolsillo donde está la pistola, luego tus ojos, y apoya la cabeza en tu pierna.",
          C: "Toto se sienta junto a ti. Mira el bolsillo de la pistola, luego tus ojos, y decide apoyar la cabeza en tu pierna.",
        },
        options: [
          {
            id: "camila",
            say: { A: "Camila, encontré a Toto. Está conmigo. Está bien. Ven.", B: "Camila, encontré a Toto. Está conmigo y está bien. Ven a la Costanera.", C: "Camila, Toto está conmigo, sano y salvo. Ven a la Costanera, junto al puente." },
            reply: { A: "Camila llega. Toto corre a ella. Camila te abraza también.", B: "Camila llega corriendo. Toto vuela hacia ella. Camila te abraza a ti también.", C: "Camila llega a la carrera. Toto vuela a sus brazos y Camila, de paso, te abraza a ti." },
            mood: "smile", end: "pistola-camila",
          },
          {
            id: "patrulla",
            say: { A: "Toto, mira. Luces azules. Alguien llamó a la policía.", B: "Toto, mira esas luces azules. Alguien llamó a la policía.", C: "Toto, mira: luces azules. Parece que alguien del paseo llamó a la policía." },
            reply: { A: "Una patrulla llega. Toto ladra a los policías. Tú levantas las manos.", B: "Una patrulla se detiene junto al paseo. Toto les ladra a los policías. Tú levantas las manos.", C: "Una patrulla frena junto al paseo. Toto ladra a los agentes con entusiasmo. Tú levantas las manos." },
            mood: "worried", end: "pistola-patrulla",
          },
          {
            id: "promesa",
            say: { A: "Toto, te prometo algo: la pistola, al canal. Ahora.", B: "Toto, te prometo una cosa: la pistola va al canal, ahora mismo.", C: "Toto, te hago una promesa: la pistola va al canal, ahora mismo, y no vuelve." },
            reply: { A: "Tiras la pistola al agua. Toto ladra una vez, contento. Llamas a Camila.", B: "Tiras la pistola al canal. Toto ladra una sola vez, feliz. Llamas a Camila.", C: "Lanzas la pistola al canal. Toto suelta un ladrido de aprobación. Llamas a Camila." },
            mood: "smile", end: "pistola-camila",
          },
        ],
      },
      "granada-inicio": {
        who: "toto", mood: "surprised",
        line: {
          A: "Toto ve tu granada. Deja de temblar. Mueve la cola. Sale del banco. «¡Guau!» Cree que es una pelota.",
          B: "Toto ve la granada y deja de temblar de golpe. Mueve la cola, sale del banco y se sienta frente a ti. «¡Guau!» Cree que es una pelota.",
          C: "Toto ve la granada y se le olvida el miedo. Mueve la cola, sale de debajo del banco y se sienta frente a ti, expectante. «¡Guau!» Para él, es una pelota.",
        },
        options: [
          {
            id: "no",
            say: { A: "No, Toto. No es una pelota. Es peligrosa.", B: "No, Toto, no es una pelota. Es peligrosa, de verdad.", C: "No, Toto, esto no es una pelota. Es peligroso, y no estoy bromeando." },
            reply: { A: "Toto no entiende. Mira la granada. Mira tus ojos. «¿Guau?»", B: "Toto no entiende nada. Mira la granada, mira tus ojos, ladea la cabeza. «¿Guau?»", C: "Toto no comprende. Mira la granada, luego tus ojos, y ladea la cabeza con elegancia. «¿Guau?»" },
            mood: "worried", next: "granada-no",
          },
          {
            id: "lanzar",
            act: { A: "Lanzas la granada por el paseo.", B: "Lanzas la granada lejos, por el paseo.", C: "Lanzas la granada lo más lejos que puedes, paseo abajo." },
            say: { A: "¡Busca, Toto! ¡Busca!", B: "¡Busca, Toto! ¡Tráela!", C: "¡Busca, Toto! ¡A por ella!" },
            reply: { A: "Toto corre feliz. La toma con la boca. La gente grita: «¡Una granada!» Todos corren.", B: "Toto sale como un rayo y la recoge con la boca. Alguien grita: «¡Ese perro tiene una granada!» El paseo se vacía.", C: "Toto sale disparado y la atrapa con la boca. Alguien grita: «¡El perro tiene una granada!» y el paseo se vacía en segundos." },
            mood: "terror", end: "granada-lanzar",
          },
          {
            id: "finta",
            act: { A: "Haces como que la lanzas, pero no.", B: "Finges lanzarla, pero la guardas.", C: "Finges el lanzamiento y te la guardas en el bolsillo." },
            say: { A: "¡Busca, Toto! …Bueno, no.", B: "¡Busca, Toto! …Bueno, mejor no.", C: "¡Busca, Toto! …Bueno, pensándolo bien, no." },
            reply: { A: "Toto corre diez metros. Se para. Vuelve, confundido. Te mira.", B: "Toto corre diez metros, se detiene en seco, y vuelve muy confundido. Te mira.", C: "Toto corre diez metros, frena en seco y regresa, desconcertado. Te mira como si lo hubieras traicionado." },
            mood: "surprised", next: "granada-finta",
          },
        ],
      },
      "granada-no": {
        who: "toto", mood: "worried",
        line: {
          A: "Toto mira tu bolsillo. Quiere la «pelota». Ladra una vez. Se sienta. Espera.",
          B: "Toto no le quita el ojo a tu bolsillo. Quiere su «pelota». Ladra una vez, se sienta y espera.",
          C: "Toto vigila tu bolsillo como un portero. Quiere su «pelota». Ladra una vez, se sienta y espera, muy digno.",
        },
        options: [
          {
            id: "camila",
            act: { A: "Llamas a Camila.", B: "Llamas a Camila sin sacar la granada.", C: "Llamas a Camila, con la granada bien guardada." },
            say: { A: "Camila, encontré a Toto. Está bien. Cree que tengo una pelota. Ven.", B: "Camila, encontré a Toto. Está bien. Cree que tengo una pelota, es largo de explicar. Ven.", C: "Camila, tengo a Toto, está perfecto. Cree que llevo una pelota; después te explico. Ven a la Costanera." },
            reply: { A: "Camila llega. Toto corre a ella, pero mira tu bolsillo.", B: "Camila llega corriendo. Toto corre a sus brazos, aunque sigue mirando tu bolsillo.", C: "Camila llega a la carrera. Toto corre a sus brazos, con un ojo todavía en tu bolsillo." },
            mood: "smile", end: "granada-camila",
          },
          {
            id: "mordida",
            say: { A: "Bueno, Toto. Mira. Pero no la toques.", B: "Está bien, Toto, te la enseño. Pero no la toques.", C: "De acuerdo, Toto, te la enseño un segundo. Pero ni se te ocurra tocarla." },
            reply: { A: "Toto la agarra con la boca. Corre debajo del banco. No la suelta.", B: "Toto la atrapa con la boca en un segundo y se mete debajo del banco. No la suelta.", C: "Toto la atrapa con la boca antes de que reacciones y se esconde bajo el banco. No piensa soltarla." },
            mood: "scared", end: "granada-mordida",
          },
          {
            id: "palo",
            act: { A: "Tomas un palo del suelo.", B: "Recoges un palo del suelo.", C: "Recoges un palo del suelo, mucho menos explosivo." },
            say: { A: "Mira, Toto. Un palo. ¡Esto sí! ¡Busca!", B: "Mira, Toto, un palo. Esto sí se puede lanzar. ¡Busca!", C: "Mira, Toto: un palo. Esto sí es un juguete. ¡Busca!" },
            reply: { A: "Toto corre por el palo. Lo trae. Está feliz. Llamas a Camila.", B: "Toto sale corriendo por el palo y lo trae moviendo la cola. Llamas a Camila.", C: "Toto corre tras el palo y lo trae, feliz y olvidado de la granada. Llamas a Camila." },
            mood: "smile", end: "granada-camila",
          },
        ],
      },
      "granada-finta": {
        who: "toto", mood: "surprised",
        line: {
          A: "Toto está confundido. Pero ya no tiene miedo. Está fuera del banco. Te mira. «¿Guau?»",
          B: "Toto está confundido, pero ya no tiene miedo: está fuera del banco, sentado delante de ti. «¿Guau?»",
          C: "Toto sigue confundido, pero el miedo se le fue: está fuera del banco, sentado ante ti, esperando explicaciones. «¿Guau?»",
        },
        options: [
          {
            id: "camila",
            say: { A: "Camila, encontré a Toto. Está fuera del banco. Está bien. Ven.", B: "Camila, encontré a Toto. Ya salió del banco, está bien. Ven.", C: "Camila, encontré a Toto. Ya salió de su escondite y está bien. Ven a la Costanera." },
            reply: { A: "Camila llega. Toto salta a sus brazos. Mira tu bolsillo una vez más.", B: "Camila llega corriendo y Toto salta a sus brazos. Antes, mira tu bolsillo una última vez.", C: "Camila llega a la carrera y Toto salta a sus brazos, no sin echar una última mirada a tu bolsillo." },
            mood: "smile", end: "granada-camila",
          },
          {
            id: "lanzar",
            act: { A: "Ahora sí la lanzas.", B: "Ahora sí la lanzas, lejos.", C: "Ahora sí la lanzas, paseo abajo." },
            say: { A: "Bueno, Toto. ¡Busca!", B: "Está bien, Toto. ¡Busca!", C: "De acuerdo, Toto, tú ganas. ¡Busca!" },
            reply: { A: "Toto corre. La toma. La gente grita y corre. Un helicóptero.", B: "Toto corre, la atrapa, y el paseo entero grita y huye. A lo lejos, un helicóptero.", C: "Toto corre y la atrapa; el paseo grita y se vacía. Pronto se oye un helicóptero." },
            mood: "terror", end: "granada-lanzar",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy, Toto. Con mi granada.", B: "Mejor me voy, Toto, y me llevo mi granada.", C: "Mejor me retiro, Toto, y la granada viene conmigo." },
            reply: { A: "Toto te sigue diez metros. Se sienta. Te ve irte, sin miedo.", B: "Toto te sigue diez metros, se sienta y te ve alejarte, sin miedo.", C: "Toto te acompaña diez metros, se sienta y te despide con la cola, sin rastro de miedo." },
            mood: "neutral", end: "granada-mordida",
          },
        ],
      },
      "gas-inicio": {
        who: "toto", mood: "pain",
        line: {
          A: "Toto huele tu gas pimienta. Estornuda. «¡Achís! ¡Achís!» Se frota la nariz. Se pega al muro.",
          B: "Toto huele el gas pimienta a un metro. Estornuda sin parar. «¡Achís! ¡Achís!» Se frota la nariz con la pata y se pega al muro.",
          C: "Toto detecta el gas pimienta desde lejos. Estornuda en cadena. «¡Achís! ¡Achís!» Se frota la nariz con la pata y se aplasta contra el muro.",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas el gas lejos.", B: "Guardas el gas en el fondo de la mochila.", C: "Guardas el gas en el fondo de la mochila y te limpias las manos." },
            say: { A: "Perdón, Toto. Ya lo guardé. Pobre nariz.", B: "Perdón, Toto, ya lo guardé. Pobre nariz la tuya.", C: "Perdóname, Toto, ya está guardado. Pobre nariz; para ti debe de ser fuego." },
            reply: { A: "Toto estornuda una vez más. Te mira con ojos llorosos.", B: "Toto estornuda una vez más y te mira con los ojos llorosos.", C: "Toto suelta un último estornudo y te mira con los ojos llenos de lágrimas." },
            mood: "worried", next: "gas-estornudo",
          },
          {
            id: "rociar",
            say: { A: "Un poco de gas y sales, Toto. Perdón.", B: "Un poquito de gas y sales de ahí, Toto. Perdón.", C: "Un poco de gas y seguro que sales, Toto. Perdona, pero no se me ocurre otra cosa." },
            reply: { A: "Toto grita. Sale corriendo con los ojos cerrados. Choca con un banco. Sigue corriendo.", B: "Toto chilla, sale disparado con los ojos cerrados, choca contra un banco y sigue corriendo.", C: "Toto chilla de dolor, sale a ciegas, choca contra un banco y sigue corriendo por la orilla." },
            mood: "pain", end: "gas-herido",
          },
          {
            id: "lavar",
            act: { A: "Te lavas las manos en el canal.", B: "Te lavas las manos en el agua del canal.", C: "Te lavas las manos en el canal para quitarte el olor a pimienta." },
            say: { A: "Espera, Toto. Me lavo las manos. Así no huelen.", B: "Espera, Toto, me lavo las manos; así ya no huelen a pimienta.", C: "Un momento, Toto: me lavo las manos, así dejan de oler a pimienta." },
            reply: { A: "Toto huele el aire. Estornuda menos. Te mira.", B: "Toto olfatea el aire, estornuda menos, y te mira con curiosidad.", C: "Toto husmea el aire, estornuda ya solo una vez, y te mira con interés." },
            mood: "worried", next: "gas-estornudo",
          },
        ],
      },
      "gas-estornudo": {
        who: "toto", mood: "worried",
        line: {
          A: "Toto tiene la nariz roja. Sale un poco del banco. Huele tu mano. Estornuda. Vuelve a oler.",
          B: "Toto tiene la nariz irritada. Asoma un poco del banco, te huele la mano, estornuda, y vuelve a olerla.",
          C: "Toto tiene la nariz enrojecida. Asoma medio cuerpo, te olfatea la mano, estornuda, y vuelve a olfatear, por si acaso.",
        },
        options: [
          {
            id: "camila",
            say: { A: "Camila, encontré a Toto. Está bien. Estornuda un poco. Es mi culpa. Ven.", B: "Camila, encontré a Toto. Está bien, aunque estornuda un poco por mi culpa. Ven.", C: "Camila, tengo a Toto. Está bien, salvo por unos estornudos que son culpa mía. Ven a la Costanera." },
            reply: { A: "Camila llega. Toto corre a ella. Estornuda en su cara. Camila se ríe.", B: "Camila llega corriendo. Toto corre a ella y le estornuda en la cara. Camila se ríe.", C: "Camila llega a la carrera. Toto vuela a sus brazos y le estornuda en plena cara. Camila se ríe." },
            mood: "smile", end: "gas-camila",
          },
          {
            id: "agua",
            act: { A: "Mojas tu bufanda en el canal.", B: "Mojas tu bufanda en el canal y se la acercas.", C: "Mojas la bufanda en el canal y se la acercas con cuidado." },
            say: { A: "Toto, agua para la nariz. Sin frotar. Ven.", B: "Toto, agua fresca para la nariz. Sin frotar. Ven aquí.", C: "Toto, agua para esa nariz. Sin frotar, que empeora. Ven." },
            reply: { A: "Toto sale. Pone la nariz en la bufanda. Mueve la cola. Llamas a Camila.", B: "Toto sale del banco y apoya la nariz en la bufanda mojada. Mueve la cola. Llamas a Camila.", C: "Toto abandona el banco y hunde la nariz en la bufanda húmeda. Mueve la cola, agradecido. Llamas a Camila." },
            mood: "smile", end: "gas-camila",
          },
          {
            id: "dejar",
            say: { A: "Bueno, Toto. Ya te asusté bastante. Me voy.", B: "Bueno, Toto, ya te asusté bastante por hoy. Me voy.", C: "Está bien, Toto, ya te di bastante susto por una noche. Me voy." },
            reply: { A: "Toto se queda debajo del banco. Estornuda. Solo.", B: "Toto se queda debajo del banco, estornudando, solo otra vez.", C: "Toto vuelve a su rincón bajo el banco, estornudando, solo de nuevo." },
            mood: "sad", end: "gas-solo",
          },
        ],
      },
      "lapiz-inicio": {
        who: "toto", mood: "surprised",
        line: {
          A: "Toto ve tu lápiz. Levanta las orejas. Para él es un palo pequeño. Deja de gruñir. «¿Guau?»",
          B: "Toto ve el lápiz y levanta las orejas: para él, es un palo pequeño y amarillo. Deja de gruñir. «¿Guau?»",
          C: "Toto repara en el lápiz y las orejas se le disparan: para él es un palo pequeño, amarillo y muy interesante. El gruñido se apaga. «¿Guau?»",
        },
        options: [
          {
            id: "ofrecer",
            act: { A: "Le acercas el lápiz despacio.", B: "Le acercas el lápiz, despacio, por el suelo.", C: "Deslizas el lápiz por el suelo, despacio, hacia el banco." },
            say: { A: "Mira, Toto. Un palo. Para ti. Ven.", B: "Mira, Toto, un palo. Es para ti. Ven a buscarlo.", C: "Mira, Toto: un palo. Es tuyo si sales a buscarlo." },
            reply: { A: "Toto sale un poco. Huele el lápiz. Lo muerde. Mueve la cola.", B: "Toto asoma, huele el lápiz, lo muerde con cuidado y mueve la cola.", C: "Toto asoma medio cuerpo, olfatea el lápiz, lo muerde con delicadeza y mueve la cola." },
            mood: "smile", next: "lapiz-juego",
          },
          {
            id: "cartel",
            act: { A: "Escribes un cartel en un papel.", B: "Escribes en un papel: “PERRO ENCONTRADO, TOTO, AQUÍ”.", C: "Escribes en un papel grande: “PERRO ENCONTRADO: TOTO. ESTÁ AQUÍ”." },
            say: { A: "Toto, escribo un cartel. Camila lo va a ver. Espera.", B: "Toto, escribo un cartel para que Camila lo vea desde el puente. Espera aquí.", C: "Toto, escribo un cartel; si Camila pasa por el puente, lo verá. Espera aquí." },
            reply: { A: "Pones el cartel en el banco. Toto lo huele. Se queda al lado.", B: "Pones el cartel sobre el banco. Toto lo huele y se queda a su lado, como vigilándolo.", C: "Colocas el cartel sobre el banco. Toto lo olfatea y se instala a su lado, de guardia." },
            mood: "worried", next: "lapiz-cartel",
          },
          {
            id: "lanzar",
            act: { A: "Lanzas el lápiz lejos.", B: "Lanzas el lápiz por el paseo.", C: "Lanzas el lápiz lejos, paseo abajo." },
            say: { A: "¡Busca, Toto!", B: "¡Busca el palo, Toto!", C: "¡Busca el palo, Toto, vamos!" },
            reply: { A: "Toto corre por el lápiz. Lo toma. Y sigue corriendo. No vuelve.", B: "Toto corre tras el lápiz, lo atrapa… y sigue corriendo por la orilla. No vuelve.", C: "Toto persigue el lápiz, lo atrapa al vuelo… y sigue de largo por la orilla. No regresa." },
            mood: "scared", end: "lapiz-escapa",
          },
        ],
      },
      "lapiz-juego": {
        who: "toto", mood: "smile",
        line: {
          A: "Toto muerde el lápiz. Está feliz. Está fuera del banco. Te mira con el lápiz en la boca.",
          B: "Toto mastica el lápiz, feliz, ya fuera del banco. Te mira con el lápiz en la boca, como un cigarro.",
          C: "Toto mastica el lápiz con entusiasmo, ya fuera del banco. Te mira con el lápiz en la boca, como un detective con su cigarro.",
        },
        options: [
          {
            id: "camila",
            say: { A: "Camila, encontré a Toto. Está bien. Tiene mi lápiz. Ven.", B: "Camila, encontré a Toto. Está bien, y se quedó con mi lápiz. Ven.", C: "Camila, tengo a Toto. Está perfecto, y se ha apropiado de mi lápiz. Ven a la Costanera." },
            reply: { A: "Camila llega. Toto corre a ella con el lápiz en la boca. Camila se ríe.", B: "Camila llega corriendo. Toto va a sus brazos con el lápiz en la boca. Camila se ríe.", C: "Camila llega a la carrera. Toto corre a sus brazos sin soltar el lápiz. Camila se ríe a carcajadas." },
            mood: "smile", end: "lapiz-camila",
          },
          {
            id: "quitar",
            say: { A: "Toto, dame el lápiz. Lo necesito.", B: "Toto, devuélveme el lápiz, que lo necesito.", C: "Toto, devuélveme el lápiz; lo necesito más que tú." },
            reply: { A: "Toto corre debajo del banco con el lápiz. No lo suelta. Tú te vas.", B: "Toto se mete debajo del banco con el lápiz y no lo suelta. Te vas sin lápiz.", C: "Toto se refugia bajo el banco con el lápiz y se niega a soltarlo. Te vas sin lápiz y sin perro." },
            mood: "worried", end: "lapiz-mordido",
          },
          {
            id: "collar",
            act: { A: "Escribes tu número en su collar.", B: "Con otro lápiz del bolsillo escribes tu número en el collar.", C: "Con un segundo lápiz escribes tu número de celular en el collar rojo." },
            say: { A: "Toto, mi número en tu collar. Si te pierdes otra vez, me llaman.", B: "Toto, te escribo mi número en el collar. Si te pierdes otra vez, me llaman.", C: "Toto, te dejo mi número en el collar: si vuelves a perderte, alguien me llama." },
            reply: { A: "Toto se deja. Mueve la cola. Llamas a Camila.", B: "Toto se deja hacer, moviendo la cola. Llamas a Camila.", C: "Toto se deja, moviendo la cola con aprobación. Llamas a Camila." },
            mood: "smile", end: "lapiz-camila",
          },
        ],
      },
      "lapiz-cartel": {
        who: "toto", mood: "worried",
        line: {
          A: "Toto está al lado del cartel. Pasan diez minutos. Alguien en el puente grita: «¡Toto!»",
          B: "Toto se queda junto al cartel. Pasan diez minutos. De pronto, alguien grita desde el puente: «¡Toto!»",
          C: "Toto monta guardia junto al cartel. Pasan diez minutos y, desde el puente, una voz grita: «¡Toto!»",
        },
        options: [
          {
            id: "camila",
            say: { A: "¡Camila! ¡Aquí! ¡Está aquí!", B: "¡Camila! ¡Aquí abajo! ¡Está aquí!", C: "¡Camila! ¡Aquí abajo, junto al banco! ¡Está aquí!" },
            reply: { A: "Camila baja corriendo. Lee el cartel. Abraza a Toto. Te abraza a ti.", B: "Camila baja corriendo del puente, lee el cartel, abraza a Toto y después a ti.", C: "Camila baja del puente a la carrera, lee el cartel, abraza a Toto y, acto seguido, a ti." },
            mood: "smile", end: "lapiz-camila",
          },
          {
            id: "esperar",
            say: { A: "Toto, espera. Que ella lea el cartel.", B: "Toto, espera aquí. Que ella vea el cartel.", C: "Toto, quieto; deja que ella vea el cartel." },
            reply: { A: "Toto no espera. Corre al puente. Camila lo ve. Tú guardas el cartel.", B: "Toto no espera: corre hacia el puente y Camila lo ve. Tú guardas el cartel de recuerdo.", C: "Toto no espera nada: sale disparado al puente y Camila lo recibe. Tú te quedas con el cartel de recuerdo." },
            mood: "smile", end: "lapiz-cartel-fin",
          },
          {
            id: "irse",
            say: { A: "Dejo el cartel y me voy. Suerte, Toto.", B: "Dejo el cartel aquí y me voy. Suerte, Toto.", C: "Dejo el cartel de guardia y me retiro. Suerte, Toto." },
            reply: { A: "Toto se queda con el cartel. Mueve la cola. Solo, pero tranquilo.", B: "Toto se queda junto al cartel moviendo la cola, solo pero tranquilo.", C: "Toto se queda custodiando el cartel, solo pero sereno, con la cola en marcha." },
            mood: "sad", end: "lapiz-mordido",
          },
        ],
      },
      "libro-inicio": {
        who: "toto", mood: "scared",
        line: {
          A: "Toto ve tu libro. Tiene miedo del viento. Tiembla. Tú abres el libro. Toto mira las páginas.",
          B: "Toto ve el libro. Tiembla con cada ráfaga de viento. Abres el libro y Toto mira las páginas, que se mueven.",
          C: "Toto ve el libro. Tiembla con cada golpe de viento. Abres el libro y Toto sigue con los ojos el baile de las páginas.",
        },
        options: [
          {
            id: "leer",
            act: { A: "Lees en voz baja.", B: "Lees en voz baja, sentado junto al banco.", C: "Te sientas junto al banco y lees en voz baja, sin mirarlo." },
            say: { A: "«La noche era tranquila y el perro dormía…»", B: "«La noche era tranquila, y el perro dormía junto al fuego…»", C: "«La noche era tranquila; el perro dormía junto al fuego, sin miedo…»" },
            reply: { A: "Toto deja de temblar. Sale despacio. Se acuesta a tu lado.", B: "Toto deja de temblar poco a poco. Sale del banco y se acuesta a tu lado.", C: "Toto deja de temblar con cada frase. Sale del banco y se tumba junto a tu pierna." },
            mood: "sleepy", next: "libro-lectura",
          },
          {
            id: "techo",
            act: { A: "Pones el libro abierto sobre el banco, como un techo.", B: "Apoyas el libro abierto contra el banco, como un pequeño techo contra el viento.", C: "Colocas el libro abierto contra el banco, a modo de techo contra el viento." },
            say: { A: "Mira, Toto. Un techo. Ya no hay viento.", B: "Mira, Toto, un techo. Ahí ya no entra el viento.", C: "Mira, Toto: un techo de papel. Ahí dentro el viento no llega." },
            reply: { A: "Toto se mete debajo del libro. Deja de temblar. Te mira.", B: "Toto se mete debajo del libro, deja de temblar, y te mira agradecido.", C: "Toto se refugia bajo el libro, deja de temblar y te mira con algo parecido a la gratitud." },
            mood: "smile", next: "libro-techo",
          },
          {
            id: "golpe",
            act: { A: "Golpeas el banco con el libro.", B: "Das un golpe en el banco con el libro.", C: "Golpeas el banco con el libro para que salga." },
            say: { A: "¡Sal, Toto! ¡Ya!", B: "¡Sal de ahí, Toto, ya!", C: "¡Sal de ahí ahora mismo, Toto!" },
            reply: { A: "Toto sale corriendo. Por el otro lado. Hacia el canal. No vuelve.", B: "Toto sale corriendo, por el otro lado del banco, hacia la orilla. No vuelve.", C: "Toto huye por el lado contrario del banco, orilla abajo. No regresa." },
            mood: "terror", end: "libro-escapa",
          },
        ],
      },
      "libro-lectura": {
        who: "toto", mood: "sleepy",
        line: {
          A: "Toto pone la cabeza en tu pierna. Cierra los ojos. Tú sigues leyendo. El viento pasa.",
          B: "Toto apoya la cabeza en tu pierna y cierra los ojos. Sigues leyendo. El viento pasa de largo.",
          C: "Toto apoya la cabeza en tu pierna y cierra los ojos. Sigues leyendo; el viento pasa, pero ya no importa.",
        },
        options: [
          {
            id: "camila",
            say: { A: "Camila, encontré a Toto. Está dormido. En mi pierna. Ven.", B: "Camila, encontré a Toto. Está dormido en mi pierna. Ven, pero despacio.", C: "Camila, tengo a Toto. Se durmió en mi pierna mientras le leía. Ven, pero sin prisa." },
            reply: { A: "Camila llega despacio. Toto abre un ojo. Salta a sus brazos.", B: "Camila llega de puntillas. Toto abre un ojo, la ve, y salta a sus brazos.", C: "Camila se acerca de puntillas. Toto abre un ojo, la reconoce y salta a sus brazos." },
            mood: "smile", end: "libro-camila",
          },
          {
            id: "seguir",
            say: { A: "Sigo leyendo. Toto duerme. No hay prisa.", B: "Sigo leyendo un poco más. Toto duerme y no hay prisa.", C: "Sigo leyendo; Toto duerme y, por una vez, nada corre prisa." },
            reply: { A: "Toto duerme. Tú lees. Camila llega sola, media hora después, siguiendo la voz.", B: "Toto duerme y tú lees. Media hora después, Camila llega sola, siguiendo tu voz.", C: "Toto duerme; tú lees. Media hora más tarde, Camila aparece sola, guiada por tu voz." },
            mood: "sleepy", end: "libro-duerme",
          },
          {
            id: "regalo",
            say: { A: "Toto, este libro es tuyo. Bueno, de Camila.", B: "Toto, este libro es para ti. Bueno, para Camila.", C: "Toto, el libro es tuyo. Bueno, de Camila, que sabe leer." },
            reply: { A: "Toto mueve la cola dormido. Llamas a Camila.", B: "Toto mueve la cola sin despertarse. Llamas a Camila.", C: "Toto mueve la cola en sueños. Llamas a Camila." },
            mood: "smile", end: "libro-camila",
          },
        ],
      },
      "libro-techo": {
        who: "toto", mood: "smile",
        line: {
          A: "Toto está debajo del libro. Tranquilo. Saca la cabeza. Te mira. «¿Guau?»",
          B: "Toto está bajo el libro, tranquilo por fin. Saca la cabeza y te mira. «¿Guau?»",
          C: "Toto descansa bajo su techo de papel, tranquilo por primera vez. Asoma la cabeza y te mira. «¿Guau?»",
        },
        options: [
          {
            id: "camila",
            say: { A: "Camila, encontré a Toto. Está debajo de mi libro. Ven.", B: "Camila, encontré a Toto. Está debajo de mi libro, tranquilo. Ven.", C: "Camila, tengo a Toto. Está refugiado debajo de mi libro, tranquilo. Ven a la Costanera." },
            reply: { A: "Camila llega. Levanta el libro. Toto salta. Camila se ríe.", B: "Camila llega, levanta el libro como una tapa, y Toto salta a sus brazos. Camila se ríe.", C: "Camila llega, levanta el libro como quien abre una caja, y Toto salta. Camila se ríe." },
            mood: "smile", end: "libro-camila",
          },
          {
            id: "llevar",
            act: { A: "Tomas a Toto con el libro encima.", B: "Levantas a Toto con el libro todavía encima.", C: "Cargas a Toto con el libro aún sobre el lomo, como un caparazón." },
            say: { A: "Vamos, Toto. Con techo y todo. Buscamos a Camila.", B: "Vamos, Toto, con techo y todo. Vamos a buscar a Camila.", C: "Vamos, Toto, techo incluido. Vamos a buscar a Camila." },
            reply: { A: "Toto no se mueve. Camila aparece en el puente y grita su nombre.", B: "Toto se deja llevar, quieto bajo el libro. Camila aparece en el puente y grita su nombre.", C: "Toto se deja cargar, inmóvil bajo el libro. Camila aparece en el puente y grita su nombre." },
            mood: "smile", end: "libro-camila",
          },
          {
            id: "irse",
            say: { A: "Te dejo el libro de techo, Toto. Me voy.", B: "Te dejo el libro de techo, Toto, y me voy.", C: "Te dejo el libro como techo, Toto, y me retiro." },
            reply: { A: "Toto se queda debajo del libro. Tranquilo. Pero solo.", B: "Toto se queda bajo el libro, tranquilo pero solo.", C: "Toto se queda bajo su techo de papel, sereno aunque solo." },
            mood: "sad", end: "libro-escapa",
          },
        ],
      },
      "corazon-inicio": {
        who: "toto", mood: "love",
        line: {
          A: "El corazón llega a Toto. Deja de temblar. Sale del banco. Mueve la cola. Te lame la mano. Hay corazones.",
          B: "El corazón alcanza a Toto. Deja de temblar al instante, sale del banco moviendo la cola y te lame la mano. Corazones flotan sobre él.",
          C: "El corazón envuelve a Toto. El temblor desaparece; sale de debajo del banco moviendo la cola y te lame la mano con devoción. Corazones por todas partes.",
        },
        options: [
          {
            id: "camila",
            say: { A: "Toto, ¿dónde está Camila? Vamos a llamarla.", B: "Toto, ¿dónde está Camila? Vamos a llamarla ahora.", C: "Toto, ¿dónde está Camila? Vamos a llamarla ahora mismo." },
            reply: { A: "Toto ladra contento. Llamas a Camila. «¿Lo encontraste? ¡Voy!»", B: "Toto ladra de alegría. Llamas a Camila. «¿Lo encontraste? ¡Voy corriendo!»", C: "Toto ladra con entusiasmo. Llamas a Camila. «¿Lo tienes? ¡Voy ahora mismo!»" },
            mood: "love", next: "corazon-llamada",
          },
          {
            id: "abrazar",
            act: { A: "Abrazas a Toto.", B: "Levantas a Toto y lo abrazas.", C: "Levantas a Toto en brazos y lo abrazas." },
            say: { A: "Ven aquí, Toto. Ya está. Ya pasó.", B: "Ven aquí, Toto. Ya está, ya pasó todo.", C: "Ven aquí, Toto. Ya está, se acabó el miedo." },
            reply: { A: "Toto se queda en tus brazos. Camila llega siguiendo los corazones.", B: "Toto se acomoda en tus brazos. Camila llega siguiendo los corazones desde el puente.", C: "Toto se acurruca en tus brazos. Camila llega guiada por los corazones que flotan sobre el banco." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "pasear",
            say: { A: "Toto, caminamos juntos hasta el puente. Allí está Camila.", B: "Toto, caminamos juntos hasta el puente. Seguro que Camila está por allí.", C: "Toto, caminemos juntos hasta el puente; Camila no puede andar lejos." },
            reply: { A: "Toto camina a tu lado. Sin correa. Con corazones.", B: "Toto camina pegado a tu pierna, sin correa, rodeado de corazones.", C: "Toto camina pegado a ti, sin correa, con corazones flotando a su alrededor." },
            mood: "love", next: "corazon-paseo",
          },
        ],
      },
      "corazon-llamada": {
        who: "toto", mood: "love",
        line: {
          A: "Toto espera sentado. Mira el puente. Mueve la cola. Camila viene corriendo.",
          B: "Toto espera sentado, mirando el puente, con la cola en marcha. Camila viene corriendo.",
          C: "Toto espera sentado, los ojos fijos en el puente, la cola a toda velocidad. Camila llega corriendo.",
        },
        options: [
          {
            id: "entregar",
            say: { A: "Camila, aquí está. Está bien. Solo tenía miedo.", B: "Camila, aquí lo tienes. Está bien, solo tenía miedo.", C: "Camila, aquí está, sano y salvo. Solo tenía miedo." },
            reply: { A: "Camila abraza a Toto. Toto lame a Camila. Después te lame a ti.", B: "Camila abraza a Toto. Toto la lame a ella y, acto seguido, a ti.", C: "Camila estrecha a Toto. Toto la lame a ella y luego, con justicia, a ti." },
            mood: "love", end: "corazon-camila",
          },
          {
            id: "beso",
            say: { A: "Toto, un beso de despedida.", B: "Toto, dame un beso de despedida.", C: "Toto, un beso de despedida antes de irte." },
            reply: { A: "Toto te lame la cara. Camila se ríe. «¡Te quiere más que a mí!»", B: "Toto te lame la cara entera. Camila se ríe. «¡Te quiere más que a mí!»", C: "Toto te lame la cara de oreja a oreja. Camila se ríe. «¡Creo que te quiere más que a mí!»" },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "lamer",
            say: { A: "Toto, tranquilo. Eres muy bueno.", B: "Toto, tranquilo, eres un perro buenísimo.", C: "Toto, tranquilo; eres, con diferencia, el mejor perro de la Costanera." },
            reply: { A: "Toto se sienta y mueve la cola. Camila llega y los abraza a los dos.", B: "Toto se sienta moviendo la cola. Camila llega y los abraza a los dos.", C: "Toto se sienta con la cola a toda marcha. Camila llega y los abraza a los dos." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-paseo": {
        who: "toto", mood: "love",
        line: {
          A: "En el puente, Camila ve a Toto. Grita su nombre. Toto corre. Hay corazones en todo el puente.",
          B: "En el puente, Camila ve a Toto y grita su nombre. Toto corre hacia ella. Los corazones cubren el puente.",
          C: "En el puente, Camila distingue a Toto y grita su nombre. Toto corre a su encuentro y los corazones inundan el puente.",
        },
        options: [
          {
            id: "mirar",
            say: { A: "Camila, aquí está. Estaba debajo de un banco.", B: "Camila, aquí lo tienes. Estaba escondido debajo de un banco.", C: "Camila, aquí está. Lo encontré escondido debajo de un banco." },
            reply: { A: "Camila llora de alegría. Abraza a Toto. Te abraza a ti.", B: "Camila llora de alegría. Abraza a Toto y luego te abraza a ti.", C: "Camila llora de pura alegría. Abraza a Toto y después, sin soltarlo, a ti." },
            mood: "love", end: "corazon-camila",
          },
          {
            id: "beso",
            say: { A: "Toto, un beso. Y a casa.", B: "Toto, un beso, y a casa.", C: "Toto, un beso de despedida, y a casa con Camila." },
            reply: { A: "Toto te lame la cara. Camila sonríe. «Gracias por todo.»", B: "Toto te lame la cara. Camila sonríe. «Gracias por todo, de verdad.»", C: "Toto te lame la cara. Camila sonríe. «Gracias por todo; no sé cómo pagártelo.»" },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "abrazo",
            say: { A: "Camila, un abrazo para ti también.", B: "Camila, ven, un abrazo para ti también.", C: "Camila, ven aquí: este abrazo es para ti también." },
            reply: { A: "Camila te abraza llorando. Toto salta entre los dos.", B: "Camila te abraza llorando de alegría. Toto salta entre los dos.", C: "Camila te abraza entre lágrimas de alegría. Toto salta entre los dos, celoso." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {
      encontrado: { text: { A: "Camila llega corriendo. Abraza a Toto. Toto está feliz.", B: "Camila llega corriendo por la Costanera. Toto salta a sus brazos y no para de mover la cola.", C: "Camila llega sin aliento. Toto salta a sus brazos y, durante un minuto, nadie en la Costanera es tan feliz como ellos." }, change: "sonrie", flag: "toto-encontrado", recap: "Encontraste a Toto y lo devolviste a Camila." },
      escapa: { text: { A: "Toto corre por el canal. Ya no lo ves.", B: "Toto se aleja corriendo por la orilla. Lo pierdes de vista.", C: "Toto se pierde en la noche, a lo largo del canal. Camila va a tener que seguir buscando." }, change: "corre", recap: "Toto se te escapó junto al canal." },
      solo: { text: { A: "Toto se queda debajo del banco, solo.", B: "Toto se queda escondido debajo del banco, temblando.", C: "Toto se queda bajo el banco, temblando. La noche sigue y nadie lo encuentra todavía." }, change: "sigue", recap: "Dejaste a Toto escondido bajo el banco." },
      "cuchillo-escapa": { text: { A: "Toto corre por el canal. Lejos de ti y de tu cuchillo. Ya no lo ves.", B: "Toto corre por la orilla, lejos de ti y de tu cuchillo. Lo pierdes de vista.", C: "Toto huye por la orilla, lejos de ti y de tu cuchillo. Desaparece en la oscuridad." }, change: "corre", recap: "Toto huyó de tu cuchillo." },
      "cuchillo-camila": { text: { A: "Camila abraza a Toto. «¿Un cuchillo? Qué susto.» Toto te mira desde sus brazos. Te perdona.", B: "Camila abraza a Toto. «¿Lo asustaste con un cuchillo? Qué susto.» Toto te mira desde sus brazos y, al final, te perdona.", C: "Camila abraza a Toto. «¿Un cuchillo? Pobre.» Toto te observa desde sus brazos y, con generosidad canina, te perdona." }, change: "sonrie", recap: "Toto volvió con Camila a pesar del susto del cuchillo.", flag: "toto-encontrado" },
      "cuchillo-espera": { text: { A: "Esperas lejos del banco. Toto no sale. Te vas. Camila lo va a buscar mañana.", B: "Esperas a distancia, pero Toto no sale. Te vas. Camila tendrá que buscarlo mañana.", C: "Esperas a distancia, pero Toto no abandona el banco. Te vas; Camila tendrá que volver mañana." }, change: "sigue", recap: "Toto no confió en ti después del cuchillo." },
      "cuchillo-libre": { text: { A: "Toto está libre. Camila llega. Le das el collar cortado. «¡Lo salvaste!»", B: "Toto está libre gracias al cuchillo. Camila llega y le das el collar cortado. «¡Lo salvaste!»", C: "Toto está libre, gracias al cuchillo. Camila llega y le entregas el collar cortado. «¡Lo salvaste!»" }, change: "sonrie", recap: "Cortaste la correa de Toto con tu cuchillo.", flag: "toto-encontrado" },
      "pistola-escapa": { text: { A: "Toto corre por el canal, ladrando. La gente te mira. Tú te vas rápido.", B: "Toto huye por la orilla, ladrando sin parar. La gente te mira. Te vas lo más rápido que puedes.", C: "Toto huye por la orilla, ladrando como una sirena. El paseo te mira. Te vas a toda prisa." }, change: "huye", recap: "Toto huyó ladrando por tu pistola." },
      "pistola-policia": { text: { A: "Una patrulla llega. Levantas las manos. Toto ladra a los policías. Es una noche larga.", B: "Llega una patrulla. Levantas las manos. Toto ladra a los policías desde el banco. Va a ser una noche larga.", C: "Llega una patrulla. Levantas las manos. Toto ladra a los agentes desde su refugio. La noche promete ser larga." }, change: "manos-arriba", recap: "Los ladridos de Toto trajeron a la policía por tu pistola." },
      "pistola-camila": { text: { A: "Camila abraza a Toto. La gente del paseo aplaude. Tú guardas la pistola para siempre.", B: "Camila abraza a Toto. La gente del paseo aplaude, aliviada. Tú guardas la pistola para siempre.", C: "Camila abraza a Toto y el paseo aplaude, aliviado. Tú guardas la pistola para siempre, o eso prometes." }, change: "sonrie", recap: "Toto volvió con Camila después de ladrarle a tu pistola.", flag: "toto-encontrado" },
      "pistola-patrulla": { text: { A: "La patrulla te lleva. Toto se queda con un policía. Camila llega y lo abraza.", B: "La patrulla te lleva. Toto se queda con un policía amable. Camila llega y lo abraza.", C: "La patrulla se te lleva. Toto se queda al cuidado de un policía amable. Camila llega y lo abraza." }, change: "policia", recap: "La policía llegó por tu pistola, pero Toto volvió con Camila.", flag: "toto-encontrado" },
      "granada-lanzar": { text: { A: "Toto corre por el paseo con la granada en la boca. Todos huyen. Un helicóptero. Toto está feliz.", B: "Toto corre por el paseo con la granada en la boca. El paseo huye, llega la policía, un helicóptero ilumina el canal. Toto está feliz.", C: "Toto recorre el paseo con la granada en la boca. La gente huye, llega la policía y un helicóptero barre el canal. Toto es el perro más feliz de la ciudad." }, change: "helicoptero", recap: "Toto corrió con tu granada y evacuó la Costanera." },
      "granada-camila": { text: { A: "Camila abraza a Toto. «¿Una pelota? ¿Qué pelota?» Tú no dices nada.", B: "Camila abraza a Toto. «¿Una pelota? ¿Qué pelota?» Tú prefieres no explicar nada.", C: "Camila abraza a Toto. «¿Una pelota? ¿De qué pelota hablas?» Tú decides que hay cosas que no hace falta explicar." }, change: "sonrie", recap: "Toto volvió con Camila sin saber que la «pelota» era una granada.", flag: "toto-encontrado" },
      "granada-mordida": { text: { A: "Toto está debajo del banco con tu granada en la boca. No la suelta. Tú te vas. Despacio.", B: "Toto se queda bajo el banco con tu granada en la boca y no piensa soltarla. Te vas, muy despacio.", C: "Toto permanece bajo el banco con tu granada en la boca, decidido a no soltarla. Te alejas muy despacio." }, change: "sigue", recap: "Toto se quedó con tu granada." },
      "gas-herido": { text: { A: "Toto corre con los ojos cerrados. Llora. Camila lo encuentra después. Lo lleva al veterinario.", B: "Toto huye a ciegas, llorando. Camila lo encuentra más tarde y lo lleva al veterinario. No te lo perdona.", C: "Toto huye a ciegas, gimiendo. Camila lo encuentra más tarde y lo lleva al veterinario. No te lo va a perdonar." }, change: "corre", recap: "Lastimaste a Toto con el gas pimienta." },
      "gas-camila": { text: { A: "Camila abraza a Toto. Toto estornuda. «¿Qué te pasó, Toto?» Tú guardas el gas.", B: "Camila abraza a Toto, que estornuda sin parar. «¿Qué te pasó?» Tú guardas el gas más hondo todavía.", C: "Camila abraza a Toto, que estornuda sin remedio. «¿Qué te pasó, mi amor?» Tú guardas el gas en el fondo de la mochila." }, change: "sonrie", recap: "Toto volvió con Camila, estornudando por tu gas.", flag: "toto-encontrado" },
      "gas-solo": { text: { A: "Toto se queda debajo del banco. Estornuda. Solo. Tú te vas.", B: "Toto se queda bajo el banco, estornudando, solo otra vez. Te vas.", C: "Toto permanece bajo el banco, estornudando, solo de nuevo. Te alejas." }, change: "sigue", recap: "Dejaste a Toto solo después del gas." },
      "lapiz-escapa": { text: { A: "Toto corre por el canal con tu lápiz. No vuelve. Ya no lo ves.", B: "Toto corre por la orilla con tu lápiz en la boca y no vuelve. Lo pierdes de vista.", C: "Toto corre por la orilla con tu lápiz en la boca y no regresa. Desaparece en la oscuridad." }, change: "corre", recap: "Toto huyó con tu lápiz." },
      "lapiz-camila": { text: { A: "Camila abraza a Toto. Toto tiene tu lápiz en la boca. «¿Y eso?» Te ríes.", B: "Camila abraza a Toto, que sigue con tu lápiz en la boca. «¿Y eso?» Te ríes.", C: "Camila abraza a Toto, que no suelta tu lápiz. «¿Y eso?» Te ríes; el lápiz ya es suyo." }, change: "sonrie", recap: "Toto volvió con Camila gracias a tu lápiz.", flag: "toto-encontrado" },
      "lapiz-mordido": { text: { A: "Toto se queda debajo del banco con tu lápiz. Tú te vas sin lápiz.", B: "Toto se queda bajo el banco con tu lápiz. Te vas sin lápiz y sin perro.", C: "Toto permanece bajo el banco, con tu lápiz como trofeo. Te vas sin lápiz y sin perro." }, change: "sigue", recap: "Toto se quedó con tu lápiz debajo del banco." },
      "lapiz-cartel-fin": { text: { A: "Camila abraza a Toto en el puente. Tú guardas el cartel. «PERRO ENCONTRADO».", B: "Camila abraza a Toto en el puente. Tú guardas el cartel: “PERRO ENCONTRADO”. Funcionó.", C: "Camila abraza a Toto en el puente. Tú guardas el cartel: “PERRO ENCONTRADO”. El lápiz hizo su trabajo." }, change: "sonrie", recap: "Tu cartel a lápiz ayudó a Camila a encontrar a Toto.", flag: "toto-encontrado" },
      "libro-escapa": { text: { A: "Toto corre por el canal. Tu libro está en el suelo. Toto no vuelve.", B: "Toto huye por la orilla. Tu libro queda en el suelo. Toto no vuelve.", C: "Toto huye por la orilla. Tu libro queda tirado en el suelo. Toto no regresa." }, change: "corre", recap: "Asustaste a Toto con el libro y huyó." },
      "libro-camila": { text: { A: "Camila abraza a Toto. «¿Le leíste? ¡Le encanta!» Te pide el título.", B: "Camila abraza a Toto. «¿Le leíste un libro? ¡Le encanta que le lean!» Te pide el título.", C: "Camila abraza a Toto. «¿Le leíste? Le encanta que le lean, no sé por qué.» Te pide el título del libro." }, change: "sonrie", recap: "Tu libro calmó a Toto y volvió con Camila.", flag: "toto-encontrado" },
      "libro-duerme": { text: { A: "Toto duerme en tu pierna. Camila llega sola, siguiendo tu voz. Se sienta a escuchar.", B: "Toto duerme en tu pierna. Camila llega sola, guiada por tu voz, y se sienta a escuchar.", C: "Toto duerme sobre tu pierna. Camila llega sola, guiada por tu voz, y se sienta a escuchar el final." }, change: "se-sienta", recap: "Leíste hasta que Camila los encontró a los dos.", flag: "toto-encontrado" },
      "corazon-abrazo": { text: { A: "Camila llega siguiendo los corazones. Abraza a Toto y a ti. Toto lame a todos.", B: "Camila llega siguiendo los corazones. Los abraza a los dos, a Toto y a ti. Toto lame a todo el mundo.", C: "Camila llega guiada por los corazones. Los abraza a los dos sin distinción. Toto reparte lametones." }, change: "abraza", recap: "Toto se calmó con el corazón y Camila los abrazó.", flag: "toto-encontrado" },
      "corazon-camila": { text: { A: "Camila abraza a Toto. Hay corazones alrededor. Toto está feliz. Tú también.", B: "Camila abraza a Toto entre corazones. Toto está feliz, y tú también.", C: "Camila abraza a Toto rodeada de corazones. Toto está feliz; tú, un poco más." }, change: "sonrie", recap: "Toto volvió con Camila gracias al corazón.", flag: "toto-encontrado" },
      "corazon-beso": { text: { A: "Toto te lame la cara. Camila se ríe. Se van juntos. Los corazones se quedan.", B: "Toto te lame la cara de despedida. Camila se ríe y se van juntos. Los corazones se quedan un rato.", C: "Toto te lame la cara en señal de despedida. Camila se ríe y se van juntos. Los corazones tardan en irse." }, change: "beso", recap: "Toto te dio un beso de perro antes de irse con Camila.", flag: "toto-encontrado" },
    },
    speak: {
      A1: "¿Cómo se llama un animal que conoces?",
      A2: "¿Cuándo buscaste algo durante mucho tiempo?",
      B1: "¿Cómo reaccionarías si encontraras un animal perdido en la calle?",
      B2: "¿Qué ventajas y desventajas tiene vivir con un perro en una ciudad grande?",
      C1: "¿En qué casos te parece razonable tratar a una mascota como a un miembro de la familia?",
      C2: "¿Qué crees que aprendemos de nosotros mismos al cuidar de un ser que depende por completo de nosotros?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Los animales te tienen miedo?", B: "¿Qué haces cuando un animal se asusta de ti?", C: "¿Crees que los animales perciben el peligro mejor que nosotros?" } },
      pistola: { start: "pistola-inicio", fx: "grita", speak: { A: "¿Qué haces si un perro ladra mucho?", B: "¿Alguna vez un ruido tuyo llamó la atención de todo el mundo?", C: "¿Cómo reaccionas cuando la gente te mira con desconfianza?" } },
      granada: { start: "granada-inicio", fx: "curioso", speak: { A: "¿Juegas con animales?", B: "¿Cuál es la situación más absurda que viviste con un animal?", C: "¿Qué cosa peligrosa confundiste alguna vez con un juego?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Qué olor no soportas?", B: "¿Alguna vez lastimaste a alguien sin querer?", C: "¿Cómo evitas que tu propia protección se convierta en un riesgo para otros?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Qué escribes cuando pierdes algo?", B: "¿Alguna vez pusiste un cartel en la calle?", C: "¿Qué estrategias usas para encontrar algo que perdiste?" } },
      libro: { start: "libro-inicio", fx: "calma", speak: { A: "¿Lees en voz alta a alguien?", B: "¿Qué te calma cuando estás nervioso?", C: "¿Qué poder crees que tiene una voz tranquila sobre alguien asustado?" } },
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿Te gustan los perros?", B: "¿Qué animal te hizo sentir querido?", C: "¿Por qué crees que el cariño de un animal nos parece tan incondicional?" } },
    },
  },

  // ───────────────────────────── 5. Papeles al agua
  {
    id: "costa-poemas",
    kind: "escena",
    district: "costa",
    title: "Papeles al agua",
    verb: "PREGUNTAR",
    goal: "Preguntar con tacto, expresar preocupación, opinar con honestidad, convencer y crear algo juntos.",
    cast: [
      {
        id: "inma", name: "Inma", role: "Poeta que quiere empezar de cero",
        age: "adult", body: "f", build: "average", height: 1.75,
        hair: "long", hairColor: "#c9a35a", skin: "#e2b48e",
        top: "sweater", topColor: "#c45a8a", bottom: "pants", bottomColor: "#3a3a3a",
        extras: ["glasses", "scarf"], pose: "stand", props: ["notebook", "footbridge"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "inma", mood: "sad",
        line: {
          A: "En el puente, una mujer arranca hojas de un cuaderno. Las tira al agua, una por una.",
          B: "En medio del puente, una mujer arranca hojas de un cuaderno y las deja caer al canal, una tras otra. El viento se lleva algunas.",
          C: "En el puente, una mujer arranca hojas de un cuaderno con ceremonia y las suelta sobre el canal. Parece un funeral muy pequeño.",
        },
        options: [
          {
            id: "preguntar",
            say: { A: "Perdona, ¿qué tiras al agua?", B: "Perdona la curiosidad, pero ¿qué estás tirando al canal?", C: "Perdona que pregunte, pero ¿qué es eso que le estás regalando al canal?" },
            reply: { A: "La mujer te mira. «Poemas. Míos. Muy malos. Soy Inma.»", B: "La mujer se encoge de hombros. «Mis poemas. Diez años de poemas malos. Me llamo Inma, por cierto.»", C: "«Diez años de poesía», dice la mujer. «Mala poesía, para ser precisos. Inma, encantada.»" },
            mood: "neutral", next: "poemas",
          },
          {
            id: "preocupado",
            say: { A: "¿Estás bien? Pareces triste.", B: "¿Estás bien? No quiero molestar, pero te veo un poco triste.", C: "¿Todo bien? Lo pregunto porque tirar cosas a un canal de noche suele tener historia." },
            reply: { A: "La mujer sonríe un poco. «Sí, estoy bien. Solo tiro poemas malos. Soy Inma.»", B: "La mujer sonríe. «Tranquilo, estoy bien. Solo me despido de mis poemas. Soy Inma.»", C: "La mujer sonríe con media boca. «Sí que tiene historia, pero no es trágica. Son poemas. Malos. Soy Inma.»" },
            mood: "smile", next: "poemas",
          },
          {
            id: "humor",
            say: { A: "Oye, los peces no saben leer.", B: "Oye, no creo que los peces aprecien la lectura.", C: "Te advierto que los peces de este canal son un público muy exigente." },
            reply: { A: "La mujer se ríe. «Mejor. Son poemas muy malos. Me llamo Inma.»", B: "La mujer se ríe. «Mejor así: son poemas malísimos. Me llamo Inma.»", C: "La mujer se ríe. «Por eso se los doy a ellos: no pueden opinar. Inma, mucho gusto.»" },
            mood: "smile", next: "poemas",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Le ofreces tu lápiz.", B: "Sacas tu lápiz y se lo ofreces.", C: "Sacas tu lápiz y se lo ofreces como quien entrega una llave." },
            say: { A: "¿Y por qué no escribes uno nuevo? Toma.", B: "Si quieres empezar de cero, empieza ahora. Toma, un lápiz.", C: "Para empezar de cero, hace falta algo con qué empezar. Toma." },
            reply: { A: "La mujer mira el lápiz. «¿Ahora? Bueno… Me llamo Inma.»", B: "La mujer mira el lápiz, sorprendida. «¿Ahora mismo? Qué idea tan rara… Me gusta. Soy Inma.»", C: "La mujer toma el lápiz como si fuera frágil. «Inma. Y esto es lo más poético que me ha pasado en años.»" },
            mood: "smile", next: "escribir",
          },
          libro: {
            act: { A: "Le muestras tu libro.", B: "Le enseñas tu libro, abierto por una página cualquiera.", C: "Le enseñas tu libro con un gesto de complicidad." },
            say: { A: "Este libro también es malo. Y lo publicaron.", B: "Mira, este libro tampoco es muy bueno, y alguien lo publicó.", C: "Este libro es bastante mediocre y, aun así, tiene tapa dura. No te rindas." },
            reply: { A: "La mujer se ríe mucho. «¡Ja! Gracias. Soy Inma.»", B: "La mujer suelta una carcajada. «Eso es lo más consolador que me han dicho. Soy Inma.»", C: "La mujer se ríe a carcajadas. «La esperanza de los mediocres: la tapa dura. Inma, encantada.»" },
            mood: "smile", next: "poemas",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Desconfías y sacas el gas pimienta.", C: "Por si es algo raro, sacas el gas pimienta." },
            say: { A: "¡Eh! ¿Qué tiras al agua?", B: "¡Eh! ¿Qué estás tirando al agua?", C: "¿Qué estás tirando al canal? Prefiero saberlo." },
            reply: { A: "La mujer grita y suelta el cuaderno. «¡Son papeles! ¡Solo papeles!»", B: "La mujer se asusta y deja caer el cuaderno. «¡Son papeles! ¡Poemas! ¡No es nada malo!»", C: "La mujer levanta las manos. «¡Poemas! Malos, sí, ¡pero no merecen gas pimienta!»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Muestras la granada.", B: "Le enseñas la granada, en broma.", C: "Le muestras la granada con una ocurrencia que te parece graciosa." },
            say: { A: "¿Tiro esto al agua también?", B: "¿Tiramos esto también? Ya que estamos…", C: "Si estamos tirando cosas al canal, yo también tengo algo de lo que me quiero despedir." },
            reply: { A: "La mujer se asusta. «¡No! ¡Aléjate de mí!»", B: "La mujer retrocede, blanca. «¡No, no! ¡Eso no es un poema!»", C: "La mujer retrocede. «Eso no es una metáfora, ¿verdad? Dime que es una metáfora.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Se ve tu pistola.", B: "Al acercarte al puente, se ve tu pistola.", C: "Al subir al puente, la pistola asoma bajo tu chaqueta." },
            say: { A: "Hola. ¿Qué haces?", B: "Hola, ¿qué estás haciendo?", C: "Hola. ¿Puedo preguntarte qué haces?" },
            reply: { A: "La mujer abraza el cuaderno. «¡Nada! ¡No hago nada!»", B: "La mujer abraza el cuaderno contra el pecho. «Nada, nada. Ya me voy.»", C: "La mujer aprieta el cuaderno. «Nada que merezca eso, te lo aseguro.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Sacas el cuchillo para ayudar a cortar las hojas.", C: "Sacas el cuchillo: las hojas se le están rompiendo al arrancarlas." },
            say: { A: "¿Corto las hojas? Así es más fácil.", B: "Las estás rompiendo. ¿Quieres que las corte bien?", C: "Si vas a deshacerte de ellos, al menos que sea con un corte limpio." },
            reply: { A: "La mujer se sorprende. Después se ríe. «Bueno. Corta. Soy Inma.»", B: "La mujer duda, luego se ríe. «Qué servicio tan completo. Corta. Me llamo Inma.»", C: "La mujer se ríe, nerviosa. «Una despedida con estilo. Corta. Inma, encantada.»" },
            mood: "surprised", next: "poemas",
          },
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Hola. ¿Me lees uno antes de tirarlo?", B: "Hola. ¿Me lees uno antes de tirarlo? Me encanta la poesía.", C: "Antes de que el canal se los quede todos, ¿me regalas uno en voz alta?" },
            reply: { A: "Inma se ríe. «Son poemas sobre mi gato. Todos. Doscientos poemas.»", B: "Inma se ríe, sonrojada. «Te advierto: todos son sobre mi gato. Doscientos poemas sobre Fermín.»", C: "Inma suelta una risa. «Confesión: los doscientos poemas son sobre mi gato, Fermín. Fue una etapa larga.»" },
            mood: "love", next: "leer",
          },
        },
      },
      poemas: {
        who: "inma", mood: "neutral",
        line: {
          A: "Inma mira el cuaderno. «Escribo desde hace diez años. Todo es malo. Quiero empezar otra vez.»",
          B: "Inma mira el cuaderno, casi vacío. «Llevo diez años escribiendo y no me gusta nada. Quiero empezar de cero.»",
          C: "Inma pasa las pocas hojas que quedan. «Diez años imitando a otros. Quiero empezar de cero y encontrar mi propia voz.»",
        },
        options: [
          {
            id: "leer",
            say: { A: "¿Puedo leer uno?", B: "¿Puedo leer uno antes de que lo tires?", C: "¿Me dejas leer uno? Prometo ser un crítico benévolo." },
            reply: { A: "Inma duda. Después te da una hoja.", B: "Inma duda un momento y luego te da una hoja. «No te rías.»", C: "Inma te tiende una hoja. «Benévolo, has dicho. Lo tengo grabado.»" },
            mood: "worried", next: "leer",
          },
          {
            id: "convencer",
            say: { A: "No los tires todos. Guarda uno, por lo menos.", B: "Yo no los tiraría todos. Guarda uno, para recordar de dónde vienes.", C: "Empezar de cero no obliga a borrar el pasado. Guarda uno, aunque sea para reírte." },
            reply: { A: "Inma mira la última hoja. «¿Cuál? Lee tú y elige.»", B: "Inma mira las últimas hojas. «Bueno… Elige tú. Yo no puedo.»", C: "Inma te tiende las últimas hojas. «Elige tú. Yo ya no soy imparcial.»" },
            mood: "worried", next: "leer",
          },
          {
            id: "respetar",
            say: { A: "Me parece bien. Empezar de nuevo es bueno.", B: "Me parece valiente. Si quieres empezar de cero, adelante.", C: "Me parece un gesto valiente. A veces hay que hacer sitio para lo nuevo." },
            reply: { A: "Inma tira la última hoja. Sonríe. «Ya está.»", B: "Inma tira las últimas hojas y respira hondo. «Ya está. Qué raro, me siento ligera.»", C: "Inma suelta la última hoja y la observa flotar. «Listo. Me siento extrañamente ligera.»" },
            mood: "smile", end: "tira",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Tú tienes cara de poeta.", B: "No sé si tus poemas son malos, pero tienes cara de poeta.", C: "No he leído nada tuyo, pero tienes toda la pinta de escribir cosas que valen la pena." },
            reply: { A: "Inma se ríe. «¿Sí? Mi primer poema fue a los ocho años. Sobre una pizza.»", B: "Inma se ríe. «¿Cara de poeta? Mi primer poema, a los ocho años, era una oda a la pizza.»", C: "Inma se ríe. «Mi carrera empezó a los ocho años con una oda a la pizza. Desde entonces, todo cuesta abajo.»" },
            mood: "love", next: "leer",
          },
        },
      },
      leer: {
        who: "inma", mood: "worried",
        line: {
          A: "Lees la hoja: «La luna es un queso, y yo soy un ratón triste». Inma te mira.",
          B: "Lees en voz baja: «La luna es un queso redondo, y yo, un ratón triste que no llega». Inma espera tu opinión.",
          C: "Lees: «La luna, queso redondo; yo, ratón triste que nunca llega». Inma te observa, conteniendo la respiración.",
        },
        options: [
          {
            id: "honesto",
            say: { A: "Es un poco raro. Pero me gusta el ratón.", B: "Sinceramente, es un poco raro. Pero el ratón triste me encanta.", C: "Te seré sincero: es raro. Pero ese ratón triste tiene algo que me conmueve." },
            reply: { A: "Inma se ríe. «¡El ratón! Bueno, este lo guardo.»", B: "Inma se ríe. «¿El ratón? Bueno, si te gusta el ratón, este se salva.»", C: "Inma se ríe. «El ratón triste, mi alter ego. De acuerdo, indultado.»" },
            mood: "smile", end: "guarda",
          },
          {
            id: "guardar",
            say: { A: "Este no lo tires, por favor. Es bonito.", B: "Por favor, este guárdalo. Es divertido y es tuyo.", C: "Este no se va al agua. Es divertido, es honesto y, sobre todo, es tuyo." },
            reply: { A: "Inma dobla la hoja. «Bueno. Este lo guardo. Por ti.»", B: "Inma dobla la hoja y la guarda en el bolsillo. «Bueno. Por ti, se queda.»", C: "Inma dobla la hoja con cuidado. «Se queda. Pero que conste que lo hago por el ratón.»" },
            mood: "smile", end: "guarda",
          },
          {
            id: "nuevo",
            say: { A: "¿Escribimos uno nuevo ahora? Juntos.", B: "¿Y si escribimos uno nuevo ahora, entre los dos?", C: "Te propongo algo mejor: escribamos el primero de la nueva etapa ahora mismo." },
            reply: { A: "Inma abre el cuaderno. Queda una hoja en blanco. «Bueno. ¿Empezamos?»", B: "Inma abre el cuaderno por la última hoja en blanco. «Bueno, ¿por qué no?»", C: "Inma busca la última hoja en blanco. «La primera de la nueva etapa. Qué presión.»" },
            mood: "smile", next: "escribir",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Es muy tierno. Como tú.", B: "Es tierno y un poco triste. Me gusta mucho.", C: "Tiene una ternura que no se aprende. No lo tires, por favor." },
            reply: { A: "Inma se emociona. «Es del día que conocí a mi gato.» Lo guarda.", B: "Inma se emociona. «Es de la noche que adopté a Fermín. Se escondía como un ratón.» Lo guarda.", C: "Inma se queda callada. «Nació la noche que adopté a Fermín. Él era el ratón, no yo.» Lo guarda en el pecho." },
            mood: "love", end: "guarda",
          },
        },
      },
      escribir: {
        who: "inma", mood: "smile",
        line: {
          A: "Inma tiene una hoja en blanco. «Bueno. La primera línea. ¿Qué escribo?»",
          B: "Inma apoya la hoja en blanco en la baranda. «Bueno. Primera línea de mi nueva vida. ¿Qué pongo?»",
          C: "Inma apoya la hoja en la baranda del puente. «Primera línea. Sin gatos, sin lunas, sin ratones. ¿Qué pongo?»",
        },
        options: [
          {
            id: "canal",
            say: { A: "Escribe sobre el canal. Y las luces en el agua.", B: "Escribe sobre lo que ves: el canal, las farolas reflejadas en el agua.", C: "Escribe sobre lo que tienes delante: las farolas temblando en el agua." },
            reply: { A: "Inma escribe. «Las luces se lavan la cara en el canal.» Sonríe.", B: "Inma escribe y lee: «Las farolas se lavan la cara en el canal». Te mira, feliz.", C: "Inma escribe y lee en voz alta: «Las farolas se lavan la cara en el canal». Se le escapa una sonrisa." },
            mood: "love", end: "nuevo",
          },
          {
            id: "noche",
            say: { A: "Escribe sobre esta noche. Sobre empezar.", B: "Escribe sobre esta noche: tirar papeles y empezar otra vez.", C: "Escribe sobre esto mismo: alguien que tira diez años al agua y se queda con una hoja en blanco." },
            reply: { A: "Inma escribe: «Esta noche el agua se lleva mis palabras viejas». Sonríe.", B: "Inma escribe: «Esta noche el canal se lleva mis palabras viejas». Te mira. «Es bueno, ¿no?»", C: "Inma escribe: «El canal se lleva diez años y me devuelve una hoja en blanco». Se queda muda." },
            mood: "love", end: "nuevo",
          },
          {
            id: "manana",
            say: { A: "Mejor mañana. Hoy ya es tarde.", B: "¿Y si lo dejas para mañana? Ahora estás cansada.", C: "Quizá la primera línea merezca una mañana con café, no una noche con viento." },
            reply: { A: "Inma guarda la hoja. «Tienes razón. Mañana.» Se va a casa.", B: "Inma guarda la hoja en blanco. «Tienes razón. Mañana, con café.» Se despide.", C: "Inma guarda la hoja. «Una mañana con café. Eso ya es casi un verso.» Y se despide." },
            mood: "smile", end: "manana",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Escribe lo que sientes ahora.", B: "Escribe lo que sientes ahora mismo. Sin pensar.", C: "Escribe lo primero que sientas, sin juzgarlo. Solo esta vez." },
            reply: { A: "Inma escribe: «Un desconocido me dio un lápiz». Se ríe. «Es verdad.»", B: "Inma escribe y se ríe: «Un desconocido en un puente me devolvió las ganas». Te mira.", C: "Inma escribe sin pensar y se sonroja: «En el puente, un desconocido me prestó un comienzo»." },
            mood: "love", end: "nuevo",
          },
        },
      },
      calmar: {
        who: "inma", mood: "scared",
        line: {
          A: "Inma tiene miedo. Abraza el cuaderno y no se mueve.",
          B: "Inma abraza el cuaderno y se pega a la baranda. Mira a ambos lados del puente.",
          C: "Inma se aferra al cuaderno y calcula la distancia hasta el final del puente.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Solo quiero hablar.", B: "Perdóname, lo guardo ya. Solo me dio curiosidad lo que tirabas.", C: "Perdona, fue una pésima manera de empezar una conversación. Lo guardo." },
            reply: { A: "Inma respira. «Bueno… Son poemas. Míos. Soy Inma.»", B: "Inma respira hondo. «Bueno… Son poemas. Mis poemas malos. Soy Inma.»", C: "«Pésima es poco», dice Inma, y respira. «Son poemas. Míos. Inma, por cierto.»" },
            mood: "worried", next: "poemas",
          },
          {
            id: "broma",
            say: { A: "Era una broma. No pasa nada.", B: "Era broma, mujer. No pasa nada.", C: "Era una broma. Tienes que relajarte un poco." },
            reply: { A: "Inma no se ríe. Se va corriendo del puente.", B: "Inma no se ríe. Se aleja corriendo con el cuaderno en el pecho.", C: "A Inma no le hace ninguna gracia. Se aleja corriendo con el cuaderno en el pecho." },
            mood: "scared", end: "corre",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdona el susto. Me voy.", C: "Perdón por la interrupción. Me voy." },
            reply: { A: "Inma no dice nada. Se va rápido.", B: "Inma no contesta. Se va del puente a toda prisa.", C: "Inma no espera a que te vayas: se va ella primero, deprisa." },
            mood: "scared", end: "corre",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Perdón. Fue un error. Me gustan los poemas.", B: "Perdóname, fue un error. En realidad me encanta la poesía.", C: "Perdón. He empezado fatal, pero te juro que lo mío es la poesía, no el miedo." },
            reply: { A: "Inma sonríe un poco. «¿Sí? Bueno… Mira, son poemas. Soy Inma.»", B: "Inma sonríe a medias. «¿Te gusta la poesía? Pues mira: estos son malos. Soy Inma.»", C: "Inma afloja un poco. «Un amante de la poesía con métodos raros. Bueno. Soy Inma.»" },
            mood: "love", next: "poemas",
          },
        },
      },
      "cuchillo-inicio": {
        who: "inma", mood: "terror",
        line: {
          A: "Inma ve tu cuchillo y deja caer el cuaderno. Retrocede en el puente. «¡¿Qué haces con ese cuchillo?! ¡No te acerques! ¡Llamo a la policía!»",
          B: "Inma ve el cuchillo, suelta el cuaderno y retrocede hasta la baranda. «¡¿Qué haces con un cuchillo en el puente?! ¡Ni un paso más o llamo a la policía!»",
          C: "Inma ve el cuchillo y el cuaderno se le escapa de las manos. Se pega a la baranda. «¿Estás loco? ¿Un cuchillo, de noche, en un puente? Un paso más y llamo a la policía.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas el cuchillo.", B: "Guardas el cuchillo despacio y levantas las manos.", C: "Guardas el cuchillo despacio y le enseñas las palmas." },
            say: { A: "Perdón. Ya está guardado. No te voy a hacer nada.", B: "Perdona, ya lo guardé. No pienso hacerte nada, lo juro.", C: "Perdóname: ya está guardado. No he venido a hacerte daño; solo me intrigaban tus papeles." },
            reply: { A: "Inma respira. «Casi tiro también el cuaderno… y a mí. Me llamo Inma.»", B: "Inma respira hondo. «Pensé que me tiraba yo al agua, no los poemas. Me llamo Inma.»", C: "Inma recupera el aliento. «Un poco más y los poemas habrían sido lo de menos. Inma, mucho gusto, supongo.»" },
            mood: "scared", next: "cuchillo-hojas",
          },
          {
            id: "cortar",
            say: { A: "Es para cortar la cuerda del cuaderno. Mira, está atada.", B: "Es para cortar la cuerda de tu cuaderno, mira, se te enredó en la baranda.", C: "Solo pretendía cortar el cordel de tu cuaderno, que se te enredó en la baranda. Qué mala idea sacarlo así." },
            reply: { A: "Inma mira la cuerda. «Ah. Sí. Pero guarda eso, por favor.»", B: "Inma mira el cordel enredado y, poco a poco, baja los hombros. «Ah, era eso. Pues guárdalo ya.»", C: "Inma mira el cordel y suspira. «Ah. Eso sí tiene lógica. Guárdalo ya, que me tiemblan las piernas.»" },
            mood: "worried", next: "cuchillo-hojas",
          },
          {
            id: "broma",
            say: { A: "¿La policía? Solo es un cuchillo. Qué miedosa.", B: "¿Policía por un cuchillo? Qué dramática eres.", C: "¿Policía por un cuchillo? Qué dramatismo, y eso que la poeta eres tú." },
            reply: { A: "Inma llama. «¿Policía? Un hombre con un cuchillo en el puente de la Costanera.»", B: "Inma marca sin pestañear. «¿Policía? Hay un hombre con un cuchillo en el puente de la Costanera.»", C: "Inma marca con una frialdad poética. «¿Policía? Un hombre armado con un cuchillo, en el puente de la Costanera.»" },
            mood: "furious", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-hojas": {
        who: "inma", mood: "worried",
        line: {
          A: "Inma recoge el cuaderno con manos temblorosas. «Mis poemas eran malos. Pero esto fue peor. ¿Qué querías?»",
          B: "Inma recoge el cuaderno con las manos temblando. «Mis poemas eran malos, pero esto ha sido peor. ¿Qué querías de mí?»",
          C: "Inma recoge el cuaderno con manos temblorosas. «Mis poemas eran un desastre, pero el susto los supera. ¿Qué querías, exactamente?»",
        },
        options: [
          {
            id: "leer",
            say: { A: "Leer un poema, nada más. Con las manos a la vista.", B: "Leer uno de tus poemas, nada más. Con las manos a la vista y el cuchillo lejos.", C: "Leer uno de tus poemas, nada más. Con las manos a la vista y el cuchillo bien lejos." },
            reply: { A: "Inma duda, pero te da una hoja. «Uno. Y lejos.»", B: "Inma duda un buen rato, pero te pasa una hoja. «Uno solo. Y desde esa distancia.»", C: "Inma duda, pero al final te alcanza una hoja a distancia de brazo. «Uno solo, y desde allí.»" },
            mood: "worried", end: "guarda",
          },
          {
            id: "tirar",
            say: { A: "Tira tus poemas. Yo tiro el cuchillo. Juntos.", B: "Tú tira tus poemas y yo tiro el cuchillo. Los dos al canal.", C: "Hagamos un trato: tú tiras tus poemas y yo mi cuchillo. Los dos al canal, por empezar de nuevo." },
            reply: { A: "Inma sonríe un poco. Tiran las dos cosas. ¡Plof! ¡Plof!", B: "Inma sonríe, sorprendida. Tiran las dos cosas a la vez. ¡Plof! ¡Plof!", C: "Inma esboza una sonrisa. Lanzan las dos cosas a la vez. ¡Plof! ¡Plof!, y el canal las traga." },
            mood: "smile", end: "cuchillo-trato",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Perdón por el susto.", B: "Mejor me voy. Perdona por el susto, de verdad.", C: "Lo mejor es que me vaya. Perdona el susto, no era mi intención." },
            reply: { A: "Inma no contesta. Se queda mirando el cuchillo que ya no ves.", B: "Inma no contesta. Se queda mirando el bolsillo donde guardaste el cuchillo.", C: "Inma no responde. Se queda con la mirada fija en el bolsillo donde desapareció el cuchillo." },
            mood: "sad", end: "corre",
          },
        ],
      },
      "pistola-inicio": {
        who: "inma", mood: "terror",
        line: {
          A: "Inma ve tu pistola y levanta las manos. Las hojas caen al agua. «No, por favor. No tengo nada. Solo poemas.»",
          B: "Inma ve la pistola, levanta las manos y las hojas se le escapan al viento. «No, por favor. No tengo nada de valor. Solo poemas malos.»",
          C: "Inma ve la pistola y alza las manos; las hojas que sostenía se van volando. «Por favor. No tengo dinero, solo diez años de poemas que ni yo quiero.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas la pistola.", B: "Guardas la pistola enseguida.", C: "Guardas la pistola de inmediato, abochornado." },
            say: { A: "Perdón. No es un robo. Baja las manos.", B: "Perdona, no es un robo. Baja las manos, por favor.", C: "Perdona, no es un asalto. Baja las manos, te lo ruego." },
            reply: { A: "Inma baja las manos despacio. «¿Y por qué llevas un arma? Me llamo Inma.»", B: "Inma baja las manos despacio, sin dejar de mirarte. «¿Por qué llevas un arma a un puente? Soy Inma.»", C: "Inma baja las manos con cautela. «¿Y se puede saber por qué paseas con un arma? Inma, por cierto.»" },
            mood: "scared", next: "pistola-hojas",
          },
          {
            id: "robo",
            say: { A: "No quiero tu dinero. Quiero un poema.", B: "No quiero tu dinero. Lo único que quiero es uno de tus poemas.", C: "No quiero tu dinero ni tu bolso: quiero un poema, el que menos te guste." },
            reply: { A: "Inma casi se ríe de miedo. «¿Un poema? ¿Con una pistola? ¡Toma, toma!»", B: "Inma suelta una risa de puro nervio. «¿Un poema, con una pistola? ¡Toma, toma el cuaderno entero!»", C: "Inma ríe de puro pánico. «¿Un poema a punta de pistola? Es el elogio más raro que he recibido. ¡Toma el cuaderno!»" },
            mood: "terror", next: "pistola-hojas",
          },
          {
            id: "huir",
            say: { A: "Tú tira todo al agua. Rápido. Y vete.", B: "Tira todo al agua. Rápido. Y vete de aquí.", C: "Tira todo al canal. Rápido. Y desaparece de mi vista." },
            reply: { A: "Inma tira el cuaderno y corre llorando por el puente. «¡Socorro!»", B: "Inma lanza el cuaderno y sale corriendo, llorando, por el puente. «¡Socorro!»", C: "Inma lanza el cuaderno al agua y echa a correr llorando por el puente. «¡Socorro, por favor!»" },
            mood: "terror", end: "pistola-corre",
          },
        ],
      },
      "pistola-hojas": {
        who: "inma", mood: "scared",
        line: {
          A: "Inma tiembla. Las hojas flotan en el agua. «Mis poemas… ya no puedo salvarlos. ¿Qué haces con esa pistola?»",
          B: "Inma tiembla mirando el canal, donde flotan sus hojas. «Mis poemas… ya no se pueden salvar. ¿Y tú qué haces con esa pistola?»",
          C: "Inma tiembla mientras sus hojas se alejan sobre el agua. «Mis poemas se van y yo estoy aquí hablando con un hombre armado. ¿Qué pretendes?»",
        },
        options: [
          {
            id: "policia",
            say: { A: "Si quieres, llama a la policía. Yo espero aquí.", B: "Si quieres, llama a la policía. Yo espero aquí, con las manos a la vista.", C: "Si quieres, llama a la policía. Me quedo aquí, con las manos a la vista, hasta que lleguen." },
            reply: { A: "Inma llama. Una patrulla llega pronto.", B: "Inma llama sin dudar. Una patrulla llega en pocos minutos.", C: "Inma marca de inmediato. En pocos minutos, una patrulla ilumina el puente de azul." },
            mood: "worried", end: "pistola-policia",
          },
          {
            id: "poema",
            say: { A: "Escribe uno nuevo. Aquí. Con calma. La pistola ya no está.", B: "Escribe uno nuevo, aquí, con calma. La pistola ya no está.", C: "Escribe uno nuevo ahora, con calma. Te prometo que la pistola no vuelve a salir." },
            reply: { A: "Inma lo piensa. Saca una hoja. Escribe: «Hoy tuve miedo.»", B: "Inma lo piensa, saca una hoja del bolsillo y escribe: «Hoy tuve miedo.»", C: "Inma lo medita, saca una última hoja y escribe con mano temblorosa: «Hoy tuve miedo. Y sigo escribiendo.»" },
            mood: "worried", end: "pistola-poema",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdóname. Me voy.", C: "Te pido perdón y me voy." },
            reply: { A: "Inma se queda sola. Mira las hojas en el agua. Llora.", B: "Inma se queda sola en el puente, mirando las hojas que se alejan. Llora.", C: "Inma se queda sola en el puente, viendo alejarse las hojas. Llora, y ya no sabes por qué cosa." },
            mood: "sad", end: "corre",
          },
        ],
      },
      "granada-inicio": {
        who: "inma", mood: "terror",
        line: {
          A: "Inma ve tu granada y grita. «¡¡Una granada!!» Tira el cuaderno entero. La gente del puente corre.",
          B: "Inma ve la granada y grita con todas sus fuerzas. «¡¡Una granada!!» Lanza el cuaderno al aire y la gente del puente echa a correr.",
          C: "Inma ve la granada y su grito cruza el canal. «¡¡Una granada!!» El cuaderno sale volando y los pocos transeúntes del puente salen disparados.",
        },
        options: [
          {
            id: "falsa",
            say: { A: "¡Es falsa! ¡Es un llavero! ¡Tranquila!", B: "¡Es falsa, es un llavero! ¡Tranquila, no pasa nada!", C: "¡Es falsa, un llavero de utilería! ¡Tranquila, nadie va a morir esta noche!" },
            reply: { A: "Inma, escondida detrás de una farola, grita: «¿Un llavero? ¿De verdad?»", B: "Inma, parapetada tras una farola, grita: «¿Un llavero? ¿Y por qué sacas una granada?»", C: "Inma, atrincherada tras una farola, grita: «¿Un llavero? ¿Y se puede saber por qué lo exhibes en un puente?»" },
            mood: "scared", next: "granada-farola",
          },
          {
            id: "poema",
            say: { A: "¿Y tus poemas? ¡Se van al agua!", B: "¿Y tus poemas? ¡Se están yendo todos al canal!", C: "¿Y tus poemas? Se están yendo todos al canal, por si te importaba." },
            reply: { A: "Inma duda entre huir y salvar el cuaderno. Mira la granada. Corre.", B: "Inma duda entre salvar el cuaderno y salvarse a sí misma. Mira la granada. Corre.", C: "Inma duda un segundo entre su obra y su vida. Mira la granada. Elige la vida y corre." },
            mood: "terror", end: "granada-evacuacion",
          },
          {
            id: "verdad",
            say: { A: "Es de verdad. Pero no pasa nada si no la tocas.", B: "Es de verdad, sí. Pero no pasa nada mientras nadie la toque.", C: "Es de verdad, sí. Perfectamente segura, siempre que nadie la toque. Probablemente." },
            reply: { A: "Inma grita más fuerte. Llama a la policía mientras corre.", B: "Inma grita más fuerte todavía y llama a la policía mientras corre.", C: "Inma lanza un grito que despierta a medio barrio y llama a la policía mientras corre." },
            mood: "terror", end: "granada-evacuacion",
          },
        ],
      },
      "granada-farola": {
        who: "inma", mood: "scared",
        line: {
          A: "Inma asoma la cabeza. «Si es un llavero, tíralo al agua con mis poemas. Así me quedo tranquila.»",
          B: "Inma asoma la cabeza con prudencia. «Si es un llavero, tíralo al agua junto con mis poemas. Así me quedo tranquila.»",
          C: "Inma asoma apenas la cabeza. «Si de verdad es un llavero, tíralo al canal con mis poemas. Que se vayan juntos y yo respiro.»",
        },
        options: [
          {
            id: "tirar",
            act: { A: "Tiras la granada al agua.", B: "Lanzas la granada al canal.", C: "Lanzas la granada al canal con solemnidad." },
            say: { A: "Listo. Al agua. Con tus poemas.", B: "Listo, al agua, con tus poemas.", C: "Hecho: al agua, con todos tus poemas y mis malas ideas." },
            reply: { A: "¡Plof! Inma sale de la farola. Se ríe entre lágrimas.", B: "¡Plof! Inma sale de detrás de la farola y se ríe entre lágrimas.", C: "¡Plof! Inma sale de su escondite y se ríe, entre aliviada y furiosa." },
            mood: "laugh", end: "granada-agua",
          },
          {
            id: "no",
            say: { A: "No. Me la quedo. Es mía.", B: "No, me la quedo. Es mía y la quiero.", C: "No, me la quedo. Es mía y le tengo cariño." },
            reply: { A: "Inma marca el celular. «¿Policía? Puente de la Costanera. Una granada.»", B: "Inma marca el celular sin salir de la farola. «¿Policía? Puente de la Costanera. Hay un hombre con una granada.»", C: "Inma marca sin salir de la farola. «¿Policía? Puente de la Costanera. Un hombre con una granada que le tiene cariño.»" },
            mood: "furious", end: "granada-patrulla",
          },
          {
            id: "poema",
            say: { A: "Trato: yo tiro la granada, tú escribes un poema sobre esto.", B: "Trato: yo tiro la granada y tú escribes un poema sobre esta noche.", C: "Trato: yo tiro la granada y tú escribes el poema que esta noche merece." },
            reply: { A: "Inma sonríe. «Trato.» Tiras la granada. Inma saca una hoja.", B: "Inma sonríe, vencida. «Trato.» Tiras la granada al canal y ella saca una hoja del bolsillo.", C: "Inma sonríe, vencida. «Trato hecho.» Lanzas la granada y ella saca de inmediato una hoja en blanco." },
            mood: "smile", end: "granada-poema",
          },
        ],
      },
      "gas-inicio": {
        who: "inma", mood: "scared",
        line: {
          A: "Inma ve tu gas pimienta y se aleja. «No lo uses. Por favor. Solo estoy tirando papeles. No soy peligrosa.»",
          B: "Inma ve el gas pimienta y da un paso atrás con el cuaderno en alto. «No lo uses, por favor. Solo estoy tirando papeles al canal. No soy peligrosa.»",
          C: "Inma ve el bote de gas pimienta y se protege con el cuaderno. «No lo uses, te lo ruego. Solo tiro papeles al canal; mi nivel de peligrosidad es literario.»",
        },
        options: [
          {
            id: "guardar",
            act: { A: "Guardas el gas.", B: "Guardas el gas pimienta en el bolsillo.", C: "Guardas el gas pimienta en el fondo del bolsillo." },
            say: { A: "Perdón. Es costumbre. De noche lo llevo siempre.", B: "Perdona, es costumbre. De noche lo llevo siempre encima.", C: "Perdona, es una costumbre nocturna. Uno no sabe quién anda por los puentes." },
            reply: { A: "Inma baja el cuaderno. «Yo no tengo gas. Tengo poemas. Es peor. Me llamo Inma.»", B: "Inma baja el cuaderno. «Yo no llevo gas, llevo poemas. Es mucho peor. Me llamo Inma.»", C: "Inma baja el cuaderno. «Yo me defiendo con versos, que son más lentos y hacen más daño. Inma, encantada.»" },
            mood: "smile", next: "gas-prevencion",
          },
          {
            id: "peligro",
            say: { A: "Hay peligro en la noche. Mejor tener esto.", B: "De noche hay peligro por todos lados. Mejor llevar esto.", C: "De noche el peligro está por todas partes, hasta en los puentes. Mejor ir preparado." },
            reply: { A: "Inma mira a ambos lados. «Sí… tal vez. Soy Inma. Y tengo miedo ahora.»", B: "Inma mira a ambos lados del puente. «Pues ahora, con tanto aviso, me das más miedo. Soy Inma.»", C: "Inma mira a un lado y a otro. «Con esa advertencia, ahora tengo miedo de todo. Inma, por cierto.»" },
            mood: "scared", next: "gas-prevencion",
          },
          {
            id: "usar",
            say: { A: "Si te acercas, lo uso. Quédate allí.", B: "Si te acercas un paso más, lo uso. Quédate allí.", C: "Un paso más y lo uso. Quédate donde estás." },
            reply: { A: "Inma tira el cuaderno al agua y corre. «¡No me acerco, no me acerco!»", B: "Inma suelta el cuaderno al agua y sale corriendo. «¡No me acerco, no me acerco!»", C: "Inma suelta el cuaderno y huye por el puente. «¡Ni me acerco ni vuelvo!»" },
            mood: "terror", end: "corre",
          },
        ],
      },
      "gas-prevencion": {
        who: "inma", mood: "worried",
        line: {
          A: "Inma mira el bote en tu bolsillo. «Una vez, un chico me siguió por aquí. Desde entonces tengo un silbato.»",
          B: "Inma mira el bolsillo donde guardaste el bote. «Una vez un chico me siguió por este puente. Desde entonces llevo un silbato en el bolso.»",
          C: "Inma mira el bolsillo donde guardaste el bote. «Una vez un hombre me siguió por este mismo puente. Desde entonces llevo un silbato, que es menos eficaz pero más ruidoso.»",
        },
        options: [
          {
            id: "silbato",
            say: { A: "Buena idea. ¿Me enseñas? Yo pruebo.", B: "Buena idea el silbato. ¿Me dejas probarlo?", C: "Buena idea, el silbato. ¿Me permites probarlo, por si algún día lo necesito?" },
            reply: { A: "Inma lo saca. Tú soplas. ¡PIIIII! Los patos vuelan. Ella se ríe.", B: "Inma saca el silbato. Soplas. ¡PIIIII! Los patos salen volando y ella se ríe.", C: "Inma saca el silbato. Soplas. ¡PIIIII! Los patos despegan en bloque y ella se ríe como no lo hacía en años." },
            mood: "laugh", end: "gas-silbato",
          },
          {
            id: "poemas",
            say: { A: "Con gas o sin gas, tus poemas merecen una oportunidad.", B: "Con gas o sin gas, creo que tus poemas merecen una oportunidad.", C: "Con gas o sin gas, tus poemas merecen una segunda lectura antes de ir al canal." },
            reply: { A: "Inma guarda tres hojas. «Está bien. Tres. No más.»", B: "Inma guarda tres hojas en el bolsillo. «Está bien. Tres, y ni una más.»", C: "Inma rescata tres hojas y se las guarda. «Tres. No negocio más, que tengo mi orgullo.»" },
            mood: "smile", end: "guarda",
          },
          {
            id: "irse",
            say: { A: "Cuídate. Voy a seguir caminando.", B: "Cuídate mucho. Voy a seguir mi camino.", C: "Cuídate. Sigo mi camino, que los puentes de noche piden prisa." },
            reply: { A: "Inma asiente. Tira el cuaderno al agua. Se va tranquila.", B: "Inma asiente, tira el cuaderno al agua y se va, tranquila.", C: "Inma asiente, lanza el cuaderno al canal y se va, ligera de equipaje." },
            mood: "neutral", end: "gas-adios",
          },
        ],
      },
      "lapiz-inicio": {
        who: "inma", mood: "surprised",
        line: {
          A: "Inma ve tu lápiz. Se detiene. «¿Escribes? Yo escribía. Ahora tiro. ¿Quieres escribir tú? Hay una hoja.»",
          B: "Inma ve el lápiz en tu mano y se detiene con una hoja a medio soltar. «¿Escribes? Yo escribía. Ahora tiro. ¿Quieres probar tú? Todavía queda una hoja.»",
          C: "Inma repara en tu lápiz y deja una hoja suspendida sobre el agua. «¿Escribes? Yo escribía, y ahora me dedico a la poesía arrojadiza. ¿Quieres probar tú? Queda una hoja en blanco.»",
        },
        options: [
          {
            id: "escribir",
            act: { A: "Tomas la hoja y escribes.", B: "Tomas la hoja en blanco y escribes unas líneas.", C: "Tomas la hoja en blanco y escribes unas líneas, apoyado en la baranda." },
            say: { A: "Escribo: «El canal se lleva todo, pero no mi lápiz».", B: "Escribo: «El canal se lleva todo menos lo que todavía quiero escribir».", C: "Escribo: «El canal se lo lleva todo, menos lo que todavía queda por decir»." },
            reply: { A: "Inma lee. Se emociona. «No es malo. Soy Inma. Escribe otra.»", B: "Inma lee tus líneas y se emociona. «No está mal para un desconocido. Soy Inma. Escribe otra.»", C: "Inma lee, con la barbilla temblando. «Para ser de un desconocido, no está nada mal. Inma. Escribe otra, anda.»" },
            mood: "smile", next: "lapiz-versos",
          },
          {
            id: "corregir",
            act: { A: "Corriges una palabra de su poema.", B: "Corriges una palabra en uno de sus poemas.", C: "Corriges con tu lápiz una palabra en uno de sus poemas." },
            say: { A: "Cambia esta palabra. Y queda mejor.", B: "Cambia esta palabra por esta otra y mejora mucho.", C: "Si cambias esta palabra por esta otra, el verso respira mejor." },
            reply: { A: "Inma mira el cambio. «Es verdad. Qué raro. Soy Inma.»", B: "Inma mira el cambio. «Es verdad, queda mejor. Qué raro que no lo viera. Soy Inma.»", C: "Inma estudia el cambio. «Es cierto, queda mejor. Diez años y no lo vi. Soy Inma.»" },
            mood: "surprised", next: "lapiz-versos",
          },
          {
            id: "firmar",
            act: { A: "Le pides que firme una hoja.", B: "Le pides que firme una hoja con tu lápiz.", C: "Le pides, con tu lápiz, que firme una hoja antes de tirarla." },
            say: { A: "Firma esta hoja. Antes de tirarla. Para recordarla.", B: "Firma esta hoja antes de tirarla. Así queda constancia de que existió.", C: "Firma esta hoja antes de tirarla; así quedará constancia de que alguna vez existió." },
            reply: { A: "Inma firma, divertida. «Inma Soler». Tira la hoja firmada.", B: "Inma firma, divertida. «Inma Soler». Luego tira la hoja firmada al canal.", C: "Inma firma con floritura. «Inma Soler, poeta fallida». Y la hoja firmada se va al agua." },
            mood: "smile", end: "lapiz-firma",
          },
        ],
      },
      "lapiz-versos": {
        who: "inma", mood: "smile",
        line: {
          A: "Inma saca más hojas. «Hacemos un poema juntos. Tú una línea. Yo otra. ¿Empiezas?»",
          B: "Inma saca más hojas del cuaderno. «Hagamos un poema entre los dos: una línea tú, otra yo. ¿Empiezas?»",
          C: "Inma saca más hojas del cuaderno. «Un poema a cuatro manos: una línea tú, otra yo, sin censura. ¿Empiezas tú?»",
        },
        options: [
          {
            id: "luna",
            say: { A: "«La luna es un queso…» No, otra: «La luna es un espejo roto».", B: "«La luna es un queso…» No, mejor: «La luna es un espejo roto en el agua».", C: "«La luna es un queso…» No, retiro eso: «La luna es un espejo que el canal parte en pedazos»." },
            reply: { A: "Inma escribe: «Y yo, un pez que no se atreve.» Se ríen.", B: "Inma escribe debajo: «Y yo, un pez que no se atreve a saltar.» Se ríen.", C: "Inma escribe a continuación: «Y yo, un pez con vértigo de superficie.» Se ríen los dos." },
            mood: "love", end: "lapiz-poema",
          },
          {
            id: "manana",
            say: { A: "Mejor lo terminamos mañana. Con café.", B: "Mejor lo terminamos mañana, con un café.", C: "Mejor lo dejamos a medias: los poemas buenos se terminan mañana, con café." },
            reply: { A: "Inma guarda la hoja. «Mañana. Aquí. A las ocho.»", B: "Inma guarda la hoja en el bolsillo. «Mañana, aquí, a las ocho. Trato hecho.»", C: "Inma dobla la hoja con cuidado. «Mañana, aquí, a las ocho. Y no me falles, que tengo versos pendientes.»" },
            mood: "smile", end: "manana",
          },
          {
            id: "tirar",
            say: { A: "Tiramos este al agua. Juntos. Es nuestro.", B: "Este lo tiramos al agua juntos. Es nuestro y se lo regalamos al canal.", C: "Este sí lo tiramos al canal, juntos: un poema compartido es mejor ofrenda que uno solitario." },
            reply: { A: "Inma lo besa y lo tira. ¡Plaf! Sonríe mucho.", B: "Inma besa la hoja y la lanza. La hoja flota un rato y se va. Inma sonríe.", C: "Inma besa la hoja y la suelta. Flota, gira, se aleja. Inma sonríe como quien por fin suelta algo." },
            mood: "love", end: "tira",
          },
        ],
      },
      "libro-inicio": {
        who: "inma", mood: "surprised",
        line: {
          A: "Inma ve tu libro y se queda quieta. «¡Ese libro! Es de poesía. Es mi poeta favorito. ¿Lo estás leyendo?»",
          B: "Inma ve tu libro y se queda inmóvil. «¡Ese libro! Es de poesía, y es de mi poeta favorito. ¿Lo estás leyendo?»",
          C: "Inma ve tu libro y se queda petrificada, con una hoja en el aire. «¡Ese libro! Es de mi poeta favorito, el que me hizo empezar a escribir. ¿Lo estás leyendo?»",
        },
        options: [
          {
            id: "leer",
            act: { A: "Abres el libro y lees un verso.", B: "Abres el libro al azar y lees un verso en voz alta.", C: "Abres el libro al azar y lees un verso en voz alta, sin pretensiones." },
            say: { A: "Escucha: «Escribir es salvar lo que el agua se lleva».", B: "Escucha esto: «Escribir es salvar lo que el agua se lleva».", C: "Escucha: «Escribir es salvar del agua lo que el agua ya se llevaba»." },
            reply: { A: "Inma se queda callada. Mira el cuaderno. Mira el agua. «Qué casualidad.»", B: "Inma se queda callada. Mira el cuaderno, luego el agua. «Qué casualidad tan cruel. Me llamo Inma.»", C: "Inma se queda muda. Mira el cuaderno, luego el canal. «Qué casualidad tan despiadada. Inma, mucho gusto.»" },
            mood: "surprised", next: "libro-verso",
          },
          {
            id: "regalar",
            act: { A: "Le das el libro.", B: "Le ofreces el libro.", C: "Le tiendes el libro con ambas manos." },
            say: { A: "Es tuyo. Léelo antes de tirar más poemas.", B: "Es tuyo. Léelo antes de tirar ningún otro poema.", C: "Es tuyo. Léelo antes de entregarle al canal ni un poema más." },
            reply: { A: "Inma acepta el libro. Le brillan los ojos. «No sé qué decir. Soy Inma.»", B: "Inma acepta el libro con ambas manos. Le brillan los ojos. «No sé qué decir. Soy Inma.»", C: "Inma recibe el libro como si fuera frágil. Le brillan los ojos. «No sé qué decir. Inma, y gracias.»" },
            mood: "love", end: "libro-regalo",
          },
          {
            id: "mio",
            say: { A: "No, es mío. Pero puedes mirar la portada.", B: "Es mío, pero puedes mirar la portada y la dedicatoria.", C: "Es mío y no lo presto, pero puedes mirar la portada y la dedicatoria." },
            reply: { A: "Inma mira la portada. Suspira. «Qué suerte tienes.»", B: "Inma mira la portada, suspira. «Qué suerte tienes. Soy Inma.»", C: "Inma contempla la portada, suspira. «Tienes más suerte de la que mereces. Inma.»" },
            mood: "sad", next: "libro-verso",
          },
        ],
      },
      "libro-verso": {
        who: "inma", mood: "worried",
        line: {
          A: "Inma mira sus hojas. «Quería ser como ese poeta. Pero no puedo. Por eso las tiro.»",
          B: "Inma mira sus hojas con tristeza. «Yo quería ser como ese poeta, pero no me sale. Por eso las tiro.»",
          C: "Inma mira sus hojas con una tristeza elegante. «Quería ser como ese poeta, y nunca me salió ni una página. Por eso las tiro.»",
        },
        options: [
          {
            id: "poeta",
            say: { A: "Ese poeta también escribió cosas malas. Mira, aquí: ¡malísimo!", B: "Ese poeta también escribió cosas malas. Mira esta página, es malísima.", C: "Ese poeta también tiene páginas flojas. Mira esta: malísima, y la publicaron." },
            reply: { A: "Inma se ríe fuerte. «¡Es horrible! ¡Y es mi favorito!» Guarda sus hojas.", B: "Inma se ríe con ganas. «¡Es horrible! ¡Y es mi favorito!» Se guarda las hojas en el bolso.", C: "Inma se ríe a carcajadas. «¡Es espantosa! Y aun así me consuela.» Guarda las hojas en el bolso." },
            mood: "laugh", end: "libro-poeta",
          },
          {
            id: "dedicatoria",
            act: { A: "Escribes una dedicatoria en el libro.", B: "Escribes una dedicatoria para ella en la primera página.", C: "Escribes en la primera página una dedicatoria para ella." },
            say: { A: "Para Inma: sigue escribiendo.", B: "«Para Inma, que escribe mejor de lo que cree.»", C: "«Para Inma, que escribe mejor de lo que cree y peor de lo que merece.»" },
            reply: { A: "Inma lee. Llora. Abraza el libro. «Gracias.»", B: "Inma lee la dedicatoria y llora. Abraza el libro. «Gracias, de verdad.»", C: "Inma lee, se le quiebra la voz y abraza el libro. «Gracias. No sabes cuánto.»" },
            mood: "love", end: "libro-regalo",
          },
          {
            id: "tirar",
            say: { A: "Tíralos, si quieres. Escribe otros mañana.", B: "Si quieres tirarlos, hazlo. Mañana escribes otros mejores.", C: "Si necesitas tirarlos, hazlo. Mañana escribirás otros, y esos nadie podrá tirarlos por ti." },
            reply: { A: "Inma tira el cuaderno. ¡Plof! Se va tranquila.", B: "Inma tira el cuaderno entero. ¡Plof! Se va más tranquila de lo que llegó.", C: "Inma lanza el cuaderno. ¡Plof! Se aleja con los hombros más ligeros." },
            mood: "neutral", end: "libro-adios",
          },
        ],
      },
      "corazon-inicio": {
        who: "inma", mood: "love",
        line: {
          A: "El corazón llega a Inma. Deja de tirar hojas. Sonríe. Hay corazones en el puente. «Ay… qué raro. De repente todos mis poemas me parecen bonitos.»",
          B: "El corazón alcanza a Inma. Deja de arrancar hojas, sonríe y unos corazones flotan sobre el puente. «Qué raro. De repente todos mis poemas me parecen bonitos.»",
          C: "El corazón envuelve a Inma. Suelta las hojas, sonríe, y los corazones flotan sobre el puente. «Qué extraño. De repente cada uno de mis poemas me parece digno de salvarse.»",
        },
        options: [
          {
            id: "leer",
            say: { A: "Léeme uno. Tu favorito.", B: "Léeme uno, el que más te guste.", C: "Léeme uno, el que más te guste, aunque sea el peor." },
            reply: { A: "Inma lee: «La luna es un queso…» Se ríe. «¡Es horrible!» Pero está contenta.", B: "Inma lee: «La luna es un queso, y yo soy un ratón triste». Se ríe. «Es horrible. Pero hoy me hace feliz.»", C: "Inma lee: «La luna es un queso, y yo soy un ratón triste». Se ríe a gusto. «Es horrible, pero hoy lo defiendo.»" },
            mood: "smitten", next: "corazon-lectura",
          },
          {
            id: "abrazo",
            say: { A: "¿Un abrazo? Sin preguntas.", B: "¿Quieres un abrazo? Sin preguntas ni explicaciones.", C: "¿Te apetece un abrazo? Sin preguntas ni comentarios literarios." },
            reply: { A: "Inma te abraza. Hay corazones. Guarda el cuaderno.", B: "Inma te abraza con fuerza entre los corazones. Después guarda el cuaderno.", C: "Inma te abraza con una fuerza inesperada, rodeada de corazones. Después guarda el cuaderno bajo el brazo." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "escribir",
            say: { A: "Escribe uno nuevo. Ahora. Sobre los corazones.", B: "Escribe uno nuevo ahora mismo, sobre estos corazones.", C: "Escribe uno nuevo ahora, mientras duran estos corazones." },
            reply: { A: "Inma saca una hoja. Escribe rápido. Sonríe.", B: "Inma saca una hoja y escribe sin parar. Sonríe todo el tiempo.", C: "Inma saca una hoja y escribe sin levantar el lápiz. No deja de sonreír." },
            mood: "love", next: "corazon-lectura",
          },
        ],
      },
      "corazon-lectura": {
        who: "inma", mood: "smitten",
        line: {
          A: "Inma te mira con ojos brillantes. «Tienes algo… raro. Me hace querer escribir. ¿Qué hago con esto?»",
          B: "Inma te mira con los ojos brillantes. «Tienes algo raro, algo que me hace querer escribir otra vez. ¿Qué hago con esto?»",
          C: "Inma te mira con un brillo nuevo. «Tienes algo extraño que me devuelve las ganas de escribir. ¿Qué hago con esto que siento?»",
        },
        options: [
          {
            id: "beso",
            say: { A: "Un poema para mí. Y un beso en la mejilla.", B: "Dedícame un poema. Y después, un beso en la mejilla.", C: "Dedícame ese poema y, si te animas, acompáñalo de un beso en la mejilla." },
            reply: { A: "Inma te lee el poema. Te besa la mejilla. Los corazones suben.", B: "Inma te lee el poema en voz baja y te besa la mejilla. Los corazones suben por el puente.", C: "Inma te lee el poema muy despacio y te besa la mejilla. Los corazones se elevan hasta las farolas." },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "guardar",
            say: { A: "Guarda tus poemas. Ya no los tires. Son buenos.", B: "Guarda tus poemas y no los tires nunca más. Son buenos.", C: "Guarda todos tus poemas. Mañana, sin corazones, también te parecerán buenos." },
            reply: { A: "Inma guarda todo. Abraza el cuaderno. «Gracias.»", B: "Inma guarda las hojas y abraza el cuaderno. «Gracias. Hoy lo necesitaba.»", C: "Inma guarda todo con mimo y abraza el cuaderno. «Gracias. Hoy lo necesitaba más de lo que creía.»" },
            mood: "love", end: "guarda",
          },
          {
            id: "noche",
            say: { A: "Escribe sobre esta noche. Yo escucho.", B: "Escribe sobre esta noche y léemelo en voz alta.", C: "Escribe sobre esta noche y léemelo al terminar. Yo me quedo de público." },
            reply: { A: "Inma escribe un poema nuevo. Lo lee. Se emociona.", B: "Inma escribe un poema nuevo, lo lee en voz alta y se emociona.", C: "Inma escribe un poema nuevo, lo lee en voz alta y se le humedecen los ojos." },
            mood: "love", end: "nuevo",
          },
        ],
      },
    },
    ends: {
      nuevo: { text: { A: "Inma escribe un poema nuevo. Lo lee en voz alta. Sonríe.", B: "Inma termina su primer poema nuevo y te lo lee en voz alta. Al final, sonríe.", C: "Inma termina el poema y lo lee en voz alta, con la voz un poco temblorosa. Esta vez no lo tira." }, change: "sonrie", recap: "Ayudaste a Inma a escribir un poema nuevo." },
      guarda: { text: { A: "Inma guarda un poema en el bolsillo. Los otros se van con el agua.", B: "Inma guarda un poema en el bolsillo. Los demás flotan canal abajo, hacia el mar.", C: "Inma se queda con un poema. Los demás se alejan flotando, como barquitos de papel." }, change: "sonrie", recap: "Convenciste a Inma de guardar un poema." },
      tira: { text: { A: "Inma tira todo al agua. Se va tranquila.", B: "Inma tira lo último al agua y se va caminando, tranquila.", C: "Inma tira la última hoja y se aleja del puente con paso ligero, sin mirar atrás." }, change: "se-va", recap: "Viste a Inma tirar sus poemas al agua." },
      manana: { text: { A: "Inma se va a casa. Mañana va a escribir.", B: "Inma se va a casa con la hoja en blanco. Mañana va a escribir.", C: "Inma se va con la hoja en blanco doblada en el bolsillo, como una promesa." }, change: "se-va", recap: "Inma se fue a casa para escribir mañana." },
      corre: { text: { A: "Inma se va corriendo del puente.", B: "Inma se va corriendo. Una hoja suelta cae al agua detrás de ella.", C: "Inma huye del puente. Detrás de ella, una última hoja cae al canal." }, change: "corre", recap: "Asustaste a Inma en el puente." },
      "cuchillo-policia": { text: { A: "Una patrulla llega. Explicas el cuchillo. Inma explica el susto. Los poemas flotan en el agua.", B: "Llega una patrulla. Tú explicas lo del cuchillo, Inma lo del susto. Mientras tanto, sus poemas flotan en el canal.", C: "Llega una patrulla. Tú explicas el cuchillo, Inma el susto, y mientras tanto sus poemas se alejan flotando por el canal." }, change: "policia", recap: "Inma llamó a la policía por tu cuchillo." },
      "cuchillo-trato": { text: { A: "Dos cosas en el canal: poemas y cuchillo. Inma sonríe. «Empezar de nuevo.»", B: "El canal se traga poemas y cuchillo a la vez. Inma sonríe. «Empezar de nuevo, los dos.»", C: "El canal se traga poemas y cuchillo. Inma sonríe: «Empezar de nuevo, los dos, sin armas ni versos malos.»" }, change: "sonrie", recap: "Tiraste el cuchillo al canal junto a los poemas de Inma." },
      "pistola-corre": { text: { A: "Inma corre por el puente llorando. Su cuaderno flota. Tú guardas la pistola y te vas rápido.", B: "Inma cruza el puente corriendo y llorando. Su cuaderno flota en el canal. Guardas la pistola y te vas rápido.", C: "Inma cruza el puente a la carrera, llorando. Su cuaderno flota en el canal. Guardas la pistola y te vas lo más rápido posible." }, change: "huye", recap: "Inma huyó de tu pistola y perdió sus poemas." },
      "pistola-policia": { text: { A: "Una patrulla llega. Levantas las manos. Inma explica. Es una noche larga.", B: "Una patrulla llega con las luces encendidas. Levantas las manos. Inma explica lo ocurrido. Va a ser una noche larga.", C: "Una patrulla llega con las luces azules. Levantas las manos. Inma lo explica todo. La noche se alarga." }, change: "manos-arriba", recap: "Inma llamó a la policía por tu pistola." },
      "pistola-poema": { text: { A: "Inma escribe un poema sobre el miedo. Lo lee con la voz temblorosa. Tú guardas la pistola para siempre.", B: "Inma escribe un poema sobre el miedo y lo lee con voz temblorosa. Tú te prometes guardar la pistola para siempre.", C: "Inma escribe un poema sobre el miedo y lo lee con voz temblorosa. Tú, mudo, te prometes enterrar la pistola para siempre." }, change: "se-sienta", recap: "Inma escribió un poema sobre el miedo que le diste." },
      "granada-evacuacion": { text: { A: "El puente se vacía. Llega la policía. Un helicóptero vuela sobre el canal. Los poemas flotan.", B: "El puente se vacía. Llega la policía, cierran el paso y un helicóptero ilumina el canal, donde flotan los poemas.", C: "El puente se vacía en segundos. La policía acordona la zona y un helicóptero barre el canal con su foco, iluminando los poemas a la deriva." }, change: "helicoptero", recap: "Tu granada evacuó el puente." },
      "granada-agua": { text: { A: "¡Plof! La granada se hunde. No pasa nada. Inma se ríe. «Mis poemas eran menos peligrosos.»", B: "¡Plof! La granada se hunde y no pasa nada. Inma se ríe. «Mis poemas eran menos peligrosos, y tampoco explotaban.»", C: "¡Plof! La granada se hunde sin ruido. Inma se ríe. «Mis poemas eran bastante menos peligrosos, aunque igual de explosivos para mí.»" }, change: "sonrie", recap: "Tiraste la granada al canal y Inma se rió." },
      "granada-patrulla": { text: { A: "Llega la policía. Explicas el llavero. Inma explica los gritos. Los policías se ríen.", B: "Llega la policía. Tú explicas lo del llavero, Inma lo de los gritos. Al final, los policías se ríen.", C: "Llega la policía. Explicas lo del llavero, Inma lo de los gritos, y los agentes terminan riéndose, aunque te miran con recelo." }, change: "policia", recap: "La policía llegó por la granada y el grito de Inma." },
      "granada-poema": { text: { A: "Inma escribe «La noche de la granada». Lo lee a los patos. Los patos aplauden.", B: "Inma escribe un poema titulado «La noche de la granada» y se lo lee a los patos. Los patos parecen aplaudir.", C: "Inma escribe un poema titulado «La noche de la granada» y se lo recita a los patos, que graznan en aprobación." }, change: "sonrie", recap: "Inma escribió un poema sobre la noche de la granada." },
      "gas-silbato": { text: { A: "Tú tienes el silbato. Inma, tu gas pimienta. Intercambio justo. Se ríen en el puente.", B: "Tú te quedas con el silbato e Inma con tu gas pimienta. Intercambio justo. Se ríen en el puente.", C: "Tú te quedas con el silbato e Inma con tu gas pimienta: un intercambio justo. Se ríen en el puente hasta que los patos protestan." }, change: "sonrie", recap: "Cambiaste tu gas pimienta por el silbato de Inma." },
      "libro-regalo": { text: { A: "Inma se va con tu libro. Lo abraza. Sus poemas ya no flotan en el agua.", B: "Inma se va con tu libro abrazado. Ya no tira más poemas al agua esta noche.", C: "Inma se va con tu libro contra el pecho. Esta noche, por fin, los poemas se quedan en seco." }, change: "se-va", recap: "Le regalaste a Inma el libro de su poeta favorito." },
      "corazon-abrazo": { text: { A: "Inma te abraza y guarda el cuaderno. Los corazones suben. Sonríe al irse.", B: "Inma te abraza y guarda el cuaderno bajo el brazo. Los corazones suben al cielo y ella se va sonriendo.", C: "Inma te abraza y guarda el cuaderno. Los corazones se elevan sobre el puente y ella se va sonriendo, con las palabras intactas." }, change: "abraza", recap: "Inma te abrazó y dejó de tirar sus poemas." },
      "corazon-beso": { text: { A: "Inma te besa la mejilla. Hay corazones sobre el puente. Se va con el cuaderno.", B: "Inma te besa la mejilla y los corazones cubren el puente. Se va feliz, con el cuaderno.", C: "Inma te besa la mejilla y los corazones cubren el puente entero. Se va con el cuaderno apretado y una sonrisa nueva." }, change: "beso", recap: "Inma te dedicó un poema y un beso." },
      "gas-adios": { text: { A: "Inma tira el cuaderno al agua y se va tranquila. Tú sigues caminando con el gas bien guardado.", B: "Inma tira el cuaderno al canal y se va tranquila. Tú sigues tu camino con el gas bien guardado.", C: "Inma lanza el cuaderno al canal y se va ligera. Tú sigues tu camino con el gas guardado y un silbato en la cabeza." }, change: "se-va", recap: "Inma te habló de su silbato y siguió su camino." },
      "lapiz-poema": { text: { A: "Dos líneas tuyas, dos de Inma. El poema nuevo cabe en una hoja. Inma lo lee a los patos.", B: "Dos líneas tuyas, dos de Inma: el poema nuevo cabe en una hoja. Inma se lo lee a los patos.", C: "Dos versos tuyos, dos de Inma: el poema entero cabe en una hoja. Inma se lo recita a los patos, que no protestan." }, change: "sonrie", recap: "Escribiste un poema a cuatro manos con Inma." },
      "lapiz-firma": { text: { A: "Inma tira su hoja firmada. Tú te quedas con tu lápiz. Ella se va sonriendo.", B: "Inma tira la hoja firmada al canal. Tú te quedas con tu lápiz y ella se va sonriendo.", C: "Inma suelta la hoja firmada al canal. Tú conservas el lápiz; ella, la certeza de que alguien presenció su firma." }, change: "se-va", recap: "Inma firmó un poema con tu lápiz antes de tirarlo." },
      "libro-poeta": { text: { A: "Inma guarda sus hojas. Dice: «Hasta el poeta fallaba.» Te agradece y se va.", B: "Inma guarda sus hojas en el bolso. «Hasta mi poeta favorito fallaba», dice, y se va agradecida.", C: "Inma guarda sus hojas con alivio. «Hasta mi poeta favorito fallaba», dice, y se aleja agradecida." }, change: "sonrie", recap: "Le mostraste a Inma que su poeta también escribió cosas malas." },
      "libro-adios": { text: { A: "Inma tira el cuaderno al agua y se va ligera. Tú te quedas con el libro y el puente.", B: "Inma tira el cuaderno y se va ligera. Tú te quedas con tu libro y el puente vacío.", C: "Inma tira el cuaderno y se aleja, ligera. Tú te quedas con tu libro y un puente repentinamente silencioso." }, change: "se-va", recap: "Inma tiró su cuaderno y siguió, aunque conoció a su poeta en tu libro." },
    },
    speak: {
      A1: "¿Qué te gusta escribir?",
      A2: "¿Qué cosa vieja tiraste o regalaste recientemente?",
      B1: "¿Qué actividad creativa te gustaría empezar y por qué?",
      B2: "¿Qué harías con tus textos o dibujos antiguos si tuvieras que empezar de cero?",
      C1: "¿Cómo reconoces cuándo algo que has creado merece conservarse aunque no te guste del todo?",
      C2: "¿Qué relación hay, para ti, entre destruir lo que uno ha hecho y la necesidad de reinventarse?",
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Algo te dio miedo esta semana?", B: "¿Cómo reaccionas cuando alguien se acerca con algo peligroso?", C: "¿Hasta qué punto la creación artística se alimenta del miedo?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces cuando tienes miedo?", B: "¿Qué darías para salir sano de una situación peligrosa?", C: "¿Qué lugar ocupa el miedo en lo que escribes o piensas?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Gritas cuando te asustas?", B: "¿Cuál fue la reacción más exagerada que viste en la calle?", C: "¿Por qué el pánico de uno se convierte tan rápido en el pánico de todos?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Llevas algo para tu seguridad?", B: "¿Qué precauciones tomas cuando caminas solo de noche?", C: "¿Cómo equilibras la prudencia con la libertad de moverte por la ciudad?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Te gusta escribir poemas?", B: "¿Cuál fue la última cosa que escribiste a mano?", C: "¿Qué te permite la escritura a mano que no te permite una pantalla?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Quién es tu escritor favorito?", B: "¿Qué libro te hizo querer escribir o dibujar?", C: "¿Qué papel tuvo un solo libro en tu forma de ver el mundo?" } },
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿Qué te hace sonreír de repente?", B: "¿Quién te devolvió las ganas de hacer algo que habías abandonado?", C: "¿Qué gestos de cariño te inspiran más que cualquier clase o consejo?" } },
    },
  },

  // ───────────────────────────── 6. Don Cosme, el pescador
  {
    id: "costa-pescador",
    kind: "rincon",
    district: "costa",
    title: "El pescador sin suerte",
    verb: "HABLAR",
    goal: "Saludar con cortesía (usted), preguntar por hábitos, reaccionar con humor y escuchar una historia.",
    cast: [
      {
        id: "cosme", name: "Don Cosme", role: "Pescador que nunca pesca nada",
        age: "old", body: "m", build: "average", height: 1.68,
        hair: "cap", hairColor: "#3a4a6a", skin: "#a3704c",
        top: "coat", topColor: "#4d5b3a", bottom: "pants", bottomColor: "#5a4a3a",
        extras: ["mustache"], pose: "fish", props: ["rod", "bucket", "stool"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "cosme", mood: "smile",
        line: {
          A: "Un señor mayor pesca junto al canal. El cubo está vacío. «Cuarenta años aquí. ¿Sabe cuántos peces? Ninguno.»",
          B: "Un señor mayor pesca sentado en un taburete. Su cubo está vacío. «Cuarenta años pescando aquí, joven. ¿Sabe cuántos peces he sacado? Ni uno.»",
          C: "Un señor mayor sostiene una caña con paciencia infinita. El cubo, impecablemente vacío. «Cuarenta años en este muelle. Récord personal: cero peces.»",
        },
        options: [
          {
            id: "porque",
            say: { A: "¿Y por qué sigue pescando?", B: "¿Y por qué sigue viniendo, si nunca pesca nada?", C: "Con todo respeto, ¿qué lo trae aquí cada noche, si los peces no colaboran?" },
            reply: { A: "El señor sonríe. «Me llamo Cosme. Vengo por una razón.»", B: "El señor se ríe bajo el bigote. «Soy Cosme. Y los peces son lo de menos, joven.»", C: "«Cosme, para servirle», dice el señor. «Y el pez, amigo mío, nunca fue el objetivo.»" },
            mood: "smile", next: "historia",
          },
          {
            id: "broma",
            say: { A: "A lo mejor los peces viven en otro canal.", B: "A lo mejor los peces se mudaron a otro canal.", C: "Quizá los peces le tienen respeto. Cuarenta años es mucha reputación." },
            reply: { A: "El señor se ríe mucho. «¡Ja! Puede ser. Me llamo Cosme.»", B: "El señor se ríe a carcajadas. «¡Seguro que sí! Me llamo Cosme. Siéntese, si quiere.»", C: "El señor suelta una carcajada. «Me temen, sí. Soy una leyenda en el fondo del canal. Cosme, mucho gusto.»" },
            mood: "smile", end: "amigos",
          },
          {
            id: "sentarse",
            say: { A: "¿Puedo sentarme un rato con usted?", B: "¿Le molesta si me siento un rato a mirar?", C: "¿Admite compañía? Prometo no espantar a los peces que no hay." },
            reply: { A: "El señor te da un taburete. «Claro. Soy Cosme. Aquí hay que tener paciencia.»", B: "El señor te acerca otro taburete. «Siéntese. Soy Cosme. Esto se aprende en silencio.»", C: "«Siéntese», dice el señor, y te acerca un taburete. «Cosme. La primera lección es callarse. La segunda, también.»" },
            mood: "smile", end: "paciencia",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted tiene mucha paciencia. Me cae muy bien.", B: "Me encanta su paciencia. Ojalá yo fuera así.", C: "Admiro su perseverancia. No conozco a nadie que pierda con tanta elegancia." },
            reply: { A: "Cosme se ríe. «Le cuento un secreto: no pongo comida en el anzuelo. No quiero pescar.»", B: "Cosme se ríe. «Le cuento un secreto: nunca pongo cebo. No quiero pescar nada. Solo quiero estar aquí.»", C: "Cosme baja la voz. «Un secreto: el anzuelo va sin cebo desde hace cuarenta años. Pescar era la excusa.»" },
            mood: "love", next: "historia",
          },
          libro: {
            act: { A: "Abres tu libro y lees en voz alta.", B: "Te sientas a su lado y lees tu libro en voz alta.", C: "Te sientas y lees en voz alta, por hacer compañía." },
            say: { A: "¿Le leo un poco?", B: "¿Le leo un poco? Igual a los peces les gusta.", C: "¿Le leo un capítulo? Quizá los peces sean más de literatura." },
            reply: { A: "Cosme escucha. ¡De repente, la caña se mueve!", B: "Cosme escucha con los ojos cerrados. De pronto, la caña se dobla. «¡Eh! ¡Algo picó!»", C: "A mitad del párrafo, la caña se dobla. Cosme abre los ojos como platos. «¡Siga leyendo! ¡Les gusta!»" },
            mood: "surprised", end: "pez",
          },
          cuchillo: {
            act: { A: "Ves el hilo enredado. Sacas el cuchillo.", B: "El hilo de la caña está enredado. Sacas el cuchillo.", C: "Ves que el sedal es un nudo imposible. Sacas el cuchillo." },
            say: { A: "Su hilo está enredado. ¿Lo corto?", B: "Tiene el hilo enredado. ¿Quiere que corte el nudo?", C: "Ese nudo no lo deshace ni un marinero. ¿Lo corto?" },
            reply: { A: "Cosme dice que sí. Cortas. ¡Y la caña se mueve!", B: "«Córtelo, sí.» Cortas el nudo, Cosme lanza otra vez… y la caña se dobla en el acto.", C: "«Adelante.» Cortas el nudo, Cosme lanza y, por primera vez en cuarenta años, algo tira del otro lado." },
            mood: "surprised", end: "pez",
          },
        },
      },
      historia: {
        who: "cosme", mood: "sad",
        line: {
          A: "Cosme mira el agua. «Antes pescaba aquí con mi esposa, Rosa. Ella sí sacaba peces. Muchos.»",
          B: "Cosme mira el agua un momento. «Antes pescaba aquí con Rosa, mi esposa. Ella sí que pescaba. Yo solo la miraba.»",
          C: "Cosme se queda mirando el reflejo de las farolas. «Aquí empecé a venir con Rosa, mi mujer. Ella pescaba; yo la admiraba. Ese era el reparto.»",
        },
        options: [
          {
            id: "extrana",
            say: { A: "¿La extraña mucho?", B: "Debe de extrañarla mucho, ¿no?", C: "Entonces, en realidad, viene a estar con ella, ¿no?" },
            reply: { A: "Cosme sonríe. «Cada día. Aquí la siento cerca. Siéntese, joven.»", B: "Cosme sonríe con los ojos brillantes. «Cada día. Aquí me parece que todavía está. Siéntese, si quiere.»", C: "Cosme asiente despacio. «Usted entiende rápido. Siéntese. A Rosa le gustaba la buena compañía.»" },
            mood: "smile", end: "paciencia",
          },
          {
            id: "animar",
            say: { A: "¡Seguro que hoy pesca uno! Por Rosa.", B: "Seguro que hoy pesca uno, por Rosa. ¡Vamos!", C: "Esta noche Rosa le manda uno. Ya verá." },
            reply: { A: "Cosme se ríe. Y… ¡la caña se mueve!", B: "Cosme se ríe. En ese momento, la caña se dobla. «¡No puede ser!»", C: "Cosme se ríe y, como si alguien escuchara, la caña se dobla. «Rosa, siempre tan oportuna.»" },
            mood: "surprised", end: "pez",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Rosa tenía suerte. Usted es muy buena persona.", B: "Rosa tuvo mucha suerte con usted, se nota.", C: "Me da la impresión de que Rosa no solo pescaba bien: también eligió bien." },
            reply: { A: "Cosme se ríe con lágrimas. «Ella decía lo contrario. Venga mañana. Le enseño a no pescar.»", B: "Cosme se ríe y se seca un ojo. «Ella decía que el afortunado era yo. Vuelva mañana y le enseño a no pescar.»", C: "Cosme se ríe, emocionado. «Ella decía que yo era su peor captura. Vuelva mañana: le enseñaré el arte de no pescar.»" },
            mood: "love", end: "amigos",
          },
        },
      },
    },
    ends: {
      amigos: { text: { A: "Cosme y tú se ríen juntos. Te invita a volver mañana.", B: "Te quedas un rato riéndote con Cosme. Al despedirse, te invita a volver mañana.", C: "Te despides de Cosme con la sensación de haber hecho un amigo. Mañana, dice, te guarda un taburete." }, change: "sonrie", recap: "Te hiciste amigo de Don Cosme, el pescador." },
      paciencia: { text: { A: "Te sientas con Cosme. Miran el agua en silencio.", B: "Te sientas al lado de Cosme y miran el agua en silencio. No pescan nada. No importa.", C: "Te sientas con Cosme a no pescar nada. Es, sorprendentemente, uno de los mejores ratos de la noche." }, change: "se-sienta", recap: "Pescaste nada, en silencio, con Don Cosme." },
      pez: { text: { A: "Cosme saca algo del agua… ¡Es un zapato! Se ríe mucho.", B: "Cosme tira de la caña con emoción y saca… un zapato viejo. Se ríe tanto que casi se cae.", C: "Tras cuarenta años, Cosme saca su primera captura: una bota de goma. La levanta como un trofeo." }, change: "sonrie", recap: "Viste a Don Cosme pescar… un zapato." },
    },
    speak: {
      A1: "¿Qué haces para relajarte?",
      A2: "¿Qué actividad hacías antes con alguien especial?",
      B1: "¿Qué actividad haces aunque no consigas resultados y por qué la haces?",
      B2: "¿Qué valoras más en un pasatiempo, el resultado o el proceso?",
      C1: "¿Qué diferencia ves entre la paciencia y la resignación?",
      C2: "¿Qué rituales cotidianos crees que nos sirven para mantener vivos a quienes ya no están?",
    },
  },

  // ───────────────────────────── 7. El barco vivienda
  {
    id: "costa-barco",
    kind: "rincon",
    district: "costa",
    title: "El barco de las plantas",
    verb: "SUBIR",
    goal: "Aceptar o rechazar una invitación, hacer cumplidos y preguntar por el modo de vida de alguien.",
    cast: [
      {
        id: "marisa", name: "Marisa", role: "Vive en un barco lleno de plantas",
        age: "old", body: "f", build: "heavy", height: 1.57,
        hair: "short", hairColor: "#e8e4dc", skin: "#8a5a3c",
        top: "apron", topColor: "#4f7f4a", bottom: "pants", bottomColor: "#3b4a5c",
        extras: ["hat", "earrings"], pose: "carry", props: ["houseboat", "plants", "watering-can"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "marisa", mood: "smile",
        line: {
          A: "En un barco hay muchas plantas. Una señora las riega. «¡Hola! ¿Quieres ver mis tomates? ¡Sube!»",
          B: "En la cubierta de un barco lleno de macetas, una señora riega sus plantas. «¡Eh, tú! ¿Quieres ver los mejores tomates de la ciudad? ¡Sube, sube!»",
          C: "Una señora con sombrero riega una selva en miniatura sobre la cubierta de un barco. «¡Oye! ¿Te interesan los tomates de agua dulce? Sube, que no muerdo.»",
        },
        options: [
          {
            id: "subir",
            say: { A: "¡Sí, gracias! Subo.", B: "¡Claro! Con mucho gusto. ¿Por dónde subo?", C: "Una invitación así no se rechaza. ¿Por dónde se aborda?" },
            reply: { A: "La señora te da la mano. «Soy Marisa. ¡Bienvenido a mi casa!»", B: "La señora te tiende la mano para ayudarte. «Soy Marisa. Cuidado con la albahaca.»", C: "La señora te ayuda a saltar a bordo. «Marisa, capitana y jardinera. Cuidado con la menta, que es territorial.»" },
            mood: "smile", next: "cubierta",
          },
          {
            id: "vivir",
            say: { A: "¿Usted vive en el barco?", B: "¿Vive usted aquí, en el barco? Qué curioso.", C: "Perdone la pregunta, pero ¿esto es su casa o su jardín?" },
            reply: { A: "La señora se ríe. «¡Sí! Hace veinte años. Soy Marisa. Sube y mira.»", B: "La señora se ríe. «Hace veintidós años. Soy Marisa. Sube y te lo enseño.»", C: "«Las dos cosas», dice la señora. «Veintidós años. Me llamo Marisa. Sube, que la visita guiada es gratis.»" },
            mood: "smile", next: "cubierta",
          },
          {
            id: "rechazar",
            say: { A: "Gracias, pero me mareo en los barcos.", B: "Muchas gracias, pero me mareo en los barcos, de verdad.", C: "Le agradezco la invitación, pero tengo un estómago poco marinero." },
            reply: { A: "La señora se ríe. «¡Este barco no se mueve! Bueno, otro día.» Enciende unas lucecitas.", B: "La señora se ríe. «¡Si este barco no se ha movido en veinte años! Bueno, otro día.» Enciende unas lucecitas para ti.", C: "«Este barco tiene menos movimiento que un sofá», se ríe. «Otro día, entonces.» Y enciende una guirnalda de luces." },
            mood: "smile", end: "luces",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "¡Qué barco tan bonito! Y usted es muy simpática.", B: "¡Qué barco tan bonito! Se nota que lo cuida con mucho cariño.", C: "Tiene usted el barco más bonito del canal, y sospecho que la mejor conversación también." },
            reply: { A: "Marisa se ríe. «¡Gracias! Te cuento un secreto: el barco no tiene motor. Nunca sale.»", B: "Marisa se ríe, encantada. «Te cuento un secreto: el motor está roto desde hace veinte años. Y no lo pienso arreglar.»", C: "Marisa te guiña un ojo. «Secreto de capitana: el motor murió hace veinte años. Es un barco que decidió ser jardín.»" },
            mood: "love", next: "cubierta",
          },
          lapiz: {
            act: { A: "Le muestras tu lápiz.", B: "Ves etiquetas en blanco en las macetas. Sacas tu lápiz.", C: "Las macetas tienen etiquetas en blanco. Sacas tu lápiz, servicial." },
            say: { A: "¿Escribo los nombres de las plantas?", B: "¿Quiere que escriba los nombres en las etiquetas?", C: "¿Le escribo las etiquetas? Tengo buena letra y ninguna idea de botánica." },
            reply: { A: "Marisa se pone feliz. «¡Sí! Sube. Esta es la menta, esta la albahaca…»", B: "Marisa aplaude. «¡Qué maravilla! Sube. Te dicto: menta, albahaca, tomates cherry…»", C: "Marisa aplaude. «Perfecto: yo pongo la botánica y tú la letra. Sube, que te dicto.»" },
            mood: "smile", next: "cubierta",
          },
        },
      },
      cubierta: {
        who: "marisa", mood: "smile",
        line: {
          A: "En la cubierta hay tomates, flores y hierbas. Huele muy bien. «¿Te gusta?»",
          B: "La cubierta es una pequeña huerta: tomates, flores, hierbas que huelen a verano. Marisa te mira, orgullosa. «¿Qué te parece?»",
          C: "La cubierta huele a albahaca y a río. Hay tomates colgando sobre el agua. Marisa espera tu veredicto con los brazos en jarra.",
        },
        options: [
          {
            id: "elogiar",
            say: { A: "¡Es precioso! Huele muy bien.", B: "¡Es increíble! Nunca vi un jardín en un barco.", C: "Es lo más bonito que he visto esta noche, y la noche ha sido larga." },
            reply: { A: "Marisa sonríe y te da unos tomates. «Toma. Para ti.»", B: "Marisa sonríe y arranca unos tomates. «Toma, pruébalos. Sin química, solo río y cariño.»", C: "Marisa arranca unos tomates y te los pone en la mano. «Para el crítico. Sin química, solo río y paciencia.»" },
            mood: "love", end: "regalo",
          },
          {
            id: "invierno",
            say: { A: "¿Y en invierno? ¿No hace frío aquí?", B: "¿Y en invierno qué hace? ¿No pasa frío en el barco?", C: "¿Cómo se sobrevive aquí en invierno? Imagino que el viento no perdona." },
            reply: { A: "Marisa se ríe. «Mucho frío. Pero tengo una estufa y un gato.» Enciende las luces.", B: "«Frío, mucho», dice Marisa. «Pero tengo una estufa, mantas y un gato muy gordo.» Enciende unas luces.", C: "«El viento no perdona, pero yo tampoco», dice Marisa. «Estufa, mantas y un gato que da calor.» Enciende la guirnalda." },
            mood: "smile", end: "luces",
          },
          {
            id: "regar",
            say: { A: "¿La ayudo a regar?", B: "¿Quiere que la ayude a regar? Tiene muchas plantas.", C: "Déjeme ser útil: ¿riego yo la parte de babor?" },
            reply: { A: "Marisa te da la regadera. «¡Sí! Pero poco, ¿eh?»", B: "Marisa te da la regadera. «Encantada. Pero poca agua, que las ahogas.»", C: "Marisa se ríe. «Babor, dice. Toma, marinero. Poca agua, que esto no es el canal.»" },
            mood: "smile", end: "regalo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Usted es feliz aquí, ¿verdad?", B: "Se nota que aquí es feliz. Se le ve en la cara.", C: "No necesito preguntarle si es feliz aquí. Se le nota en todo." },
            reply: { A: "Marisa sonríe. «Mucho. Antes era abogada. Ahora tengo tomates. Mucho mejor.»", B: "Marisa sonríe. «Muy feliz. Fui abogada treinta años. Un día compré este barco y no volví a la oficina.»", C: "Marisa se ríe. «Treinta años de abogada. Un lunes compré el barco y ese mismo martes dimití. Mejor decisión de mi vida.»" },
            mood: "love", end: "regalo",
          },
        },
      },
    },
    ends: {
      regalo: { text: { A: "Marisa te da unos tomates. Te dice adiós desde el barco.", B: "Bajas del barco con unos tomates en la mano. Marisa te dice adiós con la regadera.", C: "Bajas a tierra con unos tomates de regalo. Marisa te despide agitando la regadera como un pañuelo." }, change: "sonrie", recap: "Visitaste el barco de Marisa y te regaló tomates." },
      luces: { text: { A: "Marisa enciende unas luces. El barco brilla en el agua.", B: "Marisa enciende una guirnalda de luces. El barco brilla sobre el canal.", C: "Marisa enciende una guirnalda y el barco entero se refleja en el canal, como un farol flotante." }, change: "luz", recap: "Charlaste con Marisa y vio su barco iluminado." },
    },
    speak: {
      A1: "¿Qué plantas tienes en casa?",
      A2: "¿Qué lugar diferente visitaste hace poco?",
      B1: "¿Qué tipo de casa poco común te gustaría probar y por qué?",
      B2: "¿Qué cambiarías en tu vida si pudieras empezar una profesión completamente distinta?",
      C1: "¿Qué distingue, en tu opinión, una vida sencilla de una vida simplemente austera?",
      C2: "¿Qué hace falta para atreverse a abandonar una vida estable por una que nos parezca más auténtica?",
    },
  },

  // ───────────────────────────── 8. Camila y Toto juntos
  {
    id: "costa-camila",
    kind: "rincon",
    district: "costa",
    title: "Camila y Toto, juntos",
    verb: "SALUDAR",
    requires: "toto-encontrado",
    goal: "Saludar a alguien conocido, preguntar por su bienestar, aceptar agradecimientos y hacer planes.",
    cast: [
      {
        id: "camila", name: "Camila", role: "Dueña de Toto",
        age: "adult", body: "f", build: "athletic", height: 1.66,
        hair: "ponytail", hairColor: "#3b2418", skin: "#c9946c",
        top: "hoodie", topColor: "#e0b03a", bottom: "jeans", bottomColor: "#2c3a55",
        extras: ["phone"], pose: "stand", props: ["leash"],
      },
      {
        id: "toto", name: "Toto", role: "Su perro, ya en casa", kind: "animal", species: "dog", color: "#7a5230", size: "small",
        age: "adult", body: "m", build: "slim", height: 0.35, hair: "short", hairColor: "#7a5230", skin: "#7a5230",
        top: "tshirt", topColor: "#c0282d", bottom: "pants", bottomColor: "#7a5230", pose: "stand",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "camila", mood: "love",
        line: {
          A: "Camila pasea con Toto junto al puente. Te ve. «¡Eres tú! ¡Toto, mira quién está aquí!»",
          B: "Camila pasea a Toto, ahora con correa nueva, junto al puente. Al verte, se le ilumina la cara. «¡Eres tú! Toto, ¿te acuerdas?»",
          C: "Camila pasea junto al puente con Toto, que lleva una correa nueva y aire de celebridad. «¡Mi heroína! O héroe. ¡Toto, saluda!»",
        },
        options: [
          {
            id: "toto",
            say: { A: "¡Hola, Toto! ¿Cómo está?", B: "¡Hola, Toto! ¿Cómo está después de la aventura?", C: "¡El fugitivo! ¿Cómo se encuentra después de su gran escapada?" },
            reply: { A: "Toto salta y mueve la cola. Camila se ríe. «Está muy bien. Comió mucho.»", B: "Toto te salta a las piernas. «Está perfecto», dice Camila. «Cenó dos veces, por el susto.»", C: "Toto te salta encima con entusiasmo. «Recuperadísimo», dice Camila. «Cenó dos veces. Por el trauma, dice él.»" },
            mood: "smile", end: "abrazo",
          },
          {
            id: "porque",
            say: { A: "¿Por qué se escapó?", B: "¿Al final sabes por qué se escapó?", C: "¿Se descubrió el motivo de la fuga?" },
            reply: { A: "Camila suspira. «Por un gato. Siempre por un gato.»", B: "Camila pone los ojos en blanco. «Un gato. Lo vio, se soltó y adiós. Es un romántico.»", C: "«Un gato», dice Camila. «Lo siguió tres calles y después se asustó de su propia valentía.»" },
            mood: "smile", end: "paseo",
          },
          {
            id: "paseo",
            say: { A: "¿Puedo caminar con ustedes un poco?", B: "¿Les importa si los acompaño un rato?", C: "¿Admiten acompañante en el paseo? Prometo no perder a nadie." },
            reply: { A: "Camila sonríe. «¡Claro! Toto, vamos.»", B: "«¡Claro que sí!», dice Camila. «Toto, vamos, que tenemos escolta.»", C: "Camila se ríe. «Eres la única persona a quien le confiaría ese papel. Vamos.»" },
            mood: "smile", end: "paseo",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Estoy muy feliz por ustedes.", B: "Me alegro muchísimo de verlos juntos otra vez.", C: "Verlos juntos otra vez me ha arreglado la noche, en serio." },
            reply: { A: "Camila te abraza. «El sábado es el cumpleaños de Toto. ¡Tienes que venir!»", B: "Camila te abraza. «El sábado Toto cumple cinco años. Hacemos una fiesta en el parque. ¡Estás invitado!»", C: "Camila te abraza. «El sábado Toto cumple cinco años. Habrá tarta para perros. Eres invitado de honor, no se discute.»" },
            mood: "love", end: "abrazo",
          },
          libro: {
            act: { A: "Le muestras tu libro a Toto.", B: "Toto se acerca a oler tu libro.", C: "Toto muestra un interés sospechoso por tu libro." },
            say: { A: "Toto, ¿quieres leer?", B: "Toto, ¿te interesa la literatura?", C: "Veo que Toto tiene inquietudes intelectuales." },
            reply: { A: "Toto muerde una esquina del libro. Camila se ríe. «¡Toto! ¡No!»", B: "Toto le da un mordisquito a la esquina. «¡Toto!», se ríe Camila. «Perdón. Te compro otro.»", C: "Toto le da un mordisco crítico a la esquina. «Es su forma de opinar», dice Camila, muerta de risa." },
            mood: "smile", end: "abrazo",
          },
        },
      },
    },
    ends: {
      abrazo: { text: { A: "Camila te abraza. Toto salta a tu alrededor.", B: "Camila te abraza fuerte mientras Toto da vueltas a tu alrededor.", C: "Camila te abraza y Toto, por no ser menos, se te sube a los pies." }, change: "abraza", recap: "Te reencontraste con Camila y Toto." },
      paseo: { text: { A: "Caminas con Camila y Toto por el canal.", B: "Paseas con Camila y Toto a lo largo del canal. Toto no se aleja de ti.", C: "Paseas con Camila y Toto junto al canal. Toto no pierde de vista a ningún gato, ni a ti." }, change: "se-va", recap: "Paseaste con Camila y Toto junto al canal." },
    },
    speak: {
      A1: "¿Qué haces con tus amigos los fines de semana?",
      A2: "¿Qué celebraste con alegría la última vez?",
      B1: "¿Cómo agradeces un favor importante?",
      B2: "¿Qué harías para celebrar un reencuentro con alguien muy querido?",
      C1: "¿Qué diferencia hay entre devolver un favor y agradecerlo de verdad?",
      C2: "¿Por qué crees que algunos encuentros fortuitos acaban siendo más significativos que relaciones de años?",
    },
  },

  // ───────────────────────────── 9. Sin paraguas bajo la farola
  {
    id: "costa-paraguas",
    kind: "rincon",
    district: "costa",
    title: "Sin paraguas bajo la farola",
    verb: "HABLAR",
    event: "lluvia",
    goal: "Ofrecer y compartir algo, hablar del tiempo, dar opiniones sobre la lluvia y despedirse.",
    cast: [
      {
        id: "german", name: "Germán", role: "Chico empapado bajo una farola",
        age: "young", body: "m", build: "slim", height: 1.88,
        hair: "afro", hairColor: "#1c1410", skin: "#3e2a1f",
        top: "shirt", topColor: "#e8e2d0", bottom: "pants", bottomColor: "#44474f",
        extras: ["headphones", "backpack"], pose: "lean", props: ["lamp"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "german", mood: "worried",
        line: {
          A: "Llueve mucho. Un chico se esconde bajo una farola. Está mojado. «¡Y me dijeron que hoy no llovía!»",
          B: "Llueve con ganas. Un chico alto se pega a una farola, como si eso sirviera de algo. «¡La aplicación decía cero por ciento de lluvia! ¡Cero!»",
          C: "Cae un aguacero. Un chico alto se refugia bajo una farola, que como techo es un desastre. «Cero por ciento de probabilidad, decía. Cero.»",
        },
        options: [
          {
            id: "puente",
            say: { A: "Ven, vamos debajo del puente. Allí no llueve.", B: "Ven conmigo debajo del puente. Ahí estamos secos.", C: "Esa farola no es buen techo. El puente, en cambio, tiene experiencia. ¿Vamos?" },
            reply: { A: "El chico corre contigo. «¡Gracias! Me llamo Germán.»", B: "El chico corre detrás de ti. «¡Gracias! Soy Germán. Qué buena idea.»", C: "El chico te sigue corriendo. «Germán, encantado. Y avergonzado de no haberlo pensado yo.»" },
            mood: "smile", end: "puente",
          },
          {
            id: "lluvia",
            say: { A: "¿Te gusta la lluvia?", B: "Bueno, ya estás mojado. ¿Te gusta la lluvia, por lo menos?", C: "Ya que no hay remedio, ¿eres de los que disfrutan la lluvia o de los que la sufren?" },
            reply: { A: "El chico se ríe. «Me llamo Germán. ¡Me encanta la lluvia! Pero no así.»", B: "El chico se ríe. «Soy Germán. Me encanta la lluvia… desde la ventana.»", C: "El chico se ríe. «Germán. Y depende: desde la ventana la adoro; desde aquí, la estoy reconsiderando.»" },
            mood: "smile", next: "charla",
          },
          {
            id: "prestar",
            say: { A: "¿Quieres mi bufanda para la cabeza?", B: "Toma, ponte mi bufanda en la cabeza. Algo es algo.", C: "No tengo paraguas, pero sí una bufanda. No es elegante, pero es solidaria." },
            reply: { A: "El chico se pone la bufanda. Se ríe. «¡Parezco una abuela! Gracias. Soy Germán.»", B: "El chico se pone la bufanda en la cabeza. «Parezco mi abuela. ¡Pero funciona! Soy Germán.»", C: "El chico se la pone en la cabeza. «Igual que mi abuela en misa. Gracias. Germán.»" },
            mood: "smile", next: "charla",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Estás muy mojado. Pero tienes una sonrisa muy bonita.", B: "Estás empapado, pero no pierdes la sonrisa. Eso me gusta.", C: "Pocas personas están tan empapadas y tan sonrientes a la vez. Es un talento." },
            reply: { A: "Germán se ríe. «En mi pueblo bailamos cuando llueve. ¿Bailas?»", B: "Germán se ríe. «En mi pueblo, cuando llueve, la gente sale a bailar. ¿Me acompañas?»", C: "Germán se ríe. «En mi pueblo, la primera lluvia se celebra bailando en la calle. ¿Te atreves?»" },
            mood: "love", end: "baila",
          },
          libro: {
            act: { A: "Abres tu libro sobre su cabeza.", B: "Pones tu libro abierto sobre su cabeza, como un techo.", C: "Le ofreces tu libro abierto como techo improvisado." },
            say: { A: "Toma. Es un paraguas muy pequeño.", B: "Toma, un paraguas literario. Es pequeño, pero algo es algo.", C: "Un paraguas de bolsillo, edición literaria. No garantizo resultados." },
            reply: { A: "El chico se ríe mucho. «¡Gracias! Soy Germán. Tu libro se moja.»", B: "El chico se ríe a carcajadas. «Soy Germán. ¡Tu libro se va a mojar!»", C: "El chico se ríe a carcajadas. «Germán. Y tu libro acaba de convertirse en una novela húmeda.»" },
            mood: "smile", next: "charla",
          },
        },
      },
      charla: {
        who: "german", mood: "smile",
        line: {
          A: "Germán mira la lluvia. «En mi pueblo, cuando llueve, todos salen a mirar.»",
          B: "Germán mira la lluvia sobre el canal. «En mi pueblo casi nunca llueve. Cuando llueve, todo el mundo sale a la calle.»",
          C: "Germán contempla la lluvia sobre el agua. «Vengo de un pueblo seco. Allí la lluvia es una fiesta; aquí, un trámite.»",
        },
        options: [
          {
            id: "olor",
            say: { A: "A mí me encanta el olor de la lluvia.", B: "A mí me encanta el olor que deja la lluvia. Me recuerda a mi infancia.", C: "A mí lo que me fascina es el olor que deja. Es como si la ciudad se lavara la cara." },
            reply: { A: "Germán sonríe. «Sí. Huele a casa.»", B: "Germán sonríe y respira hondo. «Sí. Huele a mi casa.»", C: "Germán cierra los ojos y respira. «Exacto. Huele a mi pueblo. Gracias por recordármelo.»" },
            mood: "smile", end: "charla",
          },
          {
            id: "sol",
            say: { A: "Yo prefiero el sol, la verdad.", B: "Yo, la verdad, prefiero el sol. Me pone de mejor humor.", C: "Yo soy más de sol, lo confieso. La lluvia me gusta en las películas." },
            reply: { A: "Germán se ríe. «Entonces, ¡corre!» Y corre bajo la lluvia.", B: "Germán se ríe. «¡Pues corre!», grita, y sale corriendo bajo la lluvia, riéndose.", C: "Germán se ríe. «Pues esto no es una película», dice, y sale corriendo bajo la lluvia, feliz." },
            mood: "smile", end: "corre",
          },
        ],
        items: {
          corazon: {
            act: { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." },
            say: { A: "Me gusta hablar contigo. Eres muy simpático.", B: "Me encanta tu forma de ver la lluvia. Eres muy simpático.", C: "Contigo hasta un aguacero parece buen plan." },
            reply: { A: "Germán se ríe y baila bajo la lluvia. «¡Ven! ¡Como en mi pueblo!»", B: "Germán se ríe, sale de la farola y empieza a bailar bajo la lluvia. «¡Ven! ¡Así se hace en mi pueblo!»", C: "Germán se ríe y sale a la lluvia bailando. «¡En mi pueblo esto se llama bendición! ¡Ven!»" },
            mood: "love", end: "baila",
          },
        },
      },
    },
    ends: {
      puente: { text: { A: "Esperas con Germán debajo del puente. Hablan hasta que para la lluvia.", B: "Esperas con Germán bajo el puente, charlando, hasta que la lluvia se calma.", C: "Bajo el puente, Germán y tú esperan a que escampe. Cuando por fin para, ninguno de los dos tiene prisa." }, change: "se-va", recap: "Te refugiaste de la lluvia con Germán bajo el puente." },
      charla: { text: { A: "Germán y tú miran la lluvia juntos. Él está feliz.", B: "Germán y tú miran la lluvia en silencio, contentos. Ya no importa estar mojado.", C: "Germán y tú miran caer la lluvia sobre el canal. Mojados, pero extrañamente en paz." }, change: "sonrie", recap: "Hablaste de la lluvia con Germán." },
      corre: { text: { A: "Germán corre bajo la lluvia. Se ríe.", B: "Germán se aleja corriendo bajo la lluvia, riéndose a carcajadas.", C: "Germán desaparece bajo el aguacero, riéndose como si fuera el primer día de lluvia del mundo." }, change: "corre", recap: "Germán se fue corriendo bajo la lluvia." },
      baila: { text: { A: "Germán baila bajo la lluvia. La gente lo mira y sonríe.", B: "Germán baila bajo la lluvia junto al canal. Desde las ventanas, la gente se asoma y sonríe.", C: "Germán baila bajo la lluvia, empapado y feliz. Desde el barco de las plantas, alguien aplaude." }, change: "baila", recap: "Hiciste bailar a Germán bajo la lluvia." },
    },
    speak: {
      A1: "¿Qué haces cuando llueve?",
      A2: "¿Qué hiciste la última vez que te mojaste con la lluvia?",
      B1: "¿Qué tiempo prefieres y cómo cambia tu estado de ánimo?",
      B2: "¿Qué echarías de menos del clima de tu ciudad si vivieras en otro lugar?",
      C1: "¿En qué medida crees que el clima de un lugar moldea el carácter de su gente?",
      C2: "¿Por qué crees que algunas incomodidades compartidas generan una complicidad inmediata entre desconocidos?",
    },
  },
];
export default encounters;
