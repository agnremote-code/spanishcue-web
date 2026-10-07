export const stages = [
  {title:"Lunes a las 8:05",minutes:4,code:"01 · INFORME"},
  {title:"Palabras para decidir",minutes:4,code:"02 · LENGUAJE"},
  {title:"¿A quién le das la oferta?",minutes:6,code:"03 · SEGMENTOS"},
  {title:"El costo del comp",minutes:5,code:"04 · REINVERSIÓN"},
  {title:"La campaña de CRM",minutes:6,code:"05 · BASE DE DATOS"},
  {title:"El CEO quiere enviarla a todos",minutes:4,code:"06 · CONSEJO"},
  {title:"Otro resort mueve primero",minutes:4,code:"07 · COMPETENCIA"},
  {title:"¿Quién vale más?",minutes:5,code:"08 · VALOR TOTAL"},
  {title:"Diseña una visita entre semana",minutes:7,code:"09 · LABORATORIO"},
  {title:"Elige una",minutes:4,code:"10 · DECISIONES"},
  {title:"La oferta salió mal",minutes:4,code:"11 · CRISIS"},
  {title:"Comité de inversión",minutes:7,code:"12 · RECOMENDACIÓN"},
] as const;

export const language = {
  "DATOS":["Los datos muestran que…","En comparación con…, la cifra aumentó/disminuyó…","La diferencia principal es…"],
  "OPINIÓN":["Desde mi punto de vista…","Yo priorizaría…","No estoy completamente de acuerdo porque…"],
  "RIESGO":["El principal riesgo sería…","Tenemos que evitar…","Podría funcionar, pero…"],
  "RECOMENDACIÓN":["Mi recomendación sería…","Propongo que…","En lugar de…, invertiría en…"],
  "CONDICIÓN":["Si ocurre…, entonces…","Depende de…","Antes de decidir, necesitamos saber…"],
} as const;

export const glossary = [
  {term:"Fidelización",plain:"Dar razones para volver y seguir usando el programa de puntos.",decision:"¿Premiarías la visita frecuente o el gasto alto?"},
  {term:"Adquisición / retención",plain:"Traer clientes nuevos / conseguir que regresen.",decision:"El cliente nuevo cuesta más: ¿cuándo dejas de pagar por adquirirlo?"},
  {term:"Cliente de alto valor / valor del cliente",plain:"Importa lo que aporta a largo plazo, no solo lo que gasta hoy. El theo y el ADT estiman valor de juego; son una parte del cuadro.",decision:"¿A quién darías un comp si su valor hotelero también cuenta?"},
  {term:"Frecuencia de visita",plain:"Cuántas veces viene un cliente en un período.",decision:"¿Prefieres ocho viajes caros o veintidós visitas pequeñas?"},
  {term:"Gasto promedio",plain:"Cuánto gasta, en promedio, por visita; separa juego y otros consumos.",decision:"¿Qué cambia si una persona come y ve espectáculos?"},
  {term:"Oferta / incentivo",plain:"Lo que propones / el beneficio concreto que puede cambiar una visita: puntos, cena o acceso.",decision:"¿Qué ofrecerías un martes sin descontar el sábado?"},
  {term:"Canje / redención",plain:"Cuando el cliente usa una oferta; canjear no siempre significa viajar.",decision:"¿Qué harías con quienes canjearon pero no vinieron?"},
  {term:"Segmentación",plain:"Separar la base por comportamiento y necesidad, no enviar lo mismo a todos.",decision:"¿Separarías locales de viajeros que necesitan hotel?"},
  {term:"Retorno de inversión",plain:"Comparar el beneficio adicional con el costo. Los ingresos solos no prueban rentabilidad.",decision:"¿Qué dato pedirías a Finanzas antes de hablar de retorno?"},
  {term:"Presupuesto promocional",plain:"Dinero disponible para ofertas y comps; también se llama reinversión en clientes.",decision:"¿Quién recibe parte de los 50.000 dólares?"},
  {term:"Venta cruzada",plain:"Lograr que una visita incluya restaurante, hotel o entretenimiento además del casino.",decision:"¿Cómo aumentarías el gasto no relacionado con el juego sin regalar una suite?"},
] as const;

export const segments = [
  {name:"A · Jugador premium",visits:"8 visitas/año",gaming:"Juego alto",stay:"2 noches",extra:"Poco gasto en restaurantes",signal:"Rara vez responde al correo",complication:"Ya recibió tres ofertas."},
  {name:"B · Viajero de resort",visits:"3 visitas/año",gaming:"Juego medio",stay:"Suite premium",extra:"Mucho gasto en restaurantes y ocio; viene en pareja",signal:"No juega entre semana",complication:"Nunca juega de lunes a jueves."},
  {name:"C · Cliente local",visits:"22 visitas/año",gaming:"Gasto bajo por visita",stay:"No usa hotel",extra:"Usa mucho el programa de fidelidad",signal:"Alta participación",complication:"Trae amigos con frecuencia."},
  {name:"D · Primera visita",visits:"1 visita",gaming:"Primer gasto alto",stay:"Sin segunda visita",extra:"Llegó por publicidad digital pagada",signal:"Costo de adquisición alto",complication:"Costó mucho dinero adquirirlo."},
] as const;

export const offerTypes = ["Sin oferta cara","Puntos de fidelidad","Crédito de restaurante","Suite o habitación","Contacto personal del anfitrión"] as const;

export const ceoObjections = [
  "Pero segmentar tarda demasiado. ¿Qué grupo puedes definir hoy?",
  "Necesitamos ingresos este mes. ¿Qué harías en los próximos siete días?",
  "Nuestros competidores están siendo más agresivos. ¿Qué protegemos primero?",
  "Prefiero llenar el casino y analizar después. ¿Qué costo podríamos ocultar?",
] as const;

export const competitorMoves = [
  {name:"Puntos dobles",detail:"Viernes a domingo para todos los miembros de fidelidad."},
  {name:"Estacionamiento gratis",detail:"Solo para miembros del programa."},
  {name:"Habitaciones baratas",detail:"Descuento agresivo en fines de semana de alta demanda."},
  {name:"Evento con celebridad",detail:"Una experiencia exclusiva con aforo limitado."},
  {name:"Oferta a exclientes",detail:"Mensajes dirigidos a personas que antes visitaban tu propiedad."},
] as const;

export const promotion = {
  targets:["Clientes locales","Viajeros de la región que llegan en auto","Jugadores premium","Miembros inactivos","Viajeros jóvenes de ocio"],
  incentives:["Habitación","Restaurante","Juego","Entretenimiento","Puntos","Acceso a una experiencia"],
  channels:["Correo electrónico","SMS","Aplicación","Redes pagadas","Anfitrión","Correo postal"],
  timings:["Hoy","En 7 días","En 30 días"],
} as const;

export const dilemmas = [
  {choices:["Más clientes","Clientes más rentables"],push:["¿Y si el casino está vacío un martes?","¿Y si pierdes volumen y también venta cruzada?"]},
  {choices:["Oferta grande para pocos","Oferta pequeña para muchos"],push:["¿Qué pasa si esos pocos ya iban a venir?","¿Cómo detectas a quienes realmente cambian su viaje?"]},
  {choices:["Retención","Adquisición"],push:["¿Qué harás cuando ese grupo deje de crecer?","¿Cómo pagas el costo de traerlos si no vuelven?"]},
  {choices:["Más ocupación","Mejor tarifa promedio"],push:["¿Qué pasa si desplazas una reserva más cara?","¿Qué vendes en restaurantes con habitaciones vacías?"]},
  {choices:["Personalización","Simplicidad operativa"],push:["¿Puede Operaciones cumplir cien ofertas diferentes?","¿Qué pierdes al tratar igual a un local y a un huésped?"]},
  {choices:["Datos perfectos mañana","Decisión razonable hoy"],push:["¿Y si la competencia toma el segmento hoy?","¿Qué dato mínimo exigirías antes de actuar?"]},
  {choices:["Premiar frecuencia","Premiar gasto"],push:["¿Cuánto reinviertes en visitas pequeñas?","¿Cómo evitas ignorar clientes locales fieles?"]},
  {choices:["Copiar al competidor","Crear una propuesta distinta"],push:["¿Puedes sostener esos descuentos?","¿Cómo explicas la diferencia antes del fin de semana?"]},
] as const;

export const crisisActions = [
  "Pausar nuevos envíos y guardar el registro exacto de los 20.000 contactos",
  "Confirmar canjes y condiciones con Operaciones y Atención al Cliente",
  "Reunir a CRM, Finanzas y Legal para decidir el alcance",
  "Informar al CEO con hechos, riesgo y próximo reporte",
] as const;

export const finalPriorities = [
  {name:"Recuperar premium",detail:"Visitas de jugadores premium: −8 %"},
  {name:"Adquirir jóvenes",detail:"Nuevos clientes jóvenes: +21 %"},
  {name:"Reactivar fidelidad",detail:"Participación en el programa: baja"},
  {name:"Promociones entre semana",detail:"Ingresos de juego: sin crecimiento"},
  {name:"Venta cruzada hotel + ocio",detail:"Ingresos del hotel: en crecimiento"},
  {name:"Medir incrementalidad",detail:"Competidores: más promociones"},
] as const;

export const finalChallenges = [
  "¿Por qué esto y no adquisición?",
  "¿Cuánto dinero pondrías aquí?",
  "¿Qué dejarías de hacer?",
  "¿Qué resultado esperas?",
  "¿Cuándo sabremos si funciona?",
  "¿Qué pasa si estás equivocado?",
  "¿Qué segmento estamos sobrevalorando?",
  "¿Dónde estamos regalando demasiado valor?",
] as const;
