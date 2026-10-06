import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PLATFORMS, ZONES } from './engine.mjs';

export type Forest = { root: THREE.Group; solids: THREE.Object3D[]; update: (time: number, player: THREE.Vector3) => void; dispose: () => void };

/** All walkable surfaces share the engine's exact coordinates, radius and top. */
export function buildForest({ low, reducedMotion }: { low: boolean; reducedMotion: boolean }): Forest {
  const root = new THREE.Group();
  const solids: THREE.Object3D[] = [];
  const textures: THREE.Texture[] = [];
  let seed = 9417;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  const texture = (kind: 'bark' | 'cap' | 'soil' | 'mist') => {
    const canvas = document.createElement('canvas'); canvas.width = canvas.height = 256;
    const c = canvas.getContext('2d')!;
    if (kind === 'mist') {
      const g = c.createRadialGradient(128,128,3,128,128,125); g.addColorStop(0,'rgba(240,247,222,.22)'); g.addColorStop(.5,'rgba(240,247,222,.09)'); g.addColorStop(1,'rgba(240,247,222,0)'); c.fillStyle=g;c.fillRect(0,0,256,256);
    } else {
      c.fillStyle = kind === 'bark' ? '#796549' : kind === 'soil' ? '#75815b' : '#e0c898'; c.fillRect(0,0,256,256);
      for(let i=0;i<3400;i++) {
        const x=random()*256,y=random()*256;
        c.globalAlpha=.04+random()*.18;
        c.fillStyle=random()>.45?'#182315':'#fff4bd';
        if(kind==='bark'){ c.fillRect(x,y,1+random()*3,8+random()*65); }
        else { c.beginPath();c.ellipse(x,y,.5+random()*4,.5+random()*2,random()*6,0,Math.PI*2);c.fill(); }
      }
      if(kind==='cap') {
        c.globalAlpha=.22;c.strokeStyle='#604d32';
        for(let i=0;i<90;i++){c.beginPath();const x=random()*256;c.moveTo(x,0);c.bezierCurveTo(x+10,75,x-7,160,x+5,256);c.stroke();}
      }
    }
    const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=low?2:4;textures.push(t);return t;
  };
  const bark=texture('bark'),soil=texture('soil'),capTexture=texture('cap'),mistTexture=texture('mist');soil.repeat.set(35,35);
  const materialCache=new Map<string,THREE.MeshStandardMaterial>();
  const mat=(color:string,roughness=1,map?:THREE.Texture)=>{const key=`${color}/${roughness}/${map?.uuid||''}`;let material=materialCache.get(key);if(!material){material=new THREE.MeshStandardMaterial({color,roughness,map:map??null});materialCache.set(key,material);}return material;};
  const barkMat=mat('#655a43',1,bark),stemMat=mat('#c9b896',.95,bark),mossMat=mat('#536842',1,soil),stoneMat=mat('#697363',1,soil);
  const mesh=(g:THREE.BufferGeometry,m:THREE.Material|THREE.Material[],x=0,y=0,z=0,solid=false)=>{const o=new THREE.Mesh(g,m);o.position.set(x,y,z);o.receiveShadow=true;o.castShadow=!low;root.add(o);if(solid)solids.push(o);return o;};
  const ground=mesh(new THREE.CylinderGeometry(65,68,4,96),mat('#859364',1,soil),0,-2,0,true);ground.name='forest-ground-top-0';
  mesh(new THREE.CylinderGeometry(160,175,12,80),mat('#465d43',1,soil),0,-10,0);
  const capMats=new Map<string,THREE.MeshStandardMaterial>();
  const ivory=mat('#d0bd96',.95,capTexture);
  const rings: THREE.Mesh[]=[];
  for(const p of PLATFORMS){
    const zone=ZONES.find(z=>z.id===p.zone);
    const shade=zone?.color || ['#a67b4c','#b28a54','#778e74','#a49b78'][Math.floor(random()*4)];
    if(!capMats.has(shade))capMats.set(shade,mat(shade,.88,capTexture));
    if(p.kind==='log') {
      // A broad fallen trunk with a worn, genuinely flat upper walking surface.
      const body=mesh(new THREE.CylinderGeometry(p.r,p.r*.98,1.05,32),barkMat,p.x,p.y-.525,p.z,true);body.name=p.id;
      mesh(new THREE.CylinderGeometry(p.r*.98,p.r,.08,32),mossMat,p.x,p.y-.04,p.z);
      for(let k=0;k<3;k++){const rootlet=mesh(new THREE.CylinderGeometry(.08,.14,p.r*1.8,6),barkMat,p.x+(k-1)*.85,p.y-.7,p.z);rootlet.rotation.x=Math.PI/2;}
    } else {
      // The plateau occupies the full collision disk. The rolled lip and gills sit below it.
      // A broad walkable crown rolls into a substantial organic cap, not a thin disk.
      const crownProfile=[new THREE.Vector2(0,0),new THREE.Vector2(p.r*.55,0),new THREE.Vector2(p.r*.84,-.035),new THREE.Vector2(p.r*.97,-.09),new THREE.Vector2(p.r,-.17),new THREE.Vector2(p.r*.98,-p.r*.16),new THREE.Vector2(p.r*.83,-p.r*.29)];
      const cap=mesh(new THREE.LatheGeometry(crownProfile,48),capMats.get(shade)!,p.x,p.y,p.z,true);cap.name=p.id;
      capMats.get(shade)!.side=THREE.DoubleSide;
      const profile=[new THREE.Vector2(p.r*.14,-p.r*.48),new THREE.Vector2(p.r*.48,-p.r*.43),new THREE.Vector2(p.r*.83,-p.r*.29)];
      const underside=mesh(new THREE.LatheGeometry(profile,48),ivory,p.x,p.y,p.z,true);ivory.side=THREE.DoubleSide;
      underside.name=`${p.id}-gills`;
      // Subtle freckles break up the crown without hiding its landing surface.
      for(let k=0;k<7;k++){const a=random()*Math.PI*2,r=p.r*(.25+random()*.48);const spot=mesh(new THREE.SphereGeometry(.10+random()*.16,7,4),ivory,p.x+Math.cos(a)*r,p.y-.015,p.z+Math.sin(a)*r);spot.scale.set(1,.12,.7);spot.castShadow=false;}
      const stemHeight=Math.max(.4,p.y-p.r*.38+.1);
      const stem=mesh(new THREE.CylinderGeometry(p.r*.15,p.r*.27,stemHeight,14,4),stemMat,p.x,stemHeight/2-.1,p.z,true);
      stem.rotation.z=(random()-.5)*.035;
      const gillPositions:number[]=[];
      for(let k=0;k<48;k++){const a=k/48*Math.PI*2;gillPositions.push(Math.cos(a)*p.r*.2,-p.r*.455,Math.sin(a)*p.r*.2,Math.cos(a)*p.r*.81,-p.r*.30,Math.sin(a)*p.r*.81);}
      const gills=new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(gillPositions,3)),new THREE.LineBasicMaterial({color:'#786b52',transparent:true,opacity:.32}));gills.position.set(p.x,p.y,p.z);root.add(gills);
      for(let k=0;k<4;k++){const a=k*Math.PI/2;const rootCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(p.x,p.r*.12,p.z),new THREE.Vector3(p.x+Math.cos(a)*p.r*.3,.16,p.z+Math.sin(a)*p.r*.3),new THREE.Vector3(p.x+Math.cos(a)*p.r*.55,.03,p.z+Math.sin(a)*p.r*.55)]);mesh(new THREE.TubeGeometry(rootCurve,6,p.r*.05,5,false),stemMat);}
    }
    if(p.bounce) {
      const ring=mesh(new THREE.TorusGeometry(p.r*.76,.09,6,48),mat('#e5c778',.75),p.x,p.y+.1,p.z);ring.rotation.x=Math.PI/2;rings.push(ring);
      const sprout=mesh(new THREE.CylinderGeometry(.15,.22,.32,8),mat('#e7d59a'),p.x,p.y+.16,p.z);sprout.castShadow=false;
    }
    if(zone){
      const index=ZONES.indexOf(zone),previous=index?ZONES[index-1]:{x:0,z:0};
      const facing=Math.atan2(previous.x-p.x,previous.z-p.z);
      // Choose the shoulder with the most clearance from neighbouring caps.
      const shoulders=[-1,1].map(side=>({x:p.x+side*Math.cos(facing)*p.r*.63,z:p.z-side*Math.sin(facing)*p.r*.63}));
      const clearance=(a:{x:number;z:number})=>Math.min(...PLATFORMS.filter(other=>other.id!==p.id).map(other=>Math.hypot(a.x-other.x,a.z-other.z)-other.r));
      const anchor=shoulders.sort((a,b)=>clearance(b)-clearance(a))[0];
      const signRoot=new THREE.Group();signRoot.position.set(anchor.x,p.y,anchor.z);signRoot.rotation.y=facing;root.add(signRoot);
      for(const x of [-1.2,1.2]){const post=new THREE.Mesh(new THREE.CylinderGeometry(.07,.1,1.85,7),barkMat);post.position.set(x,.925,0);post.castShadow=!low;signRoot.add(post);solids.push(post);}
      const board=new THREE.Mesh(new THREE.BoxGeometry(2.85,.9,.13),barkMat);board.position.y=1.7;board.castShadow=!low;signRoot.add(board);solids.push(board);
      const canvas=document.createElement('canvas');canvas.width=768;canvas.height=240;const c=canvas.getContext('2d')!;
      c.fillStyle='#344736';c.fillRect(0,0,768,240);c.strokeStyle='#aa9870';c.lineWidth=8;c.strokeRect(8,8,752,224);
      c.fillStyle='#f5ebcd';c.textAlign='center';c.font='600 53px sans-serif';c.fillText(`${String(index+1).padStart(2,'0')} · ${zone.short}`,384,102);
      c.fillStyle='#d5dabc';c.font='29px sans-serif';c.fillText(zone.id==='final'?'LA CORONA':'REFUGIO DE CONVERSACIÓN',384,172);
      const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;textures.push(map);
      const signMaterial=new THREE.MeshStandardMaterial({map,roughness:1,side:THREE.DoubleSide});
      for(const side of [-1,1]){const sign=new THREE.Mesh(new THREE.PlaneGeometry(2.75,.8),signMaterial);sign.position.set(0,1.7,side*.071);sign.rotation.y=side===1?0:Math.PI;signRoot.add(sign);}
      // Moss and small plants at the outer edge leave the center and approach clear.
      for(let k=0;k<5;k++){const a=facing+1.5+k*.3;const tuft=mesh(new THREE.IcosahedronGeometry(.22,1),mossMat,p.x+Math.sin(a)*p.r*.82,p.y+.10,p.z+Math.cos(a)*p.r*.82);tuft.scale.set(1.5,.5,1);}
      // Small physical trail stones distinguish each category and checkpoint.
      for(let k=0;k<8;k++){const a=k/8*Math.PI*2;const pebble=mesh(new THREE.IcosahedronGeometry(.14+random()*.08,0),stoneMat,p.x+Math.cos(a)*p.r*.76,p.y+.07,p.z+Math.sin(a)*p.r*.76);pebble.scale.y=.45;}
    }
  }
  // A worn entrance trail leads directly toward the first reachable stepping cap.
  for(let i=1;i<16;i++){
    const stone=mesh(new THREE.IcosahedronGeometry(.17+random()*.13,0),ivory,i*.48,.035,Math.sin(i*.3)*.3);
    stone.scale.set(1.2,.15,.8);stone.castShadow=false;
  }
  // Monumental trunks around the traversable groves frame the ascent and distant canopy.
  const crowns: THREE.Mesh[]=[];
  for(let i=0;i<(low?26:44);i++){
    const a=i*2.39996,r=48+random()*65,x=Math.cos(a)*r,z=Math.sin(a)*r,h=42+random()*42,w=1.2+random()*2.6;
    mesh(new THREE.CylinderGeometry(w*.6,w,h,10,3),barkMat,x,h/2-4,z,true);
    for(let k=0;k<3;k++){
      const ba=a+k*2.1,bh=h*(.55+k*.11),end=new THREE.Vector3(x+Math.cos(ba)*11,bh+4,z+Math.sin(ba)*11),start=new THREE.Vector3(x,bh,z);
      const branch=mesh(new THREE.CylinderGeometry(.22,w*.52,start.distanceTo(end),7),barkMat);branch.position.copy(start).add(end).multiplyScalar(.5);branch.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),end.clone().sub(start).normalize());solids.push(branch);
      const crown=mesh(new THREE.IcosahedronGeometry(8+random()*4,1),mat(['#405e43','#55774b','#667d4b'][k]),end.x,end.y+3,end.z);crown.scale.set(1.3,.55,1);crowns.push(crown);
    }
  }
  const dummy=new THREE.Object3D();
  const grassCount=low?1400:4000;
  // Tapered, bent blades read as grass rather than tall rectangular cards.
  const grassGeometry=new THREE.BufferGeometry();
  grassGeometry.setAttribute('position',new THREE.Float32BufferAttribute([-.07,0,0,.07,0,0,-.05,.28,.035,.05,.28,.035,-.02,.49,.09,.02,.49,.09,.035,.66,.15],3));
  grassGeometry.setIndex([0,1,2,1,3,2,2,3,4,3,5,4,4,5,6]);grassGeometry.computeVertexNormals();
  const grassMaterial=new THREE.MeshStandardMaterial({color:'#657d42',side:THREE.DoubleSide,roughness:1});
  const grass=new THREE.InstancedMesh(grassGeometry,grassMaterial,grassCount);grass.receiveShadow=true;
  for(let i=0;i<grassCount;i++){const a=random()*Math.PI*2,r=Math.sqrt(random())*64;dummy.position.set(Math.cos(a)*r,0,Math.sin(a)*r);dummy.rotation.set((random()-.5)*.3,random()*Math.PI, (random()-.5)*.25);dummy.scale.setScalar(.35+random()*.8);dummy.updateMatrix();grass.setMatrixAt(i,dummy.matrix);grass.setColorAt(i,new THREE.Color().setHSL(.20+random()*.08,.25+random()*.2,.2+random()*.15));}root.add(grass);
  // Ferns are individually pinnate fronds, instanced to retain detail without draw-call cost.
  const leafGeo=new THREE.BufferGeometry();leafGeo.setAttribute('position',new THREE.Float32BufferAttribute([0,0,0,.18,.04,.25,0,.1,.56,-.18,.04,.25],3));leafGeo.setIndex([0,1,2,0,2,3]);leafGeo.computeVertexNormals();
  const fernCount=low?1800:4400,ferns=new THREE.InstancedMesh(leafGeo,new THREE.MeshStandardMaterial({color:'#54794b',side:THREE.DoubleSide,roughness:.9}),fernCount);
  let fi=0;
  while(fi<fernCount){const a=random()*6.28,r=7+random()*54,cx=Math.cos(a)*r,cz=Math.sin(a)*r,scale=.6+random()*1.2;
    for(let f=0;f<6&&fi<fernCount;f++)for(let l=0;l<7&&fi<fernCount;l++)for(const side of [-1,1]){if(fi>=fernCount)break;const angle=f*Math.PI/3;const dist=l*.18*scale;dummy.position.set(cx+Math.sin(angle)*dist,Math.sin(l/8*Math.PI)*.65*scale,cz+Math.cos(angle)*dist);dummy.rotation.set(-.4,angle+side*.9,side*.1);dummy.scale.setScalar((1-l/9)*scale);dummy.updateMatrix();ferns.setMatrixAt(fi++,dummy.matrix);}}
  root.add(ferns);
  const flowerCount=low?140:360,flowers=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(.09,0),mat('#d5b1a7',.8),flowerCount);
  for(let i=0;i<flowerCount;i++){const a=random()*6.28,r=8+random()*50;dummy.position.set(Math.cos(a)*r,.35+random()*.25,Math.sin(a)*r);dummy.rotation.set(random(),random(),random());dummy.scale.set(1,.55,1);dummy.updateMatrix();flowers.setMatrixAt(i,dummy.matrix);flowers.setColorAt(i,new THREE.Color(['#d8b0c0','#d8c57c','#b5c4ca'][i%3]));}root.add(flowers);
  // A sinuous stream glances through the lower forest. Stones make its banks legible.
  const riverPositions:number[]=[],riverUV:number[]=[],riverIndices:number[]=[];
  for(let i=0;i<=80;i++){const z=-59+i*1.45,x=28+Math.sin(z*.065)*11;riverPositions.push(x-1.65,.035,z,x+1.65,.035,z);riverUV.push(0,i/12,1,i/12);if(i<80){const j=i*2;riverIndices.push(j,j+2,j+1,j+1,j+2,j+3);}}
  const waterGeometry=new THREE.BufferGeometry();waterGeometry.setAttribute('position',new THREE.Float32BufferAttribute(riverPositions,3));waterGeometry.setAttribute('uv',new THREE.Float32BufferAttribute(riverUV,2));waterGeometry.setIndex(riverIndices);waterGeometry.computeVertexNormals();
  const waterMap=texture('cap');waterMap.repeat.set(2,8);
  const water=mesh(waterGeometry,new THREE.MeshStandardMaterial({color:'#87b9ac',map:waterMap,roughness:.23,metalness:.18,transparent:true,opacity:.8}));water.castShadow=false;
  for(let i=0;i<90;i++){const z=-59+random()*116,x=28+Math.sin(z*.065)*11+(random()>.5?1:-1)*(1.7+random()*.65);const rock=mesh(new THREE.IcosahedronGeometry(.2+random()*.45,0),stoneMat,x,.13,z);rock.scale.y=.5;}
  const cliffX=37,cliffZ=-38;
  for(let i=0;i<9;i++){const rock=mesh(new THREE.IcosahedronGeometry(4.5,1),stoneMat,cliffX+(i%3-1)*3.2,2+Math.floor(i/3)*5,cliffZ+random()*2,true);rock.scale.set(.8,1.35,.7);}
  const waterfallMat=new THREE.MeshStandardMaterial({color:'#bcd6ca',map:waterMap,roughness:.32,transparent:true,opacity:.72,side:THREE.DoubleSide});
  const waterfall=mesh(new THREE.PlaneGeometry(3.5,16,8,12),waterfallMat,cliffX,8,cliffZ+3.3);waterfall.castShadow=false;
  const mist:THREE.Sprite[]=[];
  for(let i=0;i<(low?10:22);i++){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:mistTexture,transparent:true,opacity:.35,depthWrite:false}));s.position.set((random()-.5)*100,2+random()*20,(random()-.5)*100);s.scale.set(30+random()*20,6+random()*9,1);root.add(s);mist.push(s);}
  for(let i=0;i<4;i++){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:mistTexture,transparent:true,opacity:.7,depthWrite:false}));s.position.set(cliffX+(i-1.5)*1.5,1,cliffZ+4);s.scale.set(8,5,1);root.add(s);}
  const cave=ZONES.find(z=>z.id==='recuerdos')!;
  // An elevated cave sits on its actual checkpoint, with an open approach from the south.
  for(let i=0;i<7;i++){const a=Math.PI*.1+i/6*Math.PI*.8;const rock=mesh(new THREE.IcosahedronGeometry(1.2,1),stoneMat,cave.x+Math.cos(a)*3.25,cave.y+1.8+Math.sin(a)*1.2,cave.z-4.7,true);rock.scale.set(1,1.3,1.35);}
  mesh(new THREE.SphereGeometry(3.65,16,8,Math.PI,Math.PI,0,Math.PI/2),new THREE.MeshStandardMaterial({color:'#303d34',side:THREE.DoubleSide,roughness:1}),cave.x,cave.y,cave.z-5.3,true);
  const caveLight=new THREE.PointLight('#d7bf87',2,9,2);caveLight.position.set(cave.x,cave.y+2,cave.z);root.add(caveLight);
  // High crown ribs remain outside the flat landing area.
  const final=ZONES[ZONES.length-1];
  for(let i=0;i<11;i++){const a=i/11*Math.PI*2;const bud=mesh(new THREE.CylinderGeometry(.05,.25,1+Math.sin(i)*.3,8),mat('#d5b778',.6),final.x+Math.cos(a)*6.65,final.y+.45,final.z+Math.sin(a)*6.65);bud.rotation.z=Math.cos(a)*-.23;bud.rotation.x=Math.sin(a)*.23;}
  const sporeCount=low?100:260,sporePositions=new Float32Array(sporeCount*3);
  for(let i=0;i<sporeCount;i++)sporePositions.set([(random()-.5)*100,random()*52,(random()-.5)*100],i*3);
  const sporeGeo=new THREE.BufferGeometry();sporeGeo.setAttribute('position',new THREE.BufferAttribute(sporePositions,3));
  const spores=new THREE.Points(sporeGeo,new THREE.PointsMaterial({color:'#f6e6b1',size:.065,transparent:true,opacity:.6,depthWrite:false}));root.add(spores);
  // Broad shafts pick up the haze under the canopy, with soft edges rather than neon beams.
  const beams:THREE.Mesh[]=[];
  for(let i=0;i<(low?3:7);i++){const beam=mesh(new THREE.PlaneGeometry(6+random()*5,64),new THREE.MeshBasicMaterial({map:mistTexture,color:'#f8e9ba',transparent:true,opacity:.22,depthWrite:false,side:THREE.DoubleSide}),-30+i*11,30,-25+(i%3)*16);beam.rotation.z=-.35;beam.castShadow=false;beams.push(beam);}
  root.updateMatrixWorld(true);
  // Batch immobile organic scenery by material. Keep invisible originals for
  // exact camera raycasts; their world matrices continue updating with the scene.
  const collisionRoot=new THREE.Group();collisionRoot.visible=false;collisionRoot.name='camera-collision-surfaces';
  const batches=new Map<string,{material:THREE.Material;objects:THREE.Mesh[]}>();
  for(const object of [...root.children]){
    if(!(object instanceof THREE.Mesh)||object instanceof THREE.InstancedMesh||rings.includes(object)||beams.includes(object)||Array.isArray(object.material))continue;
    const key=`${object.material.uuid}/${Boolean(object.geometry.index)}/${Object.keys(object.geometry.attributes).sort().join(',')}`;
    const batch:{material:THREE.Material;objects:THREE.Mesh[]}=batches.get(key)??{material:object.material,objects:[]};batch.objects.push(object);batches.set(key,batch);
  }
  for(const {material,objects} of batches.values()){
    if(objects.length<2)continue;
    const pieces=objects.map(object=>object.geometry.clone().applyMatrix4(object.matrixWorld));
    const combined=mergeGeometries(pieces,false);
    for(const piece of pieces)piece.dispose();
    if(!combined)continue;
    const batch=new THREE.Mesh(combined,material);batch.castShadow=objects.some(o=>o.castShadow);batch.receiveShadow=true;root.add(batch);
    for(const object of objects){root.remove(object);if(solids.includes(object))collisionRoot.add(object);else object.geometry.dispose();}
  }
  root.add(collisionRoot);root.updateMatrixWorld(true);
  return {root,solids,update(time,player){
    if(!reducedMotion){waterMap.offset.y=-time*.08;spores.rotation.y=Math.sin(time*.013)*.06;grass.rotation.y=Math.sin(time*.6)*.0003;for(let i=0;i<mist.length;i++)mist[i].position.x+=Math.sin(time*.06+i)*.002;for(const ring of rings)ring.scale.setScalar(1+Math.sin(time*2)*.025);}
    // Keep shafts facing the viewing region without moving any collision geometry.
    for(const beam of beams)beam.rotation.y=Math.atan2(player.x-beam.position.x,player.z-beam.position.z);
  },dispose(){
    const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>();root.traverse(o=>{if(o instanceof THREE.Mesh||o instanceof THREE.Points||o instanceof THREE.LineSegments){geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])materials.add(m);}else if(o instanceof THREE.Sprite)materials.add(o.material);});for(const g of geometries)g.dispose();for(const m of materials)m.dispose();for(const t of textures)t.dispose();root.clear();
  }};
}
