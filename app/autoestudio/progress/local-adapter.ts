import { emptyProgress, parseProgress, type ProgressAdapter, type ProgressState } from "./model";

export const PROGRESS_STORAGE_KEY = "spanishcue.autoestudio.progress.v1";

type StorageLike = Pick<Storage, "getItem" | "setItem">;

/**
 * Browser persistence for this first release. Progress stays on this device.
 * A future account adapter (D1) can implement the same interface and the UI
 * will not change.
 */
export function createLocalProgressAdapter(storage: StorageLike | null, eventTarget?: Pick<Window, "addEventListener" | "removeEventListener">): ProgressAdapter {
  return {
    load(): ProgressState {
      if (!storage) return emptyProgress();
      try {
        const raw = storage.getItem(PROGRESS_STORAGE_KEY);
        return raw ? parseProgress(JSON.parse(raw)) : emptyProgress();
      } catch {
        return emptyProgress();
      }
    },
    save(state: ProgressState) {
      if (!storage) return;
      try {
        storage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(state));
      } catch {
        // Storage can be full or blocked (private mode). Progress then lives for this visit only.
      }
    },
    subscribe(listener) {
      if (!eventTarget) return () => undefined;
      const handler = (event: Event) => {
        const storageEvent = event as StorageEvent;
        if (storageEvent.key !== PROGRESS_STORAGE_KEY) return;
        try {
          listener(storageEvent.newValue ? parseProgress(JSON.parse(storageEvent.newValue)) : emptyProgress());
        } catch {
          listener(emptyProgress());
        }
      };
      eventTarget.addEventListener("storage", handler);
      return () => eventTarget.removeEventListener("storage", handler);
    },
  };
}
