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
