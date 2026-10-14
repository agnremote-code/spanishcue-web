import type { ClassroomLesson } from "./types";

/** Stages a Homework learner can experience in full before the lock. */
export const PREVIEW_STAGES = ["opening", "reading", "grammar"] as const;

/**
 * The browser receives only the demonstration: the protected stages are
 * removed here, on the server, not hidden with CSS.
 */
export function previewOf(lesson: ClassroomLesson): ClassroomLesson {
  return {
    ...lesson,
    discovery: lesson.discovery.slice(0, 1),
    grammar: lesson.grammar.slice(0, 1),
    practice: [],
    listening: { title: lesson.listening.title, transcript: "", voice: lesson.listening.voice, questions: [] },
    speaking: [],
    writing: { prompt: "", words: [0, 0], model: "", checklist: [] },
    closing: { prompt: "", model: "" },
    audioSrc: "",
    paradigm: undefined,
  };
}
