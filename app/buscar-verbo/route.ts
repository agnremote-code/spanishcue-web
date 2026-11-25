import { CONJUGACION_PATH, verbFromParam, verbPath } from "../conjugacion/verbos";
import { SPANISH_VERBS_PATH, verbPathEn } from "../conjugacion/verbos-en";

export const dynamic = "force-dynamic";

/** Search box of /conjugacion (works without JavaScript): opens the verb page, or the hub at its letter. */
export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const en = params.get("lang") === "en";
  const raw = (params.get("v") ?? "").trim().toLowerCase().slice(0, 40);
  const verb = raw ? verbFromParam(raw) : undefined;
  const letter = raw.normalize("NFD").replace(/[^a-zñ]/g, "").charAt(0);
  const hub = en ? SPANISH_VERBS_PATH : CONJUGACION_PATH;
  const target = verb ? (en ? verbPathEn(verb) : verbPath(verb)) : `${hub}${letter ? `?no=${encodeURIComponent(raw)}#letra-${letter}` : ""}`;
  return new Response(null, { status: 302, headers: { location: new URL(target, request.url).toString(), "cache-control": "private, no-store", "x-robots-tag": "noindex" } });
}
