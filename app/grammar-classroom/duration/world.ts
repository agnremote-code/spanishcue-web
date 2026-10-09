import * as T from 'three';
import {SVGRenderer} from 'three/addons/renderers/SVGRenderer.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createPerson,setPose,animatePerson} from '../../noche-abierta/people3d';
import {places,type TimeState} from './model';
export type WorldView='district'|'street'|'focus';
export type DurationWorldAPI={update:(s:TimeState)=>void;view:(v:WorldView)=>void;walk:(x:number,z:number)=>void;dispose:()=>void};
/** A navigable miniature neighbourhood, with GPU and real-geometry CPU renderers. */
export function mountDurationWorld(host:HTMLElement,onPick:(id:number)=>void,onReady:()=>void,onFail:()=>void):DurationWorldAPI{
 let renderer:T.WebGLRenderer|SVGRenderer;
 try{if(!window.WebGLRenderingContext)throw new Error('No WebGL');renderer=new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}catch{renderer=new SVGRenderer();renderer.setPrecision(2);}
 const software=renderer instanceof SVGRenderer;host.dataset.renderer=software?'svg':'webgl';
 if(renderer instanceof T.WebGLRenderer){renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6));renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.35;}
 renderer.setClearColor(new T.Color('#10172c'),0);renderer.domElement.setAttribute('aria-hidden','true');host.insertBefore(renderer.domElement,host.firstChild);
 const scene=new T.Scene(),camera=new T.PerspectiveCamera(43,1,.1,160);const controls=new OrbitControls(camera,renderer.domElement);
 controls.enablePan=false;controls.enableZoom=false;controls.enableDamping=false;controls.minPolarAngle=.3;controls.maxPolarAngle=1.48;controls.minAzimuthAngle=-.85;controls.maxAzimuthAngle=.9;
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');const geometries=new Set<T.BufferGeometry>(),materials=new Set<T.Material>();
 const material=(color:string,light=false)=>{const m=software?new T.MeshLambertMaterial({color}):new T.MeshStandardMaterial({color,roughness:.65,metalness:light?.25:.05,emissive:light?color:'#000000',emissiveIntensity:light?1.2:0});materials.add(m);return m;};
 const m={road:material('#29303e'),base:material('#111a2d'),paving:material('#7a7181'),curb:material('#d4ba9a'),cream:material('#e7d3ab'),wood:material('#754934'),dark:material('#1d293c'),glass:material('#66c9d2',true),amber:material('#ffd17f',true),pink:material('#ea688d',true),leaf:material('#42877a'),leaf2:material('#77ac85'),water:material('#50bfc1',true),line:material('#e1ca9e')};
 const mesh=(g:T.BufferGeometry,mat:T.Material,x:number,y:number,z:number,parent:T.Object3D=scene)=>{geometries.add(g);const o=new T.Mesh(g,mat);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;};
 const box=(w:number,h:number,d:number,x:number,y:number,z:number,mat:T.Material,parent:T.Object3D=scene)=>mesh(new T.BoxGeometry(w,h,d),mat,x,y,z,parent);
 const cylinder=(r:number,h:number,x:number,y:number,z:number,mat:T.Material,parent:T.Object3D=scene)=>mesh(new T.CylinderGeometry(r,r,h,software?8:20),mat,x,y,z,parent);
 scene.add(new T.HemisphereLight('#cedcfa','#665e80',software?2.2:2.8));
 const sun=new T.DirectionalLight('#ffce99',software?1.2:3.5);sun.position.set(-15,25,15);sun.castShadow=!software;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-22,right:22,top:20,bottom:-20,near:.5,far:75});sun.shadow.normalBias=.035;scene.add(sun);
 const rim=new T.DirectionalLight('#829aff',software?.6:2);rim.position.set(10,10,-15);scene.add(rim);
 box(34,.9,23,0,-.65,0,m.base).renderOrder=-100;box(33,.12,22,0,-.13,0,m.road).renderOrder=-99;
 // Two pavements separated by a walkable boulevard.
 box(32,.25,10,0,0,-5,m.paving).renderOrder=-98;box(32,.25,5.5,0,0,8,m.paving).renderOrder=-98;box(33,.16,.22,0,.12,.1,m.curb).renderOrder=-97;box(33,.16,.22,0,.12,5.1,m.curb).renderOrder=-97;
 for(let x=-15;x<16;x+=2.5)box(1.1,.012,.07,x,-.055,2.6,m.line).renderOrder=-96;
 for(let z=.6;z<5;z+=.62)box(2,.018,.3,-5,-.04,z,m.cream).renderOrder=-96;
 for(let x=-15;x<=15;x+=1.5)box(.014,.015,9.7,x,.136,-5,m.curb).renderOrder=-96;
 // Distant skyline, deliberately lower contrast than the four teaching locations.
 const skyline=material('#344463');for(let i=0;i<16;i++){const h=2+(i*7%5);box(1.6,h,2,-16+i*2.15,h/2,-12,skyline);}
 const targets:T.Object3D[]=[],rings:T.Mesh[]=[],beacons:T.Mesh[]=[];
 places.forEach((p,i)=>{
  const group=new T.Group();group.position.set(p.x,.14,p.z);scene.add(group);const wall=material(p.color);
  if(i!==3){
   const h=i===1?4.8:i===0?6.5:3.5,w=i===1?7:5;
   const building=box(w,h,4.8,0,h/2,0,wall,group);building.userData.place=i;targets.push(building);
   box(w+.3,.24,5.1,0,h+.1,0,m.cream,group);box(w+.5,.2,5.3,0,h+.35,0,m.dark,group);
   box(w+.15,.22,.28,0,.38,2.48,m.cream,group);
   const front=2.43;
   for(let y=1.2;y<h-.5;y+=1.8)for(let x=-w/2+.7;x<w/2-.2;x+=1.25){
    box(.86,1.12,.1,x,y+.25,front,m.dark,group);box(.65,.9,.04,x,y+.25,front+.07,(Math.round(x+y)*3)%2?m.amber:m.glass,group);box(.04,1.04,.09,x,y+.25,front+.11,m.cream,group);
    if(i===0&&y>2){box(1.02,.07,.58,x,y-.32,front+.25,m.dark,group);for(let n=-1;n<=1;n++)box(.04,.4,.04,x+n*.4,y-.08,front+.53,m.cream,group);box(1.02,.05,.04,x,y+.13,front+.53,m.cream,group);}
   }
   box(1,1.8,.16,0,.96,front+.17,m.dark,group);box(.75,1.5,.08,0,1,front+.28,m.glass,group);cylinder(.065,.3,.28,1,front+.37,m.amber,group);
   if(i===1){for(const x of [-2.9,2.9]){cylinder(.21,3,x,1.6,3.1,m.cream,group);box(.65,.2,.65,x,3.2,3.1,m.cream,group);}box(7.6,.4,1.5,0,3.5,3,m.dark,group);box(6.8,.065,.08,0,3.55,3.78,m.glass,group);for(let n=0;n<3;n++)box(7.5-n*.3,.13,1.1,0,.08+n*.12,3.2-n*.2,m.cream,group);}
   if(i===2){for(let n=0;n<9;n++){const awning=box(.59,.12,1.8,-2.35+n*.59,2.75,3.1,n%2?m.cream:m.pink,group);awning.rotation.x=.15;box(.59,.3,.09,-2.35+n*.59,2.5,3.95,n%2?m.cream:m.pink,group);}for(const x of [-1.6,1.6]){cylinder(.53,.08,x,.85,3.8,m.wood,group);cylinder(.07,.8,x,.4,3.8,m.dark,group);for(const d of [-.8,.8]){box(.45,.08,.45,x+d,.47,3.8,m.cream,group);box(.45,.5,.08,x+d,.76,4,m.wood,group);}}}
   // Roof furniture, chimneys and luminous sign strips give each facade depth.
   box(1.3,.6,1.2,-1,h+.7,-.5,m.dark,group);box(.1,.8,.1,-1,h+1.4,-.5,m.cream,group);box(w-.6,.16,.1,0,h-.4,2.52,i===1?m.glass:i===2?m.pink:m.amber,group);
  }else{
   const plinth=cylinder(2.1,.42,0,.15,2,m.cream,group);plinth.userData.place=i;targets.push(plinth);cylinder(1.86,.11,0,.41,2,m.water,group);cylinder(.35,1.4,0,.9,2,m.cream,group);cylinder(.95,.12,0,1.58,2,m.water,group);
   for(const x of [-4,4]){box(2,.15,.6,x,.65,2,m.wood,group);box(2,.7,.12,x,.96,2.26,m.wood,group);for(const dx of [-.75,.75])box(.1,.65,.5,x+dx,.33,2,m.dark,group);}
  }
  const ring=mesh(new T.RingGeometry(i===3?2.5:3,i===3?2.62:3.14,software?28:64),material(p.color,true),p.x,.17,p.z+(i===3?2:0));ring.rotation.x=-Math.PI/2;ring.renderOrder=-94;rings.push(ring);
  const beacon=mesh(new T.OctahedronGeometry(.32),material(p.color,true),p.x,i===0?8:i===1?6.2:i===2?4.8:2.8,p.z);beacons.push(beacon);
 });
 const tree=(x:number,z:number)=>{cylinder(.15,1.8,x,1,z,m.wood);mesh(new T.IcosahedronGeometry(1,software?0:1),m.leaf,x,2.4,z);mesh(new T.IcosahedronGeometry(.75,software?0:1),m.leaf2,x+.35,3,z);box(1.5,.25,1.5,x,.2,z,m.dark);};
 for(const [x,z] of [[-14,-1],[-4,-3],[5,-4],[14,-1],[-10,8],[10,8],[-14,8],[14,8]])tree(x,z);
 for(const x of [-12,-3,5,13]){cylinder(.075,3.9,x,2,.4,m.dark);box(.7,.12,.36,x,4,.4,m.dark);box(.55,.045,.25,x,3.91,.4,m.amber);if(!software){const light=new T.PointLight('#ffd197',16,7,2);light.position.set(x,3.5,.4);scene.add(light);}const pool=mesh(new T.CircleGeometry(1.5,20),new T.MeshBasicMaterial({color:'#ecac68',transparent:true,opacity:.12,depthWrite:false}),x,.025,1.1);pool.rotation.x=-Math.PI/2;pool.renderOrder=-95;materials.add(pool.material as T.Material);}
 // A parked scooter and bicycle, away from the teaching sightline.
 for(const x of [-.45,.45]){const wheel=mesh(new T.TorusGeometry(.3,.085,6,16),m.dark,12+x,.42,4.2);wheel.rotation.y=Math.PI/2;}box(.8,.3,.3,12,.75,4.2,m.pink);box(.16,.75,.16,12.4,1,4.2,m.cream);box(.25,.12,.5,12.4,1.4,4.2,m.dark);
 const people:ReturnType<typeof createPerson>[]=[];
 for(const [x,z,color,seed] of [[-7,1,'#eb8055',230],[4,4,'#56b8b2',231],[9,1,'#d49deb',232]] as const){if(!software){const p=createPerson({skin:'#c18a62',body:seed===231?'m':'f',age:'adult',top:'jacket',topColor:color,bottom:'pants',bottomColor:'#27354f',hairStyle:'short',height:1.8,seed});p.root.position.set(x,.05,z);p.root.rotation.y=-.5;setPose(p,'stand');scene.add(p.root);people.push(p);}else{const shirt=material(color),skin=material('#c18a62');cylinder(.22,.64,x,1.15,z,shirt);mesh(new T.SphereGeometry(.18,8,6),skin,x,1.68,z);for(const dx of [-.12,.12])box(.14,.7,.18,x+dx,.47,z,m.dark);}}
 // Ten physical timeline lights run along the promenade. Start and event modes differ in geometry.
 const timeLights:T.Mesh[]=[];for(let i=0;i<10;i++){const light=box(.65,.07,.32,-11+i*2.45,.16,10.1,material('#52647f'));timeLights.push(light);}
 let state:TimeState={place:0,start:3,mode:'start',equivalent:false},view:WorldView='district',disposed=false,frame=0,visible=true,last=0;
 const observer=new ResizeObserver(()=>resize());observer.observe(host);const intersection=typeof IntersectionObserver!=='undefined'?new IntersectionObserver(e=>{visible=e[0]?.isIntersecting??true;}):null;intersection?.observe(host);
 function draw(){if(disposed)return;renderer.render(scene,camera);}
 function selectView(v:WorldView){view=v;const p=places[state.place],narrow=host.clientWidth/host.clientHeight<1.3;
  if(v==='district'){camera.position.set(narrow?27:24,narrow?25:21,narrow?39:33);controls.target.set(0,1,0);}
  else if(v==='street'){camera.position.set(p.x,2.1,5);controls.target.set(p.x,2,-3);}
  else{camera.position.set(p.x+7,9,p.z+16);controls.target.set(p.x,2,p.z);}
  controls.update();draw();
 }
 function resize(){if(!host.clientWidth||!host.clientHeight)return;renderer.setSize(host.clientWidth,host.clientHeight);camera.aspect=host.clientWidth/host.clientHeight;camera.updateProjectionMatrix();if(view==='district')selectView(view);else draw();}
 const update=(s:TimeState)=>{state=s;rings.forEach((r,i)=>r.visible=i===s.place);beacons.forEach((b,i)=>b.scale.setScalar(i===s.place?1.3:.7));timeLights.forEach((l,i)=>{const active=s.mode==='event'?i===s.start-1:i>=s.start-1;const mat=l.material as T.MeshStandardMaterial;mat.color.set(active?(s.mode==='event'?'#f69a81':'#70e3cf'):'#52647f');l.scale.y=active?3:1;});if(view==='focus'||view==='street')selectView(view);else draw();};
 const walk=(dx:number,dz:number)=>{if(view!=='street')return;const nextX=T.MathUtils.clamp(camera.position.x+dx*.8,-14,14),nextZ=T.MathUtils.clamp(camera.position.z+dz*.55,1,4.9);controls.target.x+=nextX-camera.position.x;controls.target.z+=nextZ-camera.position.z;camera.position.set(nextX,2.1,nextZ);controls.update();draw();};
 const pointer=new T.Vector2(),ray=new T.Raycaster();let down=[0,0];
 const pointerDown=(event:Event)=>{const e=event as PointerEvent;down=[e.clientX,e.clientY];};const pointerUp=(event:Event)=>{const e=event as PointerEvent;if(Math.hypot(e.clientX-down[0],e.clientY-down[1])>6)return;const rect=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,1-(e.clientY-rect.top)/rect.height*2);ray.setFromCamera(pointer,camera);const hit=ray.intersectObjects(targets)[0];if(hit)onPick(hit.object.userData.place);};
 const lost=(e:Event)=>{e.preventDefault();cancelAnimationFrame(frame);renderer.domElement.style.display='none';onFail();};renderer.domElement.addEventListener('webglcontextlost',lost);renderer.domElement.addEventListener('pointerdown',pointerDown);renderer.domElement.addEventListener('pointerup',pointerUp);controls.addEventListener('change',draw);
 const tick=(now:number)=>{if(disposed)return;frame=requestAnimationFrame(tick);if(!visible||document.hidden||motion.matches)return;if(now-last<40)return;last=now;people.forEach(p=>animatePerson(p,.04,0,false));beacons.forEach(b=>b.rotation.y=now*.00035);draw();};
 resize();selectView('district');update(state);if(!software)frame=requestAnimationFrame(tick);onReady();
 return {update,view:selectView,walk,dispose(){disposed=true;cancelAnimationFrame(frame);observer.disconnect();intersection?.disconnect();controls.dispose();renderer.domElement.removeEventListener('webglcontextlost',lost);renderer.domElement.removeEventListener('pointerdown',pointerDown);renderer.domElement.removeEventListener('pointerup',pointerUp);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());sun.shadow.dispose();if(renderer instanceof T.WebGLRenderer)renderer.dispose();renderer.domElement.remove();}};
}
