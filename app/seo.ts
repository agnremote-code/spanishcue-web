import type { Locale } from "./i18n/messages";

const origin = "https://spanishcue.com";

export function localizedUrl(pathname: string, locale: Locale): string {
  const url = new URL(pathname, origin);
  if (locale === "en") url.searchParams.set("lang", "en");
  return url.toString();
}

export function isSearchPrivatePath(pathname: string): boolean {
  return pathname === "/ingresar"
    || pathname === "/cuenta"
    || pathname === "/acceso"
    || pathname === "/pro"
    || pathname.startsWith("/pro/")
    || pathname === "/admin"
    || pathname.startsWith("/api/");
}
