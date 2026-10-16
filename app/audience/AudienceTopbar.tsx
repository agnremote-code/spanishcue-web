"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import { useI18n } from "../i18n/LocaleProvider";
import { SpanishCueWordmark } from "../SpanishCueBrand";
import AudienceSwitch from "./AudienceSwitch";
import type { Audience } from "./audiences";

/**
 * Header of the two audience landings: the same brand, selector, language
 * switch and account link as the library header, without the catalog search.
 */
export default function AudienceTopbar({ active, cta, signedIn }: { active: Audience; cta: ReactNode; signedIn: boolean }) {
  const { t } = useI18n();
  return (
    <header className="topbar aud-topbar">
      <div className="topbar-primary">
        <div className="topbar-brand-block">
          <Link className="topbar-brand" href="/">
            <SpanishCueWordmark compact />
          </Link>
        </div>
        <AudienceSwitch active={active} />
        <div className="topbar-actions">
          <LanguageSwitcher className="topbar-language" />
          <a className="topbar-account" href={signedIn ? "/cuenta" : "/ingresar?modo=entrar"}>
            {signedIn ? t("nav.myAccount") : t("nav.logIn")}
          </a>
          {cta}
        </div>
      </div>
    </header>
  );
}
