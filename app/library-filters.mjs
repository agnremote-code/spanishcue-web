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
