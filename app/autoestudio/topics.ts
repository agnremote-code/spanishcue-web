/**
 * Homework topics: one grammar class a teacher assigns on its own, outside the
 * weekly route. Imported by the Worker, so it stays tiny and never imports content.
 *
 * A topic opens for PRO accounts and for any student whose browser holds a valid
 * Homework pass (any level); the pass never expires on its own. The student sees
 * the class in self-study mode with its recording.
 */
export type HomeworkTopic = { slug: string; lessonId: number; level: "a1" | "a2" | "b1" | "b2" | "c1" | "c2"; audio: string; title: string; canDo: string; minutes: number };

export const homeworkTopics: readonly HomeworkTopic[] = [
  {
    slug: "numeros-dinero-y-monedas",
    lessonId: 549,
    level: "a2",
    audio: "/audio/grammar-live/549.mp3",
    title: "Números, dinero y monedas del mundo hispano",
    canDo: "Puedo decir precios, pagar y pedir descuento en pesos, euros, soles y dólares, y entiendo cómo se habla de dinero en Argentina.",
    minutes: 60,
  },
];

export const HOMEWORK_TOPIC_ROOT = "/autoestudio/tema";
export const topicPath = (slug: string) => `${HOMEWORK_TOPIC_ROOT}/${slug}`;

const normalize = (pathname: string) => {
  const withoutRsc = pathname.endsWith(".rsc") ? pathname.slice(0, -4) : pathname;
  return withoutRsc.length > 1 ? withoutRsc.replace(/\/+$/, "") : withoutRsc;
};

export function homeworkTopicAt(pathname: string): HomeworkTopic | undefined {
  const path = normalize(pathname);
  return homeworkTopics.find((topic) => topicPath(topic.slug) === path);
}

export function homeworkTopicBySlug(slug: string): HomeworkTopic | undefined {
  return homeworkTopics.find((topic) => topic.slug === slug);
}

/** True for the one recording a Homework topic plays; nothing else under /audio. */
export function isHomeworkTopicAudio(pathname: string): boolean {
  return homeworkTopics.some((topic) => topic.audio === pathname);
}
