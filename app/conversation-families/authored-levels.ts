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
  },
  'la-maquina-que-elimina-cosas': {
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
