"use client";

import { useState } from 'react';
import type { Practice } from './data';
import { closings, orders, positions, repairGuides, type RepairKind } from './repair-data';
import { adjustCount, completeSentence, isCorrect, quantityPhrase, quantityStatus, type Product } from './repair-state';
import './repair.css';

export function RepairGuide({ kind }: { kind: RepairKind }) {
  const guide = repairGuides[kind];
  return <aside className="gw-repair gw-repair-guide" aria-label="Ruta docente">
    <details>
      <summary>Ruta docente · unos 45 minutos · selección sugerida</summary>
      <p><strong>Meta:</strong> {guide.outcome}</p>
      <p>Clase guiada, en pareja o con el docente. El tiempo es una estimación; no hace falta recorrer todo el banco. Se parte de nombres cotidianos y presente básico. Las consignas usan voseo.</p>
      <ol>{guide.route.map(step => <li key={step}>{step}</li>)}</ol>
      <p>{guide.optional}</p><p><strong>Criterio de cierre:</strong> {guide.criterion}</p>
      <p>Ayudas a demanda: primero deja intentar; después abre un modelo. Los botones de observación registran el juicio del docente, no una evaluación automática de la voz.</p>
    </details>
  </aside>;
}

export function QuantityTask() {
  const [phase, setPhase] = useState(0);
  const [counts, setCounts] = useState<Record<Product, number>>({ bottles: 0, apples: 0 });
  const [checked, setChecked] = useState(false);
  const [model, setModel] = useState(false);
  const [observed, setObserved] = useState(false);
  const target = orders[phase];
  const products: Product[] = ['bottles', 'apples'];
  const exact = products.every(product => counts[product] === target[product]);
  const change = (product: Product, delta: number) => {
    setCounts(current => ({ ...current, [product]: adjustCount(current[product], delta) }));
    setChecked(false); setObserved(false);
  };
  const reset = () => { setPhase(0); setCounts({ bottles: 0, apples: 0 }); setChecked(false); setModel(false); setObserved(false); };
  return <section id="gw-repair-task" className="gw-repair gw-repair-task" aria-labelledby="market-task-title">
    <header><span>{phase ? '02 · RECUPERA SIN LEER' : '01 · OBSERVA Y ARMA'}</span>
      <h2 id="market-task-title">Un pedido, una canasta.</h2>
      <p>{phase ? 'Cambió el pedido. Ármalo y dilo en voz alta antes de abrir el modelo.' : 'Mira el pedido. ¿Qué falta? Agrega o quita productos; después pide la compra en voz alta.'}</p>
    </header>
    <p className="gw-repair-order"><strong>Pedido:</strong> {target.bottles} botellas de agua + {target.apples} manzanas.</p>
    <div className="gw-repair-basket">
      {products.map(product => <div className="gw-repair-product" key={product}>
        <h3>{product === 'bottles' ? 'Botellas de agua' : 'Manzanas'}</h3>
        <div className="gw-repair-units" aria-hidden="true">{Array.from({ length: counts[product] }, (_, i) => <span key={i} data-unit={product} className={`gw-repair-unit ${product}`} />)}</div>
        <p aria-live="polite"><strong>{counts[product]}</strong> en la canasta · pedidas: {target[product]}</p>
        <div className="gw-repair-controls">
          <button type="button" data-action={`remove-${product}`} aria-label={`Quitar una ${product === 'bottles' ? 'botella' : 'manzana'}`} disabled={counts[product] === 0} onClick={() => change(product, -1)}>− Quitar</button>
          <button type="button" data-action={`add-${product}`} aria-label={`Agregar una ${product === 'bottles' ? 'botella' : 'manzana'}`} disabled={counts[product] === 8} onClick={() => change(product, 1)}>+ Agregar</button>
        </div>
      </div>)}
    </div>
    <div className="gw-repair-controls">
      <button type="button" data-action="check-order" onClick={() => setChecked(true)}>Comprobar cantidades</button>
      <button type="button" data-action="show-order-model" aria-expanded={model} onClick={() => setModel(value => !value)}>{model ? 'Ocultar modelo' : 'Ayuda: modelo del pedido'}</button>
    </div>
    {model && <p className="gw-repair-model" data-model="order">Quiero {quantityPhrase('bottles', target.bottles)} de agua y {quantityPhrase('apples', target.apples)}.</p>}
    <div role="status" className="gw-repair-status">{checked && (exact ? <p><strong>Pedido completo.</strong> Ahora dilo sin leer. La cantidad coincide; la voz la observa tu docente.</p> : <ul>{products.map(product => {
      const result = quantityStatus(counts[product], target[product]);
      return <li key={product}>{result.kind === 'exact' ? `${product === 'bottles' ? 'Botellas' : 'Manzanas'}: cantidad exacta.` : `${result.kind === 'short' ? (result.difference === 1 ? 'Falta' : 'Faltan') : (result.difference === 1 ? 'Sobra' : 'Sobran')} ${quantityPhrase(product, result.difference)}. Ajustá la canasta.`}</li>;
    })}</ul>)}</div>
    {checked && exact && <div className="gw-repair-controls">
      {phase === 0 ? <button type="button" data-action="retrieve-order" onClick={() => { setPhase(1); setCounts({ bottles: 0, apples: 0 }); setChecked(false); setModel(false); setObserved(false); }}>Segundo pedido · sin modelo</button> : <button type="button" data-action="confirm-order" aria-pressed={observed} onClick={() => setObserved(true)}>Docente: escuché las dos cantidades</button>}
    </div>}
    {observed && <p role="status">Pedido oral observado. Pasa al intercambio final y resuelve una falta real de productos.</p>}
    <button type="button" className="gw-repair-reset" data-action="reset-order" onClick={reset}>Reiniciar canasta, pedido y observación</button>
  </section>;
}

export function CoordinateTask() {
  const [selected, setSelected] = useState(0);
  const [retrieval, setRetrieval] = useState(false);
  const [model, setModel] = useState(false);
  const [observed, setObserved] = useState(false);
  const position = positions[selected];
  const choose = (index: number) => { setSelected(index); setObserved(false); setModel(false); };
  return <section id="gw-repair-task" className="gw-repair gw-repair-task" aria-labelledby="tower-task-title">
    <header><span>{retrieval ? '02 · RECUPERA Y SITÚA EN EL TIEMPO' : '01 · MUEVE Y DESCRIBE'}</span><h2 id="tower-task-title">¿Dónde están las llaves?</h2>
      <p>{retrieval ? 'Describe la nueva posición sin leer el modelo. Después cuenta dos acciones de tu día en orden: ¿qué haces primero y qué haces después?' : 'Elige una posición. Mira qué cambia y describe dónde están las llaves antes de pedir ayuda.'}</p></header>
    <div className="gw-repair-scene">
      <svg viewBox="0 0 600 240" role="img" aria-label={`Escena: las llaves están ${position.phrase}. Una mesa a la izquierda y una caja a la derecha.`}>
        <path d="M20 219H580" stroke="#bcc5c2" strokeWidth="2" />
        <rect x="55" y="111" width="18" height="108" fill="#845935" /><rect x="305" y="111" width="18" height="108" fill="#845935" />
        <rect x="40" y="95" width="300" height="16" rx="3" fill="#b17b43" />
        <rect x="405" y="60" width="135" height="95" rx="4" fill="#efd9a8" stroke="#845935" strokeWidth="4" />
        <path d="M405 82H540" stroke="#845935" strokeWidth="3" />
        <text x="190" y="237" textAnchor="middle">mesa</text><text x="473" y="184" textAnchor="middle">caja abierta</text>
        <g data-keys={position.id} transform={`translate(${position.x} ${position.y})`} fill="none" stroke="#ad3029" strokeWidth="5" strokeLinecap="round" aria-hidden="true">
          <circle cx="-13" cy="-9" r="9" /><path d="M-4 -9H26M16 -9V-1M25 -9V-3M-4 -3H19M10 -3V3M18 -3V1" />
        </g>
      </svg>
    </div>
    <p className="gw-repair-scene-legend">Mesa a la izquierda · caja abierta a la derecha.</p>
    <p className="gw-repair-access-note">La descripción accesible de la imagen informa la posición. Si usas esa ayuda, reconstruye la frase oralmente después de escucharla.</p>
    <div className="gw-repair-controls" role="group" aria-label="Mover las llaves">
      {positions.map((item, index) => <button type="button" key={item.id} data-action={`position-${item.id}`} aria-pressed={selected === index} onClick={() => choose(index)}>Posición {index + 1}</button>)}
    </div>
    <div className="gw-repair-controls">
      <button type="button" data-action="show-position-model" aria-expanded={model} onClick={() => setModel(value => !value)}>{model ? 'Ocultar modelo' : 'Ayuda: describir la posición'}</button>
      {!retrieval && <button type="button" data-action="retrieve-position" onClick={() => { setRetrieval(true); setSelected(index => (index + 1) % positions.length); setModel(false); setObserved(false); }}>Otra posición · sin modelo</button>}
    </div>
    {model && <div className="gw-repair-model" data-model="position"><p>Las llaves están {position.phrase}.</p><p>También: {position.alternatives.join(' / ')}.</p>{retrieval && <p>Primero desayuno; después salgo. Hoy necesito las llaves.</p>}</div>}
    {retrieval && <button type="button" data-action="confirm-position" aria-pressed={observed} onClick={() => setObserved(true)}>Docente: la descripción coincide y la secuencia se entiende</button>}
    <p role="status">{observed ? 'Descripción observada. Una persona puede encontrar las llaves y seguir el orden de las dos acciones.' : 'Di una frase propia. La aplicación mueve las llaves; tu docente escucha la descripción.'}</p>
    <button type="button" className="gw-repair-reset" data-action="reset-position" onClick={() => { setSelected(0); setRetrieval(false); setModel(false); setObserved(false); }}>Reiniciar posición, ayuda y observación</button>
  </section>;
}

type Attempt = { selection?: number; checked?: boolean; revealed?: boolean };
export function RepairPractice({ items, kind }: { items: Practice[]; kind: RepairKind }) {
  const [attempts, setAttempts] = useState<Record<string, Attempt>>({});
  const checked = items.filter(item => attempts[item.id!]?.checked).length;
  const correct = items.filter(item => attempts[item.id!]?.checked && isCorrect(item, attempts[item.id!]?.selection)).length;
  const update = (id: string, value: Attempt) => setAttempts(current => ({ ...current, [id]: value }));
  return <section className="gw-repair gw-repair-practice" aria-label="Práctica con contexto y reintento">
    <header><span>PRÁCTICA EN CONTEXTO</span><h2>Elige. Prueba. Ajusta.</h2><p>Comprueba cada frase cuando quieras. Si necesitas ayuda, intenta otra vez antes de abrir la solución. {kind === 'quantity' ? 'Núcleo A1: 1, 2, 3 y 5.' : 'Núcleo A1: 1–4.'} El resto es extensión opcional.</p></header>
    <div className="gw-repair-questions">{items.map((item, index) => {
      const id = item.id!;
      const attempt = attempts[id] ?? {};
      const right = isCorrect(item, attempt.selection);
      return <article key={id} className={attempt.checked ? right ? 'is-correct' : 'needs-retry' : ''}>
        <span>{String(index + 1).padStart(2, '0')} · {item.extension ? 'EXTENSIÓN A2 · OPCIONAL' : 'NÚCLEO A1'}</span>
        <p id={`${id}-context`} className="gw-repair-context">{item.context}</p><h3 id={`${id}-prompt`}>{item.prompt}</h3>
        <div className="gw-repair-controls" role="group" aria-labelledby={`${id}-prompt`} aria-describedby={`${id}-context`}>
          {item.options.map((option, optionIndex) => <button type="button" key={option} data-action={`select-${id}-${optionIndex}`} aria-pressed={attempt.selection === optionIndex} onClick={() => update(id, { selection: optionIndex })}>{option}</button>)}
        </div>
        {attempt.selection !== undefined && <p className="gw-repair-composition"><strong>Tu frase:</strong> {completeSentence(item, attempt.selection)}</p>}
        <button type="button" data-action={`check-${id}`} disabled={attempt.selection === undefined} onClick={() => update(id, { ...attempt, checked: true })}>Comprobar frase {index + 1}</button>
        <div role="status">{attempt.checked && <p><strong>{right ? 'La frase funciona. ' : 'Prueba otra vez. '}</strong>{right ? item.why : item.hint}</p>}</div>
        {attempt.checked && !right && <button type="button" data-action={`reveal-${id}`} aria-expanded={!!attempt.revealed} onClick={() => update(id, { ...attempt, revealed: !attempt.revealed })}>{attempt.revealed ? 'Ocultar solución' : 'Mostrar solución y motivo'}</button>}
        {attempt.revealed && <p className="gw-repair-model"><strong>Solución: {completeSentence(item, item.answer)}</strong><br />{item.why}</p>}
      </article>;
    })}</div>
    <p role="status" className="gw-repair-score">{correct} correctas de {checked} comprobadas · banco de {items.length} frases. Puedes volver a intentar; esto no evalúa tu producción oral.</p>
    <button type="button" className="gw-repair-reset" data-action="reset-practice" onClick={() => setAttempts({})}>Reiniciar respuestas, comprobaciones y soluciones</button>
  </section>;
}

export function RepairClose({ kind }: { kind: RepairKind }) {
  const [help, setHelp] = useState(false);
  const [observed, setObserved] = useState(false);
  const close = closings[kind];
  return <section className="gw-repair gw-repair-close" aria-label="Cierre oral del recorrido">
    <header><span>CIERRE ORAL · 5–10 MINUTOS</span><h2>{close.title}</h2></header>
    <p>{close.instruction}</p><p>{close.cue}</p>
    <button type="button" data-action="close-help" aria-expanded={help} onClick={() => setHelp(value => !value)}>{help ? 'Ocultar ejemplo' : 'Ayuda: un ejemplo de intercambio'}</button>
    {help && <p className="gw-repair-model" data-model="closing">{close.model}</p>}
    <details><summary>Para el docente · cuándo cerrar</summary><p>{close.criterion}</p><p>Si se necesitó el ejemplo, ocúltalo y repite con otras cantidades o con otra posición. No se puntúa automáticamente la voz.</p></details>
    <button type="button" data-action="close-confirm" aria-pressed={observed} onClick={() => setObserved(true)}>Docente: observé el intercambio y el objetivo</button>
    <p role="status">{observed ? 'Intercambio observado por el docente. Nombra una cosa que ahora puedes pedir o ubicar con más claridad.' : 'Habla para que la otra persona pueda actuar; no hace falta copiar el ejemplo.'}</p>
    <button type="button" className="gw-repair-reset" data-action="close-reset" onClick={() => { setHelp(false); setObserved(false); }}>Reiniciar ayuda y observación oral</button>
  </section>;
}
