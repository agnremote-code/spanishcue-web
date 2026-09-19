import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { fullAccessFromHeaders, isFreeLesson } from "../../access-policy";
import { lessons } from "../../lesson-catalog";
import MoodTenseDisclosure from "../../verbal-system/MoodTenseDisclosure";
import VerbalPosition from "../../verbal-system/VerbalPosition";
import GrammarStep from "../../grammar-steps/GrammarStep";
import { localeFromHeaders } from "../../i18n/messages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const lesson = lessons.find((item) => String(item.id) === id);
  if (!lesson || lesson.path || lesson.special) return {};
  const title = `${lesson.title} · ${lesson.level} | SPANISHCUE`;
  const description = lesson.subtitle;
  const url = `https://spanishcue.com/clase/${lesson.id}`;
  const locale = localeFromHeaders(await headers());
  const canonical = locale === "es" ? url : `${url}?lang=en`;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { es: url, en: `${url}?lang=en`, "x-default": url },
    },
    openGraph: { title, description, url: canonical, images: [lesson.image] },
    robots: isFreeLesson(lesson.id)
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lesson = lessons.find((item) => String(item.id) === id);
  if (!lesson || lesson.path || lesson.special) notFound();

  const requestHeaders = await headers();
  if (!isFreeLesson(lesson.id) && !fullAccessFromHeaders(requestHeaders)) {
    redirect(`/acceso?returnTo=${encodeURIComponent(`/clase/${id}`)}`);
  }

  return (
    <div className="teacher-app">
      <main className="teacher-main" style={{ maxWidth: 960 }}>
        <Link href="/">← Biblioteca</Link>
        <section className="teacher-intro" style={{ margin: "30px 0" }}>
          <p>
            {lesson.level} · {lesson.category} · {lesson.duration}
          </p>
          <h1 style={{ fontSize: "clamp(32px,5vw,52px)" }}>{lesson.title}</h1>
          <div>{lesson.subtitle}</div>
        </section>
        {lesson.category === "Gramática" ? (
          <div className="grammar-step-stack">
            <GrammarStep
              number="01"
              eyebrow="INICIO"
              title="Objetivos y activación"
              description="Abrí para decidir desde dónde empezar."
            >
              <section className="teaching-section">
                <h2>Objetivos de la clase</h2>
                <ul>
                  {lesson.goals.map((goal) => (
                    <li key={goal}>{goal}</li>
                  ))}
                </ul>
                <h2>Para empezar</h2>
                <p>{lesson.warmup}</p>
              </section>
            </GrammarStep>
            {lesson.id === 3 && <MoodTenseDisclosure />}
            <GrammarStep
              number="02"
              eyebrow="IDEA Y ESTRUCTURA"
              title="¿Qué es y cómo funciona?"
              description="La explicación central y su lugar en el sistema verbal."
            >
              <section className="teaching-section">
                {lesson.id === 3 && (
                  <VerbalPosition
                    items={["presente"]}
                    context="El voseo elige la persona «vos». No es un modo ni un tiempo aparte: «hablás», «comés» y «vivís» están en presente de indicativo."
                  />
                )}
                <p>{lesson.explanation}</p>
              </section>
            </GrammarStep>
            <GrammarStep
              number="03"
              eyebrow="PRÁCTICA"
              title="Práctica guiada"
              description="Resolvé una actividad por vez."
            >
              <section className="teaching-section">
                {lesson.practice.map((item, index) => (
                  <details key={item}>
                    <summary>Actividad {index + 1}</summary>
                    <p>{item}</p>
                  </details>
                ))}
              </section>
            </GrammarStep>
            <GrammarStep
              number="04"
              eyebrow="PRODUCCIÓN"
              title="Conversación"
              description="Usá la estructura para hablar."
            >
              <section className="teaching-section">
                {lesson.speaking.map((item, index) => (
                  <details key={item}>
                    <summary>Ronda {index + 1}</summary>
                    <p>{item}</p>
                  </details>
                ))}
              </section>
            </GrammarStep>
            <GrammarStep number="05" eyebrow="CIERRE" title="Para seguir">
              <section className="teaching-section">
                <p>{lesson.homework}</p>
              </section>
            </GrammarStep>
          </div>
        ) : (
          <>
            <section className="teaching-section">
              <h2>Objetivos de la clase</h2>
              <ul>
                {lesson.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </section>
            <section className="teaching-section">
              <h2>01 · Para empezar</h2>
              <p>{lesson.warmup}</p>
            </section>
            <section className="teaching-section">
              <h2>02 · La idea clave</h2>
              <p>{lesson.explanation}</p>
            </section>
            <section className="teaching-section">
              <h2>03 · Práctica guiada</h2>
              {lesson.practice.map((item, index) => (
                <details key={item}>
                  <summary>Actividad {index + 1}</summary>
                  <p>{item}</p>
                </details>
              ))}
            </section>
            <section className="teaching-section">
              <h2>04 · A conversar</h2>
              {lesson.speaking.map((item, index) => (
                <details key={item}>
                  <summary>Ronda {index + 1}</summary>
                  <p>{item}</p>
                </details>
              ))}
            </section>
            <section className="teaching-section">
              <h2>05 · Para seguir</h2>
              <p>{lesson.homework}</p>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
