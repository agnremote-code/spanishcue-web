export type BoardLevel = "B1" | "B2";

export type BoardQuestion = {
  id: string;
  category: string;
  prompt: string;
  followUps: readonly [string, string];
  conditionChange?: string;
};

export type BoardFinalQuestion = {
  id: string;
  prompt: string;
};

export type BoardBank = {
  id: string;
  level: BoardLevel;
  title: string;
  subtitle: string;
  categories: readonly string[];
  questions: readonly BoardQuestion[];
  finals: readonly BoardFinalQuestion[];
};

export type BoardSession = {
  version: 1;
  bankId: string;
  selectedCategories: string[];
  queue: string[];
  cursor: number;
  currentId: string | null;
  visited: string[];
  skipped: string[];
  depthById: Record<string, boolean>;
  deepened: boolean;
  exhausted: boolean;
};
