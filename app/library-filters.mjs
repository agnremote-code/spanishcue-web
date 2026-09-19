/** Combine all facets; changing one selection must never clear the other. */
export function filterLessons(lessons, { level = 'Todos', category = 'Todas', query = '' } = {}) {
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const search = normalize(query.trim());
  const filtered = lessons.filter(lesson =>
    (level === 'Todos' || lesson.level === level || lesson.levels?.includes(level)) &&
    (category === 'Todas' || lesson.category === category) &&
    normalize(`${lesson.title} ${lesson.subtitle} ${lesson.tag}`).includes(search)
  );
  const categoryOrder = {'Gramática':1,'Conversación':2,'Escucha':3,'Fonética':4,'Vocabulario':5};
  return [...filtered].sort((a,b) =>
    (categoryOrder[a.category] ?? 99) - (categoryOrder[b.category] ?? 99) ||
    (a.routeSequence ?? a.curriculumSequence ?? Number.MAX_SAFE_INTEGER) -
      (b.routeSequence ?? b.curriculumSequence ?? Number.MAX_SAFE_INTEGER)
  );
}

export function availableLevels(lessons, category = 'Todas') {
  const present = new Set(lessons.filter(l => category === 'Todas' || l.category === category)
    .flatMap(l => [l.level, ...(l.levels || [])]));
  return ['A0','A1','A2','B1','B2','C1','C2'].filter(level => present.has(level));
}
export function levelForCategory(lessons, currentLevel, nextCategory) {
  return currentLevel === 'Todos' || availableLevels(lessons,nextCategory).includes(currentLevel) ? currentLevel : 'Todos';
}
