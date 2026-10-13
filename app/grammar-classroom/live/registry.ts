// Server composition only: the client receives the single requested lesson as props.
import { desdeHace } from './lessons/desde-hace';
import type { LiveLesson } from './types';

/** Grammar classes already migrated to the live-class system, by catalog id. */
const liveLessons: Record<number, LiveLesson> = { [desdeHace.id]: desdeHace };
export const liveLessonIds = Object.keys(liveLessons).map(Number);
export const getLiveLesson = (id: number): LiveLesson | undefined => liveLessons[id];
