/** Combine all facets; changing one selection must never clear the other. */
export function filterLessons(lessons, { level = 'Todos', category = 'Todas', query = '' } = {}) {
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const search = normalize(query.trim());
  const filtered = lessons.filter(lesson =>
    (level === 'Todos' || lesson.level === level || lesson.levels?.includes(level)) &&
    (category === 'Todas' || lesson.category === category) &&
    normalize(`${lesson.title} ${lesson.subtitle} ${lesson.tag} ${(lesson.searchAliases || []).join(' ')}`).includes(search)
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
  return ['A1','A2','B1','B2','C1','C2'].filter(level => present.has(level));
}

/** Return the exact lesson collection opened by a category/family action. */
export function familyLessonsForCategory(
  lessons,
  { category = 'Todas', conversationMode = 'all', grammarMode = 'general' } = {},
) {
  if (category === 'Todas') {
    return lessons.filter(lesson => !lesson.countryCollection && !lesson.verbalSystem);
  }
  if (category === 'Gramática') {
    if (grammarMode === 'all') {
      return lessons.filter(lesson => lesson.category === 'Gramática');
    }
    return lessons.filter(lesson =>
      lesson.category === 'Gramática' &&
      (grammarMode === 'system' ? lesson.verbalSystem : !lesson.verbalSystem)
    );
  }
  if (category !== 'Conversación') return lessons;
  if (conversationMode === 'all') {
    return lessons.filter(lesson => lesson.category === 'Conversación');
  }
  if (conversationMode === 'countries') {
    return lessons.filter(lesson => lesson.category === 'Conversación' && lesson.countryCollection)
      .sort((a,b) => (a.countrySequence ?? Number.MAX_SAFE_INTEGER) - (b.countrySequence ?? Number.MAX_SAFE_INTEGER));
  }
  const conversationLessons = lessons.filter(
    lesson => lesson.category === 'Conversación' && !lesson.countryCollection
  );
  if (conversationMode === 'play') {
    return conversationLessons.filter(lesson => lesson.conversationMode === 'play');
  }
  if (conversationMode === 'boards') {
    return conversationLessons.filter(lesson => lesson.conversationMode === 'boards');
  }
  if (conversationMode === 'worlds') {
    return conversationLessons.filter(
      lesson => lesson.conversationMode !== 'play' && lesson.conversationMode !== 'boards'
    );
  }
  return conversationLessons;
}

/** Build short level shelves for the "Todos" view without changing catalog data. */
export function groupLessonsByLevel(lessons, levels = ['A1','A2','B1','B2','C1','C2'], limit = 4) {
  return levels.flatMap(level => {
    const matching = filterLessons(lessons, { level });
    const selected = [];
    for (const category of ['Gramática','Conversación','Escucha','Fonética','Vocabulario']) {
      const categoryLessons = matching.filter(lesson => lesson.category === category);
      const representative = categoryLessons.find(lesson => lesson.free) || categoryLessons[0];
      if (representative) selected.push(representative);
      if (selected.length === limit) break;
    }
    for (const lesson of matching) {
      if (selected.length === limit) break;
      if (!selected.includes(lesson)) selected.push(lesson);
    }
    return matching.length
      ? [{ level, total: matching.length, lessons: selected }]
      : [];
  });
}

export function levelForCategory(lessons, currentLevel, nextCategory) {
  return currentLevel === 'Todos' || availableLevels(lessons,nextCategory).includes(currentLevel) ? currentLevel : 'Todos';
}
