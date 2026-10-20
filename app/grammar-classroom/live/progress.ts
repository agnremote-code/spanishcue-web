import type { Block, LiveLesson, LiveStage } from './types';

// Plain functions shared by the class (client) and by the course pages and APIs (server).

/** How many checkable things a block holds. Only real, completable activities count. */
export function targets(block: Block): number {
  switch (block.kind) {
    case 'choice': case 'classify': case 'fix': case 'build': case 'rewrite': return block.items.length;
    case 'chat-fill': return block.lines.filter(line => line.options).length;
    case 'explore': return Object.keys(block.notes).length;
    case 'listen': return 1 + block.details.length;
    case 'talk': return block.cards.length;
    case 'write': return 1;
    case 'visual': return block.visual === 'barrio-mission' ? 4 : 0;
    default: return 0;
  }
}

/** Real progress of one section: completed activities out of the ones it has. */
export function progressOf(stage: LiveStage, results: Record<string, { ok: boolean }>) {
  const total = stage.steps.reduce((sum, step) => sum + step.blocks.reduce((n, block) => n + targets(block), 0), 0);
  const done = Object.entries(results).filter(([id, result]) => id.startsWith(`${stage.id}:`) && result.ok).length;
  return { total, done: Math.min(done, total) };
}

export const lessonTargets = (lesson: LiveLesson) => lesson.stages.map(stage => stage.steps.reduce((sum, step) => sum + step.blocks.reduce((n, block) => n + targets(block), 0), 0));

/** Activities of each section, by section id: what the course needs to measure a saved class. */
export const lessonSections = (lesson: LiveLesson): [string, number][] => lesson.stages.map((stage, i) => [stage.id, lessonTargets(lesson)[i]]);

/** Completed activities of a saved class, section by section, exactly as the class sidebar counts them. */
export function savedProgress(results: unknown, sections: [string, number][]) {
  const total = sections.reduce((n, [, count]) => n + count, 0);
  if (!results || typeof results !== 'object') return { done: 0, total, started: false };
  const entries = Object.entries(results as Record<string, { ok?: unknown }>);
  const done = sections.reduce((n, [id, count]) => n + Math.min(count, entries.filter(([key, result]) => key.startsWith(`${id}:`) && result?.ok === true).length), 0);
  return { done, total, started: entries.length > 0 };
}
