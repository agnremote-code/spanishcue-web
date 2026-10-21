"use client";
// España: the 3D conversation world (four regions, twenty places, four levels) and,
// one click away (?vista=atlas), the original atlas class.
import dynamic from "next/dynamic";
import MundoPais from "../mundo-3d/MundoPais";
import { ESPANA, loadContent, loadScene } from "./mundo/pais";

const Atlas = dynamic(() => import("../country-atlas/CountryAtlas"), { loading: () => <div className="mw-loading">Abriendo el mapa…</div> });

export default function Espana() {
  return <MundoPais country={ESPANA} rings={{}} loadContent={loadContent} loadScene={loadScene} listening="espana"
    atlas={<Atlas slug="espana" />} atlasLabel="el mapa en relieve con los siete niveles, hasta C2" />;
}
