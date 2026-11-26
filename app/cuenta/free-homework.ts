// Copy for the free Homework plan (FREE_HOMEWORK_LEARNERS in app/autoestudio/share/server.ts).
// Spanish only for now: these teachers sign up from Spanish pages.
export const freeHomeworkCopy = {
  badge: "Plan gratis",
  note: "Con el plan gratis puedes dar Homework a 2 alumnos: cada uno estudia las semanas de prueba de su nivel y tú ves su progreso y sus errores.",
  upsell: "Con PRO: alumnos ilimitados, las 20 semanas de cada nivel y los temas sueltos.",
  overviewEmpty: "Crea un alumno y mándale su primer enlace de Homework: es gratis para 2 alumnos.",
  overviewCta: "Dar Homework gratis",
  stepsTitle: "Primeros pasos con tus alumnos",
  stepsIntro: "Así sacan provecho de SpanishCue los profes que lo usan cada semana.",
  stepStudent: "Crea tu primer alumno",
  stepHomework: "Mándale su enlace de Homework (gratis para 2 alumnos)",
  stepClass: "Abre una clase gratis en tu próxima clase y regístrala",
  stepInvite: "Invita a un colega: cuando se suscriba, te queda un mes gratis guardado",
  finished: (name: string) => `${name} terminó las semanas de prueba. Con PRO sigue con las 20 semanas del nivel.`,
} as const;
