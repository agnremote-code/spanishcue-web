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
  const module = findModule(level, slug);
  if (!module) return {};
  return {
    title: `${module.title} · ${module.level.toUpperCase()} semana ${module.week} | Autoestudio SPANISHCUE`,
    description: module.goal.canDo,
  };
}

export default async function Page({ params }: { params: Promise<{ level: string; module: string }> }) {
  const { level: levelId, module: slug } = await params;
  const module = findModule(levelId, slug);
  const level = levelMeta(levelId);
  if (!module || !level) notFound();

  const path = modulePath(module.level, module.week);
  const fullAccess = fullAccessFromHeaders(await headers());
  // The Worker already redirects locked requests; this keeps the page fail-closed too.
  if (!isFreeAutoestudioModule(path) && !fullAccess) {
    return (
      <main className="ae-locked">
        <h1>Autoestudio · {level.code}</h1>
        <p>Esta semana es parte de SpanishCue PRO.</p>
        <Link href={`/acceso?returnTo=${encodeURIComponent(path)}`}>Desbloquear con PRO</Link>
      </main>
    );
  }

  const { previous, next } = neighbours(module);
  const objectives = [
    ...module.newObjectives.map((id) => ({ id, topic: objectiveById.get(id)?.topic ?? id, isNew: true })),
    ...module.reviewObjectives.map((id) => ({ id, topic: objectiveById.get(id)?.topic ?? id, isNew: false })),
  ];
  const related = module.related ?? [];
  const recorded = (audioManifest as { clips: Record<string, string> }).clips;
  const clips = Object.fromEntries(moduleClips(module).filter((clip) => recorded[clip.key]).map((clip) => [clip.key, recorded[clip.key]]));
  const nextLocked = Boolean(next && !next.free && !fullAccess);
  return (
    <ModulePlayer
      module={module}
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
