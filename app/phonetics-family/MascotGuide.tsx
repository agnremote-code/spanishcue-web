"use client";
import type {MascotGuidance} from './types';
export type GuidePhase='listen'|'react'|'produce'|'complete'|'teacher';
export default function MascotGuide({guide,phase}:{guide:MascotGuidance;phase:GuidePhase}) {
 return <aside className={`pf-guide pf-guide-${phase}`} aria-label="Guía del estudio"><img src={guide.poses[phase]} alt="Mascota de SpanishCue acompañando el ensayo" width={110} height={140}/><p aria-live="polite"><span className="pf-eyebrow">TU COMPAÑERO DE ESTUDIO</span>{guide[phase]}</p></aside>;
}
