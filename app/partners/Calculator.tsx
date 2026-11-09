'use client';
import {useState} from 'react';
import {commissionCents,partnerMoney} from './service';
export default function Calculator() {
 const [teachers,setTeachers]=useState(10);
 return <div className="pt-calculator"><div className="pt-calc-controls"><p className="pt-eyebrow">HAZ LOS NÚMEROS</p><h3>Tu red tiene potencial.</h3><p>Explora el cálculo con profesores que pagan una mensualidad PRO de US$19,90.</p>
 <label htmlFor="partner-teachers">Profesores con mensualidad pagada <b>{teachers}</b></label><input id="partner-teachers" type="range" min="1" max="100" value={teachers} onChange={e=>setTeachers(Number(e.target.value))}/>
 <div className="pt-presets" aria-label="Ejemplos de profesores referidos">{[1,10,50,100].map(n=><button type="button" key={n} onClick={()=>setTeachers(n)} aria-pressed={n===teachers}>{n} {n===1?'profesor':'profesores'}</button>)}</div></div>
 <div className="pt-calc-result"><span>COMISIÓN POR MENSUALIDAD PAGADA</span><output aria-live="polite" aria-atomic="true">{partnerMoney(commissionCents(teachers))}</output><p>{teachers} × US$19,90 × 30 %</p><hr/><b>Hasta seis mensualidades pagadas<br/>por cada profesor referido.</b><small>Si todos pagan esa mensualidad. No es una proyección de ingresos.</small></div></div>;
}
