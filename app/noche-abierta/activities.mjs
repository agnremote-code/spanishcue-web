import { consequenceFor } from "./consequences.mjs";

// Modo Play activity types. Each type turns one activity's content into an
// ordered list of beats; a card shows one beat at a time. Beats are plain
// data, so every world (this night, a future market, a future airport) can
// reuse the same types with its own content.
//
// A beat:
//   kind     "choose" (pick an option), "result" (what your choice caused),
//            "talk" (an open question), "change" (something new happens),
//            "inspect" (reveal details first) or "task" (do something in role)
//   label    a short header ("Situación", "Cambia algo", "Te responde"…)
//   context  the situation, in a sentence or two
//   media    optional: a message thread, a quote, people, a plaque, a list
//            of conditions, the banned words or the options' facts
//   prompt   the question or task the learner answers aloud
//   options  only on "choose": [{ id, label, facts? }]
//   chosen   the option the learner picked, shown above a result
//
// Progress for one activity: { beat, choice, seen, done }.

const quote = (who, text) => ({ type: "quote", who, text });

export const ACTIVITY_TYPES = {
  // Situation → decision → the consequence of that decision → conversation.
  decisiones: {
    beats(activity, progress) {
      const option = activity.options.find((item) => item.id === progress.choice) ?? null;
      return [
        { kind: "choose", label: "Situación", context: activity.situation, prompt: activity.prompt, options: activity.options.map(({ id, label }) => ({ id, label })) },
        { kind: "result", label: "Consecuencia", chosen: option?.label ?? null, context: option?.result ?? "", prompt: option?.ask ?? "" },
        { kind: "talk", label: "Para conversar", prompt: activity.close },
      ];
    },
  },
  // The same shape, with facts to compare before choosing.
  comparar: {
    beats(activity, progress) {
      const option = activity.options.find((item) => item.id === progress.choice) ?? null;
      return [
        { kind: "choose", label: "Situación", context: activity.situation, prompt: activity.prompt, options: activity.options.map(({ id, label, facts }) => ({ id, label, facts })) },
        { kind: "result", label: "Qué pasó", chosen: option?.label ?? null, context: option?.result ?? "", prompt: option?.ask ?? "" },
        { kind: "talk", label: "Para conversar", prompt: activity.close },
      ];
    },
  },
  // Only talk: a person, what they say, a question and follow-ups.
  conversacion: {
    beats(activity) {
      return [
        { kind: "talk", label: activity.who, media: quote(activity.title, activity.says), prompt: activity.ask },
        ...activity.followUps.map((prompt, i) => ({ kind: "talk", label: i === 0 ? "Seguí la charla" : "Una más", prompt })),
      ];
    },
  },
  // One situation, conditions that pile up, a closing story.
  condiciones: {
    beats(activity) {
      const all = activity.conditions.map((item) => item.text);
      return [
        { kind: "talk", label: "Situación", context: activity.situation, prompt: activity.ask },
        ...activity.conditions.map((item, i) => ({
          kind: "change", label: "Cambia algo", media: { type: "conditions", before: all.slice(0, i), now: item.text }, prompt: item.ask,
        })),
        { kind: "talk", label: "Para cerrar", media: { type: "conditions", before: all, now: null }, prompt: activity.close },
      ];
    },
  },
  // An object and its plaque, then a detail that changes the story.
  museo: {
    beats(activity) {
      return [
        { kind: "talk", label: "Pieza", media: { type: "plaque", object: activity.object, year: activity.year, text: activity.plaque }, prompt: activity.ask },
        { kind: "change", label: "Detalle nuevo", context: activity.detail, prompt: activity.ask2 },
      ];
    },
  },
  // A small social problem: act it out, the other person pushes back, try again.
  social: {
    beats(activity) {
      return [
        { kind: "task", label: activity.who, context: activity.situation, prompt: activity.task },
        { kind: "change", label: "Te responde", media: quote(activity.who, activity.pushback), prompt: activity.task2 },
      ];
    },
  },
  // Messages to interpret; a new one changes the reading; answer in role.
  mensajes: {
    beats(activity) {
      return [
        { kind: "talk", label: "Situación", context: activity.situation, media: { type: "thread", messages: activity.thread, fresh: null }, prompt: activity.ask },
        { kind: "change", label: "Nuevo mensaje", media: { type: "thread", messages: activity.thread, fresh: activity.next }, prompt: activity.ask2 },
        { kind: "task", label: "Respondé", prompt: activity.reply },
      ];
    },
  },
  // Look around first, guess, then learn what was really going on.
  observar: {
    beats(activity, progress) {
      return [
        { kind: "inspect", label: "Mirá alrededor", context: activity.situation, media: { type: "items", items: activity.items.map((item) => ({ ...item, seen: progress.seen.includes(item.id) })) }, prompt: activity.ask },
        { kind: "change", label: "Ahora sabés", context: activity.reveal, prompt: activity.ask2 },
      ];
    },
  },
  // Explain a thing without its name; the clerk gets it wrong; try again.
  describir: {
    beats(activity) {
      return [
        { kind: "task", label: "Situación", context: activity.situation, media: { type: "taboo", need: activity.need, banned: activity.banned }, prompt: activity.task },
        { kind: "change", label: "El empleado vuelve", context: activity.wrong, prompt: activity.task2 },
        { kind: "talk", label: "Para conversar", prompt: activity.close },
      ];
    },
  },
  // Everyone wants something else; find a plan; one condition changes it.
  acuerdo: {
    beats(activity) {
      return [
        { kind: "talk", label: "Situación", context: activity.situation, media: { type: "people", people: activity.people }, prompt: activity.ask },
        { kind: "change", label: "Cambia algo", context: activity.change, prompt: activity.ask2 },
      ];
    },
  },
};

// Inspect beats ask the learner to look at a couple of things before going on.
export const INSPECT_BEFORE_GUESSING = 2;

export function emptyProgress() {
  return { beat: 0, choice: null, seen: [], done: false };
}

export function beatsOf(type, activity, progress = emptyProgress()) {
  const kind = ACTIVITY_TYPES[type];
  if (!kind) throw new Error(`Unknown activity type: ${type}`);
  const beats = kind.beats(activity, progress);
  if (type === "decisiones" || type === "comparar") {
    beats[beats.length - 1] = { ...beats.at(-1), label: "Reflexión final" };
    return beats;
  }
  const story = consequenceFor(activity.id, activity.lessonLevel ?? "B1");
  const chosen = story.options.find(o => o.id === progress.choice);
  return [...beats,
    { kind: "choose", label: "Tu decisión", prompt: story.prompt, options: story.options.map(({ id, label }) => ({ id, label })) },
    { kind: "result", label: "Consecuencia", chosen: chosen?.label ?? null, context: chosen?.result ?? "", prompt: chosen?.ask ?? "" },
    { kind: "talk", label: "Reflexión final", prompt: story.reflection },
  ];
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

// Choosing only works on a choose beat and moves straight to its consequence.
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
