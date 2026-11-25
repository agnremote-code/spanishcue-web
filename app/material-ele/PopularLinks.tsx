import Link from "next/link";
import { GiftPitch, GiftSignupForm } from "../newsletter/GiftSignup";
import { Section } from "../growth/components";
import styles from "../growth/growth.module.css";
import gift from "../newsletter/newsletter.module.css";

/** The Material ELE pages teachers open most (Search Console, 2026-11-25), linked from every bank, exercise and conjugation page. */
const popular = [
  { href: "/material-ele/formatos/comprension-auditiva/a1", label: "Comprensión auditiva A1: audios con preguntas" },
  { href: "/material-ele/formatos/comprension-auditiva/a2", label: "Comprensión auditiva A2: audios con preguntas" },
  { href: "/material-ele/formatos/comprension-auditiva/b1", label: "Comprensión auditiva B1: audios con preguntas" },
  { href: "/material-ele/guia/materiales-para-ensenar-espanol", label: "Materiales para enseñar español: guía para profes" },
  { href: "/material-ele/preguntas-de-conversacion", label: "Preguntas de conversación en español por nivel" },
  { href: "/spanish-conversation-questions", label: "Banco de preguntas de conversación de A1 a C2, con glosa en inglés" },
  { href: "/conjugacion", label: "Conjugación de más de 1.200 verbos" },
  { href: "/indicativo-o-subjuntivo", label: "¿Indicativo o subjuntivo? Ejercicios por expresión" },
  { href: "/indefinido-o-imperfecto", label: "¿Indefinido o imperfecto? Ejercicios por marcador temporal" },
  { href: "/verbos-con-preposicion", label: "Verbos con preposición: soñar con, depender de, pensar en…" },
];

export function ElePopularLinks({ current }: { current?: string }) {
  return (
    <Section title="Lo más usado por los profes">
      <nav className={styles.linkList} aria-label="Material ELE más usado">
        {popular.filter((link) => link.href !== current).map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </nav>
    </Section>
  );
}

/** Inline newsletter signup (same gift offer as the popup) for pages where readers practise. */
export function EleNewsletterInline({ source }: { source: string }) {
  return (
    <section className={gift.card} aria-label="Newsletter de SpanishCue" style={{ margin: "34px 0 0" }}>
      <GiftPitch />
      <img className={gift.mascot} src="/brand/mascot/pointing.webp" alt="" width={140} height={186} loading="lazy" />
      <GiftSignupForm source={source} />
    </section>
  );
}
