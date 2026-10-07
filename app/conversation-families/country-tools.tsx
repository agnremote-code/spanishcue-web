'use client';
import './country-bilingual.css';
import { useState } from 'react';
import type { CEFRLevel } from './types';
import { countryActivity, countrySupport, type CountryContext, type CountryPair } from './country-levels';

/** Teacher scaffolding accompanies the existing activity; it never replaces its visual engine. */
export function CountryTools({level,context,index=0,responses}:{level:CEFRLevel;context:CountryContext;index?:number;responses?:CountryPair[]}) {
 const [model,setModel]=useState(level==='A0');
 const [teacher,setTeacher]=useState(false);
 const [chosen,setChosen]=useState<number|null>(null);
 const support=countrySupport(level,context),activity=countryActivity(level,context,index);
 const choices=responses??activity.choices,modelAnswer=responses?.[0]??activity.model;
 return <section className="cf-closing" data-country-support={level}>
  <strong>Apoyo para hablar · Speaking support · {level}</strong>
  <p>{support.tip.es}<br/>{support.tip.en}</p>
  <button type="button" aria-pressed={model} onClick={()=>setModel(!model)}>Modelo · Model {model?'−':'+'}</button>{' '}
  <button type="button" aria-expanded={teacher} onClick={()=>setTeacher(!teacher)}>Guía docente · Teacher guide</button>
  <div aria-label="Opciones para hablar · Speaking choices">{choices.map((choice,choiceIndex)=><button type="button" key={choice.es} aria-pressed={chosen===choiceIndex} onClick={()=>setChosen(choiceIndex)}>{choice.es}<br/>{choice.en}</button>)}</div>
  {chosen!==null&&<p role="status"><b>{choices[chosen]?.es}</b><br/>{choices[chosen]?.en}</p>}
  {model&&<p><b>{modelAnswer.es}</b><br/>{modelAnswer.en}</p>}
  {level==='A0'&&<><p><b>Pronombres · Pronouns:</b> yo / I · tú / you · él / he · ella / she · nosotros, nosotras / we · vosotros, vosotras / you (plural, Spain) · ustedes / you (plural) · ellos, ellas / they</p><p><b>Verbos listos · Ready-to-use verbs:</b> yo quiero / I want · tú quieres / you want · yo voy / I go · tú vas / you go · me gusta / I like it.</p><p><b>Ayuda · Help:</b> Otra vez, por favor. / Again, please. · Más despacio, por favor. / More slowly, please.</p></>}
  <p><b>Reto · Challenge:</b> {support.challenge.es}<br/>{support.challenge.en}</p>
  {teacher&&<p>{level==='A0'?'Lee la pregunta y las dos opciones. Acepta señalar, luego modela la frase completa y pide repetir. Cambia los roles; deja el modelo visible hasta que el alumno quiera ocultarlo.':'Da tiempo para preparar una respuesta. Pide una repregunta y cambia los roles. Usa el reto cuando la primera respuesta sea fluida.'}<br/>{level==='A0'?'Read the question and both options. Accept pointing, then model the complete sentence and ask for repetition. Swap roles; leave the model visible until the learner wants it hidden.':'Allow preparation time. Ask for a follow-up question and swap roles. Use the challenge once the first answer is fluent.'}</p>}
 </section>;
}
export function CountryClosing({level,context}:{level:CEFRLevel;context:CountryContext}) {
 return <details className="cf-closing"><summary>Cierre de conversación · Closing conversation · {level}</summary>{countrySupport(level,context).closing.map(item=><p key={item.es}><b>{item.es}</b><br/>{item.en}</p>)}</details>;
}
