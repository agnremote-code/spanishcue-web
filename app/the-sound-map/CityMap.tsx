"use client";
import {useEffect,useRef,useState} from 'react';
import type {Location} from './types';

/** The DOM buttons are the only selection surface: WebGL is decorative and optional. */
export default function CityMap({locations,active,completed,onSelect,bilingual}:{locations:Location[];active:string|null;completed:string[];onSelect:(id:string)=>void;bilingual:boolean}){
 const host=useRef<HTMLDivElement>(null);
 const buttons=useRef(new Map<string,HTMLButtonElement>());
 const zoom=useRef<(direction:number)=>void>(()=>{});
 const reset=useRef<()=>void>(()=>{});
 const [ready,setReady]=useState(false);
 const [failed,setFailed]=useState(false);
 useEffect(()=>{
  let disposed=false;let cleanup=()=>{};
  const element=host.current;if(!element)return;
  Promise.all([import('three'),import('three/examples/jsm/controls/OrbitControls.js')]).then(([T,{OrbitControls}])=>{
   if(disposed)return;
   const renderer=new T.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});
   const scene=new T.Scene();
   let frame=0;const handles:{observer?:ResizeObserver;controls?:InstanceType<typeof OrbitControls>;shadow?:{dispose:()=>void}}={};
   const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
   cleanup=()=>{
    cancelAnimationFrame(frame);handles.observer?.disconnect();handles.controls?.dispose();
    renderer.domElement.removeEventListener('webglcontextlost',lost);
    scene.traverse(object=>{const mesh=object as InstanceType<typeof T.Mesh>;mesh.geometry?.dispose();const materials=Array.isArray(mesh.material)?mesh.material:[mesh.material];materials.forEach(m=>m?.dispose());});
    handles.shadow?.dispose();renderer.dispose();renderer.domElement.remove();zoom.current=()=>{};reset.current=()=>{};
   };
   const lost=(event:Event)=>{event.preventDefault();cancelAnimationFrame(frame);setFailed(true);setReady(false);};
   renderer.domElement.addEventListener('webglcontextlost',lost);
   renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.6));
   renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
   renderer.setClearColor('#eee8df',0);renderer.domElement.setAttribute('aria-hidden','true');
   element.insertBefore(renderer.domElement,element.firstChild);
   const camera=new T.PerspectiveCamera(38,1,.1,150);camera.position.set(27,29,32);
   const controls=handles.controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,0,-1);
   controls.enablePan=false;controls.enableZoom=false;controls.enableDamping=!motion.matches;controls.dampingFactor=.09;
   controls.minPolarAngle=.35;controls.maxPolarAngle=1.15;controls.minAzimuthAngle=-.5;controls.maxAzimuthAngle=1.4;
   scene.add(new T.HemisphereLight('#fff8e7','#8e9e95',2.8));
   const sun=new T.DirectionalLight('#fff0d6',3.4);sun.position.set(-14,25,12);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-25,right:25,top:25,bottom:-25});sun.shadow.normalBias=.05;handles.shadow=sun.shadow;scene.add(sun);
   const material=(color:string)=>new T.MeshStandardMaterial({color,roughness:.85});
   const mats={ground:material('#ded4bf'),road:material('#f6efe1'),cream:material('#f4ddbd'),coral:material('#c97b69'),roof:material('#b86755'),blue:material('#729b9c'),green:material('#85a384'),dark:material('#385956'),window:material('#4d6969'),trunk:material('#a88263'),water:material('#8fbfbd'),yellow:material('#e7b957'),white:material('#fff4d9')};
   function box(w:number,h:number,d:number,x:number,y:number,z:number,mat:InstanceType<typeof T.MeshStandardMaterial>){const mesh=new T.Mesh(new T.BoxGeometry(w,h,d),mat);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;scene.add(mesh);return mesh;}
   function sphere(r:number,x:number,y:number,z:number,mat:InstanceType<typeof T.MeshStandardMaterial>){const mesh=new T.Mesh(new T.IcosahedronGeometry(r,1),mat);mesh.position.set(x,y,z);mesh.castShadow=true;scene.add(mesh);return mesh;}
   function tree(x:number,z:number,size=1){box(.2,1.6*size,.2,x,.8*size,z,mats.trunk);const crown=sphere(.85*size,x,1.9*size,z,mats.green);crown.scale.y=1.25;}
   function person(x:number,z:number,color:InstanceType<typeof T.MeshStandardMaterial>,y=0){box(.23,.55,.25,x,y+.4,z,color);sphere(.18,x,y+.86,z,mats.cream);}
   function building(x:number,z:number,w:number,h:number,d:number,mat:InstanceType<typeof T.MeshStandardMaterial>){box(w,h,d,x,h/2,z,mat);box(w+.15,.22,d+.15,x,h+.1,z,mats.roof);for(let row=1;row<h-.4;row+=1.2)for(let col=-w/2+.55;col<w/2-.3;col+=1.05){box(.46,.65,.06,x+col,row,z+d/2+.04,mats.window);box(.62,.08,.2,x+col,row-.35,z+d/2+.1,mats.cream);}box(.6,1.05,.08,x,.53,z+d/2+.06,mats.dark);}
   box(26,.75,26,0,-.55,-1,mats.ground);
   box(3,.035,25,0,-.12,-1,mats.road);box(25,.035,2.5,0,-.1,0,mats.road);
   box(3,.04,25,11,-.1,-1,mats.water);
   for(let i=-11;i<12;i+=1.6)box(.09,.045,.6,0,-.08,i,mats.white);
   // Balcony: visible ledge, railing and plant pots.
   building(-7,-5,3.4,4.5,3.1,mats.cream);box(3,.15,1.1,-7,2.6,-2.98,mats.coral);
   for(let i=-8.3;i<-5.5;i+=.35)box(.05,.7,.05,i,2.97,-2.45,mats.dark);box(3,.06,.05,-7,3.34,-2.45,mats.dark);
   for(let i=0;i<3;i++){box(.33,.35,.33,-7.9+i*.8,2.84,-2.65,mats.roof);sphere(.3,-7.9+i*.8,3.15,-2.65,mats.green);}
   // Rooftop party with warm lanterns, people and a long table.
   building(0,-10,4.4,4,3,mats.coral);box(4.5,.25,3.1,0,4.15,-10,mats.cream);box(2,.12,.7,0,4.8,-10,mats.blue);
   for(let i=-2;i<=2;i++){box(.05,1.8,.05,i,5,-11.4,mats.dark);sphere(.13,i,5.8,-11.4,mats.yellow);}
   person(-1.4,-9.3,mats.blue,4.28);person(1.5,-10,mats.green,4.28);
   // Park, benches and two speakers.
   box(5,.08,4.5,-7,-.06,5,mats.green);box(2,.16,.65,-7,.65,5,mats.trunk);box(2,.6,.13,-7,1,4.7,mats.trunk);person(-7.6,5.6,mats.coral);person(-6.4,5.6,mats.blue);
   [[-9,3],[-9,7],[-5,7],[-4,4]].forEach(([x,z])=>tree(x,z,1.2));
   // Market stall with striped awning and individually visible fruit.
   box(2.6,1,1.6,7,.5,5,mats.cream);for(const x of [5.8,8.2])box(.08,2.5,.08,x,1.25,5.7,mats.dark);
   for(let i=0;i<8;i++)box(.36,.12,2.3,5.75+i*.36,2.55,5,i%2?mats.cream:mats.coral);
   for(let i=0;i<9;i++)sphere(.16,6.2+(i%3)*.45,1.12,4.6+Math.floor(i/3)*.35,mats.yellow);person(7,3.6,mats.blue);
   // Taxi with four wheels, sign and windscreen.
   box(1.5,.6,2.8,0,.48,0,mats.yellow);box(1.3,.5,1.25,0,1.03,-.1,mats.window);box(.6,.14,.3,0,1.35,-.1,mats.white);
   for(const x of [-.76,.76])for(const z of [-.85,.85]){const wheel=new T.Mesh(new T.CylinderGeometry(.28,.28,.17,12),mats.dark);wheel.rotation.z=Math.PI/2;wheel.position.set(x,.3,z);scene.add(wheel);}
   // Riverside singer with microphone, open guitar case and small platform.
   box(3,.18,2.6,7,.03,-5,mats.trunk);person(7,-5,mats.coral,.18);box(.04,1.3,.04,7.45,.75,-4.8,mats.dark);sphere(.1,7.45,1.43,-4.8,mats.dark);box(.55,.12,1,6.3,.18,-4.4,mats.dark);
   building(-7,-10,3,2.8,2.2,mats.blue);building(-4,9,2.2,2.4,2.2,mats.cream);building(5,9,3,2.8,2,mats.coral);
   [[-11,-8],[-3,-6],[4,-7],[8,-9],[9,1],[3,5],[-11,0],[2,9]].forEach(([x,z])=>tree(x,z,.8));
   box(5,.16,1.7,10,.15,0,mats.trunk);
   const anchors=locations.map(loc=>({id:loc.id,p:new T.Vector3(loc.position[0],loc.id==='rooftop'?6.2:loc.id==='balcony'?5.6:3.2,loc.position[1])}));
   const projected=new T.Vector3();let visible=true;
   const intersection=new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??true;});intersection.observe(element);
   const oldCleanup=cleanup;cleanup=()=>{intersection.disconnect();oldCleanup();};
   const render=()=>{
    if(disposed)return;
    if(visible){controls?.update();renderer.render(scene,camera);for(const anchor of anchors){projected.copy(anchor.p).project(camera);const button=buttons.current.get(anchor.id);if(button){button.style.left=`${(projected.x*.5+.5)*100}%`;button.style.top=`${(-projected.y*.5+.5)*100}%`;}}}
    frame=requestAnimationFrame(render);
   };
   const resize=()=>{const w=element.clientWidth,h=element.clientHeight;if(!w||!h)return;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);};
   handles.observer=new ResizeObserver(resize);handles.observer.observe(element);resize();controls.update();
   zoom.current=direction=>{const target=controls!.target;const offset=camera.position.clone().sub(target);offset.setLength(Math.max(30,Math.min(65,offset.length()+direction*5)));camera.position.copy(target).add(offset);};
   reset.current=()=>{camera.position.set(27,29,32);controls?.target.set(0,0,-1);controls?.update();};
   setReady(true);render();
  }).catch(()=>{cleanup();if(!disposed){setFailed(true);setReady(false);}});
  return()=>{disposed=true;cleanup();};
 },[locations]);
 return <section className={`sm-map ${ready?'ready':''}`} aria-label={bilingual?'Mapa de sonidos / Sound map':'Mapa de sonidos'}>
  <div className="sm-map-heading"><span>RÍO CLARO <i>·</i> 18:42</span><span>{bilingual?'6 sonidos · 6 sounds':'6 rincones · 6 historias'}</span></div>
  <div className="sm-city" ref={host}>
   {!ready&&<div className="sm-map-fallback" aria-hidden="true"><span>RÍO</span><i/><i/><i/></div>}
   {locations.map((loc,i)=><button ref={node=>{if(node)buttons.current.set(loc.id,node);else buttons.current.delete(loc.id);}} key={loc.id} className={`sm-pin ${active===loc.id?'active':''} ${completed.includes(loc.id)?'complete':''}`} style={!ready?{left:`${20+(i%3)*30}%`,top:`${30+Math.floor(i/3)*36}%`}:undefined} aria-pressed={active===loc.id} aria-label={`${loc.title}${bilingual?` / ${loc.titleEn}`:''}${completed.includes(loc.id)?' · ✓':''}`} onClick={()=>onSelect(loc.id)}><span>{completed.includes(loc.id)?'✓':loc.icon}</span><b>{bilingual?loc.titleEn:loc.title}</b></button>)}
  </div>
  <footer><p>{failed?(bilingual?'Mapa accesible · Choose any sound':'Mapa accesible · Elige un sonido'):bilingual?'Arrastra para explorar · Drag to explore':'Arrastra la ciudad. Sigue un sonido.'}</p>{ready&&<div className="sm-map-controls"><button onClick={()=>zoom.current(-1)} aria-label="Acercar / Zoom in">+</button><button onClick={()=>zoom.current(1)} aria-label="Alejar / Zoom out">−</button><button onClick={()=>reset.current()} aria-label="Restablecer vista / Reset view">↺</button></div>}</footer>
 </section>;
}
