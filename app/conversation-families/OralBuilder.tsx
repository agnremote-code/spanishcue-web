'use client';
import { useState } from 'react';

export type OralPair = { es: string; en: string };
export type OralSupport = { frame: OralPair; choices: OralPair[]; model: OralPair; tip: OralPair };
/** Teacher-operated substitution, not an exercise that requires student input. */
export function OralBuilder({ support }: { support: OralSupport }) {
  const [choice, setChoice] = useState(0);
  const [english, setEnglish] = useState(true);
  const selectedIndex = Math.min(choice, support.choices.length - 1);
  const selected = support.choices[selectedIndex];
  if (!selected) return null;
  return <aside className="cf-oral-builder">
    <h3>Construye y dilo · Build it and say it</h3>
    <p>El profesor elige las piezas; tú dices la frase. · The teacher selects the pieces; you say the sentence.</p>
    <div className="cf-oral-choices" role="group" aria-label="Opciones para decir · Choices to say">{support.choices.map((item,index)=><button type="button" key={item.es} aria-pressed={selectedIndex===index} onClick={()=>setChoice(index)}>{item.es}{english&&<small lang="en">{item.en}</small>}</button>)}</div>
    <p className="cf-oral-result" aria-live="polite"><strong>{support.frame.es.replace('___',selected.es)}</strong>{english&&<span lang="en">{support.frame.en.replace('___',selected.en)}</span>}</p>
    <p>💡 {support.tip.es}{english&&<span lang="en">{support.tip.en}</span>}</p>
    <details><summary>Un ejemplo · A model</summary><p>{support.model.es}{english&&<span lang="en">{support.model.en}</span>}</p></details>
    <button type="button" onClick={()=>setEnglish(value=>!value)}>{english?'Practicar sin inglés · Practise without English':'Mostrar inglés · Show English'}</button>
  </aside>;
}
