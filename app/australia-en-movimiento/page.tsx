"use client";
import dynamic from "next/dynamic";
import MundoPais from "../mundo-3d/MundoPais";
import { AUSTRALIA, loadContent, loadScene } from "./mundo/pais";
const Atlas = dynamic(() => import("./Atlas"), { loading: () => <div className="mw-loading">Abriendo el mapa…</div> });
export default function Australia() {
  return <MundoPais country={AUSTRALIA} rings={{}} loadContent={loadContent} loadScene={loadScene} listening="australia"
    atlas={<Atlas />} atlasLabel="el atlas de los ocho territorios, en A2 y B1" />;
}
