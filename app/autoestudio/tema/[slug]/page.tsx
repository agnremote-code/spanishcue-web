import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fullAccessFromHeaders } from "../../../access-policy";
import LiveClassroom from "../../../grammar-classroom/live/LiveClassroom";
import { loadLiveLesson } from "../../../grammar-classroom/live/registry";
import type { LiveLesson } from "../../../grammar-classroom/live/types";
import { shareSessionFromHeaders } from "../../session-display";
import { homeworkTopicBySlug, topicPath } from "../../topics";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const topic = homeworkTopicBySlug((await params).slug);
  return topic
    ? { title: `${topic.title} · Homework ${topic.level.toUpperCase()} | SPANISHCUE`, description: topic.canDo, robots: { index: false, follow: false } }
    : { robots: { index: false, follow: false } };
}

/**
 * A student never follows a link into the teacher library: every course link becomes the way
 * back to Homework. Blocks keep their positions, so saved answers still match the class.
 */
function forHomework(lesson: LiveLesson, returnTo: string): LiveLesson {
  const back = { kind: "link" as const, title: "Tema terminado", text: "Ya terminaste este tema. Puedes repetirlo cuando quieras o volver a tu Homework.", href: returnTo, label: "Volver a Homework" };
  return { ...lesson, stages: lesson.stages.map((stage) => ({ ...stage, steps: stage.steps.map((step) => ({ ...step, blocks: step.blocks.map((block) => (block.kind === "link" ? back : block)) })) })) };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const topic = homeworkTopicBySlug((await params).slug);
  if (!topic) notFound();
  const h = await headers();
  const fullAccess = fullAccessFromHeaders(h);
  const session = shareSessionFromHeaders(h);
  // The Worker already redirects locked requests; this keeps the page fail-closed too.
  if (!fullAccess && !session) {
    return (
      <main className="ae-locked">
        <img src="/brand/mascot/standing-crossed.webp" alt="" width="600" height="900" style={{ display: "block", height: 220, width: "auto", margin: "0 auto 12px" }} />
        <h1>Homework · {topic.title}</h1>
        <p>Abre de nuevo el enlace de tu profe para estudiar este tema.</p>
        <Link href={`/autoestudio/claim?semana=${encodeURIComponent(topicPath(topic.slug))}`}>Continuar</Link>
      </main>
    );
  }
  const lesson = await loadLiveLesson(topic.lessonId);
  if (!lesson) notFound();
  const returnTo = `/autoestudio/${session?.level ?? topic.level}`;
  return <LiveClassroom lesson={forHomework(lesson, returnTo)} homework={{ returnTo, alias: session?.alias }} />;
}
