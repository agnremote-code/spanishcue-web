"use client";

import { useI18n } from "./LocaleProvider";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();
  return (
    <div className={`language-switcher ${className}`.trim()} role="group" aria-label={t("language.change")}>
      <button
        type="button"
        className={locale === "es" ? "active" : ""}
        aria-pressed={locale === "es"}
        title={t("language.spanish")}
        onClick={() => setLocale("es")}
      >
        <span aria-hidden="true">🇪🇸</span> ES
      </button>
      <i aria-hidden="true" />
      <button
        type="button"
        className={locale === "en" ? "active" : ""}
        aria-pressed={locale === "en"}
        title={t("language.english")}
        onClick={() => setLocale("en")}
      >
        <span aria-hidden="true">🇺🇸</span> EN
      </button>
    </div>
  );
}
