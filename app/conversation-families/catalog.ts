import { lessons, type Lesson } from '../lesson-catalog';
import { isFreeLesson, localLessonPath } from '../access-policy';
import { CEFR_LEVELS, type CEFRLevel, type ConversationLessonFamily } from './types';
import { validateConversationFamily } from './navigation';
export { resolveConversationLevel, validateConversationFamily, conversationLessonHref } from './navigation';

const groups = [
  { id: 'red-flag-o-no', ids: [207, 208, 209], title: 'Red Flag o No', renderer: 'red-flag' },
  { id: 'la-maquina-que-elimina-cosas', ids: [101, 103], title: 'La máquina que elimina cosas del mundo', renderer: 'machine' },
  { id: 'tu-vida-con-una-regla-absurda', ids: [102, 104], title: 'Tu vida con una regla absurda', renderer: 'rules' },
  { id: 'preguntas-prohibidas', ids: [20, 21], title: 'El Reino de las Preguntas Prohibidas', renderer: 'kingdom' },
  { id: 'lets-talk', ids: [15, 14, 13], title: 'Let’s Talk', renderer: 'talk' },
];
const countryAims: Record<number, Partial<Record<CEFRLevel, string[]>>> = {
  36: { A2: ['Elegir lugares, describir preferencias y planear una visita con razones sencillas'], B1: ['Comparar formas de vida y explicar ventajas e inconvenientes de decisiones en distintos estados'] },
  32: { A1: ['Ubicar lugares, expresar gustos y elegir entre opciones sencillas'], B1: ['Resolver prioridades de viaje y justificar decisiones culturales y cotidianas'] },
  30: { A2: ['Organizar actividades y expresar necesidades en una ruta por Australia'], B1: ['Relacionar turismo y vida local, contrastar consecuencias y proponer alternativas'] },
};
function familyFromSeeds(seeds: Lesson[], group?: typeof groups[number]): ConversationLessonFamily {
  const first = seeds[0];
  const path = localLessonPath(first)!;
  const id = group?.id || path.slice(1).replaceAll('/', '-');
  const levels = CEFR_LEVELS.filter(level => seeds.some(seed => (seed.levels || [seed.level]).includes(level)));
  const access = isFreeLesson(first.id) ? 'free' : 'pro';
  if (seeds.some(seed => (isFreeLesson(seed.id) ? 'free' : 'pro') !== access)) throw new Error(`${id}: mixed entitlement family`);
  const variants = Object.fromEntries(levels.map(level => {
    const seed = seeds.find(seed => (seed.levels || [seed.level]).includes(level))!;
    const objectives = countryAims[seed.id]?.[level] || seed.goals;
    return [level, { level, lessonId: seed.id, communicativeObjectives: objectives, expectedFunctions: objectives, contentRef: `${localLessonPath(seed)}#${level}` }];
  }));
  return validateConversationFamily({
    id, slug: id, title: group?.title || first.title, category: 'Conversación',
    collection: first.countryCollection ? 'Países' : first.collection || (first.conversationMode === 'play' ? 'Modo Play' : first.conversationMode === 'boards' ? 'Tableros' : 'Universos'),
    canonicalLessonId: first.id, canonicalPath: path, legacyLessonIds: seeds.map(seed => seed.id), access,
    concept: first.explanation, availableLevels: levels, defaultLevel: first.level as CEFRLevel,
    preview: { image: first.image, hook: first.subtitle },
    previewByLevel: Object.fromEntries(levels.map(level => {
      const seed = seeds.find(seed => (seed.levels || [seed.level]).includes(level))!;
      return [level, { hook: countryAims[seed.id]?.[level]?.[0] || seed.subtitle, image: seed.image }];
    })),
    visualWorld: { renderer: group?.renderer || `native:${path}`, sharedAssets: [...new Set(seeds.map(seed => seed.image))] },
    variants,
  });
}
const seedById = new Map(lessons.map(lesson => [lesson.id, lesson]));
const grouped = new Set(groups.flatMap(group => group.ids));
export const conversationFamilies = [
  ...groups.map(group => familyFromSeeds(group.ids.map(id => {
    const seed = seedById.get(id);
    if (!seed || seed.category !== 'Conversación') throw new Error(`Missing conversation seed ${id}`);
    return seed;
  }), group)),
  ...lessons.filter(lesson => lesson.category === 'Conversación' && !grouped.has(lesson.id)).map(lesson => familyFromSeeds([lesson])),
];
export const conversationFamilyByLessonId = new Map(conversationFamilies.flatMap(family => family.legacyLessonIds.map(id => [id, family] as const)));
export type ConversationCatalogLesson = Lesson & { familyId?: string; previewByLevel?: ConversationLessonFamily['previewByLevel']; legacyLessonIds?: number[] };
export const catalogLessons: ConversationCatalogLesson[] = lessons.flatMap(lesson => {
  const family = conversationFamilyByLessonId.get(lesson.id);
  if (!family) return [lesson];
  if (family.canonicalLessonId !== lesson.id) return [];
  return [{ ...lesson, title: family.title, familyId: family.id, levels: family.availableLevels,
    displayLevel: family.availableLevels.length > 1 && family.availableLevels.every((level,index) => index === 0 || CEFR_LEVELS.indexOf(level) === CEFR_LEVELS.indexOf(family.availableLevels[index-1]) + 1) ? `${family.availableLevels[0]}–${family.availableLevels.at(-1)}` : family.availableLevels.join(' · '), path: family.canonicalPath,
    previewByLevel: family.previewByLevel, legacyLessonIds: family.legacyLessonIds,
    searchAliases: [...new Set(family.legacyLessonIds.flatMap(id => { const seed = seedById.get(id)!; return [seed.title, ...(seed.searchAliases || [])]; }))],
  }];
});
