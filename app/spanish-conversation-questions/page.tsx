import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, CtaBand, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../growth/components";
import { CONVERSATION_HUB_PATH, CONVERSATION_QUESTIONS_PATH, conversationLevels } from "../growth/conversation-levels";
import { conversationQuestions, questionCountByLevel, questionTopics } from "../growth/conversation-questions";
import { webPageSchema } from "../growth/schema";
import { canonicalUrl } from "../seo";
import { socialPreviewImage, socialPreviewUrl } from "../social-preview";
import QuestionBank from "./QuestionBank";
import styles from "../growth/growth.module.css";

const total = conversationQuestions.length;
const title = `${total} Spanish Conversation Questions by Level (A1–C2) | SPANISHCUE`;
const description =
  `${total} Spanish conversation questions for teachers, graded from A1 to C2 and tagged by topic, in the tú form with an English gloss. Filter by level and topic, copy a question, use it in class today.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl(CONVERSATION_QUESTIONS_PATH) },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(CONVERSATION_QUESTIONS_PATH), type: "website", images: [socialPreviewImage] },
  twitter: { card: "summary_large_image", title, description, images: [socialPreviewUrl] },
};

export default function ConversationQuestionsPage() {
  const schema = webPageSchema({
    pathname: CONVERSATION_QUESTIONS_PATH,
    name: title,
    description,
    about: ["Spanish conversation questions", "Spanish speaking prompts", "CEFR levels"],
  });
  return (
    <>
      <main className={styles.page}>
        <JsonLd data={schema} />
        <div className={styles.shell}>
          <GrowthTopbar current={CONVERSATION_QUESTIONS_PATH} />
          <Breadcrumbs
            items={[
              { name: "SPANISHCUE", href: "/" },
              { name: "Teacher resources", href: "/spanish-teacher-resources" },
              { name: "Conversation activities", href: CONVERSATION_HUB_PATH },
              { name: "Conversation questions", href: CONVERSATION_QUESTIONS_PATH },
            ]}
          />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Question bank · A1–C2</p>
            <h1 className={styles.title}>{total} Spanish Conversation Questions by Level, From A1 to C2</h1>
            <p className={styles.lead}>
              Graded questions in the tú form, each with an English gloss for teachers. Beginners get concrete questions about routines and preferences;
              advanced learners get hypotheses, nuance and language itself. Filter by level and topic, then copy the question into your lesson.
            </p>
            <ul className={styles.levelStrip} aria-label="Jump to a level">
              {conversationLevels.map((level) => (
                <li key={level.slug}><a href={`#${level.slug}`}>{level.code} <small>{questionCountByLevel[level.code]}</small></a></li>
              ))}
            </ul>
          </section>

          <QuestionBank
            questions={conversationQuestions}
            levels={conversationLevels.map((level) => ({ code: level.code, slug: level.slug, name: level.name }))}
            topics={questionTopics}
          />

          <Section id="how-to-use" title="How to use conversation questions in class" intro="Questions are the cheapest speaking material there is, and the easiest to waste. Four habits make them work.">
            <div className={styles.prose}>
              <ul>
                <li><b>Pick three, not thirty.</b> One question for the warm-up, one for the main exchange, one for the closing production. Depth beats coverage.</li>
                <li><b>Follow up before moving on.</b> «¿Por qué?», «¿Y qué pasó después?», «¿Siempre o solo a veces?». The second question produces more language than the first.</li>
                <li><b>Match the operation to the level.</b> An A2 learner can answer a B2 question badly and feel discouraged. The level tag tells you what grammar the question quietly demands.</li>
                <li><b>Turn the best answer into a task.</b> If a question produces a strong opinion, let the learner rank, compare or defend it with one of the <Link className={styles.textLink} href={CONVERSATION_HUB_PATH}>conversation activities by level</Link>.</li>
              </ul>
            </div>
          </Section>

          <Section id="by-level" title="Build the whole conversation lesson around the questions" intro="Every level page pairs its questions with four structured activities, sentence frames and interactive SpanishCue lessons.">
            <ul className={styles.linkList}>
              {conversationLevels.map((level) => (
                <li key={level.slug}>
                  <Link href={level.path}>{level.code} Spanish conversation activities</Link> <span>· {level.summary}</span>
                </li>
              ))}
            </ul>
          </Section>

          <CtaBand
            title="Questions start the conversation. A visual world keeps it going."
            copy="SpanishCue conversation lessons give learners scenarios, decisions and consequences to talk about, with authored versions for each level. Two of them are free."
            primary={{ href: "/mexico", label: "Open a free conversation lesson" }}
            secondary={{ href: CONVERSATION_HUB_PATH, label: "Browse activities by level" }}
          />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
