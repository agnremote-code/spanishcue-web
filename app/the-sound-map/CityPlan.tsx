import type {ReactNode} from 'react';
import {planPoint} from './pins';
import type {Location} from './types';

const colors={sand:'#c39870',road:'#53657a',coral:'#df7968',blue:'#3f8b9c',cream:'#e8b96f',roof:'#85475c',green:'#378670',mint:'#77b398',purple:'#9272b7',wood:'#896044',dark:'#293c50',light:'#ffe3a0'};
const point=(x:number,y:number,z:number)=>planPoint(x,y,z).join(',');
function shade(hex:string,factor:number){return `#${[1,3,5].map(i=>Math.round(parseInt(hex.slice(i,i+2),16)*factor).toString(16).padStart(2,'0')).join('')}`;}
function block(x:number,y:number,z:number,w:number,h:number,d:number,color:string){
 const x0=x-w/2,x1=x+w/2,z0=z-d/2,z1=z+d/2;
 return <g><polygon points={[point(x0,y,z1),point(x1,y,z1),point(x1,y+h,z1),point(x0,y+h,z1)].join(' ')} fill={shade(color,.78)}/><polygon points={[point(x1,y,z0),point(x1,y,z1),point(x1,y+h,z1),point(x1,y+h,z0)].join(' ')} fill={shade(color,.61)}/><polygon points={[point(x0,y+h,z0),point(x1,y+h,z0),point(x1,y+h,z1),point(x0,y+h,z1)].join(' ')} fill={color}/></g>;
}
function tree(x:number,z:number,size=1){const [cx,cy]=planPoint(x,2.1*size,z);return <g>{block(x,0,z,.22,1.8*size,.22,colors.wood)}<ellipse cx={cx+1} cy={cy+4.5*size} rx={2.4*size} ry={.8*size} fill="#183e44" opacity=".18"/><ellipse cx={cx} cy={cy} rx={2.4*size} ry={3.1*size} fill={colors.green}/><ellipse cx={cx-.85*size} cy={cy-.9*size} rx={1.55*size} ry={2.2*size} fill={colors.mint}/></g>;}
function person(x:number,z:number,color:string,y=0){const [cx,cy]=planPoint(x,y+.5,z);return <g><ellipse cx={cx} cy={cy+1.35} rx=".7" ry=".32" fill="#283649" opacity=".3"/><rect x={cx-.38} y={cy-.6} width=".76" height="1.4" rx=".25" fill={color}/><circle cx={cx} cy={cy-.9} r=".46" fill="#f5c595"/></g>;}
function building(x:number,z:number,w:number,h:number,d:number,color:string){return <g>
 {block(x,0,z,w,h,d,color)}{block(x,h,z,w+.18,.2,d+.18,colors.roof)}{block(x,.1,z,w+.25,.12,d+.25,colors.cream)}
 {Array.from({length:Math.floor(h/1.2)},(_,row)=>Array.from({length:Math.floor(w/1.05)},(_,col)=>{const wx=x-w/2+.55+col*1.05,wy=.8+row*1.2;return <g key={`${row}-${col}`}>
  {block(wx,wy,z+d/2+.06,.45,.62,.07,(row+col)%3===0?colors.light:colors.dark)}{block(wx,wy-.12,z+d/2+.1,.62,.1,.22,colors.cream)}
 </g>;}))}
 {Array.from({length:Math.floor(h/1.2)},(_,row)=>Array.from({length:Math.floor(d/1.05)},(_,col)=><g key={`${row}-${col}`}>{block(x+w/2+.04,.8+row*1.2,z-d/2+.55+col*1.05,.07,.62,.45,(row+col)%2?colors.dark:'#d9ac68')}</g>))}
 {block(x,0,z+d/2+.06,.65,1.1,.1,colors.dark)}{block(x+.6,h+.2,z-.5,.45,.7,.45,colors.roof)}
 </g>;}

/** Isometric, layered version of the same six places, available without a GPU. */
export default function CityPlan({active,locations,completed}:{active:string|null;locations:Location[];completed:string[]}){
 const objects:{depth:number;id:string;node:ReactNode}[]=[];
 const add=(id:string,x:number,z:number,node:ReactNode)=>objects.push({depth:x+z,id,node});
 add('rear-house',-7,-10,building(-7,-10,3,2.8,2.2,colors.blue));
 add('balcony',-7,-5,<>{building(-7,-5,3.4,4.5,3.1,colors.coral)}{block(-7,2.6,-2.98,3,.16,1.1,colors.cream)}{block(-7,2.76,-2.45,3,.62,.06,colors.blue)}{[-7.9,-7.1,-6.3].map(x=><g key={x}>{block(x,2.8,-2.6,.32,.32,.32,colors.wood)}<circle cx={planPoint(x,3.4,-2.6)[0]} cy={planPoint(x,3.4,-2.6)[1]} r=".65" fill={colors.mint}/></g>)}{person(-7.65,-2.9,colors.blue,2.8)}{person(-6.3,-2.9,colors.light,2.8)}</>);
 add('rooftop',0,-10,<>{building(0,-10,4.4,4,3,colors.purple)}{block(0,4.2,-10,4.5,.15,3.1,colors.cream)}{block(0,4.6,-10,2,.17,.7,colors.blue)}<path d={`M${point(-2,5.8,-11.4)} Q${point(0,5.1,-11.4)} ${point(2,5.8,-11.4)}`} stroke={colors.dark} strokeWidth=".18" fill="none"/>{[-2,-1,0,1,2].map(x=>{const [cx,cy]=planPoint(x,5.8-Math.sin((x+2)/4*Math.PI)*.35,-11.4);return <g key={x}><circle cx={cx} cy={cy} r="1.15" fill="#ffd080" opacity=".15"/><circle cx={cx} cy={cy} r=".4" fill={colors.light}/></g>;})}{person(-1.4,-9.3,colors.coral,4.4)}{person(1.5,-10,colors.green,4.4)}</>);
 add('back-shop',4,-10,building(4,-10,2.2,3.3,2.3,colors.cream));
 add('park',-7,5,<>{block(-7,.55,5,2,.18,.65,colors.wood)}{block(-7,.75,4.7,2,.55,.13,colors.wood)}{person(-7.6,5.6,colors.coral)}{person(-6.4,5.6,colors.blue)}{[-8.4,-5.5].map(x=><g key={x}>{block(x,.15,6.9,.6,.3,.6,colors.wood)}{block(x,.45,6.9,.7,.25,.65,colors.purple)}</g>)}</>);
 add('singer',7,-5,<>{block(7,0,-5,3,.2,2.6,colors.wood)}{person(7,-5,colors.coral,.2)}{block(7.45,.2,-4.8,.06,1.3,.06,colors.dark)}{block(7.2,.6,-4.8,.4,.65,.15,colors.cream)}{block(6.3,.2,-4.4,.6,.13,1,colors.dark)}{[5.9,8.1].map(x=><g key={x}>{block(x,.2,-5.4,.4,.7,.4,colors.purple)}</g>)}{person(5.8,-3.2,colors.blue)}{person(7.1,-2.9,colors.green)}</>);
 add('taxi',0,0,<>{[-.76,.76].map(x=>[-.85,.85].map(z=><g key={`${x}-${z}`}>{block(x,.05,z,.18,.42,.5,colors.dark)}</g>))}{block(0,.25,0,1.5,.6,2.8,'#f6bb44')}{block(0,.85,-.1,1.3,.5,1.25,colors.blue)}{block(0,1.35,-.1,.6,.16,.3,colors.light)}{block(0,.48,1.42,1.15,.15,.08,colors.light)}</>);
 add('vendor',7,5,<>{block(7,0,5,2.6,1,1.6,colors.coral)}{[5.8,8.2].map(x=><g key={x}>{block(x,0,5.7,.08,2.5,.08,colors.dark)}</g>)}{Array.from({length:8},(_,i)=><g key={i}>{block(5.75+i*.36,2.5,5,.36,.15,2.3,i%2?colors.light:colors.coral)}</g>)}{Array.from({length:9},(_,i)=>{const [cx,cy]=planPoint(6.2+(i%3)*.45,1.2,4.6+Math.floor(i/3)*.35);return <circle key={i} cx={cx} cy={cy} r=".42" fill="#f6bc44"/>;})}{person(7,3.6,colors.blue)}{block(8.6,0,4,.7,.6,.7,colors.wood)}</>);
 for(const [x,z,w,h,d,color] of [[-10,9,2.5,2.7,2.5,colors.blue],[-4,9,2.2,2.4,2.2,colors.cream],[5,9,3,2.8,2,colors.coral]] as const)add(`house-${x}`,x,z,building(x,z,w,h,d,color));
 for(const [x,z,size] of [[-9,3,1.2],[-9,7,1.2],[-5,7,1.2],[-4,4,1],[-11,-8,.8],[-3,-6,.8],[8,-9,.8],[9,1,.8],[3,5,.8],[-11,0,.8],[2,9,.8]])add(`tree-${x}-${z}`,x,z,tree(x,z,size));
 for(const z of [-10,-2,7])add(`lamp-${z}`,9.3,z,<>{block(9.3,0,z,.08,2.3,.08,colors.dark)}{block(9.3,2.3,z,.45,.38,.45,colors.light)}</>);
 return <svg className="sm-city-plan" viewBox="0 15 120 80" aria-hidden="true">
  <defs><linearGradient id="sm-river" x2=".8" y2="1"><stop stopColor="#247f95"/><stop offset="1" stopColor="#124d68"/></linearGradient><filter id="sm-plan-shadow" x="-30%" y="-30%" width="160%" height="180%"><feGaussianBlur stdDeviation="2.4"/></filter></defs>
  <ellipse cx="62" cy="77" rx="41" ry="12" fill="#071b2c" opacity=".55" filter="url(#sm-plan-shadow)"/>
  {block(0,-1.1,-1,26.3,.5,26.3,colors.dark)}{block(0,-.6,-1,26,.6,26,colors.sand)}
  {block(0,0,-1,3.8,.03,25.8,colors.wood)}{block(0,.03,-1,3,.02,25.8,colors.road)}{block(0,.01,0,25.8,.03,3.5,colors.wood)}{block(0,.04,0,25.8,.02,2.5,colors.road)}
  <polygon points={[point(9.5,.03,-14),point(12.7,.03,-14),point(12.7,.03,12),point(9.5,.03,12)].join(' ')} fill="url(#sm-river)"/>
  <g className="sm-plan-ripples">{Array.from({length:24},(_,i)=><path key={i} d={`M${point(10+(i%3)*.7,.08,-12+i)} l1.3 .63`} stroke="#68b8be" strokeWidth=".17" opacity=".7"/>)}</g>
  {block(-7,.06,5,5.3,.1,4.8,colors.green)}{block(-7,.17,5.9,3.7,.02,.8,colors.cream)}
  {Array.from({length:14},(_,i)=><g key={i}>{block(0,.065,-11+i*1.6,.1,.01,.6,colors.light)}</g>)}
  {block(10,.1,0,5,.2,1.7,colors.wood)}{block(10,.3,.84,5,.1,.08,colors.light)}
  {objects.sort((a,b)=>a.depth-b.depth).map(object=><g key={object.id}>{object.node}</g>)}
  {locations.filter(loc=>loc.id===active||completed.includes(loc.id)).map(loc=>{const [cx,cy]=planPoint(loc.position[0],loc.id==='rooftop'?4.4:loc.id==='balcony'?4.8:.2,loc.position[1]);return <g key={loc.id} className={loc.id===active?'sm-plan-beacon':''}><ellipse cx={cx} cy={cy} rx="4" ry="1.7" fill={loc.color} opacity=".22"/><ellipse cx={cx} cy={cy} rx="3.3" ry="1.4" fill="none" stroke={loc.color} strokeWidth=".4"/></g>;})}
 </svg>;
}
