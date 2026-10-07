import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, CtaBand, Faq, GrowthFooter, GrowthTopbar, JsonLd, LessonGrid, Section } from "../growth/components";
import { CONVERSATION_HUB_PATH, CONVERSATION_QUESTIONS_PATH, conversationLevels } from "../growth/conversation-levels";
import { conversationQuestions } from "../growth/conversation-questions";
import { catalogSummary, freeLessonCards } from "../growth/lessons";
import { collectionPageSchema } from "../growth/schema";
import { canonicalUrl, languageAlternates } from "../seo";
import { socialPreviewImage, socialPreviewUrl } from "../social-preview";
import { teachingGuideBySlug, teachingGuides } from "../teaching-guides";
import styles from "../growth/growth.module.css";

const PATH = "/spanish-teacher-resources";
const title = "Spanish Teacher Resources: Interactive Lessons, Activities and Guides | SPANISHCUE";
const description =
  `Spanish teacher resources in one place: ${catalogSummary.total} ready-to-teach interactive lessons from A1 to C2, conversation activities by level, ${conversationQuestions.length} graded questions and ${teachingGuides.length} teaching guides for teachers and online tutors.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: (() => {
    const languages = languageAlternates(PATH);
    return languages ? { canonical: canonicalUrl(PATH), languages } : { canonical: canonicalUrl(PATH) };
  })(),
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(PATH), type: "website", images: [socialPreviewImage] },
  twitter: { card: "summary_large_image", title, description, images: [socialPreviewUrl] },
};

const skillSections = [
  { name: "Spanish conversation activities", href: CONVERSATION_HUB_PATH, copy: `${catalogSummary.conversation} conversation worlds plus step-by-step activities, sentence frames and questions for every CEFR level.` },
  { name: "Spanish grammar lessons", href: "/spanish-grammar-lessons", copy: `${catalogSummary.grammar} visual grammar worlds and a complete verbal system map, one tense at a time, from A1 to C2.` },
  { name: "Listening activities", href: "/resources", copy: `${catalogSummary.listening} listening worlds with audio, comprehension tasks and a speaking follow-up, two of them free.` },
  { name: "Pronunciation and vocabulary", href: "/resources", copy: `${catalogSummary.pronunciation + catalogSummary.vocabulary} pronunciation and vocabulary lessons, including free sound and word-bank lessons for beginners.` },
];

const teachGuideSlugs = ["spanish-lesson-planning-45-minutes", "how-to-teach-spanish-grammar-communicatively", "spanish-conversation-activities-by-level", "preterite-vs-imperfect-activities"];
const businessGuideSlugs = ["how-to-teach-spanish-online", "teach-spanish-on-preply", "online-spanish-tutor-rates", "first-online-spanish-lesson"];

export default function SpanishTeacherResourcesPage() {
  const freeLessons = freeLessonCards();
  const teachGuides = teachGuideSlugs.map((slug) => teachingGuideBySlug.get(slug)).filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));
  const businessGuides = businessGuideSlugs.map((slug) => teachingGuideBySlug.get(slug)).filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));
  const schema = collectionPageSchema({
    pathname: PATH,
    name: title,
    description,
    about: ["Spanish teacher resources", "Spanish teaching resources", "interactive Spanish lessons", "Spanish conversation activities"],
    items: [
      ...skillSections.map((section) => ({ name: section.name, href: section.href })),
      { name: "Spanish conversation questions by level", href: CONVERSATION_QUESTIONS_PATH },
      { name: "Spanish teaching and tutor business guides", href: "/guides" },
      { name: "Lesson library", href: "/resources" },
    ],
  });

  return (
    <>
      <main className={styles.page}>
        <JsonLd data={schema} />
        <div className={styles.shell}>
          <GrowthTopbar current={PATH} />
          <Breadcrumbs items={[{ name: "SPANISHCUE", href: "/" }, { name: "Teacher resources", href: PATH }]} />

          <section className={styles.hero}>
            <p className={styles.eyebrow}>Spanish teacher resources · A1–C2</p>
            <h1 className={styles.title}>Spanish Teacher Resources: Interactive Lessons, Conversation Activities and Guides</h1>
            <p className={styles.lead}>
              Everything on SpanishCue for teachers and online tutors of Spanish: {catalogSummary.total} ready-to-teach interactive lessons from A1 to C2,
              conversation activities by level, {conversationQuestions.length} graded questions and {teachingGuides.length} teaching guides. Choose a lesson, open it in the browser, teach.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="/free-spanish-lesson">Open a free lesson</Link>
              <Link className={styles.secondaryButton} href="/resources">Browse the lesson library</Link>
            </div>
          </section>

          <Section id="skills" title="Resources by skill" intro="Five collections, each with free lessons you can teach before creating an account.">
            <div className={styles.cardGrid}>
              {skillSections.map((section) => (
                <Link className={styles.levelCard} href={section.href} key={section.name}>
                  <b>{section.name}</b>
                  <span>{section.copy}</span>
                </Link>
              ))}
            </div>
          </Section>

          <Section id="free" title={`${freeLessons.length} free interactive Spanish lessons`} intro="Complete lessons, not demos: grammar, conversation, listening, pronunciation and vocabulary. No card, no download, ready for screen sharing.">
            <LessonGrid lessons={freeLessons} />
          </Section>

          <Section id="levels" title="Conversation activities by CEFR level" intro="Four structured speaking tasks per level with steps, scaffolds, common mistakes and the SpanishCue lessons that fit.">
            <div className={styles.cardGrid}>
              {conversationLevels.map((level) => (
                <Link className={styles.levelCard} href={level.path} key={level.slug}>
                  <b>{level.code} · {level.name}</b>
                  <span>{level.summary}</span>
                </Link>
              ))}
            </div>
            <p className={styles.footnote}>
              Need a prompt right now? Open the <Link className={styles.textLink} href={CONVERSATION_QUESTIONS_PATH}>{conversationQuestions.length} graded conversation questions</Link>.
            </p>
          </Section>

          <Section id="guides" title={`${teachingGuides.length} guides for teaching Spanish and growing as a tutor`} intro="Practical, long-form guides connected to real lessons: planning, grammar, conversation, tutoring platforms, pricing and retention.">
            <div className={styles.twoCol}>
              <article className={styles.panel}>
                <h3>Teach Spanish</h3>
                <ul>{teachGuides.map((guide) => <li key={guide.slug}><Link className={styles.textLink} href={`/guides/${guide.slug}`}>{guide.title}</Link></li>)}</ul>
              </article>
              <article className={styles.panel}>
                <h3>Grow as a Spanish tutor</h3>
                <ul>{businessGuides.map((guide) => <li key={guide.slug}><Link className={styles.textLink} href={`/guides/${guide.slug}`}>{guide.title}</Link></li>)}</ul>
              </article>
            </div>
            <p className={styles.footnote}><Link className={styles.textLink} href="/guides">All teaching guides</Link></p>
          </Section>

          <Section id="self-study" title="A self-study course your students can follow between lessons" intro="Autoestudio is a Spanish-language course from A1 to C2, week by week, with reading, writing, listening and speaking practice. The first weeks are free; teachers can share it with their learners.">
            <p className={styles.footnote}><Link className={styles.textLink} href="/autoestudio">Open Autoestudio (in Spanish)</Link></p>
          </Section>

          <Section id="how" title="How SpanishCue works" intro="Choose. Open. Teach.">
            <div className={styles.twoCol}>
              <article className={styles.panel}><h3>Choose</h3><p className={styles.sectionIntro} style={{ marginBottom: 0 }}>Filter the library by level, collection and objective. Every card tells you what the learner will practise and how long it takes.</p></article>
              <article className={styles.panel}><h3>Open</h3><p className={styles.sectionIntro} style={{ marginBottom: 0 }}>Lessons run in the browser with large prompts, progressive screens and built-in speaking tasks. Nothing to print or rebuild.</p></article>
              <article className={styles.panel}><h3>Teach</h3><p className={styles.sectionIntro} style={{ marginBottom: 0 }}>Share your screen online or project it in class. Free covers {catalogSummary.free} complete lessons; PRO unlocks the whole library for one monthly Founder price.</p></article>
            </div>
          </Section>

          <Section id="faq" title="Common questions from Spanish teachers">
            <Faq
              items={[
                { question: "Are SpanishCue resources worksheets or slides?", answer: "Neither. Each lesson is an interactive web experience with explanation, guided practice and speaking in one sequence. You open it in the browser and teach from it; there is nothing to download." },
                { question: "Which levels and skills are covered?", answer: `A1 to C2 across conversation, grammar, listening, pronunciation and vocabulary: ${catalogSummary.total} lessons today, with authored level versions inside the conversation worlds.` },
                { question: "What is free and what is PRO?", answer: `${catalogSummary.free} complete lessons are free without a card, plus every guide, activity and question on this site. PRO unlocks the full library for a monthly Founder price shown on the pricing page.` },
              ]}
            />
          </Section>

          <CtaBand
            title="Your next Spanish lesson is already built."
            copy="Open a free lesson now, then create a free teacher account to keep your place in the library. Upgrade to PRO only when you want everything."
            primary={{ href: "/free-spanish-lesson", label: "Open a free lesson" }}
            secondary={{ href: "/pricing", label: "Compare Free and PRO" }}
          />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
