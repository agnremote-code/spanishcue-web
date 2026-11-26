/**
 * «¿Por o para?» mini-apps: one page per use. Each item is a sentence with one
 * gap whose answer is the use's preposition. Neutral Spanish, never a
 * first-person preterite.
 */
export type Prep = "por" | "para";
export type UsoPrep = { slug: string; name: string; prep: Prep; level: string; rule: string; tip: string; items: string[] };

export const usosPorPara: UsoPrep[] = [
  // ── por ──
  { slug: "causa", name: "Causa o motivo", prep: "por", level: "A2", rule: "Por introduce la causa: lo que provoca algo.", tip: "Para indica la finalidad: «estudia por obligación» (la causa) frente a «estudia para aprobar» (el objetivo).", items: [
    "Cerraron la playa ___ el mal tiempo.", "Lo despidieron ___ llegar tarde todos los días.", "Gracias ___ tu ayuda.", "Se enfadó ___ una tontería.", "Te felicito ___ el nuevo trabajo.", "El vuelo se canceló ___ la niebla."] },
  { slug: "lugar-de-paso", name: "Lugar de paso", prep: "por", level: "A2", rule: "Por indica el lugar por donde se pasa, o un lugar aproximado: «pasear por el parque», «vive por el centro».", tip: "Para indica el destino: «sale para Lima» (va hacia allí); «pasa por Lima» (atraviesa la ciudad).", items: [
    "Me gusta pasear ___ el centro.", "El ladrón entró ___ la ventana.", "En el viaje a Bolivia pasaron ___ Perú.", "¿Hay un banco ___ aquí?", "Los niños corren ___ la playa.", "El tren va ___ la costa hasta Valencia."] },
  { slug: "partes-del-dia", name: "Partes del día y fechas", prep: "por", level: "A1", rule: "Por la mañana, por la tarde, por la noche, y también un momento aproximado: «por Navidad», «por agosto».", tip: "Para con una fecha marca un plazo: «para el lunes».", items: [
    "Trabaja ___ la mañana en una tienda.", "¿Qué haces ___ la noche?", "Sus abuelos vienen siempre ___ Navidad.", "Los lunes ___ la tarde tiene clase de piano.", "Nos vemos ___ la mañana, antes del trabajo.", "Vuelven de vacaciones ___ agosto, más o menos."] },
  { slug: "duracion", name: "Duración", prep: "por", level: "B1", rule: "Por puede indicar cuánto tiempo dura algo: «por dos semanas».", tip: "También se dice con durante o sin preposición: «estuvo allí (durante) dos semanas».", items: [
    "Se fue a Chile ___ seis meses.", "Estuvo en el hospital ___ una semana.", "Cerraron el museo ___ unos días.", "El médico le dio la baja ___ una semana.", "Me quedo aquí ___ un tiempo.", "Vivieron en Roma ___ diez años."] },
  { slug: "medio", name: "Medio o canal", prep: "por", level: "A2", rule: "Por indica el medio por el que se comunica o se envía algo: por teléfono, por correo, por internet.", tip: "Con los transportes se usa en: «en tren», «en avión».", items: [
    "Te mando las fotos ___ correo.", "Hablaron ___ teléfono más de una hora.", "Compró los billetes ___ internet.", "¿Lo viste ___ la tele?", "Se conocieron ___ una aplicación.", "Envíame la dirección ___ mensaje."] },
  { slug: "intercambio-y-precio", name: "Intercambio y precio", prep: "por", level: "A2", rule: "Por indica lo que se da a cambio de algo: un precio, un cambio o una sustitución.", tip: "«Pagar por», «cambiar por», «gracias por»: siempre con por.", items: [
    "Compró la bici ___ cien dólares.", "¿Me cambias este libro ___ el tuyo?", "Pagaron mucho dinero ___ esa casa.", "Te doy mi sándwich ___ tu manzana.", "Hoy da la clase ella ___ el profesor, que está enfermo.", "Vendió el coche ___ muy poco."] },
  { slug: "agente-de-la-pasiva", name: "Agente de la pasiva", prep: "por", level: "B1", rule: "En la voz pasiva, por introduce quién hace la acción: «escrito por Cervantes».", tip: "Es frecuente en noticias, textos formales y fichas de obras de arte.", items: [
    "El Quijote fue escrito ___ Cervantes.", "La casa fue diseñada ___ un arquitecto famoso.", "El ladrón fue detenido ___ la policía.", "Este cuadro fue pintado ___ Frida Kahlo.", "La ley fue aprobada ___ el Congreso.", "La carta está firmada ___ la directora."] },
  { slug: "expresiones-con-por", name: "Expresiones con por", prep: "por", level: "B1", rule: "Por si acaso, por supuesto, por fin, por eso, por ejemplo: expresiones fijas que siempre llevan por.", tip: "No confundas «por mí» (no me importa, estoy de acuerdo) con «para mí» (en mi opinión).", items: [
    "Lleva el paraguas ___ si acaso.", "Después de tres horas, ___ fin llegó el autobús.", "Claro, ___ supuesto que puedes venir.", "No estudió nada; ___ eso no aprobó.", "Le gusta la fruta tropical, ___ ejemplo, el mango.", "¿Abro la ventana? Sí, ___ mí no hay problema."] },
  // ── para ──
  { slug: "finalidad", name: "Finalidad", prep: "para", level: "A2", rule: "Para + infinitivo, o para que + subjuntivo, expresa el objetivo: para qué se hace algo.", tip: "Por + infinitivo expresa la causa: «lo castigaron por mentir».", items: [
    "Estudia español ___ trabajar en México.", "Ahorra dinero ___ comprarse un coche.", "Te llamo ___ invitarte a la fiesta.", "Hay que reservar ___ comer allí.", "Vino a Madrid ___ hacer un máster.", "Abre la ventana ___ que entre aire."] },
  { slug: "destinatario", name: "Destinatario", prep: "para", level: "A1", rule: "Para indica a quién va dirigido algo: «un regalo para ti».", tip: "«Trabaja para una empresa» también es destinatario: la empresa recibe su trabajo.", items: [
    "Este regalo es ___ ti.", "Compró flores ___ su madre.", "¿Sabes ___ quién es este paquete?", "Trabaja ___ una empresa alemana.", "Hay un mensaje ___ usted en recepción.", "Hizo una tarta ___ los niños."] },
  { slug: "destino", name: "Destino o dirección", prep: "para", level: "A2", rule: "Para indica hacia dónde se va: «sale para Lima».", tip: "Por indica el lugar por donde se pasa: «pasa por Lima».", items: [
    "El tren ___ Sevilla sale a las diez.", "Mañana salen ___ Buenos Aires.", "¿Este autobús va ___ el centro?", "Vamos ___ casa, que es tarde.", "Se fue ___ la oficina temprano.", "Iban ___ la playa cuando empezó a llover."] },
  { slug: "plazo", name: "Plazo o fecha límite", prep: "para", level: "A2", rule: "Para indica el momento en que algo tiene que estar hecho: «para el lunes».", tip: "Por con tiempo es una parte del día o un momento aproximado: «por la tarde», «por Navidad».", items: [
    "Los deberes son ___ mañana.", "Necesito el informe ___ el viernes.", "¿Puedes tenerlo listo ___ las cinco?", "Quieren terminar la obra ___ diciembre.", "Reservó la mesa ___ las nueve.", "Faltan dos días ___ las vacaciones."] },
  { slug: "opinion", name: "Opinión", prep: "para", level: "B1", rule: "Para + persona introduce una opinión o un punto de vista: «para mí, es la mejor película».", tip: "«Por mí» significa que a esa persona no le importa: «por mí, haz lo que quieras».", items: [
    "Sinceramente, ___ mí es demasiado caro.", "Esta película, ___ los críticos, es una obra maestra.", "¿Qué es lo más importante ___ ti?", "El examen, ___ muchos alumnos, fue muy difícil.", "El sueldo no es lo más importante ___ ella.", "Mira, ___ mi abuela, nada es mejor que la comida casera."] },
  { slug: "comparacion", name: "Comparación con lo esperado", prep: "para", level: "B1", rule: "Para compara con lo normal en un grupo o una situación: «habla muy bien para ser tan pequeño».", tip: "Suele ir con «para ser» o con un sustantivo: «hace calor para ser noviembre».", items: [
    "Habla muy bien ___ ser tan pequeño.", "Hace mucho calor ___ ser noviembre.", "Es muy alto ___ su edad.", "Juega bastante bien ___ ser principiante.", "Está muy barato ___ ser un hotel de lujo.", "Es muy maduro ___ tener quince años."] },
  { slug: "utilidad", name: "Uso o utilidad", prep: "para", level: "A2", rule: "Para indica para qué sirve algo: «una crema para el sol», «pastillas para el dolor».", tip: "Con servir también se usa para: «esto sirve para abrir latas».", items: [
    "Necesita unas pastillas ___ el dolor de cabeza.", "Esta crema es ___ el sol.", "¿Sabes ___ qué sirve este botón?", "Compró una mesa ___ el jardín.", "El jarabe es ___ la tos.", "Esa caja es ___ guardar los juguetes."] },
];
