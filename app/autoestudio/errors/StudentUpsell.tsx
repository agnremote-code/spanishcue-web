"use client";

import Link from "next/link";
import { useMemo } from "react";
import type { Module, SectionKey } from "../curriculum/types";
import type { RecommendationCatalog } from "./catalog";
import { upsellFor, type Upsell } from "./upsell";

/**
 * The quiet invitation at the end of every Homework section: SpanishCue for
 * students, pointed at the class that matches what the learner just worked
 * on. Never shown to someone who already has full access.
 */
export default function StudentUpsell({ module, section, catalog, fullAccess, onOpen }: { module: Module; section: SectionKey; catalog: RecommendationCatalog; fullAccess: boolean; onOpen?: (upsell: Upsell) => void }) {
  const upsell = useMemo(() => (fullAccess ? null : upsellFor(module, section, catalog)), [module, section, catalog, fullAccess]);
  if (!upsell) return null;
  const { lesson } = upsell;
  return (
    <aside className="ae-upsell" data-upsell={lesson.id} aria-label="SpanishCue para alumnos">
      <p className="ae-upsell-kicker"><span>NUEVO</span> SpanishCue para alumnos</p>
      <div className="ae-upsell-body">
        <img src={lesson.image} alt="" width="640" height="360" loading="lazy" />
        <div>
          <p className="ae-upsell-title">¿Quieres ir más allá con {upsell.label.toLowerCase()}?</p>
          <p>
            {upsell.sample ? <>Lo que acabas de ver en «{upsell.sample}» </> : <>Lo que practicaste en esta sección </>}
            se trabaja a fondo en la clase interactiva <b>{lesson.title}</b> ({lesson.level}): explicación, audio, práctica guiada y conversación. Desbloquea todas las clases de SpanishCue y sigue a tu ritmo.
          </p>
          <div className="ae-upsell-actions">
            <Link href={upsell.href} className="ae-primary" onClick={() => onOpen?.(upsell)}>{lesson.free ? "Abrir la clase" : "Probar la clase gratis"} →</Link>
            <Link href={`/acceso?returnTo=${encodeURIComponent(lesson.path)}`} className="ae-link">Desbloquear SpanishCue</Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
