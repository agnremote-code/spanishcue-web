"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import {
  LOCALE_COOKIE,
  LOCALE_STORAGE_KEY,
  normalizeLocale,
  translate,
  type Locale,
  type MessageKey,
} from "./messages";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: MessageKey, values?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function persistLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; Max-Age=31536000; Path=/; SameSite=Lax`;
  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  document.documentElement.lang = locale;
}

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const locale = initialLocale;

  useEffect(() => {
    document.documentElement.lang = locale;
    const stored = normalizeLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY));
    if (stored && stored !== initialLocale) {
      persistLocale(stored);
      const url = new URL(window.location.href);
      url.searchParams.set("lang", stored);
      window.location.replace(url.toString());
    }
  }, [initialLocale, locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    if (nextLocale === locale) return;
    persistLocale(nextLocale);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLocale);
    window.location.assign(url.toString());
  }, [locale]);

  const t = useCallback(
    (key: MessageKey, values?: Record<string, string | number>) =>
      translate(locale, key, values),
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside LocaleProvider");
  return context;
}
