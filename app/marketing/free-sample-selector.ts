export type ProductSampleKey =
  | "grammar"
  | "conversation"
  | "listening"
  | "vocabulary"
  | "pronunciation"
  | "countryAtlas";

export type FreeSampleLesson = {
  id: number;
  free: boolean;
  href: string;
  category: string;
  image: string;
};

type ProductSampleDefinition<T extends FreeSampleLesson> = {
  key: ProductSampleKey;
  matches: (lesson: T) => boolean;
};

/**
 * Marketing samples are selected from access metadata, never from a route allowlist.
 * If a route stops being free, it disappears from this surface automatically.
 */
export function selectFreeProductSamples<T extends FreeSampleLesson>(lessons: readonly T[]) {
  const freeLessons = lessons.filter((lesson) => lesson.free && lesson.href);
  const definitions: ProductSampleDefinition<T>[] = [
    { key: "grammar", matches: (lesson) => lesson.category === "Gramática" },
    { key: "conversation", matches: (lesson) => lesson.category === "Conversación" },
    { key: "listening", matches: (lesson) => lesson.category === "Escucha" },
    { key: "vocabulary", matches: (lesson) => lesson.category === "Vocabulario" },
    { key: "pronunciation", matches: (lesson) => lesson.category === "Fonética" },
    {
      key: "countryAtlas",
      matches: (lesson) => lesson.id === 36,
    },
  ];
  const usedLessonIds = new Set<number>();

  return definitions.flatMap(({ key, matches }) => {
    const lesson = freeLessons.find(
      (candidate) => !usedLessonIds.has(candidate.id) && matches(candidate),
    );
    if (!lesson) return [];
    usedLessonIds.add(lesson.id);
    return [{ key, lesson }];
  });
}

/**
 * Home «Clases destacadas» (Ale, 2026-10-21): Noche abierta and the hospital
 * open as free demos (the centre / the reception, the rest PRO), then one
 * whole free grammar class and one free listening class. Entries without a
 * demo route must be free by access metadata, or they drop out.
 */
export type HomeFeaturedKey = "conversation" | "grammar" | "listening";
export type HomeFeaturedArea = "centre" | "reception" | null;
const HOME_FEATURED: { key: HomeFeaturedKey; id: number; demo?: string; area: HomeFeaturedArea }[] = [
  { key: "conversation", id: 223, demo: "/demo/noche-abierta", area: "centre" },
  { key: "conversation", id: 240, demo: "/demo/hospital-san-casi-vivo", area: "reception" },
  { key: "grammar", id: 239, area: null },
  { key: "listening", id: 28, area: null },
];
export function selectHomeFeatured<T extends FreeSampleLesson>(lessons: readonly T[]) {
  return HOME_FEATURED.flatMap(({ key, id, demo, area }) => {
    const lesson = lessons.find((candidate) => candidate.id === id);
    if (!lesson || (!demo && !(lesson.free && lesson.href))) return [];
    return [{ key, area, lesson: demo ? { ...lesson, href: demo } : lesson }];
  });
}
