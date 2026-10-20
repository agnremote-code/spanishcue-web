'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import type { LiveStage } from './types';

/** One checked answer. `first` keeps the first attempt so real mistakes can be reviewed at the end. */
export type Result = { ok: boolean; first: boolean; prompt: string; right: string; stage: number; step: number };
export type Position = { stage: number; step: number };
type Saved = { values: Record<string, unknown>; results: Record<string, Result>; pos?: Position };
export type SyncState = 'local' | 'loading' | 'saving' | 'saved' | 'error';

type Store = {
  loaded: boolean;
  /** Where the learner was last time; offered, never applied automatically. */
  resume?: Position;
  /** Where this scope's saved class stands: in this browser, or in the account for one student. */
  sync: SyncState;
  results: Record<string, Result>;
  get: <T>(key: string, initial: T) => T;
  set: (key: string, value: unknown | ((prev: unknown) => unknown), initial?: unknown) => void;
  record: (id: string, result: Omit<Result, 'first'>) => void;
  savePosition: (pos: Position) => void;
  clear: (prefix?: string) => void;
  /** Forgets everything in this scope, position included (the student starts the class from zero). */
  reset: () => Promise<void>;
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

const remoteUrl = (lessonId: number, studentId: string) => `/api/live-class?lessonId=${lessonId}&studentId=${encodeURIComponent(studentId)}`;

async function readRemote(lessonId: number, studentId: string): Promise<Saved | null> {
  const response = await fetch(remoteUrl(lessonId, studentId), { cache: 'no-store', credentials: 'same-origin' });
  if (!response.ok) throw new Error(String(response.status));
  const body = await response.json() as { session?: { saved?: Partial<Saved> } | null };
  const saved = body.session?.saved;
  return saved ? { values: saved.values ?? {}, results: saved.results ?? {}, pos: saved.pos } : null;
}

async function writeRemote(lessonId: number, studentId: string, saved: Saved) {
  const response = await fetch('/api/live-class', { method: 'PUT', credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ lessonId, studentId, saved }) });
  if (!response.ok) throw new Error(String(response.status));
}

/** Answers, results and position for one lesson: in this browser, or in the teacher's account for one student. */
export function LessonStoreProvider({ lessonId, studentId, children }: { lessonId: number; studentId?: string | null; children: ReactNode }) {
  const [saved, setSaved] = useState<Saved>(empty);
  const [loaded, setLoaded] = useState(false);
  const [resume, setResume] = useState<Position>();
  const [sync, setSync] = useState<SyncState>('local');
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const scope = useRef<string>('');
  const dirty = useRef(false);

  // Read after mount so the server render and the first client render match; a student scope reads the account.
  useEffect(() => {
    const key = studentId ? `${lessonId}:${studentId}` : String(lessonId);
    scope.current = key;
    dirty.current = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoaded(false);
    if (!studentId) {
      const data = read(lessonId);
      setSaved(data);
      setResume(data.pos && (data.pos.stage > 0 || data.pos.step > 0) ? data.pos : undefined);
      setSync('local');
      setLoaded(true);
      return;
    }
    setSync('loading');
    setSaved(empty);
    setResume(undefined);
    readRemote(lessonId, studentId).then(data => {
      if (scope.current !== key) return;
      const next = data ?? empty;
      setSaved(next);
      setResume(next.pos && (next.pos.stage > 0 || next.pos.step > 0) ? next.pos : undefined);
      setSync('saved');
      setLoaded(true);
    }).catch(() => {
      if (scope.current !== key) return;
      setSync('error');
      setLoaded(true);
    });
  }, [lessonId, studentId]);

  useEffect(() => {
    if (!loaded || !dirty.current) return;
    clearTimeout(timer.current);
    const key = scope.current;
    if (!studentId) {
      timer.current = setTimeout(() => {
        try { window.localStorage.setItem(storageKey(lessonId), JSON.stringify(saved)); } catch { /* storage unavailable: the class still works */ }
      }, 250);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSync('saving');
      timer.current = setTimeout(() => {
        writeRemote(lessonId, studentId, saved).then(() => { if (scope.current === key) setSync('saved'); }).catch(() => { if (scope.current === key) setSync('error'); });
      }, 800);
    }
    return () => clearTimeout(timer.current);
  }, [saved, loaded, lessonId, studentId]);

  const change = useCallback((update: (prev: Saved) => Saved) => { dirty.current = true; setSaved(update); }, []);
  const get = useCallback(<T,>(key: string, initial: T) => (key in saved.values ? saved.values[key] as T : initial), [saved.values]);
  const set = useCallback((key: string, value: unknown, initial?: unknown) => change(prev => {
    const before = key in prev.values ? prev.values[key] : initial;
    return { ...prev, values: { ...prev.values, [key]: typeof value === 'function' ? (value as (p: unknown) => unknown)(before) : value } };
  }), [change]);
  const record = useCallback((id: string, result: Omit<Result, 'first'>) => change(prev => {
    const before = prev.results[id];
    return { ...prev, results: { ...prev.results, [id]: { ...result, first: before ? before.first : result.ok } } };
  }), [change]);
  const savePosition = useCallback((pos: Position) => {
    change(prev => ({ ...prev, pos }));
    setResume(undefined);
  }, [change]);
  const clear = useCallback((prefix?: string) => change(prev => {
    if (!prefix) return { values: {}, results: {}, pos: prev.pos };
    const keep = <T,>(record: Record<string, T>) => Object.fromEntries(Object.entries(record).filter(([key]) => !key.startsWith(prefix)));
    return { ...prev, values: keep(prev.values), results: keep(prev.results) };
  }), [change]);
  const reset = useCallback(async () => {
    clearTimeout(timer.current);
    dirty.current = false;
    setSaved(empty);
    setResume(undefined);
    if (!studentId) {
      try { window.localStorage.removeItem(storageKey(lessonId)); } catch { /* nothing to forget */ }
      return;
    }
    setSync('saving');
    try {
      const response = await fetch(remoteUrl(lessonId, studentId), { method: 'DELETE', credentials: 'same-origin' });
      setSync(response.ok ? 'saved' : 'error');
    } catch { setSync('error'); }
  }, [lessonId, studentId]);

  const value = useMemo(() => ({ loaded, resume, sync, results: saved.results, get, set, record, savePosition, clear, reset }), [loaded, resume, sync, saved.results, get, set, record, savePosition, clear, reset]);
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

/** A preference of this browser that must not travel with a student's saved class (which class mode, which student). */
export function usePreference<T extends string>(key: string, initial: T): [T, (next: T) => void] {
  const [value, setValue] = useState<T>(initial);
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(`spanishcue:gramatica:${key}`);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setValue(raw as T);
    } catch { /* no storage: the default stays */ }
  }, [key]);
  const update = useCallback((next: T) => {
    setValue(next);
    try { window.localStorage.setItem(`spanishcue:gramatica:${key}`, next); } catch { /* no storage: the choice lasts this visit */ }
  }, [key]);
  return [value, update];
}

/** Block ids are `stage:step:block`; results add `:item`. */
export const blockId = (stage: LiveStage, step: number, block: number) => `${stage.id}:${step}:${block}`;

export { lessonTargets, progressOf, targets } from './progress';
