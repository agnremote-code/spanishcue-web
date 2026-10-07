"use client";
import {useEffect,useRef,useState,type CSSProperties} from 'react';
import CityPlan from './CityPlan';
import {frameCity} from './camera';
import {layoutPins,planPoint} from './pins';
import type {Location} from './types';

/** Geographic DOM hotspots stay keyboard-accessible in both the 3D city and its plan. */
export default function CityMap({locations,active,completed,onSelect,bilingual}:{locations:Location[];active:string|null;completed:string[];onSelect:(id:string,trigger:HTMLButtonElement)=>void;bilingual:boolean}){
 const host=useRef<HTMLDivElement>(null);
 const buttons=useRef(new Map<string,HTMLButtonElement>());
 const lines=useRef(new Map<string,SVGLineElement>());
 const zoom=useRef<(direction:number)=>void>(()=>{});
 const reset=useRef<()=>void>(()=>{});
 const interaction=useRef({active,completed});
 const hovered=useRef<string|null>(null);
 useEffect(()=>{interaction.current={active,completed};},[active,completed]);
 const selectedLocation=locations.find(loc=>loc.id===active);
 const [ready,setReady]=useState(false);
 const [failed,setFailed]=useState(false);
 useEffect(()=>{
  const element=host.current;if(ready||!element)return;
  const position=()=>{
   const w=element.clientWidth,h=element.clientHeight;if(!w||!h)return;
   const scale=Math.min(w/120,h/80);
   const points=locations.map(loc=>{const button=buttons.current.get(loc.id),p=planPoint(loc.position[0],loc.id==='rooftop'?5.6:loc.id==='balcony'?5.1:1.8,loc.position[1]);return {id:loc.id,x:p[0]*scale+(w-120*scale)/2,y:(p[1]-15)*scale+(h-80*scale)/2,width:button?.offsetWidth??96,height:button?.offsetHeight??82};});
   for(const pin of layoutPins(points,w,h)){
    const button=buttons.current.get(pin.id),line=lines.current.get(pin.id),anchor=points.find(p=>p.id===pin.id)!;
    if(button){button.style.left=`${pin.x}px`;button.style.top=`${pin.y}px`;}
    if(line){line.setAttribute('x1',String(anchor.x));line.setAttribute('y1',String(anchor.y));line.setAttribute('x2',String(pin.x));line.setAttribute('y2',String(pin.y-6));line.style.opacity=Math.hypot(anchor.x-pin.x,anchor.y-pin.y)>12?'1':'0';}
   }
  };
  position();if(typeof ResizeObserver==='undefined')return;
  const observer=new ResizeObserver(position);observer.observe(element);return()=>observer.disconnect();
 },[ready,bilingual,locations]);
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
   const lost=(event:Event)=>{event.preventDefault();cancelAnimationFrame(frame);renderer.domElement.style.display='none';setFailed(true);setReady(false);};
   renderer.domElement.addEventListener('webglcontextlost',lost);
   renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.6));
   renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
   renderer.setClearColor('#172f43',0);renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;renderer.domElement.setAttribute('aria-hidden','true');
   element.insertBefore(renderer.domElement,element.firstChild);
   const camera=new T.PerspectiveCamera(38,1,.1,150);camera.position.set(27,29,32);
   const controls=handles.controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,1,-1);
   controls.enablePan=false;controls.enableZoom=false;controls.enableDamping=!motion.matches;controls.dampingFactor=.09;
   controls.minPolarAngle=.35;controls.maxPolarAngle=1.15;controls.minAzimuthAngle=-.5;controls.maxAzimuthAngle=1.4;
   scene.add(new T.HemisphereLight('#ffdcb4','#36436d',1.5));
   const sun=new T.DirectionalLight('#ffbe80',2.8);sun.position.set(-18,24,6);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-25,right:25,top:25,bottom:-25});sun.shadow.normalBias=.05;handles.shadow=sun.shadow;scene.add(sun);
   const material=(color:string)=>new T.MeshStandardMaterial({color,roughness:.78});
   const mats={ground:material('#b78868'),road:material('#536579'),cream:material('#e6b169'),coral:material('#d86959'),roof:material('#843e51'),blue:material('#348c9a'),green:material('#3c926a'),dark:material('#25354c'),window:material('#29394e'),trunk:material('#755340'),water:material('#16798b'),yellow:material('#ffc044'),white:material('#ffe4b1'),purple:material('#8d6daf'),mint:material('#73b09a')};
   mats.water.roughness=.28;mats.water.metalness=.35;
   const glow=new T.MeshStandardMaterial({color:'#ffe8a3',emissive:'#ffaf53',emissiveIntensity:1.6,roughness:.4});
   const rim=new T.DirectionalLight('#91bde8',1.1);rim.position.set(14,10,-16);scene.add(rim);
   function box(w:number,h:number,d:number,x:number,y:number,z:number,mat:InstanceType<typeof T.MeshStandardMaterial>){const mesh=new T.Mesh(new T.BoxGeometry(w,h,d),mat);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;scene.add(mesh);return mesh;}
   function sphere(r:number,x:number,y:number,z:number,mat:InstanceType<typeof T.MeshStandardMaterial>){const mesh=new T.Mesh(new T.IcosahedronGeometry(r,1),mat);mesh.position.set(x,y,z);mesh.castShadow=true;scene.add(mesh);return mesh;}
   function tree(x:number,z:number,size=1){box(.2,1.6*size,.2,x,.8*size,z,mats.trunk);const crown=sphere(.85*size,x,1.9*size,z,mats.green);crown.scale.y=1.25;sphere(.55*size,x-.45*size,1.7*size,z+.15,mats.mint);sphere(.5*size,x+.3*size,2.5*size,z,mats.green);box(1.25,.16,1.25,x,.02,z,mats.cream);}
   function person(x:number,z:number,color:InstanceType<typeof T.MeshStandardMaterial>,y=0){const body=box(.23,.55,.25,x,y+.4,z,color);const head=sphere(.18,x,y+.86,z,mats.cream);body.userData.baseY=body.position.y;head.userData.baseY=head.position.y;residents.push(body,head);}
   const residents:InstanceType<typeof T.Object3D>[]=[];
   function building(x:number,z:number,w:number,h:number,d:number,mat:InstanceType<typeof T.MeshStandardMaterial>){box(w,h,d,x,h/2,z,mat);box(w+.15,.22,d+.15,x,h+.1,z,mats.roof);for(let row=1;row<h-.4;row+=1.2)for(let col=-w/2+.55;col<w/2-.3;col+=1.05){box(.46,.65,.06,x+col,row,z+d/2+.04,mats.window);box(.62,.08,.2,x+col,row-.35,z+d/2+.1,mats.cream);}box(.6,1.05,.08,x,.53,z+d/2+.06,mats.dark);for(let row=1;row<h-.4;row+=1.2)for(let col=-d/2+.55;col<d/2-.3;col+=1.05)box(.06,.65,.46,x+w/2+.04,row,z+col,mats.window);box(w+.22,.12,d+.22,x,.16,z,mats.cream);}
   box(26,.75,26,0,-.55,-1,mats.ground);box(26.3,.24,26.3,0,-1.02,-1,mats.dark);
   box(25.6,.06,25.6,0,-.13,-1,mats.cream);
   box(4.1,.045,25,0,-.09,-1,mats.trunk);box(25,.045,3.6,0,-.08,0,mats.trunk);
   box(3,.035,25,0,-.04,-1,mats.road);box(25,.035,2.5,0,-.03,0,mats.road);
   box(3.15,.08,25.8,11,-.08,-1,mats.water);
   const waterLines:InstanceType<typeof T.Mesh>[]=[];
   for(let i=0;i<26;i++){const ripple=box(.3+(i%4)*.16,.012,.035,10.05+(i%3)*.73,-.025,-12+i*.96,mats.mint);ripple.castShadow=false;ripple.userData.baseX=ripple.position.x;waterLines.push(ripple);}
   for(let i=-11;i<12;i+=1.6)box(.09,.045,.6,0,-.005,i,mats.white);
   // Balcony: visible ledge, railing and plant pots.
   building(-7,-5,3.4,4.5,3.1,mats.coral);box(3,.15,1.1,-7,2.6,-2.98,mats.coral);
   for(let i=-8.3;i<-5.5;i+=.35)box(.05,.7,.05,i,2.97,-2.45,mats.dark);box(3,.06,.05,-7,3.34,-2.45,mats.dark);
   for(let i=0;i<3;i++){box(.33,.35,.33,-7.9+i*.8,2.84,-2.65,mats.roof);sphere(.3,-7.9+i*.8,3.15,-2.65,mats.green);}
   person(-7.7,-2.9,mats.blue,2.7);person(-6.3,-2.9,mats.coral,2.7);
   // Rooftop party with warm lanterns, people and a long table.
   building(0,-10,4.4,4,3,mats.purple);box(4.5,.25,3.1,0,4.15,-10,mats.cream);box(2,.12,.7,0,4.8,-10,mats.blue);
   for(let i=-2;i<=2;i++){box(.05,1.8,.05,i,5,-11.4,mats.dark);sphere(.13,i,5.8-Math.sin((i+2)/4*Math.PI)*.35,-11.4,glow);}
   for(const x of [-.8,.8])box(.1,.6,.1,x,4.5,-10,mats.dark);
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
   // Promenade lamps, railings and crossing connect the six scenes visually.
   for(const z of [-10,-2,7]){box(.08,2.3,.08,9.3,1.05,z,mats.dark);sphere(.2,9.3,2.3,z,glow);}
   for(const z of [-10,-8,-6,-4,4,6,8,10])box(.07,.65,.07,9.7,.25,z,mats.dark);
   box(.07,.06,9,9.7,.6,-7,mats.dark);box(.07,.06,9,9.7,.6,7,mats.dark);
   for(let x=-1;x<=1;x+=.4)box(.2,.04,1.8,x,.005,2.8,mats.white);
   // Small, shared-material details keep the six districts recognisable without assets or postprocessing.
   building(-10,9,2.5,2.7,2.5,mats.blue);building(4,-10,2.2,3.3,2.3,mats.cream);
   for(const [x,z,h] of [[-7,-5,4.5],[0,-10,4],[-7,-10,2.8],[-4,9,2.4],[5,9,2.8],[4,-10,3.3]]){
    box(.45,.8,.5,x+.65,h+.4,z-.45,mats.roof);box(.58,.12,.6,x+.65,h+.85,z-.45,mats.cream);
    for(const dx of [-.6,.6])box(.3,.45,.08,x+dx,1.1,z+1.56,glow);
   }
   // A café awning, outdoor tables and a flower-lined path give the streets a lived-in scale.
   for(let i=0;i<7;i++)box(.4,.13,1.15,3.8+i*.4,1.95,10.5,i%2?mats.white:mats.blue);
   for(const x of [3.8,6.4]){box(.1,.7,.1,x,.4,11.5,mats.dark);const table=box(.7,.08,.7,x,.78,11.5,mats.white);table.rotation.y=.2;}
   for(const z of [3.3,6.7])for(const x of [-8.5,-5.5]){box(.65,.3,.5,x,.18,z,mats.trunk);sphere(.25,x,.5,z,mats.purple);sphere(.18,x+.2,.55,z,mats.yellow);}
   box(3.6,.12,.8,-7,.02,5.9,mats.cream);
   for(let z=2;z<9;z+=.75)box(.7,.06,.55,-3.7,-.005,z,mats.white);
   // Market crates, a second canopy, stage speakers and a guitar make each sound source distinct.
   for(const x of [5.5,8.6]){box(.7,.6,.7,x,.3,4,mats.trunk);sphere(.2,x,.72,4,mats.coral);}
   for(const x of [5.9,8.1]){box(.35,.65,.4,x,.5,-5.4,mats.dark);sphere(.1,x,.68,-5.16,mats.purple);}
   const guitar=sphere(.25,7.2,.9,-4.8,mats.yellow);guitar.scale.set(.65,1.2,.35);box(.08,.5,.08,7.24,1.23,-4.8,mats.trunk);
   person(5.8,-3.2,mats.blue);person(7.1,-2.9,mats.green);person(1.9,3.9,mats.coral);person(-2.2,-7,mats.purple);
   // Lantern strings and emissive bulbs: visible warmth without expensive point-light shadows.
   const string=new T.Line(new T.BufferGeometry().setFromPoints(Array.from({length:17},(_,i)=>new T.Vector3(-2+i*.25,5.8-Math.sin(i/16*Math.PI)*.35,-11.4))),new T.LineBasicMaterial({color:'#29394e'}));scene.add(string);
   const beacons=locations.map(loc=>{
    const mat=new T.MeshBasicMaterial({color:loc.color,transparent:true,opacity:.45,depthWrite:false,side:T.DoubleSide});
    const ring=new T.Mesh(new T.RingGeometry(.9,1.03,40),mat);ring.rotation.x=-Math.PI/2;ring.position.set(loc.position[0],loc.id==='rooftop'?4.32:loc.id==='balcony'?4.75:.16,loc.position[1]);scene.add(ring);
    const bars=Array.from({length:4},(_,i)=>{const bar=box(.1,.6,.1,loc.position[0]-.3+i*.2,ring.position.y+.5,loc.position[1],glow);bar.castShadow=false;bar.visible=false;return bar;});
    return {id:loc.id,ring,bars};
   });
   const anchors=locations.map(loc=>({id:loc.id,p:new T.Vector3(loc.position[0],loc.id==='rooftop'?6.2:loc.id==='balcony'?5.6:3.2,loc.position[1])}));
   const projected=new T.Vector3(),focusTarget=new T.Vector3();let visible=true;let zoomFactor=1;let elapsed=0,lastTime=0;let framingActive:string|null=null;
   const intersection=new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??true;});intersection.observe(element);
   const oldCleanup=cleanup;cleanup=()=>{intersection.disconnect();oldCleanup();};
   const render=(now=0)=>{
    if(disposed)return;
    if(visible&&!document.hidden&&element.clientWidth&&element.clientHeight){
     const dt=Math.min((now-lastTime)/1000,.05);if(!motion.matches&&!document.hidden)elapsed+=dt;
     const current=interaction.current.active,place=locations.find(loc=>loc.id===current);
     if(current!==framingActive){zoomFactor=1;framingActive=current;}
     focusTarget.set(place?place.position[0]*.16:0,1,place?place.position[1]*.16:-1);
     const shift=focusTarget.clone().sub(controls.target).multiplyScalar(motion.matches?1:Math.min(dt*7,1));
     controls.target.add(shift);camera.position.add(shift);
     for(const [i,ripple] of waterLines.entries())ripple.position.x=ripple.userData.baseX+Math.sin(elapsed*.8+i)*.12;
     for(const [i,resident] of residents.entries())resident.position.y=resident.userData.baseY+Math.sin(elapsed*1.8+Math.floor(i/2))* .018;
     for(const beacon of beacons){
      const selected=beacon.id===current,over=beacon.id===hovered.current;
      const scale=selected?1.25+Math.sin(elapsed*2.5)*.12:over?1.25:1;
      beacon.ring.scale.setScalar(scale);beacon.ring.material.opacity=selected ? .9 : over ? .7 : interaction.current.completed.includes(beacon.id) ? .65 : .28;
      beacon.bars.forEach((bar,i)=>{bar.visible=selected;bar.scale.y=.5+(Math.sin(elapsed*3+i)+1)*.5;});
     }
     controls.update();frameCity(camera,controls.target,element.clientWidth,element.clientHeight,zoomFactor*(current ? .96 : 1));renderer.render(scene,camera);
     const points=anchors.map(anchor=>{projected.copy(anchor.p).project(camera);const button=buttons.current.get(anchor.id);return {id:anchor.id,x:(projected.x*.5+.5)*element.clientWidth,y:(-projected.y*.5+.5)*element.clientHeight,width:button?.offsetWidth??96,height:button?.offsetHeight??82};});
     for(const pin of layoutPins(points,element.clientWidth,element.clientHeight)){
      const button=buttons.current.get(pin.id),line=lines.current.get(pin.id),anchor=points.find(p=>p.id===pin.id)!;
      if(button){button.style.left=`${pin.x}px`;button.style.top=`${pin.y}px`;}
      if(line){line.setAttribute('x1',String(anchor.x));line.setAttribute('y1',String(anchor.y));line.setAttribute('x2',String(pin.x));line.setAttribute('y2',String(pin.y-6));line.style.opacity=Math.hypot(anchor.x-pin.x,anchor.y-pin.y)>12?'1':'0';}
     }
    }
    lastTime=now;frame=requestAnimationFrame(render);
   };
   const resize=()=>{const w=element.clientWidth,h=element.clientHeight;if(!w||!h)return;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);};
   handles.observer=new ResizeObserver(resize);handles.observer.observe(element);resize();controls.update();
   zoom.current=direction=>{zoomFactor=Math.max(.85,Math.min(1.35,zoomFactor+direction*.1));};
   reset.current=()=>{zoomFactor=1;camera.position.set(27,29,32);controls?.target.set(0,1,-1);controls?.update();};
   setReady(true);render();
  }).catch(()=>{cleanup();if(!disposed){setFailed(true);setReady(false);}});
  return()=>{disposed=true;cleanup();};
 },[locations]);
 return <section className={`sm-map ${ready?'ready':''} ${active?'is-exploring':''}`} style={{'--sm-scene-color':selectedLocation?.color??'#eabd80'} as CSSProperties} aria-label={bilingual?'Mapa de sonidos / Sound map':'Mapa de sonidos'}>
  <div className="sm-map-heading"><span><b className="sm-live-dot"/> RÍO CLARO <i>·</i> 18:42</span><span>{bilingual?`${completed.length}/6 explored`:`${completed.length}/6 rincones explorados`}</span></div>
  <div className="sm-city" ref={host}>
   {!ready&&<CityPlan active={active} locations={locations} completed={completed}/>}
   {<svg className="sm-pin-lines" aria-hidden="true">{locations.map(loc=><line key={loc.id} ref={node=>{if(node)lines.current.set(loc.id,node);else lines.current.delete(loc.id);}}/>)}</svg>}
   {locations.map((loc,index)=><button ref={node=>{if(node)buttons.current.set(loc.id,node);else buttons.current.delete(loc.id);}} key={loc.id} className={`sm-pin ${active===loc.id?'active':''} ${completed.includes(loc.id)?'complete':''}`} style={{'--sm-pin-color':loc.color,left:`${index%2?73:27}%`,top:`${31+Math.floor(index/2)*24}%`} as CSSProperties} onPointerEnter={()=>{hovered.current=loc.id;}} onPointerLeave={()=>{hovered.current=null;}} onFocus={()=>{hovered.current=loc.id;}} onBlur={()=>{hovered.current=null;}} aria-pressed={active===loc.id} aria-label={`${loc.title}${bilingual?` / ${loc.titleEn}`:''}${completed.includes(loc.id)?' · ✓':''}`} data-sound-location={loc.id} onClick={event=>onSelect(loc.id,event.currentTarget)}><span>{completed.includes(loc.id)?'✓':loc.icon}<small className="sm-pin-index">0{index+1}</small></span><b>{bilingual?loc.titleEn:loc.title}</b></button>)}
  </div>
  {selectedLocation&&<div className="sm-map-now" role="status"><i className="sm-equalizer" aria-hidden="true"><i/><i/><i/><i/></i><span><small>{bilingual?'EXPLORING / ESTÁS AQUÍ':'ESTÁS AQUÍ'}</small><b>{bilingual?selectedLocation.titleEn:selectedLocation.title}</b></span></div>}
  <footer><p>{failed?(bilingual?'Mapa accesible · Choose any sound':'Mapa accesible · Elige un sonido'):bilingual?'Arrastra para explorar · Drag to explore':'Arrastra la ciudad. Sigue un sonido.'}</p>{ready&&<div className="sm-map-controls"><button onClick={()=>zoom.current(-1)} aria-label="Acercar / Zoom in">+</button><button onClick={()=>zoom.current(1)} aria-label="Alejar / Zoom out">−</button><button onClick={()=>reset.current()} aria-label="Restablecer vista / Reset view">↺</button></div>}</footer>
 </section>;
}
