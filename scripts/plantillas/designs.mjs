/**
 * Printable designs of the free teacher templates (/material-ele/plantillas). Each design
 * returns the HTML of its pages; scripts/plantillas/build.mjs prints them to PDF (A4 and
 * US Letter), a page preview and a Pinterest image under public/. The page copy lives in
 * app/material-ele/plantillas.ts; this file only draws the sheets.
 */
const field = (label, flex = 1) => `<div class="field" style="flex:${flex}"><span>${label}</span><i></i></div>`;
const row = (...fields) => `<div class="row">${fields.join("")}</div>`;
const lines = (count, cls = "") => `<div class="lines ${cls}">${"<i></i>".repeat(count)}</div>`;
const box = (title, count = 3, hint = "") => `<section class="box"><h3>${title}${hint ? `<small>${hint}</small>` : ""}</h3>${lines(count)}</section>`;
const checks = (items) => `<div class="checks">${items.map((item) => `<span><b></b>${item}</span>`).join("")}</div>`;
const table = (head, rows, widths) => `<table><thead><tr>${head.map((cell, index) => `<th${widths?.[index] ? ` style="width:${widths[index]}"` : ""}>${cell}</th>`).join("")}</tr></thead><tbody>${rows.map((cells) => `<tr>${cells.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
const blankRows = (count, columns, first = () => "") => Array.from({ length: count }, (_, index) => [first(index), ...Array(columns - 1).fill("")]);

const lessonPlan = (minutes, stages) => `
  ${row(field("Alumno o grupo", 2), field("Nivel"), field("Fecha"))}
  ${row(field("Objetivo comunicativo: al final de la clase el alumno puede…", 1))}
  ${row(field("Gramática"), field("Vocabulario"))}
  ${table(["Min", "Fase", "Qué hace el alumno", "Material"], stages.map(([time, name, hint]) => [`<b class="time">${time}</b>`, `<b>${name}</b><em>${hint}</em>`, "", ""]), ["9%", "27%", "42%", "22%"])}
  <div class="cols">${box("Errores para corregir al final", 3)}${box("Tarea", 3)}</div>
  ${box("Para la próxima clase", 2)}
  <p class="note">Clase de ${minutes} minutos. Regla práctica: el alumno habla al menos la mitad del tiempo.</p>`;

const wheel = (labels) => {
  const segments = labels.length;
  const paths = labels.map((label, index) => {
    const start = (index / segments) * Math.PI * 2 - Math.PI / 2;
    const end = ((index + 1) / segments) * Math.PI * 2 - Math.PI / 2;
    const mid = (start + end) / 2;
    const point = (angle, radius) => `${(250 + Math.cos(angle) * radius).toFixed(1)},${(250 + Math.sin(angle) * radius).toFixed(1)}`;
    const fill = index % 2 ? "#eaf2ff" : "#ffffff";
    const degrees = (mid * 180) / Math.PI;
    const flip = degrees > 90 && degrees < 270;
    return `<path d="M250,250 L${point(start, 235)} A235,235 0 0 1 ${point(end, 235)} Z" fill="${fill}" stroke="#0a2472" stroke-width="2.5"/>
      <text transform="translate(${point(mid, 128)}) rotate(${flip ? degrees + 180 : degrees})" text-anchor="middle" dominant-baseline="middle" font-size="17" font-weight="700" fill="#0a2472">${label}</text>
      <text transform="translate(${point(mid, 217)}) rotate(${degrees + 90})" text-anchor="middle" dominant-baseline="middle" font-size="14" font-weight="800" fill="#0a66ff">${index + 1}</text>`;
  }).join("");
  return `<svg class="wheel" viewBox="0 0 500 500">${paths}<circle cx="250" cy="250" r="34" fill="#ffc454" stroke="#0a2472" stroke-width="2.5"/></svg>`;
};

const cards = (items) => `<div class="cards">${items.map((text, index) => `<div class="card"><small>Tarjeta ${index + 1}</small>${text ? `<p>${text}</p>` : lines(3)}<em>¿Por qué? · ¿Y tú? · Cuéntame más</em></div>`).join("")}</div>`;
const bingo = (size, free) => `<div class="bingo" style="grid-template-columns:repeat(${size},1fr)">${Array.from({ length: size * size }, (_, index) => `<div>${free && index === Math.floor((size * size) / 2) ? "<b>LIBRE</b>" : ""}</div>`).join("")}</div>`;

export const designs = {
  "plan-de-clase": {
    title: "Plan de clase de español",
    subtitle: "Una hoja para preparar la clase en diez minutos",
    pages: [
      { heading: "Plan de clase · 45 minutos", body: lessonPlan(45, [["5", "Calentamiento", "Pregunta abierta sobre su semana"], ["10", "Presentación", "El punto nuevo, con ejemplos"], ["10", "Práctica guiada", "Ejercicio corto, corrección al momento"], ["15", "Producción", "Conversación o tarea oral"], ["5", "Cierre", "Errores, resumen y tarea"]]) },
      { heading: "Plan de clase · 60 minutos", body: lessonPlan(60, [["5", "Calentamiento", "Pregunta abierta sobre su semana"], ["5", "Repaso", "Lo visto en la clase anterior"], ["10", "Presentación", "El punto nuevo, con ejemplos"], ["15", "Práctica guiada", "Ejercicios, corrección al momento"], ["20", "Producción", "Conversación o tarea oral"], ["5", "Cierre", "Errores, resumen y tarea"]]) },
    ],
  },
  "primera-clase-analisis-de-necesidades": {
    title: "Ficha de primera clase",
    subtitle: "Análisis de necesidades del alumno de español",
    pages: [{ heading: "Primera clase · análisis de necesidades", body: `
      ${row(field("Nombre", 2), field("País"), field("Lengua materna"))}
      ${row(field("Otras lenguas"), field("Profesión o estudios"), field("Fecha"))}
      <section class="box"><h3>¿Para qué quiere el español?</h3>${checks(["Trabajo", "Viajes", "Vivir en un país hispano", "Familia o pareja", "Estudios", "Examen (DELE, SIELE)", "Gusto personal", "Otro: __________"])}</section>
      <section class="box"><h3>Experiencia previa</h3>${checks(["Nunca ha estudiado", "Clases en la escuela", "Academia", "Aplicaciones", "Profesor particular", "Vivió en un país hispano"])}${lines(1)}</section>
      ${table(["Destreza", "A1", "A2", "B1", "B2", "C1", "C2", "Observaciones"], ["Hablar", "Entender", "Leer", "Escribir"].map((skill) => [`<b>${skill}</b>`, "", "", "", "", "", "", ""]), ["16%", "7%", "7%", "7%", "7%", "7%", "7%", "42%"])}
      <div class="cols">${box("Temas que le interesan", 3)}${box("Lo que más le cuesta", 3)}</div>
      <div class="cols">${box("Objetivo en tres meses", 3, "algo que pueda hacer, no «mejorar»")}${box("Horario y frecuencia", 3)}</div>
      ${box("Acuerdos de la primera clase", 2)}` }],
  },
  "informe-de-progreso-del-alumno": {
    title: "Informe de progreso del alumno",
    subtitle: "Para entregar cada mes o al final de un curso",
    pages: [{ heading: "Informe de progreso", body: `
      ${row(field("Alumno", 2), field("Nivel"), field("Periodo"))}
      ${row(field("Clases dadas"), field("Asistencia"), field("Profesor", 2))}
      ${table(["Destreza", "1", "2", "3", "4", "Comentario"], ["Expresión oral", "Comprensión auditiva", "Gramática en uso", "Vocabulario", "Pronunciación", "Comprensión lectora", "Expresión escrita"].map((skill) => [`<b>${skill}</b>`, "", "", "", "", ""]), ["26%", "6%", "6%", "6%", "6%", "50%"])}
      <p class="note">1 = necesita apoyo constante · 2 = lo hace con ayuda · 3 = lo hace solo con algún error · 4 = lo hace con soltura</p>
      <div class="cols">${box("Lo que ya puede hacer", 4)}${box("Lo que vamos a trabajar", 4)}</div>
      ${box("Plan para el próximo periodo", 3)}
      ${box("Recomendaciones para practicar entre clases", 3)}
      ${row(field("Firma del profesor"), field("Fecha"))}` }],
  },
  "registro-de-errores": {
    title: "Registro de errores del alumno",
    subtitle: "Anota durante la conversación, corrige al final",
    pages: [{ heading: "Registro de errores", body: `
      ${row(field("Alumno", 2), field("Nivel"), field("Mes"))}
      ${table(["Fecha", "Lo que dijo", "Forma correcta", "Tipo", "Repasado"], blankRows(16, 5), ["11%", "33%", "33%", "10%", "13%"])}
      <p class="note">Tipo: <b>G</b> gramática · <b>V</b> vocabulario · <b>P</b> pronunciación · <b>R</b> registro. Un error que aparece tres veces merece cinco minutos de clase.</p>` }],
  },
  "bingo-en-blanco": {
    title: "Bingo en blanco para clase de español",
    subtitle: "Cartones de 5 × 5 y 4 × 4 para cualquier tema",
    pages: [
      { heading: "Bingo · cartón de 5 × 5", body: `${row(field("Tema", 2), field("Nombre"))}${bingo(5, true)}<p class="note">Escribe una palabra en cada casilla. Marca la casilla cuando la oigas. Gana quien completa una línea y dice una frase con cada palabra.</p>` },
      { heading: "Bingo · dos cartones de 4 × 4", body: `<div class="twoBingo">${row(field("Tema", 2), field("Nombre"))}${bingo(4, false)}${row(field("Tema", 2), field("Nombre"))}${bingo(4, false)}</div>` },
    ],
  },
  "tarjetas-de-conversacion": {
    title: "Tarjetas de conversación recortables",
    subtitle: "Ocho preguntas listas y ocho tarjetas en blanco",
    pages: [
      { heading: "Tarjetas de conversación", body: cards(["¿Qué hiciste el fin de semana pasado que te gustaría repetir?", "¿Qué lugar de tu ciudad le enseñarías a un visitante?", "¿Qué comida te recuerda a tu infancia?", "¿Qué te gustaría aprender este año?", "¿Cómo es un día perfecto para ti?", "¿Qué cambiarías de tu trabajo o de tus estudios?", "¿Qué viaje recuerdas mejor y por qué?", "¿Qué consejo le darías a alguien que empieza a estudiar español?"]) },
      { heading: "Tarjetas en blanco", body: cards(Array(8).fill("")) },
    ],
  },
  "ruleta-de-preguntas": {
    title: "Ruleta de preguntas para conversar",
    subtitle: "Una ruleta con temas y otra en blanco",
    pages: [
      { heading: "Ruleta de temas", body: `${wheel(["La familia", "El trabajo", "Los viajes", "La comida", "El tiempo libre", "Tu ciudad", "Los planes", "Los recuerdos"])}<p class="note">Tira un dado de ocho caras, o pon un clip en el centro y hazlo girar con un lápiz. El alumno habla un minuto del tema; el profesor hace dos preguntas.</p>` },
      { heading: "Ruleta en blanco", body: `${wheel(Array(8).fill(""))}${row(field("Tema o punto gramatical"), field("Nivel"))}` },
    ],
  },
  "tabla-de-conjugacion": {
    title: "Tabla de conjugación en blanco",
    subtitle: "Un verbo, seis tiempos, una sola hoja",
    landscape: true,
    pages: [{ heading: "Tabla de conjugación", body: `
      ${row(field("Verbo en infinitivo", 2), field("Gerundio"), field("Participio"), field("Significado", 2))}
      ${table(["", "Presente", "Pretérito indefinido", "Pretérito imperfecto", "Futuro", "Condicional", "Presente de subjuntivo"], ["yo", "tú", "él, ella, usted", "nosotros, nosotras", "vosotros, vosotras", "ellos, ellas, ustedes"].map((person) => [`<b>${person}</b>`, "", "", "", "", "", ""]), ["16%", "14%", "14%", "14%", "14%", "14%", "14%"])}
      <div class="cols">${box("Imperativo: tú · usted · vosotros · ustedes", 1)}${box("¿Qué tiene de irregular?", 1)}</div>
      ${box("Tres frases mías con este verbo", 3)}` }],
  },
  "rubrica-de-expresion-oral": {
    title: "Rúbrica de expresión oral",
    subtitle: "Seis criterios y cuatro niveles de logro",
    landscape: true,
    pages: [{ heading: "Rúbrica de expresión oral", body: `
      ${row(field("Alumno", 2), field("Nivel"), field("Tarea", 2), field("Fecha"))}
      ${table(["Criterio", "1 · Inicial", "2 · En desarrollo", "3 · Logrado", "4 · Destacado"], [
        ["Fluidez", "Pausas largas en casi cada frase.", "Pausas frecuentes para buscar palabras.", "Habla con ritmo estable; alguna pausa.", "Habla con ritmo natural y se corrige sin detenerse."],
        ["Corrección gramatical", "Los errores impiden entender el mensaje.", "Errores frecuentes en las estructuras del nivel.", "Errores ocasionales que no impiden entender.", "Controla las estructuras del nivel y arriesga con otras."],
        ["Vocabulario", "Repite pocas palabras; recurre a su lengua.", "Vocabulario básico, con huecos.", "Vocabulario suficiente para el tema.", "Vocabulario preciso y variado; usa paráfrasis."],
        ["Pronunciación", "Cuesta entenderle a menudo.", "Se le entiende con esfuerzo.", "Se le entiende sin esfuerzo.", "Pronunciación y entonación claras y naturales."],
        ["Interacción", "Responde solo con palabras sueltas.", "Responde, pero no pregunta ni reacciona.", "Pregunta, reacciona y mantiene el turno.", "Lleva la conversación y ayuda al otro a seguirla."],
        ["Coherencia", "Ideas sueltas, sin orden.", "Orden básico con «y», «pero».", "Ideas ordenadas con conectores variados.", "Discurso bien organizado, con ejemplos y matices."],
      ].map(([name, ...bands]) => [`<b>${name}</b>`, ...bands]), ["16%", "21%", "21%", "21%", "21%"])}
      ${row(field("Puntos (de 24)"), field("Lo mejor de hoy", 2), field("Un objetivo para la próxima vez", 2))}` }],
  },
  "acuerdo-de-clases-y-cancelaciones": {
    title: "Acuerdo de clases y cancelaciones",
    subtitle: "Las reglas claras desde la primera clase",
    pages: [{ heading: "Acuerdo de clases particulares", body: `
      ${row(field("Profesor"), field("Alumno"))}
      ${row(field("Días y hora"), field("Duración de la clase"), field("Modalidad (en línea o presencial)"))}
      ${row(field("Precio por clase o por paquete"), field("Forma y fecha de pago"))}
      <section class="box terms"><h3>Lo que acordamos</h3>
        <p><b>1. Cancelaciones.</b> La clase se puede cancelar o cambiar sin costo avisando con ______ horas de antelación. Con menos aviso, la clase se cobra.</p>
        <p><b>2. Cambios de horario.</b> Una clase cambiada se recupera dentro de los ______ días siguientes, según la disponibilidad de los dos.</p>
        <p><b>3. Retrasos.</b> El profesor espera ______ minutos. La clase termina a la hora prevista aunque empiece tarde por el alumno.</p>
        <p><b>4. Si cancela el profesor.</b> La clase se recupera o se devuelve su importe, a elección del alumno.</p>
        <p><b>5. Paquetes.</b> Las clases de un paquete se usan antes del ____________.</p>
        <p><b>6. Vacaciones.</b> Las ausencias largas se avisan con ______ días de antelación.</p>
        <p><b>7. Material.</b> El material de clase es para uso personal del alumno.</p>
      </section>
      ${box("Otros acuerdos", 3)}
      ${row(field("Firma del profesor"), field("Firma del alumno"), field("Fecha"))}
      <p class="note">Modelo orientativo para ordenar la relación entre profesor y alumno. No es asesoramiento legal: adáptalo a las normas de tu país y de la plataforma donde enseñas.</p>` }],
  },
  "calendario-de-curso": {
    title: "Calendario de curso de 12 semanas",
    subtitle: "El plan de un trimestre en una hoja",
    pages: [{ heading: "Calendario de curso · 12 semanas", body: `
      ${row(field("Alumno o grupo", 2), field("Nivel"), field("Inicio"))}
      ${row(field("Objetivo del curso: al terminar el alumno puede…"))}
      ${table(["Sem.", "Fecha", "Tema y objetivo", "Gramática y vocabulario", "Tarea", "Hecho"], blankRows(12, 6, (index) => `<b class="time">${index + 1}</b>`), ["8%", "12%", "28%", "26%", "18%", "8%"])}
      <p class="note">Deja las semanas 6 y 12 para repasar y medir el progreso con una tarea oral.</p>` }],
  },
  "certificado-de-curso": {
    title: "Certificado de curso de español",
    subtitle: "Para cerrar un curso con un reconocimiento",
    landscape: true,
    certificate: true,
    pages: [{ heading: "", body: `
      <div class="cert">
        <p class="certKicker">CERTIFICADO DE CURSO</p>
        <h2>Español como lengua extranjera</h2>
        <p class="certText">Se reconoce que</p>
        <div class="certName"></div>
        <p class="certText">ha completado un curso de español de <span class="gap"></span> horas, del <span class="gap"></span> al <span class="gap"></span>, en el que se trabajaron contenidos del nivel <span class="gap short"></span> del Marco Común Europeo de Referencia.</p>
        <div class="certSign"><div><i></i><span>Profesor</span></div><div><i></i><span>Lugar y fecha</span></div></div>
        <p class="certNote">Reconocimiento del profesor por el trabajo realizado. No es un certificado oficial de nivel.</p>
      </div>` }],
  },
};
