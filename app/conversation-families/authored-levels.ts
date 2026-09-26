import type { CEFRLevel, LevelPreview } from './types';

/** Public summaries only. Private banks live with their protected engine hosts.
 * Add query variants here without changing historical route IDs or metadata.
 */
export const authoredConversationLevels: Record<string, Partial<Record<CEFRLevel, {
  objectives: string[];
  functions: string[];
  preview: LevelPreview;
}>>> = {
  'red-flag-o-no': {
    A1: {
      objectives: ['Elegir una señal roja o verde ante acciones concretas de una persona', 'Expresar gustos y dar una razón breve con apoyo', 'Preguntar por un plan y responder en un intercambio corto'],
      functions: ['Expresar agrado o desagrado', 'Dar una razón sencilla', 'Preguntar y responder sobre acciones cotidianas'],
      preview: {
        image: '/play-mode/red-flag-o-no/a1.webp',
        hook: '18 situaciones cercanas: elige rojo o verde, explica con una frase y conversa con ayuda.',
        explanation: 'Un juego de señales rojas y verdes sobre mensajes, planes y pequeños gestos. Tres rondas de seis situaciones ofrecen palabras, frases de apoyo y preguntas concretas. El cierre reúne tus elecciones en una conversación breve con otra persona.',
        warmup: 'Una persona te escucha y te pregunta cómo estás. ¿Te gusta? ¿Qué dices?',
      },
    },
    C1: {
      objectives: ['Contrastar interpretaciones de una conducta a partir de información incompleta', 'Matizar o revisar un juicio cuando aparece un contexto nuevo', 'Formular criterios propios para juzgar una situación y reconocer excepciones'],
      functions: ['Distinguir hechos, intenciones e interpretaciones', 'Conceder, precisar y reformular un juicio', 'Explicar qué información falta antes de decidir'],
      preview: {
        image: '/play-mode/red-flag-o-no/c1.webp',
        hook: '18 primeras impresiones: elige una señal, descubre el contexto y decide qué cambia en tu interpretación.',
        explanation: 'Mensajes, compromisos y pequeños gestos admiten más de una lectura. Cada situación oculta un contexto que podrás revelar después de elegir rojo o verde. Revisa o matiza tu juicio, distingue lo que sabes de lo que supones y construye tus propios criterios con espacio para las excepciones.',
        warmup: 'Recuerda una primera impresión que resultó incompleta. ¿Qué dato cambió tu manera de interpretar a esa persona?',
      },
    },
  },
  'lets-talk': {
    B2: {
      objectives: ['Defender y matizar opiniones sobre situaciones cercanas', 'Contrastar perspectivas y responder a un contraargumento', 'Relacionar tres ideas elegidas en una conclusión negociada'],
      functions: ['Justificar y matizar', 'Comparar intereses y consecuencias', 'Mostrar desacuerdo y revisar una postura'],
      preview: {
        image: '/catalog-thumbnails/conversation-b2.webp',
        hook: '15 mundos, 120 preguntas y un tablero de tres ideas para contrastar opiniones y construir una conclusión.',
        explanation: 'Elige un mundo y exactamente tres preguntas. Conversa sobre decisiones cercanas, incorpora otra perspectiva y revisa lo que piensas con apoyos para matizar y discrepar. El cierre conecta las preguntas elegidas en una postura común o un desacuerdo explicado.',
        warmup: 'Recuerda una opinión que cambiaste al escuchar a alguien. ¿Qué detalle te hizo reconsiderarla?',
      },
    },
    C1: {
      objectives: ['Reinterpretar experiencias personales y contrastar lecturas posibles', 'Precisar una opinión mediante matices, excepciones y ejemplos', 'Relacionar tres preguntas en una conversación coherente que incorpore otra perspectiva'],
      functions: ['Matizar generalizaciones y señalar excepciones', 'Reformular y comparar interpretaciones', 'Conectar experiencias con sus implicaciones'],
      preview: {
        image: '/catalog-thumbnails/conversation-c1.webp',
        hook: '15 mundos y 120 preguntas para mirar de nuevo lo cotidiano: elige tres y encuentra las conexiones.',
        explanation: 'El tablero de siempre abre conversaciones sobre recuerdos, contradicciones, cambios de perspectiva y el significado de decisiones cercanas. Elige exactamente tres preguntas entre ocho de cada mundo. Los apoyos opcionales ayudan a precisar lo que quieres decir; el cierre conecta las tres preguntas que elegiste.',
        warmup: 'Piensa en una experiencia que hoy entiendes de otra manera. ¿Qué ves ahora que antes no veías?',
      },
    },
  },
  'la-maquina-que-elimina-cosas': {
    A1: {
      objectives: ['Elegir entre eliminar y conservar cosas de la vida diaria', 'Dar una razón breve con palabras y frases de apoyo', 'Comprender una consecuencia concreta y mantener o cambiar una decisión'],
      functions: ['Expresar gustos y necesidades', 'Dar una razón sencilla', 'Elegir y cambiar de opinión con apoyo'],
      preview: {
        image: '/conversation-worlds/elimination-machine-a1.webp',
        hook: '24 cosas cotidianas: elige qué eliminar, da una razón y descubre qué pasa después.',
        explanation: 'Dentro de la máquina aparecen cosas que conoces y usas. Primero elige si desaparecen o se quedan; después explica con una frase de apoyo. Una consecuencia concreta puede cambiar tu decisión. Para cerrar, compara una cosa que eliminas, otra que conservas y una elección que cambió.',
        warmup: 'Mira las cosas que tienes cerca. ¿Cuál usas todos los días? ¿Para qué la necesitas?',
      },
    },
    B2: {
      objectives: ['Defender una eliminación considerando beneficios y costes', 'Explicar cómo una consecuencia afecta a personas diferentes', 'Revisar una decisión y negociar una alternativa concreta'],
      functions: ['Argumentar con ejemplos', 'Plantear un contraargumento', 'Matizar y reformular una decisión'],
      preview: {
        image: '/conversation-worlds/elimination-machine-b2.webp',
        hook: '30 decisiones: activa la máquina, descubre una consecuencia y defiende o revisa tu postura.',
        explanation: 'La máquina de titanio vuelve con treinta decisiones nuevas sobre comodidad, dependencia, privacidad y vida compartida. Elige qué eliminar, explica tu razón y descubre a quién complica la vida esa decisión. Después responde a otra perspectiva y acuerda una alternativa.',
        warmup: 'Piensa en algo cómodo que usas todos los días. ¿A quién le complicaría la vida que desapareciera?',
      },
    },
  },
  'tu-vida-con-una-regla-absurda': {
    A1: {
      objectives: ['Comprender una regla sencilla de una ciudad imaginaria', 'Describir cómo cambia una actividad cotidiana con esa regla', 'Elegir una forma de vivir con la regla e inventar otra con apoyo'],
      functions: ['Expresar gustos y posibilidades', 'Hablar de rutinas y necesidades', 'Elegir entre opciones concretas'],
      preview: {
        image: '/conversation-worlds/absurd-universe-a1.webp',
        hook: '15 reglas divertidas y 45 preguntas sencillas para imaginar tu día en una ciudad imposible.',
        explanation: 'En esta ciudad las reglas cambian cosas de todos los días. Descubre una regla, di si te gusta y conversa sobre tu mañana, tu casa o tus planes. Cada regla tiene tres preguntas que aparecen paso a paso y frases visibles para responder. Al final, elige la más divertida, la más difícil e inventa una regla nueva.',
        warmup: 'En tu casa, ¿qué puedes hacer por la mañana? ¿Y por la noche?',
      },
    },
    B2: {
      objectives: ['Explicar consecuencias prácticas de una ley imposible', 'Comparar cómo afecta una regla a personas con intereses distintos', 'Negociar excepciones y defender una versión revisada de la regla'],
      functions: ['Formular hipótesis concretas', 'Contrastar perspectivas', 'Proponer condiciones y alcanzar acuerdos'],
      preview: {
        image: '/conversation-worlds/absurd-universe-b2.webp',
        hook: '15 leyes imposibles y 45 preguntas: descubre quién gana, quién pierde y qué excepción cambiaría todo.',
        explanation: 'La ciudad imposible estrena quince reglas absurdas. Cada una abre tres preguntas progresivas: una consecuencia cercana, una perspectiva en conflicto y una revisión defendida. Los apoyos ayudan a negociar excepciones sin perder el humor del universo.',
        warmup: 'Imagina que una regla divertida cambia tu mañana. ¿Para quién podría ser un problema?',
      },
    },
  },
};
