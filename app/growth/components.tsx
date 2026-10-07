import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CONVERSATION_HUB_PATH, CONVERSATION_QUESTIONS_PATH, conversationLevels, type ConversationLevel } from "./conversation-levels";
import type { LessonCardData } from "./lessons";
import { breadcrumbSchema, serializeJsonLd, type BreadcrumbItem } from "./schema";
import styles from "./growth.module.css";

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />;
}

const topLinks: { href: string; label: string }[] = [
  { href: "/spanish-teacher-resources", label: "Teacher resources" },
  { href: CONVERSATION_HUB_PATH, label: "Conversation activities" },
  { href: CONVERSATION_QUESTIONS_PATH, label: "Conversation questions" },
  { href: "/resources", label: "Lesson library" },
  { href: "/guides", label: "Guides" },
  { href: "/pricing", label: "Pricing" },
];

export function GrowthTopbar({ current }: { current?: string }) {
  return (
    <header className={styles.topbar}>
      <Link className={styles.brand} href="/" aria-label="SPANISHCUE home">SPANISHCUE</Link>
      <nav className={styles.topnav} aria-label="Teacher resources navigation">
        {topLinks.map((link) => (
          <Link href={link.href} key={link.href} aria-current={link.href === current ? "page" : undefined}>{link.label}</Link>
        ))}
      </nav>
    </header>
  );
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <ol>
          {items.map((item, index) => (
            <li key={item.href}>
              {index === items.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.href}>{item.name}</Link>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function LevelStrip({ current }: { current?: ConversationLevel }) {
  return (
    <ul className={styles.levelStrip} aria-label="Conversation activities by CEFR level">
      {conversationLevels.map((level) => (
        <li key={level.slug}>
          <Link href={level.path} aria-current={current?.slug === level.slug ? "page" : undefined}>
            {level.code} <small>{level.name}</small>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function LessonGrid({ lessons, levelLabel }: { lessons: LessonCardData[]; levelLabel?: string }) {
  if (!lessons.length) return null;
  return (
    <div className={styles.lessonGrid}>
      {lessons.map((lesson) => (
        <Link className={styles.lessonCard} href={lesson.href} key={lesson.id}>
          <Image src={lesson.image} alt={`${lesson.title} interactive Spanish lesson preview`} width={720} height={450} loading="lazy" sizes="(max-width: 640px) 92vw, (max-width: 1000px) 45vw, 25vw" />
          <div className={styles.lessonBody}>
            <div className={styles.lessonMeta}>
              <span className={lesson.free ? styles.badgeFree : styles.badgePro}>{lesson.free ? "FREE" : "PRO"}</span>
              <span>{levelLabel ?? lesson.level} · {lesson.category} · {lesson.duration}</span>
            </div>
            <h3>{lesson.title}</h3>
            <p>{lesson.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function CtaBand({ title, copy, primary, secondary }: { title: string; copy: string; primary: { href: string; label: string }; secondary?: { href: string; label: string } }) {
  return (
    <section className={styles.ctaBand} aria-label="Try SpanishCue">
      <h2>{title}</h2>
      <p>{copy}</p>
      <div className={styles.heroActions}>
        <Link className={styles.primaryButton} href={primary.href}>{primary.label}</Link>
        {secondary ? <Link className={styles.secondaryButton} href={secondary.href}>{secondary.label}</Link> : null}
      </div>
    </section>
  );
}

export function Section({ id, title, intro, children }: { id?: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className={styles.section} id={id} aria-labelledby={id ? `${id}-title` : undefined}>
      <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
      {intro ? <p className={styles.sectionIntro}>{intro}</p> : null}
      {children}
    </section>
  );
}

export function Faq({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className={styles.faq}>
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
