import {positions} from './positions';
import './style.css';

export default function VerbalPosition({items,context,compact=false}:{items:string[];context?:string;compact?:boolean}) {
  return <aside className={`vp-position ${compact?'vp-compact':''}`} aria-label="Ubicación en el sistema verbal">
    <div className="vp-label">UBICACIÓN EN EL SISTEMA VERBAL</div>
    {context&&<p className="vp-context">{context}</p>}
    <div className="vp-list">{[...new Set(items)].map(id=>{const item=positions[id];if(!item)throw new Error(`Unknown verbal position: ${id}`);return <div className="vp-item" key={id}>
      <div className="vp-name">{item.name}</div>
      <dl><div><dt>MODO</dt><dd>{item.mood}</dd></div><div><dt>TIEMPO</dt><dd>{item.tense}</dd></div><div><dt>TIPO DE FORMA</dt><dd>{item.structure}</dd></div></dl>
      <p className="vp-example">{item.example}</p><p className="vp-note">{item.note}</p>
    </div>})}</div>
    {!compact&&<details className="vp-recap"><summary>Recordar: modo versus tiempo · 3 modos y 16 tiempos</summary><p><b>Modo:</b> cómo se presenta una situación y qué permite la estructura de la oración. Distinguimos indicativo, subjuntivo e imperativo. <b>Tiempo:</b> sitúa la acción respecto de ahora o de otro punto de referencia; su interpretación depende del contexto.</p><p>El inventario completo cuenta <b>10 tiempos de indicativo + 6 de subjuntivo = 16</b>, incluidas formas poco usadas. El imperativo no tiene una serie equivalente de tiempos. Ni sus usos afirmativos y negativos ni las variantes -ra/-se añaden tiempos nuevos.</p><p>El <b>condicional simple y el compuesto pertenecen al indicativo</b>. Una oración condicional es una construcción que puede combinar tiempos de distintos modos.</p><p><a href="/condicionales-b1">Ver la explicación completa en «Empezar · Modo y tiempo»</a> · <a href="https://www.rae.es/gtg/condicional-simple" target="_blank" rel="noreferrer">Clasificación del condicional · RAE</a> · <a href="https://www.rae.es/dpd/ayuda/modelos-de-conjugacion-verbal" target="_blank" rel="noreferrer">Conjugaciones · RAE</a></p></details>}
  </aside>;
}
