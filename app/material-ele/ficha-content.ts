import { loadLiveLesson } from "../grammar-classroom/live/registry";
import type { Block, LiveLesson } from "../grammar-classroom/live/types";

/** Plain worksheet content extracted from a live grammar class; inline text keeps only **bold**. */
export type FichaContent = {
  subtitle: string;
  theory: { label: string; formula: string[]; meaning: string; examples: string[] }[];
  tables: { title?: string; head: string[]; rows: string[][] }[];
  mistakes: { wrong: string; right: string; why: string }[];
  exercises: { prompt: string; context?: string; options?: string[]; answer: string; why: string; kind: "choice" | "fix" | "rewrite" }[];
  writing?: { title: string; situation: string; task: string[] };
  talk: string[];
};

/** «[[palabra|tone]]» marks colour a word in the class; on paper only the word stays. */
export const clean = (text: string) => text.replace(/\[\[([^|\]]+)\|[a-z]+\]\]/g, "$1").replace(/\s+/g, " ").trim();
const MAX_EXERCISES = 12;
export const SAMPLE_EXERCISES = 5;

/** `sample` (PRO classes): two concepts and five exercises with answers; nothing else leaves the class. */
export async function fichaContent(id: number, sample = false): Promise<FichaContent | undefined> {
  // In the build the registry is a small index and each lesson an encrypted blob, so loading is async.
  const lesson: LiveLesson | undefined = await loadLiveLesson(id);
  if (!lesson) return undefined;
  const blocks: Block[] = lesson.stages.flatMap((stage) => stage.steps.flatMap((step) => step.blocks));
  const content: FichaContent = { subtitle: clean(lesson.subtitle), theory: [], tables: [], mistakes: [], exercises: [], talk: [] };
  const choice: FichaContent["exercises"] = [], fix: FichaContent["exercises"] = [], rewrite: FichaContent["exercises"] = [];
  for (const block of blocks) {
    if (block.kind === "concept") content.theory.push({ label: clean(block.label), formula: block.formula.map(clean), meaning: clean(block.meaning), examples: block.examples.map((example) => clean(example.es)) });
    else if (block.kind === "table") content.tables.push({ title: block.title ? clean(block.title) : undefined, head: block.head.map(clean), rows: block.rows.map((row) => row.map(clean)) });
    else if (block.kind === "mistakes") content.mistakes.push(...block.items.map((item) => ({ wrong: clean(item.wrong), right: clean(item.right), why: clean(item.why) })));
    else if (block.kind === "choice") choice.push(...block.items.map((item) => ({ kind: "choice" as const, prompt: clean(item.prompt), context: item.context ? clean(item.context) : undefined, options: item.options.map(clean), answer: clean(item.options[item.answer] ?? ""), why: clean(item.why) })));
    else if (block.kind === "fix") fix.push(...block.items.map((item) => ({ kind: "fix" as const, prompt: clean(item.sentence), options: item.ok ? undefined : item.options?.map(clean), answer: item.ok ? "Correcta." : clean(item.options?.[item.answer ?? 0] ?? ""), why: clean(item.why) })));
    else if (block.kind === "rewrite") rewrite.push(...block.items.map((item) => ({ kind: "rewrite" as const, prompt: clean(item.prompt), context: clean(item.instruction), answer: clean(item.accept[0] ?? ""), why: "" })));
    else if (block.kind === "write" && !content.writing) content.writing = { title: clean(block.title), situation: clean(block.situation), task: block.task.map(clean) };
    else if (block.kind === "talk") content.talk.push(...block.cards.map((card) => clean(card.q)));
  }
  // A mix of the three exercise types, choice first, so every worksheet practises recognition, correction and production.
  const take = (list: FichaContent["exercises"], n: number) => list.slice(0, n);
  const fixN = Math.min(fix.length, 3), rewriteN = Math.min(rewrite.length, 3);
  content.exercises = [...take(choice, MAX_EXERCISES - fixN - rewriteN), ...take(fix, fixN), ...take(rewrite, rewriteN)].filter((item) => item.prompt && item.answer);
  if (sample) {
    const picked = [...take(choice, 3), ...take(fix, 1), ...take(rewrite, 1)].filter((item) => item.prompt && item.answer);
    const extra = choice.slice(3).filter((item) => item.prompt && item.answer);
    return { subtitle: content.subtitle, theory: content.theory.slice(0, 2).map((concept) => ({ ...concept, examples: concept.examples.slice(0, 2) })), tables: [], mistakes: [], exercises: [...picked, ...extra].slice(0, SAMPLE_EXERCISES), talk: [] };
  }
  content.theory = content.theory.slice(0, 6);
  content.tables = content.tables.slice(0, 2);
  content.mistakes = content.mistakes.slice(0, 5);
  content.talk = content.talk.slice(0, 5);
  return content;
}
