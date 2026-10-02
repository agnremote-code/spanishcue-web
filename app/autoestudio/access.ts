/**
 * Route/access ledger for Autoestudio. Imported by the Worker, so it must stay
 * tiny and must never import curriculum content.
 *
 * The landing (/autoestudio) and level maps (/autoestudio/a1 …) are public:
 * they show titles and goals only. Module pages carry the lesson bodies and are
 * PRO, except the free preview weeks listed here.
 */
export const AUTOESTUDIO_ROOT = "/autoestudio";

export const freeAutoestudioModules: ReadonlySet<string> = new Set([
  "/autoestudio/a1/semana-1",
  "/autoestudio/a1/semana-2",
  "/autoestudio/a2/semana-1",
  "/autoestudio/b1/semana-1",
  "/autoestudio/b2/semana-1",
  "/autoestudio/c1/semana-1",
  "/autoestudio/c2/semana-1",
]);

const modulePattern = /^\/autoestudio\/(a1|a2|b1|b2|c1|c2)\/semana-([1-9]\d?)$/;

/** Strips a trailing slash and the `.rsc` payload suffix used by client navigation. */
export function normalizeAutoestudioPath(pathname: string): string {
  const withoutRsc = pathname.endsWith(".rsc") ? pathname.slice(0, -4) : pathname;
  return withoutRsc.length > 1 ? withoutRsc.replace(/\/+$/, "") : withoutRsc;
}

export function isAutoestudioPath(pathname: string): boolean {
  const normalized = normalizeAutoestudioPath(pathname);
  return normalized === AUTOESTUDIO_ROOT || normalized.startsWith(`${AUTOESTUDIO_ROOT}/`);
}

export function isAutoestudioModulePath(pathname: string): boolean {
  return modulePattern.test(normalizeAutoestudioPath(pathname));
}

export function isFreeAutoestudioModule(pathname: string): boolean {
  return freeAutoestudioModules.has(normalizeAutoestudioPath(pathname));
}

/** True when the path is a module body that needs full (PRO) access. */
export function isPremiumAutoestudioPath(pathname: string): boolean {
  return isAutoestudioModulePath(pathname) && !isFreeAutoestudioModule(pathname);
}

export function moduleSlug(week: number): string {
  return `semana-${week}`;
}

export function modulePath(level: string, week: number): string {
  return `${AUTOESTUDIO_ROOT}/${level}/${moduleSlug(week)}`;
}
