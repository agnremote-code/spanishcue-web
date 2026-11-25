import { CONJUGACION_PATH, verbFromParam, verbPath } from "../conjugacion/verbos";

export const dynamic = "force-dynamic";

/** Search box of /conjugacion (works without JavaScript): opens the verb page, or the hub at its letter. */
export async function GET(request: Request) {
  const raw = (new URL(request.url).searchParams.get("v") ?? "").trim().toLowerCase().slice(0, 40);
  const verb = raw ? verbFromParam(raw) : undefined;
  const letter = raw.normalize("NFD").replace(/[^a-zñ]/g, "").charAt(0);
  const target = verb ? verbPath(verb) : `${CONJUGACION_PATH}${letter ? `?no=${encodeURIComponent(raw)}#letra-${letter}` : ""}`;
  return new Response(null, { status: 302, headers: { location: new URL(target, request.url).toString(), "cache-control": "private, no-store", "x-robots-tag": "noindex" } });
}
