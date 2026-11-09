'use client';

import {useEffect,useRef} from 'react';

const demos=[
 {id:'grammar',eyebrow:'GRAMÁTICA · CLASE REAL',title:'Una clase lista para enseñar.',src:'/grammar-previews/40.mp4',poster:'/grammar-thumbnails/40.webp',href:'/la-fabrica-de-los-nombres',label:'Ver la clase de gramática en vídeo'},
 {id:'world',eyebrow:'CONVERSACIÓN · MUNDO 3D REAL',title:'Una ciudad entera para conversar.',src:'/noche-abierta/como-funciona.mp4',poster:'/noche-abierta/preview.webp',href:'/demo/noche-abierta',label:'Ver Noche abierta en vídeo'},
] as const;

/** Existing real product clips, in identical uncropped players. */
export default function ProductVideos(){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const videos=Array.from(ref.current?.querySelectorAll('video')??[]);
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(motion.matches||typeof IntersectionObserver==='undefined')return;
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){const video=entry.target as HTMLVideoElement;if(entry.isIntersecting)void video.play().catch(()=>{});else video.pause();}},{threshold:0.25});
  videos.forEach(video=>observer.observe(video));
  const stop=()=>{if(motion.matches)videos.forEach(video=>video.pause());};
  motion.addEventListener('change',stop);
  return ()=>{observer.disconnect();motion.removeEventListener('change',stop);videos.forEach(video=>video.pause());};
 },[]);
 return <div ref={ref} className="pt-product-videos">{demos.map(demo=><figure key={demo.id}>
  <div className="pt-product-title"><span aria-hidden="true">● ● ●</span><b>{demo.eyebrow}</b></div>
  <div className="pt-video-screen"><video src={demo.src} poster={demo.poster} aria-label={demo.label} controls muted loop playsInline preload="metadata"><a href={demo.src}>Abrir el vídeo de {demo.id==='grammar'?'gramática':'Noche abierta'}</a></video></div>
  <figcaption><div><b>{demo.title}</b></div><a href={demo.href} aria-label={demo.id==='grammar'?'Abrir la clase real de gramática':'Explorar Noche abierta'}>↗</a></figcaption>
 </figure>)}</div>;
}
