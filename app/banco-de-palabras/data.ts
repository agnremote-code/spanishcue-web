export type TopicId = "casa" | "ciudad" | "comida" | "viaje" | "emociones" | "estudio";
export type WordKind = "sustantivo" | "verbo" | "adjetivo" | "chunk";

export type WordCard = {
  id: number;
  topic: TopicId;
  word: string;
  translation: string;
  kind: WordKind;
  icon: string;
  definition: string;
  example: string;
  gap: string;
};

export const wordTopics: { id: TopicId; label: string; icon: string; color: string; prompt: string }[] = [
  { id: "casa", label: "Casa", icon: "⌂", color: "#2764e7", prompt: "Describí tu espacio y explicá cómo lo organizás." },
  { id: "ciudad", label: "Ciudad", icon: "▥", color: "#f06b2f", prompt: "Dale indicaciones a alguien que acaba de llegar." },
  { id: "comida", label: "Comida", icon: "◒", color: "#efb51d", prompt: "Pedí, reaccioná y resolvé una situación en un restaurante." },
  { id: "viaje", label: "Viaje", icon: "✈", color: "#39b99a", prompt: "Contá un viaje y resolvé un problema inesperado." },
  { id: "emociones", label: "Emociones", icon: "☺", color: "#ef7181", prompt: "Explicá cómo te sentís y por qué." },
  { id: "estudio", label: "Trabajo y estudio", icon: "▣", color: "#7656cf", prompt: "Organizá una semana con tareas, reuniones y plazos." },
];

export const wordBank: WordCard[] = [
  {id:1,topic:"casa",word:"el enchufe",translation:"power outlet",kind:"sustantivo",icon:"⚡",definition:"El punto de la pared donde conectamos un aparato.",example:"El enchufe está detrás del sofá.",gap:"No encuentro ___ para cargar el teléfono."},
  {id:2,topic:"casa",word:"el estante",translation:"shelf",kind:"sustantivo",icon:"▤",definition:"Una superficie horizontal donde apoyamos o guardamos cosas.",example:"Puse los libros en el estante de arriba.",gap:"Las plantas están sobre ___."},
  {id:3,topic:"casa",word:"la toalla",translation:"towel",kind:"sustantivo",icon:"▱",definition:"Una pieza de tela que usamos para secarnos.",example:"Necesito una toalla limpia para el baño.",gap:"Después de ducharte, colgá ___."},
  {id:4,topic:"casa",word:"hacer la cama",translation:"make the bed",kind:"chunk",icon:"▰",definition:"Ordenar las sábanas y las almohadas después de dormir.",example:"Hago la cama antes de empezar a trabajar.",gap:"Nunca tengo tiempo de ___ por la mañana."},
  {id:5,topic:"casa",word:"guardar",translation:"put away / store",kind:"verbo",icon:"▣",definition:"Poner algo en el lugar donde queda protegido u ordenado.",example:"Guardá las llaves en el cajón.",gap:"¿Dónde puedo ___ la valija?"},
  {id:6,topic:"casa",word:"ordenar",translation:"tidy up / organize",kind:"verbo",icon:"✓",definition:"Poner cada cosa en su lugar.",example:"Los sábados ordeno mi habitación.",gap:"Tenemos que ___ la cocina antes de salir."},
  {id:7,topic:"casa",word:"quedarse sin",translation:"run out of",kind:"chunk",icon:"○",definition:"Llegar a no tener algo que necesitamos.",example:"Nos quedamos sin papel higiénico.",gap:"Odio ___ batería durante un viaje."},
  {id:8,topic:"casa",word:"arreglar",translation:"fix / repair",kind:"verbo",icon:"⌁",definition:"Hacer que algo que no funciona vuelva a funcionar.",example:"El dueño va a arreglar la ducha.",gap:"¿Sabés ___ una lámpara?"},
  {id:9,topic:"casa",word:"cómodo/a",translation:"comfortable",kind:"adjetivo",icon:"◡",definition:"Que permite estar bien y sin molestias.",example:"Este sillón es muy cómodo.",gap:"Busco un departamento pequeño pero ___."},
  {id:10,topic:"casa",word:"desordenado/a",translation:"messy / untidy",kind:"adjetivo",icon:"≈",definition:"Que no tiene las cosas organizadas.",example:"Mi escritorio está bastante desordenado.",gap:"La habitación quedó ___ después de la mudanza."},

  {id:11,topic:"ciudad",word:"la esquina",translation:"corner",kind:"sustantivo",icon:"⌜",definition:"El lugar donde se cruzan dos calles.",example:"La farmacia está en la esquina.",gap:"Te espero en ___ de Corrientes y Callao."},
  {id:12,topic:"ciudad",word:"la cuadra",translation:"city block",kind:"sustantivo",icon:"▭",definition:"El tramo de una calle entre dos esquinas.",example:"El café queda a dos cuadras.",gap:"Caminá una ___ y doblá a la derecha."},
  {id:13,topic:"ciudad",word:"la vereda",translation:"sidewalk",kind:"sustantivo",icon:"═",definition:"La parte de la calle por donde caminan las personas.",example:"La vereda es muy angosta.",gap:"Había muchas mesas sobre ___."},
  {id:14,topic:"ciudad",word:"cruzar",translation:"cross",kind:"verbo",icon:"↔",definition:"Pasar de un lado al otro de una calle o un lugar.",example:"Cruzá cuando el semáforo esté en verde.",gap:"Tenemos que ___ la avenida."},
  {id:15,topic:"ciudad",word:"doblar",translation:"turn",kind:"verbo",icon:"↪",definition:"Cambiar de dirección al llegar a una calle.",example:"Doblá a la izquierda después del banco.",gap:"En la próxima esquina, ___ a la derecha."},
  {id:16,topic:"ciudad",word:"la parada",translation:"stop",kind:"sustantivo",icon:"◉",definition:"El lugar donde se detiene un colectivo, bus o tranvía.",example:"La parada del 60 está enfrente.",gap:"¿Dónde queda ___ del colectivo?"},
  {id:17,topic:"ciudad",word:"el embotellamiento",translation:"traffic jam",kind:"sustantivo",icon:"▥",definition:"Una acumulación de vehículos que hace lento el tránsito.",example:"Llegué tarde por un embotellamiento.",gap:"Hay ___ enorme en la autopista."},
  {id:18,topic:"ciudad",word:"queda cerca",translation:"it is nearby",kind:"chunk",icon:"⌖",definition:"Sirve para decir que un lugar está a poca distancia.",example:"La estación queda cerca de acá.",gap:"No tomes un taxi: ___ y podemos caminar."},
  {id:19,topic:"ciudad",word:"tomar el metro",translation:"take the subway",kind:"chunk",icon:"M",definition:"Usar el tren subterráneo para desplazarse.",example:"Conviene tomar el metro hasta el centro.",gap:"Para evitar el tráfico, vamos a ___."},
  {id:20,topic:"ciudad",word:"el barrio",translation:"neighborhood",kind:"sustantivo",icon:"⌂",definition:"Una zona de una ciudad con identidad propia.",example:"Es un barrio tranquilo y bien conectado.",gap:"¿Cuál es tu ___ favorito de la ciudad?"},

  {id:21,topic:"comida",word:"pedir",translation:"order / ask for",kind:"verbo",icon:"☝",definition:"Solicitar una comida, una bebida o algo que necesitamos.",example:"Voy a pedir la sopa del día.",gap:"¿Qué vas a ___ para comer?"},
  {id:22,topic:"comida",word:"probar",translation:"try / taste",kind:"verbo",icon:"◌",definition:"Comer o beber algo para conocer su sabor.",example:"Quiero probar un plato típico.",gap:"Tenés que ___ este postre."},
  {id:23,topic:"comida",word:"picante",translation:"spicy",kind:"adjetivo",icon:"♨",definition:"Que produce una sensación fuerte o ardiente en la boca.",example:"La salsa es rica, pero muy picante.",gap:"¿Este curry es muy ___?"},
  {id:24,topic:"comida",word:"el plato",translation:"dish / plate",kind:"sustantivo",icon:"◯",definition:"Puede ser el recipiente o una preparación de comida.",example:"Mi plato favorito es la milanesa.",gap:"¿Cuál es el ___ más popular del restaurante?"},
  {id:25,topic:"comida",word:"los cubiertos",translation:"cutlery",kind:"sustantivo",icon:"⋔",definition:"El tenedor, el cuchillo y la cuchara que usamos para comer.",example:"Faltan cubiertos en la mesa.",gap:"¿Nos podés traer ___, por favor?"},
  {id:26,topic:"comida",word:"la cuenta",translation:"the bill / check",kind:"sustantivo",icon:"▧",definition:"El total que debemos pagar después de comer o beber.",example:"La cuenta, por favor.",gap:"¿Pedimos ___ o un postre más?"},
  {id:27,topic:"comida",word:"estar lleno/a",translation:"be full",kind:"chunk",icon:"●",definition:"No poder comer más porque ya comimos suficiente.",example:"Estoy lleno; no puedo terminar el postre.",gap:"Después de ese almuerzo es imposible no ___."},
  {id:28,topic:"comida",word:"tener hambre",translation:"be hungry",kind:"chunk",icon:"◇",definition:"Sentir la necesidad o las ganas de comer.",example:"Tengo hambre porque no desayuné.",gap:"Después de hacer ejercicio, es normal ___."},
  {id:29,topic:"comida",word:"para llevar",translation:"to go / takeaway",kind:"chunk",icon:"□",definition:"Preparado para comer fuera del local.",example:"Quiero dos cafés para llevar.",gap:"No tenemos tiempo; pidamos la comida ___."},
  {id:30,topic:"comida",word:"sin…",translation:"without…",kind:"chunk",icon:"∅",definition:"Sirve para excluir un ingrediente o elemento.",example:"Una hamburguesa sin cebolla, por favor.",gap:"Para mí, un café ___ azúcar."},

  {id:31,topic:"viaje",word:"el equipaje",translation:"luggage",kind:"sustantivo",icon:"▣",definition:"El conjunto de valijas y bolsos que llevamos en un viaje.",example:"Mi equipaje pesa veinte kilos.",gap:"¿Dónde puedo dejar ___?"},
  {id:32,topic:"viaje",word:"el alojamiento",translation:"accommodation",kind:"sustantivo",icon:"⌂",definition:"El lugar donde nos quedamos a dormir durante un viaje.",example:"El alojamiento incluye desayuno.",gap:"Todavía no reservamos ___ en la isla."},
  {id:33,topic:"viaje",word:"reservar",translation:"book / reserve",kind:"verbo",icon:"✓",definition:"Guardar un lugar o servicio para una fecha determinada.",example:"Conviene reservar el tren con tiempo.",gap:"Quiero ___ una habitación para dos noches."},
  {id:34,topic:"viaje",word:"perderse",translation:"get lost",kind:"verbo",icon:"?",definition:"No saber dónde estamos ni cómo llegar.",example:"Nos perdimos en el casco antiguo.",gap:"Sin conexión es fácil ___ en esta ciudad."},
  {id:35,topic:"viaje",word:"el retraso",translation:"delay",kind:"sustantivo",icon:"◷",definition:"Una demora respecto del horario previsto.",example:"El vuelo tiene dos horas de retraso.",gap:"Anunciaron ___ por mal tiempo."},
  {id:36,topic:"viaje",word:"ida y vuelta",translation:"round trip",kind:"chunk",icon:"⇄",definition:"Un trayecto que incluye salir y regresar.",example:"Compré un pasaje de ida y vuelta.",gap:"¿El precio incluye ___?"},
  {id:37,topic:"viaje",word:"hacer escala",translation:"have a layover",kind:"chunk",icon:"⌁",definition:"Parar en un lugar intermedio antes del destino final.",example:"Tenemos que hacer escala en Lima.",gap:"El vuelo no es directo: vamos a ___."},
  {id:38,topic:"viaje",word:"sacar una foto",translation:"take a photo",kind:"chunk",icon:"◉",definition:"Usar una cámara o teléfono para crear una imagen.",example:"¿Nos podés sacar una foto?",gap:"Quiero ___ desde el mirador."},
  {id:39,topic:"viaje",word:"llegar a tiempo",translation:"arrive on time",kind:"chunk",icon:"⌚",definition:"Llegar antes o justo en el horario necesario.",example:"Salimos temprano para llegar a tiempo.",gap:"Si tomamos un taxi, vamos a ___."},
  {id:40,topic:"viaje",word:"la puerta de embarque",translation:"boarding gate",kind:"sustantivo",icon:"↗",definition:"El punto del aeropuerto por donde accedemos al avión.",example:"Cambiaron la puerta de embarque.",gap:"El vuelo sale por __ número doce."},

  {id:41,topic:"emociones",word:"emocionado/a",translation:"excited",kind:"adjetivo",icon:"✦",definition:"Con mucha ilusión o entusiasmo por algo.",example:"Estoy emocionado por el viaje.",gap:"Ella está muy ___ por su nuevo trabajo."},
  {id:42,topic:"emociones",word:"preocupado/a",translation:"worried",kind:"adjetivo",icon:"~",definition:"Con inquietud por un problema posible o real.",example:"Estoy preocupado por el examen.",gap:"¿Por qué estás tan ___?"},
  {id:43,topic:"emociones",word:"orgulloso/a",translation:"proud",kind:"adjetivo",icon:"↑",definition:"Satisfecho por algo propio o de otra persona.",example:"Estoy orgulloso de mi progreso.",gap:"Sus padres están ___ de ella."},
  {id:44,topic:"emociones",word:"frustrado/a",translation:"frustrated",kind:"adjetivo",icon:"×",definition:"Molesto porque algo no sale como esperábamos.",example:"Me siento frustrado cuando no me entienden.",gap:"Quedó ___ después de varios intentos."},
  {id:45,topic:"emociones",word:"darse cuenta",translation:"realize",kind:"chunk",icon:"!",definition:"Comprender algo que antes no habíamos notado.",example:"Me di cuenta de que olvidé las llaves.",gap:"A veces cuesta ___ del error."},
  {id:46,topic:"emociones",word:"tener ganas de",translation:"feel like / want to",kind:"chunk",icon:"→",definition:"Sentir deseo o entusiasmo por hacer algo.",example:"Tengo ganas de salir a caminar.",gap:"Es lindo ___ aprender algo nuevo."},
  {id:47,topic:"emociones",word:"echar de menos",translation:"miss",kind:"chunk",icon:"♡",definition:"Sentir la ausencia de una persona, lugar o costumbre.",example:"Echo de menos a mis amigos.",gap:"Cuando viajo, suelo ___ mi cama."},
  {id:48,topic:"emociones",word:"llevarse bien",translation:"get along",kind:"chunk",icon:"∞",definition:"Tener una relación buena y fácil con alguien.",example:"Me llevo bien con mis compañeros.",gap:"Para trabajar juntos es importante ___."},
  {id:49,topic:"emociones",word:"dar vergüenza",translation:"feel embarrassed",kind:"chunk",icon:"◡",definition:"Producir timidez, incomodidad o miedo al ridículo.",example:"Me da vergüenza hablar en público.",gap:"Al principio puede ___ hablar en público."},
  {id:50,topic:"emociones",word:"estar de buen humor",translation:"be in a good mood",kind:"chunk",icon:"☀",definition:"Sentirse alegre y reaccionar de manera positiva.",example:"Hoy estoy de buen humor.",gap:"Dormir bien me ayuda a ___."},

  {id:51,topic:"estudio",word:"la tarea",translation:"task / homework",kind:"sustantivo",icon:"✓",definition:"Un trabajo concreto que debemos completar.",example:"Terminé la tarea antes de cenar.",gap:"¿Cuál es la primera ___ del día?"},
  {id:52,topic:"estudio",word:"la reunión",translation:"meeting",kind:"sustantivo",icon:"◉",definition:"Un encuentro para conversar, decidir o trabajar con otras personas.",example:"Tengo una reunión a las nueve.",gap:"Movieron ___ para el jueves."},
  {id:53,topic:"estudio",word:"el plazo",translation:"deadline / time limit",kind:"sustantivo",icon:"⌛",definition:"El tiempo máximo disponible para terminar algo.",example:"El plazo termina el viernes.",gap:"Necesitamos ampliar ___ de entrega."},
  {id:54,topic:"estudio",word:"entregar",translation:"hand in / deliver",kind:"verbo",icon:"↗",definition:"Dar o enviar un trabajo terminado a quien lo espera.",example:"Tengo que entregar el informe mañana.",gap:"¿Cuándo hay que ___ el proyecto?"},
  {id:55,topic:"estudio",word:"los apuntes",translation:"notes",kind:"sustantivo",icon:"▤",definition:"Notas que tomamos para recordar o estudiar información.",example:"Voy a revisar mis apuntes.",gap:"¿Me prestás ___ de la clase pasada?"},
  {id:56,topic:"estudio",word:"rendir un examen",translation:"take an exam",kind:"chunk",icon:"✎",definition:"Presentarse a una evaluación; uso muy frecuente en Argentina.",example:"Rindo un examen el lunes.",gap:"La semana que viene tengo que ___."},
  {id:57,topic:"estudio",word:"ponerse al día",translation:"catch up",kind:"chunk",icon:"↥",definition:"Completar lo atrasado hasta alcanzar el ritmo actual.",example:"Necesito ponerme al día con los correos.",gap:"Falté dos clases y ahora debo ___."},
  {id:58,topic:"estudio",word:"resolver",translation:"solve / resolve",kind:"verbo",icon:"◇",definition:"Encontrar una solución para un problema o ejercicio.",example:"Resolvimos el problema juntos.",gap:"Intentá ___ el ejercicio sin mirar la respuesta."},
  {id:59,topic:"estudio",word:"tener pendiente",translation:"still need to do",kind:"chunk",icon:"…",definition:"Tener algo que todavía no completamos.",example:"Tengo pendiente responder dos mensajes.",gap:"No me gusta ___ muchas tareas."},
  {id:60,topic:"estudio",word:"concentrarse",translation:"focus",kind:"verbo",icon:"◎",definition:"Dirigir la atención a una sola tarea o idea.",example:"Me cuesta concentrarme con ruido.",gap:"Apago el teléfono para poder ___."},
];
