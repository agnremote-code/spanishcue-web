export const TRAINING_STAGES = [
  { id: "portada", title: "Entrenador personal", minutes: 1 },
  { id: "calentamiento", title: "Preparame para entrenar", minutes: 5, target: 8 },
  { id: "objetivo", title: "Elegí mi objetivo", minutes: 5, target: 8 },
  { id: "entrenamiento", title: "Entrenamiento en vivo", minutes: 8 },
  { id: "corregime", title: "Corregime", minutes: 5 },
  { id: "cliente-dificil", title: "Cliente difícil", minutes: 5 },
  { id: "semana", title: "Creá mi semana", minutes: 5 },
  { id: "emergencias", title: "Emergencias del gimnasio", minutes: 4, target: 5 },
  { id: "final-boss", title: "Modo entrenador personal", minutes: 6, target: 30 },
  { id: "resultado", title: "Entrenamiento completado", minutes: 1 },
];

export const GOALS = [
  { id: "musculo", title: "Ganar músculo", icon: "fuerza" },
  { id: "peso", title: "Bajar de peso", icon: "ritmo" },
  { id: "energia", title: "Tener más energía", icon: "energia" },
  { id: "resistencia", title: "Mejorar la resistencia", icon: "resistencia" },
];

export const EXERCISES = [
  { id: "sentadillas", title: "Sentadillas", image: "/entrenador-personal/sentadillas.webp" },
  { id: "flexiones", title: "Flexiones", image: "/entrenador-personal/flexiones.webp" },
  { id: "pesas", title: "Pesas", image: "/entrenador-personal/pesas.webp" },
  { id: "correr", title: "Correr", image: "/entrenador-personal/correr.webp" },
  { id: "bicicleta", title: "Bicicleta", image: "/entrenador-personal/bicicleta.webp" },
  { id: "estiramientos", title: "Estiramientos", image: "/entrenador-personal/estiramientos.webp" },
];

export const CORRECTION_ERRORS = [
  "Voy a levantar muchísimo peso.",
  "No quiero calentar.",
  "Voy a entrenar tres horas seguidas.",
  "No voy a tomar agua.",
  "Quiero hacer 100 repeticiones.",
  "Voy a entrenar aunque me duela.",
];

export const DIFFICULT_CLIENT_LINES = [
  "Odio correr.",
  "Quiero abdominales en una semana.",
  "No quiero comer verduras.",
  "Quiero entrenar todos los días.",
  "No quiero descansar.",
  "Solo quiero entrenar brazos.",
  "No quiero hacer piernas.",
  "No dormí, pero quiero entrenar fuerte.",
];

export const EMERGENCIES = [
  "Me duele la espalda haciendo sentadillas.",
  "Estoy mareado después de correr.",
  "Quiero levantar el doble de peso.",
  "No dormí nada, pero quiero entrenar.",
  "Hace muchísimo calor y no traje agua.",
  "Me duele la rodilla.",
];

export const SURPRISES = [
  "Tengo sed.",
  "Estoy cansado.",
  "Quiero parar.",
  "Quiero hacer más peso.",
  "Me duele un poco.",
  "Tengo hambre.",
  "Mañana quiero volver.",
];

export function adjustCount(current, delta) {
  return Math.max(0, current + delta);
}

export function counterKeyForStage(stageId, emergencyIndex = 0) {
  return stageId === "emergencias" ? `emergencias-${emergencyIndex}` : stageId;
}

export function updateCounts(counts, key, delta) {
  const previous = counts[key] ?? 0;
  const next = adjustCount(previous, delta);
  if (next === previous) return counts;
  return { ...counts, [key]: next };
}

export function countImperatives(counts) {
  return Object.values(counts).reduce((total, count) => total + count, 0);
}

export function moveCard(current, total, delta) {
  if (total <= 1) return 0;
  return (current + delta + total) % total;
}

export function trainerResult(total) {
  if (total >= 30) return "MODO ENTRENADOR ACTIVADO";
  if (total >= 21) return "PRO";
  if (total >= 11) return "BUEN ENTRENADOR";
  return "CALENTANDO";
}
