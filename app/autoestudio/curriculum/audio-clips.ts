import { audioKey } from "./audio-key";
import type { Exercise, Module, Voice } from "./types";

/** Text exactly as the engine speaks it (content markup removed). */
export const spokenText = (text: string) => text.replace(/[*_`]/g, "");

export type ClipRequest = { key: string; text: string; voice: Voice | undefined; moduleId: string };

function exerciseClips(exercise: Exercise): { text: string; voice?: Voice }[] {
  if (exercise.type === "choice" || exercise.type === "context" || exercise.type === "listen") {
    return exercise.items.filter((item) => item.audio).map((item) => ({ text: item.audio as string, voice: item.voice }));
  }
  if (exercise.type === "classify") {
    return exercise.items.filter((item) => item.audio).map((item) => ({ text: item.audio as string, voice: item.voice }));
  }
  return [];
}

/** Every clip a module can play, so a generator can record them and pages can ship only their own. */
export function moduleClips(module: Module): ClipRequest[] {
  const voices = Object.fromEntries(module.listening.speakers.map((speaker) => [speaker.id, speaker.voice]));
  const raw: { text: string; voice?: Voice }[] = [
    ...module.theory.parts.flatMap((part) => (part.examples ?? []).map((example) => ({ text: spokenText(example.es) }))),
    ...module.vocabulary.groups.flatMap((group) => group.items.map((item) => ({ text: spokenText(item.es) }))),
    ...(module.pronunciation.examples ?? []).map((example) => ({ text: spokenText(example.es) })),
    ...module.pronunciation.produce.map((line) => ({ text: spokenText(line.text), voice: line.voice })),
    ...module.listening.script.map((line) => ({ text: line.text, voice: voices[line.speaker] })),
    ...module.speaking.tasks.filter((task) => task.model).map((task) => ({ text: spokenText(task.model as string) })),
    ...[
      ...module.grammar.exercises,
      ...module.vocabulary.exercises,
      module.pronunciation.perceive,
      ...module.listening.stages.map((stage) => stage.exercise),
      ...module.reading.tasks,
      ...module.practice.exercises,
    ].flatMap(exerciseClips),
    ...module.quiz.items.flatMap((item) => ("audio" in item && item.audio ? [{ text: item.audio, voice: item.voice }] : [])),
  ];
  const seen = new Set<string>();
  const clips: ClipRequest[] = [];
  for (const clip of raw) {
    const key = audioKey(clip.text, clip.voice);
    if (seen.has(key)) continue;
    seen.add(key);
    clips.push({ key, text: clip.text, voice: clip.voice, moduleId: module.id });
  }
  return clips;
}
