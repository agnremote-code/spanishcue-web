"use client";
import {useRef,useState} from 'react';
import {LEVELS,nextLevel} from './state.mjs';
export default function LevelPicker({level,onChange,compact=false}:{level:string;onChange:(level:string)=>void;compact?:boolean}) {
 const [open,setOpen]=useState(false);
 const ref=useRef<HTMLDivElement>(null);
 const group=<div ref={ref} className="pf-levels" role="radiogroup" aria-label="Nivel de la clase" onKeyDown={event=>{
  if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key))return;
  event.preventDefault();const next=nextLevel(level,event.key);onChange(next);
  ref.current?.querySelector<HTMLButtonElement>(`[data-level="${next}"]`)?.focus();
 }}>
 {LEVELS.map(item=><button key={item} type="button" role="radio" data-level={item} aria-checked={item===level} tabIndex={item===level?0:-1} onClick={()=>onChange(item)}>{item}</button>)}
 </div>;
 if(!compact)return group;
 return <div className="pf-compact" onKeyDown={event=>{if(event.key==='Escape'){setOpen(false);event.currentTarget.querySelector<HTMLButtonElement>('.pf-level-trigger')?.focus();}}}>
  <button type="button" className="pf-level-trigger" aria-expanded={open} onClick={()=>setOpen(x=>!x)}>Nivel {level} ▾</button>
  <div className="pf-level-pop" hidden={!open}>{group}</div>
 </div>;
}
