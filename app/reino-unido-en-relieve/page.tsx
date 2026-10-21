"use client";
// Reino Unido: the 3D conversation world (four nations, twenty places, four levels) and,
// one click away (?vista=atlas), the original relief map of the twelve areas (A1 and B1).
import dynamic from "next/dynamic";
import MundoPais from "../mundo-3d/MundoPais";
import { REINO_UNIDO, loadContent, loadScene } from "./mundo/pais";

const Atlas = dynamic(() => import("./Atlas"), { loading: () => <div className="mw-loading">Abriendo el mapa…</div> });

export default function ReinoUnido() {
  return <MundoPais country={REINO_UNIDO} rings={{}} loadContent={loadContent} loadScene={loadScene} listening="uk"
    atlas={<Atlas />} atlasLabel="el mapa en relieve de las doce áreas, en A1 y B1" />;
}
