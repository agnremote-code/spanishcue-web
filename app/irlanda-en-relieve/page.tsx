"use client";
import dynamic from "next/dynamic";
import MundoPais from "../mundo-3d/MundoPais";
import { IRLANDA, loadContent, loadScene } from "./mundo/pais";

const Atlas = dynamic(() => import("./Atlas"), { loading: () => <div className="mw-loading">Abriendo el mapa…</div> });

export default function Irlanda() {
  return <MundoPais country={IRLANDA} rings={{}} loadContent={loadContent} loadScene={loadScene} listening="irlanda"
    atlas={<Atlas />} atlasLabel="el mapa en relieve de los 26 condados, en B1" />;
}
