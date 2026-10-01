import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fullAccessFromHeaders } from "../../../access-policy";
import { isFreeAutoestudioModule, modulePath } from "../../access";
import { moduleClips } from "../../curriculum/audio-clips";
import { findModule, neighbours } from "../../curriculum/course";
import { levelMeta } from "../../curriculum/levels";
import { objectiveById } from "../../curriculum/objectives";
import ModulePlayer from "../../ModulePlayer";
import audioManifest from "../../audio-manifest.json";

export async function generateMetadata({ params }: { params: Promise<{ level: string; module: string }> }): Promise<Metadata> {
  const { level, module: slug } = await params;
  const mod = findModule(level, slug);
  if (!mod) return {};
  return {
    title: `${mod.title} · ${mod.level.toUpperCase()} semana ${mod.week} | Autoestudio SPANISHCUE`,
    description: mod.goal.canDo,
  };
}

export default async function Page({ params }: { params: Promise<{ level: string; module: string }> }) {
  const { level: levelId, module: slug } = await params;
  const mod = findModule(levelId, slug);
  const level = levelMeta(levelId);
  if (!mod || !level) notFound();

  const path = modulePath(mod.level, mod.week);
  const fullAccess = fullAccessFromHeaders(await headers());
  // The Worker already redirects locked requests; this keeps the page fail-closed too.
  if (!isFreeAutoestudioModule(path) && !fullAccess) {
    return (
      <main className="ae-locked">
        <img src="/brand/mascot/standing-crossed.webp" alt="" width="600" height="900" style={{ display: "block", height: 220, width: "auto", margin: "0 auto 12px" }} />
        <h1>Autoestudio · {level.code}</h1>
        <p>Esta semana es parte de SpanishCue PRO.</p>
        <Link href={`/acceso?returnTo=${encodeURIComponent(path)}`}>Desbloquear con PRO</Link>
      </main>
    );
  }

  const { previous, next } = neighbours(mod);
  const objectives = [
    ...mod.newObjectives.map((id) => ({ id, topic: objectiveById.get(id)?.topic ?? id, isNew: true })),
    ...mod.reviewObjectives.map((id) => ({ id, topic: objectiveById.get(id)?.topic ?? id, isNew: false })),
  ];
  const related = mod.related ?? [];
  const recorded = (audioManifest as { clips: Record<string, string> }).clips;
  const clips = Object.fromEntries(moduleClips(mod).filter((clip) => recorded[clip.key]).map((clip) => [clip.key, recorded[clip.key]]));
  const nextLocked = Boolean(next && !next.free && !fullAccess);
  return (
    <ModulePlayer
      module={mod}
      level={{ id: level.id, code: level.code, name: level.name, color: level.color, mascot: level.mascot, support: level.support }}
      objectives={objectives}
      previous={previous}
      next={next}
      related={related}
      audio={clips}
      nextLocked={nextLocked}
    />
  );
}
