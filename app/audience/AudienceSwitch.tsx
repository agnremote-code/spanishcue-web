"use client";

import { useEffect } from "react";
import "./audience-switch.css";
import { useI18n } from "../i18n/LocaleProvider";
import { rememberAudience, trackMarketingEvent } from "../marketing/analytics";
import { ACADEMY_LANDING_PATH, TEACHER_HOME_PATH, type Audience } from "./audiences";

/**
 * Teach / Learn selector for the main header. Two plain links (no modal, no
 * login, no change to existing routes); the current experience is marked with
 * aria-current so assistive technology announces it.
 */
export default function AudienceSwitch({ active, className = "" }: { active: Audience; className?: string }) {
  const { locale } = useI18n();
  const es = locale === "es";
  useEffect(() => { if (active !== "academy") rememberAudience(active); }, [active]);
  const options: { audience: Audience; href: string; label: string }[] = [
    { audience: "academy", href: ACADEMY_LANDING_PATH, label: es ? "Soy academia" : "For schools" },
    { audience: "teacher", href: TEACHER_HOME_PATH, label: es ? "Soy profesor" : "For teachers" },
  ];
  return (
    <nav className={`audience-switch ${className}`.trim()} aria-label={es ? "Elige tu experiencia" : "Choose your experience"}>
      {options.map((option) => {
        const current = option.audience === active;
        return (
          <a
            key={option.audience}
            href={option.href}
            className={current ? "active" : undefined}
            aria-current={current ? "true" : undefined}
            onClick={() => {
              if (option.audience !== "academy") rememberAudience(option.audience);
              trackMarketingEvent(option.audience === "teacher" ? "audience_selected_teacher" : "cta_click", { placement: option.audience === "academy" ? "header_academy" : "header" });
            }}
          >
            <svg className="audience-switch-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">{option.audience === 'academy' ? <><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M6 12v6h12v-6M9 14v4m6-4v4M3 21h18"/></> : <><circle cx="9" cy="7" r="3"/><path d="M3 20v-3a6 6 0 0 1 12 0v3m2-15h4v12h-4m0-8h4"/></>}</svg>
            {option.label}
          </a>
        );
      })}
    </nav>
  );
}
