import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createPerson,setPose,animatePerson} from '../../noche-abierta/people3d';
export type GalleryState={kind:'painting'|'sculpture';plural:boolean;selected:number;phase:'new'|'known'|'context'};
export type GalleryView='overview'|'room'|'focus';
export type GalleryAPI={update:(state:GalleryState)=>void;view:(view:GalleryView)=>void;dispose:()=>void};
const positions=[-4.5,-1,2.5];
/** A real room: every DOM pin is projected from its physical exhibit. */
export function mountArticleWorld(host:HTMLElement,onPick:(id:number)=>void,onReady:()=>void,onFail:()=>void):GalleryAPI{
 const renderer=new T.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6));renderer.setClearColor(0x000000,0);
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
 renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;
 renderer.domElement.setAttribute('aria-hidden','true');host.insertBefore(renderer.domElement,host.firstChild);
 const scene=new T.Scene(),camera=new T.PerspectiveCamera(39,1,.1,100);
 const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,1,-.8);camera.position.set(12,11,18);
 controls.enablePan=false;controls.enableZoom=false;controls.enableDamping=true;controls.dampingFactor=.1;
 controls.minPolarAngle=.35;controls.maxPolarAngle=1.25;controls.minAzimuthAngle=-.48;controls.maxAzimuthAngle=1.05;
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');controls.enableDamping=!motion.matches;
 const geometries=new Set<T.BufferGeometry>(),materials=new Set<T.Material>(),textures=new Set<T.Texture>();
 const mat=(color:string,roughness=.7,metalness=0)=>{const m=new T.MeshStandardMaterial({color,roughness,metalness});materials.add(m);return m;};
 const m={floor:mat('#9a5933',.42),grout:mat('#523923'),base:mat('#162b3c'),back:mat('#175d65'),side:mat('#bd4f36'),brass:mat('#e4a344',.3,.55),dark:mat('#172733'),cream:mat('#ebcc8f'),wood:mat('#5d2f1e'),leaf:mat('#167b4c'),leafLight:mat('#49a553'),blue:mat('#057fab',.3),copper:mat('#c76833',.34,.45),jade:mat('#159b89',.3,.2),gold:mat('#e0ad42',.28,.6),plinth:mat('#2d3f4a',.45),seat:mat('#b7462c',.62)};
 const mesh=(geometry:T.BufferGeometry,material:T.Material,x:number,y:number,z:number,parent:T.Object3D=scene)=>{geometries.add(geometry);const o=new T.Mesh(geometry,material);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;};
 const box=(w:number,h:number,d:number,x:number,y:number,z:number,material:T.Material,parent:T.Object3D=scene)=>mesh(new T.BoxGeometry(w,h,d),material,x,y,z,parent);
 const cylinder=(r:number,h:number,x:number,y:number,z:number,material:T.Material,parent:T.Object3D=scene)=>mesh(new T.CylinderGeometry(r,r,h,24),material,x,y,z,parent);
 const glow=new T.MeshStandardMaterial({color:'#ffe4a2',emissive:'#ffb341',emissiveIntensity:2});materials.add(glow);
 scene.add(new T.HemisphereLight('#ffd6a0','#375985',2.1));
 const sun=new T.DirectionalLight('#ffbd77',3.8);sun.position.set(-7,13,9);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:.5,far:45});sun.shadow.normalBias=.04;scene.add(sun);
 const rim=new T.DirectionalLight('#64c4e8',1.8);rim.position.set(10,7,-7);scene.add(rim);
 box(15.4,.58,11.6,0,-.43,0,m.base);box(15,.16,11.2,0,-.08,0,m.grout);
 const tileGeometry=new T.BoxGeometry(.985,.065,.985);geometries.add(tileGeometry);const tiles=new T.InstancedMesh(tileGeometry,m.floor,165);tiles.receiveShadow=true;const tileMatrix=new T.Matrix4();let tileIndex=0;for(let x=-7;x<=7;x++)for(let z=-5;z<=5;z++)tiles.setMatrixAt(tileIndex++,tileMatrix.makeTranslation(x,.025,z));scene.add(tiles);
 box(15,5.5,.25,0,2.7,-5.4,m.back);box(.26,5.5,11.2,-7.5,2.7,0,m.side);
 box(15,.13,.2,0,.18,-5.18,m.brass);box(.2,.13,11.2,-7.27,.18,0,m.brass);
 // Open roof beams and a clerestory: depth without hiding the exhibits.
 for(let x=-6;x<7;x+=3){box(.15,.18,10.9,x,5.43,0,m.dark);box(.075,.035,7.4,x,5.28,-1.2,glow);}
 box(15.2,.22,.3,0,5.5,-5.28,m.dark);
 box(.12,.18,11.3,-7.5,5.5,0,m.brass);
 // A window looking out to a saturated sunset; repeated mullions cast real shadows.
 box(.12,2.3,4,-7.29,3.8,2.2,m.dark);
 const sky=new T.MeshBasicMaterial({color:'#eea14d'});materials.add(sky);box(.04,2.08,3.78,-7.19,3.8,2.2,sky);
 for(let z=.45;z<4.1;z+=.9)box(.12,2.3,.055,-7.11,3.8,z,m.brass);
 box(.12,.07,4,-7.11,3.8,2.2,m.brass);
 // A reception desk, leather bench and plants make the room a lived-in place.
 box(2.1,1.12,.85,-5.95,.58,3.8,m.side);box(2.2,.12,1,-5.95,1.2,3.8,m.wood);box(.55,.4,.08,-6,1.47,3.75,m.dark);
 box(3,.22,.9,.3,.67,3.1,m.seat);for(const x of [-.9,1.5]){box(.12,.64,.7,x,.3,3.1,m.brass);}
 const plant=(x:number,z:number)=>{cylinder(.4,.65,x,.32,z,m.side);for(let i=0;i<7;i++){const a=i*Math.PI*2/7;const leaf=mesh(new T.SphereGeometry(.38,12,8),i%2?m.leaf:m.leafLight,x+Math.cos(a)*.34,1.2+(i%3)*.22,z+Math.sin(a)*.34);leaf.scale.set(.42,1.6,.75);leaf.rotation.z=Math.cos(a)*.65;leaf.rotation.x=Math.sin(a)*.5;}cylinder(.06,1.3,x,.8,z,m.wood);};plant(-6.2,-3.9);plant(6.4,3.6);
 const artworks:T.Group[]=[],paintings:T.Group[]=[],sculptures:T.Group[]=[],rings:T.Mesh[]=[],targets:T.Object3D[]=[];
 for(const [i,x] of positions.entries()){
  const group=new T.Group();scene.add(group);group.position.set(x,0,-2.6);artworks.push(group);
  box(2.85,3.95,.28,0,1.98,-.7,i===1?m.side:m.back,group);box(2.9,.09,.45,0,4,-.7,m.brass,group);
  const painting=new T.Group();group.add(painting);paintings.push(painting);
  box(2.23,1.85,.18,0,2.7,-.43,m.wood,painting);box(2.15,1.77,.14,0,2.7,-.3,m.brass,painting);
  // Original abstract landscapes, generated locally as canvas textures.
  const art=document.createElement('canvas');art.width=512;art.height=384;const c=art.getContext('2d');
  if(c){const palettes=[['#174da0','#f6ba40','#ee603b','#923757'],['#ea7142','#ffd16b','#7a233d','#322659'],['#159790','#efc754','#13605e','#143654']];const p=palettes[i];c.fillStyle=p[0];c.fillRect(0,0,512,384);c.fillStyle=p[1];c.beginPath();c.arc(365,105,56,0,Math.PI*2);c.fill();c.fillStyle=p[2];c.beginPath();c.moveTo(0,300);c.bezierCurveTo(180,40,290,320,512,180);c.lineTo(512,384);c.lineTo(0,384);c.fill();c.fillStyle=p[3];c.beginPath();c.moveTo(0,350);c.bezierCurveTo(230,190,345,400,512,250);c.lineTo(512,384);c.lineTo(0,384);c.fill();for(let n=0;n<7;n++){c.fillStyle='#ffe8bb44';c.fillRect(20+n*7,35,2,35);}}
  const texture=new T.CanvasTexture(art);texture.colorSpace=T.SRGBColorSpace;textures.add(texture);const artMat=new T.MeshStandardMaterial({map:texture,roughness:.8});materials.add(artMat);const surface=mesh(new T.PlaneGeometry(1.97,1.59),artMat,0,2.7,-.211,painting);surface.userData.pick=i;targets.push(surface);
  const sculpture=new T.Group();group.add(sculpture);sculptures.push(sculpture);box(1.38,1.25,1.2,0,.66,.3,m.plinth,sculpture);box(1.48,.12,1.3,0,1.33,.3,m.brass,sculpture);
  let object:T.Mesh;
  if(i===0){object=mesh(new T.TorusGeometry(.68,.21,20,56),m.copper,0,2.25,.3,sculpture);object.rotation.y=-.3;object.rotation.z=.15;}
  else if(i===1){object=mesh(new T.IcosahedronGeometry(.75,2),m.jade,0,2.1,.3,sculpture);object.scale.set(.8,1.45,.7);object.rotation.z=-.18;}
  else {object=mesh(new T.SphereGeometry(.64,32,20),m.gold,0,2.3,.3,sculpture);cylinder(.13,.6,0,1.65,.3,m.gold,sculpture);}
  object.userData.pick=i;targets.push(object);
  const ringMat=new T.MeshBasicMaterial({color:'#ffb443',transparent:true,opacity:.9});materials.add(ringMat);const ring=mesh(new T.RingGeometry(.94,1.02,64),ringMat,0,.071,.4,group);ring.rotation.x=-Math.PI/2;rings.push(ring);
  const lamp=new T.SpotLight('#ffce7a',32,9,.62,.75,1.4);lamp.position.set(x,4.8,-.8);lamp.target.position.set(x,1.8,-2.6);scene.add(lamp,lamp.target);box(.45,.14,.55,x,4.87,-.8,m.dark);box(.3,.035,.35,x,4.79,-.8,glow);
 }
 // The only door is shared context, independent of first mention.
 box(1.65,3.2,.17,5.5,1.6,-5.13,m.brass);box(1.4,3,.13,5.5,1.5,-5.01,m.dark);
 const doorPivot=new T.Group();doorPivot.position.set(4.8,0,-4.89);scene.add(doorPivot);doorPivot.rotation.y=-.63;
 const door=box(1.4,2.98,.1,.7,1.5,0,m.blue,doorPivot);door.userData.pick=3;targets.push(door);
 for(const y of [.83,2.08])box(1.12,1.07,.06,.7,y,.08,m.blue,doorPivot);
 const handle=cylinder(.045,.28,1.25,1.3,.13,m.brass,doorPivot);handle.rotation.z=Math.PI/2;
 const doorRingMat=new T.MeshBasicMaterial({color:'#ffbd50',transparent:true,opacity:.9});materials.add(doorRingMat);const doorRing=mesh(new T.RingGeometry(.8,.9,64),doorRingMat,5.35,.074,-3.8);doorRing.rotation.x=-Math.PI/2;
 const teacher=createPerson({skin:'#bb7950',body:'m',age:'adult',top:'shirt',topColor:'#ed7b32',bottom:'pants',bottomColor:'#18384b',hairStyle:'short',height:1.85,seed:142});teacher.root.position.set(-3.3,0,1.25);scene.add(teacher.root);setPose(teacher,'point');
 const visitor=createPerson({skin:'#e2b78e',body:'f',age:'adult',top:'jacket',topColor:'#347bb7',bottom:'pants',bottomColor:'#283345',hairStyle:'bob',height:1.73,seed:242});visitor.root.position.set(2.55,0,1.6);visitor.root.rotation.y=-1.1;scene.add(visitor.root);setPose(visitor,'stand');
 // People use shared cached geometry: do not dispose their resources on this room's teardown.
 let state:GalleryState={kind:'painting',plural:false,selected:0,phase:'new'},view:GalleryView='overview',frame=0,disposed=false,visible=true,move=false,last=0;
 const targetPosition=new T.Vector3(),targetLook=new T.Vector3();
 const pins=Array.from(host.querySelectorAll<HTMLButtonElement>('[data-world-pin]'));
 const pinPoints=[...positions.map(x=>new T.Vector3(x,4.25,-3.3)),new T.Vector3(5.5,3.5,-4.8)];
 function resize(){const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();if(view==='overview'){const narrow=w/h<1.25;camera.position.set(narrow?15:12,narrow?14:11,narrow?23:18);}draw();}
 function project(){for(let i=0;i<pins.length;i++){const p=pinPoints[i].clone().project(camera);pins[i].style.left=`${(p.x*.5+.5)*host.clientWidth}px`;pins[i].style.top=`${(-p.y*.5+.5)*host.clientHeight}px`;pins[i].style.visibility=p.z>1?'hidden':'visible';}}
 function draw(){if(disposed)return;renderer.render(scene,camera);project();}
 function selectView(v:GalleryView){view=v;const aspect=host.clientWidth/host.clientHeight;const offset=aspect<1.25?1.2:1;if(v==='overview'){targetPosition.set(12*offset,11*offset,18*offset);targetLook.set(0,1,-.8);}else if(v==='room'){targetPosition.set(3,5.6,15*offset);targetLook.set(-.3,1.5,-2);}else{const x=state.phase==='context'?5.2:positions[state.selected];targetPosition.set(x+2.5,5.1,8.5*offset);targetLook.set(x,1.7,-2.5);}move=true;if(motion.matches){camera.position.copy(targetPosition);controls.target.copy(targetLook);move=false;controls.update();draw();}}
 const update=(next:GalleryState)=>{state=next;paintings.forEach(p=>p.visible=state.kind==='painting');sculptures.forEach(p=>p.visible=state.kind==='sculpture');rings.forEach((r,i)=>{r.visible=state.phase!=='context'&&(i===state.selected||(state.plural&&i===(state.selected+1)%3));(r.material as T.MeshBasicMaterial).color.set(state.phase==='known'?'#63e1ca':'#ffb443');});doorRing.visible=state.phase==='context';const x=state.phase==='context'?5.5:positions[state.selected];teacher.root.rotation.y=Math.atan2(x-teacher.root.position.x,-2.8-teacher.root.position.z);animatePerson(teacher,.016,0,false);animatePerson(visitor,.016,0,false);if(view==='focus')selectView('focus');draw();};
 const ray=new T.Raycaster(),pointer=new T.Vector2();let downX=0,downY=0;
 const pointerDown=(e:PointerEvent)=>{downX=e.clientX;downY=e.clientY;};
 const pointerUp=(e:PointerEvent)=>{if(Math.hypot(e.clientX-downX,e.clientY-downY)>6)return;const rect=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);ray.setFromCamera(pointer,camera);const eligible=targets.filter(o=>o===door||(state.kind==='painting'?paintings:sculptures).some(g=>g===o.parent));const hit=ray.intersectObjects(eligible,false)[0];if(hit)onPick(hit.object.userData.pick as number);};
 const change=()=>{draw();};const start=()=>{move=false;};controls.addEventListener('change',change);controls.addEventListener('start',start);
 renderer.domElement.addEventListener('pointerdown',pointerDown);renderer.domElement.addEventListener('pointerup',pointerUp);
 const lost=(e:Event)=>{e.preventDefault();cancelAnimationFrame(frame);renderer.domElement.style.display='none';onFail();};renderer.domElement.addEventListener('webglcontextlost',lost);
 const tick=(now:number)=>{if(disposed)return;frame=requestAnimationFrame(tick);if(!visible||document.hidden||(motion.matches&&!move))return;const dt=Math.min((now-last)/1000,.05);last=now;if(move){const k=1-Math.exp(-dt*6);camera.position.lerp(targetPosition,k);controls.target.lerp(targetLook,k);if(camera.position.distanceTo(targetPosition)<.015)move=false;}if(!motion.matches){animatePerson(teacher,dt,0,false);animatePerson(visitor,dt,0,false);}controls.update();draw();};
 const observer=new ResizeObserver(resize);observer.observe(host);const intersection=new IntersectionObserver(es=>{visible=es[0]?.isIntersecting??true;});intersection.observe(host);
 update(state);resize();controls.update();frame=requestAnimationFrame(tick);onReady();
 return {update,view:selectView,dispose(){disposed=true;cancelAnimationFrame(frame);observer.disconnect();intersection.disconnect();controls.dispose();renderer.domElement.removeEventListener('pointerdown',pointerDown);renderer.domElement.removeEventListener('pointerup',pointerUp);renderer.domElement.removeEventListener('webglcontextlost',lost);sun.shadow.dispose();geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());renderer.dispose();renderer.domElement.remove();}};
}
