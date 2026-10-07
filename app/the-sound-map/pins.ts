export type MapPin={id:string;x:number;y:number;width:number;height:number};
/** Move only colliding labels, choosing the nearest free position to each anchor. */
export function layoutPins(pins:MapPin[],width:number,height:number):MapPin[]{
 const clamp=(p:MapPin)=>({...p,x:Math.max(p.width/2+8,Math.min(width-p.width/2-8,p.x)),y:Math.max(p.height+48,Math.min(height-62,p.y))});
 const overlaps=(a:MapPin,b:MapPin)=>Math.abs(a.x-b.x)<(a.width+b.width)/2+6&&a.y>b.y-b.height-6&&b.y>a.y-a.height-6;
 const placed:MapPin[]=[];
 for(const original of [...pins].sort((a,b)=>a.y-b.y||a.x-b.x)){
  let pin=clamp(original),found=!placed.some(p=>overlaps(pin,p));
  for(let radius=12;!found&&radius<Math.max(width,height);radius+=12){
   for(let angle=0;angle<16;angle++){
    const candidate=clamp({...original,x:original.x+Math.cos(angle*Math.PI/8)*radius,y:original.y+Math.sin(angle*Math.PI/8)*radius});
    if(!placed.some(p=>overlaps(candidate,p))){pin=candidate;found=true;break;}
   }
  }
  if(!found){
   // Degenerate projections (e.g. edge-on) still keep all six controls usable.
   const maxWidth=Math.max(...pins.map(p=>p.width)),maxHeight=Math.max(...pins.map(p=>p.height));
   const cols=Math.max(1,Math.min(3,Math.floor((width-10)/(maxWidth+6)))),rows=Math.ceil(pins.length/cols);
   return [...pins].sort((a,b)=>a.y-b.y||a.x-b.x).map((p,i)=>({...p,x:8+maxWidth/2+(i%cols)*(width-16-maxWidth)/Math.max(1,cols-1),y:48+maxHeight+Math.floor(i/cols)*(height-110-maxHeight)/Math.max(1,rows-1)}));
  }
  placed.push(pin);
 }
 return placed;
}

/** Shared isometric projection for the illustrated city and its DOM hotspots. */
export function planPoint(x:number,y:number,z:number):[number,number]{return [60+(x-z)*1.9,57+(x+z)*.92-y*2.8];}
