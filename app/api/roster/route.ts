import { env } from "cloudflare:workers";
import { getUserSessionFromHeaders } from "../../access-policy";
import { linkLearner, listLinks, syncRoster } from "../../../db/roster";

export const dynamic = "force-dynamic";

const noStore = { "cache-control": "private, no-store" };
const idPattern = /^[A-Za-z0-9-]{8,64}$/;
const json = (body: unknown, status = 200) => Response.json(body, { status, headers: noStore });

/** The tracker and Homework both key a teacher by the server-verified account uid. */
function ownerOf(request: Request): string | null {
  const session = getUserSessionFromHeaders(request.headers);
  return session.isAuthenticated && session.userId ? session.userId : null;
}

export async function GET(request: Request) {
  const owner = ownerOf(request);
  if (!owner) return json({ error: "Inicia sesión." }, 401);
  try {
    return json({ links: await listLinks(env.DB, owner) });
  } catch {
    return json({ links: [] });
  }
}

/** POST {action:"sync"} imports named Homework learners; {action:"link",learnerId,studentId} reassigns one. */
export async function POST(request: Request) {
  const owner = ownerOf(request);
  if (!owner) return json({ error: "Inicia sesión." }, 401);
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) return json({ error: "Origen no permitido." }, 403);
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return json({ error: "Solicitud no válida." }, 400); }
  if (body?.action === "sync") {
    const created = await syncRoster(env.DB, owner);
    return json({ created, links: await listLinks(env.DB, owner) });
  }
  if (body?.action === "link" && typeof body.learnerId === "string" && typeof body.studentId === "string" && idPattern.test(body.learnerId) && idPattern.test(body.studentId)) {
    if (!await linkLearner(env.DB, owner, body.learnerId, body.studentId)) return json({ error: "No encontramos ese alumno." }, 404);
    return json({ links: await listLinks(env.DB, owner) });
  }
  return json({ error: "Solicitud no válida." }, 400);
}
