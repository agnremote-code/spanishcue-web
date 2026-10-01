import { levelIds } from "./levels";
import type { Exercise, LevelId, Module, Objective, QuizItem } from "./types";

/**
 * Structural and pedagogical validation for the whole course. Returns a list
 * of human-readable problems; an empty list means the data is valid.
 * Used by tests/autoestudio-curriculum.test.mjs and by the audit script.
 */

const levelRank = (level: LevelId) => levelIds.indexOf(level);
const objectiveOrder = (objective: Pick<Objective, "level" | "week">) => levelRank(objective.level) * 100 + objective.week;
export const moduleIdFor = (level: LevelId, week: number) => `${level}-${String(week).padStart(2, "0")}`;

const GAP = /_{3,}/g;
const normalize = (value: string) =>
  value
    .normalize("NFC")
    .toLowerCase()
    .replace(/[¿?¡!.,;:«»"“”()…]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const AUTO_TYPES = new Set(["choice", "context", "listen", "gap", "order", "match", "classify", "transform", "error"]);

function exerciseProblems(where: string, exercise: Exercise): string[] {
  const problems: string[] = [];
  const at = `${where} › ${exercise.id}`;
  if (!exercise.prompt?.trim()) problems.push(`${at}: missing prompt`);
  switch (exercise.type) {
    case "choice":
    case "context":
    case "listen": {
      if (exercise.items.length < 2) problems.push(`${at}: needs at least 2 items`);
      exercise.items.forEach((item, index) => {
        if (!item.q?.trim()) problems.push(`${at}#${index}: empty question`);
        if (item.options.length < 2) problems.push(`${at}#${index}: needs at least 2 options`);
        if (new Set(item.options.map(normalize)).size !== item.options.length) problems.push(`${at}#${index}: duplicate options`);
        if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer >= item.options.length) problems.push(`${at}#${index}: answer index out of range`);
        if (exercise.type === "listen" && !item.audio?.trim()) problems.push(`${at}#${index}: listen item without audio`);
        if (exercise.type === "context" && !item.context?.trim()) problems.push(`${at}#${index}: context item without context`);
      });
      break;
    }
    case "gap": {
      if (exercise.items.length < 3) problems.push(`${at}: needs at least 3 items`);
      exercise.items.forEach((item, index) => {
        const gaps = item.q.match(GAP)?.length ?? 0;
        if (gaps === 0) problems.push(`${at}#${index}: no ___ gap`);
        if (gaps !== item.answers.length) problems.push(`${at}#${index}: ${gaps} gaps but ${item.answers.length} answer lists`);
        if (item.answers.some((list) => !list.length || list.some((answer) => !answer.trim()))) problems.push(`${at}#${index}: empty answer`);
      });
      break;
    }
    case "order": {
      if (exercise.items.length < 2) problems.push(`${at}: needs at least 2 items`);
      exercise.items.forEach((item, index) => {
        if (item.words.length < 3) problems.push(`${at}#${index}: needs at least 3 tokens`);
        if (new Set(item.words).size < 2) problems.push(`${at}#${index}: tokens are all identical`);
      });
      break;
    }
    case "match": {
      if (exercise.pairs.length < 3) problems.push(`${at}: needs at least 3 pairs`);
      if (new Set(exercise.pairs.map((pair) => normalize(pair.left))).size !== exercise.pairs.length) problems.push(`${at}: duplicate left items`);
      if (new Set(exercise.pairs.map((pair) => normalize(pair.right))).size !== exercise.pairs.length) problems.push(`${at}: duplicate right items`);
      break;
    }
    case "classify": {
      if (exercise.categories.length < 2) problems.push(`${at}: needs at least 2 categories`);
      if (exercise.items.length < 4) problems.push(`${at}: needs at least 4 items`);
      exercise.items.forEach((item, index) => {
        if (!Number.isInteger(item.cat) || item.cat < 0 || item.cat >= exercise.categories.length) problems.push(`${at}#${index}: category out of range`);
      });
      exercise.categories.forEach((_, index) => {
        if (!exercise.items.some((item) => item.cat === index)) problems.push(`${at}: category ${index} is never used`);
      });
      break;
    }
    case "transform": {
      if (exercise.items.length < 3) problems.push(`${at}: needs at least 3 items`);
      exercise.items.forEach((item, index) => {
        if (!item.answers.length || item.answers.some((answer) => !answer.trim())) problems.push(`${at}#${index}: empty answer`);
      });
      break;
    }
    case "error": {
      if (exercise.items.length < 3) problems.push(`${at}: needs at least 3 items`);
      exercise.items.forEach((item, index) => {
        if (!item.answers.length) problems.push(`${at}#${index}: no corrected sentence`);
        if (item.answers.some((answer) => normalize(answer) === normalize(item.sentence))) problems.push(`${at}#${index}: correction equals the wrong sentence`);
        if (!item.why?.trim()) problems.push(`${at}#${index}: error item must explain why`);
      });
      break;
    }
    case "open": {
      if (!exercise.items.length) problems.push(`${at}: needs at least 1 item`);
      break;
    }
  }
  return problems;
}

function quizItemProblems(where: string, item: QuizItem, index: number): string[] {
  const at = `${where} › quiz#${index}`;
  switch (item.type) {
    case "choice":
    case "listen":
      return exerciseProblems(at, { id: "q", type: item.type, prompt: "quiz", items: [item, item] }).filter((problem) => !problem.includes("duplicate"));
    case "gap":
      return exerciseProblems(at, { id: "q", type: "gap", prompt: "quiz", items: [item, item, item] });
    case "order":
      return exerciseProblems(at, { id: "q", type: "order", prompt: "quiz", items: [item, item] });
    case "transform":
      return exerciseProblems(at, { id: "q", type: "transform", prompt: "quiz", items: [item, item, item] });
    case "error":
      return exerciseProblems(at, { id: "q", type: "error", prompt: "quiz", items: [item, item, item] });
    case "open":
      return item.prompt?.trim() ? [] : [`${at}: open item without prompt`];
  }
}

export function moduleExercises(mod: Module): Exercise[] {
  return [
    ...mod.grammar.exercises,
    ...mod.vocabulary.exercises,
    mod.pronunciation.perceive,
    ...mod.listening.stages.map((stage) => stage.exercise),
    ...mod.reading.tasks,
    ...mod.practice.exercises,
  ];
}

export function validateModule(mod: Module): string[] {
  const problems: string[] = [];
  const at = mod.id;
  const expectedId = moduleIdFor(mod.level, mod.week);
  if (mod.id !== expectedId) problems.push(`${at}: id should be ${expectedId}`);
  if (!mod.title.trim() || !mod.subtitle.trim()) problems.push(`${at}: title and subtitle are required`);
  if (!mod.stop.place || !mod.stop.country) problems.push(`${at}: journey stop is required`);
  if (mod.minutes < 30 || mod.minutes > 150) problems.push(`${at}: minutes should be between 30 and 150`);

  // 01 Goal
  if (!mod.goal.canDo.trim()) problems.push(`${at}: goal.canDo missing`);
  if (mod.goal.steps.length < 3) problems.push(`${at}: goal needs at least 3 steps`);
  // 02 Theory: real explanation with examples.
  if (mod.theory.parts.length < 2) problems.push(`${at}: theory needs at least 2 parts`);
  mod.theory.parts.forEach((part, index) => {
    if (!part.body.length || part.body.join(" ").length < 120) problems.push(`${at}: theory part ${index} is too thin`);
    if ((part.examples?.length ?? 0) < 2 && !part.table) problems.push(`${at}: theory part ${index} needs examples or a table`);
  });
  if (!mod.theory.parts.some((part) => part.mistakes?.length)) problems.push(`${at}: theory should name at least one common mistake`);
  // 03 Grammar
  if (mod.grammar.exercises.length < 2) problems.push(`${at}: grammar needs at least 2 exercises`);
  // 04 Vocabulary: chunks, not dumps.
  const vocabCount = mod.vocabulary.groups.reduce((sum, group) => sum + group.items.length, 0);
  if (vocabCount < 8) problems.push(`${at}: vocabulary has only ${vocabCount} items`);
  if (vocabCount > 45) problems.push(`${at}: vocabulary dump (${vocabCount} items)`);
  if (!mod.vocabulary.exercises.length) problems.push(`${at}: vocabulary needs practice`);
  // 05 Pronunciation: perception + production, not a word list.
  const perceive = mod.pronunciation.perceive;
  if (!["choice", "listen", "classify", "context"].includes(perceive.type)) problems.push(`${at}: pronunciation perception must be choice/listen/classify`);
  if (perceive.type === "choice" || perceive.type === "listen" || perceive.type === "context" || perceive.type === "classify") {
    if ((perceive.items as { audio?: string }[]).some((item) => !item.audio)) problems.push(`${at}: every pronunciation perception item needs audio`);
  }
  if (mod.pronunciation.produce.length < 3) problems.push(`${at}: pronunciation needs at least 3 production prompts`);
  if (mod.pronunciation.explanation.join(" ").length < 100) problems.push(`${at}: pronunciation explanation too thin`);
  // 06 Listening: gist first, transcript hidden by the engine.
  const listening = mod.listening;
  if (listening.script.length < 4) problems.push(`${at}: listening script too short`);
  if (listening.stages.length < 2) problems.push(`${at}: listening needs at least 2 stages`);
  if (listening.stages[0]?.stage !== "gist") problems.push(`${at}: the first listening stage must be gist`);
  const speakerIds = new Set(listening.speakers.map((speaker) => speaker.id));
  listening.script.forEach((line, index) => {
    if (!speakerIds.has(line.speaker)) problems.push(`${at}: listening line ${index} has unknown speaker ${line.speaker}`);
  });
  // 07 Reading
  if (mod.reading.text.length < 2) problems.push(`${at}: reading text needs at least 2 paragraphs`);
  if (mod.reading.tasks.length < 2 || new Set(mod.reading.tasks.map((task) => task.type)).size < 2) problems.push(`${at}: reading needs at least 2 comprehension tasks with different mechanics`);
  if (mod.reading.noticing.items.length < 2) problems.push(`${at}: reading needs language noticing`);
  // 08 Practice: varied mechanics.
  const practiceTypes = new Set(mod.practice.exercises.map((exercise) => exercise.type));
  if (mod.practice.exercises.length < 3) problems.push(`${at}: practice needs at least 3 exercises`);
  if (practiceTypes.size < 3) problems.push(`${at}: practice needs at least 3 different mechanics`);
  // Writing is practised in short guided pieces too, not only in the weekly task.
  const guided = mod.practice.exercises.filter((exercise) => exercise.type === "open");
  if (!guided.length || guided.some((exercise) => exercise.type === "open" && (exercise.items.length < 2 || exercise.items.some((item) => !item.model || (item.checklist?.length ?? 0) < 2)))) problems.push(`${at}: practice needs a guided writing exercise (open, ≥2 items, each with model and checklist)`);
  // 09 Writing
  const writing = mod.writing;
  if (!writing.model.length || writing.checklist.length < 3 || writing.steps.length < 2) problems.push(`${at}: writing needs steps, a model and a checklist`);
  if (!(writing.words[0] > 0 && writing.words[1] >= writing.words[0])) problems.push(`${at}: writing word range invalid`);
  // 10 Speaking: mandatory oral production.
  if (mod.speaking.tasks.length < 2) problems.push(`${at}: speaking needs at least 2 tasks`);
  mod.speaking.tasks.forEach((task, index) => {
    if (task.seconds < 15) problems.push(`${at}: speaking task ${index} too short`);
    if (/^\s*(discute|habla|comenta) (esto|este tema) con tu (profesor|profesora|profe)/i.test(task.prompt)) problems.push(`${at}: speaking task ${index} is a fake prompt`);
  });
  // 11 Use it in class
  if (mod.useInClass.cards.length < 3) problems.push(`${at}: use-in-class needs at least 3 cards`);
  if (new Set(mod.useInClass.cards.map((card) => normalize(card.move))).size < 3) problems.push(`${at}: use-in-class moves should vary`);
  // 12 Quiz: mixed assessment.
  const quiz = mod.quiz.items;
  if (quiz.length < 8) problems.push(`${at}: quiz needs at least 8 items`);
  const quizTypes = new Set(quiz.map((item) => item.type));
  if (quizTypes.size < 4) problems.push(`${at}: quiz needs at least 4 item types`);
  const recognition = quiz.filter((item) => item.type === "choice" || item.type === "listen").length;
  if (recognition > Math.ceil(quiz.length / 2)) problems.push(`${at}: quiz is mostly multiple choice`);
  if (!quiz.some((item) => item.type === "error")) problems.push(`${at}: quiz needs error correction`);
  if (!quiz.some((item) => item.type === "gap" || item.type === "transform" || item.type === "order")) problems.push(`${at}: quiz needs controlled production`);
  quiz.forEach((item, index) => problems.push(...quizItemProblems(at, item, index)));
  // 13 Complete
  if (mod.complete.canNow.length < 3 || !mod.complete.review.length) problems.push(`${at}: completion needs can-now and review lists`);

  // Exercises
  const ids = new Set<string>();
  for (const exercise of moduleExercises(mod)) {
    if (ids.has(exercise.id)) problems.push(`${at}: duplicate exercise id ${exercise.id}`);
    ids.add(exercise.id);
    problems.push(...exerciseProblems(at, exercise));
  }
  const allTypes = new Set(moduleExercises(mod).map((exercise) => exercise.type));
  if ([...allTypes].filter((type) => AUTO_TYPES.has(type)).length < 5) problems.push(`${at}: the mod uses fewer than 5 exercise mechanics`);

  // Language support decreases by level.
  const json = JSON.stringify(mod);
  if ((mod.level === "c1" || mod.level === "c2") && /"(support|en|canDoEn)":/.test(json)) problems.push(`${at}: C1/C2 content must be in Spanish only`);
  if (mod.level === "a1" && !mod.theory.parts.some((part) => part.support?.length)) problems.push(`${at}: A1 theory should offer English support`);
  return problems;
}

export type CourseInput = {
  modulesByLevel: Record<LevelId, Module[]>;
  objectives: Objective[];
  /** Levels whose modules must be complete. Others may be empty while being built. */
  requiredLevels?: LevelId[];
};

export function validateCourse({ modulesByLevel, objectives, requiredLevels = [] }: CourseInput): string[] {
  const problems: string[] = [];
  const objectiveMap = new Map<string, Objective>();
  for (const objective of objectives) {
    if (objectiveMap.has(objective.id)) problems.push(`objective ${objective.id} is duplicated`);
    objectiveMap.set(objective.id, objective);
    if (!/^(a1|a2|b1|b2|c1|c2)\.(gram|voc|pron|lis|read|wri|spk|fun|disc|rev)\.[a-z0-9-]+$/.test(objective.id)) problems.push(`objective ${objective.id} has an invalid id`);
  }
  for (const objective of objectives) {
    for (const prerequisite of objective.prerequisites) {
      const target = objectiveMap.get(prerequisite);
      if (!target) problems.push(`objective ${objective.id}: unknown prerequisite ${prerequisite}`);
      else if (objectiveOrder(target) > objectiveOrder(objective)) problems.push(`objective ${objective.id}: prerequisite ${prerequisite} comes later`);
    }
  }

  for (const level of levelIds) {
    const levelObjectives = objectives.filter((objective) => objective.level === level);
    const weeks = Math.max(0, ...levelObjectives.map((objective) => objective.week));
    for (let week = 1; week <= weeks; week += 1) {
      const weekObjectives = levelObjectives.filter((objective) => objective.week === week);
      if (!weekObjectives.length) problems.push(`${level} week ${week} has no objectives`);
    }
    for (const domain of ["grammar", "vocabulary", "pronunciation", "listening", "reading", "writing", "speaking", "functional", "review"]) {
      if (!levelObjectives.some((objective) => objective.domain === domain)) problems.push(`${level} has no ${domain} objective`);
    }
    if (level !== "a1" && !levelObjectives.some((objective) => objective.domain === "discourse")) problems.push(`${level} has no discourse objective`);

    const modules = modulesByLevel[level] ?? [];
    if (!modules.length) {
      if (requiredLevels.includes(level)) problems.push(`${level} has no modules`);
      continue;
    }
    if (modules.length !== weeks) problems.push(`${level}: ${modules.length} modules for ${weeks} planned weeks`);
    modules.forEach((mod, index) => {
      if (mod.level !== level) problems.push(`${mod.id}: listed under ${level}`);
      if (mod.week !== index + 1) problems.push(`${mod.id}: week ${mod.week} out of order (position ${index + 1})`);
      const planned = levelObjectives.filter((objective) => objective.week === mod.week).map((objective) => objective.id).sort();
      const declared = [...mod.newObjectives].sort();
      if (planned.join("|") !== declared.join("|")) problems.push(`${mod.id}: newObjectives ${declared.join(", ")} differ from the map ${planned.join(", ")}`);
      const isCheckpoint = levelObjectives.some((objective) => objective.week === mod.week && objective.domain === "review");
      if (isCheckpoint !== (mod.kind === "checkpoint")) problems.push(`${mod.id}: kind should be ${isCheckpoint ? "checkpoint" : "core"}`);
      for (const id of mod.reviewObjectives) {
        const objective = objectiveMap.get(id);
        if (!objective) problems.push(`${mod.id}: unknown review objective ${id}`);
        else if (objectiveOrder(objective) >= objectiveOrder(mod)) problems.push(`${mod.id}: review objective ${id} is not earlier`);
      }
      const minimumReview = mod.kind === "checkpoint" ? 8 : mod.id === "a1-01" ? 0 : 2;
      if (mod.reviewObjectives.length < minimumReview) problems.push(`${mod.id}: needs at least ${minimumReview} review objectives`);
      if (mod.kind === "checkpoint") {
        const reviewedWeeks = new Set(mod.reviewObjectives.map((id) => objectiveMap.get(id)).filter((objective) => objective?.level === level).map((objective) => objective!.week));
        if (reviewedWeeks.size < 3) problems.push(`${mod.id}: checkpoint must integrate at least 3 earlier weeks`);
      }
      for (const prerequisite of mod.prerequisites) {
        const [prerequisiteLevel, prerequisiteWeek] = prerequisite.split("-");
        const target = modulesByLevel[prerequisiteLevel as LevelId]?.find((candidate) => candidate.id === prerequisite);
        if (!target) problems.push(`${mod.id}: unknown prerequisite mod ${prerequisite}`);
        else if (levelRank(target.level) * 100 + Number(prerequisiteWeek) >= levelRank(mod.level) * 100 + mod.week) problems.push(`${mod.id}: prerequisite ${prerequisite} is not earlier`);
      }
      problems.push(...validateModule(mod));
    });
  }

  // Spaced repetition: taught objectives must come back later.
  const builtModules = levelIds.flatMap((level) => modulesByLevel[level] ?? []);
  const reviewedIds = new Set(builtModules.flatMap((mod) => mod.reviewObjectives));
  for (const mod of builtModules) {
    for (const id of mod.newObjectives) {
      const objective = objectiveMap.get(id);
      if (!objective || !["grammar", "vocabulary", "pronunciation", "functional", "discourse"].includes(objective.domain)) continue;
      const hasLaterModule = builtModules.some((candidate) => levelRank(candidate.level) * 100 + candidate.week > objectiveOrder(objective) + 1);
      if (hasLaterModule && !reviewedIds.has(id)) problems.push(`${id}: introduced in ${mod.id} but never reviewed later`);
    }
  }
  return problems;
}

/** Coverage matrix rows: objective → introduced in, reviewed in. */
export function coverageMatrix(modulesByLevel: Record<LevelId, Module[]>, objectives: Objective[]) {
  const modules = levelIds.flatMap((level) => modulesByLevel[level] ?? []);
  return objectives.map((objective) => ({
    id: objective.id,
    level: objective.level,
    domain: objective.domain,
    topic: objective.topic,
    week: objective.week,
    introducedIn: modules.filter((mod) => mod.newObjectives.includes(objective.id)).map((mod) => mod.id),
    reviewedIn: modules.filter((mod) => mod.reviewObjectives.includes(objective.id)).map((mod) => mod.id),
  }));
}

/** Repeated prompts across the course (exact matches after normalisation). */
export function duplicationAudit(modulesByLevel: Record<LevelId, Module[]>) {
  const seen = new Map<string, string[]>();
  const add = (key: string, where: string) => {
    if (key.length < 12) return;
    seen.set(key, [...(seen.get(key) ?? []), where]);
  };
  for (const level of levelIds) {
    for (const mod of modulesByLevel[level] ?? []) {
      for (const exercise of moduleExercises(mod)) {
        const where = `${mod.id}/${exercise.id}`;
        switch (exercise.type) {
          case "choice":
          case "context":
          case "listen":
            exercise.items.forEach((item) => add(normalize(`${item.context ?? ""} ${item.q} ${item.audio ?? ""} ${item.options.join("/")}`), where));
            break;
          case "gap":
            exercise.items.forEach((item) => add(normalize(item.q), where));
            break;
          case "order":
            exercise.items.forEach((item) => add(normalize(item.words.join(" ")), where));
            break;
          case "transform":
            exercise.items.forEach((item) => add(normalize(`${item.instruction ?? ""} ${item.source}`), where));
            break;
          case "error":
            exercise.items.forEach((item) => add(normalize(item.sentence), where));
            break;
          case "open":
            exercise.items.forEach((item) => add(normalize(item.prompt), where));
            break;
          default:
            break;
        }
      }
      mod.quiz.items.forEach((item, index) => {
        const where = `${mod.id}/quiz#${index}`;
        if ("q" in item) add(normalize(item.q), where);
        else if ("sentence" in item) add(normalize(item.sentence), where);
        else if ("source" in item) add(normalize(item.source), where);
        else if ("words" in item) add(normalize(item.words.join(" ")), where);
        else if ("prompt" in item) add(normalize(item.prompt), where);
      });
      add(normalize(mod.listening.script.map((line) => line.text).join(" ")), `${mod.id}/listening`);
      add(normalize(mod.reading.text.join(" ")), `${mod.id}/reading`);
    }
  }
  return [...seen.entries()].filter(([, places]) => places.length > 1).map(([text, places]) => ({ text, places }));
}
