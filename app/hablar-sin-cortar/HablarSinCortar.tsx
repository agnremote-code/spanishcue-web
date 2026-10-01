"use client";
import PhoneticsWorld from '../phonetics-family/PhoneticsWorld';
import type {WorldDefinition,Content} from '../phonetics-family/types';
import {contentFor} from './levels.mjs';
import manifest from './audio-manifest.json';
const definition:WorldDefinition={
 id:'hablar-sin-cortar',title:'Hablar sin cortar',tagline:'Las palabras no viajan solas.',
 description:'Escuchá cómo se conectan las palabras, encontrá sus límites y llevá ese ritmo a tu propia voz.',
 art:'/hablar-sin-cortar/studio.webp',mascot:'/hablar-sin-cortar/mascot-speaking.webp',
 contentFor:level=>contentFor(level) as Content,
 clips:Object.fromEntries(manifest.clips.map(c=>[c.id,c])),
 audioNotice:'Modelos sintéticos: Microsoft es-AR-TomasNeural. Los contrastes cortados son ediciones didácticas, no acentos regionales. La validación técnica no certifica la pronunciación: escuchá los modelos antes de clase. No hubo auditoría humana de escucha en esta implementación.',
};
export default function HablarSinCortar(){return <PhoneticsWorld definition={definition}/>;}
