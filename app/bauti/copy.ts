/** SpanishCue's WhatsApp (owner's number, 2026-10-23). */
export const BAUTI_WHATSAPP = '19406015598';

export type BautiAudience = 'academy' | 'teacher';
export type BautiTopic = { id: string; question: string; answer: string; link?: { href: string; label: string } };
type BautiCopy = {
  open: string; close: string; title: string; subtitle: string; launcher: string; launcherHint: string;
  intro: string; back: string; whatsapp: string; whatsappMessage: string; note: string;
  primary: { href: string; label: string }; topics: BautiTopic[];
};

/** Answers state only what exists today; prices match /pricing and nothing invents clients or results. */
export const bautiCopy: Record<'es' | 'en', Record<BautiAudience, BautiCopy>> = {
  es: {
    academy: {
      open: 'Abrir el chat con Bauti', close: 'Cerrar el chat', title: 'Chat con Bauti', subtitle: 'Asistente de SpanishCue para academias',
      launcher: 'Habla con Bauti', launcherHint: 'Dudas de academias', intro: '¡Hola! Soy Bauti. ¿Qué quieres saber sobre SpanishCue para tu academia?',
      back: '← Otras preguntas', whatsapp: 'WhatsApp', whatsappMessage: 'Hola, quiero información sobre SpanishCue para mi academia.',
      note: 'Respuestas automáticas. Para tu caso concreto, escríbenos por WhatsApp.', primary: { href: '/academias#solicitar-demo', label: 'Pedir una demo' },
      topics: [
        { id: 'what', question: '¿Qué es SpanishCue?', answer: 'Una biblioteca de clases de español listas para abrir en pantalla: gramática por nivel, conversación y mundos 3D en los que tus alumnos caminan, eligen qué decir y conversan.' },
        { id: 'team', question: '¿Cómo lo usa mi equipo?', answer: 'Cada profesor entra con su propia cuenta. Desde el panel de academia invitas a tus profesores por email y ves quién forma parte del equipo.', link: { href: '/academias/panel', label: 'Abrir el panel de academia' } },
        { id: 'levels', question: '¿Qué niveles cubre?', answer: 'Gramática desde principiante absoluto hasta C2, una clase por nivel, y conversación con niveles propios en cada mundo 3D. El nivel inicial tiene apoyo en inglés.' },
        { id: 'price', question: '¿Cuánto cuesta para una academia?', answer: 'No hay una tarifa institucional pública: las licencias se acuerdan según el tamaño de tu equipo. Escríbenos y lo vemos juntos.' },
        { id: 'try', question: '¿Puedo probarlo antes?', answer: 'Sí. Noche abierta, la recepción del Hospital San Casi Vivo y la Clase inicial son gratis. También puedes pedir una demo para tu equipo.', link: { href: '/demo/noche-abierta', label: 'Probar Noche abierta' } },
      ],
    },
    teacher: {
      open: 'Abrir el chat con Bauti', close: 'Cerrar el chat', title: 'Chat con Bauti', subtitle: 'Asistente de SpanishCue para profes',
      launcher: 'Habla con Bauti', launcherHint: '¿Dudas? Te ayudo', intro: '¡Hola! Soy Bauti. ¿En qué te ayudo con SpanishCue?',
      back: '← Otras preguntas', whatsapp: 'WhatsApp', whatsappMessage: 'Hola, tengo una consulta sobre SpanishCue.',
      note: 'Respuestas automáticas. Para tu caso concreto, escríbenos por WhatsApp.', primary: { href: '/pricing', label: 'Ver PRO' },
      topics: [
        { id: 'what', question: '¿Qué es SpanishCue?', answer: 'Clases de español listas para dar: abres la clase, compartes pantalla y enseñas. Gramática desde principiante absoluto hasta C2, conversación y mundos 3D para que tus alumnos hablen.' },
        { id: 'free', question: '¿Qué puedo probar gratis?', answer: 'El centro de Noche abierta, la entrada y la recepción del Hospital San Casi Vivo, la Clase inicial y Latinoamérica al Oído son gratis.', link: { href: '/demo/noche-abierta', label: 'Probar Noche abierta' } },
        { id: 'price', question: '¿Cuánto cuesta PRO?', answer: 'US$15.50 al mes, precio final con impuestos. Desbloquea toda la biblioteca y cancelas cuando quieras antes de la próxima renovación.', link: { href: '/pricing', label: 'Ver PRO' } },
        { id: 'online', question: '¿Cómo lo uso en clases online?', answer: 'Abre la clase en el navegador y comparte pantalla en Zoom o Meet. Activa «compartir sonido» para que tu alumno escuche los audios. Con el modo Con profesor guardas el progreso de cada alumno.' },
        { id: 'school', question: 'Trabajo en una academia', answer: 'SpanishCue también tiene licencias para equipos: cada profesor con su cuenta y un panel para la academia.', link: { href: '/academias', label: 'Ver SpanishCue para academias' } },
      ],
    },
  },
  en: {
    academy: {
      open: 'Open the chat with Bauti', close: 'Close the chat', title: 'Chat with Bauti', subtitle: 'SpanishCue assistant for schools',
      launcher: 'Ask Bauti', launcherHint: 'Questions from schools', intro: 'Hi! I’m Bauti. What would you like to know about SpanishCue for your school?',
      back: '← Other questions', whatsapp: 'WhatsApp', whatsappMessage: 'Hi, I would like information about SpanishCue for my school.',
      note: 'Automatic answers. For your specific case, message us on WhatsApp.', primary: { href: '/academias#solicitar-demo', label: 'Request a demo' },
      topics: [
        { id: 'what', question: 'What is SpanishCue?', answer: 'A library of Spanish lessons ready to open on screen: grammar by level, conversation and 3D worlds where students walk around, choose what to say and talk.' },
        { id: 'team', question: 'How does my team use it?', answer: 'Each teacher signs in with their own account. From the school dashboard you invite your teachers by email and see who is on your team.', link: { href: '/academias/panel', label: 'Open the school dashboard' } },
        { id: 'levels', question: 'Which levels does it cover?', answer: 'Grammar from absolute beginner to C2, one lesson per level, and conversation with its own levels in each 3D world. The beginner level includes English support.' },
        { id: 'price', question: 'How much does it cost for a school?', answer: 'There is no public institutional price: licences are agreed according to the size of your team. Message us and we will work it out together.' },
        { id: 'try', question: 'Can I try it first?', answer: 'Yes. Noche abierta, the Hospital San Casi Vivo reception and the Clase inicial are free. You can also request a demo for your team.', link: { href: '/demo/noche-abierta', label: 'Try Noche abierta' } },
      ],
    },
    teacher: {
      open: 'Open the chat with Bauti', close: 'Close the chat', title: 'Chat with Bauti', subtitle: 'SpanishCue assistant for teachers',
      launcher: 'Ask Bauti', launcherHint: 'Questions? I can help', intro: 'Hi! I’m Bauti. How can I help you with SpanishCue?',
      back: '← Other questions', whatsapp: 'WhatsApp', whatsappMessage: 'Hi, I have a question about SpanishCue.',
      note: 'Automatic answers. For your specific case, message us on WhatsApp.', primary: { href: '/pricing', label: 'See PRO' },
      topics: [
        { id: 'what', question: 'What is SpanishCue?', answer: 'Spanish lessons ready to teach: open the lesson, share your screen and teach. Grammar from absolute beginner to C2, conversation and 3D worlds that get your students talking.' },
        { id: 'free', question: 'What can I try for free?', answer: 'The centre of Noche abierta, the entrance and reception of Hospital San Casi Vivo, the Clase inicial and Latinoamérica al Oído are free.', link: { href: '/demo/noche-abierta', label: 'Try Noche abierta' } },
        { id: 'price', question: 'How much is PRO?', answer: 'US$15.50 a month, final price including taxes. It unlocks the whole library and you can cancel any time before the next renewal.', link: { href: '/pricing', label: 'See PRO' } },
        { id: 'online', question: 'How do I use it in online lessons?', answer: 'Open the lesson in your browser and share your screen in Zoom or Meet. Turn on “share sound” so your student hears the audio. Teacher mode saves each student’s progress.' },
        { id: 'school', question: 'I work at a language school', answer: 'SpanishCue also offers team licences: each teacher with their own account and a dashboard for the school.', link: { href: '/academias', label: 'See SpanishCue for schools' } },
      ],
    },
  },
};
