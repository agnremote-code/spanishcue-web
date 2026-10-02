import { normalizeAutoestudioPath } from '../app/autoestudio/access';
import type { ShareSession } from '../app/autoestudio/progress/server-adapter';
/** Erase every browser-controlled pass header, then add only verified display scope. */
export function applyShareHeaders(headers: Headers, session: ShareSession | null): void {
  for (const key of [...headers.keys()]) if (key.toLowerCase().startsWith('x-autoestudio-')) headers.delete(key);
  if (!session) return;
  headers.set('x-autoestudio-pass-id',session.passId);
  headers.set('x-autoestudio-learner-id',session.learnerId);
  headers.set('x-autoestudio-level',session.level);
  headers.set('x-autoestudio-revision',String(session.revision));
  headers.set('x-autoestudio-alias',encodeURIComponent(session.alias));
}
export function shareAllowsPath(path: string, session: ShareSession | null): boolean {
  const match=/^\/autoestudio\/(a1|a2|b1|b2|c1|c2)\/semana-([1-9]|1\d|20)$/.exec(normalizeAutoestudioPath(path));
  return Boolean(session && match && match[1]===session.level);
}
