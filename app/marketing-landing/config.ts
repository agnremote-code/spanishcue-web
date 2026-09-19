export type LandingCopy = {
  kicker: string;
  title: string;
  lead: string;
  proof: string;
  productTitle: string;
  productCopy: string;
  benefitTitle: string;
  benefits: readonly [string, string][];
  methodTitle: string;
  methodSteps: readonly [string, string][];
  finalTitle: string;
  finalCopy: string;
};

export type LandingConfig = {
  slug: string;
  lessonIds: readonly number[];
  copy: { es: LandingCopy; en: LandingCopy };
};

export const landingConfigs = {
  "free-spanish-lesson": {
    slug: "free-spanish-lesson",
    lessonIds: [40, 103, 105, 201, 16, 29],
    copy: {
      en: {
        kicker: "FREE INTERACTIVE SPANISH LESSON",
        title: "Open a complete Spanish lesson before you sign up.",
        lead: "Try a real visual lesson in your browser, then explore free examples across grammar, conversation, listening, pronunciation and vocabulary.",
        proof: "Complete lesson · No card · No empty demo",
        productTitle: "Choose the free lesson that fits your next class.",
        productCopy: "Every example below is part of the real SPANISHCUE product and opens directly in your browser.",
        benefitTitle: "See how the lesson works before making a decision.",
        benefits: [["Real classroom flow", "Move from a clear explanation or prompt into guided practice and speaking."], ["Five content paths", "Try grammar, conversation, listening, pronunciation and vocabulary."], ["Ready in the browser", "Open the lesson, share your screen and teach without downloading files."]],
        methodTitle: "Choose. Open. Teach.",
        methodSteps: [["Choose", "Pick a free lesson by level or objective."], ["Open", "Experience the complete visual sequence."], ["Teach", "Use it online or in person with your learner."]],
        finalTitle: "Start with a real lesson, not a promise.",
        finalCopy: "Open one now. Create a free teacher account only when you want to keep exploring.",
      },
      es: {
        kicker: "CLASE DE ESPAÑOL INTERACTIVA GRATIS",
        title: "Abre una clase completa de español antes de registrarte.",
        lead: "Prueba una clase visual real en el navegador y explora ejemplos gratuitos de gramática, conversación, escucha, fonética y vocabulario.",
        proof: "Clase completa · Sin tarjeta · Sin demo vacía",
        productTitle: "Elige la clase gratis que encaje con tu próxima sesión.",
        productCopy: "Cada ejemplo forma parte del producto real de SPANISHCUE y se abre directamente en tu navegador.",
        benefitTitle: "Mira cómo funciona la clase antes de decidir.",
        benefits: [["Secuencia real de clase", "Pasa de una explicación o consigna clara a la práctica guiada y la conversación."], ["Cinco rutas de contenido", "Prueba gramática, conversación, escucha, fonética y vocabulario."], ["Lista en el navegador", "Abre la clase, comparte pantalla y enseña sin descargar archivos."]],
        methodTitle: "Elige. Abre. Enseña.",
        methodSteps: [["Elige", "Escoge una clase gratis por nivel u objetivo."], ["Abre", "Experimenta la secuencia visual completa."], ["Enseña", "Úsala online o en persona con tu alumno."]],
        finalTitle: "Empieza con una clase real, no con una promesa.",
        finalCopy: "Abre una ahora. Crea tu cuenta docente gratuita solo cuando quieras seguir explorando.",
      },
    },
  },
  "spanish-teacher-resources": {
    slug: "spanish-teacher-resources",
    lessonIds: [105, 40, 103, 201, 204, 108],
    copy: {
      en: {
        kicker: "INTERACTIVE SPANISH TEACHER RESOURCES",
        title: "Ready-to-teach Spanish resources that live on screen.",
        lead: "Choose by level and goal, open a real interactive lesson, and teach without building another slide deck from scratch.",
        proof: "For Spanish teachers · Real free lessons · No card required",
        productTitle: "See the resource before you plan the lesson.",
        productCopy: "Explore real grammar, conversation, listening, pronunciation and vocabulary experiences from the SPANISHCUE library.",
        benefitTitle: "One library for the moments that usually consume your prep time.",
        benefits: [["Ready on screen", "Explanations, guided practice and speaking prompts stay together."], ["Easy to choose", "Filter by level, category and teaching objective."], ["Built for interaction", "Learners respond, decide, listen and speak during the lesson."]],
        methodTitle: "Choose. Open. Teach.",
        methodSteps: [["Choose", "Find the right level and objective."], ["Open", "Preview a real lesson in your browser."], ["Teach", "Share your screen and start the conversation."]],
        finalTitle: "Your next Spanish lesson is already waiting.",
        finalCopy: "Open a free lesson now, then create a free teacher account to save your place in the library.",
      },
      es: {
        kicker: "RECURSOS INTERACTIVOS PARA PROFESORES DE ESPAÑOL",
        title: "Recursos de español listos para enseñar desde la pantalla.",
        lead: "Elige por nivel y objetivo, abre una clase interactiva real y enseña sin volver a crear diapositivas desde cero.",
        proof: "Para profes de español · Clases reales gratis · Sin tarjeta",
        productTitle: "Mira el recurso antes de planificar la clase.",
        productCopy: "Explora experiencias reales de gramática, conversación, escucha, fonética y vocabulario de la biblioteca SPANISHCUE.",
        benefitTitle: "Una biblioteca para todo lo que suele consumir tu tiempo de preparación.",
        benefits: [["Lista en pantalla", "Explicación, práctica guiada y conversación viven juntas."], ["Fácil de elegir", "Filtra por nivel, categoría y objetivo docente."], ["Hecha para interactuar", "El alumno responde, decide, escucha y habla durante la clase."]],
        methodTitle: "Elige. Abre. Enseña.",
        methodSteps: [["Elige", "Encuentra el nivel y objetivo adecuados."], ["Abre", "Prueba una clase real en el navegador."], ["Enseña", "Comparte pantalla y empieza a conversar."]],
        finalTitle: "Tu próxima clase de español ya te está esperando.",
        finalCopy: "Abre una clase gratis ahora y después crea tu cuenta docente gratuita para guardar tu lugar en la biblioteca.",
      },
    },
  },
  "spanish-conversation-activities": {
    slug: "spanish-conversation-activities",
    lessonIds: [103, 104, 120, 123, 109, 125],
    copy: {
      en: {
        kicker: "SPANISH CONVERSATION ACTIVITIES",
        title: "Conversation lessons that give learners something worth saying.",
        lead: "Open visual scenarios, decisions and roleplays designed to move from the first answer to sustained Spanish conversation.",
        proof: "A0–C2 · Real scenarios · Guided speaking support",
        productTitle: "From a clear prompt to a real exchange.",
        productCopy: "Use choice games, country journeys, mysteries, negotiations and open questions without inventing follow-ups on the spot.",
        benefitTitle: "Less dead air. More purposeful speaking.",
        benefits: [["Prompts with direction", "Each screen gives the learner a concrete reason to respond."], ["Support by level", "Scaffolds help beginners; changing conditions challenge advanced learners."], ["Reusable formats", "Return to the same world with new choices, roles and outcomes."]],
        methodTitle: "Set the scene, ask, build.",
        methodSteps: [["Set the scene", "Open a visual situation."], ["Ask", "Use the prepared prompt and supports."], ["Build", "Follow consequences into a longer exchange."]],
        finalTitle: "Open a conversation lesson your learner can enter immediately.",
        finalCopy: "Try a real free activity before creating an account or choosing PRO.",
      },
      es: {
        kicker: "ACTIVIDADES DE CONVERSACIÓN EN ESPAÑOL",
        title: "Clases que le dan al alumno algo que realmente quiere decir.",
        lead: "Abre escenarios visuales, decisiones y roleplays pensados para pasar de la primera respuesta a una conversación sostenida.",
        proof: "A0–C2 · Situaciones reales · Apoyo oral guiado",
        productTitle: "De una consigna clara a un intercambio real.",
        productCopy: "Usa elecciones, viajes, misterios, negociaciones y preguntas abiertas sin inventar repreguntas sobre la marcha.",
        benefitTitle: "Menos silencios. Más conversación con propósito.",
        benefits: [["Consignas con dirección", "Cada pantalla le da al alumno una razón concreta para responder."], ["Apoyo por nivel", "Los principiantes reciben andamiaje y los avanzados, cambios que desafían."], ["Formatos reutilizables", "Vuelve al mismo mundo con nuevas elecciones, roles y resultados."]],
        methodTitle: "Sitúa, pregunta, desarrolla.",
        methodSteps: [["Sitúa", "Abre una situación visual."], ["Pregunta", "Usa la consigna y los apoyos preparados."], ["Desarrolla", "Sigue las consecuencias hacia un intercambio más largo."]],
        finalTitle: "Abre una clase de conversación en la que tu alumno pueda entrar ya.",
        finalCopy: "Prueba una actividad real gratis antes de crear una cuenta o elegir PRO.",
      },
    },
  },
  "spanish-grammar-lessons": {
    slug: "spanish-grammar-lessons",
    lessonIds: [40, 41, 42, 48, 107, 23],
    copy: {
      en: {
        kicker: "VISUAL SPANISH GRAMMAR LESSONS",
        title: "Spanish grammar learners can see, practise and use.",
        lead: "Teach the pattern step by step, check understanding, and move into speaking from one coherent visual lesson.",
        proof: "Structured progression · A1–C2 · Speaking built in",
        productTitle: "Grammar worlds, not disconnected worksheets.",
        productCopy: "Every lesson places form, meaning and use in a clear sequence, with real examples and guided production.",
        benefitTitle: "Clarity without turning the lesson into a lecture.",
        benefits: [["One idea at a time", "Progressive screens reduce overload and expose the logic."], ["Practice with feedback", "Guided decisions let learners test the pattern before speaking."], ["Grammar in conversation", "The final task moves the structure into personal meaning."]],
        methodTitle: "Understand, notice, use.",
        methodSteps: [["Understand", "Start with the communicative meaning."], ["Notice", "See the form and the contrast clearly."], ["Use", "Apply it in guided and open speaking."]],
        finalTitle: "Teach the next grammar point without starting from a blank page.",
        finalCopy: "Open a complete free grammar lesson and see how the progression works.",
      },
      es: {
        kicker: "CLASES VISUALES DE GRAMÁTICA ESPAÑOLA",
        title: "Gramática que el alumno puede ver, practicar y usar.",
        lead: "Enseña el patrón paso a paso, comprueba la comprensión y pasa a hablar desde una sola clase visual coherente.",
        proof: "Progresión estructurada · A1–C2 · Producción oral incluida",
        productTitle: "Mundos gramaticales, no fichas desconectadas.",
        productCopy: "Cada clase ordena forma, significado y uso con ejemplos reales, práctica guiada y producción.",
        benefitTitle: "Claridad sin convertir la clase en una conferencia.",
        benefits: [["Una idea por vez", "Las pantallas progresivas reducen la carga y muestran la lógica."], ["Práctica con respuesta", "Las decisiones guiadas permiten probar el patrón antes de hablar."], ["Gramática en conversación", "La tarea final lleva la estructura a un significado personal."]],
        methodTitle: "Comprende, observa, usa.",
        methodSteps: [["Comprende", "Empieza por el significado comunicativo."], ["Observa", "Ve con claridad la forma y el contraste."], ["Usa", "Aplícalo al hablar de manera guiada y libre."]],
        finalTitle: "Enseña el próximo punto gramatical sin empezar con una página en blanco.",
        finalCopy: "Abre una clase completa de gramática gratis y mira cómo funciona la progresión.",
      },
    },
  },
  "ele-recursos-profesores": {
    slug: "ele-recursos-profesores",
    lessonIds: [40, 103, 105, 201, 204, 108],
    copy: {
      en: {
        kicker: "INTERACTIVE ELE RESOURCES",
        title: "ELE resources ready for your next Spanish lesson.",
        lead: "A visual library for teachers who need coherent, interactive material instead of another folder of isolated downloads.",
        proof: "Grammar · Conversation · Listening · Pronunciation · Vocabulary",
        productTitle: "Five teaching paths in one library.",
        productCopy: "Choose the category and level you need, then open a lesson designed for browser-based teaching and screen sharing.",
        benefitTitle: "Pedagogical structure with less preparation.",
        benefits: [["Clear learning goal", "Every card tells you what the learner will practise."], ["Real classroom sequence", "Activation, explanation, practice and production connect."], ["Immediate access", "Nothing to print or rebuild before class."]],
        methodTitle: "Find, check, teach.",
        methodSteps: [["Find", "Filter by level or content path."], ["Check", "See the goal, duration and preview."], ["Teach", "Open the experience and share your screen."]],
        finalTitle: "Replace scattered materials with one usable ELE library.",
        finalCopy: "Start with real free lessons from every category.",
      },
      es: {
        kicker: "RECURSOS ELE INTERACTIVOS",
        title: "Recursos ELE listos para tu próxima clase de español.",
        lead: "Una biblioteca visual para profes que necesitan material coherente e interactivo, no otra carpeta de descargas aisladas.",
        proof: "Gramática · Conversación · Escucha · Fonética · Vocabulario",
        productTitle: "Cinco rutas docentes dentro de una biblioteca.",
        productCopy: "Elige la categoría y el nivel, y abre una clase diseñada para enseñar desde el navegador y compartir pantalla.",
        benefitTitle: "Estructura pedagógica con menos preparación.",
        benefits: [["Objetivo claro", "Cada tarjeta indica qué va a practicar el alumno."], ["Secuencia de clase real", "Activación, explicación, práctica y producción se conectan."], ["Acceso inmediato", "No hay que imprimir ni reconstruir nada antes de enseñar."]],
        methodTitle: "Encuentra, comprueba, enseña.",
        methodSteps: [["Encuentra", "Filtra por nivel o ruta de contenido."], ["Comprueba", "Mira objetivo, duración y preview."], ["Enseña", "Abre la experiencia y comparte pantalla."]],
        finalTitle: "Reemplaza materiales dispersos por una biblioteca ELE utilizable.",
        finalCopy: "Empieza con clases reales gratis de cada categoría.",
      },
    },
  },
  "online-spanish-teaching-resources": {
    slug: "online-spanish-teaching-resources",
    lessonIds: [105, 103, 40, 108, 201, 123],
    copy: {
      en: {
        kicker: "ONLINE SPANISH TEACHING RESOURCES",
        title: "Spanish lessons made for the browser, the screen and the conversation.",
        lead: "Teach on Zoom, Meet or any screen-sharing platform with interactive lessons that keep your materials and speaking sequence together.",
        proof: "Browser-based · Screen-share ready · No downloads",
        productTitle: "A lesson your learner can follow on one shared screen.",
        productCopy: "Visual hierarchy, large prompts and progressive activities make each class easy to guide online.",
        benefitTitle: "Designed around the reality of online teaching.",
        benefits: [["No window juggling", "Keep the lesson sequence in one browser experience."], ["Visible prompts", "Learners can read, choose and respond without tiny documents."], ["A clear next move", "Each stage tells the teacher where the conversation goes next."]],
        methodTitle: "Open, share, interact.",
        methodSteps: [["Open", "Choose a lesson in your browser."], ["Share", "Put the experience on screen."], ["Interact", "Guide decisions, practice and conversation."]],
        finalTitle: "Your online classroom deserves more than a stack of tabs.",
        finalCopy: "Open a free lesson and teach directly from SPANISHCUE.",
      },
      es: {
        kicker: "RECURSOS PARA ENSEÑAR ESPAÑOL ONLINE",
        title: "Clases hechas para el navegador, la pantalla y la conversación.",
        lead: "Enseña por Zoom, Meet o cualquier plataforma con pantalla compartida usando clases interactivas que mantienen materiales y secuencia oral juntos.",
        proof: "En el navegador · Lista para compartir · Sin descargas",
        productTitle: "Una clase que el alumno puede seguir en una sola pantalla.",
        productCopy: "Jerarquía visual, consignas grandes y actividades progresivas hacen que cada clase sea fácil de guiar online.",
        benefitTitle: "Diseñada para la realidad de la enseñanza online.",
        benefits: [["Sin saltar entre ventanas", "Mantén la secuencia dentro de una experiencia web."], ["Consignas visibles", "El alumno puede leer, elegir y responder sin documentos diminutos."], ["Un siguiente paso claro", "Cada etapa muestra al profe hacia dónde sigue la conversación."]],
        methodTitle: "Abre, comparte, interactúa.",
        methodSteps: [["Abre", "Elige una clase en el navegador."], ["Comparte", "Pon la experiencia en pantalla."], ["Interactúa", "Guía decisiones, práctica y conversación."]],
        finalTitle: "Tu aula online merece más que una pila de pestañas.",
        finalCopy: "Abre una clase gratis y enseña directamente desde SPANISHCUE.",
      },
    },
  },
} as const satisfies Record<string, LandingConfig>;

export type LandingSlug = keyof typeof landingConfigs;
