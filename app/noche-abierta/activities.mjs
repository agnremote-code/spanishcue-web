// Every interaction has exactly two pedagogical moments. Location types remain
// stable for the world, but cannot append fiction, role play or extra questions.
export const ACTIVITY_TYPES = Object.fromEntries(
  ['decisiones', 'comparar', 'conversacion', 'condiciones', 'museo', 'social', 'mensajes', 'observar', 'describir', 'acuerdo']
    .map(type => [type, { beats: activity => [
      { kind: "choose", label: "1. Elige tu respuesta", context: activity.situation, prompt: activity.prompt, options: activity.options },
      { kind: "talk", label: "2. Ahora habla de ti", prompt: activity.close },
    ] }]),
);
export const INSPECT_BEFORE_GUESSING = 2;
export function emptyProgress() {
  return { beat: 0, choice: null, seen: [], done: false };
}
export function beatsOf(type, activity, progress = emptyProgress()) {
  const kind = ACTIVITY_TYPES[type];
  if (!kind) throw new Error(`Unknown activity type: ${type}`);
  return kind.beats(activity, progress);
}

// Whether the learner can move past the current beat.
export function canAdvance(beat, progress) {
  if (!beat) return false;
  if (beat.kind === "choose") return progress.choice !== null;
  if (beat.kind === "inspect") return progress.seen.length >= Math.min(INSPECT_BEFORE_GUESSING, beat.media.items.length);
  return true;
}

// An activity counts once the learner got past its first beat: they made a
// choice, answered the first question or acted out the first task.
export function advance(type, activity, progress) {
  const beats = beatsOf(type, activity, progress);
  if (!canAdvance(beats[progress.beat], progress)) return progress;
  const beat = Math.min(beats.length - 1, progress.beat + 1);
  return { ...progress, beat, done: progress.done || beat >= 1 };
}

// Choosing moves directly to the independent personal speaking question.
export function choose(type, activity, progress, optionId) {
  const beats = beatsOf(type, activity, progress);
  const beat = beats[progress.beat];
  if (beat?.kind !== "choose" || !beat.options.some((item) => item.id === optionId)) return progress;
  return { ...progress, choice: optionId, beat: progress.beat + 1, done: true };
}

export function inspect(progress, itemId) {
  return progress.seen.includes(itemId) ? progress : { ...progress, seen: [...progress.seen, itemId] };
}

export function isLastBeat(type, activity, progress) {
  return progress.beat >= beatsOf(type, activity, progress).length - 1;
}
