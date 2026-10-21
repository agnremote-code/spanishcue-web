"use client";
// México: the 3D conversation world (four states, twenty places, four levels) and,
// one click away (?vista=atlas), the original map of the 32 entities (B1).
import dynamic from "next/dynamic";
import MundoPais from "../mundo-3d/MundoPais";
import { MEXICO, loadContent, loadScene } from "./mundo/pais";
import { SILUETAS } from "./mundo/siluetas.mjs";

const Atlas = dynamic(() => import("./Atlas"), { loading: () => <div className="mw-loading">Abriendo el mapa…</div> });

export default function Mexico() {
  return <MundoPais country={MEXICO} rings={SILUETAS} loadContent={loadContent} loadScene={loadScene} listening="mexico"
    atlas={<Atlas />} atlasLabel="el mapa de las 32 entidades con 160 preguntas B1" />;
}
