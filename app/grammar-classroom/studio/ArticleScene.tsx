'use client';
import {useState} from 'react';
import './articles.css';
type Kind='painting'|'sculpture';
type Phase='new'|'known'|'context';
const phases:[Phase,string,string][]=[['new','Presentar','Introduce'],['known','Retomar','Refer back'],['context','Contexto','Shared context']];
export default function ArticleScene(){
 const[kind,setKind]=useState<Kind>('painting'),[plural,setPlural]=useState(false),[selected,setSelected]=useState(0),[phase,setPhase]=useState<Phase>('new'),[reveal,setReveal]=useState(true);
 const feminine=kind==='sculpture';
 const noun=(feminine?'escultura':'cuadro')+(plural?'s':'');
 const indefinite=feminine?(plural?'unas':'una'):(plural?'unos':'un');
 const definite=feminine?(plural?'Las':'La'):(plural?'Los':'El');
 const nounEn=feminine?(plural?'sculptures':'sculpture'):(plural?'paintings':'painting');
 const article=phase==='new'?indefinite:definite;
 const sentence=phase==='context'?'La puerta está abierta.':phase==='new'?`Veo ${article} ${noun}.`:`${article} ${noun} ${plural?'están':'está'} en la galería.`;
 const sentenceEn=phase==='context'?'The door is open.':phase==='new'?`I see ${plural?'some':'a'} ${nounEn}.`:`The ${nounEn} ${plural?'are':'is'} in the gallery.`;
 const choose=(i:number)=>{setSelected(i);setPhase('new');};
 const active=(i:number)=>phase!=='context'&&(i===selected||(plural&&i===(selected+1)%3));
 return <section className="ar-scene" data-article-studio>
  <div className="ob-scene-heading"><span>GALERÍA DE REFERENTES / GALLERY OF REFERENTS</span><span className="ar-count">{phase==='context'?'01':plural?'02':'01'} · {phase==='context'?'puerta / door':'obras / artworks'}</span></div>
  <div className={`ar-gallery ar-kind-${kind} ar-phase-${phase}`} role="group" aria-label="Galería interactiva: obras y puerta / Interactive gallery: artworks and door">
   <div className="ar-ceiling" aria-hidden="true"/><div className="ar-gallery-sign" aria-hidden="true">SPANISHCUE<br/><span>LA GALERÍA</span></div><div className="ar-floor" aria-hidden="true"/>
   <div className="ar-artworks">{[0,1,2].map(i=><button type="button" key={i} className={`ar-artwork ar-artwork-${i}`} data-artwork={i} data-selected-object={active(i)||undefined} aria-pressed={active(i)} aria-label={`${feminine?'Escultura':'Cuadro'} ${i+1} / ${feminine?'Sculpture':'Painting'} ${i+1}`} onClick={()=>choose(i)}><span className="ar-spotlight" aria-hidden="true"/>{kind==='painting'?<span className="ar-frame" aria-hidden="true"><i className="ar-canvas"><i/></i></span>:<><span className={`ar-sculpture ar-sculpture-${i}`} aria-hidden="true"/><span className="ar-plinth" aria-hidden="true"/></>}<span className="ar-art-label">0{i+1}</span><span className="ar-selection" aria-hidden="true"/></button>)}</div>
   <button type="button" className="ar-door" aria-label="Puerta azul abierta / Open blue door" aria-pressed={phase==='context'} onClick={()=>setPhase('context')}><span className="ar-door-leaf" aria-hidden="true"/><span className="ar-door-label">puerta<small lang="en">door</small></span></button>
  </div>
  <div className="ar-phases" role="group" aria-label="Situación comunicativa / Communicative situation">{phases.map(([key,es,en])=><button type="button" key={key} data-article-phase={key} aria-pressed={phase===key} onClick={()=>setPhase(key)}>{es}<small lang="en">{en}</small></button>)}</div>
  {phase!=='context'?<div className="ar-selectors"><div role="group" aria-label="Tipo de obra / Type of artwork">{(['painting','sculpture'] as Kind[]).map(k=><button type="button" key={k} data-art-kind={k} aria-pressed={kind===k} onClick={()=>{setKind(k);setPhase('new');}}>{k==='painting'?'cuadro / painting':'escultura / sculpture'}</button>)}</div><div role="group" aria-label="Número / Number"><button type="button" data-art-number="singular" aria-pressed={!plural} onClick={()=>{setPlural(false);setPhase('new');}}>1</button><button type="button" data-art-number="plural" aria-pressed={plural} onClick={()=>{setPlural(true);setPhase('new');}}>2</button></div></div>:<p className="ar-context">Puerta única, visible para ambos.<small className="ob-en" lang="en">A single door, visible to both people.</small></p>}
  <div className="ar-answer" data-article-answer aria-live="polite">{reveal?<><p>{phase==='new'?'Veo ':''}<strong>{phase==='context'?'La':article}</strong>{phase==='context'?' puerta está abierta.':` ${noun}${phase==='new'?'.':` ${plural?'están':'está'} en la galería.`}`}</p><small lang="en">{sentenceEn}</small></>:<><p>{phase==='new'?'Veo ___…':'___…'}</p><small lang="en">Choose the article and complete the sentence.</small></>}</div>
  <button className="ar-reveal" type="button" data-article-reveal aria-pressed={reveal} onClick={()=>setReveal(!reveal)}>{reveal?'Ocultar respuesta / Hide answer':'Revelar respuesta / Reveal answer'}</button>
  <p className="ar-note">{phase==='new'?'Presentamos información nueva. Selecciona otra obra para empezar de nuevo.':phase==='known'?'Seguimos hablando de la misma obra o del mismo grupo seleccionado.':'Podemos identificarla por la situación, incluso sin mencionarla antes.'}<small className="ob-en" lang="en">{phase==='new'?'We introduce new information. Select another artwork to start again.':phase==='known'?'We are still talking about the same selected artwork or group.':'We can identify it from the situation, even without an earlier mention.'}</small></p>
  <span className="ar-sr-only">{reveal?sentence:''}</span>
 </section>;
}
