import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { localLessonPath } from "../../access-policy";
import { conversationFamilyByLessonId } from "../../conversation-families/catalog";
import { conversationLessonHref, resolveConversationLevel } from "../../conversation-families/navigation";
import {
  lessonForResourceSlug,
  relatedResourceLessons,
  resourceDescription,
  resourceLessons,
  resourceLevelLabel,
  resourcePathForLesson,
  resourceSlugForLesson,
  resourceTitle,
  resourceTypeLabel,
} from "../../resource-seo";
import styles from "../resources.module.css";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{level?:string}>;
};

export function generateStaticParams() {
  return resourceLessons.map((lesson) => ({ slug: resourceSlugForLesson(lesson) }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = lessonForResourceSlug(slug);
  if (!lesson) return {};

  const canonical = `https://spanishcue.com${resourcePathForLesson(lesson)}`;
  const title = resourceTitle(lesson);
  const description = resourceDescription(lesson);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      images: [{ url: lesson.image, alt: `${lesson.title} Spanish lesson preview` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [lesson.image],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ResourcePage({ params, searchParams }: ResourcePageProps) {
  const { slug } = await params;
  const lesson = lessonForResourceSlug(slug);
  if (!lesson) notFound();

  const family = conversationFamilyByLessonId.get(lesson.id);
  const selectedLevel = family ? resolveConversationLevel({...family,defaultLevel:lesson.level}, (await searchParams).level) : lesson.level;
  const selectedPreview = family?.previewByLevel[selectedLevel as keyof typeof family.previewByLevel];
  const lessonPath = family ? conversationLessonHref({...lesson,familyId:family.id},selectedLevel)! : localLessonPath(lesson) || "/";
  const related = relatedResourceLessons(lesson);
  const level = family ? selectedLevel : resourceLevelLabel(lesson);
  const typeLabel = resourceTypeLabel(lesson);
  const description = selectedPreview?.explanation
    ? resourceDescription({...lesson, level, displayLevel: level, subtitle: selectedPreview.hook})
    : resourceDescription(lesson);
  const canonical = `https://spanishcue.com${resourcePathForLesson(lesson)}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lesson.title,
    description,
    url: canonical,
    image: `https://spanishcue.com${selectedPreview?.explanation ? selectedPreview.image || lesson.image : lesson.image}`,
    inLanguage: "es",
    educationalLevel: level,
    learningResourceType: typeLabel,
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "teacher",
    },
    provider: {
      "@type": "Organization",
      name: "SPANISHCUE",
      url: "https://spanishcue.com",
    },
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className={styles.shell}>
        <nav className={styles.topbar} aria-label="Resource navigation">
          <Link className={styles.brand} href="/">SPANISHCUE</Link>
          <Link className={styles.backLink} href="/resources">All resources</Link>
        </nav>

        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>{typeLabel} · {level}</p>
            <h1 className={styles.title}>{lesson.title}</h1>
            <p className={styles.subtitle}>{selectedPreview?.hook || lesson.subtitle}</p>
            {family && family.availableLevels.length > 1 && <nav className={styles.levelLinks} aria-label="Preview level">{family.availableLevels.map(item=><Link href={`${resourcePathForLesson(lesson)}?level=${item}`} key={item} aria-current={item===selectedLevel?"page":undefined}>{item}</Link>)}</nav>}
            <div className={styles.meta} aria-label="Lesson details">
              <span className={styles.pill}>{level}</span>
              <span className={styles.pill}>{lesson.category}</span>
              <span className={styles.pill}>{lesson.duration}</span>
              <span className={styles.pill}>Interactive</span>
              <span className={styles.pill}>Screen-share ready</span>
            </div>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href={lessonPath}>Open lesson</Link>
              <Link className={styles.secondaryButton} href="/pricing">Get unlimited access</Link>
            </div>
          </div>

          <div className={styles.previewFrame}>
            <Image
              className={styles.previewImage}
              src={selectedPreview?.image || lesson.image}
              alt={`${lesson.title} interactive Spanish lesson preview`}
              width={960}
              height={720}
              sizes="(max-width: 900px) 100vw, 45vw"
              priority
            />
          </div>
        </section>

        <div className={styles.grid}>
          <div>
            <section className={styles.section}>
              <h2>Ready-to-teach {level} Spanish lesson</h2>
              <p>
                This {level} {lesson.category.toLowerCase()} resource is built for Spanish teachers
                who want a coherent lesson they can open in the browser and teach without rebuilding
                the material from scratch.
              </p>
              <p>{selectedPreview?.explanation || lesson.explanation}</p>
            </section>

            <section className={styles.section}>
              <h2>What students will practise</h2>
              <ul>
                {(family?.variants[selectedLevel as keyof typeof family.variants]?.communicativeObjectives || lesson.goals).map((goal) => <li key={goal}>{goal}</li>)}
              </ul>
            </section>

            <section className={styles.section}>
              <h2>How to use it</h2>
              <p>
                Open the lesson, share your screen online or display it in person, and move through
                the prepared sequence. The resource is designed to keep the visual prompt, teaching
                objective and speaking flow in one place.
              </p>
            </section>

            {selectedPreview?.warmup || lesson.warmup ? (
              <section className={styles.section}>
                <h2>Warm-up prompt</h2>
                <p>{selectedPreview?.warmup || lesson.warmup}</p>
              </section>
            ) : null}

            {related.length ? (
              <section className={styles.section}>
                <h2>Related Spanish teaching resources</h2>
                <div className={styles.relatedGrid}>
                  {related.map((item) => (
                    <Link className={styles.resourceCard} href={resourcePathForLesson(item)} key={item.id}>
                      <p className={styles.cardMeta}>
                        {resourceLevelLabel(item)} · {item.category}
                      </p>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <aside className={styles.sideCard}>
            <h2>Teach it now</h2>
            <p>
              The full interactive lesson stays inside SpanishCue. This public page gives teachers
              enough context to evaluate the resource without exposing the complete lesson.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href={lessonPath}>Open lesson</Link>
              <Link className={styles.textLink} href="/spanish-teacher-resources">Explore SpanishCue</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
