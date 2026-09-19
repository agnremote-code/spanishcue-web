"use client";

import LanguageSwitcher from "./i18n/LanguageSwitcher";
import Link from "next/link";
import { useI18n } from "./i18n/LocaleProvider";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <main className="pro-result">
      <LanguageSwitcher className="pro-result-language" />
      <img src="/brand/mascot/portrait.webp" alt="" width="512" height="512" />
      <span>SPANISHCUE</span>
      <h1>{t("error.notFoundTitle")}</h1>
      <p>{t("error.notFoundCopy")}</p>
      <Link className="pro-success-button" href="/">{t("common.backToLibrary")} →</Link>
    </main>
  );
}
