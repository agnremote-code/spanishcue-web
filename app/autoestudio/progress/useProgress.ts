"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createLocalProgressAdapter } from "./local-adapter";
import { emptyProgress, type ProgressAdapter, type ProgressState } from "./model";

function defaultAdapter(): ProgressAdapter {
  if (typeof window === "undefined") return createLocalProgressAdapter(null);
  let storage: Storage | null = null;
  try {
    storage = window.localStorage;
  } catch {
    storage = null;
  }
  return createLocalProgressAdapter(storage, window);
}

/**
 * React binding for the progress adapter. Server render and first client render
 * both start from an empty state (no hydration mismatch); stored progress is
 * loaded right after mount, and `ready` tells the UI when it is real.
 */
export function useProgress(adapterFactory: () => ProgressAdapter = defaultAdapter) {
  const adapterRef = useRef<ProgressAdapter | null>(null);
  const [state, setState] = useState<ProgressState>(emptyProgress);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const adapter = adapterFactory();
    adapterRef.current = adapter;
    // Stored progress is read after mount so server and first client render match.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(adapter.load());
    setReady(true);
    return adapter.subscribe?.((next) => setState(next));
  }, [adapterFactory]);

  const update = useCallback((change: (current: ProgressState) => ProgressState) => {
    setState((current) => {
      const next = change(current);
      if (next !== current) adapterRef.current?.save(next);
      return next;
    });
  }, []);

  return { state, ready, update };
}
