"use client";
import dynamic from "next/dynamic";
import MundoPais from "../mundo-3d/MundoPais";
import { SUIZA, loadContent, loadScene } from "./mundo/pais";
const Atlas = dynamic(() => import("./Atlas"), { loading: () => <div className="mw-loading">Abriendo el mapa…</div> });
export default function Suiza() {
  return <MundoPais country={SUIZA} rings={{}} loadContent={loadContent} loadScene={loadScene} listening="suiza"
    atlas={<Atlas />} atlasLabel="el mapa en relieve de los 26 cantones, en B1" />;
}
