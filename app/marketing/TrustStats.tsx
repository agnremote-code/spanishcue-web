"use client";
import { useI18n } from "../i18n/LocaleProvider";
import type { MarketingCta } from "./cta-state";
import { MarketingLink } from "./MarketingSections";

/** «Confían en SpanishCue»: a quiet figures bar right under the hero, only for visitors and
 *  accounts without PRO (Ale, 2026-11-03), closed by one value line, three concrete benefits
 *  and the two conversion doors. The figures are the owner's own; never inflate or invent them. */
const VALUES = ["+100", "+20", "+10"] as const;

const copy = {
  es: {
    title: "Confían en SpanishCue",
    stats: [
      "Profesores",
      "Academias",
      "Años logrando que la gente hable y entienda español",
    ],
    pitch: "Tu próxima clase ya está lista. Ábrela, compártela y enseña.",
    benefits: [
      "Gramática de A1 a C2 con teoría, práctica y conversación",
      "Mundos 3D donde tu alumno habla para resolver la escena",
      "Una pantalla para compartir en Zoom, Meet o Preply",
    ],
    actions: "Empezar con SpanishCue",
  },
  en: {
    title: "Trusted by teachers and academies",
    stats: [
      "Teachers",
      "Academies",
      "Years getting people to speak and understand Spanish",
    ],
    pitch: "Your next lesson is already done. Open it, share it and teach.",
    benefits: [
      "Grammar from A1 to C2 with theory, practice and conversation",
      "3D worlds where your student talks to solve the scene",
      "One screen to share on Zoom, Meet or Preply",
    ],
    actions: "Get started with SpanishCue",
  },
} as const;

export default function TrustStats({ primary, primaryLabel, secondary, secondaryLabel }: { primary: MarketingCta; primaryLabel: string; secondary: MarketingCta; secondaryLabel: string }) {
  const { locale } = useI18n();
  const c = copy[locale === "es" ? "es" : "en"];
  return <section className="mk-trust" aria-labelledby="mk-trust-title">
    <h2 id="mk-trust-title">{c.title}</h2>
    <dl>
      {c.stats.map((label, index) => <div key={label}>
        <dt>{label}</dt>
        <dd>{VALUES[index]}</dd>
      </div>)}
    </dl>
    <div className="mk-trust-pitch">
      <p>{c.pitch}</p>
      <ul>{c.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
      <nav aria-label={c.actions}>
        <MarketingLink cta={primary} className="mk-trust-primary" placement="trust_bar">{primaryLabel} →</MarketingLink>
        <MarketingLink cta={secondary} className="mk-trust-secondary" placement="trust_bar_secondary">{secondaryLabel}</MarketingLink>
      </nav>
    </div>
  </section>;
}
