import { emptyProgress, parseProgress, type ModuleProgress, type ProgressAdapter, type ProgressState } from './model';

/** Display context only. Authorization always comes from the HttpOnly server cookie. */
export type ShareSession = { passId: string; learnerId: string; level: string; alias: string; revision: number };
export type SyncStatus = 'loading' | 'saved' | 'syncing' | 'offline' | 'session-changed';
type StorageLike = Pick<Storage, 'getItem' | 'setItem'>;
export type ServerProgressAdapter = ProgressAdapter & {
  flush(): Promise<void>;
  getStatus(): SyncStatus;
  onStatus(listener: (status: SyncStatus) => void): () => void;
  dispose(): void;
};

function structural(progress: ModuleProgress): ModuleProgress {
  return { startedAt: progress.startedAt, sections: progress.sections, lastSection: progress.lastSection, completedAt: progress.completedAt, quiz: progress.quiz };
}

/** One adapter is permanently bound to one pass revision: stale tabs cannot retarget it. */
export function createServerProgressAdapter(
  session: ShareSession,
  storage: StorageLike | null,
  fetcher: typeof fetch = fetch,
): ServerProgressAdapter {
  const key = `spanishcue.autoestudio.learner.v1.${session.learnerId}.${session.level}`;
  const pendingKey = `${key}.pending.${session.passId}.${session.revision}`;
  let state = emptyProgress();
  let acknowledged = emptyProgress();
  let status: SyncStatus = 'loading';
  let hydrated = false;
  let disposed = false;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let running: Promise<void> | null = null;
  const listeners = new Set<(value: SyncStatus) => void>();
  const sessionChanged = () => status === 'session-changed';
  const setStatus = (value: SyncStatus) => { status = value; listeners.forEach(listener => listener(value)); };
  const cache = () => { try { storage?.setItem(key, JSON.stringify(state)); } catch { /* Storage is optional. */ } };
  const readCache = () => { try { return parseProgress(JSON.parse(storage?.getItem(key) || 'null')); } catch { return emptyProgress(); } };
  const sameSession = (value: ShareSession | null) => value?.passId === session.passId && value?.learnerId === session.learnerId && value?.revision === session.revision && value?.level === session.level;
  const decode = async (response: Response): Promise<ProgressState> => {
    if ([401, 403, 409].includes(response.status)) { setStatus('session-changed'); throw new Error('La sesión cambió. Abre de nuevo el enlace de tu profe.'); }
    if (!response.ok) throw new Error('No se pudo sincronizar.');
    const data = await response.json() as { session: ShareSession; progress: unknown };
    if (!sameSession(data.session)) { setStatus('session-changed'); throw new Error('La sesión cambió. Abre de nuevo el enlace de tu profe.'); }
    return parseProgress(data.progress);
  };
  const eligible = (id: string) => new RegExp(`^${session.level}-(0[1-9]|1[0-9]|20)$`).test(id);
  const dirty = () => Object.entries(state.modules).filter(([id, value]) => eligible(id) && JSON.stringify(structural(value)) !== JSON.stringify(acknowledged.modules[id] ? structural(acknowledged.modules[id]) : null));
  const persistPending = () => {
    try { storage?.setItem(pendingKey, JSON.stringify({version:1,modules:Object.fromEntries(dirty().map(([id,value])=>[id,structural(value)])),lastModule:state.lastModule})); } catch { /* In-memory retry remains available. */ }
  };
  const flush = async () => {
    if (timer) { clearTimeout(timer); timer = undefined; }
    if (running) return running;
    if (disposed || status === 'session-changed') return;
    running = (async () => {
      try {
        if (!hydrated) {
          acknowledged = await decode(await fetcher('/api/autoestudio/progress', {credentials:'same-origin',cache:'no-store'}));
          hydrated = true;
        }
        while (!disposed) {
          const next = dirty()[0];
          if (!next) { setStatus('saved'); break; }
          const [moduleId, value] = next;
          const sent = structural(value);
          setStatus('syncing');
          await decode(await fetcher('/api/autoestudio/progress', {
            method: 'PUT', credentials: 'same-origin', keepalive: true, headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ passId: session.passId, revision: session.revision, moduleId, progress: sent }),
          }));
          // Track exactly the submitted snapshot. Server may normalize timestamps/merge another device;
          // that must not cause an endless resubmit loop or overwrite a newer local edit.
          acknowledged = { ...acknowledged, modules: { ...acknowledged.modules, [moduleId]: sent } };
          persistPending();
        }
      } catch { if (!sessionChanged()) setStatus('offline'); }
      finally { running = null; }
    })();
    return running;
  };
  return {
    async load() {
      const cached = readCache();
      try {
        const remote = await decode(await fetcher('/api/autoestudio/progress', { credentials: 'same-origin', cache: 'no-store' }));
        acknowledged = remote;
        // Remote history is authoritative; a separate, revision-bound outbox contains
        // only edits this exact learner made while an upload was pending.
        let pending = emptyProgress();
        try { pending = parseProgress(JSON.parse(storage?.getItem(pendingKey) || 'null')); } catch { /* Optional storage. */ }
        const modules = {...remote.modules};
        for (const [id,value] of Object.entries(pending.modules)) {
          if (!eligible(id)) continue;
          modules[id] = {...modules[id],...structural(value),sections:{...modules[id]?.sections,...value.sections},completedAt:modules[id]?.completedAt ?? value.completedAt};
        }
        for (const [id,value] of Object.entries(cached.modules)) {
          if (!eligible(id) || !value.writingDraft) continue;
          modules[id] = {...(modules[id] ?? {startedAt:value.startedAt,sections:{}}),writingDraft:value.writingDraft};
        }
        state = { ...remote, modules, lastModule:pending.lastModule ?? remote.lastModule };
        hydrated = true; setStatus(dirty().length?'syncing':'saved'); cache();
        if (dirty().length) timer=setTimeout(()=>{void flush();},450);
        return state;
      } catch (error) {
        if (status === 'session-changed') throw error;
        state = cached; setStatus('offline');
        // No write is allowed until the session identity has been verified by a successful GET.
        return state;
      }
    },
    save(next) {
      state = next; cache(); persistPending();
      if (!hydrated || disposed || status === 'session-changed' || !dirty().length) return;
      setStatus('syncing');
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => { void flush(); }, 450);
    },
    flush,
    getStatus: () => status,
    onStatus(listener) { listeners.add(listener); return () => { listeners.delete(listener); }; },
    dispose() { disposed = true; if (timer) clearTimeout(timer); listeners.clear(); },
  };
}
