import type { QuizItem } from "../mini-apps/ChoiceQuiz";
import { usosPorPara, type UsoPrep } from "./usos";

export const PORPARA_PATH = "/por-o-para";
export const porParaPath = (slug: string) => `${PORPARA_PATH}/${slug}`;
const OPTIONS = ["por", "para"];

export function porParaItem(u: UsoPrep, sentence: string): QuizItem {
  const parts = sentence.split("___");
  if (parts.length !== 2 || !parts[0].replace(/[¿¡]/g, "").trim()) throw new Error(`Bad item: ${sentence}`);
  return { before: parts[0], after: parts[1], options: OPTIONS, answer: OPTIONS.indexOf(u.prep), why: `Se usa ${u.prep}: ${u.name.toLowerCase()}.` };
}

const fill = (it: QuizItem) => `${it.before}${it.options[it.answer]}${it.after}`;

export type PorParaPage = UsoPrep & { path: string; title: string; h1: string; description: string; kicker: string; quiz: QuizItem[]; examples: string[]; related: UsoPrep[]; faq: { question: string; answer: string }[] };

export function porParaPage(u: UsoPrep): PorParaPage {
  const idx = usosPorPara.indexOf(u);
  const other = usosPorPara.filter((o) => o.prep !== u.prep);
  const contrast = [0, 1].map((k) => { const o = other[(idx * 3 + k * 5) % other.length]; return porParaItem(o, o.items[(idx + k) % o.items.length]); });
  const quiz = [...u.items.map((s) => porParaItem(u, s)), ...contrast];
  const examples = quiz.slice(0, 3).map(fill);
  const title = `${u.name}: ¿por o para? Regla y ejercicio | SpanishCue`;
  let description = `${u.rule} Con ejemplos y un ejercicio de ${quiz.length} frases para elegir entre por y para.`;
  if (description.length > 165) description = `${u.name}: cuándo se usa «${u.prep}», con ejemplos y un ejercicio de ${quiz.length} frases para elegir entre por y para, con corrección al instante.`;
  if (description.length < 110) description += " Corrección al instante.";
  const same = usosPorPara.filter((o) => o.prep === u.prep && o !== u);
  const at = same.findIndex((o) => usosPorPara.indexOf(o) > idx);
  const related = [...same.slice(Math.max(at, 0)), ...same.slice(0, Math.max(at, 0))].slice(0, 6);
  const faq = [
    { question: `${u.name}: ¿se dice con por o con para?`, answer: `Con ${u.prep}. ${u.rule}` },
    { question: "¿Hay algún ejemplo?", answer: `«${examples[0]}» ${u.tip}` },
    { question: "¿Cómo se usa el ejercicio en clase?", answer: "Proyecta la página y deja que el alumno elija antes de explicar el porqué. Las dos últimas frases llevan la otra preposición, para que tenga que decidir de verdad." },
  ];
  return { ...u, path: porParaPath(u.slug), title, h1: `${u.name}: ¿por o para?`, description, kicker: `Por o para · ${u.prep} · ${u.level}`, quiz, examples, related, faq };
}

const cache = new Map<string, PorParaPage>();
export function porParaPageBySlug(slug: string): PorParaPage | undefined {
  if (cache.has(slug)) return cache.get(slug);
  const u = usosPorPara.find((x) => x.slug === slug);
  if (!u) return undefined;
  const page = porParaPage(u);
  cache.set(slug, page);
  return page;
}

/** Twelve mixed sentences for the hub, alternating por and para. */
export function porParaMixed(): QuizItem[] {
  const por = usosPorPara.filter((u) => u.prep === "por").slice(0, 6);
  const para = usosPorPara.filter((u) => u.prep === "para").slice(0, 6);
  return por.flatMap((u, i) => [porParaItem(u, u.items[(i + 2) % u.items.length]), porParaItem(para[i], para[i].items[(i + 3) % para[i].items.length])]);
}
