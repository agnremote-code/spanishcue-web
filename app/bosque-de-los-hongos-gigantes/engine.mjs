export const LEVELS = ['A1','A2','B1','B2','C1','C2'];
export const CATEGORIES = [
 {id:'sobre-ti',name:'Hongos de ti',short:'Sobre ti',color:'#59879d',ecology:'Un claro de musgo y hongos azules'},
 {id:'vida-real',name:'Jardín cotidiano',short:'Vida real',color:'#789a57',ecology:'Helechos, raíces y agua fresca'},
 {id:'elige',name:'Las dos sendas',short:'Elige',color:'#c9a05b',ecology:'Dos puentes entre sombreros dorados'},
 {id:'opinion',name:'Arboleda de las voces',short:'Opina',color:'#b66b42',ecology:'Hongos de cobre bajo el sol'},
 {id:'suposiciones',name:'Valle de lo posible',short:'Supón',color:'#8e7cab',ecology:'Un valle de niebla y pétalos violetas'},
 {id:'afirmacion',name:'Raíces y razones',short:'Reacciona',color:'#ac866a',ecology:'Un círculo de viejos troncos'},
 {id:'compara',name:'Jardín de los contrastes',short:'Compara',color:'#7ca59c',ecology:'Hongos de distintas alturas junto al arroyo'},
 {id:'recuerdos',name:'Cueva de recuerdos',short:'Recuerda',color:'#a69b8f',ecology:'Piedra, sombra y hongos de marfil'},
 {id:'futuro',name:'Copas del futuro',short:'Imagina',color:'#7794aa',ecology:'Copas abiertas al cielo'},
 {id:'cambia',name:'Sendero del cambio',short:'Cambia',color:'#c49383',ecology:'Flores rosadas entre caminos cruzados'},
 {id:'contrario',name:'La otra orilla',short:'Otra mirada',color:'#9c9250',ecology:'Un puente sobre el bosque'},
 {id:'final',name:'Hongo corona',short:'Gran final',color:'#d7b86f',ecology:'La gran corona dorada sobre las nubes'},
];
export const SPAWN={x:0,y:0,z:0};
export const GRAVITY=20, JUMP_SPEED=11, RUN_SPEED=9, WALK_SPEED=4.8;
const zones=CATEGORIES.map((c,i)=>{const a=i*.77;const r=15+i*1.7;return{...c,x:Math.cos(a)*r,z:Math.sin(a)*r,y:1.8+i*3.5};});
export const ZONES=zones;
const platforms=[];
let previous=SPAWN;
for(const [i,zone] of zones.entries()){
 const distance=Math.hypot(zone.x-previous.x,zone.z-previous.z);
 const steps=Math.max(4,Math.ceil(distance/4.8));
 for(let j=1;j<steps;j++){const t=j/steps;if(distance*t<5.8||distance*(1-t)<5.8)continue;platforms.push({id:`path-${i}-${j}`,x:previous.x+(zone.x-previous.x)*t,z:previous.z+(zone.z-previous.z)*t,y:previous.y+(zone.y-previous.y)*t,r:2.9,kind:j%4===0?'log':'mushroom',bounce:i>7&&j===steps-2,zone:null,checkpoint:false});}
 platforms.push({id:`zone-${zone.id}`,x:zone.x,z:zone.z,y:zone.y,r:i===11?7:4.5,kind:'mushroom',bounce:false,zone:zone.id,checkpoint:true});
 // A second, traversable arc around each grove invites free exploration.
 if(i<11)for(let k=0;k<3;k++){const a=i*.77+k*1.0;platforms.push({id:`side-${i}-${k}`,x:zone.x+Math.cos(a)*7,z:zone.z+Math.sin(a)*7,y:zone.y+(k-1)*.8,r:3.1,kind:k===1?'log':'mushroom',bounce:k===2,zone:null,checkpoint:false});}
 previous=zone;
}
export const PLATFORMS=platforms;
export function parseLevel(value){return LEVELS.includes(value)?value:'A1';}
export function spawnPlayer(){return{...SPAWN,vy:0,grounded:true,platform:'ground',checkpoint:{...SPAWN},yaw:0,coyote:.12,respawns:0};}
export function stepPlayer(player,input,delta,platforms=PLATFORMS){
 const p={...player,checkpoint:{...player.checkpoint}};const dt=Math.max(0,Math.min(delta,.04));
 const length=Math.hypot(input.x||0,input.z||0)||1;const speed=input.run?RUN_SPEED:WALK_SPEED;
 const dx=(input.x||0)/Math.max(1,length)*speed*dt,dz=(input.z||0)/Math.max(1,length)*speed*dt;
 p.x+=dx;p.z+=dz;if(dx||dz)p.yaw=Math.atan2(dx,dz);
 p.coyote=p.grounded?.12:Math.max(0,(p.coyote||0)-dt);
 if(input.jump&&(p.grounded||p.coyote>0)){p.vy=JUMP_SPEED;p.grounded=false;p.coyote=0;p.platform=null;}
 const before=p.y;p.vy-=GRAVITY*dt;p.y+=p.vy*dt;p.grounded=false;
 const surfaces=platforms.filter(s=>Math.hypot(p.x-s.x,p.z-s.z)<=s.r+.24&&before>=s.y-.08&&p.y<=s.y&&p.vy<=0).sort((a,b)=>b.y-a.y);
 const floor=surfaces[0]??(Math.hypot(p.x,p.z)<65&&p.y<=0&&before>=-.08?{id:'ground',y:0,checkpoint:false}:null);
 if(floor){p.y=floor.y;p.vy=0;p.grounded=true;p.platform=floor.id;p.coyote=.12;if(floor.checkpoint)p.checkpoint={x:floor.x,y:floor.y,z:floor.z};if(floor.bounce){p.vy=15;p.grounded=false;p.coyote=0;}}
 if(!p.grounded)p.platform=null;
 if(p.y<Math.max(-10,p.checkpoint.y-12)||!Number.isFinite(p.y)||Math.hypot(p.x,p.z)>90){Object.assign(p,p.checkpoint,{vy:0,grounded:true,coyote:.12,platform:null,respawns:p.respawns+1});}
 return p;
}
export function newSession(level='A1',seed=Date.now()%2147483647){return{version:1,level:parseLevel(level),seed,seen:[],discussed:[],visited:[],active:null,complete:false,finalIds:[],finalDone:[],personalized:false};}
export function switchLevel(session,level){return parseLevel(level)===session.level?session:newSession(parseLevel(level),session.seed+1);}
export function drawPrompt(session,bank){const available=bank.filter(p=>!session.seen.includes(p.id));if(!available.length)return{session:{...session,active:null},prompt:null};let seed=(Math.imul(session.seed,1664525)+1013904223)>>>0;const prompt=available[seed%available.length];return{prompt,session:{...session,seed,seen:[...session.seen,prompt.id],active:prompt.id}};}
export function discuss(session,prompt){return{...session,discussed:[...new Set([...session.discussed,prompt.id])],visited:[...new Set([...session.visited,prompt.zone])],active:null};}
export function finalUnlocked(session){return session.discussed.length>=10&&session.visited.filter(z=>z!=='final').length>=3;}
export function beginFinal(session,bank){if(!finalUnlocked(session))return{session,prompts:[]};if(session.finalIds.length>=3&&session.finalIds.every(id=>bank.some(p=>p.id===id))&&!session.complete)return{session,prompts:session.finalIds.filter(id=>!session.finalDone.includes(id)).map(id=>bank.find(p=>p.id===id)).filter(Boolean)};let s=session;const picked=[];for(const zone of session.visited.filter(z=>z!=='final').slice(0,4)){const draw=drawPrompt(s,bank.filter(p=>p.zone===zone));s=draw.session;if(draw.prompt)picked.push(draw.prompt);}if(picked.length<3){for(let i=picked.length;i<3;i++){const draw=drawPrompt(s,bank.filter(p=>p.zone==='final'));s=draw.session;if(draw.prompt)picked.push(draw.prompt);}}return{session:{...s,finalIds:picked.map(p=>p.id),finalDone:[],active:null},prompts:picked};}
export function completeFinalPrompt(session,id){if(!session.finalIds.includes(id))return session;return{...session,finalDone:[...new Set([...session.finalDone,id])]};}
export function finishSession(session){return session.finalIds.length>=3&&session.finalDone.length===session.finalIds.length?{...session,personalized:true,complete:true}:session;}
export function restoreSession(raw,banks){try{const s=JSON.parse(raw);if(s?.version!==1||!LEVELS.includes(s.level)||!Number.isFinite(s.seed))return null;for(const key of ['seen','discussed','visited','finalIds','finalDone'])if(!Array.isArray(s[key])||s[key].length>1000||!s[key].every(v=>typeof v==='string'))return null;const bank=banks?.[s.level];if(!Array.isArray(bank))return null;const seen=[...new Set(s.seen.filter(id=>bank.some(p=>p.id===id&&p.level===s.level)))];const discussed=[...new Set(s.discussed.filter(id=>seen.includes(id)))];const finalIds=[...new Set(s.finalIds.filter(id=>seen.includes(id)))];const finalDone=[...new Set(s.finalDone.filter(id=>finalIds.includes(id)))];const personalized=s.personalized===true;return{...newSession(s.level,s.seed),seen,discussed,visited:[...new Set(discussed.map(id=>bank.find(p=>p.id===id).zone))],finalIds,finalDone,personalized,complete:s.complete===true&&personalized&&finalIds.length>=3&&finalDone.length===finalIds.length};}catch{return null;}}
