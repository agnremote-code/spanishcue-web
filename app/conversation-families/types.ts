export const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
export type CEFRLevel = typeof CEFR_LEVELS[number];
export type LevelPreview = { hook: string; image?: string };
/** Public summaries only. Never put a question bank in this manifest. */
export type ConversationVariantSummary = {
  level: CEFRLevel;
  lessonId: number;
  communicativeObjectives: string[];
  expectedFunctions: string[];
  contentRef: string;
};
export type ConversationLessonFamily = {
  id: string;
  slug: string;
  title: string;
  category: 'Conversación';
  collection: string;
  canonicalLessonId: number;
  canonicalPath: string;
  legacyLessonIds: number[];
  access: 'free' | 'pro';
  concept: string;
  availableLevels: CEFRLevel[];
  defaultLevel: CEFRLevel;
  preview: { image: string; hook: string };
  previewByLevel: Partial<Record<CEFRLevel, LevelPreview>>;
  visualWorld: { renderer: string; sharedAssets: string[] };
  variants: Partial<Record<CEFRLevel, ConversationVariantSummary>>;
};
/** Private content stays with its engine. T is its existing, typed activity data. */
export type ConversationLevelVariant<T> = {
  level: CEFRLevel;
  communicativeObjectives: string[];
  expectedFunctions: string[];
  pcicFocus?: string[];
  activities: T;
  teacherNotes: string[];
  closingConversation: string[];
};
