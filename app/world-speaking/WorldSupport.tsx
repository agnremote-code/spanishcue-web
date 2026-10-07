'use client';
import {useState} from 'react';
import type {CEFRLevel} from '../conversation-families/types';
import {type WorldSeed,worldTools,worldGuides,worldClosing,worldModel} from './content';
import './support.css';
export function WorldSupport({seed,level}:{seed:WorldSeed;level:CEFRLevel}){
 const [verb,setVerb]=useState(0),[word,setWord]=useState(0);
 const model=worldModel(seed,level);
 const verbs=[['quiero','want'],['no quiero','do not want']];
 return <section className="world-speaking" aria-label="Apoyo para hablar · Speaking support"><h3>{level==='A0'?'Profesor: pulsa y modela · Teacher: click and model':'Apoyos para conversar · Conversation support'}</h3><p>{worldGuides[level][0]}<small>{worldGuides[level][1]}</small></p>{level==='A0'&&<><p><b>Yo = I · tú = you</b><small>«Yo» habla. «¿Y tú?» invita al otro. / “Yo” is the speaker. “¿Y tú?” invites the other person.</small></p><div className="world-chunks"><b>Yo · I</b>{verbs.map((v,i)=><button key={v[0]} aria-pressed={verb===i} onClick={()=>setVerb(i)}>{v[0]} · {v[1]}</button>)}</div><div className="world-chunks">{seed.words.map((w,i)=><button key={w[0]} aria-pressed={word===i} onClick={()=>setWord(i)}>{w[0]} · {w[1]}</button>)}</div><output aria-live="polite"><b>Yo {verbs[verb][0]} {seed.words[word][0]}.</b><small>I {verbs[verb][1]} {seed.words[word][1]}.</small></output><p>Consejo: «quiero» ya significa «I want». No cambies el verbo; cambia solo la última pieza.<small>Tip: “quiero” already means “I want”. Keep the verb; change only the last chunk.</small></p></>}<p><b>Escena · Scene</b><br/>{seed.situation[0]}<small>{seed.situation[1]}</small></p>{level!=="A0"&&<><div className="world-chunks">{seed.words.map(([es,en])=><span key={es}><b>{es}</b><small>{en}</small></span>)}</div><p><b>Modelo · Model</b><br/>{model[0]}<small>{model[1]}</small></p></>}<div className="world-chunks">{worldTools[level].map(([es,en])=><span key={es}><b>{es}</b><small>{en}</small></span>)}</div><details><summary>Cierre oral · Speaking finish</summary>{worldClosing(seed,level).map(([es,en])=><p key={es}>{es}<small>{en}</small></p>)}</details></section>;
}
