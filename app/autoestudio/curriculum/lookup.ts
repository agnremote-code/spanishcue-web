import type { Exercise, Module, QuizItem, SectionKey } from "./types";

/** The exercises a section exposes to the learner, by section key. */
export function sectionExercises(module: Module, section: SectionKey): Exercise[] {
  switch (section) {
    case "grammar": return module.grammar.exercises;
    case "practice": return module.practice.exercises;
    case "vocabulary": return module.vocabulary.exercises;
    case "pronunciation": return [module.pronunciation.perceive];
    case "listening": return module.listening.stages.map((stage) => stage.exercise);
    case "reading": return module.reading.tasks;
    default: return [];
  }
}

export type ResolvedItem = { type: string; question: string; correct: string[]; why?: string };

function itemOf(exercise: Exercise | QuizItem, index: number): ResolvedItem | null {
  const e = exercise as Exercise;
  switch (e.type) {
    case "choice": case "context": case "listen": { const item = e.items[index]; return item ? { type: e.type, question: item.q, correct: [item.options[item.answer]], why: item.why } : null; }
    case "gap": { const item = e.items[index]; return item ? { type: "gap", question: item.q, correct: item.answers.map((list) => list[0]), why: item.why } : null; }
    case "order": { const item = e.items[index]; return item ? { type: "order", question: item.words.join(" / "), correct: [item.words.join(" ")], why: item.why } : null; }
    case "match": return index === 0 ? { type: "match", question: e.prompt, correct: e.pairs.map((p) => `${p.left} → ${p.right}`), why: e.why } : null;
    case "classify": { const item = e.items[index]; return item ? { type: "classify", question: item.text, correct: [e.categories[item.cat]], why: item.why } : null; }
    case "transform": { const item = e.items[index]; return item ? { type: "transform", question: item.source, correct: item.answers.slice(0, 1), why: item.why } : null; }
    case "error": { const item = e.items[index]; return item ? { type: "error", question: item.sentence, correct: item.answers.slice(0, 1), why: item.why } : null; }
    default: return null;
  }
}

/**
 * Finds the authoritative question/answer for a reported item so the stored
 * history never depends on text the browser sent. Quiz items use "quiz:<n>".
 */
export function resolveItem(module: Module, section: SectionKey, exerciseId: string, itemIndex: number): ResolvedItem | null {
  if (section === "quiz") {
    const n = Number(exerciseId.replace(/^quiz:/, ""));
    const item = module.quiz.items[n];
    if (!item || item.type === "open") return null;
    const asExercise = { id: exerciseId, type: item.type, prompt: "", items: [item] } as unknown as Exercise;
    return itemOf(asExercise, 0);
  }
  const exercise = sectionExercises(module, section).find((e) => e.id === exerciseId);
  return exercise ? itemOf(exercise, itemIndex) : null;
}
