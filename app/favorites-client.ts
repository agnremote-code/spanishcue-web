/** Browser side of account favorites (/api/favorites). Every call resolves to the account's
 *  current list of lesson ids, newest first, or null when the account could not be reached. */
export type AccountFavorite = { lessonId: number; createdAt: number };

const IMPORTED_KEY = "chespanish-favorites-imported";

async function call(init?: RequestInit, query = ""): Promise<AccountFavorite[] | null> {
  try {
    const response = await fetch(`/api/favorites${query}`, {
      cache: "no-store",
      credentials: "same-origin",
      ...init,
      headers: init?.body ? { "content-type": "application/json" } : undefined,
    });
    if (!response.ok) return null;
    const body = (await response.json()) as { favorites?: AccountFavorite[] };
    return Array.isArray(body.favorites) ? body.favorites : null;
  } catch {
    return null;
  }
}

export const loadAccountFavorites = () => call();
export const addAccountFavorites = (lessonIds: number[]) =>
  call({ method: "POST", body: JSON.stringify({ lessonIds }) });
export const removeAccountFavorite = (lessonId: number) =>
  call({ method: "DELETE" }, `?lessonId=${encodeURIComponent(String(lessonId))}`);

/** Favorites saved in this browser before they lived in the account are imported once. */
export async function syncAccountFavorites(localIds: number[]): Promise<AccountFavorite[] | null> {
  let imported = false;
  try { imported = window.localStorage.getItem(IMPORTED_KEY) === "1"; } catch {}
  if (imported || !localIds.length) return loadAccountFavorites();
  const result = await addAccountFavorites(localIds);
  if (result) try { window.localStorage.setItem(IMPORTED_KEY, "1"); } catch {}
  return result;
}
