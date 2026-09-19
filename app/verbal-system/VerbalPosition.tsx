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
  </aside>;
}
