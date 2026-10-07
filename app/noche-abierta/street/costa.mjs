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
    },
    ends: {
      abrazo: { text: { A: "Malena te abraza. Ya no llora. Ahora sonríe y mira el agua.", B: "Malena te abraza fuerte. Cuando se separa, ya no llora: tiene una sonrisa nueva.", C: "Malena te abraza un largo rato. Cuando se separa, ya no llora; se ríe sola, como quien acaba de entender algo." }, change: "abraza", recap: "Consolaste a Malena y la hiciste reír." },
      casa: { text: { A: "Malena se va a casa. Antes, te dice adiós con la mano.", B: "Malena se va a su casa más tranquila. Desde el puente, te dice adiós con la mano.", C: "Malena se aleja hacia el puente, más ligera. Antes de cruzarlo, se da vuelta y te saluda." }, change: "se-va", recap: "Convenciste a Malena de ir a casa a descansar." },
      paseo: { text: { A: "Caminas con Malena hasta el puente. Habla de sus dibujos.", B: "Caminas con Malena hasta el puente. Por el camino te cuenta todos los personajes que quiere crear.", C: "Caminas con Malena hasta el puente. Para cuando llegan, ya tiene tres personajes nuevos y ninguna lágrima." }, change: "se-va", recap: "Paseaste con Malena junto al canal." },
      dibuja: { text: { A: "Malena dibuja el canal. Está tranquila.", B: "Malena se queda en el banco dibujando el canal. Parece en paz.", C: "Malena se queda dibujando el canal, concentrada. La noche, de pronto, parece suya." }, change: "se-sienta", recap: "Animaste a Malena a dibujar otra vez." },
      espacio: { text: { A: "Malena se queda sola en el banco. Mira el agua.", B: "Malena se queda en el banco, mirando el agua. Necesita tiempo.", C: "Malena se queda frente al agua. A veces respetar el silencio de alguien también es ayudar." }, change: "triste", recap: "Dejaste a Malena a solas con su tristeza." },
      corre: { text: { A: "Malena se va rápido. No mira atrás.", B: "Malena se aleja deprisa hacia el puente, todavía asustada.", C: "Malena se aleja casi corriendo. Su noche ya era mala, y tú no la mejoraste." }, change: "corre", recap: "Asustaste a Malena y se fue corriendo." },
    },
    speak: {
      A1: "¿Qué haces cuando estás triste?",
      A2: "¿Qué hiciste la última vez que recibiste una mala noticia?",
      B1: "¿Cómo te gusta que te consuelen cuando algo te sale mal?",
      B2: "¿Qué harías si un desconocido llorara a tu lado en un lugar público?",
      C1: "¿Cómo distingues entre acompañar a alguien y invadir su intimidad?",
      C2: "¿Qué papel crees que tienen los fracasos en la construcción de lo que uno es?",
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
    },
    ends: {
      abrazo: { text: { A: "Paula y Nacho se abrazan. Después caminan juntos por el canal.", B: "Paula y Nacho se abrazan. Luego se van caminando junto al canal, hablando bajito.", C: "Paula y Nacho se abrazan largo rato. Luego se alejan junto al agua, discutiendo los detalles, pero en voz baja." }, change: "abraza", recap: "Ayudaste a Paula y a Nacho a reconciliarse." },
      "se-va": { text: { A: "Paula se va sola. Nacho se queda mirando el agua.", B: "Paula se va sola hacia el puente. Nacho se queda en la baranda, sin saber qué hacer.", C: "Paula se aleja sin mirar atrás. Nacho se queda en la baranda, preguntándose en qué momento perdió la discusión." }, change: "se-va", recap: "Diste tu opinión y Paula se fue enojada." },
      siguen: { text: { A: "Paula y Nacho siguen discutiendo. Los patos se van.", B: "La pareja sigue discutiendo, más fuerte que antes. Hasta los patos se van a otra parte.", C: "La discusión continúa, ahora con argumentos nuevos. Los patos, prudentes, se mudan al otro lado del canal." }, change: "enojado", recap: "Paula y Nacho siguieron discutiendo." },
      huyen: { text: { A: "Paula y Nacho corren juntos. Ya no discuten.", B: "Paula y Nacho se van corriendo de la mano. Por lo menos ahora están de acuerdo en algo.", C: "Paula y Nacho huyen juntos. Paradójicamente, no los has visto tan unidos en toda la noche." }, change: "corre", recap: "Asustaste a una pareja que discutía." },
    },
    speak: {
      A1: "¿Con quién hablas cuando tienes un problema?",
      A2: "¿Qué cambio importante hiciste en tu vida?",
      B1: "¿Por qué te mudarías o no te mudarías a otra ciudad por trabajo?",
      B2: "¿Qué es más importante para ti, una gran oportunidad profesional o estar cerca de tu gente?",
      C1: "¿Cuándo crees que es legítimo opinar sobre los conflictos de pareja de otras personas?",
      C2: "¿Qué renuncias consideras parte del amor y cuáles te parecen una forma de perderse a uno mismo?",
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
    },
    ends: {
      corre: { text: { A: "Gloria corre por el puente. Llega a la clínica a tiempo.", B: "Gloria cruza el puente corriendo. A lo lejos, ves que entra en la clínica justo a tiempo.", C: "Gloria cruza el puente a una velocidad admirable. A las once en punto, la puerta de la clínica se cierra tras ella." }, change: "corre", recap: "Despertaste a Gloria y llegó a tiempo a su turno." },
      sonrie: { text: { A: "Gloria te da las gracias. Camina tranquila hacia la clínica.", B: "Gloria te da las gracias con una gran sonrisa y se va caminando, tranquila, hacia la clínica.", C: "Gloria te sonríe como se sonríe a un aliado. Se va hacia la clínica sin prisa: la crisis está resuelta." }, change: "sonrie", recap: "Ayudaste a Gloria a no perder su turno." },
      duerme: { text: { A: "Gloria sigue durmiendo. El celular vibra otra vez.", B: "Gloria sigue durmiendo en el banco. Su celular vibra de nuevo, sin resultado.", C: "Gloria sigue durmiendo, ajena al mundo. En algún lugar, una jefa de enfermeras mira el reloj." }, change: "duerme", recap: "Dejaste dormir a Gloria en el banco." },
      susto: { text: { A: "Gloria se va corriendo, asustada. Va hacia la clínica.", B: "Gloria se va corriendo, asustada. Por suerte, corre en dirección a la clínica.", C: "Gloria huye despavorida. Por pura casualidad, huye exactamente hacia su trabajo." }, change: "corre", recap: "Asustaste a Gloria al despertarla." },
    },
    speak: {
      A1: "¿Cuántas horas duermes normalmente?",
      A2: "¿Cuándo llegaste tarde por última vez y por qué?",
      B1: "¿Qué haces para no quedarte dormido cuando estás muy cansado?",
      B2: "¿Qué trabajo nocturno te parecería más duro y por qué?",
      C1: "¿En qué situaciones crees que despertar a un desconocido es un deber y en cuáles una intromisión?",
      C2: "¿Qué dice de una sociedad el modo en que trata a quienes trabajan mientras los demás duermen?",
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
    },
    ends: {
      encontrado: { text: { A: "Camila llega corriendo. Abraza a Toto. Toto está feliz.", B: "Camila llega corriendo por la Costanera. Toto salta a sus brazos y no para de mover la cola.", C: "Camila llega sin aliento. Toto salta a sus brazos y, durante un minuto, nadie en la Costanera es tan feliz como ellos." }, change: "sonrie", flag: "toto-encontrado", recap: "Encontraste a Toto y lo devolviste a Camila." },
      escapa: { text: { A: "Toto corre por el canal. Ya no lo ves.", B: "Toto se aleja corriendo por la orilla. Lo pierdes de vista.", C: "Toto se pierde en la noche, a lo largo del canal. Camila va a tener que seguir buscando." }, change: "corre", recap: "Toto se te escapó junto al canal." },
      solo: { text: { A: "Toto se queda debajo del banco, solo.", B: "Toto se queda escondido debajo del banco, temblando.", C: "Toto se queda bajo el banco, temblando. La noche sigue y nadie lo encuentra todavía." }, change: "sigue", recap: "Dejaste a Toto escondido bajo el banco." },
    },
    speak: {
      A1: "¿Cómo se llama un animal que conoces?",
      A2: "¿Cuándo buscaste algo durante mucho tiempo?",
      B1: "¿Cómo reaccionarías si encontraras un animal perdido en la calle?",
      B2: "¿Qué ventajas y desventajas tiene vivir con un perro en una ciudad grande?",
      C1: "¿En qué casos te parece razonable tratar a una mascota como a un miembro de la familia?",
      C2: "¿Qué crees que aprendemos de nosotros mismos al cuidar de un ser que depende por completo de nosotros?",
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
    },
    ends: {
      nuevo: { text: { A: "Inma escribe un poema nuevo. Lo lee en voz alta. Sonríe.", B: "Inma termina su primer poema nuevo y te lo lee en voz alta. Al final, sonríe.", C: "Inma termina el poema y lo lee en voz alta, con la voz un poco temblorosa. Esta vez no lo tira." }, change: "sonrie", recap: "Ayudaste a Inma a escribir un poema nuevo." },
      guarda: { text: { A: "Inma guarda un poema en el bolsillo. Los otros se van con el agua.", B: "Inma guarda un poema en el bolsillo. Los demás flotan canal abajo, hacia el mar.", C: "Inma se queda con un poema. Los demás se alejan flotando, como barquitos de papel." }, change: "sonrie", recap: "Convenciste a Inma de guardar un poema." },
      tira: { text: { A: "Inma tira todo al agua. Se va tranquila.", B: "Inma tira lo último al agua y se va caminando, tranquila.", C: "Inma tira la última hoja y se aleja del puente con paso ligero, sin mirar atrás." }, change: "se-va", recap: "Viste a Inma tirar sus poemas al agua." },
      manana: { text: { A: "Inma se va a casa. Mañana va a escribir.", B: "Inma se va a casa con la hoja en blanco. Mañana va a escribir.", C: "Inma se va con la hoja en blanco doblada en el bolsillo, como una promesa." }, change: "se-va", recap: "Inma se fue a casa para escribir mañana." },
      corre: { text: { A: "Inma se va corriendo del puente.", B: "Inma se va corriendo. Una hoja suelta cae al agua detrás de ella.", C: "Inma huye del puente. Detrás de ella, una última hoja cae al canal." }, change: "corre", recap: "Asustaste a Inma en el puente." },
    },
    speak: {
      A1: "¿Qué te gusta escribir?",
      A2: "¿Qué cosa vieja tiraste o regalaste recientemente?",
      B1: "¿Qué actividad creativa te gustaría empezar y por qué?",
      B2: "¿Qué harías con tus textos o dibujos antiguos si tuvieras que empezar de cero?",
      C1: "¿Cómo reconoces cuándo algo que has creado merece conservarse aunque no te guste del todo?",
      C2: "¿Qué relación hay, para ti, entre destruir lo que uno ha hecho y la necesidad de reinventarse?",
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
