import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, CtaBand, Faq, GrowthFooter, GrowthTopbar, JsonLd, LessonGrid, LevelStrip, Section } from "../growth/components";
import { CONVERSATION_HUB_PATH, CONVERSATION_QUESTIONS_PATH, conversationLevels } from "../growth/conversation-levels";
import { conversationQuestions, questionCountByLevel } from "../growth/conversation-questions";
import { catalogSummary, lessonCards } from "../growth/lessons";
import { collectionPageSchema } from "../growth/schema";
import { canonicalUrl } from "../seo";
import { socialPreviewImage, socialPreviewUrl } from "../social-preview";
import { teachingGuideBySlug } from "../teaching-guides";
import styles from "../growth/growth.module.css";

const title = "Spanish Conversation Activities by Level (A1–C2) | SPANISHCUE";
const description =
  "Spanish conversation activities for teachers, organised by CEFR level: step-by-step speaking tasks, sentence frames, 150 graded questions and interactive lessons you can open and teach in the browser.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl(CONVERSATION_HUB_PATH) },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(CONVERSATION_HUB_PATH), type: "website", images: [socialPreviewImage] },
  twitter: { card: "summary_large_image", title, description, images: [socialPreviewUrl] },
};

const guideSlugs = [
  "spanish-conversation-activities-by-level",
  "conversation-only-spanish-lesson",
  "spanish-lesson-planning-45-minutes",
  "how-to-teach-spanish-online",
];

const principles = [
  {
    title: "A real decision, not a topic",
    copy: "«Habla de tu ciudad» produces a list. «Elige el barrio para esta persona y defiéndelo» produces an argument. Every task below gives the learner something to decide, compare, rank, negotiate or solve.",
  },
  {
    title: "Support that is visible, then removed",
    copy: "Options, sentence frames and verbs stay on screen while the learner needs them and disappear in the last round. The learner should end the activity saying more with less help than at the start.",
  },
  {
    title: "A frame that repeats, content that changes",
    copy: "The same structure with new choices, roles or constraints produces far more speaking than a new activity every five minutes. Repetition with a purpose is what makes a conversation lesson efficient.",
  },
  {
    title: "A closing production",
    copy: "Each activity ends with the learner producing something longer than their first answer: a plan said aloud, a story retold, a position revised. That final turn is where the learning becomes visible.",
  },
];

export default function ConversationActivitiesHub() {
  const freeLessons = lessonCards([210, 36]);
  const libraryLessons = lessonCards([223, 207, 137, 109, 125, 128, 136, 226]);
  const guides = guideSlugs.map((slug) => teachingGuideBySlug.get(slug)).filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));
  const schema = collectionPageSchema({
    pathname: CONVERSATION_HUB_PATH,
    name: title,
    description,
    about: ["Spanish conversation activities", "Spanish speaking activities", "CEFR levels", "Spanish teaching resources"],
    items: [
      ...conversationLevels.map((level) => ({ name: `${level.code} Spanish conversation activities`, href: level.path })),
      { name: "Spanish conversation questions by level", href: CONVERSATION_QUESTIONS_PATH },
    ],
  });

  return (
    <>
      <main className={styles.page}>
        <JsonLd data={schema} />
        <div className={styles.shell}>
          <GrowthTopbar current={CONVERSATION_HUB_PATH} />
          <Breadcrumbs items={[{ name: "SPANISHCUE", href: "/" }, { name: "Teacher resources", href: "/spanish-teacher-resources" }, { name: "Conversation activities", href: CONVERSATION_HUB_PATH }]} />

          <section className={styles.hero}>
            <p className={styles.eyebrow}>Spanish conversation activities · A1–C2</p>
            <h1 className={styles.title}>Spanish Conversation Activities by Level: Ready-to-Teach Speaking Tasks From A1 to C2</h1>
            <p className={styles.lead}>
              Conversation tasks with steps, sentence frames and graded questions for every CEFR level, connected to interactive SpanishCue lessons
              you can open in the browser and teach without building another slide deck.
            </p>
            <LevelStrip />
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="/mexico">Try a free conversation lesson</Link>
              <Link className={styles.secondaryButton} href={CONVERSATION_QUESTIONS_PATH}>Open the question bank</Link>
            </div>
          </section>

          <Section id="levels" title="Choose the level" intro="Each level page has four complete activities with steps, the language they recycle, teacher tips, sentence frames, common mistakes and the SpanishCue lessons that fit that level.">
            <div className={styles.cardGrid}>
              {conversationLevels.map((level) => (
                <Link className={styles.levelCard} href={level.path} key={level.slug}>
                  <b>{level.code} · {level.name}</b>
                  <span>{level.summary}</span>
                  <em>Example: {level.sampleQuestions[0].es}</em>
                </Link>
              ))}
            </div>
          </Section>

          <Section id="method" title="What makes a Spanish conversation activity work" intro="The level changes the support and the linguistic demand, not only the topic. These four principles run through every activity on this site.">
            <div className={styles.twoCol}>
              {principles.map((item) => (
                <article className={styles.panel} key={item.title}>
                  <h3>{item.title}</h3>
                  <p className={styles.sectionIntro} style={{ marginBottom: 0 }}>{item.copy}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="free" title="Free interactive conversation lessons" intro="Two complete conversation worlds are free, without a card. Open one, share your screen and teach it today.">
            <LessonGrid lessons={freeLessons} />
          </Section>

          <Section id="library" title={`Conversation worlds in the SpanishCue library (${catalogSummary.conversation} in total)`} intro="Visual scenarios, choice games, negotiations, dilemmas and night-time cities, each with authored objectives per level. PRO lessons open a public preview page first.">
            <LessonGrid lessons={libraryLessons} />
            <p className={styles.footnote}>
              Browse all {catalogSummary.total} lessons in the <Link className={styles.textLink} href="/resources">lesson library</Link>, or see <Link className={styles.textLink} href="/pricing">what PRO includes</Link>.
            </p>
          </Section>

          <Section id="questions" title={`${conversationQuestions.length} Spanish conversation questions, graded by level`} intro="A question bank in the tú form with an English gloss for teachers, filterable by level and topic. Use it for warm-ups, follow-ups and closing production.">
            <ul className={styles.linkList}>
              {conversationLevels.map((level) => (
                <li key={level.slug}>
                  <Link href={`${CONVERSATION_QUESTIONS_PATH}#${level.slug}`}>{level.code} questions</Link> <span>· {questionCountByLevel[level.code]} questions · {level.name}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="guides" title="Teaching guides for conversation classes" intro="Longer reads on planning, structure and running a conversation-only lesson.">
            <ul className={styles.linkList}>
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link href={`/guides/${guide.slug}`}>{guide.title}</Link> <span>· {guide.readingTime}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="faq" title="Common questions">
            <Faq
              items={[
                {
                  question: "What is a Spanish conversation activity?",
                  answer: "A speaking task with a goal, a decision and visible support: the learner has to choose, compare, narrate, negotiate or advise in Spanish, and the teacher knows what language the task recycles and how it ends.",
                },
                {
                  question: "How do I choose conversation activities by CEFR level?",
                  answer: "Match the language operation, not the topic. A1 chooses between options, A2 solves small problems, B1 narrates and justifies, B2 argues and negotiates with nuance, C1 sustains structured positions, C2 works on style and precision.",
                },
                {
                  question: "Who are these activities for?",
                  answer: "Teachers and online tutors working with teenagers and adults, one-to-one or in small groups. Every activity has been written for screen sharing as well as the physical classroom.",
                },
              ]}
            />
          </Section>

          <CtaBand
            title="Open a complete conversation lesson before you decide anything."
            copy="MÉXICO and ESTADOS UNIDOS are full interactive conversation worlds, free and without a card. PRO unlocks the whole library for one monthly Founder price."
            primary={{ href: "/mexico", label: "Open MÉXICO free" }}
            secondary={{ href: "/pricing", label: "See Free and PRO" }}
          />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
