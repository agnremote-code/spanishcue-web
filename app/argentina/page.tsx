"use client";
// Argentina: the 3D conversation world (four regions, twenty places, four levels) and,
// one click away (?vista=atlas), the original atlas class.
import dynamic from "next/dynamic";
import MundoPais from "../mundo-3d/MundoPais";
import { ARGENTINA, loadContent, loadScene } from "./mundo/pais";

const Atlas = dynamic(() => import("../country-atlas/CountryAtlas"), { loading: () => <div className="mw-loading">Abriendo el mapa…</div> });

export default function Argentina() {
  return <MundoPais country={ARGENTINA} rings={{}} loadContent={loadContent} loadScene={loadScene} listening="argentina"
    atlas={<Atlas slug="argentina" />} atlasLabel="el mapa en relieve con los siete niveles, hasta C2" />;
}
