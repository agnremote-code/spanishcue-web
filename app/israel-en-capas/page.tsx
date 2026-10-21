"use client";
import dynamic from "next/dynamic";
import MundoPais from "../mundo-3d/MundoPais";
import { ISRAEL, loadContent, loadScene } from "./mundo/pais";
const Atlas = dynamic(() => import("./Atlas"), { loading: () => <div className="mw-loading">Abriendo el mapa…</div> });
export default function Israel() {
  return <MundoPais country={ISRAEL} rings={{}} loadContent={loadContent} loadScene={loadScene} listening="israel"
    atlas={<Atlas />} atlasLabel="el mapa de las 14 estaciones en capas, en B1" />;
}
