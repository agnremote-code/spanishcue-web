import { env } from "cloudflare:workers";
import { accountIdFromHeaders } from "../../access-policy";
import { catalogLessons as lessons } from "../../conversation-families/catalog";
import { addFavorites, FAVORITES_LIMIT, listFavorites, removeFavorite } from "../../../db/favorites";

export const dynamic = "force-dynamic";

const noStore = { "cache-control": "private, no-store" };

function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  return Boolean(origin && origin === new URL(request.url).origin);
}

/** Maps legacy and current ids to the catalog id; unknown ids are dropped. */
function canonicalLessonId(value: unknown): number | null {
  if (!Number.isInteger(value)) return null;
  const id = Number(value);
  return lessons.find((lesson) => lesson.id === id || lesson.legacyLessonIds?.includes(id))?.id ?? null;
}

async function current(userId: string) {
  return Response.json({ favorites: await listFavorites(env.DB, userId) }, { headers: noStore });
}

export async function GET(request: Request) {
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return Response.json({ error: "Inicia sesión." }, { status: 401, headers: noStore });
  try {
    return await current(userId);
  } catch {
    return Response.json({ error: "No pudimos cargar tus favoritos." }, { status: 503, headers: noStore });
  }
}

/** Body `{ lessonIds: number[] }`: adds them (used to save one lesson or import this browser's list). */
export async function POST(request: Request) {
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return Response.json({ error: "Inicia sesión." }, { status: 401, headers: noStore });
  if (!sameOrigin(request)) return Response.json({ error: "Origen no válido." }, { status: 403, headers: noStore });
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return Response.json({ error: "Formato no válido." }, { status: 415, headers: noStore });
  }
  const raw = await request.text();
  if (raw.length > 8192) return Response.json({ error: "Solicitud demasiado grande." }, { status: 413, headers: noStore });
  let ids: number[] = [];
  try {
    const parsed = JSON.parse(raw) as { lessonIds?: unknown };
    if (!Array.isArray(parsed.lessonIds) || parsed.lessonIds.length > FAVORITES_LIMIT) throw new Error();
    ids = [...new Set(parsed.lessonIds.map(canonicalLessonId).filter((id): id is number => id !== null))];
  } catch {
    return Response.json({ error: "Formato no válido." }, { status: 400, headers: noStore });
  }
  try {
    await addFavorites(env.DB, userId, ids);
    return await current(userId);
  } catch {
    return Response.json({ error: "No pudimos guardar el favorito." }, { status: 503, headers: noStore });
  }
}

/** `?lessonId=N` removes one favorite. */
export async function DELETE(request: Request) {
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return Response.json({ error: "Inicia sesión." }, { status: 401, headers: noStore });
  if (!sameOrigin(request)) return Response.json({ error: "Origen no válido." }, { status: 403, headers: noStore });
  const lessonId = canonicalLessonId(Number(new URL(request.url).searchParams.get("lessonId")));
  if (lessonId === null) return Response.json({ error: "Clase no válida." }, { status: 400, headers: noStore });
  try {
    await removeFavorite(env.DB, userId, lessonId);
    return await current(userId);
  } catch {
    return Response.json({ error: "No pudimos quitar el favorito." }, { status: 503, headers: noStore });
  }
}
