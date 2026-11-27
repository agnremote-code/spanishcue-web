import Link from "next/link";
import { Section } from "../growth/components";
import styles from "../growth/growth.module.css";
import { VerbLinksEn, VerbsFrame, verbsMetadata } from "../spanish-verbs/frame";
import { SPANISH_VERBS_PATH } from "../conjugacion/verbos-en";
import { TOP_VERBS } from "../conjugacion/verbos";
import { HUB_PATH } from "../jugar/worlds.mjs";
import { FREE_LIST_LIMIT, FREE_VERBS, TRAINER_PATH, TRAINER_PATH_EN, VERB_TOTAL, formatCount } from "../practicar-conjugacion/drill";
import VerbTrainer from "../practicar-conjugacion/VerbTrainer";
import "../practicar-conjugacion/trainer.css";

// Copy approved by the owner in the project thread (2026-11-27) before publication.
const title = "Spanish Conjugation Practice: Free Verb Trainer | SpanishCue";
const description = "Practice Spanish verb conjugation one form at a time: pick tenses and verbs, type the answer and get instant feedback. Missed forms come back until they stick. Free, no sign-up.";

export const metadata = verbsMetadata(TRAINER_PATH_EN, title, description);

const faq = [
  { question: "How does the verb trainer work?", answer: "You choose one or more tenses and a group of verbs. You get a verb and a person (for example, pedir · ellos · preterite) and type the form. Feedback is instant: if you miss it, you see the right form with the change highlighted plus the whole tense, and the verb comes back a few questions later." },
  { question: "What is spaced repetition?", answer: "Every form you get right waits longer before it comes back: ten minutes, a day, three days, a week, three weeks. The ones you miss come back right away, so you review exactly what you forget." },
  { question: "Do I need an account?", answer: "No. The trainer is free and saves your progress in this browser." },
  { question: "What's free?", answer: `Present, preterite, imperfect, future, conditional and present perfect with the ${FREE_VERBS.length} most common verbs, and your own lists of up to ${FREE_LIST_LIMIT} verbs. SpanishCue PRO adds the subjunctive, commands, the other compound tenses and all ${formatCount(VERB_TOTAL, ",")} verbs.` },
  { question: "Do accents count?", answer: "Yes by default, because in Spanish an accent changes the word (hablo and habló are different). On a keyboard without accents, use the á é í ó ú ñ buttons or turn off \"Accents count\": the trainer will still flag the missing accent." },
  { question: "Can I use it with my students?", answer: "Yes. Pick your class's tenses and verbs and tap \"Copy a link for your students\". With SpanishCue PRO, students who use your student link get every tense." },
];

export default function SpanishConjugationPractice() {
  return (
    <VerbsFrame
      path={TRAINER_PATH_EN} title={title} description={description} h1="Spanish Verb Trainer"
      kicker="Spanish conjugation practice · Free" crumbs={[{ name: "Verb trainer", href: TRAINER_PATH_EN }]} faq={faq}
      about={["Spanish conjugation practice", "Spanish verb drills", "Spanish irregular verbs", "spaced repetition"]}
      hero={<VerbTrainer locale="en" />}
    >
      <Section title="How it works">
        <ol className="vt-how">
          <li><b>Pick</b> the tenses and verbs: the 30 essentials, the 100 most common, irregulars only or your own list.</li>
          <li><b>Type</b> the form for each person. No multiple choice, so it actually sticks.</li>
          <li><b>Review</b> what you miss: it comes back a few questions later, then less and less often as you get it right.</li>
        </ol>
      </Section>
      <Section title="Tenses" intro="Free: present, preterite, imperfect, future, conditional and present perfect. With SpanishCue PRO you also get the subjunctive, commands and every compound tense.">
        <VerbLinksEn verbs={TOP_VERBS} href={(verb) => `${TRAINER_PATH_EN}?v=${encodeURIComponent(verb)}`} />
        <p className={styles.sectionIntro}><Link className={styles.textLink} href={SPANISH_VERBS_PATH}>Spanish verb conjugation</Link> · <Link className={styles.textLink} href={TRAINER_PATH} hrefLang="es">Entrenador de verbos</Link></p>
      </Section>
      <Section title="On your phone">
        <p className={styles.sectionIntro}>The trainer works on any phone keyboard. To keep it handy next to SpanishCue&apos;s 3D worlds, open <Link className={styles.textLink} href={HUB_PATH}>Play</Link> and add it to your home screen.</p>
      </Section>
    </VerbsFrame>
  );
}
