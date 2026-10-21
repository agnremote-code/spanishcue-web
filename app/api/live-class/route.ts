import { env } from "cloudflare:workers";
import { getUserSessionFromHeaders } from "../../access-policy";
import { getLiveLessonInfo } from "../../grammar-classroom/live/registry";
import { savedProgress } from "../../grammar-classroom/live/progress";
import { deleteLiveClassSession, getLiveClassSession, listLiveClassSessions, listStudentLiveClasses, LIVE_CLASS_SAVED_LIMIT, ownsStudent, parseLiveClassSaved, putLiveClassSession } from "../../../db/live-class";

export const dynamic = "force-dynamic";

const noStore = { "cache-control": "private, no-store" };
const fail = (error: string, status: number) => Response.json({ error }, { status, headers: noStore });

function teacherId(request: Request): string | null {
  const session = getUserSessionFromHeaders(request.headers);
  return session.isAuthenticated && session.userId ? session.userId : null;
}

function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  return Boolean(origin && origin === new URL(request.url).origin);
}

/** 3D conversation worlds that save «Con profesor» progress here too (36: Estados Unidos 3D, 210: México 3D). */
const WORLD_LESSON_IDS = new Set([36, 32, 33, 210, 227, 228, 229]);
const lessonIdOf = (value: unknown) => (Number.isInteger(Number(value)) && (getLiveLessonInfo(Number(value)) || WORLD_LESSON_IDS.has(Number(value))) ? Number(value) : null);
const studentIdOf = (value: unknown) => (typeof value === "string" && /^[A-Za-z0-9-]{1,64}$/.test(value) ? value : null);

/** `?lessonId=N` lists the students with a saved session; `&studentId=S` returns that student's saved class.
 *  `?studentId=S` alone measures that student's saved classes for the course map (completed activities only). */
export async function GET(request: Request) {
  const owner = teacherId(request);
  if (!owner) return fail("Inicia sesión.", 401);
  const params = new URL(request.url).searchParams;
  if (params.get("lessonId") === null && params.get("studentId") !== null) {
    const id = studentIdOf(params.get("studentId"));
    try {
      if (!id || !(await ownsStudent(env.DB, owner, id))) return fail("Alumno no encontrado.", 404);
      const progress = (await listStudentLiveClasses(env.DB, owner, id)).flatMap(({ lessonId, saved, updatedAt }) => {
        const lesson = getLiveLessonInfo(lessonId);
        return lesson ? [{ lessonId, ...savedProgress(saved.results, lesson.sections), updatedAt }] : [];
      });
      return Response.json({ progress }, { headers: noStore });
    } catch {
      return fail("No pudimos cargar el progreso de este alumno.", 503);
    }
  }
  const lessonId = lessonIdOf(params.get("lessonId"));
  if (lessonId === null) return fail("Clase no válida.", 400);
  const studentId = params.get("studentId");
  try {
    if (studentId === null) return Response.json({ sessions: await listLiveClassSessions(env.DB, owner, lessonId) }, { headers: noStore });
    const id = studentIdOf(studentId);
    if (!id || !(await ownsStudent(env.DB, owner, id))) return fail("Alumno no encontrado.", 404);
    return Response.json({ session: await getLiveClassSession(env.DB, owner, id, lessonId) }, { headers: noStore });
  } catch {
    return fail("No pudimos cargar la clase de este alumno.", 503);
  }
}

/** Body `{ lessonId, studentId, saved }` replaces that student's saved class. */
export async function PUT(request: Request) {
  const owner = teacherId(request);
  if (!owner) return fail("Inicia sesión.", 401);
  if (!sameOrigin(request)) return fail("Origen no válido.", 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return fail("Formato no válido.", 415);
  const raw = await request.text();
  if (raw.length > LIVE_CLASS_SAVED_LIMIT + 512) return fail("Solicitud demasiado grande.", 413);
  let lessonId: number | null = null, studentId: string | null = null, saved = null;
  try {
    const body = JSON.parse(raw) as Record<string, unknown>;
    lessonId = lessonIdOf(body.lessonId);
    studentId = studentIdOf(body.studentId);
    saved = parseLiveClassSaved(body.saved);
  } catch { /* handled below */ }
  if (lessonId === null || !studentId || !saved) return fail("Formato no válido.", 400);
  try {
    if (!(await ownsStudent(env.DB, owner, studentId))) return fail("Alumno no encontrado.", 404);
    const updatedAt = await putLiveClassSession(env.DB, owner, studentId, lessonId, saved);
    return Response.json({ ok: true, updatedAt }, { headers: noStore });
  } catch {
    return fail("No pudimos guardar la clase.", 503);
  }
}

/** `?lessonId=N&studentId=S` starts that student's class from zero. */
export async function DELETE(request: Request) {
  const owner = teacherId(request);
  if (!owner) return fail("Inicia sesión.", 401);
  if (!sameOrigin(request)) return fail("Origen no válido.", 403);
  const params = new URL(request.url).searchParams;
  const lessonId = lessonIdOf(params.get("lessonId"));
  const studentId = studentIdOf(params.get("studentId"));
  if (lessonId === null || !studentId) return fail("Formato no válido.", 400);
  try {
    if (!(await ownsStudent(env.DB, owner, studentId))) return fail("Alumno no encontrado.", 404);
    await deleteLiveClassSession(env.DB, owner, studentId, lessonId);
    return Response.json({ ok: true }, { headers: noStore });
  } catch {
    return fail("No pudimos reiniciar la clase.", 503);
  }
}
