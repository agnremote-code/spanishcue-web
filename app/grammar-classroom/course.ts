import { grammarTopics } from './catalog';
import { courseUnits, type CourseLevel, type CourseStatus } from './curriculum';
import { getLiveLessonInfo } from './live/registry';

/** One row of the course map, ready for the browser: metadata and section sizes only, never a lesson body. */
export type CourseRow = {
  sequence: number; code: string; catalogId: number; level: CourseLevel; title: string;
  category: string; categoryLabel: string; href: string; status: CourseStatus;
  prerequisites: number[]; sections: [string, number][];
};

/** Server only: measures each class that opens so the map can show real progress. */
export function courseRows(): CourseRow[] {
  const sequenceOf = new Map(courseUnits.map(unit => [unit.code, unit.sequence]));
  return courseUnits.map(unit => {
    const lesson = unit.status === 'live' ? getLiveLessonInfo(unit.catalogId) : undefined;
    if (unit.status === 'live' && !lesson) throw new Error(`La clase ${unit.code} (${unit.catalogId}) figura como disponible y no existe`);
    return {
      sequence: unit.sequence, code: unit.code, catalogId: unit.catalogId, level: unit.level, title: unit.title,
      category: unit.category, categoryLabel: grammarTopics.find(topic => topic.id === unit.category)?.label ?? unit.category,
      href: unit.canonicalSlug, status: unit.status,
      prerequisites: unit.prerequisiteCodes.map(code => sequenceOf.get(code)!),
      sections: lesson ? lesson.sections : [],
    };
  });
}
