"use client";

import { useEffect } from "react";
import "./audience-switch.css";
import { useI18n } from "../i18n/LocaleProvider";
import { rememberAudience, trackMarketingEvent } from "../marketing/analytics";
import { STUDENT_LANDING_PATH, TEACHER_HOME_PATH, type Audience } from "./audiences";

/**
 * Teach / Learn selector for the main header. Two plain links (no modal, no
 * login, no change to existing routes); the current experience is marked with
 * aria-current so assistive technology announces it.
 */
export default function AudienceSwitch({ active, className = "" }: { active: Audience; className?: string }) {
  const { locale } = useI18n();
  const es = locale === "es";
  useEffect(() => rememberAudience(active), [active]);
  const options: { audience: Audience; href: string; label: string }[] = [
    { audience: "teacher", href: TEACHER_HOME_PATH, label: es ? "Enseñar español" : "Teach Spanish" },
    { audience: "student", href: STUDENT_LANDING_PATH, label: es ? "Aprender español" : "Learn Spanish" },
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
              rememberAudience(option.audience);
              trackMarketingEvent(option.audience === "teacher" ? "audience_selected_teacher" : "audience_selected_student", { placement: "header" });
            }}
          >
            <span className={`audience-switch-dot ${option.audience}`} aria-hidden="true" />
            {option.label}
          </a>
        );
      })}
    </nav>
  );
}
