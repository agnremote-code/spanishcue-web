'use client';

import * as THREE from 'three';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { PLATFORMS, ZONES, spawnPlayer, stepPlayer, type Position, type Player } from './engine.mjs';
import type { CategoryId } from './content/types';
import { buildForest } from './forest3d';
import { createForestHero, animateForestHero } from './hero3d';
import './world.css';

export type WorldProps = {
  paused: boolean;
  visited: CategoryId[];
  completed: boolean;
  unlocked: boolean;
  onZone: (zone: CategoryId) => void;
  onFail: () => void;
  onPosition?: (p: Position) => void;
};
const POSITION_KEY = 'spanishcue:bosque:world:v1';
const finitePosition = (p: unknown): p is Position => {
  if (!p || typeof p !== 'object') return false;
  const v = p as Position;
  return [v.x,v.y,v.z].every(Number.isFinite) && Math.hypot(v.x,v.z)<65 && v.y>=0 && v.y<55;
};
function surfaceAt(p: Position) {
  return PLATFORMS.find(s => Math.abs(p.y-s.y)<.1 && Math.hypot(p.x-s.x,p.z-s.z)<=s.r+.15);
}
function restorePlayer(): Player {
  const player=spawnPlayer();
  try {
    const stored=JSON.parse(localStorage.getItem(POSITION_KEY)||'null');
    if(stored?.version!==1 || !finitePosition(stored.position) || !finitePosition(stored.checkpoint))return player;
    const cp=surfaceAt(stored.checkpoint),surface=surfaceAt(stored.position);
    if(stored.checkpoint.y!==0 && !cp?.checkpoint)return player;
    if(stored.position.y!==0 && !surface)return player;
    return {...player,...stored.position,checkpoint:{...stored.checkpoint},platform:surface?.id||'ground'};
  } catch {return player;}
}

export default function World3D(props: WorldProps) {
  const live=useRef(props);
  useEffect(()=>{live.current=props;});
  const host=useRef<HTMLDivElement>(null),mapCanvas=useRef<HTMLCanvasElement>(null),largeMap=useRef<HTMLCanvasElement>(null),stick=useRef<HTMLSpanElement>(null);
  const api=useRef<{clear:()=>void;jump:()=>void;interact:()=>void;view:()=>void;joy:{x:number;y:number}}|null>(null);
  const joyPointer=useRef<number|null>(null);
  const [mapOpen,setMapOpen]=useState(false),[help,setHelp]=useState(false),[place,setPlace]=useState('Claro de entrada'),[hint,setHint]=useState('Sigue los hongos bajos para comenzar el ascenso.'),[height,setHeight]=useState(0);
  const mapPanel=useRef<HTMLDivElement>(null);
  useEffect(()=>{if(!mapOpen)return;const previous=document.activeElement as HTMLElement|null;const panel=mapPanel.current;panel?.focus();const trap=(e:KeyboardEvent)=>{if(e.key==='Tab'){e.preventDefault();panel?.querySelector<HTMLButtonElement>('button')?.focus();}};document.addEventListener('keydown',trap);return()=>{document.removeEventListener('keydown',trap);previous?.focus();};},[mapOpen]);
  const mapOpenRef=useRef(false),helpRef=useRef(false);
  useEffect(()=>{mapOpenRef.current=mapOpen;if(mapOpen)api.current?.clear();},[mapOpen]);
  useEffect(()=>{helpRef.current=help;if(help)api.current?.clear();},[help]);
  useEffect(()=>{if(props.paused){api.current?.clear();joyPointer.current=null;if(stick.current)stick.current.style.transform='translate(0, 0)';}},[props.paused]);

  useEffect(()=>{
    const mount=host.current;if(!mount)return;
    const low=window.matchMedia('(pointer: coarse)').matches || window.innerWidth<760;
    const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer:THREE.WebGLRenderer;
    try{renderer=new THREE.WebGLRenderer({antialias:!low,alpha:false,powerPreference:'high-performance'});}catch{live.current.onFail();return;}
    let ratio=Math.min(window.devicePixelRatio||1,low?1.25:1.75);
    renderer.setPixelRatio(ratio);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.16;renderer.shadowMap.enabled=!low;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    renderer.domElement.setAttribute('aria-label','Bosque tridimensional. Usa WASD o flechas para moverte y espacio para saltar.');renderer.domElement.tabIndex=0;mount.appendChild(renderer.domElement);
    const scene=new THREE.Scene();scene.background=new THREE.Color('#aebfac');scene.fog=new THREE.FogExp2('#aebfac',.0085);
    const camera=new THREE.PerspectiveCamera(54,1,.12,260);
    const skyMaterial=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:{},vertexShader:'varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec3 v;void main(){float h=clamp(normalize(v).y,0.,1.);gl_FragColor=vec4(mix(vec3(.75,.80,.67),vec3(.28,.48,.52),pow(h,.6)),1.);}'});
    const sky=new THREE.Mesh(new THREE.SphereGeometry(230,24,12),skyMaterial);scene.add(sky);
    scene.add(new THREE.HemisphereLight('#e8f0cf','#435039',2.1));
    const sun=new THREE.DirectionalLight('#ffe1a8',3.2);sun.castShadow=!low;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-23,right:23,top:23,bottom:-23,near:1,far:135});sun.shadow.normalBias=.05;sun.shadow.bias=-.0002;scene.add(sun,sun.target);
    const forest=buildForest({low,reducedMotion});scene.add(forest.root);
    const hero=createForestHero(!low);scene.add(hero.root);
    let player=restorePlayer(),yaw=-1.12,pitch=.38,wide=false,jumpQueued=false,alive=true,frame=0,lastTime=0,elapsed=0,uiTime=0,saveTime=0,frames=0,slowTime=0;
    let zoneLatch:CategoryId|null=null,currentZone:CategoryId|null=null,previousRespawns=player.respawns,toastUntil=0;
    const held=new Set<string>(),joy={x:0,y:0};
    const look=new THREE.Vector3(player.x,player.y+1.55,player.z),desired=new THREE.Vector3(),direction=new THREE.Vector3(),pvec=new THREE.Vector3(),ray=new THREE.Raycaster();
    const clear=()=>{held.clear();joy.x=0;joy.y=0;jumpQueued=false;};
    const toast=(message:string)=>{setHint(message);toastUntil=elapsed+5;};
    const interact=()=>{
      if(live.current.paused||mapOpenRef.current||helpRef.current)return;
      const zone=ZONES.find(z=>z.id===currentZone);if(!zone){toast('Aterriza en un refugio para abrir una conversación.');return;}
      if(zone.id==='final'&&!live.current.unlocked){toast('La corona se abre tras conversar sobre 10 preguntas de al menos 3 categorías.');return;}
      clear();live.current.onZone(zone.id);
    };
    api.current={clear,jump:()=>{if(!live.current.paused&&!mapOpenRef.current&&!helpRef.current)jumpQueued=true;},interact,view:()=>{wide=!wide;},joy};
    const usable=(event:KeyboardEvent)=>{const t=event.target as HTMLElement|null;return !t?.closest('input,textarea,select,button,a,[contenteditable="true"],[role="dialog"]');};
    const keydown=(event:KeyboardEvent)=>{
      const code=event.code;
      if((mapOpenRef.current||helpRef.current)&&code==='Escape'){event.preventDefault();setMapOpen(false);setHelp(false);clear();return;}
      if(mapOpenRef.current&&code==='KeyM'&&usable(event)){event.preventDefault();setMapOpen(false);clear();return;}
      if(!usable(event)||live.current.paused||mapOpenRef.current||helpRef.current)return;
      if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','ShiftLeft','ShiftRight','KeyE','KeyV','KeyM'].includes(code))event.preventDefault();
      if(event.repeat)return;
      held.add(code);
      if(code==='Space')jumpQueued=true;
      if(code==='KeyE')interact();
      if(code==='KeyV')wide=!wide;
      if(code==='KeyM')setMapOpen(v=>!v);
    };
    const keyup=(event:KeyboardEvent)=>held.delete(event.code);
    let orbit:{id:number;x:number;y:number}|null=null;
    const pointerdown=(event:PointerEvent)=>{if(live.current.paused||mapOpenRef.current||helpRef.current)return;orbit={id:event.pointerId,x:event.clientX,y:event.clientY};renderer.domElement.setPointerCapture(event.pointerId);renderer.domElement.focus({preventScroll:true});};
    const pointermove=(event:PointerEvent)=>{if(!orbit||orbit.id!==event.pointerId||live.current.paused)return;yaw-=(event.clientX-orbit.x)*.005;pitch=THREE.MathUtils.clamp(pitch+(event.clientY-orbit.y)*.003,.08,1.02);orbit.x=event.clientX;orbit.y=event.clientY;};
    const pointerend=()=>{orbit=null;};
    const blur=()=>{clear();pointerend();joyPointer.current=null;if(stick.current)stick.current.style.transform='translate(0, 0)';};
    const visibility=()=>{if(document.hidden)blur();};
    const contextLost=(event:Event)=>{event.preventDefault();alive=false;cancelAnimationFrame(frame);live.current.onFail();};
    window.addEventListener('keydown',keydown);window.addEventListener('keyup',keyup);window.addEventListener('blur',blur);document.addEventListener('visibilitychange',visibility);
    const canvas=renderer.domElement;canvas.addEventListener('pointerdown',pointerdown);canvas.addEventListener('pointermove',pointermove);canvas.addEventListener('pointerup',pointerend);canvas.addEventListener('pointercancel',blur);canvas.addEventListener('lostpointercapture',pointerend);canvas.addEventListener('webglcontextlost',contextLost);
    const resize=()=>{const w=mount.clientWidth,h=mount.clientHeight;if(!w||!h)return;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();};
    const observer=new ResizeObserver(resize);observer.observe(mount);resize();
    const drawMap=(target:HTMLCanvasElement|null,expanded:boolean)=>{
      if(!target)return;const c=target.getContext('2d');if(!c)return;const size=target.width,pad=expanded?42:16,scale=(size-pad*2)/100,cx=size/2,cy=size/2;
      const x=(v:number)=>cx+v*scale,z=(v:number)=>cy+v*scale;
      c.clearRect(0,0,size,size);c.fillStyle='#172d24';c.fillRect(0,0,size,size);
      c.strokeStyle='#65826a';c.lineWidth=expanded?1.7:1;c.setLineDash([3,4]);c.beginPath();c.moveTo(x(0),z(0));for(const zone of ZONES)c.lineTo(x(zone.x),z(zone.z));c.stroke();c.setLineDash([]);
      for(const p of PLATFORMS){if(p.zone)continue;c.beginPath();c.arc(x(p.x),z(p.z),expanded?2:1,0,Math.PI*2);c.fillStyle=p.bounce?'#b6ab74':'#536d58';c.fill();}
      for(const zone of ZONES){const visited=live.current.visited.includes(zone.id),final=zone.id==='final';c.beginPath();c.arc(x(zone.x),z(zone.z),expanded?6:3.5,0,Math.PI*2);c.fillStyle=visited?'#d7c48a':final?'#ad9254':'#648372';c.fill();if(final){c.strokeStyle='#f7df9d';c.lineWidth=1.5;c.stroke();}if(expanded){c.font='12px system-ui';c.textAlign=zone.x<0?'right':'left';c.fillStyle=visited?'#f5edd8':'#c5d4c7';c.fillText(zone.short,x(zone.x)+(zone.x<0?-11:11),z(zone.z)+4);}}
      c.strokeStyle='#f9e4a9';c.lineWidth=2;c.strokeRect(x(player.checkpoint.x)-4,z(player.checkpoint.z)-4,8,8);
      c.save();c.translate(x(player.x),z(player.z));c.rotate(-player.yaw);c.beginPath();c.moveTo(0,7);c.lineTo(-4,-4);c.lineTo(4,-4);c.closePath();c.fillStyle='#ffffff';c.fill();c.restore();
      c.font=expanded?'13px system-ui':'10px system-ui';c.fillStyle='#b9cdbb';c.textAlign='center';c.fillText('N',cx,expanded?23:12);
    };
    const save=()=>{if(!player.grounded)return;try{localStorage.setItem(POSITION_KEY,JSON.stringify({version:1,position:{x:player.x,y:player.y,z:player.z},checkpoint:player.checkpoint}));}catch{/* Storage is optional in private browsing. */}};
    camera.position.set(player.x-8,player.y+6,player.z+8);
    const tick=(time:number)=>{
      if(!alive)return;frame=requestAnimationFrame(tick);const dt=Math.min((time-lastTime)/1000||.016,.05);lastTime=time;elapsed+=dt;
      if(!live.current.paused&&!mapOpenRef.current&&!helpRef.current&&!document.hidden){
        const ix=(held.has('KeyD')||held.has('ArrowRight')?1:0)-(held.has('KeyA')||held.has('ArrowLeft')?1:0)+joy.x;
        const iz=(held.has('KeyS')||held.has('ArrowDown')?1:0)-(held.has('KeyW')||held.has('ArrowUp')?1:0)+joy.y;
        const dx=Math.cos(yaw)*ix+Math.sin(yaw)*iz,dz=-Math.sin(yaw)*ix+Math.cos(yaw)*iz;
        // A fixed maximum substep keeps landings stable on slow touch devices.
        let remaining=dt;const beforeX=player.x,beforeZ=player.z;
        while(remaining>0){const step=Math.min(remaining,1/90);player=stepPlayer(player,{x:dx,z:dz,jump:jumpQueued,run:held.has('ShiftLeft')||held.has('ShiftRight')||Math.hypot(joy.x,joy.y)>.85},step);jumpQueued=false;remaining-=step;}
        const floor=PLATFORMS.find(p=>p.id===player.platform);currentZone=player.grounded?(floor?.zone??null):null;
        if(zoneLatch){const latched=ZONES.find(z=>z.id===zoneLatch)!;const surface=PLATFORMS.find(p=>p.zone===zoneLatch)!;if(Math.hypot(player.x-latched.x,player.z-latched.z)>surface.r+1)zoneLatch=null;}
        if(currentZone&&currentZone!==zoneLatch){zoneLatch=currentZone;interact();}
        if(player.respawns>previousRespawns){previousRespawns=player.respawns;toast('De vuelta al último refugio. Tu conversación sigue aquí.');}
        animateForestHero(hero,elapsed,dt,player,Math.hypot(player.x-beforeX,player.z-beforeZ)/dt,camera);
      }else animateForestHero(hero,elapsed,dt,player,0,camera);
      hero.root.position.set(player.x,player.y,player.z);
      const target=new THREE.Vector3(player.x,player.y+1.6,player.z);look.lerp(target,reducedMotion?1:1-Math.exp(-dt*8));
      const distance=wide?12.5:8.5;direction.set(Math.sin(yaw)*Math.cos(pitch),Math.sin(pitch),Math.cos(yaw)*Math.cos(pitch));
      // Raycasting uses current matrixWorld, including transformed cave rocks and branches.
      scene.updateMatrixWorld(true);ray.set(look,direction);ray.far=distance;const hit=ray.intersectObjects(forest.solids,false).find(h=>h.distance>.15);
      const safeDistance=hit?Math.max(.85,hit.distance-.4):distance;desired.copy(look).addScaledVector(direction,safeDistance);
      camera.position.lerp(desired,hit?1:1-Math.exp(-dt*(reducedMotion?25:7)));camera.lookAt(look);
      pvec.set(player.x,player.y,player.z);forest.update(reducedMotion?0:elapsed,pvec);sun.position.set(player.x-28,player.y+65,player.z+25);sun.target.position.set(player.x,player.y,player.z);
      renderer.render(scene,camera);
      uiTime+=dt;saveTime+=dt;frames++;slowTime+=dt;
      if(uiTime>.2){uiTime=0;drawMap(mapCanvas.current,false);if(mapOpenRef.current)drawMap(largeMap.current,true);setHeight(Math.round(player.y));const nearest=[...ZONES].sort((a,b)=>Math.hypot(a.x-player.x,a.z-player.z,a.y-player.y)-Math.hypot(b.x-player.x,b.z-player.z,b.y-player.y))[0];setPlace(player.y<.5?'Claro de entrada':nearest.name);if(elapsed>toastUntil)setHint(currentZone?'E · Volver a conversar':player.y<1?'Busca los sombreros bajos. Espacio para saltar.':'Los aros dorados te impulsan. Aterriza en un refugio para conversar.');live.current.onPosition?.({x:player.x,y:player.y,z:player.z});}
      if(saveTime>2){saveTime=0;save();}
      if(slowTime>4){if(frames/slowTime<35&&ratio>.85){ratio=Math.max(.85,ratio-.2);renderer.setPixelRatio(ratio);resize();}frames=0;slowTime=0;}
    };
    frame=requestAnimationFrame(tick);
    return ()=>{alive=false;save();cancelAnimationFrame(frame);clear();api.current=null;observer.disconnect();window.removeEventListener('keydown',keydown);window.removeEventListener('keyup',keyup);window.removeEventListener('blur',blur);document.removeEventListener('visibilitychange',visibility);canvas.removeEventListener('pointerdown',pointerdown);canvas.removeEventListener('pointermove',pointermove);canvas.removeEventListener('pointerup',pointerend);canvas.removeEventListener('pointercancel',blur);canvas.removeEventListener('lostpointercapture',pointerend);canvas.removeEventListener('webglcontextlost',contextLost);forest.dispose();hero.dispose();sky.geometry.dispose();skyMaterial.dispose();sun.shadow.map?.dispose();renderer.dispose();canvas.remove();};
  },[]);

  const updateJoy=(event:ReactPointerEvent<HTMLDivElement>)=>{if(joyPointer.current!==event.pointerId||props.paused||mapOpen||help)return;const rect=event.currentTarget.getBoundingClientRect();const x=(event.clientX-rect.left-rect.width/2)/(rect.width*.33),y=(event.clientY-rect.top-rect.height/2)/(rect.height*.33),length=Math.max(1,Math.hypot(x,y));if(api.current){api.current.joy.x=x/length;api.current.joy.y=y/length;}if(stick.current)stick.current.style.transform=`translate(${x/length*30}px, ${y/length*30}px)`;};
  const endJoy=()=>{joyPointer.current=null;if(api.current){api.current.joy.x=0;api.current.joy.y=0;}if(stick.current)stick.current.style.transform='translate(0, 0)';};
  return <div className={`bfg-world${props.paused||mapOpen||help?' bfg-world-paused':''}`}>
    <div className="bfg-world-canvas" ref={host}/>
    <div className="bfg-world-vignette"/>
    <div className="bfg-world-location"><span>EL BOSQUE · {height} m</span><strong>{place}</strong><small>{props.completed?'La corona es tuya. Sigue explorando.':`${props.visited.filter(z=>z!=='final').length} / 11 refugios explorados`}</small></div>
    <div className="bfg-world-tools"><button onClick={()=>setMapOpen(v=>!v)} aria-label="Abrir mapa del bosque" aria-expanded={mapOpen}>Mapa <kbd>M</kbd></button><button onClick={()=>api.current?.view()} aria-label="Cambiar distancia de cámara">Cámara <kbd>V</kbd></button><button onClick={()=>setHelp(v=>!v)} aria-label="Mostrar controles" aria-expanded={help}>?</button></div>
    <button className="bfg-world-minimap" onClick={()=>setMapOpen(true)} aria-label="Ampliar mapa: refugios, punto de regreso y posición"><canvas width={190} height={190} ref={mapCanvas}/><span>Explora el bosque ↗</span></button>
    <div className="bfg-world-hint" role="status">{hint}</div>
    {help&&<div className="bfg-world-help"><strong>Tu camino por el bosque</strong><p>WASD o flechas · moverte<br/>Mayús · correr<br/>Espacio · saltar<br/>Arrastrar · girar la cámara<br/>E · volver a conversar<br/>V · ampliar la vista · M · mapa</p><p>En pantalla táctil, usa el control izquierdo y los botones de salto. Arrastra el bosque para mirar alrededor. Los refugios guardan tu punto de regreso.</p><button onClick={()=>setHelp(false)}>Entendido</button></div>}
    {mapOpen&&<div className="bfg-world-map" ref={mapPanel} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Mapa del bosque"><div className="bfg-world-map-heading"><div><span>TU TRAVESÍA</span><strong>Un bosque, muchos caminos</strong></div><button onClick={()=>setMapOpen(false)} aria-label="Cerrar mapa">✕</button></div><canvas ref={largeMap} width={600} height={600}/><p>▲ Tú · □ Punto de regreso · <span>●</span> Explorado · ◉ La corona</p><small>El mapa te orienta. Recorre los caminos y salta entre los hongos.</small></div>}
    <div className="bfg-world-touch" aria-label="Controles táctiles"><div className="bfg-world-joystick" role="group" aria-label="Control táctil de movimiento" onPointerDown={e=>{if(props.paused||mapOpen||help)return;joyPointer.current=e.pointerId;e.currentTarget.setPointerCapture(e.pointerId);updateJoy(e);}} onPointerMove={updateJoy} onPointerUp={endJoy} onPointerCancel={endJoy} onLostPointerCapture={endJoy}><span ref={stick}/></div><div className="bfg-world-touch-actions"><button disabled={props.paused||mapOpen||help} onPointerDown={e=>{e.preventDefault();api.current?.jump();}} aria-label="Saltar">↑<small>Saltar</small></button><button disabled={props.paused||mapOpen||help} onClick={()=>api.current?.interact()} aria-label="Abrir conversación">✦<small>Hablar</small></button></div></div>
  </div>;
}
