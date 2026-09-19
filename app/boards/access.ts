const premiumBoardPaths = new Set([
  "/tablero-de-eso-si-hablo",
  "/tablero-no-es-tan-simple",
]);

export function isPremiumBoardPath(pathname: string): boolean {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return premiumBoardPaths.has(normalized);
}
