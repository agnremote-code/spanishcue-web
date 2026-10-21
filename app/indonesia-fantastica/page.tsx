"use client";
import dynamic from "next/dynamic";
import MundoPais from "../mundo-3d/MundoPais";
import { INDONESIA, loadContent, loadScene } from "./mundo/pais";
const Atlas = dynamic(() => import("./Atlas"), { loading: () => <div className="mw-loading">Abriendo el mapa…</div> });
export default function Indonesia() {
  return <MundoPais country={INDONESIA} rings={{}} loadContent={loadContent} loadScene={loadScene} listening="indonesia"
    atlas={<Atlas />} atlasLabel="el mapa de las 38 provincias, en A1" />;
}
