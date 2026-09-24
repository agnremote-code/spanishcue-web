'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CEFR_LEVELS, type CEFRLevel } from '../conversation-families/types';
import styles from './resources.module.css';

type ResourceCard = {id:number;title:string;subtitle:string;category:string;categoryLabel:string;level:string;levels?:string[];displayLevel?:string;duration:string;path:string;image:string;free:boolean;familyId?:string;previewByLevel?:Partial<Record<CEFRLevel,{hook:string;image?:string}>>};
const categories = ['Gramática','Conversación','Escucha','Fonética','Vocabulario'];
export default function ResourceCatalog({items}:{items:ResourceCard[]}) {
 const [level,setLevel]=useState('Todos');
 const [category,setCategory]=useState('Todas');
 const [query,setQuery]=useState('');
 const normalize=(text:string)=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const filtered=items.filter(item=>(level==='Todos'||(item.levels||[item.level]).includes(level))&&(category==='Todas'||category===item.category)&&normalize(`${item.title} ${item.subtitle}`).includes(normalize(query.trim())));
 return <>
  <form className={styles.filters} onSubmit={event=>event.preventDefault()} role="search" aria-label="Find teaching resources">
   <label>Search<input type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Taxi, Red Flag, países…"/></label>
   <label>Level<select value={level} onChange={event=>setLevel(event.target.value)}><option value="Todos">All levels</option>{CEFR_LEVELS.map(value=><option key={value}>{value}</option>)}</select></label>
   <label>Skill<select value={category} onChange={event=>setCategory(event.target.value)}><option value="Todas">All skills</option>{categories.map(value=><option key={value}>{value}</option>)}</select></label>
  </form>
  <p role="status" className={styles.resultCount}>{filtered.length} resources</p>
  {categories.map(group=>{
   const groupItems=filtered.filter(item=>item.category===group);
   if(!groupItems.length)return null;
   return <section className={styles.group} key={group}><h2>{groupItems[0].categoryLabel}</h2><div className={styles.catalogGrid}>{groupItems.map(item=>{
    const preview=item.previewByLevel?.[level as CEFRLevel];
    const href=item.familyId&&level!=='Todos'?`${item.path}?level=${level}`:item.path;
    return <Link className={styles.resourceCard} href={href} key={item.id}>
     <img className={styles.catalogPreview} src={preview?.image||item.image} alt="" loading="lazy" width="640" height="360"/>
     <p className={styles.cardMeta}>{item.displayLevel||item.level} · {item.duration} · {item.free?'Free':'PRO'}</p>
     <h3 className={styles.cardTitle}>{item.title}</h3>
     {item.familyId&&item.levels&&item.levels.length>1&&<p className={styles.levelAvailability}>Disponible en {item.levels.join(' · ')}</p>}
     <p className={styles.cardCopy}>{preview?.hook||item.subtitle}</p>
    </Link>;
   })}</div></section>;
  })}
  {!filtered.length&&<p>No resources match these filters. Try another level or topic.</p>}
 </>;
}
