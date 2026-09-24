import type { Metadata } from "next";
import Link from "next/link";
import {
  teachingGuides,
  type GuideCluster,
  type GuidePillar,
} from "../teaching-guides";
import styles from "./guides.module.css";

export const metadata: Metadata = {
  title: "Spanish Teaching & Tutor Business Guides | SPANISHCUE",
  description:
    "Practical guides for Spanish teachers: lesson planning, grammar, conversation, tutoring platforms, pricing, retention, operations and niche development.",
  alternates: { canonical: "https://spanishcue.com/guides" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Spanish Teaching & Tutor Business Guides",
    description:
      "Teach Spanish more effectively, prepare less, and build a tutoring workflow that can scale.",
    url: "https://spanishcue.com/guides",
    type: "website",
  },
};

const pillarOrder: GuidePillar[] = ["teach-spanish", "tutor-business"];

const pillarCopy: Record<GuidePillar, {
  eyebrow: string;
  title: string;
  description: string;
}> = {
  "teach-spanish": {
    eyebrow: "TEACH SPANISH",
    title: "Teach with clearer structure and less prep.",
    description:
      "Grammar, conversation, listening, pronunciation and teaching-method guides connected to ready-to-teach SpanishCue resources.",
  },
  "tutor-business": {
    eyebrow: "GROW AS A SPANISH TUTOR",
    title: "Build a tutoring workflow that can actually scale.",
    description:
      "Marketplace strategy, pricing, student retention, operations and tutoring niches for teachers building a sustainable online practice.",
  },
};

const clusterOrder: Record<GuidePillar, GuideCluster[]> = {
  "teach-spanish": [
    "grammar",
    "conversation",
    "listening",
    "pronunciation",
    "vocabulary",
    "methodology",
  ],
  "tutor-business": [
    "preply",
    "italki",
    "other-platforms",
    "pricing-business",
    "operations-retention",
    "tutor-niches",
  ],
};

const clusterLabels: Record<GuideCluster, string> = {
  grammar: "Grammar",
  conversation: "Conversation",
  listening: "Listening",
  pronunciation: "Pronunciation",
  vocabulary: "Vocabulary",
  methodology: "Teaching methodology",
  preply: "Preply",
  italki: "italki",
  "other-platforms": "Other tutoring platforms",
  "pricing-business": "Pricing & business",
  "operations-retention": "Operations & retention",
  "tutor-niches": "Tutor niches",
};

export default function GuidesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <nav className={styles.topbar} aria-label="Guide navigation">
          <Link className={styles.brand} href="/">SPANISHCUE</Link>
          <Link className={styles.navLink} href="/resources">Lesson resources</Link>
        </nav>

        <header className={styles.hero}>
          <p className={styles.eyebrow}>SPANISH TEACHER KNOWLEDGE BASE</p>
          <h1>Teach better. Prepare less. Build a stronger tutoring business.</h1>
          <p className={styles.lead}>
            Practical guidance for the classroom and the business around it. Use the teaching
            guides to solve lesson problems, or the tutor-business guides to improve profiles,
            pricing, retention, scheduling and specialization.
          </p>
        </header>

        {pillarOrder.map((pillar) => {
          const pillarGuides = teachingGuides.filter((guide) => guide.pillar === pillar);
          if (!pillarGuides.length) return null;
          const copy = pillarCopy[pillar];

          return (
            <section className={styles.pillar} key={pillar}>
              <header className={styles.pillarHeader}>
                <p className={styles.eyebrow}>{copy.eyebrow}</p>
                <h2>{copy.title}</h2>
                <p>{copy.description}</p>
              </header>

              {clusterOrder[pillar].map((cluster) => {
                const clusterGuides = pillarGuides.filter((guide) => guide.cluster === cluster);
                if (!clusterGuides.length) return null;

                return (
                  <section className={styles.cluster} key={cluster}>
                    <div className={styles.clusterHeader}>
                      <h3>{clusterLabels[cluster]}</h3>
                      <span>{clusterGuides.length} guides</span>
                    </div>
                    <div className={styles.grid}>
                      {clusterGuides.map((guide) => (
                        <article className={styles.card} key={guide.slug}>
                          <p className={styles.cardEyebrow}>{guide.eyebrow} · {guide.readingTime}</p>
                          <h2><Link href={"/guides/" + guide.slug}>{guide.title}</Link></h2>
                          <p>{guide.description}</p>
                          <Link className={styles.readLink} href={"/guides/" + guide.slug}>Read guide →</Link>
                        </article>
                      ))}
                    </div>
                  </section>
                );
              })}
            </section>
          );
        })}

        <section className={styles.cta}>
          <div>
            <p className={styles.eyebrow}>FROM METHOD TO MATERIAL</p>
            <h2>Need the lesson, not another article?</h2>
            <p>Browse the public index of SpanishCue lessons by level and skill.</p>
          </div>
          <Link className={styles.button} href="/resources">Browse lesson resources</Link>
        </section>
      </div>
    </main>
  );
}
