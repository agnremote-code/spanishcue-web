import type { Module, SectionKey } from "../curriculum/types";
import { sectionExercises } from "../curriculum/lookup";
import { categories, categorize, type CategoryId } from "./categorize";
import type { RecommendationCatalog, RecommendedClass } from "./catalog";

export type Upsell = {
  category: CategoryId;
  label: string;
  lesson: RecommendedClass;
  /** A real line from the section, so the invitation talks about what the learner just did. */
  sample: string | null;
  /** Where the lesson opens: the free demo for a PRO class, the class itself when it is free. */
  href: string;
};

const GENERAL: CategoryId[] = ["gramatica-general", "vocabulario", "comprension-lectora", "comprension-auditiva", "pronunciacion", "ortografia-tildes"];
const COPULA = /\b(soy|eres|es|somos|sois|son|estoy|est[aá]s|est[aá]|estamos|est[aá]n|era|eran|estaba|estaban|hay)\b/gi;

/** Every Spanish string a section shows, flattened; English glosses stay out of the vote. */
function sectionText(module: Module, section: SectionKey): string {
  const pick = (value: unknown): string[] => {
    if (typeof value === "string") return [value];
    if (Array.isArray(value)) return value.flatMap(pick);
    if (value && typeof value === "object") return Object.entries(value).flatMap(([key, v]) => (/^(en|canDoEn|support|note|voice|audio|id)$/.test(key) ? [] : pick(v)));
    return [];
  };
  const source: unknown = section === "complete" ? module.complete : section === "useInClass" ? module.useInClass : (module as unknown as Record<string, unknown>)[section];
  return pick(source).join(" ");
}

/** The grammar topic a section is really about, by majority of its own exercises, then its wording, then the week's objectives. */
export function sectionTopic(module: Module, section: SectionKey): CategoryId {
  const votes = new Map<CategoryId, number>();
  for (const exercise of sectionExercises(module, section)) {
    const items = "items" in exercise ? (exercise.items as unknown[]) : [];
    items.slice(0, 6).forEach((_, index) => {
      const item = items[index] as Record<string, unknown>;
      const correct = Array.isArray(item.answers) ? (item.answers as string[][]).map((list) => list[0]) : Array.isArray(item.options) && typeof item.answer === "number" ? [(item.options as string[])[item.answer]] : [];
      if (!correct.length) return;
      const id = categorize({ section: "grammar", correct, question: typeof item.q === "string" ? item.q : undefined, why: typeof item.why === "string" ? item.why : undefined }).id;
      if (!GENERAL.includes(id)) votes.set(id, (votes.get(id) ?? 0) + 1);
    });
  }
  const top = [...votes].sort((a, b) => b[1] - a[1])[0];
  if (top) return top[0];
  const text = sectionText(module, section);
  // «Soy Laura», «está cansado»: a text built on the copulas belongs with ser/estar.
  if ((text.match(COPULA) ?? []).length >= 3) return "ser-estar";
  const wording = categorize({ section: "grammar", correct: [], why: text.slice(0, 4000) }).id;
  if (!GENERAL.includes(wording)) return wording;
  const objective = categorize({ section: "grammar", correct: [], objectives: module.newObjectives }).id;
  return GENERAL.includes(objective) ? "gramatica-general" : objective;
}

/** A real line from the section to quote on the card. */
function sampleOf(module: Module, section: SectionKey): string | null {
  for (const exercise of sectionExercises(module, section)) {
    const items = "items" in exercise ? (exercise.items as Record<string, unknown>[]) : [];
    const q = items.map((item) => item.q ?? item.sentence ?? item.source ?? item.text).find((value) => typeof value === "string" && (value as string).length <= 90);
    if (typeof q === "string") return q.replace(/\*\*|`/g, "");
  }
  if (section === "reading") return module.reading.text[0]?.split(/(?<=[.!?])\s/)[0]?.slice(0, 90) ?? null;
  if (section === "listening") return module.listening.script[0]?.text.slice(0, 90) ?? null;
  if (section === "theory") return module.theory.parts[0]?.examples?.[0]?.es ?? null;
  if (section === "writing") return module.writing.model[0]?.split(/(?<=[.!?])\s/)[0]?.slice(0, 90) ?? null;
  return null;
}

/**
 * The class to invite the learner to at the end of a section: the one that
 * matches the section's topic, else the week's, else any class of the level.
 * Returns null only when the catalog has nothing for this level.
 */
export function upsellFor(module: Module, section: SectionKey, catalog: RecommendationCatalog): Upsell | null {
  const topic = sectionTopic(module, section);
  const weekTopic = categorize({ section: "grammar", correct: [], objectives: module.newObjectives }).id;
  const fallback = (Object.keys(catalog) as CategoryId[]).find((id) => catalog[id]?.length);
  const category = catalog[topic]?.length ? topic : catalog[weekTopic]?.length ? weekTopic : fallback;
  const lesson = category ? catalog[category]?.[0] : undefined;
  if (!category || !lesson) return null;
  const href = lesson.free ? lesson.path : `/autoestudio/clase/${lesson.id}?de=${encodeURIComponent(module.id)}&tema=${category}`;
  return { category, label: categories[category].label, lesson, sample: sampleOf(module, section), href };
}
