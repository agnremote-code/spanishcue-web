'use client';
import {useState,type CSSProperties} from 'react';
import './adjectives.css';
const adjectives={rojo:{es:'rojo',en:'red',color:'#a55740',shade:'#703628',family:'o'},azul:{es:'azul',en:'blue',color:'#567d8b',shade:'#345560',family:'consonant'},grande:{es:'grande',en:'large',color:'#b58e59',shade:'#755a35',family:'e'},pequeño:{es:'pequeño',en:'small',color:'#b58e59',shade:'#755a35',family:'o'}} as const;
type Adjective=keyof typeof adjectives;
function Furniture({kind}:{kind:'mesa'|'banco'}){return <div className={`at-model at-${kind}`}><i className="at-top"/>{[0,1,2,3].map(n=><i key={n} className={`at-leg at-leg-${n}`}/>)}</div>;}
export default function AdjectiveScene(){
 const[kind,setKind]=useState<'mesa'|'banco'>('mesa'),[plural,setPlural]=useState(false),[adjective,setAdjective]=useState<Adjective>('rojo'),[reveal,setReveal]=useState(true);
 const selected=adjectives[adjective],feminine=kind==='mesa';
 const form=selected.family==='o'?adjective.slice(0,-1)+(feminine?'a':'o')+(plural?'s':''):adjective+(plural?(adjective==='azul'?'es':'s'):'');
 const noun=kind+(plural?'s':''),article=feminine?(plural?'las':'la'):(plural?'los':'el');
 const furnitureEn=kind==='mesa'?(plural?'tables':'table'):(plural?'benches':'bench');
 const style={'--at-color':selected.color,'--at-shade':selected.shade,'--at-scale':adjective==='grande'?1.17:adjective==='pequeño'?.72:1} as CSSProperties;
 return <section className="at-scene" data-adjective-studio>
  <div className="ob-scene-top"><span>ATELIER DE OBJETOS / OBJECT ATELIER</span><span>01—04</span></div>
  <div className={`at-stage ${plural?'at-plural':''}`} style={style} role="img" aria-label={`Muestra de mobiliario. Cantidad: ${plural?'dos':'uno'}. Objeto: ${kind}. Cualidad: ${selected.es}. / ${plural?'Two':'One'} ${selected.en} ${furnitureEn}`}>
   <div className="at-light"/><div className="at-wall-mark">SPANISHCUE <b>FORMA · COLOR · ESCALA</b><small>FORM · COLOUR · SCALE</small></div>
   <div className="at-platform"/><div className="at-ruler" aria-hidden="true"><span>ESTUDIO 41</span></div>
   <div className="at-furniture" aria-hidden="true">{Array.from({length:plural?2:1},(_,i)=><Furniture kind={kind} key={i}/>)}</div>
   <div className="at-specimen"><span>{plural?'02':'01'}</span> {plural?'piezas / pieces':'pieza / piece'}</div>
  </div>
  <div className="at-controls"><div role="group" aria-label="Objeto / Object"><button type="button" data-furniture="mesa" aria-pressed={kind==='mesa'} onClick={()=>setKind('mesa')}>mesa <small>table</small></button><button type="button" data-furniture="banco" aria-pressed={kind==='banco'} onClick={()=>setKind('banco')}>banco <small>bench</small></button></div><div role="group" aria-label="Cantidad / Quantity"><button type="button" data-quantity="singular" aria-pressed={!plural} onClick={()=>setPlural(false)}>1</button><button type="button" data-quantity="plural" aria-pressed={plural} onClick={()=>setPlural(true)}>2</button></div></div>
  <div className="at-swatches" role="group" aria-label="Cualidad / Quality">{(Object.keys(adjectives) as Adjective[]).map(key=><button type="button" key={key} data-adjective={key} aria-pressed={adjective===key} onClick={()=>setAdjective(key)}><i className={`at-chip at-chip-${key}`} style={{background:adjectives[key].color}} aria-hidden="true"/><span>{key}<small>{adjectives[key].en}</small></span></button>)}</div>
  <div className="at-answer" data-adjective-answer aria-live="polite">{reveal?<><p><span>{article} {noun}</span> <strong>{form}</strong></p><small lang="en">the {selected.en} {furnitureEn}</small><div className="at-agreement"><span>{feminine?'Femenino / Feminine':'Masculino / Masculine'} · {plural?'Plural':'Singular'}</span><span>{selected.family==='o'?'-o / -a · -os / -as':selected.family==='e'?'-e · -es':'-l · -les'}</span></div></>:<><p>¿Cómo es? ¿Cómo son?</p><small lang="en">What is it like? What are they like?</small></>}</div>
  <button type="button" className="at-reveal" data-reveal-adjective aria-pressed={reveal} onClick={()=>setReveal(!reveal)}>{reveal?'Ocultar respuesta / Hide answer':'Revelar respuesta / Reveal answer'}</button>
  <p className="ob-note">Cambia solo una cosa. ¿Cambia el adjetivo, el sustantivo o los dos?<small className="ob-en" lang="en">Change just one thing. Does the adjective change, the noun, or both?</small></p>
 </section>;
}
