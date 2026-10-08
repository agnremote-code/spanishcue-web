/**
 * Copy for the redesigned paid-traffic landings (/lp/spanish-teacher-resources
 * and /lp/online-spanish-teaching-resources). Every product claim maps to a
 * real feature shown with a real screenshot; prices mirror the checkout.
 */
export const paidLandingSlugs = ['spanish-teacher-resources', 'online-spanish-teaching-resources'] as const;
export type PaidLandingSlug = (typeof paidLandingSlugs)[number];
export const isPaidLandingSlug = (slug: string): slug is PaidLandingSlug => (paidLandingSlugs as readonly string[]).includes(slug);

export type FeatureKey = 'worlds' | 'lessons' | 'listening' | 'conversation' | 'homework';
export const featureMedia: Record<FeatureKey, { image: string; path?: string }> = {
 worlds: { image: '/lp/noche-3d.webp' },
 lessons: { image: '/lp/fabrica.webp', path: '/la-fabrica-de-los-nombres' },
 listening: { image: '/lp/hotel.webp', path: '/el-hotel-de-lo-imposible' },
 conversation: { image: '/lp/mexico.webp', path: '/mexico' },
 homework: { image: '/lp/autoestudio.webp', path: '/autoestudio/a1/semana-1' },
};

export const paidCopy = {
 en: {
  eyebrow: 'For Spanish teachers · A1–C2',
  title: 'Stop Planning Spanish Lessons From Scratch.',
  lead: {
   'spanish-teacher-resources': 'Open a ready-to-teach interactive lesson, share your screen and teach. 3D worlds, listening, conversation and homework, all in one library.',
   'online-spanish-teaching-resources': 'Built for Zoom, Meet and any shared screen. Open an interactive lesson and teach: 3D worlds, listening, conversation and homework in one browser tab.',
  },
  tryFree: 'Prefer to look first? Open a free lesson',
  heroShot: 'Real screenshot · Noche abierta, a 3D city lesson',
  facts: ['ready-to-teach lessons', 'every level, one library', 'free lessons to try', 'no downloads, no slides'],
  featuresKicker: 'What you can teach tomorrow',
  featuresTitle: 'Every part of the class, already built.',
  featuresNote: 'Real screenshots from the SpanishCue library.',
  features: {
   worlds: ['Immersive 3D worlds', 'Learners walk a city, enter places and solve real situations in Spanish. One world, six levels.'],
   lessons: ['Interactive lessons', 'Step-by-step classes: start, read, understand, practise, listen, speak and write.'],
   listening: ['Listening', 'Audio stories with questions and transcripts, so learners hear real Spanish before they read it.'],
   conversation: ['Conversation', 'Maps, dilemmas and scenarios that get learners talking from the first minute.'],
   homework: ['Homework and self-study', 'Autoestudio A1–C2: weekly reading, writing, listening and speaking practice between classes.'],
  } as Record<FeatureKey, [string, string]>,
  freeTag: 'Free to try',
  proTag: 'PRO',
  openLesson: 'Open it',
  howKicker: 'How it works',
  howTitle: 'Your next class, ready in a minute.',
  how: [['Choose', 'Pick a level and a goal.'], ['Open', 'The lesson runs in your browser.'], ['Teach', 'Share your screen and start talking.']],
  howNote: 'Works with Zoom, Meet, Teams or a classroom projector.',
  prepTitle: 'Your prep time, back.',
  plansKicker: 'Full library access',
  plansTitle: 'Choose how to start.',
  plansLead: 'Founder price: US$15.50/month, kept while that same subscription stays active.',
  included: ['Every lesson, A1–C2', '3D worlds, listening, conversation and grammar', 'Autoestudio self-study course', 'Cancel online in My account'],
  secure: 'Card checkout by Paddle. Access unlocks once the payment is verified.',
  faqTitle: 'Questions before you start',
  faq: [
   ['What happens after the 1-day trial?', 'You pay US$2 today for one day of full access. Unless you cancel before the day ends, the subscription continues at US$15.50/month.'],
   ['Do I need an account to pay?', 'No. Pay first, then link the purchase to your account to open PRO. You can also create the account before paying.'],
   ['How do I cancel?', 'Online, in My account. Renewal terms are shown before you pay.'],
   ['Can I try something first?', 'Yes. Several real lessons are free, with no card required.'],
  ],
  finalTitle: 'Your next Spanish class can start here.',
  finalCta: 'See the plans',
  proReady: 'Your PRO library is ready.',
  openLibrary: 'Open the library',
 },
 es: {
  eyebrow: 'Para profesores de español · A1–C2',
  title: 'Deja de planificar clases de español desde cero.',
  lead: {
   'spanish-teacher-resources': 'Abre una clase interactiva lista para enseñar, comparte pantalla y enseña. Mundos 3D, escucha, conversación y tareas en una sola biblioteca.',
   'online-spanish-teaching-resources': 'Hecha para Zoom, Meet y cualquier pantalla compartida. Abre una clase interactiva y enseña: mundos 3D, escucha, conversación y tareas en una pestaña.',
  },
  tryFree: '¿Prefieres mirar primero? Abre una clase gratis',
  heroShot: 'Captura real · Noche abierta, una clase en una ciudad 3D',
  facts: ['clases listas para enseñar', 'todos los niveles, una biblioteca', 'clases gratis para probar', 'sin descargas ni diapositivas'],
  featuresKicker: 'Lo que puedes enseñar mañana',
  featuresTitle: 'Cada parte de la clase, ya preparada.',
  featuresNote: 'Capturas reales de la biblioteca SpanishCue.',
  features: {
   worlds: ['Mundos 3D inmersivos', 'El alumno recorre una ciudad, entra en lugares y resuelve situaciones reales en español. Un mundo, seis niveles.'],
   lessons: ['Clases interactivas', 'Clases paso a paso: empezar, leer, entender, practicar, escuchar, hablar y escribir.'],
   listening: ['Escucha', 'Historias en audio con preguntas y transcripción, para oír español real antes de leerlo.'],
   conversation: ['Conversación', 'Mapas, dilemas y situaciones que hacen hablar al alumno desde el primer minuto.'],
   homework: ['Tareas y autoestudio', 'Autoestudio A1–C2: práctica semanal de lectura, escritura, escucha y expresión oral entre clases.'],
  } as Record<FeatureKey, [string, string]>,
  freeTag: 'Gratis para probar',
  proTag: 'PRO',
  openLesson: 'Abrir',
  howKicker: 'Cómo funciona',
  howTitle: 'Tu próxima clase, lista en un minuto.',
  how: [['Elige', 'Un nivel y un objetivo.'], ['Abre', 'La clase funciona en el navegador.'], ['Enseña', 'Comparte pantalla y empieza a conversar.']],
  howNote: 'Funciona con Zoom, Meet, Teams o un proyector en el aula.',
  prepTitle: 'Recupera tu tiempo de preparación.',
  plansKicker: 'Acceso a toda la biblioteca',
  plansTitle: 'Elige cómo empezar.',
  plansLead: 'Precio fundador: US$15.50/mes, mientras esa misma suscripción siga activa.',
  included: ['Todas las clases, A1–C2', 'Mundos 3D, escucha, conversación y gramática', 'Curso de autoestudio', 'Cancelación online en Mi cuenta'],
  secure: 'Pago con tarjeta mediante Paddle. El acceso se activa cuando el pago queda verificado.',
  faqTitle: 'Preguntas antes de empezar',
  faq: [
   ['¿Qué pasa después de la prueba de 1 día?', 'Hoy pagas US$2 por un día de acceso completo. Si no cancelas antes de que termine ese día, la suscripción continúa a US$15.50/mes.'],
   ['¿Necesito una cuenta para pagar?', 'No. Paga primero y después vincula la compra a tu cuenta para entrar a PRO. También puedes crear la cuenta antes de pagar.'],
   ['¿Cómo cancelo?', 'Online, en Mi cuenta. Las condiciones de renovación se muestran antes del pago.'],
   ['¿Puedo probar algo antes?', 'Sí. Varias clases reales son gratis, sin tarjeta.'],
  ],
  finalTitle: 'Tu próxima clase de español puede empezar aquí.',
  finalCta: 'Ver los planes',
  proReady: 'Tu biblioteca PRO te espera.',
  openLibrary: 'Abrir la biblioteca',
 },
} as const;
