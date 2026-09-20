export const campaignCopy = {
 es: {
  teacher: 'PARA PROFESORES DE ESPAÑOL', title: 'Tu próxima clase ya está lista.',
  lead: 'Clases de español visuales e interactivas. Listas para abrir, compartir pantalla y enseñar.',
  mechanism: 'Elige. Abre. Enseña.', primary: 'VER UNA CLASE REAL GRATIS', unlock: 'DESBLOQUEAR TODA LA BIBLIOTECA',
  pains: ['Sin PDFs aburridos.', 'Sin noches armando diapositivas.', 'Sin empezar desde cero.'],
  proof: 'ESTO ES SPANISHCUE', proofTitle: 'Abre una. Mira lo que pasa.',
  beforeTitle: 'No más clases armadas desde cero.', before: 'ANTES', after: 'CON SPANISHCUE',
  beforeItems: ['Buscar un tema', 'Abrir diez pestañas', 'Descargar PDFs', 'Diseñar diapositivas', 'Inventar actividades y preguntas', 'Llegar cansado a clase'],
  afterItems: ['Elige nivel y objetivo', 'Abre una clase', 'Comparte pantalla', 'Enseña'],
  steps: [['ELIGE', 'Nivel, objetivo o tipo de clase.'], ['ABRE', 'Todo vive en el navegador.'], ['ENSEÑA', 'Comparte pantalla y empieza.']],
  pdf: 'NO ES OTRO PDF.', pdfCopy: 'Tu alumno vino a participar.', static: 'Una ficha. Siempre igual.', interactive: 'Una clase. Muchas formas de participar.',
  formats: ['Explicación visual', 'Decisiones', 'Práctica', 'Conversación', 'Audio', 'Interacción'],
  formatsNote: 'Elige el formato que necesita tu clase: desde gramática visual hasta escucha y conversación.',
  made: 'Creado por un profesor de español para profesores de español.',
  madeCopy: 'SPANISHCUE nace de un problema real: dedicar horas a preparar una sola clase. Por eso cada experiencia se centra en lo que pasa cuando tienes un alumno delante: explicar, practicar, reaccionar y hablar.',
  founder: 'SÉ UNO DE LOS PRIMEROS 1.000 PROFESORES.', founderCopy: 'Precio fundador para las primeras 1.000 suscripciones activadas.',
  keep: 'Mantienes US$15/mes mientras esa misma suscripción continúe activa.', month: 'mes', full: 'Toda la biblioteca.',
  payment: 'Pago mensual con PayPal. Cancelación online. La cuenta gratuita no requiere tarjeta.',
  launch: 'Tu próxima clase, gratis. PRO, próximamente.', launchCopy: 'Precio fundador previsto: US$15/mes. Los pagos aún no están habilitados. Puedes conocer el lanzamiento sin tarjeta ni cobro.',
  launchCta: 'CONOCER EL LANZAMIENTO PRO', remaining: 'de 1.000 lugares disponibles', free: 'GRATIS', pro: 'PRO', open: 'ABRIR CLASE REAL', viewPro: 'VER ACCESO PRO',
  modalTitle: 'Toda SPANISHCUE por US$15/mes.', continue: 'SEGUIR MIRANDO CLASES', tryFirst: 'Puedes probar clases reales gratis primero.', close: 'Cerrar oferta', login: 'Mi cuenta', loginVisitor: 'Entrar',
  stats: ['clases reales', 'rutas docentes', 'niveles', 'clases gratuitas'],
 },
 en: {
  teacher: 'FOR SPANISH TEACHERS', title: 'Your next Spanish lesson is ready.',
  lead: 'Visual, interactive Spanish lessons. Ready to open, screen-share and teach.',
  mechanism: 'Choose. Open. Teach.', primary: 'TRY A REAL LESSON FREE', unlock: 'UNLOCK THE FULL LIBRARY',
  pains: ['No boring PDFs.', 'No late-night slide building.', 'No starting from scratch.'],
  proof: 'THIS IS SPANISHCUE', proofTitle: 'Open one. See what happens.',
  beforeTitle: 'Stop building every lesson from scratch.', before: 'BEFORE', after: 'WITH SPANISHCUE',
  beforeItems: ['Find a topic', 'Open ten tabs', 'Download PDFs', 'Build slides', 'Write activities and follow-ups', 'Start class already tired'],
  afterItems: ['Choose a level and goal', 'Open a lesson', 'Share your screen', 'Teach'],
  steps: [['CHOOSE', 'A level, a goal or a lesson type.'], ['OPEN', 'Everything lives in your browser.'], ['TEACH', 'Share your screen. You’re ready.']],
  pdf: 'NOT ANOTHER WORKSHEET.', pdfCopy: 'Your learner came to take part.', static: 'One worksheet. Always the same.', interactive: 'One lesson. More ways to take part.',
  formats: ['Visual explanations', 'Decisions', 'Practice', 'Conversation', 'Audio', 'Interaction'],
  formatsNote: 'Pick what your class needs, from visual grammar to listening and conversation.',
  made: 'Built by a Spanish teacher for Spanish teachers.',
  madeCopy: 'SPANISHCUE started with a familiar problem: spending hours preparing a single class. Each experience focuses on what happens with a learner in front of you: explaining, practising, reacting and speaking.',
  founder: 'BE ONE OF THE FIRST 1,000 TEACHERS.', founderCopy: 'Founder Price for the first 1,000 activated subscriptions.',
  keep: 'Keep US$15/month while that same subscription remains active.', month: 'month', full: 'The full library.',
  payment: 'Monthly payment with PayPal. Cancel online. No card needed for a free account.',
  launch: 'Your next lesson is free. PRO is coming.', launchCopy: 'Planned Founder Price: US$15/month. Payments are not enabled yet. Explore the launch with no card or charge.',
  launchCta: 'EXPLORE THE PRO LAUNCH', remaining: 'of 1,000 places available', free: 'FREE', pro: 'PRO', open: 'OPEN A REAL LESSON', viewPro: 'VIEW PRO ACCESS',
  modalTitle: 'All of SPANISHCUE for US$15/month.', continue: 'KEEP EXPLORING LESSONS', tryFirst: 'You can try real lessons free first.', close: 'Close offer', login: 'My account', loginVisitor: 'Log in',
  stats: ['real lessons', 'teaching paths', 'levels', 'free lessons'],
 },
} as const;

export function campaignHero(slug: string, locale: 'es' | 'en') {
 const es = locale === 'es';
 if (slug === 'spanish-conversation-activities') return { image: 'conversation', title: es ? 'Menos silencios. Más conversación.' : 'Less dead air. More Spanish.', lead: es ? 'Actividades de conversación en español con decisiones, situaciones y repreguntas listas. Abre una clase y pon a tus alumnos a hablar.' : 'Spanish conversation activities with ready-made scenarios, decisions and follow-up prompts. Open a lesson and get your learners talking.' };
 if (slug === 'free-spanish-lesson') return { image: 'free-lesson', title: es ? 'Tu próxima clase. Pruébala gratis.' : 'Your next lesson. Try it free.', lead: es ? 'Abre una clase de español real y completa antes de registrarte. Explora la experiencia visual e interactiva, sin tarjeta.' : 'Open a real, complete Spanish lesson before you sign up. Explore visual, interactive teaching with no card required.' };
 if (slug === 'spanish-grammar-lessons') return { image:'ele', title: es ? 'La gramática entra por los ojos.' : 'Spanish grammar they can see and use.', lead: es ? 'Clases de gramática española con explicación visual, práctica y conversación. Abre una y empieza a enseñar.' : 'Visual Spanish grammar lessons with explanations, practice and speaking. Open one and start teaching.' };
 return { image: slug === 'ele-recursos-profesores' ? 'ele' : 'online', title: campaignCopy[locale].title, lead: campaignCopy[locale].lead };
}
