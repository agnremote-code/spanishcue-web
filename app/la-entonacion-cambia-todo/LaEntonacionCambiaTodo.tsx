"use client";
import PhoneticsWorld from '../phonetics-family/PhoneticsWorld';
import type {WorldDefinition,Content} from '../phonetics-family/types';
import {contentFor} from './levels.mjs';
import manifest from './audio-manifest.json';
const definition:WorldDefinition={
 id:'la-entonacion-cambia-todo',title:'La entonación cambia todo',tagline:'No solo importa qué dices. También importa cómo cae la voz.',
 description:'Las mismas palabras, otra intención. Escucha, compara y ensaya el efecto que quieres producir en una conversación real.',
 art:'/la-entonacion-cambia-todo/studio.webp',mascot:'/brand/mascot/speaking.webp',mascotInArt:true,studioLabel:'ESTUDIO DE INTENCIONES',
 artAlt:'La mascota de SpanishCue ensaya con auriculares y una tarjeta en una sala real de voz: mesa de madera, micrófono, piano y luz natural.',
 contentFor:level=>contentFor(level) as Content,clips:Object.fromEntries(manifest.clips.map(c=>[c.id,c])),
 audioNotice:'Modelos sintéticos de Microsoft es-AR-TomasNeural con contornos editados para ensayar contrastes. No son actuaciones humanas ni reglas universales de emoción. El contexto y el modelo en vivo del profe completan los matices. Los archivos fueron validados técnicamente; no se realizó auditoría humana de escucha.',
 guide:{listen:'Primero el oído. Escucha la toma completa antes de abrir las opciones. ¿Qué respuesta te dan ganas de dar?',react:'Compara el movimiento de la voz con tu primera impresión. Prueba otra lectura si el contexto la permite.',produce:'Ahora prueba ti. Conserva las palabras y elige qué quieres que la otra persona entienda.',complete:'Ya ensayaste una intención. Vuelve a decirlo con otra y pregunta qué cambió para quien te escucha.',teacher:'Elige una sola devolución concreta: qué intención llegó, qué pista ayudó y qué vale la pena volver a probar.',poses:{listen:'/brand/mascot/portrait.webp',react:'/brand/mascot/pointing.webp',produce:'/brand/mascot/speaking.webp',complete:'/brand/mascot/standing.webp',teacher:'/brand/mascot/studying.webp'}},
};
export default function LaEntonacionCambiaTodo(){return <PhoneticsWorld definition={definition}/>;}
