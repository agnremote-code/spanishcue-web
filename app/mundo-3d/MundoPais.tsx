"use client";
// A country class as a 3D world, with its previous class one click away
// (?vista=atlas), so every question and level it had stays available.
import { useEffect, useState, type ReactNode } from "react";
import CountryGame from "./CountryGame";
import type { SceneBuilder } from "./kit3d";
import type { CountryInfo, RegionContent } from "./types";
import type { GameId } from "../escucha-3d/types";

type Props = {
  country: CountryInfo;
  rings: Record<string, number[][][]>;
  loadContent: (id: string) => Promise<RegionContent>;
  loadScene: (id: string) => Promise<SceneBuilder>;
  listening: GameId;
  /** The class as it was before the 3D world. */
  atlas: ReactNode;
  /** «el mapa de las 32 entidades con 160 preguntas B1» */
  atlasLabel: string;
};

export default function MundoPais({ country, rings, loadContent, loadScene, listening, atlas, atlasLabel }: Props) {
  const [showAtlas, setShowAtlas] = useState(false);
  useEffect(() => { const t = window.setTimeout(() => setShowAtlas(new URLSearchParams(window.location.search).get("vista") === "atlas"), 0); return () => window.clearTimeout(t); }, []);
  const show = (on: boolean) => {
    setShowAtlas(on);
    const url = new URL(window.location.href);
    if (on) url.searchParams.set("vista", "atlas"); else url.searchParams.delete("vista");
    window.history.replaceState(null, "", url);
  };
  if (showAtlas) return <>{atlas}<button type="button" className="mw-back3d" onClick={() => show(false)}>← {country.name.es} 3D</button></>;
  return <CountryGame country={country} rings={rings} loadContent={loadContent} loadScene={loadScene} listening={listening}
    extra={<p className="mw-extra">¿Prefieres {atlasLabel}? <button type="button" onClick={() => show(true)}>Abrir la clase anterior</button></p>} />;
}
