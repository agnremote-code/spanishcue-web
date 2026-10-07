import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SpanishCueFooter } from "../../SpanishCueBrand";
import { Breadcrumbs, CtaBand, Faq, GrowthTopbar, JsonLd, LessonGrid, LevelStrip, Section } from "../../growth/components";
import {
  CONVERSATION_HUB_PATH,
  CONVERSATION_QUESTIONS_PATH,
  adjacentLevels,
  conversationLevelBySlug,
  conversationLevels,
  type ConversationLevelSlug,
} from "../../growth/conversation-levels";
import { lessonCards } from "../../growth/lessons";
import { webPageSchema } from "../../growth/schema";
import { canonicalUrl } from "../../seo";
import { socialPreviewImage, socialPreviewUrl } from "../../social-preview";
import { teachingGuideBySlug } from "../../teaching-guides";
import styles from "../../growth/growth.module.css";

type LevelPageProps = { params: Promise<{ level: string }> };

export function generateStaticParams() {
  return conversationLevels.map((level) => ({ level: level.slug }));
}

export async function generateMetadata({ params }: LevelPageProps): Promise<Metadata> {
  const { level: slug } = await params;
  const level = conversationLevelBySlug.get(slug as ConversationLevelSlug);
  if (!level) return {};
  return {
    title: level.title,
    description: level.description,
    alternates: { canonical: canonicalUrl(level.path) },
    robots: { index: true, follow: true },
    openGraph: { title: level.title, description: level.description, url: canonicalUrl(level.path), type: "article", images: [socialPreviewImage] },
    twitter: { card: "summary_large_image", title: level.title, description: level.description, images: [socialPreviewUrl] },
  };
}

export default async function ConversationLevelPage({ params }: LevelPageProps) {
  const { level: slug } = await params;
  const level = conversationLevelBySlug.get(slug as ConversationLevelSlug);
  if (!level) notFound();

  const lessons = lessonCards(level.lessonIds);
  const companions = lessonCards(level.companionLessonIds);
  const guides = level.guideSlugs.map((guideSlug) => teachingGuideBySlug.get(guideSlug)).filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));
  const { previous, next } = adjacentLevels(level);
  const schema = webPageSchema({
    pathname: level.path,
    name: level.title,
    description: level.description,
    educationalLevel: level.code,
    about: [`${level.code} Spanish conversation activities`, "Spanish speaking activities", "Spanish teaching resources"],
  });

  return (
    <>
      <main className={styles.page}>
        <JsonLd data={schema} />
        <div className={styles.shell}>
          <GrowthTopbar current={CONVERSATION_HUB_PATH} />
          <Breadcrumbs
            items={[
              { name: "SPANISHCUE", href: "/" },
              { name: "Teacher resources", href: "/spanish-teacher-resources" },
              { name: "Conversation activities", href: CONVERSATION_HUB_PATH },
              { name: `${level.code} · ${level.name}`, href: level.path },
            ]}
          />

          <section className={styles.hero}>
            <p className={styles.eyebrow}>{level.eyebrow} · Spanish conversation activities</p>
            <h1 className={styles.title}>{level.h1}</h1>
            <p className={styles.lead}>{level.summary}</p>
            <LevelStrip current={level} />
          </section>

          <section className={`${styles.section} ${styles.prose}`} aria-label={`About ${level.code} conversation`}>
            {level.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <div className={styles.twoCol}>
            <article className={styles.panel}>
              <h3>What {level.code} learners can do in conversation</h3>
              <ul>{level.canDo.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className={styles.panel}>
              <h3>How to design {level.code} conversation tasks</h3>
              <ul>{level.design.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>

          <Section id="activities" title={`Four ready-to-use ${level.code} Spanish conversation activities`} intro="Each activity lists its steps, the language it recycles and one tip from the classroom. Combine two of them with a warm-up for a full conversation lesson.">
            <div className={styles.activities}>
              {level.activities.map((activity, index) => (
                <article className={styles.activity} key={activity.name} id={`activity-${index + 1}`}>
                  <div className={styles.activityHead}>
                    <h3>{index + 1}. {activity.name}</h3>
                    <span>{activity.minutes} min · {activity.format}</span>
                  </div>
                  <p className={styles.activityGoal}>Goal: {activity.goal}</p>
                  <ol>{activity.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                  <div className={styles.activityFoot}>
                    <div><b>Language:</b> {activity.language}</div>
                    <div><b>Teacher tip:</b> {activity.teacherTip}</div>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <div className={styles.twoCol}>
            <article className={styles.panel}>
              <h3>Sentence frames to keep on screen</h3>
              {level.scaffolds.map((scaffold) => (
                <div className={styles.scaffold} key={scaffold.es}>
                  <b lang="es">{scaffold.es}</b>
                  <span>{scaffold.en}</span>
                </div>
              ))}
            </article>
            <article className={styles.panel}>
              <h3>Common mistakes when teaching {level.code} conversation</h3>
              <ul>{level.pitfalls.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>

          <Section id="questions" title={`${level.sampleQuestions.length} ${level.code} Spanish conversation questions`} intro={`Questions in the tú form with an English gloss. The full bank has more ${level.code} questions filterable by topic.`}>
            <ul className={styles.questionList}>
              {level.sampleQuestions.map((question) => (
                <li className={styles.question} key={question.es}>
                  <b lang="es">{question.es}</b>
                  <span>{question.en}</span>
                </li>
              ))}
            </ul>
            <p className={styles.footnote}>
              <Link className={styles.textLink} href={`${CONVERSATION_QUESTIONS_PATH}#${level.slug}`}>See all {level.code} questions in the question bank</Link>
            </p>
          </Section>

          <Section id="lessons" title={`Interactive ${level.code} Spanish conversation lessons`} intro={`SpanishCue conversation worlds with a ${level.code} version: authored objectives, scaffolding and a closing production for this level. Free lessons open directly; PRO lessons open a public preview page.`}>
            <LessonGrid lessons={lessons} />
          </Section>

          {companions.length ? (
            <Section id="companions" title={`Grammar, listening and vocabulary at ${level.code}`} intro="Lessons from other collections that pair well with the conversation activities above.">
              <LessonGrid lessons={companions} />
            </Section>
          ) : null}

          <Section id="guides" title="Related teaching guides">
            <ul className={styles.linkList}>
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link href={`/guides/${guide.slug}`}>{guide.title}</Link> <span>· {guide.readingTime}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="faq" title={`Questions teachers ask about ${level.code} conversation`}>
            <Faq items={level.faq} />
          </Section>

          <nav className={styles.pager} aria-label="Other levels">
            {previous ? <Link href={previous.path}>← {previous.code} {previous.name} conversation activities</Link> : <Link href={CONVERSATION_HUB_PATH}>← All conversation activities</Link>}
            {next ? <Link href={next.path}>{next.code} {next.name} conversation activities →</Link> : <Link href={CONVERSATION_HUB_PATH}>All conversation activities →</Link>}
          </nav>

          <CtaBand
            title={`Teach a complete ${level.code} conversation lesson today.`}
            copy="Open a free SpanishCue conversation world, share your screen and run it with the activities above. PRO unlocks every level of every world."
            primary={{ href: lessons.find((lesson) => lesson.free)?.href ?? "/mexico", label: "Open a free conversation lesson" }}
            secondary={{ href: "/pricing", label: "See Free and PRO" }}
          />
        </div>
      </main>
      <SpanishCueFooter />
    </>
  );
}
