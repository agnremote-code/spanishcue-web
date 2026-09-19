"use client";

import LanguageSwitcher from "./i18n/LanguageSwitcher";
import Link from "next/link";
import { useI18n } from "./i18n/LocaleProvider";

export default function ErrorScreen({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useI18n();
  return (
    <main className="pro-result">
      <LanguageSwitcher className="pro-result-language" />
      <img src="/brand/mascot/portrait.webp" alt="" width="512" height="512" />
      <span>SPANISHCUE</span>
      <h1>{t("error.genericTitle")}</h1>
      <p>{t("error.genericCopy")}</p>
      <button className="pro-success-button" type="button" onClick={reset}>{t("common.tryAgain")} →</button>
      <Link className="pro-secondary" href="/">{t("common.backToLibrary")}</Link>
    </main>
  );
}
