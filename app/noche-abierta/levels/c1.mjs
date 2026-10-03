// Noche Abierta · C1 patch. See ../levels.mjs for the shape and merge rules.
//
// C1 · Leer entre líneas: the same night, but every situation asks for
// pragmatics. The learner reads intentions, chooses a register, reformulates
// for a different listener and negotiates without saying everything aloud.
// Grammar in play: mixed conditionals (si hubiera…, ahora…), concessives
// (aunque + subjuntivo), probability (habrá, sería), como si / sin que.

const GUARD = "Eres el guardia de noche del museo: sabes más de lo que cuentas. Contestas con evasivas a las preguntas directas y das un dato nuevo solo cuando alguien arriesga una hipótesis interesante.";

const C1 = {
  arrival: {
    premise: "Bajas del autobús en un barrio que conoces poco. Vale cumple treinta: hay una previa en su casa y una fiesta en una terraza, y lo demás está por verse. Esta noche no alcanza con entender lo que te dicen: vas a tener que leer lo que la gente quiere decir, elegir el tono justo y reformular cuando algo no cae bien.",
    warmup: [
      "Cuando alguien te dice «no hace falta que me regales nada», ¿cómo sabes si lo dice en serio? Cuenta una vez que lo leíste bien, o mal.",
      "¿Hablas distinto con tus amigos, con la familia de alguien o con gente que recién conoces? Pon un ejemplo de algo que dirías de tres maneras.",
      "Piensa en un plan que se arruinó por algo que nadie dijo en voz alta. ¿Qué se calló y qué habría pasado si alguien lo hubiera dicho a tiempo?",
    ],
    teacher: "Tres o cuatro minutos de charla libre. Escucha si matiza (en realidad, más bien, no es que…, sino…) y si puede reformular cuando le pides «dilo de otra manera». No corrijas todavía: anota dos recursos que usa bien y uno que evita.",
  },
  locations: {
    cafe: {
      focus: "Leer lo que el mensaje no dice y responder con el tono justo",
      help: {
        starters: ["Por cómo lo escribe, da la impresión de que…", "Lo que no termina de decir es…", "Lo leo más como… que como…", "Yo le contestaría algo como…", "Para que no suene a reproche, pondría…"],
        chunks: ["dar a entender", "leer entre líneas", "dejar en visto", "patear la pelota", "sin que suene a reproche"],
        vocab: ["el tono", "el sobreentendido", "la evasiva", "el doble check azul"],
      },
      activities: {
        "cafe-alla": {
          situation: "Hace veinte minutos que esperas a Nico en el café. Fue él quien eligió el lugar. De golpe te llegan dos mensajes seguidos.",
          thread: [
            { text: "Ay perdón, día de locos, después te cuento" },
            { text: "Si quieres arranca tú, yo caigo en un rato o te veo allá directamente, lo que te quede más cómodo" },
          ],
          ask: "Nico te deja la decisión a ti, pero no te da los datos para tomarla. ¿Qué intención lees detrás de «lo que te quede más cómodo»: descuido, culpa o que ya tiene otro plan?",
          next: { text: "¿Ya vienes? Los chicos están arriba hace rato, eh" },
          ask2: "Con este mensaje el «allá» se aclara y el tono cambia: ahora parece que quien llega tarde eres tú. ¿Cómo le marcas el malentendido sin que suene a reproche?",
          reply: "Graba dos audios con la misma información: uno para Nico, con confianza y un poco de ironía, y otro para Vale, que explique por qué llegas tarde a la terraza sin dejar mal parado a Nico.",
          role: "Eres Nico: escribes con evasivas y das por sentado que el otro sabe lo que tú sabes. No reconoces la confusión hasta que te la explican con claridad; ahí te ríes y pides perdón de verdad.",
          teacher: ["Cuando alguien te dice «como quieras», ¿lo tomas al pie de la letra?", "¿Qué te parece más descortés: un mensaje vago o un audio de tres minutos?"],
        },
        "cafe-equivocado": {
          situation: "Estás en la barra y te llega un mensaje de Lu. Al segundo renglón te das cuenta de que era para Martín, y de que no te deja muy bien parado.",
          thread: [
            { text: "Martín, ¿al final le compraste algo a Vale? Yo no tengo idea qué regalarle y encima ella anda diciendo que nadie se acordó. Ni le comentes nada a ya sabes quién, que se le escapa todo" },
          ],
          ask: "Lee el final con atención: «ya sabes quién». ¿Quién crees que es? ¿Cambia eso lo que haces con el mensaje?",
          next: { text: "Che, tú que estás con todos… ¿están armando algo? Porque los noto raros y no me gustan las sorpresas, eh" },
          ask2: "Vale te pregunta de frente y además avisa que no le gustan las sorpresas. ¿Lo dice en serio o se está curando en salud? ¿Cómo le respondes sin mentirle y sin delatar a nadie?",
          reply: "Escríbele a Lu: avísale del error, cuéntale qué le dijiste a Vale y dale a entender, con elegancia y sin enojarte, que leíste lo de «ya sabes quién».",
          role: "Primero eres Vale: no preguntas directo, tanteas con comentarios al pasar hasta que el otro se contradiga. Después eres Lu: te mueres de vergüenza y tratas de arreglarlo con humor.",
          teacher: ["¿Prefieres que te digan las cosas en la cara o que te las den a entender?", "¿Leíste alguna vez algo sobre ti que no tendrías que haber leído? ¿Qué hiciste con eso?"],
        },
        "cafe-grupo": {
          situation: "Estás por pagar y el grupo «Sábado» explota. Nadie dice que no a nada, pero cada mensaje empuja para otro lado.",
          thread: [
            { text: "Una idea nomás, eh: ¿y si en vez de la terraza vamos al bar de la esquina? Hay música en vivo. Si no, nada" },
            { text: "Yo ya pagué la entrada de la terraza, pero bueno, hagan lo que quieran" },
            { text: "A mí me da igual, decidan ustedes. Eso sí, mañana trabajo temprano" },
          ],
          ask: "Nadie se opone abiertamente, pero los tres están marcando un límite. ¿Qué dice en realidad cada mensaje? Reescríbelos como si cada uno hablara sin rodeos.",
          next: { text: "Ah, bueno. Nada, hagan lo que quieran, total es solo mi cumple" },
          ask2: "Vale usa casi las mismas palabras que Martín, pero con otra carga. ¿Qué está diciendo de verdad? ¿Qué escribes en el grupo para desactivar la tensión sin dejar en evidencia a Lu?",
          reply: "Manda al grupo una propuesta concreta que salve la terraza y recoja lo que pidieron los demás. Después reescríbela como mensaje privado para Vale, con un tono más cálido.",
          role: "Haz de cualquiera del grupo. Nunca dices «no» directamente: usas «bueno», «como quieran», «una idea nomás». Solo cedes cuando alguien nombra lo que de verdad te preocupa.",
          teacher: ["¿En tu idioma hay frases como «hagan lo que quieran» que significan lo contrario?", "¿Qué haces cuando en un grupo nadie dice lo que piensa?"],
        },
      },
    },
    departamento: {
      focus: "Inferir intenciones y tensiones a partir de detalles",
      help: {
        starters: ["Todo indica que…", "No me extrañaría que…", "Lo que me hace pensar que… es…", "Una cosa es…, y otra muy distinta…", "A juzgar por…"],
        chunks: ["dar por sentado", "no estar al tanto", "mantener las formas", "a escondidas de", "estar en el horno"],
        vocab: ["el cartel de la heladera", "el compañero de departamento", "la lista de invitados", "el vecino de abajo", "el portero eléctrico"],
      },
      activities: {
        "depto-un-minuto": {
          situation: "Vale te abre, te dice «ponte cómodo, ya vuelvo» y baja a buscar hielo con cara de que algo no le cierra. Tienes un minuto para mirar. Toca cada lugar.",
          items: [
            { id: "entrada", label: "Junto a la puerta", detail: "Ocho pares de zapatos alineados con una prolijidad casi militar. Adentro nadie tiene zapatos puestos: acá la regla se cumple." },
            { id: "heladera", label: "La puerta de la heladera", detail: "Un cartel con letra enorme: «Vecinos: silencio después de medianoche. Gracias». El «Gracias» está subrayado dos veces." },
            { id: "calendario", label: "El calendario de la cocina", detail: "En el día de hoy, con una letra que no es la de Vale: «Leo: EXAMEN, temprano». Al lado, con la letra de Vale, una carita que pide perdón." },
            { id: "mesa", label: "La mesa del living", detail: "Algo tapado con un repasador. Asoman dos velas, un 3 y un 0, y alrededor hay vasos para mucha más gente de la que entra en el living." },
            { id: "sillon", label: "El sillón del living", detail: "Una pila de abrigos y un libro de viajes sin envolver, todavía con el precio. Alguien lo compró a las apuradas." },
          ],
          ask: "No alcanza con describir: ¿qué tensión hay en esta casa? Di qué infieres, con qué grado de seguridad y qué pista te hace dudar.",
          reveal: "Vale vuelve y te dice casi en un susurro: «Leo no sabe que vienen veinte personas. Le dije que éramos “cuatro o cinco, algo tranqui”. Y mañana rinde».",
          ask2: "Leo llega en diez minutos y Vale te pide ayuda para decírselo. Arma con ella la conversación: qué palabras evitar, qué reconocer y qué ofrecerle a Leo para que no se sienta engañado.",
          role: "Eres Vale: culpable, pero a la defensiva. Minimizas («no es para tanto») hasta que te hacen ver cómo lo va a vivir Leo.",
          teacher: ["¿Una mentira chiquita para evitar una discusión sigue siendo una mentira?", "Si fueras Leo, ¿qué te molestaría más: la fiesta o que te la ocultaran?"],
        },
        "depto-timbre": {
          situation: "Vale está en la ducha. Suena el portero: «Hola, ¿qué tal? Soy Tomi, vengo con Sergio». Lo dice con una seguridad que no termina de convencerte. Mira antes de abrir.",
          items: [
            { id: "portero", label: "El portero eléctrico", detail: "Dos voces y risas. Una de ellas baja el volumen de golpe al decir «Tomi», como si no estuviera seguro de su papel." },
            { id: "celular", label: "El celular de Vale, en la mesa", detail: "Un mensaje de Sergio, sin leer: «¿Te jode si llevo a alguien? Te explico después, es medio largo»." },
            { id: "lista", label: "La lista de invitados", detail: "En la heladera, la lista de invitados. Sergio está; Tomi, no. Al pie, con letra de Vale: «¡NO avisar a los de abajo!»." },
            { id: "ventana", label: "La ventana que da a la calle", detail: "En la vereda, uno de los dos sostiene una torta con las dos manos, como quien lleva una ofrenda." },
          ],
          ask: "Junta las pistas: ¿quién es Tomi, qué busca y por qué Sergio dice que «es medio largo»? Formula dos hipótesis y di cuál te parece más probable.",
          reveal: "Desde la ducha, Vale grita: «¡¿Tomi?! ¡Es el vecino de abajo, el que siempre se queja del ruido! ¿Qué hace con Sergio?».",
          ask2: "Ya están subiendo, y Vale no sabe si Tomi viene a hacer las paces o a vigilar el volumen. ¿Cómo lo recibes para que tus palabras sirvan en los dos casos?",
          role: "Eres Tomi: simpático y un poco atrevido. La torta es para hacer las paces, pero también quieres dejar claro, con muchísima cortesía, que más tarde la música tiene que bajar.",
          teacher: ["¿Cómo haces sentir bienvenido a un vecino que se queja de todo?", "¿Hay frases que en tu cultura suenan amables pero esconden una advertencia?"],
        },
      },
    },
    restaurante: {
      focus: "Decidir con tacto: anticipar cómo cae cada opción en los demás",
      help: {
        starters: ["Sin ánimo de complicar, …", "Lo tiro como idea: …", "No sé si a alguien más le pasa, pero…", "Para que nadie quede incómodo, …", "Entiendo la lógica, aunque…"],
        chunks: ["hacerse cargo", "poner en evidencia", "hacer la vista gorda", "salir del paso", "contar monedas"],
        vocab: ["el cubierto", "el reclamo", "la cuenta dividida", "la propina", "el mozo"],
      },
      activities: {
        "resto-cuenta": {
          situation: "Son cinco. Lu solo tomó una gaseosa porque ya había cenado. Martín, con la tarjeta en la mano: «¿Dividimos en cinco y listo? Así no hacemos cuentas». Lu sonríe, pero se queda callada.",
          prompt: "Todos asienten salvo Lu, que claramente está incómoda aunque no dice nada. ¿Intervienes? Elige cómo.",
          options: [
            {
              id: "iguales",
              label: "No intervienes: Lu es grande y puede hablar por sí misma.",
              result: "Se divide en cinco. Lu paga sin protestar, pero cuando Vale propone pedir postre dice «yo paso, estoy bien así» con una sonrisa forzada.",
              ask: "Más tarde, a solas, quieres sacar el tema con Lu sin que parezca que le tienes lástima. ¿Cómo lo abres?",
            },
            {
              id: "cada-uno",
              label: "Propones que cada uno pague lo suyo, sin nombrar a Lu.",
              result: "Martín acepta a regañadientes y se arma un lío con el vino y las entradas compartidas. Lu entiende que el cambio fue por ella y te agradece con la mirada.",
              ask: "Martín te dice «¿para qué complicarla tanto?». Defiende tu criterio sin delatar que lo hiciste por Lu.",
            },
            {
              id: "otra",
              label: "Le preguntas a Lu, delante de todos, qué le parece a ella.",
              result: "Lu se pone colorada: «No, no, está todo bien». Ahora todos la miran y quedó en una posición más incómoda que antes.",
              ask: "Tu intervención la expuso. ¿Cómo reformulas lo que dijiste para devolverle una salida digna delante de todos?",
            },
          ],
          close: "¿Cuándo intervenir por alguien es respeto y cuándo es hablar en su lugar? ¿Dónde pones el límite?",
          role: "Eres Martín: no ves el problema y te molesta que «se haga un drama» por plata. Solo cambias si te lo plantean sin tratarte de tacaño ni de insensible.",
          teacher: ["¿Hablar de plata entre amigos es incómodo en tu cultura?", "¿Te pasó estar incómodo con algo y que nadie lo notara?"],
        },
        "resto-plato": {
          situation: "Lu es vegetariana y pidió ravioles de verdura. Llegan con salsa de carne. Lu dice «no pasa nada» demasiado rápido. El mozo ya se fue y la cocina está desbordada.",
          prompt: "¿Cómo manejan el reclamo, sabiendo que Lu no quiere ser el centro de la escena?",
          options: [
            {
              id: "devolver",
              label: "Llamas al mozo y reclamas tú, con firmeza.",
              result: "El mozo se disculpa y se lleva el plato, pero el nuevo tarda veinticinco minutos. Lu te susurra: «No hacía falta, de verdad».",
              ask: "Ese «no hacía falta», ¿es un reproche o un agradecimiento disfrazado? ¿Qué le contestas?",
            },
            {
              id: "compartir",
              label: "Le ofreces a Lu la mitad de tu plato, sin hacer ruido.",
              result: "Lu acepta la mitad de tu ensalada, aliviada. Pero cuando llega la cuenta, los ravioles con carne están cobrados igual.",
              ask: "Ahora sí hay que hablar con el mozo, que atiende diez mesas. Pídele que no cobre el plato con firmeza y cordialidad, sin que suene a amenaza.",
            },
            {
              id: "nada",
              label: "Respetas lo que dijo Lu y no reclaman.",
              result: "Lu aparta la carne y casi no come. Media hora después, ya con la cuenta paga, dice con una risita que se muere de hambre y propone ir a comer a otro lado.",
              ask: "Lu dijo que no importaba, pero su comentario posterior sugiere otra cosa. ¿Qué te dice ese desfase entre lo que dijo y lo que hizo? ¿Cómo lo leerías la próxima vez?",
            },
          ],
          close: "Respetar el «no pasa nada» de alguien, ¿es respetarlo o dejarlo solo? Piénsalo con un ejemplo tuyo.",
          role: "Eres el mozo: amable pero desbordado. Primero sostienes que «el plato salió como dice la carta»; cedes si te hablan con firmeza y sin prepotencia.",
          teacher: ["¿Reclamarías por otra persona si ella te pide que no lo hagas?", "¿Cambia tu forma de reclamar si ves que el mozo está desbordado?"],
        },
        "resto-al-lado": {
          situation: "En la mesa de al lado festejan un cumpleaños a los gritos. Martín intenta contarles algo hace rato y se nota que es importante: ya empezó tres veces la misma frase.",
          prompt: "¿Qué priorizan: el clima con la mesa de al lado o lo que Martín no termina de decir?",
          options: [
            {
              id: "mozo",
              label: "Le piden al mozo que intervenga.",
              result: "El mozo se encoge de hombros: «Es un cumpleaños, es un ratito». Media hora después siguen igual y Martín dice «bueno, no importa, otro día les cuento».",
              ask: "«Otro día les cuento» puede ser alivio o decepción. ¿Cómo distingues una cosa de la otra y qué le dices a Martín?",
            },
            {
              id: "hablar",
              label: "Vas tú a hablar con la mesa de al lado.",
              result: "La cumpleañera se disculpa con muchísima simpatía, baja el volumen y te invita a brindar. Ahora volver a tu mesa sin parecer antipático es todo un arte.",
              ask: "Te ofrecen una copa y una porción de torta. Agradece y vuelve a tu mesa sin desairarlos: busca una fórmula que cierre la charla con gracia.",
            },
            {
              id: "sumarse",
              label: "Se suman al festejo de los de al lado.",
              result: "Juntan las mesas y cantan el feliz cumpleaños. Martín sonríe, pero en un momento te dice al oído: «Necesitaba contarles algo, pero ya fue».",
              ask: "«Ya fue» no suena a que ya fue. ¿Cómo le abres a Martín un momento para hablar sin forzarlo ni dejarlo en evidencia?",
            },
          ],
          close: "¿Cómo te das cuenta de que alguien necesita hablar aunque diga que no es nada?",
          role: "Eres la cumpleañera de al lado: encantadora y expansiva. No captas indirectas; solo bajas el volumen si te lo piden con calidez y claridad a la vez.",
          teacher: ["¿Cómo pides silencio a desconocidos sin quedar como un amargo?", "¿Dijiste alguna vez «no es nada» cuando sí era algo?"],
        },
      },
    },
    plaza: {
      hubPrompt: "En la plaza hay gente con ganas de hablar, y no todos dicen lo que quieren decir. Elige con quién charlar.",
      focus: "Conversar con espontaneidad, captar lo que el otro no dice y ajustar el tono",
      help: {
        starters: ["Te escucho y me da la sensación de que…", "No sé si te sirve, pero…", "Corrígeme si me equivoco: …", "Más que…, yo pensaría en…", "Puesto así, suena a que…"],
        chunks: ["dar el brazo a torcer", "no hacerse mala sangre", "ponerse en el lugar del otro", "quedar como un rescatador", "tomar a la ligera"],
        vocab: ["el banco", "la fuente", "el último autobús", "la jubilación", "el desplante"],
      },
      activities: {
        pablo: {
          says: "Hace cuarenta y cinco minutos que lo espero. Igual no pasa nada, eh, ya estoy acostumbrado. Con él siempre es así. Estoy acostumbrado.",
          ask: "Pablo dice que «no pasa nada», pero repite que está acostumbrado. ¿Qué te está diciendo en realidad? Responde a eso, no a sus palabras.",
          followUps: [
            "El amigo aparece sonriendo, como si nada, y Pablo te mira esperando que digas algo. ¿Te metes o no? ¿Por qué?",
            "Pablo te pregunta si debería decirle algo a su amigo. Ayúdalo a armar la frase: clara, pero sin romper la amistad.",
          ],
          role: "Eres Pablo: dices que no te importa y cada frase demuestra lo contrario. Te ablandas si alguien nombra lo que sientes.",
        },
        ines: {
          says: "Me mudé hace una semana. Todo bien, el barrio es lindo… Salí a dar una vuelta porque el departamento está muy silencioso.",
          ask: "Inés no dice que se siente sola, pero lo deja ver. ¿Cómo le ofreces compañía o ideas sin que parezca que te da lástima?",
          followUps: [
            "Inés te pregunta: «¿A tú te costó adaptarte cuando cambiaste de lugar?». Cuéntale algo tuyo que la anime a hablar de lo suyo.",
            "Si hubieras llegado a este barrio sin conocer a nadie, ¿cómo sería tu vida acá ahora?",
          ],
          role: "Eres Inés: reservada, minimizas lo que te pasa. Te abres si el otro comparte primero algo personal.",
        },
        pareja: {
          says: "Ana: «Yo quiero ir a bailar, pero lo que él quiera, eh». Diego: «No, no, vamos a bailar si ella quiere». Los dos te miran como si tuvieras la respuesta.",
          ask: "Los dos ceden en voz alta y ninguno está contento. ¿Qué pasa entre ellos? ¿Cómo lo nombras sin meterte demasiado?",
          followUps: [
            "Diego te dice por lo bajo: «Estoy agotado, pero si se lo digo va a pensar que no quiero salir con ella». ¿Cómo lo ayudas a decirlo sin que suene a rechazo?",
            "Ana te pregunta en voz baja: «¿Tú le ves cara de cansado o soy yo?». ¿Qué le respondes sin traicionar a Diego?",
          ],
          role: "Haz de Ana y de Diego: los dos son complacientes de más y se ofenden un poquito cada vez que el otro cede.",
        },
        ramiro: {
          says: "Se me fue el último autobús por un minuto. Un clásico. Vivo lejos, el taxi está imposible y casi no me queda batería. Tranqui, si hace falta duermo en este banco, ya fui scout.",
          ask: "Ramiro hace chistes, pero está en un problema. ¿Le sigues el humor, lo tomas en serio o las dos cosas? Proponle una salida sin que sienta que lo estás rescatando.",
          followUps: [
            "Ramiro te dice, medio en broma: «¿No tendrás un sillón libre, no?». ¿Cómo lees esa pregunta y qué le contestas?",
            "Si esta noche te hubiera pasado a ti, ¿cómo estarías volviendo a tu casa ahora?",
          ],
          role: "Eres Ramiro: humor negro para todo. Rechazas la primera idea con un chiste y aceptas ayuda solo si te la ofrecen sin dramatismo.",
        },
        marta: {
          says: "¡Hoy me jubilé! Cuarenta años en la misma oficina. Mis compañeros se fueron temprano… bueno, tienen familia, es lógico. Yo no tengo apuro.",
          ask: "Marta celebra, pero en lo que cuenta hay una nota de tristeza. ¿Dónde la notas? ¿Cómo acompañas su alegría sin ignorar lo otro?",
          followUps: [
            "Marta te dice: «Ustedes cambian de trabajo como de camiseta». ¿Es una crítica, un elogio o envidia? Respóndele en el mismo tono.",
            "Si hubieras pasado cuarenta años en el mismo lugar, ¿quién serías hoy? ¿Te gustaría ser esa persona?",
          ],
          role: "Eres Marta: alegre, conversadora, das consejos de vida. De vez en cuando se te escapa un comentario melancólico y enseguida cambias de tema.",
        },
        kenji: {
          says: "Perdón, mi español es poco. Quiero lugar «auténtico». Pero todos dicen el mismo restaurante… ¿Es un secreto?",
          ask: "Kenji entiende poco. Recomiéndale un lugar y reformula cada idea en una versión más simple, sin que suene a que le hablas como a un chico.",
          followUps: [
            "Kenji repite tu explicación y entiende otra cosa. Corrige el malentendido con otras palabras, sin repetir las mismas.",
            "¿Qué diferencia hay entre simplificar para alguien y hablarle con condescendencia? ¿Cómo se nota en el tono?",
          ],
          role: "Eres Kenji: entiendes la mitad, repites palabras con dudas y te pierdes con los modismos. Si te hablan muy lento y muy fuerte, te ofendes un poco.",
        },
        sofia: {
          says: "Me cancelaron una cita a último momento, pero igual salí, ¿viste? Hay un bar de jazz acá a la vuelta. Si te copa, vente; si no, todo bien, eh.",
          ask: "Sofía te invita con la salida ya preparada («si no, todo bien»). ¿Cómo lees esa invitación? Acepta o rechaza de un modo que la deje bien parada en los dos casos.",
          followUps: [
            "Le dices que no y Sofía contesta «obvio, ni lo pensé mucho». ¿Te lo crees? ¿Cómo cierras la charla con calidez?",
            "¿Cuál es tu fórmula para decir que no sin dar explicaciones de más? Pruébala ahora con Sofía.",
          ],
          role: "Eres Sofía: segura y directa en la superficie, aunque la cita cancelada te pesa. No insistes; si te rechazan con torpeza, se te nota.",
        },
      },
    },
    bar: {
      hubPrompt: "En el bar pasan varias cosas a la vez, y en todas alguien dice una cosa y quiere otra. Acércate a una.",
      focus: "Negociar con tacto, cambiar de registro y poner límites sin romper el vínculo",
      help: {
        starters: ["Te lo digo con todo el cariño: …", "No lo tomes a mal, pero…", "Entiendo perfectamente que…; lo que te pido es…", "¿Te parece que lo veamos de otra forma?", "Quizás me expresé mal: lo que quise decir es…"],
        chunks: ["poner un límite", "bajar un cambio", "no tomárselo a pecho", "sacar de contexto", "dejar pasar una"],
        vocab: ["la ronda", "la indirecta", "el malentendido", "la excusa", "la chicana"],
      },
      activities: {
        fuerte: {
          situation: "Un hombre en la barra lleva tres llamadas a los gritos. Tu amiga ya te dijo dos veces «no, nada, después te cuento», con cara de que no te va a contar.",
          task: "Pídele al hombre que baje la voz. Prueba dos versiones, una muy cortés y otra más directa, y decide cuál funciona mejor con alguien como él.",
          pushback: "«¿Perdón? ¿Me vas a decir cómo hablar? Es un bar, flaco, no una biblioteca».",
          task2: "Se lo tomó como algo personal. Reformula tu pedido para que no lo sienta como una corrección y negocia algo concreto con él.",
          role: "Eres el hombre del teléfono: interpretas todo como un ataque. Si el otro reformula sin humillarte, cedes y hasta pides disculpas.",
        },
        quedarse: {
          situation: "Leo, el compañero de departamento de Vale, rinde mañana temprano y ya dijo «me voy» tres veces. El grupo insiste en que se quede «una más». Leo se ríe, pero ya tiene el abrigo puesto.",
          task: "Ayuda a Leo a irse. El desafío: que el grupo entienda que va en serio sin que Leo quede como aguafiestas.",
          pushback: "Nico, con una sonrisa: «Leo siempre igual, eh. Para eso no hubieras venido».",
          task2: "El comentario de Nico es mitad broma, mitad reproche. Responde a las dos mitades y cierra la salida de Leo con buena onda.",
          role: "Eres el grupo: insistes con chicanas cariñosas. Solo sueltas a Leo cuando alguien convierte su despedida en algo simpático.",
        },
        billetera: {
          situation: "Llega la ronda. Martín se palpa los bolsillos y pone cara de pánico: se olvidó la billetera. Es la segunda vez este mes; nadie dice nada, pero todos se miran.",
          task: "Pagas tú, pero quieres que Martín registre que es la segunda vez. Díselo sin humillarlo delante del grupo.",
          pushback: "Martín, a la defensiva: «¿Y eso qué quiere decir? ¿Me estás diciendo que me hago el vivo?».",
          task2: "Martín reaccionó a algo que no dijiste. Aclara qué quisiste decir sin echarte atrás del todo y sin echar más leña al fuego.",
          role: "Eres Martín: te da vergüenza y lo tapas con agresividad. Te calmas si el otro reconoce tu incomodidad antes de insistir.",
        },
        fila: {
          situation: "Hace veinte minutos que esperas en la barra. Dos chicas se ponen delante tuyo con total naturalidad, como si la fila fuera una sugerencia.",
          task: "Marcales que estabas antes, sin acusarlas de colarse.",
          pushback: "Una sonríe: «Ay, perdón, un amigo nos estaba guardando el lugar». Mira alrededor. No hay ningún amigo.",
          task2: "Sabes que es una excusa. ¿Le dejas una salida elegante o le señalas la mentira? Hazlo de un modo que no te traicione a ti.",
          role: "Eres una de las chicas: simpática y caradura. Si te dejan una salida elegante, la tomas y pides disculpas; si te acorralan, te ofendes.",
        },
        caro: {
          situation: "Vale propone terminar en un bar de cócteles carísimo. Todos dicen «¡vamos!», aunque ves que Lu mira los precios en el celular. Tú tampoco quieres gastar tanto.",
          task: "Plantéalo de manera que Lu pueda sumarse sin exponerse y Vale no sienta que le arruinas el cumple.",
          pushback: "Vale, un poco herida: «Bueno, si no les copa mi plan, díganlo y listo».",
          task2: "Vale lo tomó como un rechazo a ella, no al precio. Reencuadra la conversación para separar las dos cosas.",
          role: "Eres Vale: entusiasmada y susceptible. Si alguien habla de plata, sientes que critican tu fiesta; te calmas si te proponen algo que te siga poniendo en el centro.",
        },
        cancelo: {
          situation: "Nico cancela por tercera vez: «Perdón, al final no llego, después te explico». Ese plan lo habían armado entre los dos.",
          task: "Llámalo. Quieres decirle que la situación ya te cansó sin que suene a sermón: elige qué dices y qué te guardas.",
          pushback: "Un silencio largo. Después: «Es que… estoy pasando un momento complicado. No tenía ganas de contarlo por mensaje».",
          task2: "Lo que tenías pensado decir ya no corresponde. Cambia de registro sobre la marcha: ¿qué le dices y qué le ofreces?",
          role: "Eres Nico: al principio das excusas vagas. Si te reprochan, te cierras; si te preguntan con cuidado, cuentas lo que te pasa.",
        },
        invitacion: {
          situation: "Sergio llega de traje, con un regalo envuelto en papel dorado. Todos están en zapatillas. Alguien del grupo suelta una risita y Sergio la escucha.",
          task: "Ayuda a Sergio a sentirse cómodo y, de paso, desactiva la risita sin retar a nadie.",
          pushback: "Sergio, colorado: «Me dijeron “algo tranqui por el cumple”. Para mí tranqui es una cena. ¿Cómo iba a saber?».",
          task2: "Reformula la invitación original para mostrar que el malentendido era razonable, y convierte su traje en algo a favor de la noche.",
          role: "Eres Sergio: avergonzado. Si te tratan con pena, te sientes peor; si alguien le pone humor sin burlarse, te sueltas.",
        },
      },
    },
    auto: {
      focus: "Razonar con condiciones mixtas y concesiones cuando todo cambia",
      help: {
        starters: ["Si hubiéramos salido antes, ahora…", "Aunque consigamos…, igual…", "Si no fuera por…, ya…", "Por más que…, …", "En caso de que…, …"],
        chunks: ["a menos que", "siempre y cuando", "por si acaso", "de no ser por", "aun así"],
        vocab: ["el capó", "la grúa", "el auxilio mecánico", "el bidón", "la persiana del taller"],
      },
      grammar: {
        title: "Condiciones mixtas y concesivas",
        rows: [
          { form: "si + pluscuamperfecto de subjuntivo → condicional (un pasado que pesa ahora)", example: "Si hubiera cargado el celular, ahora podría llamar a la grúa." },
          { form: "si + imperfecto de subjuntivo → condicional compuesto (un rasgo de siempre, un efecto pasado)", example: "Si fuera más precavida, no habría dejado todo para último momento." },
          { form: "aunque + subjuntivo → concesión posible o no comprobada", example: "Aunque llegue la grúa, va a necesitar un taxi igual." },
          { form: "siempre que / a menos que / en caso de que + subjuntivo", example: "Acepto que me lleve, siempre que comparta la ubicación con ustedes." },
        ],
      },
      activities: {
        "auto-aeropuerto": {
          situation: "La calle está casi vacía. Carla tiene el capó abierto, sale un poco de humo y su vuelo sale muy temprano. Cuando le ofreces ayuda, contesta «no, no, ya lo resuelvo», pero no se mueve.",
          ask: "Carla rechaza la ayuda, pero no se mueve. ¿Cómo le ofreces una mano sin que se sienta invadida? Después piensa con ella dos planes, aunque ninguno sea perfecto.",
          conditions: [
            { text: "Empieza a llover fuerte y Carla dice: «Si hubiera salido antes, ahora estaría en casa».", ask: "Carla se culpa. ¿Le sigues el razonamiento o la traes al presente? Respóndele con otra condicional que mire hacia adelante." },
            { text: "El celular de Carla tiene 4 % de batería y no sabe ningún número de memoria.", ask: "Aunque consigan cargarlo un rato, ¿qué hacen con tan poco margen? Ordena las prioridades y justifica el orden." },
            { text: "Un hombre frena y se ofrece a llevarla. Parece amable, pero insiste un poco de más.", ask: "Carla te mira como pidiendo permiso. Sin decidir por ella, ¿cómo le haces notar lo que te inquieta? Piensa en una condición que haría aceptable el viaje." },
            { text: "El taller de la esquina cierra en diez minutos y el mecánico ya está bajando la persiana.", ask: "Tienes treinta segundos para que el mecánico no baje la persiana. ¿Apelas a la empatía, a la urgencia o le ofreces algo? Elige y dilo." },
          ],
          close: "Cuenta cómo terminó la noche de Carla y qué habría cambiado si una sola cosa hubiera sido distinta. Usa por lo menos una condicional mixta y una concesiva.",
          role: "Eres Carla: orgullosa y desbordada. Dices que no necesitas ayuda mientras la pides con los ojos; aceptas si te la ofrecen como algo natural, no como un rescate.",
        },
        "auto-gasolina": {
          situation: "Un señor empuja su auto hasta la vereda: se quedó sin gasolina a tres cuadras de la estación de servicio. Se llama Julio y está tranquilo, demasiado tranquilo, como si no fuera la primera vez.",
          ask: "¿Qué te dice esa tranquilidad sobre Julio? ¿Cambia en algo cuánto te involucras?",
          conditions: [
            { text: "La estación de servicio cierra en veinte minutos, y Julio arranca a contarte una anécdota.", ask: "¿Cómo cortas la anécdota sin ser descortés? Propón un plan que funcione aunque la estación cierre antes de que lleguen." },
            { text: "Julio tiene un bidón vacío en el baúl. «Yo iría, pero con esta espalda…», dice, y no termina la frase.", ask: "Julio no te pide que vayas tú, pero lo da a entender. ¿Te ofreces o esperas a que lo diga? ¿Qué cambia en cada caso?" },
            { text: "Julio te cuenta que va a la fiesta de Vale. Es su papá, y ella no sabe que viene.", ask: "¿Le avisas a Vale aunque se arruine la sorpresa? Si lo hubieras sabido desde el principio, ¿habrías hecho algo distinto?" },
          ],
          close: "Si te hubiera pasado a ti lo de Julio, ¿quién estaría ahora a tu lado? Cuenta a quién llamarías y por qué justo a esa persona.",
          role: "Eres Julio: tranquilo y charlatán; das a entender las cosas en vez de pedirlas. Si te preguntan directo, te ríes y lo admites.",
        },
      },
    },
    museo: {
      hubPrompt: "Hoy el museo abre de noche. Cada pieza guarda una historia con huecos, y vas a tener que leer lo que dejaron sin decir. Elige una.",
      focus: "Narrar el pasado con matices: inferir intenciones, dudar y reformular la historia",
      help: {
        starters: ["Todo hace pensar que…", "Lo que no sabremos nunca es si…", "Visto desde hoy, …", "Si no hubiera…, quizás…", "Lo más probable es que ya hubiera…"],
        chunks: ["a juzgar por", "a sabiendas de que", "sin que nadie se enterara", "como si", "a esa altura"],
        vocab: ["la vitrina", "la pieza", "la dedicatoria", "el testimonio", "el dorso"],
      },
      grammar: {
        title: "Contar el pasado con distancia",
        rows: [
          { form: "Pluscuamperfecto de subjuntivo: lo que no llegó a pasar", example: "Si el tren hubiera salido, nunca habría conocido a su marido." },
          { form: "Futuro y condicional de probabilidad: suponer", example: "Tendría unos veinte años; habrá sabido que no iba a volver." },
          { form: "Como si / sin que + subjuntivo: el modo y lo que nadie vio", example: "Se fue sin que nadie lo notara, como si lo hubiera ensayado." },
        ],
      },
      activities: {
        foto: {
          plaque: "Apareció en una valija abandonada en una estación de tren. Cinco personas en una playa: cuatro miran a cámara y una se tapa la cara con un sombrero, como si no quisiera quedar registrada.",
          ask: "¿Por qué alguien no querría salir en una foto de vacaciones? Propón dos lecturas y di cuál te convence más.",
          detail: "Atrás, en lápiz: «El último verano antes de todo». La letra es firme, pero el «todo» está repasado varias veces.",
          ask2: "¿Qué será «todo»? Cuenta qué pasó después de ese verano y deja claro qué es dato y qué es suposición tuya.",
          role: GUARD,
        },
        telefono: {
          plaque: "Estuvo en una esquina de este barrio. Los vecinos cuentan que una noche sonó durante una hora y nadie atendió. Algunos lo cuentan como un misterio; otros, con una sonrisa incómoda.",
          ask: "¿Por qué algunos vecinos sonreirán al contarlo? ¿Qué sabrán que no dicen?",
          detail: "A la mañana siguiente, una mujer atendió por fin. Escuchó una sola frase y se fue llorando. Nunca dijo si de tristeza o de alivio.",
          ask2: "Cuenta la escena dos veces: una en la que llora de tristeza y otra de alivio. ¿Qué frase cambia todo?",
          role: GUARD,
        },
        boleto: {
          plaque: "Buenos Aires – Mendoza, 14 de julio. Ese tren nunca salió de la estación, y el pasajero nunca pidió que le devolvieran la plata.",
          ask: "¿Qué nos dice que el pasajero no reclamara la plata del boleto? Arma una hipótesis sobre lo que pasó ese día.",
          detail: "El boleto tiene un nombre escrito a mano, una mancha de café y, al dorso, un número de teléfono tachado con fuerza.",
          ask2: "¿De quién era ese número y por qué lo tachó? Narra la noche del pasajero como la contaría alguien que lo conocía bien.",
          role: GUARD,
        },
        carta: {
          plaque: "Una mujer la encontró detrás de un mueble el día que se mudaba, veinte años después de que fue escrita. Cuenta que dudó una semana antes de abrirla.",
          ask: "¿Por qué tardaría una semana en abrir una carta vieja? ¿Qué temía encontrar?",
          detail: "Adentro decía: «Si me esperas, vuelvo en marzo». No tenía firma: no hacía falta.",
          ask2: "Si la hubiera encontrado a tiempo, ¿cómo sería hoy su vida? Cuenta también qué hizo en realidad cuando la leyó.",
          role: GUARD,
        },
        valija: {
          plaque: "Llegó a la oficina de objetos perdidos del puerto. Nadie la reclamó nunca, aunque el nombre del dueño estaba escrito en la etiqueta.",
          ask: "Si el nombre estaba a la vista, ¿por qué nadie la buscó? ¿No pudo o no quiso? Defiende una de las dos opciones.",
          detail: "Adentro: un vestido de novia doblado con cuidado, un mapa de Italia con una ciudad marcada y un pasaje de barco sin usar.",
          ask2: "Con esos tres objetos, cuenta la historia desde el punto de vista de quien no subió al barco.",
          role: GUARD,
        },
        televisor: {
          plaque: "En este televisor, medio barrio vio la llegada a la Luna. La familia lo donó con una sola condición: que el cartel no lleve su apellido.",
          ask: "¿Qué puede querer olvidar una familia de una noche que el mundo entero recuerda? Imagina cómo estaba la casa.",
          detail: "Mientras todos miraban la Luna, el hijo mayor se fue de la casa sin avisar. Su madre fue la única que lo vio salir, y no dijo nada.",
          ask2: "¿Por qué la madre lo dejó ir en silencio? Cuenta esa noche desde ella.",
          role: GUARD,
        },
        bicicleta: {
          plaque: "Un cartero la usó treinta años en este barrio. Los vecinos lo recuerdan como «muy correcto, muy reservado». El último día de trabajo no volvió al correo.",
          ask: "«Muy correcto, muy reservado»: ¿qué puede esconder una descripción así? ¿Cómo era el cartero detrás de esa imagen?",
          detail: "Esa tarde entregó su última carta. Estaba dirigida a él, y la letra era la suya.",
          ask2: "¿Por qué se escribió a sí mismo? ¿Qué decía la carta y qué hizo después?",
          role: GUARD,
        },
        habitacion: {
          plaque: "Así quedó el cuarto de una estudiante: una máquina de escribir, una planta, el póster de un recital y la cama sin deshacer. Según la familia, alguien siguió regando la planta durante años.",
          ask: "¿Quién habrá seguido regando la planta y qué nos dice eso de la familia?",
          detail: "En la máquina de escribir quedó una hoja con una sola línea: «Hoy decidí irme». Debajo, tapada con corrector, había otra palabra.",
          ask2: "¿Qué palabra habrá tapado? Cuenta qué decidió, adónde fue y si alguna vez volvió.",
          role: GUARD,
        },
        caja: {
          plaque: "Apareció una mañana en la puerta del museo con una nota de letra temblorosa: «Esto tiene que estar acá». Nadie la firmó.",
          ask: "¿Qué clase de persona deja algo así sin firmar? Dedúcelo de la nota y de cómo la dejó.",
          detail: "Cuando la arreglaron, tocaba la misma canción que suena todas las noches en el bar de enfrente. El dueño del bar dice que es «pura casualidad».",
          ask2: "¿Le crees al dueño del bar? Cuenta qué había pasado antes y por qué él prefiere hablar de casualidad.",
          role: GUARD,
        },
      },
    },
    taxi: {
      focus: "Comparar opciones sopesando también lo que no está en los datos",
      help: {
        starters: ["Sobre el papel…, pero en la práctica…", "Lo que inclina la balanza es…", "Aunque salga más caro, …", "No es tanto… como…", "Puesto a elegir, …"],
        chunks: ["salir caro en otro sentido", "a la larga", "valer la pena", "tener en cuenta", "quedar mal con alguien"],
        vocab: ["el corte de calle", "la tarifa", "el taxímetro", "el kiosquero", "el recorrido"],
      },
      activities: {
        "taxi-cortado": {
          situation: "Vas en taxi a la terraza. A dos cuadras, la policía corta la calle por un recital. El conductor te mira por el espejo y pregunta «¿Qué hacemos?» con un tono que deja claro que él ya tiene una preferencia.",
          prompt: "Los datos no lo dicen todo: piensa también qué costo social tiene cada opción. Compara y elige.",
          options: [
            {
              id: "caminar",
              label: "Bajar y caminar entre la gente",
              result: "Cruzas el recital y te encuentras a Nico en primera fila. Te abraza: «¡Quédate un tema, uno solo!». Vale ya te escribió dos veces.",
              ask: "Nico y Vale te tironean. Háblale a Nico de forma que no se sienta dejado de lado, y escríbele a Vale de forma que no parezca una excusa.",
            },
            {
              id: "rodear",
              label: "Pedirle que rodee por el puerto",
              result: "El conductor toma el puerto, contento: era lo que él quería. Llegas cómodo, pagas el doble y te pierdes el brindis. Vale te recibe con un «bueno, llegaste» un poco seco.",
              ask: "Ese «bueno, llegaste» tiene algo de reproche. ¿Cómo lo desarmas sin justificarte de más?",
            },
            {
              id: "esperar",
              label: "Esperar con el motor apagado",
              result: "El conductor apaga el motor y pone la radio. Cuando suena un tango, se le quiebra la voz: veinte años fue músico. Cambia de tema enseguida.",
              ask: "El conductor abrió una puerta y la cerró. ¿Le preguntas por su música o respetas que cambió de tema? ¿Cómo lo haces en cada caso?",
            },
          ],
          close: "Cuando comparas opciones, ¿cuánto pesa lo que no se puede medir: el humor de alguien, quedar bien, una conversación inesperada?",
          role: "Eres el conductor: charlatán y con opiniones firmes. No dices qué prefieres, pero lo das a entender con suspiros y comentarios al pasar.",
        },
        "taxi-mayor": {
          situation: "Le dijiste «a la calle Mayor». Diez minutos después ves que van a la Plaza Mayor, al otro lado de la ciudad. El conductor jura que dijiste «plaza».",
          prompt: "El taxímetro sigue corriendo y el malentendido es de los dos. Compara rápido y decide.",
          options: [
            {
              id: "seguir",
              label: "Seguir hasta la plaza y aprovecharla",
              result: "Llegas a la Plaza Mayor y hay un mercado nocturno. Es lindo, pero estás lejísimos y Vale te pregunta por tercera vez dónde andas.",
              ask: "Mándale a Vale un audio que convierta el error en anécdota, sin que suene a que te estás divirtiendo sin ella.",
            },
            {
              id: "volver",
              label: "Pedir que dé la vuelta y discutir después",
              result: "El conductor da la vuelta, pero insiste en que el error fue tuyo y que vas a pagar todo. La avenida está trabada y el clima en el auto se pone tenso.",
              ask: "Negocia el precio: reconstruye qué dijiste y qué pudo entender él, y propón una salida en la que ninguno quede como mentiroso.",
            },
            {
              id: "bajar",
              label: "Bajar y buscar otro auto",
              result: "Te bajas en una esquina desconocida. La aplicación no encuentra autos y la llovizna se vuelve lluvia. En un kiosco abierto, el kiosquero te mira con desconfianza.",
              ask: "Entras al kiosco empapado y el kiosquero desconfía. Pide ayuda de un modo que lo desarme en las dos primeras frases.",
            },
          ],
          close: "Cuando un malentendido es de los dos, ¿quién tendría que ceder? ¿Cómo se negocia sin buscar culpables?",
          role: "Eres el conductor: orgulloso, no te gusta que te corrijan. Solo cedes si el otro reconoce que pudiste entender mal sin acusarte de mentir.",
        },
      },
    },
    tienda: {
      focus: "Describir con precisión, reformular y ajustar la explicación a quien escucha",
      help: {
        starters: ["No es exactamente…, sino más bien…", "Para que me entiendas: …", "Lo que tiene de particular es que…", "Te lo digo de otra manera: …", "No, me expliqué mal: …"],
        chunks: ["a diferencia de", "lo que lo distingue", "cumplir la función de", "dicho de otro modo", "en cuanto a"],
        vocab: ["la góndola", "el mostrador", "el toma de pared", "las patitas", "la manija"],
      },
      activities: {
        "tienda-enchufe": {
          situation: "Tu cargador es de otro país y no entra en ningún toma. Te queda 3 % de batería. El empleado del turno noche te mira sin sacarse los auriculares.",
          need: "un adaptador para enchufes de otro país",
          banned: ["adaptador", "enchufe", "cargador", "conectar"],
          task: "Explícale al empleado qué necesitas sin las palabras prohibidas. Tiene poca paciencia: ve de lo general a lo particular en tres frases como máximo.",
          wrong: "Sin mirarte, el empleado deja un alargue de cuatro tomas en el mostrador: «Toma, esto».",
          task2: "Se parece, pero no sirve. Reformula marcando justo la diferencia y sin repetir nada de lo que ya dijiste.",
          close: "Cuando te falta una palabra, ¿qué estrategia usas: describir, comparar, hacer gestos? ¿Cuál te funciona mejor en español?",
          role: "Eres el empleado: apático. Entiendes todo de la forma más literal y solo te despiertas si alguien te habla con humor o con mucha precisión.",
        },
        "tienda-hielo": {
          situation: "Vale te pidió hielo para la previa, pero las bolsas se rompen y se derrite todo en el camino. Necesitas algo para llevarlo, y el empleado ya opina antes de que abras la boca.",
          need: "una conservadora o heladerita portátil",
          banned: ["conservadora", "heladera", "frío", "hielo"],
          task: "Describe lo que buscas sin las palabras prohibidas, ni siquiera la de lo que vas a llevar adentro. Apóyate en comparaciones.",
          wrong: "El empleado te ofrece un balde de plástico y un diario viejo: «Con esto se arreglaba mi abuela y nunca le faltó nada».",
          task2: "Su solución casera no te convence, pero tampoco quieres despreciarla. Recházala con diplomacia o acéptala poniéndole una condición.",
          close: "Elige un objeto de tu casa que no sepas nombrar en español y descríbelo dos veces: para un nene de seis años y para un experto.",
          role: "Eres el empleado: opinas de todo y te ofende un poco que rechacen tus soluciones caseras. Si te rechazan con gracia, terminas ayudando de verdad.",
        },
        "tienda-regalo": {
          situation: "No tienes nada para Vale. En el almacén hay un estante con cosas raras: velas, juegos de cartas, un destapador con forma de pez. El empleado ya eligió por ti.",
          need: "algo para Vale, que vive pensando en su próxima escapada y no arranca el día sin un cortado",
          banned: ["regalo", "viaje", "viajar", "café", "cumpleaños"],
          task: "Describe a Vale sin las palabras prohibidas: no tanto qué hace, sino cómo es, para que el empleado infiera qué le puede gustar.",
          wrong: "El empleado te muestra el destapador con forma de pez, orgulloso: «Este no falla. A todo el mundo le cae simpático».",
          task2: "Rechazar el pez es rechazar su gusto. Convéncelo de que no es para Vale sin ofenderlo… o encuéntrale al pez una razón para que sí lo sea.",
          close: "Lo que regalamos, ¿dice más de quien lo elige o de quien lo recibe? Piénsalo con lo último que regalaste.",
          role: "Eres el empleado: el destapador con forma de pez es tu orgullo. Lo defiendes con argumentos cada vez más creativos y te rindes si alguien elogia tu criterio.",
        },
      },
    },
    terraza: {
      focus: "Mediar en grupo: detectar lo que cada uno no dice y reformular propuestas",
      help: {
        starters: ["Si entiendo bien, lo que te importa es…", "¿Y si lo planteamos de otra manera?", "No digo que…, sino que…", "Me parece que nadie lo dijo, pero…", "Aunque no sea lo ideal para todos, …"],
        chunks: ["hacer de puente", "quedar afuera", "quedar todos conformes", "a cambio de", "sin que nadie pierda"],
        vocab: ["el boliche", "la madrugada", "la despedida", "las redes", "la etiqueta"],
      },
      activities: {
        "terraza-cierre": {
          situation: "En la terraza, cada uno quiere terminar la noche de otra manera, y lo que dicen no siempre coincide con lo que les preocupa.",
          people: [
            { wants: "Quedarse en la terraza, «todos juntos»", reason: "Es su cumpleaños, organizó todo y le da miedo que la noche se desarme." },
            { wants: "Ir a bailar, «aunque sea un rato»", reason: "Hace meses que no sale y no quiere contar por qué." },
            { wants: "Volver a casa «ya mismo»", reason: "Dice que trabaja temprano, pero también está cansada de pagar de más toda la noche." },
            { wants: "Ir a comer algo «rapidito»", reason: "Casi no cenó, aunque lo dice en broma para no parecer pesado." },
          ],
          ask: "Arma un plan que funcione por lo menos para tres. Pero antes, nombra lo que cada uno quiere de verdad, más allá de lo que pide.",
          change: "Lu dice que se queda una hora más si alguien la acompaña después a tomar un taxi. Mientras lo dice, mira a Nico, no al grupo.",
          ask2: "La condición de Lu tiene destinatario. ¿Qué cambia si lo tienes en cuenta? Rehaz el plan y preséntaselo al que queda afuera para que no sienta que perdió.",
          role: "Haz de cualquiera de los cuatro. No dices tu verdadero motivo hasta que alguien lo intuye; si te lo nombran con tacto, cedes.",
        },
        "terraza-foto": {
          situation: "La foto del grupo con la ciudad de fondo sale perfecta. Vale quiere subirla ya. Sergio dice «haz lo que quieras» y se va a la barra.",
          people: [
            { wants: "Subirla ya, con todos etiquetados", reason: "Es su cumple y quiere que se vea que vinieron todos." },
            { wants: "No aparecer, aunque no lo pide", reason: "Hoy faltó al trabajo: le dijo a su jefa que estaba enfermo." },
            { wants: "Sacar otra sin Sergio y listo", reason: "Le parece una exageración y quiere cortar la discusión." },
          ],
          ask: "Sergio no dijo que no, pero se fue. ¿Cómo lo lees? Propón una solución que lo respete sin obligarlo a dar explicaciones.",
          change: "Vale descubre que la jefa de Sergio la sigue en las redes y se ríe: «Uy, ¿será por eso?».",
          ask2: "Vale lo dijo en broma, pero acaba de exponer a Sergio delante de todos. ¿Intervienes? ¿Qué dices para reencauzar la conversación?",
          role: "Eres Sergio: no quieres contar la verdad y te molesta tener que dar explicaciones. Le agradeces en silencio a quien te cubre sin preguntar.",
        },
      },
    },
  },
  events: {
    lluvia: {
      text: "Se larga una lluvia fuerte. La plaza y la terraza se vacían, no pasa ningún taxi libre y en el grupo alguien escribe: «bueno, se arruinó todo».",
      prompts: [
        "«Se arruinó todo»: ¿es una queja, un pedido de ayuda o una forma de irse? Contéstale al grupo según cómo lo leas.",
        "Si no hubiera llovido, ¿dónde estarían ahora? Propón un plan nuevo y explica qué se rescata del anterior.",
        "Llega un amigo empapado que no sabe nada. Cuéntale la noche en dos minutos, eligiendo qué contar y qué callar.",
      ],
      teacher: "A mitad del plan, agrega una restricción y un clima: «el bar cierra en una hora, y Vale está a punto de llorar». Escucha si reformula la propuesta y ajusta el registro.",
    },
    transporte: {
      text: "Una falla corta el metro y el último autobús pasa lleno, sin parar. Lu tiene que volver y repite que «no es problema, me arreglo».",
      prompts: [
        "Lu dice que se arregla sola. ¿Le crees? ¿Cómo insistes en ayudarla sin pasar por encima de su decisión?",
        "Elige una decisión tuya de esta noche. Si la hubieras tomado de otra manera, ¿en qué situación estarías ahora?",
        "Propón al grupo un plan para que nadie vuelva solo, dicho de tal manera que nadie se sienta tratado como un chico.",
      ],
      teacher: "Haz de Lu: rechazas la ayuda por orgullo, no por convicción. Acéptala solo cuando te la presenten como algo que también le conviene al otro.",
    },
    celular: {
      text: "Nico no encuentra su celular. Estuvo en los mismos lugares que tú y está más nervioso de lo que justifica un celular perdido.",
      prompts: [
        "Reconstruye el recorrido de la noche y señala en qué lugar Nico pudo distraerse y por qué.",
        "Nico está demasiado nervioso. ¿Qué habrá en ese celular, o qué mensaje estará esperando? Haz hipótesis con distintos grados de certeza.",
        "Propón cómo buscarlo sin arruinar la noche y sin presionar a Nico para que cuente lo que no quiere contar.",
      ],
      teacher: "El celular aparece en el último lugar que nombre el alumno, con un mensaje en pantalla que se puede leer de dos maneras. Pídele que interprete las dos.",
    },
  },
  final: {
    prompts: [
      "Cuenta tu recorrido, pero elige tú el hilo: no el orden de los lugares, sino lo que los conecta.",
      "¿En qué momento de la noche alguien dijo una cosa y quiso decir otra? ¿Cómo te diste cuenta?",
      "¿Qué decisión revisaste cuando cambió la ciudad? Si no la hubieras cambiado, ¿cómo estarías ahora?",
      "Describe a una persona que conociste esta noche a partir de lo que no dijo.",
      "Cuéntale la noche a Vale en un mensaje y después a alguien de tu trabajo el lunes. ¿Qué cambias y por qué?",
    ],
    hypothetical: "Si hubieras sabido desde el principio todo lo que sabes ahora, ¿qué habrías hecho distinto y dónde estarías en este momento?",
    help: {
      starters: ["Lo que une toda la noche es…", "En ese momento me di cuenta de que…", "Si no hubiera…, ahora…", "Visto en perspectiva, …", "Dicho de otra manera, …"],
      chunks: ["a fin de cuentas", "en el fondo", "por lo visto", "así y todo", "a todo esto"],
    },
    criteria: [
      { id: "conectores", label: "Relato con perspectiva", detail: "Organiza el relato con un hilo propio y conectores variados (en cambio, así y todo, a todo esto), no solo cronológicos." },
      { id: "razones", label: "Inferencias e intenciones", detail: "Interpreta lo que otros quisieron decir y distingue lo que sabe de lo que supone." },
      { id: "repreguntas", label: "Flexibilidad", detail: "Reformula y cambia de registro cuando se le pide, sin perder el hilo." },
      { id: "claridad", label: "Precisión y matiz", detail: "Elige palabras y tiempos verbales con precisión (condicionales mixtas, subjuntivo) y matiza sin perder claridad." },
    ],
  },
};

export default C1;
