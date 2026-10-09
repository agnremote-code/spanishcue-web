'use client';
import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {buildCity,placePerson} from '../noche-abierta/build3d';
import {createHero,animateHero} from '../noche-abierta/hero3d';
import {CAMERA_PRESETS,SPAWN,TARGETS,colliders,stepPlayer,followCamera,keyAction,inputFrom,canUseKeys,type Target} from '../noche-abierta/world3d.mjs';
import {DEMO_BOUNDS,DEMO_GATES,nearPremiumGate} from './policy.mjs';
export type DemoSceneProps={paused:boolean;travel:{id:string;n:number}|null;es:boolean;onInteract:(id:string)=>void;onGate:(name:string)=>void;onReady:()=>void;onFail:()=>void};

export default function DemoScene(props:DemoSceneProps){
 const host=useRef<HTMLDivElement>(null);const world=useRef<HTMLDivElement>(null);const live=useRef(props);
 const api=useRef<{interact:()=>void;held:Set<string>;joy:{x:number;y:number};reset:()=>void}|null>(null);
 const [near,setNear]=useState<Target|null>(null);const [hint,setHint]=useState(true);const stick=useRef<HTMLSpanElement>(null);
 useEffect(()=>{live.current=props;});
 useEffect(()=>{
  const mount=host.current;if(!mount)return;
  const coarse=matchMedia('(pointer:coarse)').matches||innerWidth<760;
  const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
  let renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:!coarse,powerPreference:'low-power'});}catch{live.current.onFail();return;}
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,coarse?1.25:1.6));
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
  mount.appendChild(renderer.domElement);
  const scene=new THREE.Scene();scene.background=new THREE.Color('#272137');scene.fog=new THREE.Fog('#272137',65,190);
  const camera=new THREE.PerspectiveCamera(58,1,0.1,400);
  scene.add(new THREE.HemisphereLight('#f0ced3','#394052',2.3));
  const sun=new THREE.DirectionalLight('#ffb978',3);sun.position.set(-35,60,-25);scene.add(sun);
  let city:ReturnType<typeof buildCity>;let hero:ReturnType<typeof createHero>;
  try{city=buildCity({shadows:false,crowd:!coarse});hero=createHero(false);}catch{renderer.dispose();renderer.domElement.remove();live.current.onFail();return;}
  scene.add(city.root,hero.root);
  city.night.windows.forEach(m=>{m.emissiveIntensity=1.4;});city.night.lamps.forEach(m=>{m.emissiveIntensity=1.7;});
  city.night.pools.forEach(m=>{m.opacity=.4;});city.night.lights.forEach(l=>{l.intensity=5;});
  // Visible transit portals advertise the district boundary; they carry no paid activities.
  const portals:THREE.Group[]=[];
  for(const gate of DEMO_GATES){
   const root=new THREE.Group();root.position.set(gate.x,0,gate.z);if(gate.x)root.rotation.y=Math.PI/2;
   const material=new THREE.MeshBasicMaterial({color:'#d5f67a',transparent:true,opacity:.85});
   for(const x of [-3,3]){const post=new THREE.Mesh(new THREE.BoxGeometry(.15,5,.15),material);post.position.set(x,2.5,0);root.add(post);}
   const top=new THREE.Mesh(new THREE.BoxGeometry(6.2,.15,.15),material);top.position.y=5;root.add(top);
   const canvas=document.createElement('canvas');canvas.width=512;canvas.height=96;const ctx=canvas.getContext('2d')!;
   ctx.fillStyle='#141b20';ctx.fillRect(0,0,512,96);ctx.fillStyle='#d5f67a';ctx.font='bold 27px sans-serif';ctx.textAlign='center';ctx.fillText(`${gate.name.toUpperCase()} · PRO`,256,58);
   const sign=new THREE.Mesh(new THREE.PlaneGeometry(6,1.12),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(canvas),side:THREE.DoubleSide}));sign.position.y=4.25;root.add(sign);scene.add(root);portals.push(root);
  }
  const boxes=colliders();let player={...SPAWN,y:0,vy:0,speed:0,jumpHeld:false,moving:false};let yaw=Math.PI;
  const held=new Set<string>();const joy={x:0,y:0};let nearest:Target|null=null;let lastNear='';let gateLatch:string|null=null;let seenTravel=0;
  let wasPaused=false;let hidden=document.hidden;let drag:number|null=null;let dragX=0;
  const reset=()=>{held.clear();joy.x=joy.y=0;drag=null;player.speed=0;if(stick.current)stick.current.style.transform='translate(0,0)';};
  const interact=()=>{if(nearest&&!live.current.paused)live.current.onInteract(nearest.location);};
  api.current={held,joy,interact,reset};
  const resize=()=>{const rect=mount.getBoundingClientRect();renderer.setSize(rect.width,rect.height,false);camera.aspect=rect.width/Math.max(1,rect.height);camera.updateProjectionMatrix();};
  const observer=new ResizeObserver(resize);observer.observe(mount);resize();
  const keydown=(e:KeyboardEvent)=>{
   if(live.current.paused||!canUseKeys(e.target))return;const action=keyAction(e.code);
   if(action){e.preventDefault();if(action==='interact'){if(!e.repeat)interact();}else held.add(action);}
  };
  const keyup=(e:KeyboardEvent)=>{const action=keyAction(e.code);if(action)held.delete(action);};
  const root=world.current!;root.addEventListener('keydown',keydown);window.addEventListener('keyup',keyup);
  window.addEventListener('blur',reset);
  const visibility=()=>{hidden=document.hidden;reset();};document.addEventListener('visibilitychange',visibility);
  const pointerdown=(e:PointerEvent)=>{if(live.current.paused)return;root.focus({preventScroll:true});drag=e.pointerId;dragX=e.clientX;renderer.domElement.setPointerCapture(e.pointerId);};
  const pointermove=(e:PointerEvent)=>{if(drag===e.pointerId){yaw-=(e.clientX-dragX)*.006;dragX=e.clientX;}};
  const pointerup=()=>{drag=null;};
  renderer.domElement.addEventListener('pointerdown',pointerdown);renderer.domElement.addEventListener('pointermove',pointermove);renderer.domElement.addEventListener('pointerup',pointerup);renderer.domElement.addEventListener('pointercancel',pointerup);
  const lost=(e:Event)=>{e.preventDefault();reset();live.current.onFail();};renderer.domElement.addEventListener('webglcontextlost',lost);
  let raf=0;let last=performance.now();let clock=0;let firstFrame=true;
  function frame(now:number){
   raf=requestAnimationFrame(frame);const dt=Math.min((now-last)/1000,.045);last=now;if(hidden)return;clock+=dt;
   const p=live.current;
   if(p.paused!==wasPaused){reset();wasPaused=p.paused;}
   if(p.travel&&p.travel.n!==seenTravel){
    seenTravel=p.travel.n;const target=TARGETS.find(t=>t.location===p.travel!.id);
    if(target){player={...player,x:target.x,z:target.z+1.5,speed:0};yaw=Math.PI;}
   }
   if(!p.paused){
    const keys=inputFrom(held);const input=Math.hypot(joy.x,joy.y)>.1?{...keys,x:joy.x,y:joy.y}:keys;
    player=stepPlayer(player,{...input,yaw},dt,boxes,DEMO_BOUNDS);
    const gate=nearPremiumGate(player,false);
    if(!gate)gateLatch=null;
    if(gate&&gateLatch!==gate.id){gateLatch=gate.id;reset();p.onGate(gate.name);}
   }
   placePerson(hero,player.x,player.z,player.heading,player.y);animateHero(hero,dt,p.paused?0:player.speed,0,'move',reduced);
   const shot=followCamera(player,CAMERA_PRESETS[1],yaw);
   const targetCamera=new THREE.Vector3(shot.x,shot.y+player.y,shot.z);
   if(firstFrame)camera.position.copy(targetCamera);else camera.position.lerp(targetCamera,1-Math.exp(-dt*10));
   camera.lookAt(shot.look.x,shot.look.y+player.y,shot.look.z);
   nearest=null;let distance=4;
   for(const t of TARGETS){const d=Math.hypot(player.x-t.x,player.z-t.z);if(d<distance){nearest=t;distance=d;}}
   if((nearest?.id||'')!==lastNear){lastNear=nearest?.id||'';setNear(nearest);}
   for(const marker of city.markers.values()){marker.ring.rotation.z=reduced?0:clock*.2;marker.material.opacity=.8;}
   renderer.render(scene,camera);
   if(firstFrame){firstFrame=false;p.onReady();root.dataset.ready='true';}
   root.dataset.position=`${player.x.toFixed(2)},${player.z.toFixed(2)}`;
  }
  raf=requestAnimationFrame(frame);
  return()=>{
   cancelAnimationFrame(raf);reset();api.current=null;observer.disconnect();root.removeEventListener('keydown',keydown);window.removeEventListener('keyup',keyup);window.removeEventListener('blur',reset);document.removeEventListener('visibilitychange',visibility);
   renderer.domElement.removeEventListener('webglcontextlost',lost);renderer.domElement.removeEventListener('pointerdown',pointerdown);renderer.domElement.removeEventListener('pointermove',pointermove);renderer.domElement.removeEventListener('pointerup',pointerup);renderer.domElement.removeEventListener('pointercancel',pointerup);
   const geometries=new Set<THREE.BufferGeometry>();const materials=new Set<THREE.Material>();const textures=new Set<THREE.Texture>();
   scene.traverse(object=>{if(object instanceof THREE.Mesh){geometries.add(object.geometry);for(const m of Array.isArray(object.material)?object.material:[object.material]){materials.add(m);for(const v of Object.values(m))if(v instanceof THREE.Texture)textures.add(v);}}});
   geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());renderer.dispose();renderer.domElement.remove();
  };
 },[]);
 return <div ref={world} className="im-world" tabIndex={0} aria-label={props.es?'Camina con WASD o flechas, arrastra para girar, E para hablar':'Move with WASD or arrows, drag to look, E to talk'}>
  <div ref={host} className="im-canvas" />
  {hint&&<button className="im-controls-help" onClick={()=>{setHint(false);world.current?.focus();}}>{props.es?'Muévete con la palanca o WASD. Arrastra para mirar.':'Move with the stick or WASD. Drag to look around.'}<span>{props.es?'Entendido':'Got it'} ×</span></button>}
  <div className="im-touch" hidden={props.paused}>
   <div className="im-stick" role="group" aria-label={props.es?'Palanca de movimiento':'Movement joystick'} onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);world.current?.focus();}} onPointerMove={e=>{if(!e.currentTarget.hasPointerCapture(e.pointerId)||!api.current)return;const r=e.currentTarget.getBoundingClientRect();const dx=(e.clientX-r.left-r.width/2)/40,dy=(e.clientY-r.top-r.height/2)/40;const length=Math.max(1,Math.hypot(dx,dy));api.current.joy.x=dx/length;api.current.joy.y=-dy/length;if(stick.current)stick.current.style.transform=`translate(${dx/length*33}px,${dy/length*33}px)`;}} onPointerUp={()=>api.current?.reset()} onPointerCancel={()=>api.current?.reset()} onLostPointerCapture={()=>api.current?.reset()}><span ref={stick}/></div>
   <div className="im-touch-buttons"><button className="im-jump" onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);api.current?.held.add('jump');}} onPointerUp={()=>api.current?.held.delete('jump')} onPointerCancel={()=>api.current?.held.delete('jump')} onLostPointerCapture={()=>api.current?.held.delete('jump')}>{props.es?'Saltar':'Jump'} ↑</button><button className="im-talk" disabled={!near} onClick={()=>api.current?.interact()}>{near?`${props.es?'Hablar':'Talk'} · ${near.location}`:(props.es?'Busca un círculo de luz':'Find a circle of light')} {near?'→':''}</button></div>
  </div>
 </div>;
}
