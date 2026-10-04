import * as THREE from 'three';
import type { Player } from './engine.mjs';
// No rigged model is present in the brand repository. The identity-preserving
// directional atlas is a deliberate hybrid; the cape is an actual 3D surface.
export type ForestHero = { root: THREE.Group; body: THREE.Mesh; cape: THREE.Mesh<THREE.PlaneGeometry,THREE.MeshStandardMaterial>; atlas: THREE.Texture; phase:number; lastGrounded:boolean; landing:number; dispose:()=>void };
export function createForestHero(shadows=true):ForestHero {
 const root=new THREE.Group();
 const atlas=new THREE.TextureLoader().load('/bosque-hongos/hero-atlas.webp');atlas.colorSpace=THREE.SRGBColorSpace;atlas.repeat.set(.25,.25);atlas.offset.set(0,.25);atlas.magFilter=THREE.LinearFilter;
 const material=new THREE.MeshStandardMaterial({map:atlas,transparent:true,alphaTest:.16,side:THREE.DoubleSide,roughness:.75});
 const body=new THREE.Mesh(new THREE.PlaneGeometry(2.05,2.05),material);body.position.y=1.025;body.castShadow=shadows;root.add(body);
 const cloth=new THREE.PlaneGeometry(1.1,1.5,12,18);const cape=new THREE.Mesh(cloth,new THREE.MeshStandardMaterial({color:'#132b50',side:THREE.DoubleSide,roughness:.8,metalness:.12}));cape.castShadow=shadows;cape.receiveShadow=shadows;root.add(cape);
 const clasp=new THREE.Mesh(new THREE.TorusGeometry(.075,.022,8,20,Math.PI*1.7),new THREE.MeshStandardMaterial({color:'#c8aa66',metalness:.65,roughness:.35}));clasp.position.set(.23,1.58,.03);body.add(clasp);clasp.position.y=.48;
 let disposed=false;
 return{root,body,cape,atlas,phase:0,lastGrounded:true,landing:0,dispose(){if(disposed)return;disposed=true;root.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});atlas.dispose();}};
}
export function animateForestHero(hero:ForestHero,time:number,dt:number,player:Player,speed:number,camera:THREE.Camera){
 hero.root.position.set(player.x,player.y,player.z);
 const facing=Math.atan2(camera.position.x-player.x,camera.position.z-player.z);
 hero.body.rotation.y=facing;
 const relative=THREE.MathUtils.euclideanModulo(player.yaw-facing,Math.PI*2);
 const view=Math.round(relative/(Math.PI/2))%4;
 // Atlas rows: front, right profile, back, left profile.
 const row=[0,1,2,3][view];
 hero.phase+=dt*speed*1.35;
 const frame=speed>.15?Math.floor(hero.phase)%4:0;
 hero.atlas.offset.set(frame*.25,(3-row)*.25);
 if(player.grounded&&!hero.lastGrounded)hero.landing=.13;
 hero.landing=Math.max(0,hero.landing-dt);hero.lastGrounded=player.grounded;
 hero.body.scale.y=1-hero.landing*.4;hero.body.position.y=1.025-hero.landing*.35+(player.grounded&&speed<.1?Math.sin(time*2)*.012:0);
 // Segmented cape, attached at the shoulders, with gravity and trailing waves.
 const positions=hero.cape.geometry.attributes.position;
 for(let i=0;i<positions.count;i++){
  const u=(i%13)/12,v=Math.floor(i/13)/18;
  const width=.32+v*.86;
  const x=(u-.5)*width;
  const fall=player.vy<0?Math.min(.65,-player.vy*.04):0;
  const drag=Math.min(.9,speed*.08)+(player.grounded?0:.2);
  const y=1.64-v*(1.36-fall*.45)-hero.landing*.3;
  const z=-.15-v*drag+Math.sin(time*5-v*5+u*5)*v*(.055+speed*.012)+Math.sin(u*Math.PI*7)*v*.045;
  positions.setXYZ(i,x,y,z);
 }
 positions.needsUpdate=true;hero.cape.geometry.computeVertexNormals();hero.cape.rotation.y=player.yaw;
}
