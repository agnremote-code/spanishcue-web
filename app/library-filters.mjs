/** Combine all facets; changing one selection must never clear the other. */
export function filterLessons(lessons, { level = 'Todos', category = 'Todas', query = '' } = {}) {
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const search = normalize(query.trim());
  return lessons.filter(lesson =>
    (level === 'Todos' || lesson.level === level || lesson.levels?.includes(level)) &&
    (category === 'Todas' || lesson.category === category) &&
    normalize(`${lesson.title} ${lesson.subtitle} ${lesson.tag}`).includes(search)
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
