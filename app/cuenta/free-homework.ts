// Copy for the free Homework plan (FREE_HOMEWORK_LEARNERS in app/autoestudio/share/server.ts).
// Spanish only for now: these teachers sign up from Spanish pages.
export const freeHomeworkCopy = {
  badge: "Plan gratis",
  note: "Con el plan gratis puedes dar Homework a 2 alumnos: cada uno estudia las semanas de prueba de su nivel y tú ves su progreso y sus errores.",
  upsell: "Con PRO: alumnos ilimitados, las 20 semanas de cada nivel y los temas sueltos.",
  overviewEmpty: "Crea un alumno y mándale su primer enlace de Homework: es gratis para 2 alumnos.",
  overviewCta: "Dar Homework gratis",
  finished: (name: string) => `${name} terminó las semanas de prueba. Con PRO sigue con las 20 semanas del nivel.`,
} as const;

// First screen of a free account (app/cuenta/modules/FirstStudent.tsx).
export const firstStudentCopy = {
  title: "Crea tu primer alumno",
  intro: "En tres pasos tu alumno recibe sus deberes y tú ves cómo avanza. Gratis para 2 alumnos.",
  step1: "Añade un alumno",
  step1Done: (name: string) => `${name} ya está en tu lista.`,
  aliasLabel: "Nombre o alias",
  aliasPlaceholder: "Por ejemplo, Laura",
  levelLabel: "Nivel",
  addStudent: "Añadir alumno",
  step2: "Asignar deberes",
  step2Locked: "Se desbloquea cuando creas tu primer alumno.",
  step2Intro: "Genera su enlace de Homework y envíaselo por WhatsApp o por email. No necesita crear cuenta.",
  generateLink: "Generar enlace",
  linkLabel: "Enlace de Homework",
  linkCopied: "Enlace copiado. Pégalo en el chat con tu alumno.",
  copyManually: "Copia el enlace y envíaselo a tu alumno.",
  step2Done: "Tu alumno ya tiene su enlace de Homework.",
  step3: "Ver progreso",
  step3Locked: "Se desbloquea cuando le envías los deberes.",
  viewProgress: "Ver su progreso",
  videoLabel: "Video: cómo dar tu primer Homework",
  videoSoon: "Video: tu primer Homework en 1 minuto (próximamente)",
} as const;
