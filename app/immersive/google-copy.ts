/**
 * Copy of the Google teachers landing in both site languages. Spanish is the
 * site default (DEFAULT_LOCALE); the header switcher changes it. Prices and
 * the checkout texts come from CheckoutButton, which already follows the locale.
 */
export type GtCopy=ReturnType<typeof gtCopy>;

export function gtCopy(es:boolean){
 const t=<T,>(a:T,b:T)=>es?a:b;
 return {
  nav:{watch:t('Ver una clase','Watch a lesson'),demos:t('Demos','Demos'),pricing:t('Precios','Pricing'),openCity:t('ABRIR LA CIUDAD ↗','OPEN THE CITY ↗'),account:t('Mi cuenta','My account'),signIn:t('Entrar','Sign in')},
  hero:{
   eyebrow:t('PARA PROFES DE ESPAÑOL ONLINE','FOR ONLINE SPANISH TEACHERS'),
   h1a:t('Clases de español interactivas. ','Interactive Spanish Lessons. '),h1b:t('Listas para dar.','Ready to Teach.'),
   lead:t('Deja de preparar clases desde cero. Empieza a darlas.','Stop preparing Spanish lessons from scratch. Start teaching with them.'),
   p:t('Mundos de conversación en 3D, gramática interactiva, comprensión auditiva y tareas de A1 a C2. Abres una clase, compartes pantalla y guías a tu alumno.','3D conversation worlds, interactive grammar, listening and homework for A1–C2. Open a lesson, share your screen, guide your student.'),
   openFull:t('ABRIR LA CIUDAD COMPLETA ↗','OPEN THE FULL CITY ↗'),
   watch:t('VER UNA CLASE REAL — GRATIS ▶','WATCH A REAL LESSON — FREE ▶'),
   reassure:[t('Sin registro para mirar','No sign-up to watch'),t('Funciona en el navegador','Runs in the browser'),'A1–C2',t('Cancelas cuando quieras','Cancel anytime')],
  },
  tiers:{
   aria:t('Qué es gratis y qué es PRO','What is free and what is PRO'),
   a:[t('VISTA GUIADA GRATIS','FREE GUIDED PREVIEW'),t('La clase de 30 segundos de arriba. No hay que tocar nada.','The 30-second lesson above. No input needed.')],
   b:[t('EXPLORACIÓN GRATIS','FREE EXPLORATION'),t('Recorre el centro de la ciudad: diez lugares, seis niveles.','Walk the city centre yourself: ten venues, six levels.'),t('Explorar gratis ↗','Explore free ↗')],
   c:['SPANISHCUE PRO',t('Todos los mundos, todas las clases de gramática, escucha, tareas y el panel del profe.','Every world, every grammar class, listening, homework and the teacher panel.'),t('Ver qué incluye ↓','See what is included ↓')],
  },
  showcase:{
   eyebrow:t('DEMOS DEL PRODUCTO · GRABACIONES REALES','PRODUCT DEMOS · REAL RECORDINGS'),
   h2:t('Mira cómo puede ser tu próxima clase.','See what your next class could look like.'),
   aria:t('Demos del producto por categoría','Product demos by category'),tabs:t('Categorías de clases','Lesson categories'),
   stamp:t('GRABACIÓN REAL','REAL RECORDING'),student:t('Alumno:','Student:'),you:t('Tú:','You:'),
   openDemo:t('Abrir la demo ↗','Open the demo ↗'),openFree:t('Abrir la clase gratis ↗','Open the free lesson ↗'),open:t('Abrir ↗','Open ↗'),openLesson:t('Abrir la clase ↗','Open the lesson ↗'),
   watchGuided:t('Ver la clase guiada ▶','Watch the guided lesson ▶'),tryPreview:t('Probar la vista previa PRO →','Try the PRO preview →'),inPro:t('Incluida en PRO ↗','Included in PRO ↗'),
  },
  how:{
   eyebrow:t('CÓMO USAN SPANISHCUE LOS PROFES','HOW TEACHERS USE SPANISHCUE'),h2:t('Antes, durante y después de tu próxima clase.','Before, during and after your next class.'),
   steps:[
    {alt:t('Una clase de gramática abierta en la biblioteca de SpanishCue','A grammar class open in the SpanishCue library'),b:t('Antes de la clase','Before class'),h3:t('Elige una clase lista para dar.','Choose a ready-to-teach lesson.'),p:t('Filtra por nivel y destreza. La ruta, las actividades y las notas para el profe ya están.','Pick by level and skill. The route, the activities and the teacher notes are already there.')},
    {alt:t('Noche Abierta en una pantalla compartida','Noche Abierta on a shared screen'),b:t('Durante la clase','During class'),h3:t('Comparte pantalla y guía las actividades.','Share your screen and guide the activities.'),p:t('En Zoom, Google Meet, Preply o cualquier llamada. Tu alumno toca, elige y habla; tú llevas la conversación.','On Zoom, Google Meet, Preply or any call. Your student taps, chooses and talks; you lead the conversation.')},
    {alt:t('Semanas de tarea de Autoestudio','Autoestudio homework weeks'),b:t('Después de la clase','After class'),h3:t('Manda tarea y revisa el trabajo.','Assign homework and review the work.'),p:t('Envía una semana de Autoestudio. Tu panel de alumnos muestra clases, errores y qué preparar después.','Send an Autoestudio week. Your students panel shows classes, errors and what to prepare next.')},
   ],
   note:t('Zoom, Google Meet y Preply son plataformas independientes; SpanishCue corre en tu navegador al lado de cualquiera de ellas.','Zoom, Google Meet and Preply are independent platforms; SpanishCue runs in your browser next to any of them.'),
  },
  plans:{
   eyebrow:t('PLANES','PLANS'),h2:t('Prueba PRO un día. Quédatelo para tus clases.','Try PRO for a day. Keep it for your classes.'),
   rows:[
    [t('PROBAR PRO','TRY PRO'),t('US$2 por un día de acceso completo. Se renueva solo a US$15.50/mes salvo que canceles antes de que termine el día.','US$2 for one day of full access. Renews automatically at US$15.50/month unless you cancel before the day ends.')],
    [t('SUSCRIBIRSE','SUBSCRIBE'),t('US$15.50/mes, precio final con impuestos. Cancelas cuando quieras antes de la próxima renovación.','US$15.50/month, final price with taxes. Cancel anytime before the next renewal.')],
    [t('INCLUYE','INCLUDED'),t('La ciudad completa de Noche Abierta, todos los mundos 3D, todas las clases de gramática interactiva, escucha, tareas de Autoestudio A1–C2 y el panel del profe.','The full Noche Abierta city, every 3D world, all interactive grammar classes, listening, Autoestudio homework A1–C2 and the teacher panel.')],
    [t('GRATIS','FREE'),t('La vista guiada, el centro de la ciudad en seis niveles, las clases marcadas FREE arriba y las semanas 1–2 de Autoestudio A1. Sin tarjeta.','The guided preview, the city centre at six levels, the lessons marked FREE above and Autoestudio A1 weeks 1–2. No card needed.')],
   ],
   terms:t('Precios en USD; tarjetas por Paddle, impuestos resueltos en el checkout; PayPal a US$15/mes. Pagas primero y después vinculas la compra a tu cuenta. El acceso se activa solo cuando el pago está confirmado.','Prices in USD; cards through Paddle, taxes handled at checkout; PayPal at US$15/month. Pay first, then link the purchase to your account. Access is granted only after the payment is confirmed.'),
   havePro:t('Ya tienes PRO.','You already have PRO.'),openFull:t('Abrir la ciudad completa ↗','Open the full city ↗'),
  },
  faq:{
   h2:t('Lo que preguntan los profes antes de pagar','Questions teachers ask before paying'),
   items:[
    [t('¿Qué estoy pagando exactamente?','What exactly am I paying for?'),t('Acceso completo a toda la biblioteca de SpanishCue: todos los mundos de conversación 3D, todas las clases de gramática interactiva, las clases de escucha, las tareas de Autoestudio A1–C2 y el panel del profe.','Full access to the whole SpanishCue library: every 3D conversation world, every interactive grammar class, the listening lessons, Autoestudio homework for A1–C2 and the teacher panel.')],
    [t('¿Puedo usarlo con mis propios alumnos?','Can I use this with my own students?'),t('Sí. Abres la clase, compartes pantalla en Zoom, Meet, Preply o cualquier llamada, y das la clase. Cada clase está pensada para clases online en vivo.','Yes. You open the lesson, share your screen on Zoom, Meet, Preply or any call, and teach. Each lesson is built for live online classes.')],
    [t('¿Mis alumnos necesitan suscripción?','Do students need a subscription?'),t('No. Una sola suscripción PRO es tuya como profe. Tus alumnos no instalan nada ni necesitan cuenta para estar en tu clase.','No. One PRO subscription is yours as the teacher. Students need nothing installed and no account to join your class.')],
    [t('¿Puedo dar clase directo desde el navegador?','Can I teach directly from my browser?'),t('Sí. Todo corre en Chrome, Safari, Edge y Firefox en computadora; las clases también abren en celulares y tablets.','Yes. Everything runs in Chrome, Safari, Edge and Firefox on desktop; lessons also open on phones and tablets.')],
    [t('¿Hay clases para principiantes y para avanzados?','Are there lessons for beginners and advanced learners?'),t('Sí, de A1 a C2. Los mundos de conversación tienen una versión escrita para cada nivel; gramática y escucha están organizadas por nivel.','Yes, from A1 to C2. Conversation worlds have a version written for each level; grammar and listening are organised by level.')],
    [t('¿Incluye tarea?','Is homework included?'),t('Sí. Autoestudio tiene unidades semanales A1–C2 con lectura, escritura, escucha y habla, más un panel donde sigues a cada alumno.','Yes. Autoestudio has weekly units for A1–C2 with reading, writing, listening and speaking, plus a panel where you follow each student.')],
    [t('¿Puedo cancelar?','Can I cancel?'),t('Sí, cuando quieras desde tu cuenta, antes de la próxima renovación. Sin llamadas ni formularios.','Yes, at any time from your account, before the next renewal. No calls, no forms.')],
    [t('¿Qué pasa después de la prueba de US$2?','What happens after the US$2 trial?'),t('Tienes un día de acceso completo. Si no cancelas antes de que termine el día, la suscripción sigue a US$15.50/mes, precio final con impuestos.','You get one day of full access. Unless you cancel before the day ends, the subscription continues at US$15.50/month, final price with taxes.')],
    [t('¿Qué es gratis y qué requiere PRO?','What is free, and what requires PRO?'),t('Gratis: la vista guiada de arriba, el centro de Noche Abierta en seis niveles, las clases marcadas FREE en esta página y las dos primeras semanas de Autoestudio A1. Todo lo marcado PRO está en la suscripción.','Free: the guided preview above, the city centre of Noche Abierta at six levels, the lessons marked FREE on this page, and the first two weeks of Autoestudio A1. Everything marked PRO is in the subscription.')],
   ] as [string,string][],
  },
  voices:{aria:t('Lo que dicen los profes','What teachers say'),eyebrow:t('PROFES QUE YA LO PROBARON','FROM TEACHERS WHO TRIED IT'),note:t('Comentarios reales de profes que usan SpanishCue, traducidos del inglés. Los retratos son ilustrativos.','Real comments from teachers using SpanishCue. Portraits are illustrative.')},
  close:{h2:t('Tu próxima clase de español ya está lista.','Your next Spanish lesson is already waiting.'),p:t('Deja de preparar todo desde cero. Empieza a dar clase con SpanishCue.','Stop preparing everything from scratch. Start teaching with SpanishCue.')},
  footer:{tag:t('SPANISHCUE · Hecho para enseñar español.','SPANISHCUE · Made for teaching Spanish.'),privacy:t('Privacidad','Privacy'),terms:t('Términos','Terms'),contact:t('Contacto','Contact')},
  sticky:t('Ver la clase ▶','Watch lesson ▶'),
  tour:{
   aria:t('Vista guiada para profes de Noche Abierta','Guided teacher preview of Noche Abierta'),
   tag:t('VISTA PARA PROFES','TEACHER PREVIEW'),
   labels:{welcome:t('Bienvenida','Welcome'),walk:t('01 · Misión','01 · Mission'),choice:t('02 · Decisión','02 · Choice'),talk:t('03 · Conversación','03 · Conversation'),end:t('Siguiente paso','Next step'),free:t('Manejas tú','You drive')},
   loading:t('Cargando la ciudad…','Loading the city…'),watch:t('Ver una clase real ▶','Watch a real lesson ▶'),replay:t('Volver a ver la clase ▶','Replay the lesson ▶'),takeControls:t('Tomar los controles ▶','Take the controls ▶'),
   welcomeH:t('ESTO ES UNA CLASE DE ESPAÑOL.','THIS IS A SPANISH LESSON.'),welcomeP:t('Tu alumno explora una situación real. Tú guías la conversación.','Your student explores a real situation. You guide the conversation.'),
   missionEyebrow:t('01 — LA MISIÓN','01 — THE MISSION'),missionP:t('Encontrar el café y pedir algo para beber.','Find the café and order a drink.'),walking:t('Caminando hacia el Café Martina…','Walking to Café Martina…'),
   choiceEyebrow:t('02 — EL ALUMNO TOMA DECISIONES CON SENTIDO','02 — STUDENTS MAKE MEANINGFUL CHOICES'),talkEyebrow:t('03 — CADA DECISIÓN SE VUELVE CONVERSACIÓN REAL','03 — TURN EVERY CHOICE INTO REAL CONVERSATION'),
   simulated:t('Demo guiada: esta elección es simulada. En clase, elige tu alumno.','Guided demo: this choice is simulated. In class, your student chooses.'),
   ownLife:t('Tu alumno habla de su propia vida. Tú guías la charla.','Your student talks about their own life. You guide the discussion.'),
   teacherNotes:t('NOTAS PARA EL PROFE','TEACHER NOTES'),
   driveEyebrow:t('TU ALUMNO MANEJA','YOUR STUDENT DRIVES'),driveA:t('Camina hasta un círculo de luz y toca ','Walk to a circle of light and press '),driveTalk:t('Hablar','Talk'),driveB:t('. WASD o flechas, arrastra para mirar. En el celular, usa la palanca.','. WASD or arrows, drag to look. On a phone, use the stick.'),
   driveSmall:(n:number)=>t(`${n} lugares gratis para abrir · la ciudad completa tiene todos los niveles, A1–C2`,`${n} free places to open · the full city has every level, A1–C2`),
   chooseEyebrow:t('ELIGE TU RESPUESTA','CHOOSE YOUR ANSWER'),nowTalk:t('AHORA HABLA DE TI','NOW TALK ABOUT YOURSELF'),answered:t('Ya lo dije en voz alta →','I answered out loud →'),keepExploring:t('Seguir explorando →','Keep exploring →'),closeActivity:t('Cerrar actividad','Close activity'),
   doorP:t('Este lugar es parte de la ciudad completa. Ábrelo, y todas las demás clases, con SpanishCue PRO.','This place is part of the full city. Open it, and every other lesson, with SpanishCue PRO.'),doorBack:t('Seguir explorando las calles gratis','Keep exploring the free streets'),
   endEyebrow:t('ESO FUE UNA ACTIVIDAD','THAT’S ONE ACTIVITY'),endH:t('Imagina toda tu semana de clases.','Imagine your whole teaching week.'),endP:t('Ciudad completa, gramática interactiva, escucha y tareas de A1 a C2, listas para abrir en tu próxima clase.','Full city, interactive grammar, listening and homework for A1–C2, ready to open in your next class.'),
   openFull:t('Abrir la ciudad completa ↗','Open the full city ↗'),explore:t('EXPLORAR OTRA CLASE ↓','EXPLORE ANOTHER LESSON ↓'),exploreFree:t('Explora la ciudad gratis por tu cuenta ↗','Explore the free city yourself ↗'),
   unlockAria:t('La pantalla completa es parte de PRO','Full screen is part of PRO'),unlockEyebrow:t('⛶ PANTALLA COMPLETA · PRO','⛶ FULL SCREEN · PRO'),unlockH:t('Dala en toda la pantalla.','Teach it on the whole screen.'),unlockP:t('La pantalla completa, la ciudad entera y todas las clases de A1 a C2 se abren con SpanishCue PRO.','Full screen, the complete city and every lesson for A1–C2 open with SpanishCue PRO.'),notNow:t('Ahora no','Not now'),
   pause:t('Pausa Ⅱ','Pause Ⅱ'),resume:t('Seguir ▷','Resume ▷'),skip:t('Saltar →','Skip →'),replayBtn:t('Repetir ↺','Replay ↺'),close:t('Cerrar ×','Close ×'),
   fsExit:t('⛶ Salir de pantalla completa','⛶ Exit full screen'),fs:t('⛶ Pantalla completa','⛶ Full screen'),fsUnlock:t('⛶ DESBLOQUEAR PANTALLA COMPLETA','⛶ UNLOCK FULL SCREEN'),
  },
  preview:{
   badge:t('VISTA PREVIA PRO','PRO PREVIEW'),aria:(title:string)=>t(`Vista previa de ${title}`,`Preview of ${title}`),closeAria:t('Cerrar vista previa','Close preview'),
   note:t('Esta es la clase real, limitada a su primera regla y un ejercicio. Las demás etapas se abren con PRO.','This is the real class, limited to its first rule and one exercise. The remaining stages open with PRO.'),
   understand:t('01 · ENTENDER','01 · UNDERSTAND'),practise:t('02 · PRACTICAR · UNA PREGUNTA','02 · PRACTISE · ONE QUESTION'),answers:t('Respuestas','Answers'),
   right:'¡Bien!',wrong:t('Esta vez no.','Not this time.'),locked:t('Etapas bloqueadas','Locked stages'),
   skipNext:t('Saltar la pregunta · ver qué sigue →','Skip the question · see what comes next →'),next:t('Ver qué sigue →','See what comes next →'),
   gateH:t('¿Lista para dar la clase completa?','Ready to teach the full lesson?'),gateP:(n:number)=>t(`Desbloquea la clase completa, sus ${n} etapas restantes y el resto de SpanishCue.`,`Unlock the complete class, its ${n} remaining stages, and the rest of SpanishCue.`),
   browse:t('Seguir mirando clases','Continue browsing lessons'),
   stages:t(['Entender','Explorar','Practicar','Escuchar','Hablar','Escribir','Cerrar'],['Understand','Explore','Practise','Listen','Talk','Write','Close']),
  },
 };
}
