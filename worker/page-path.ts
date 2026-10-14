/** `/cuenta.rsc` → `/cuenta`, `/.rsc` → `/` (vinext's client-navigation payload URLs). */
export function pagePathname(pathname: string): string {
  if (!pathname.endsWith(".rsc")) return pathname;
  return pathname.slice(0, -4) || "/";
}

/** The query string without vinext's `_rsc` cache-busting parameter. */
export function pageSearch(url: URL): string {
  const params = new URLSearchParams(url.search);
  params.delete("_rsc");
  const search = params.toString();
  return search ? `?${search}` : "";
}
