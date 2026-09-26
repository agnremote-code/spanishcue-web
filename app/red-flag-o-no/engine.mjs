import { a1Config } from "./a1.mjs";

const sharedFinale = [
  "Top 3 red flags",
  "Top 3 green flags",
  "Una red flag que la gente exagera",
  "Un comportamiento que ya no tolerarías",
];

const levels = {
  A1: a1Config,
  A2: {
    level: "A2",
    accent: "#ff4d5d",
    accentText: "#9f1f34",
    warmup: "¿Qué significa para vos una red flag? ¿Y una green flag?",
    situations: [
      "Tu pareja tarda mucho en responder los mensajes casi todos los días.",
      "Una persona habla todo el tiempo de su ex en la primera cita.",
      "Tu pareja nunca quiere sacarse fotos con vos.",
      "Una persona siempre mira el teléfono cuando estás hablando.",
      "Tu pareja cancela el plan una hora antes, otra vez.",
      "Una persona es muy amable con vos, pero maleducada con el camarero.",
      "Tu pareja quiere saber dónde estás todo el tiempo.",
      "Una persona nunca hace preguntas sobre tu vida.",
      "Tu pareja olvida siempre tu cumpleaños o fechas importantes.",
      "Una persona quiere pagar todo y no te deja elegir.",
      "Tu pareja se ríe de tus gustos musicales o de tu ropa.",
      "Una persona llega tarde siempre y no pide perdón.",
      "Tu pareja habla con muchas personas por apps, pero dice que “no pasa nada”.",
      "Una persona solo quiere verte de noche, nunca de día.",
      "Tu pareja dice “te quiero” muy rápido, después de muy poco tiempo.",
      "Una persona nunca quiere conocer a tus amigos.",
      "Tu pareja te compara con otras personas.",
      "Una persona no escucha cuando decís que algo no te gusta.",
    ],
    followUps: [
      "¿Por qué?",
      "¿Es normal o extraño?",
      "¿Siempre es malo?",
      "¿Qué harías vos?",
      "¿Continuarías la relación?",
      "¿Hablarías con la persona?",
      "¿Puede cambiar?",
      "¿Te pasó algo parecido?",
    ],
  },
  B1: {
    level: "B1",
    accent: "#e94862",
    accentText: "#8f283d",
    warmup: "¿Una red flag se ve desde el principio o aparece con el tiempo?",
    situations: [
      "Tu pareja es muy cariñosa en persona, pero en público actúa como si no te conociera.",
      "Una persona dice que quiere algo serio, pero desaparece varios días sin explicar nada.",
      "Tu pareja revisa “por broma” a quién seguís en Instagram.",
      "Una persona te dice que todos sus ex estaban locos o eran el problema.",
      "Tu pareja siempre decide dónde van, qué hacen y a qué hora.",
      "Una persona dice que odia el drama, pero siempre está en medio de un conflicto.",
      "Tu pareja te hace sentir culpable cuando querés tiempo para vos.",
      "Una persona coquetea con otros delante tuyo y después dice que sos inseguro.",
      "Tu pareja no cumple lo que promete, pero siempre tiene una excusa muy buena.",
      "Una persona es muy intensa al principio, pero después cambia totalmente.",
      "Tu pareja te apoya en privado, pero te critica delante de otros.",
      "Una persona nunca habla de dinero, pero espera que vos pagues casi todo.",
      "Tu pareja quiere mudarse juntos muy rápido.",
      "Una persona te escucha mucho, pero después usa esa información para atacarte en una pelea.",
      "Tu pareja hace bromas sobre tus inseguridades y dice que “tenés que aprender a reírte”.",
      "Una persona dice que no le gustan las etiquetas, pero actúa como si fueran pareja.",
      "Tu pareja no respeta tus límites digitales, por ejemplo entrar a tu mail o mirar conversaciones.",
      "Una persona es encantadora con todo el mundo, pero fría cuando están a solas.",
    ],
    followUps: [
      "¿Por qué lo ves así?",
      "¿Es una red flag desde el principio?",
      "¿Puede cambiar la persona?",
      "¿Qué le dirías?",
      "¿Depende del contexto?",
      "¿Darías una segunda oportunidad?",
      "¿Qué tendría que pasar para cambiar tu opinión?",
      "¿Qué es peor en esta situación?",
    ],
  },
  B2: {
    level: "B2",
    accent: "#c93653",
    accentText: "#7d2a3c",
    warmup: "¿Qué diferencia hay entre una señal de alarma, una incompatibilidad y un límite personal?",
    situations: [
      "Tu pareja no te presenta a nadie importante de su vida después de varios meses, pero dice que es una persona muy privada.",
      "Una persona te cuenta una verdad incómoda muy pronto, y te parece demasiado honesta para ser casual.",
      "Tu pareja quiere total transparencia digital entre ustedes, incluyendo contraseñas, y lo llama “confianza”.",
      "Una persona evita los conflictos y nunca discute, pero después toma decisiones importantes sin hablarlas.",
      "Tu pareja es muy generosa materialmente, pero emocionalmente bastante inaccesible.",
      "Una persona defiende siempre su independencia y necesita mucho espacio, incluso dentro de una relación seria.",
      "Tu pareja dice que valora la comunicación, pero solo quiere hablar de temas difíciles cuando él o ella se siente listo.",
      "Una persona pone límites muy firmes desde el principio, pero el tono te parece frío o controlador.",
      "Tu pareja es extremadamente carismática y querida por todos, pero vos sentís que con vos compite más de lo que comparte.",
      "Una persona cambia su versión de pequeñas historias cotidianas y después dice que no importa porque son detalles mínimos.",
      "Tu pareja respeta tus decisiones, pero casi nunca expresa necesidad, celos o vulnerabilidad.",
      "Una persona te trata increíble cuando están solos, pero online mantiene una actitud ambigua para parecer disponible.",
      "Tu pareja es emocionalmente intensa, muy atenta y muy rápida para crear intimidad, pero después necesita desaparecer para “regularse”.",
      "Una persona habla mucho de salud mental para explicar todo lo que hace, pero a veces parece usarlo para evitar responsabilidad.",
      "Tu pareja nunca te prohíbe nada, pero reacciona con distancia o frialdad cuando hacés algo que no le gusta.",
      "Una persona te dice desde el inicio que no está lista para una relación, pero actúa con un nivel de intimidad muy alto.",
      "Tu pareja siempre quiere “entender los dos lados”, incluso cuando alguien te faltó el respeto claramente.",
      "Una persona parece madura, reflexiva y muy trabajada emocionalmente, pero todas sus relaciones terminan con el mismo patrón.",
    ],
    followUps: [
      "¿Es siempre una red flag o depende del contexto?",
      "¿Dónde termina la privacidad y empieza el secreto?",
      "¿Cuál es la diferencia entre una señal de alarma y un rasgo de personalidad?",
      "¿Qué información adicional necesitarías?",
      "¿Puede algo ser genuino y problemático al mismo tiempo?",
      "¿Qué pesa más: intención o impacto?",
      "¿Cambiarías tu decisión después de seis meses?",
      "¿Qué límite pondrías?",
    ],
  },
};

export function getLevelConfig(level) {
  const config = levels[level];
  if (!config) throw new Error(`Nivel no disponible: ${level}`);
  return { ...config, finale: level === "A1" ? a1Config.finale : sharedFinale };
}

export function getRoundForIndex(index) {
  if (index < 6) return "quick";
  if (index < 12) return "ambiguous";
  return "deep";
}

export function moveIndex(index, total, amount) {
  if (total <= 0) return 0;
  return (index + amount + total) % total;
}

export function pickRandomIndex(index, total, random = Math.random) {
  if (total <= 1) return 0;
  const candidate = Math.floor(random() * total) % total;
  return candidate === index ? (candidate + 1) % total : candidate;
}

export function keyAction(key) {
  const normalized = key.toLowerCase();
  if (normalized === "g") return "green";
  if (normalized === "r") return "red";
  if (key === " ") return "reveal";
  if (key === "ArrowLeft") return "previous";
  if (key === "ArrowRight") return "next";
  if (normalized === "s") return "random";
  return null;
}

export function shouldHandleShortcut(target) {
  if (!target || typeof target !== "object") return true;
  if (target.isContentEditable) return false;
  if (typeof target.closest === "function" && target.closest("button,a,input,textarea,select,[contenteditable='true']")) return false;
  return !["BUTTON", "A", "INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
}
