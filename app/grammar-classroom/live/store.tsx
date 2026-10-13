'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import type { Block, LiveLesson, LiveStage } from './types';

/** One checked answer. `first` keeps the first attempt so real mistakes can be reviewed at the end. */
export type Result = { ok: boolean; first: boolean; prompt: string; right: string; stage: number; step: number };
export type Position = { stage: number; step: number };
type Saved = { values: Record<string, unknown>; results: Record<string, Result>; pos?: Position };

type Store = {
  loaded: boolean;
  /** Where the learner was last time; offered, never applied automatically. */
  resume?: Position;
  results: Record<string, Result>;
  get: <T>(key: string, initial: T) => T;
  set: (key: string, value: unknown | ((prev: unknown) => unknown), initial?: unknown) => void;
  record: (id: string, result: Omit<Result, 'first'>) => void;
  savePosition: (pos: Position) => void;
  clear: (prefix?: string) => void;
};

const empty: Saved = { values: {}, results: {} };
const LessonStore = createContext<Store | null>(null);
const storageKey = (id: number) => `spanishcue:gramatica:${id}:v1`;

function read(id: number): Saved {
  try {
    const raw = window.localStorage.getItem(storageKey(id));
    const parsed = raw ? JSON.parse(raw) as Partial<Saved> : null;
    return parsed && typeof parsed === 'object' ? { values: parsed.values ?? {}, results: parsed.results ?? {}, pos: parsed.pos } : empty;
  } catch { return empty; }
}

/** Answers, results and position for one lesson, kept in this browser only. */
export function LessonStoreProvider({ lessonId, children }: { lessonId: number; children: ReactNode }) {
  const [saved, setSaved] = useState<Saved>(empty);
  const [loaded, setLoaded] = useState(false);
  const [resume, setResume] = useState<Position>();
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Read after mount so the server render and the first client render match.
  useEffect(() => {
    const data = read(lessonId);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSaved(data);
    setResume(data.pos && (data.pos.stage > 0 || data.pos.step > 0) ? data.pos : undefined);
    setLoaded(true);
  }, [lessonId]);

  useEffect(() => {
    if (!loaded) return;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      try { window.localStorage.setItem(storageKey(lessonId), JSON.stringify(saved)); } catch { /* storage unavailable: the class still works */ }
    }, 250);
    return () => clearTimeout(timer.current);
  }, [saved, loaded, lessonId]);

  const get = useCallback(<T,>(key: string, initial: T) => (key in saved.values ? saved.values[key] as T : initial), [saved.values]);
  const set = useCallback((key: string, value: unknown, initial?: unknown) => setSaved(prev => {
    const before = key in prev.values ? prev.values[key] : initial;
    return { ...prev, values: { ...prev.values, [key]: typeof value === 'function' ? (value as (p: unknown) => unknown)(before) : value } };
  }), []);
  const record = useCallback((id: string, result: Omit<Result, 'first'>) => setSaved(prev => {
    const before = prev.results[id];
    return { ...prev, results: { ...prev.results, [id]: { ...result, first: before ? before.first : result.ok } } };
  }), []);
  const savePosition = useCallback((pos: Position) => {
    setSaved(prev => ({ ...prev, pos }));
    setResume(undefined);
  }, []);
  const clear = useCallback((prefix?: string) => setSaved(prev => {
    if (!prefix) return { values: {}, results: {}, pos: prev.pos };
    const keep = <T,>(record: Record<string, T>) => Object.fromEntries(Object.entries(record).filter(([key]) => !key.startsWith(prefix)));
    return { ...prev, values: keep(prev.values), results: keep(prev.results) };
  }), []);

  const value = useMemo(() => ({ loaded, resume, results: saved.results, get, set, record, savePosition, clear }), [loaded, resume, saved.results, get, set, record, savePosition, clear]);
  return <LessonStore.Provider value={value}>{children}</LessonStore.Provider>;
}

export function useStore() {
  const store = useContext(LessonStore);
  if (!store) throw new Error('LessonStoreProvider is missing');
  return store;
}

/** useState that survives navigation and reloads. */
export function useStored<T>(key: string, initial: T): [T, (next: T | ((prev: T) => T)) => void] {
  const { get, set } = useStore();
  const value = get(key, initial);
  const first = useRef(initial);
  const update = useCallback((next: T | ((prev: T) => T)) => set(key, next, first.current), [key, set]);
  return [value, update];
}

/** Block ids are `stage:step:block`; results add `:item`. */
export const blockId = (stage: LiveStage, step: number, block: number) => `${stage.id}:${step}:${block}`;

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
export function progressOf(stage: LiveStage, results: Record<string, Result>) {
  const total = stage.steps.reduce((sum, step) => sum + step.blocks.reduce((n, block) => n + targets(block), 0), 0);
  const done = Object.entries(results).filter(([id, result]) => id.startsWith(`${stage.id}:`) && result.ok).length;
  return { total, done: Math.min(done, total) };
}

export const lessonTargets = (lesson: LiveLesson) => lesson.stages.map(stage => stage.steps.reduce((sum, step) => sum + step.blocks.reduce((n, block) => n + targets(block), 0), 0));
