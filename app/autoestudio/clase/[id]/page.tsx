import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { fullAccessFromHeaders, isFreeLesson, signedInFromHeaders } from "../../../access-policy";
import Classroom from "../../../grammar-classroom/Classroom";
import { getClassroomLesson } from "../../../grammar-classroom/lessons";
import { PREVIEW_STAGES, previewOf } from "../../../grammar-classroom/preview";
import { lessons } from "../../../lesson-catalog";
import { isAutoestudioModulePath } from "../../access";
import { categories } from "../../errors/categorize";
import { previewableLessonIds } from "../../errors/catalog";
import { shareSessionFromHeaders } from "../../session-display";

export const dynamic = "force-dynamic";

function find(idParam: string) {
  const id = Number(idParam);
  if (!Number.isInteger(id) || !previewableLessonIds.includes(id)) return null;
  const catalog = lessons.find((lesson) => lesson.id === id && lesson.category === "Gramática");
  const lesson = getClassroomLesson(id);
  return catalog && lesson && catalog.path ? { catalog, lesson } : null;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const found = find((await params).id);
  return found ? { title: `Demostración: ${found.catalog.title} | SPANISHCUE`, robots: { index: false, follow: false } } : { robots: { index: false, follow: false } };
}

export default async function Page({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ de?: string; tema?: string }> }) {
  const [{ id }, query] = await Promise.all([params, searchParams]);
  const found = find(id);
  if (!found) notFound();
  const h = await headers();
  // Anyone who can already open the class never sees a lock.
  if (fullAccessFromHeaders(h) || isFreeLesson(found.catalog.id)) redirect(found.catalog.path!);
  const session = shareSessionFromHeaders(h);
  const from = typeof query.de === "string" ? query.de : "";
  const modulePath = /^[abc][12]-(0[1-9]|1\d|20)$/.test(from) ? `/autoestudio/${from.slice(0, 2)}/semana-${Number(from.slice(3))}` : null;
  const returnTo = modulePath && isAutoestudioModulePath(modulePath) ? modulePath : session ? `/autoestudio/${session.level}` : "/autoestudio";
  const category = typeof query.tema === "string" && query.tema in categories ? query.tema : "gramatica-general";
  return (
    <Classroom
      lesson={previewOf(found.lesson)}
      preview={{
        lessonPath: found.catalog.path!,
        lessonTitle: found.catalog.title,
        returnTo,
        signedIn: signedInFromHeaders(h),
        unlocked: PREVIEW_STAGES,
        track: session ? { lessonId: found.catalog.id, category, moduleId: from } : null,
      }}
    />
  );
}
