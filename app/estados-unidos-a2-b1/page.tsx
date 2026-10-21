"use client";
// Estados Unidos: the 3D conversation world (six states, thirty places, A0–B1)
// and, one click away, the original atlas of the 50 states (A2–B1), which keeps
// its own URL state (?vista=atlas) and every question it had.
import dynamic from "next/dynamic";
import {useEffect,useState} from "react";
import CountryGame from "../mundo-3d/CountryGame";
import {USA,loadContent,loadScene} from "./mundo/pais";
import {SILUETAS} from "./mundo/siluetas.mjs";

const Atlas=dynamic(()=>import("./Atlas"),{loading:()=><div className="mw-loading">Abriendo el atlas…</div>});

export default function EstadosUnidos(){
  const [atlas,setAtlas]=useState(false);
  useEffect(()=>{const t=window.setTimeout(()=>setAtlas(new URLSearchParams(window.location.search).get("vista")==="atlas"),0);return()=>window.clearTimeout(t)},[]);
  const show=(on:boolean)=>{setAtlas(on);const url=new URL(window.location.href);if(on)url.searchParams.set("vista","atlas");else url.searchParams.delete("vista");window.history.replaceState(null,"",url)};
  if(atlas)return <><Atlas/><button type="button" className="us50-back3d" onClick={()=>show(false)}>← Estados Unidos 3D</button></>;
  return <CountryGame country={USA} rings={SILUETAS} loadContent={loadContent} loadScene={loadScene} listening="usa"
    extra={<p className="mw-extra">¿Prefieres el mapa de los 50 estados con 300 preguntas A2 y B1? <button type="button" onClick={()=>show(true)}>Abrir el atlas de los 50 estados</button></p>}/>;
}
