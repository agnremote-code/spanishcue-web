"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createLocalProgressAdapter } from "./local-adapter";
import { emptyProgress, type ProgressAdapter, type ProgressState } from "./model";
import { createServerProgressAdapter, type ShareSession, type SyncStatus, type ServerProgressAdapter } from './server-adapter';

function browserStorage(): Storage | null {
  try { return typeof window === 'undefined' ? null : window.localStorage; } catch { return null; }
}
function defaultAdapter(): ProgressAdapter {
  return createLocalProgressAdapter(browserStorage(), typeof window === 'undefined' ? undefined : window);
}

export function useProgress(adapterFactory: () => ProgressAdapter = defaultAdapter) {
  const adapterRef = useRef<ProgressAdapter | null>(null);
  const [state, setState] = useState<ProgressState>(emptyProgress);
  const [ready, setReady] = useState(false);
  const [syncStatus, setSyncStatus] = useState<SyncStatus | null>(null);

  useEffect(() => {
    let active = true;
    const adapter = adapterFactory();
    adapterRef.current = adapter;
    // An identity change resets visible state before loading the new learner.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReady(false);
    setState(emptyProgress());
    const server = 'onStatus' in adapter ? adapter as ServerProgressAdapter : null;
    setSyncStatus(server?.getStatus() ?? null);
    const offStatus = server?.onStatus(value => { if (active) setSyncStatus(value); });
    const load = async () => {
      try { const loaded = await adapter.load(); if (active) { setState(loaded); setReady(true); } }
      catch { if (active) { setState(emptyProgress()); setReady(false); } }
    };
    void load();
    const offState = adapter.subscribe?.(next => { if (active) setState(next); });
    const flush = () => { void server?.flush(); };
    const onHidden = () => { if (document.visibilityState === 'hidden') flush(); };
    window.addEventListener('pagehide',flush);
    window.addEventListener('online',flush);
    document.addEventListener('visibilitychange',onHidden);
    return () => {
      active = false; offState?.(); offStatus?.();
      window.removeEventListener('pagehide',flush);
      window.removeEventListener('online',flush);
      document.removeEventListener('visibilitychange',onHidden);
      flush(); adapter.dispose?.();
    };
  }, [adapterFactory]);

  const update = useCallback((change: (current: ProgressState) => ProgressState) => {
    if (!ready) return;
    setState(current => {
      const next = change(current);
      if (next !== current) adapterRef.current?.save(next);
      return next;
    });
  }, [ready]);
  const retry = useCallback(async () => {
    const adapter = adapterRef.current;
    if (adapter && 'flush' in adapter) await (adapter as ServerProgressAdapter).flush();
  }, []);
  return { state, ready, update, syncStatus, retry };
}

export function useStudyProgress(session?: ShareSession | null) {
  const {passId, learnerId, level, alias, revision} = session ?? {};
  const factory = useCallback(() => passId && learnerId && level && alias && revision !== undefined
    ? createServerProgressAdapter({passId, learnerId, level, alias, revision}, browserStorage())
    : defaultAdapter(), [passId, learnerId, level, alias, revision]);
  return useProgress(factory);
}
