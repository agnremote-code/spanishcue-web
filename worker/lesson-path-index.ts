import { localLessonPath, normalizeLocalPath, type RoutableLesson } from "../app/access-policy";

/** Snapshot of the build's static catalog, not a cache of visitor URLs or access. */
export function createLessonPathIndex<T extends RoutableLesson>(lessons: readonly T[]) {
  const byPath = new Map<string, T>();
  for (const lesson of lessons) {
    const path = localLessonPath(lesson);
    // Array.find returns the first match when several levels share one route.
    if (path !== null && !byPath.has(path)) byPath.set(path, lesson);
  }
  return (pathname: string): T | undefined => byPath.get(normalizeLocalPath(pathname));
}
