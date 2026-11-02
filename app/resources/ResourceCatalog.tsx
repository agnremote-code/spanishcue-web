'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CEFR_LEVELS, type CEFRLevel } from '../conversation-families/types';
import styles from './resources.module.css';

type ResourceCard = {id:number;title:string;subtitle:string;category:string;categoryLabel:string;level:string;levels?:string[];displayLevel?:string;duration:string;path:string;image:string;free:boolean;familyId?:string;previewByLevel?:Partial<Record<CEFRLevel,{hook:string;image?:string}>>};
const categories = ['Gramática','Conversación','Escucha','Fonética','Vocabulario'];
const COPY={en:{search:'Search',level:'Level',skill:'Skill',allLevels:'All levels',allSkills:'All skills',results:'resources',free:'Free',available:'Available in',empty:'No resources match these filters. Try another level or topic.',form:'Find teaching resources'},es:{search:'Buscar',level:'Nivel',skill:'Destreza',allLevels:'Todos los niveles',allSkills:'Todas las destrezas',results:'recursos',free:'Gratis',available:'Disponible en',empty:'Ningún recurso coincide con estos filtros. Prueba con otro nivel u otro tema.',form:'Buscar recursos para la clase'}};
export default function ResourceCatalog({items,locale='en'}:{items:ResourceCard[];locale?:'en'|'es'}) {
 const t=COPY[locale];
 const [level,setLevel]=useState('Todos');
 const [category,setCategory]=useState('Todas');
 const [query,setQuery]=useState('');
 const normalize=(text:string)=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const filtered=items.filter(item=>(level==='Todos'||(item.levels||[item.level]).includes(level))&&(category==='Todas'||category===item.category)&&normalize(`${item.title} ${item.subtitle}`).includes(normalize(query.trim())));
 return <>
  <form className={styles.filters} onSubmit={event=>event.preventDefault()} role="search" aria-label={t.form}>
   <label>{t.search}<input type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Taxi, Red Flag, países…"/></label>
   <label>{t.level}<select value={level} onChange={event=>setLevel(event.target.value)}><option value="Todos">{t.allLevels}</option>{CEFR_LEVELS.map(value=><option key={value}>{value}</option>)}</select></label>
   <label>{t.skill}<select value={category} onChange={event=>setCategory(event.target.value)}><option value="Todas">{t.allSkills}</option>{categories.map(value=><option key={value}>{value}</option>)}</select></label>
  </form>
  <p role="status" className={styles.resultCount}>{filtered.length} {t.results}</p>
  {categories.map(group=>{
   const groupItems=filtered.filter(item=>item.category===group);
   if(!groupItems.length)return null;
   return <section className={styles.group} key={group}><h2>{groupItems[0].categoryLabel}</h2><div className={styles.catalogGrid}>{groupItems.map(item=>{
    const preview=item.previewByLevel?.[level as CEFRLevel];
    const href=item.familyId&&level!=='Todos'?`${item.path}?level=${level}`:item.path;
    return <Link className={styles.resourceCard} href={href} key={item.id}>
     <img className={styles.catalogPreview} src={preview?.image||item.image} alt="" loading="lazy" width="640" height="360"/>
     <p className={styles.cardMeta}>{item.displayLevel||item.level} · {item.duration} · {item.free?t.free:'PRO'}</p>
     <h3 className={styles.cardTitle}>{item.title}</h3>
     {item.familyId&&item.levels&&item.levels.length>1&&<p className={styles.levelAvailability}>{t.available} {item.levels.join(' · ')}</p>}
     <p className={styles.cardCopy}>{preview?.hook||item.subtitle}</p>
    </Link>;
   })}</div></section>;
  })}
  {!filtered.length&&<p>{t.empty}</p>}
 </>;
}
