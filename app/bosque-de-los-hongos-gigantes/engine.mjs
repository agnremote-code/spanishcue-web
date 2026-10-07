export const LEVELS = ['A1','A2','B1','B2','C1','C2'];
export const CATEGORIES = [
 {id:'sobre-ti',name:'Claro de las historias',short:'Sobre ti',color:'#59879d',ecology:'Suelo del bosque · el claro de la entrada'},
 {id:'vida-real',name:'Jardín cotidiano',short:'Vida real',color:'#789a57',ecology:'Setas bajas · la cesta olvidada'},
 {id:'elige',name:'Las dos sendas',short:'Elige',color:'#c9a05b',ecology:'¿Se come o no? · setas doradas'},
 {id:'opinion',name:'Arboleda de las voces',short:'Opina',color:'#b66b42',ecology:'¿Se come o no? · las setas gemelas'},
 {id:'suposiciones',name:'Valle de lo posible',short:'Supón',color:'#8e7cab',ecology:'Jardín venenoso · el hongo rojo perfecto'},
 {id:'afirmacion',name:'Raíces y razones',short:'Reacciona',color:'#ac866a',ecology:'Jardín venenoso · el círculo violeta'},
 {id:'compara',name:'Jardín de los contrastes',short:'Compara',color:'#7ca59c',ecology:'Hongos extraños · la gruta luminosa'},
 {id:'recuerdos',name:'Cueva de recuerdos',short:'Recuerda',color:'#a69b8f',ecology:'Dosel · el sombrero gigante'},
 {id:'futuro',name:'Copas del futuro',short:'Imagina',color:'#7794aa',ecology:'Copas de los árboles · el gran roble'},
 {id:'cambia',name:'Sendero del cambio',short:'Cambia',color:'#c49383',ecology:'La niebla · la escalera blanca'},
 {id:'contrario',name:'La otra orilla',short:'Otra mirada',color:'#9c9250',ecology:'Sobre las nubes · las islas del cielo'},
 {id:'final',name:'Hongo corona',short:'Gran final',color:'#d7b86f',ecology:'El mirador dorado sobre las nubes'},
];
// ---------------------------------------------------------------- the world
// The world is level-independent: geometry, stages, landmarks and stations are
// shared by A1–C2. Only the language work that a station opens changes per
// level (content/stations). Ten stages climb from the forest floor to a
// viewpoint above the clouds along a spiral around the mother tree.
export const STAGES=[
 {id:'suelo',name:'Suelo del bosque',from:-1},
 {id:'setas-bajas',name:'Setas bajas',from:2.6},
 {id:'comestibles',name:'¿Se come o no?',from:6.5},
 {id:'veneno',name:'Jardín venenoso',from:13.5},
 {id:'extranos',name:'Hongos extraños',from:21.5},
 {id:'dosel',name:'Dosel de sombreros gigantes',from:27},
 {id:'copas',name:'Copas de los árboles',from:32.5},
 {id:'niebla',name:'La niebla',from:38.5},
 {id:'nubes',name:'Sobre las nubes',from:45},
 {id:'mirador',name:'El mirador del cielo',from:54},
];
export function stageAt(y){let index=0;for(let i=0;i<STAGES.length;i++)if(y>=STAGES[i].from)index=i;return index;}
// Station landmarks: altitude, cap radius, species and the place name. Their
// position on the spiral follows from the hops needed to climb to them.
const STATIONS=[
 {id:'sobre-ti',y:2.4,r:4.6,species:'stump',place:'Claro de la entrada',hops:3},
 {id:'vida-real',y:5.4,r:4.4,species:'bolete',place:'La cesta olvidada',hops:3},
 {id:'elige',y:9.2,r:4.6,species:'chanterelle',place:'Setas doradas',hops:3},
 {id:'opinion',y:12.2,r:4.5,species:'bolete',place:'Las setas gemelas',hops:2},
 {id:'suposiciones',y:16.4,r:4.8,species:'amanita',place:'El hongo perfecto',hops:2},
 {id:'afirmacion',y:20.6,r:4.6,species:'violet',place:'El círculo oscuro',hops:2},
 {id:'compara',y:25,r:4.7,species:'glow',place:'La gruta luminosa',hops:2},
 {id:'recuerdos',y:29.6,r:6.2,species:'parasol',place:'El sombrero gigante',hops:2},
 {id:'futuro',y:35.2,r:4.6,species:'shelf',place:'La copa del roble',hops:3},
 {id:'cambia',y:41.2,r:4.4,species:'ghost',place:'La escalera de niebla',hops:3},
 {id:'contrario',y:48,r:4.6,species:'sky',place:'Las islas de nubes',hops:3},
 {id:'final',y:56,r:8,species:'crown',place:'El mirador del cielo',hops:4},
];
// The spiral tightens 17 m per turn, so a later turn never sits on an earlier one.
const R0=45,TIGHTEN=17/(Math.PI*2),THETA0=Math.PI*.78;
export function routePoint(theta){const R=R0-TIGHTEN*(theta-THETA0);return{x:Math.cos(theta)*R,z:Math.sin(theta)*R,R};}
const startPoint=routePoint(THETA0);
export const SPAWN={x:Math.round(startPoint.x*100)/100,y:0,z:Math.round(startPoint.z*100)/100};
export const GRAVITY=20, JUMP_SPEED=11, RUN_SPEED=9, WALK_SPEED=4.8;
// A second, softer jump in the air: a recovery when a jump was misjudged. One per landing.
export const DOUBLE_JUMP_SPEED=8.4, FALL_RECOVERY=7;
// Species along the climb: the stage decides what grows there.
const PATH_SPECIES=[['bolete','stump','bolete'],['bolete','puffball','bolete'],['chanterelle','oyster','bolete'],['amanita','violet','amanita'],['glow','spiral','glow'],['parasol','parasol','bolete'],['shelf','shelf','parasol'],['ghost','ghost','ghost'],['sky','sky','sky'],['sky','sky','sky']];
let seed=7719;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
const round=v=>Math.round(v*1000)/1000;
// Stem thickness per species, shared by rendering, clearance and collision.
export const STEM_WIDTH={bolete:.3,chanterelle:.2,oyster:.2,amanita:.2,violet:.2,glow:.2,spiral:.17,parasol:.11,ghost:.12,sky:.1,bouncer:.22};
export function stemRadiusOf(p){if(p.kind==='shelf')return 0;if(p.species==='stump')return p.r*.98;if(p.species==='puffball')return p.r;if(p.species==='crown')return 2.1;return Math.max(.45,p.r*(STEM_WIDTH[p.species]??.2));}
const stemRadius=p=>p.species==='puffball'||p.species==='stump'?0:stemRadiusOf(p)*(p.species==='spiral'?2:1);
/** Caps never overlap and no stem rises through a lower cap. */
export function clearOf(c,list,except=null){
 return list.every(p=>{
  if(p===except)return true;
  const d=Math.hypot(p.x-c.x,p.z-c.z);
  if(Math.abs(p.y-c.y)<7&&d<p.r+c.r+.6)return false;
  if(p.y>c.y&&d<c.r*1.12+stemRadius(p)+.25)return false;
  if(p.y<c.y&&d<p.r*1.12+stemRadius(c)+.25)return false;
  return true;
 });
}
const platforms=[],zones=[];
let theta=THETA0,previous={...SPAWN,r:1.2};
// Walk along the spiral until the next cap sits a calm jump (1.3–2.1 m gap) away.
const advance=(r,gap,wobble)=>{for(;;){theta+=.004;const p=routePoint(theta);const x=p.x+Math.cos(theta)*wobble,z=p.z+Math.sin(theta)*wobble;if(Math.hypot(x-previous.x,z-previous.z)>=previous.r+r+gap)return{x,z};}};
for(const [i,station] of STATIONS.entries()){
 const category=CATEGORIES.find(c=>c.id===station.id);
 const rise=(station.y-previous.y)/(station.hops+1);
 for(let j=1;j<=station.hops;j++){
  // Near the ground a cap would hide its stem: giant puffballs make the first steps.
  const y=previous.y+rise,stage=stageAt(y),species=y<1.8?'puffball':PATH_SPECIES[stage][j%3];
  const r=species==='puffball'||species==='stump'?2.5:2.6+rand()*.6;
  const at=advance(r,1.3+rand()*.8,Math.sin(i*2.1+j*1.7)*1.3);
  const p={id:`path-${i}-${j}`,x:round(at.x),z:round(at.z),y:round(y),r:round(r),kind:species==='shelf'?'shelf':'mushroom',species,stage,bounce:false,zone:null,checkpoint:j===station.hops&&y>8};
  platforms.push(p);previous=p;
 }
 const at=advance(station.r,1.5,0);
 const zone={...category,x:round(at.x),z:round(at.z),y:station.y,r:station.r,species:station.species,place:station.place,stage:stageAt(station.y),theta};
 zones.push(zone);
 const p={id:`zone-${zone.id}`,x:zone.x,z:zone.z,y:zone.y,r:zone.r,kind:zone.species==='shelf'?'shelf':'mushroom',species:zone.species,stage:zone.stage,bounce:false,zone:zone.id,checkpoint:true};
 platforms.push(p);previous=p;
}
export const ZONES=zones;
// Optional detours from each station: a side cap and a golden bounce cap that
// throws you high enough to look over the route before landing you back.
for(const [i,zone] of zones.entries()){
 if(i===0||zone.id==='final')continue;
 const species=PATH_SPECIES[zone.stage][1];
 for(const out of [1,-1]){
  const dir={x:Math.cos(zone.theta)*out,z:Math.sin(zone.theta)*out},tangent={x:-dir.z,z:dir.x};
  const side={id:`side-${i}-0`,x:round(zone.x+dir.x*(zone.r+4)+tangent.x*1.4),z:round(zone.z+dir.z*(zone.r+4)+tangent.z*1.4),y:round(zone.y+.9),r:2.5,kind:species==='shelf'?'shelf':'mushroom',species,stage:zone.stage,bounce:false,zone:null,checkpoint:false};
  const pad={id:`side-${i}-1`,x:round(side.x+dir.x*5.5-tangent.x*1.8),z:round(side.z+dir.z*5.5-tangent.z*1.8),y:round(zone.y+.3),r:2.3,kind:'mushroom',species:'bouncer',stage:zone.stage,bounce:true,zone:null,checkpoint:false};
  if(Math.hypot(pad.x,pad.z)>60||!clearOf(side,platforms)||!clearOf(pad,[...platforms,side]))continue;
  platforms.push(side,pad);break;
 }
}
/** A vertical column (trunk, stem, cloud pillar) that touches no cap between bottom and top. */
export function columnClear(x,z,radius,bottom,top,list=platforms,except=null){
 return list.every(p=>p===except||p.y<bottom-.5||p.y>top+2.5||Math.hypot(p.x-x,p.z-z)>=p.r*1.12+radius+.35);
}
// Bracket fungi grow from a real trunk. Find a side where an old oak fits.
for(const p of platforms){
 if(p.kind!=='shelf')continue;
 const theta=Math.atan2(p.z,p.x);
 for(const a of [theta,theta+Math.PI,theta+Math.PI/2,theta-Math.PI/2,theta+Math.PI*.75,theta-Math.PI*.75]){
  const radius=2.1+p.r*.18,x=p.x+Math.cos(a)*(p.r*.88+radius),z=p.z+Math.sin(a)*(p.r*.88+radius);
  if(columnClear(x,z,radius,0,p.y+14,platforms,p)){p.trunk={x:round(x),z:round(z),r:round(radius),top:round(p.y+14)};break;}
 }
 if(!p.trunk){p.kind='mushroom';p.species='parasol';}
}
export const PLATFORMS=platforms;
const ROUTE=platforms.filter(p=>!p.id.startsWith('side'));
/** Distance from (x,z) to the jump corridor between two consecutive route caps. */
function segmentDistance(x,z,a,b){const vx=b.x-a.x,vz=b.z-a.z,l=vx*vx+vz*vz||1,t=Math.max(0,Math.min(1,((x-a.x)*vx+(z-a.z)*vz)/l));return Math.hypot(x-(a.x+vx*t),z-(a.z+vz*t));}
/** True when a volume (x,z,radius,y0..y1) stays out of every jump corridor and landing zone of the route. */
export function corridorClear(x,z,radius,y0,y1,margin=1.6){
 if(Math.hypot(x-SPAWN.x,z-SPAWN.z)<radius+5)return false;
 for(let i=0;i<ROUTE.length;i++){
  const a=i?ROUTE[i-1]:{...SPAWN,r:1},b=ROUTE[i];
  const low=Math.min(a.y,b.y)-1,high=Math.max(a.y,b.y)+4.5;
  if(y1<low||y0>high)continue;
  if(segmentDistance(x,z,a,b)<radius+margin+1)return false;
  if(Math.hypot(x-b.x,z-b.z)<b.r+radius+margin&&y1>b.y-2.5&&y0<b.y+4)return false;
 }
 return true;
}
// Short conversation moments between the big stations: the middle cap of each
// stretch and the optional detour cap (a lookout). Level content decides what is asked.
for(let i=1;i<zones.length;i++){
 const stretch=ROUTE.filter(p=>p.id.startsWith(`path-${i}-`));
 const middle=stretch[Math.floor((stretch.length-1)/2)];
 if(middle)middle.micro=`tramo-${i}`;
 const side=platforms.find(p=>p.id===`side-${i}-0`);
 if(side)side.micro=`mirador-${i}`;
}
export const MICRO_SPOTS=platforms.filter(p=>p.micro).map(p=>({id:p.micro,platform:p.id,x:p.x,y:p.y,z:p.z,r:p.r,stage:p.stage,kind:p.micro.startsWith('mirador')?'mirador':'tramo'}));
// Each station keeps its arrival and departure clear: the sign and lantern stand
// on the rim beside the arrival, the story prop on the free side, all of them solid.
for(const zone of zones){
 const index=ROUTE.findIndex(p=>p.zone===zone.id),before=ROUTE[index-1]??{...SPAWN},after=ROUTE[index+1];
 const arrive=Math.atan2(before.x-zone.x,before.z-zone.z),leave=after?Math.atan2(after.x-zone.x,after.z-zone.z):arrive+Math.PI;
 let free=Math.atan2(-(Math.sin(arrive)+Math.sin(leave)),-(Math.cos(arrive)+Math.cos(leave)));
 if(!Number.isFinite(free))free=arrive+Math.PI/2;
 const at=(angle,q)=>({x:round(zone.x+Math.sin(angle)*q*zone.r),z:round(zone.z+Math.cos(angle)*q*zone.r),angle:round(angle)});
 zone.layout={arrive:round(arrive),leave:round(leave),sign:at(arrive+.62,.9),lamp:at(arrive-.62,.92),prop:at(free,.55)};
}
/** Solid things the player walks around: stems and puffballs at ground level, oak trunks, station props. */
export const OBSTACLES=[];
for(const p of platforms){
 if(p.kind==='shelf'&&p.trunk)OBSTACLES.push({id:`${p.id}-trunk`,x:p.trunk.x,z:p.trunk.z,r:p.trunk.r*1.05,y0:-1,y1:Math.min(p.trunk.top,p.y+7)});
 else if(p.species==='puffball')OBSTACLES.push({id:`${p.id}-ball`,x:p.x,z:p.z,r:p.r*1.02,y0:-1,y1:p.y-.45});
 else OBSTACLES.push({id:`${p.id}-stem`,x:p.x,z:p.z,r:stemRadius(p)*1.05,y0:-1,y1:p.y-.6});
}
for(const zone of zones){
 const {sign,lamp,prop}=zone.layout;
 OBSTACLES.push({id:`${zone.id}-sign`,x:sign.x,z:sign.z,r:.8,y0:zone.y-.2,y1:zone.y+2.2},{id:`${zone.id}-lamp`,x:lamp.x,z:lamp.z,r:.25,y0:zone.y-.2,y1:zone.y+2},{id:`${zone.id}-prop`,x:prop.x,z:prop.z,r:zone.id==='suposiciones'?1.1:.75,y0:zone.y-.2,y1:zone.y+2.4});
}
export const PLAYER_RADIUS=.35;
/** Push a position out of any solid it overlaps at its height. */
export function resolveObstacles(p,obstacles=OBSTACLES){
 for(const o of obstacles){
  if(p.y+1.7<o.y0||p.y>o.y1)continue;
  const dx=p.x-o.x,dz=p.z-o.z,d=Math.hypot(dx,dz),min=o.r+PLAYER_RADIUS;
  if(d>=min)continue;
  if(d>1e-6){p.x=o.x+dx/d*min;p.z=o.z+dz/d*min;}else p.x=o.x+min;
 }
 return p;
}
export function parseLevel(value){return LEVELS.includes(value)?value:'A1';}
export function spawnPlayer(){return{...SPAWN,vy:0,grounded:true,platform:'ground',checkpoint:{...SPAWN},yaw:0,coyote:.12,respawns:0,airJumps:1,doubleJumps:0};}
export function stepPlayer(player,input,delta,platforms=PLATFORMS,obstacles=OBSTACLES){
 const p={...player,checkpoint:{...player.checkpoint}};const dt=Math.max(0,Math.min(delta,.04));
 const length=Math.hypot(input.x||0,input.z||0)||1;const speed=input.run?RUN_SPEED:WALK_SPEED;
 const dx=(input.x||0)/Math.max(1,length)*speed*dt,dz=(input.z||0)/Math.max(1,length)*speed*dt;
 p.x+=dx;p.z+=dz;if(dx||dz)p.yaw=Math.atan2(dx,dz);
 resolveObstacles(p,obstacles);
 p.coyote=p.grounded?.12:Math.max(0,(p.coyote||0)-dt);
 if(input.jump&&(p.grounded||p.coyote>0)){p.vy=JUMP_SPEED;p.grounded=false;p.coyote=0;p.platform=null;}
 else if(input.jump&&(p.airJumps??1)>0){p.vy=DOUBLE_JUMP_SPEED;p.airJumps=0;p.doubleJumps=(p.doubleJumps||0)+1;p.platform=null;}
 const before=p.y;p.vy-=GRAVITY*dt;p.y+=p.vy*dt;p.grounded=false;
 const surfaces=platforms.filter(s=>Math.hypot(p.x-s.x,p.z-s.z)<=s.r+.24&&before>=s.y-.08&&p.y<=s.y&&p.vy<=0).sort((a,b)=>b.y-a.y);
 const floor=surfaces[0]??(Math.hypot(p.x,p.z)<65&&p.y<=0&&before>=-.08?{id:'ground',y:0,checkpoint:false}:null);
 if(floor){p.y=floor.y;p.vy=0;p.grounded=true;p.platform=floor.id;p.coyote=.12;p.airJumps=1;
  // Every cap of the climb is a safe point: a fall costs one hop, never the whole ascent.
  if(floor.id!=='ground'&&!floor.bounce)p.checkpoint={x:floor.x,y:floor.y,z:floor.z};
  if(floor.bounce){p.vy=15;p.grounded=false;p.coyote=0;}}
 if(!p.grounded)p.platform=null;
 // Falling to the forest floor once the climb has begun returns you to the last cap, not among the stems.
 const fellToFloor=p.grounded&&p.platform==='ground'&&p.checkpoint.y>2.5;
 if(fellToFloor||p.y<Math.max(-10,p.checkpoint.y-FALL_RECOVERY)||!Number.isFinite(p.y)||Math.hypot(p.x,p.z)>90){Object.assign(p,p.checkpoint,{vy:0,grounded:true,coyote:.12,platform:null,airJumps:1,respawns:p.respawns+1});}
 return p;
}
export function newSession(level='A1',seed=Date.now()%2147483647){return{version:1,level:parseLevel(level),seed,seen:[],discussed:[],visited:[],active:null,complete:false,finalIds:[],finalDone:[],personalized:false,micro:[]};}
export function switchLevel(session,level){return parseLevel(level)===session.level?session:newSession(parseLevel(level),session.seed+1);}
export function drawPrompt(session,bank){const available=bank.filter(p=>!session.seen.includes(p.id));if(!available.length)return{session:{...session,active:null},prompt:null};let seed=(Math.imul(session.seed,1664525)+1013904223)>>>0;const prompt=available[seed%available.length];return{prompt,session:{...session,seed,seen:[...session.seen,prompt.id],active:prompt.id}};}
export function discuss(session,prompt){return{...session,discussed:[...new Set([...session.discussed,prompt.id])],visited:[...new Set([...session.visited,prompt.zone])],active:null};}
export function finalUnlocked(session){return session.discussed.length>=10&&session.visited.filter(z=>z!=='final').length>=3;}
export function beginFinal(session,bank){if(!finalUnlocked(session))return{session,prompts:[]};if(session.finalIds.length>=3&&session.finalIds.every(id=>bank.some(p=>p.id===id))&&!session.complete)return{session,prompts:session.finalIds.filter(id=>!session.finalDone.includes(id)).map(id=>bank.find(p=>p.id===id)).filter(Boolean)};let s=session;const picked=[];for(const zone of session.visited.filter(z=>z!=='final').slice(0,4)){const draw=drawPrompt(s,bank.filter(p=>p.zone===zone));s=draw.session;if(draw.prompt)picked.push(draw.prompt);}if(picked.length<3){for(let i=picked.length;i<3;i++){const draw=drawPrompt(s,bank.filter(p=>p.zone==='final'));s=draw.session;if(draw.prompt)picked.push(draw.prompt);}}return{session:{...s,finalIds:picked.map(p=>p.id),finalDone:[],active:null},prompts:picked};}
/** Open an authored station conversation; it never consumes a category deck. */
export function openStation(session,prompt){return{...session,seen:[...new Set([...session.seen,prompt.id])],active:prompt.id};}
/** Expedition final: the summit station first, then two closing questions from the final deck. */
export function beginExpeditionFinal(session,bank,station){
 if(!finalUnlocked(session))return{session,prompts:[]};
 const byId=id=>bank.find(p=>p.id===id);
 if(session.finalIds[0]===station.id&&session.finalIds.length>=3&&session.finalIds.every(byId)&&!session.complete)return{session,prompts:session.finalIds.filter(id=>!session.finalDone.includes(id)).map(byId)};
 let s=openStation(session,station);const picked=[station];
 for(let i=0;i<2;i++){const draw=drawPrompt(s,bank.filter(p=>p.zone==='final'&&!p.station));s=draw.session;if(draw.prompt)picked.push(draw.prompt);}
 return{session:{...s,finalIds:picked.map(p=>p.id),finalDone:[],active:null},prompts:picked};
}
/** Short moments between stations: remembered per session, never scored. */
export function markMicro(session,id){return /^(tramo|mirador)-\d+$/.test(id)?{...session,micro:[...new Set([...(session.micro??[]),id])]}:session;}
export function completeFinalPrompt(session,id){if(!session.finalIds.includes(id))return session;return{...session,finalDone:[...new Set([...session.finalDone,id])]};}
export function finishSession(session){return session.finalIds.length>=3&&session.finalDone.length===session.finalIds.length?{...session,personalized:true,complete:true}:session;}
export function restoreSession(raw,banks){try{const s=JSON.parse(raw);if(s?.version!==1||!LEVELS.includes(s.level)||!Number.isFinite(s.seed))return null;for(const key of ['seen','discussed','visited','finalIds','finalDone'])if(!Array.isArray(s[key])||s[key].length>1000||!s[key].every(v=>typeof v==='string'))return null;const bank=banks?.[s.level];if(!Array.isArray(bank))return null;const seen=[...new Set(s.seen.filter(id=>bank.some(p=>p.id===id&&p.level===s.level)))];const discussed=[...new Set(s.discussed.filter(id=>seen.includes(id)))];const finalIds=[...new Set(s.finalIds.filter(id=>seen.includes(id)))];const finalDone=[...new Set(s.finalDone.filter(id=>finalIds.includes(id)))];const personalized=s.personalized===true;const micro=Array.isArray(s.micro)?[...new Set(s.micro.filter(id=>typeof id==='string'&&/^(tramo|mirador)-\d+$/.test(id)))].slice(0,100):[];return{...newSession(s.level,s.seed),micro,seen,discussed,visited:[...new Set(discussed.map(id=>bank.find(p=>p.id===id).zone))],finalIds,finalDone,personalized,complete:s.complete===true&&personalized&&finalIds.length>=3&&finalDone.length===finalIds.length};}catch{return null;}}
