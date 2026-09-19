import { env } from "cloudflare:workers";
import { accountIdFromHeaders } from "../../access-policy";
import { lessons } from "../../lesson-catalog";
import { listLessonProgress, saveLessonProgress } from "../../../db/progress";

export const dynamic = "force-dynamic";

function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  return Boolean(origin && origin === new URL(request.url).origin);
}

export async function GET(request: Request) {
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return Response.json({ error: "Iniciá sesión." }, { status: 401 });
  try {
    return Response.json(
      { items: await listLessonProgress(env.DB, userId) },
      { headers: { "cache-control": "private, no-store" } },
    );
  } catch {
    return Response.json({ error: "No pudimos cargar tu progreso." }, { status: 503 });
  }
}

export async function PUT(request: Request) {
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return Response.json({ error: "Iniciá sesión." }, { status: 401 });
  if (!sameOrigin(request)) return Response.json({ error: "Origen no válido." }, { status: 403 });
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return Response.json({ error: "Formato no válido." }, { status: 415 });
  }
  const raw = await request.text();
  if (raw.length > 1024) return Response.json({ error: "Solicitud demasiado grande." }, { status: 413 });
  let lessonId = 0;
  let progressPercent = 0;
  try {
    const parsed = JSON.parse(raw) as { lessonId?: unknown; progressPercent?: unknown };
    if (Number.isInteger(parsed.lessonId)) lessonId = Number(parsed.lessonId);
    if (Number.isInteger(parsed.progressPercent)) progressPercent = Number(parsed.progressPercent);
  } catch {
    return Response.json({ error: "Formato no válido." }, { status: 400 });
  }
  if (!lessons.some((lesson) => lesson.id === lessonId) || progressPercent < 0 || progressPercent > 100) {
    return Response.json({ error: "Progreso no válido." }, { status: 400 });
  }
  try {
    await saveLessonProgress(env.DB, userId, lessonId, progressPercent);
    return Response.json({ ok: true }, { headers: { "cache-control": "private, no-store" } });
  } catch {
    return Response.json({ error: "No pudimos guardar tu progreso." }, { status: 503 });
  }
}
