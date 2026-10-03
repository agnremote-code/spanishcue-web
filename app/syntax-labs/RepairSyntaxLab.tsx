'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { SpanishCueBrand } from '../SpanishCueBrand';
import type { SyntaxDecision, SyntaxLabData, SyntaxRepair } from './data';
import { accepts, sentence, hints, timelineEvents, matchingCandidates, candidates, contrastTask, oralGuidance } from './repair-content';
import './repair.css';

type ChoiceProps = { item: SyntaxDecision | SyntaxRepair; index: number; kind: 'decisions' | 'repairs'; slug: string };
export function CheckedChoice({ item, index, kind, slug }: ChoiceProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [help, setHelp] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const clear = () => { setChecked(false); setHelp(false); setRevealed(false); };
  const reset = () => { setSelected(null); clear(); };
  const correct = accepts(item, selected);
  return <article className="sx-work-item">
    <small>{kind === 'decisions' ? 'DECISIÓN' : 'REFORMULACIÓN'} {index + 1}</small><h3>{item.prompt}</h3>
    {'original' in item && <blockquote>{item.original}</blockquote>}
    {'left' in item && <p className="sx-composed" aria-label="Frase en construcción">{selected === null ? `${item.left} […] ${item.right}` : sentence(item, selected)}</p>}
    <div className="sx-choice-options" role="group" aria-label={`Opciones: ${item.prompt}`}>
      {item.options.map((option, i) => <button key={option} type="button" data-action={`select-${i}`} aria-pressed={selected === i} onClick={() => { setSelected(i); clear(); }}>{option}</button>)}
    </div>
    <div className="sx-actions"><button type="button" data-action="check" disabled={selected === null} onClick={() => { setChecked(true); setRevealed(false); }}>COMPROBAR</button><button type="button" data-action="hint" onClick={() => setHelp(true)}>PISTA</button><button type="button" data-action="retry" onClick={reset}>REINTENTAR</button><button type="button" data-action="reveal" onClick={() => { setRevealed(true); setChecked(false); }}>VER SOLUCIÓN</button><button type="button" data-action="reset" onClick={reset}>REINICIAR ÍTEM</button></div>
    {checked && <p role="status">{correct ? <><b>RELACIÓN VÁLIDA. </b>{item.feedback}</> : <><b>VUELVE A MIRAR. </b>Revisa la forma y los hechos de la consigna. Una frase posible puede expresar otra intención.</>}</p>}
    {help && <p className="sx-hint">PISTA: {item.hint ?? hints[slug][kind][index]}</p>}
    {revealed && <div role="status"><b>Solución:</b>{(item.accepted ?? [item.correct]).map(i => <p key={i}>{sentence(item, i)}</p>)}<p>{item.feedback}</p></div>}
  </article>;
}

export function TimelineStation() {
  const [order, setOrder] = useState([1, 0, 2, 3]);
  const [checked, setChecked] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [help, setHelp] = useState(false);
  const move = (index: number, delta: number) => { const next = [...order]; [next[index], next[index + delta]] = [next[index + delta], next[index]]; setOrder(next); setChecked(false); setReverse(false); };
  const correct = order.every((value, index) => value === index);
  const reset = () => { setOrder([1, 0, 2, 3]); setChecked(false); setReverse(false); setHelp(false); };
  return <section className="sx-manipulation sx-event-station"><h2>Una mañana, dos maneras de contarla</h2><p>Esta persona se levanta a las 7:00, se viste a las 7:10, desayuna a las 7:30 y sale a las 8:00. Mueve las acciones al orden real. Después cambia el punto de partida de la frase sin cambiar los hechos.</p>
    <ol className="sx-event-track">{order.map((value, index) => <li key={value}><span>{index + 1}</span><strong>{timelineEvents[value].text}</strong><div><button type="button" data-action={`up-${index}`} aria-label={`Adelantar ${timelineEvents[value].text}`} disabled={index === 0} onClick={() => move(index, -1)}>↑ ANTES</button><button type="button" data-action={`down-${index}`} aria-label={`Retrasar ${timelineEvents[value].text}`} disabled={index === order.length - 1} onClick={() => move(index, 1)}>DESPUÉS ↓</button></div></li>)}</ol>
    <div className="sx-actions"><button type="button" data-action="check" onClick={() => setChecked(true)}>COMPROBAR ORDEN</button><button type="button" data-action="hint" onClick={() => setHelp(true)}>PISTA</button><button type="button" data-action="reset" onClick={reset}>REINICIAR LÍNEA</button></div>
    {help && <p>Busca primero la acción de las 7:00.</p>}
    {checked && <p role="status">{correct ? 'Orden coherente: primero te levantas; al final sales de casa.' : 'Revisa las horas: el orden de las palabras debe conservar el de las acciones.'}</p>}
    {checked && correct && <div><p className="sx-composed">{reverse ? 'Después de desayunar, salgo de casa.' : 'Desayuno antes de salir de casa.'}</p><button type="button" data-action="reverse" onClick={() => setReverse(value => !value)}>CAMBIAR EL PUNTO DE PARTIDA</button><p>Las dos formulaciones conservan desayuno → salida. Di ahora la relación entre levantarte y vestirte.</p></div>}
  </section>;
}

export function ContrastStation() {
  const [front, setFront] = useState(false);
  const [third, setThird] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [help, setHelp] = useState(false);
  const [reveal, setReveal] = useState(false);
  const reset = () => { setFront(false); setThird(false); setSelected(null); setChecked(false); setHelp(false); setReveal(false); };
  return <section className="sx-manipulation sx-contrast-station"><h2>Dos causas descartadas; un dato que cambia el plan</h2><p>Una amiga cree que el precio o la distancia te impiden aceptar. Los dos te parecen bien: niega esas dos suposiciones.</p>
    <div className="sx-actions"><button type="button" data-action="front" aria-pressed={front} onClick={() => setFront(true)}>GRUPO ANTES DEL VERBO</button><button type="button" data-action="back" aria-pressed={!front} onClick={() => setFront(false)}>GRUPO DESPUÉS DEL VERBO</button></div>
    <p className="sx-composed">{front ? <><b>Ni</b> el precio <b>ni</b> la distancia son el problema.</> : <>El problema <b>no</b> es <b>ni</b> el precio <b>ni</b> la distancia.</>}</p><p>{front ? 'El grupo negativo está antes del verbo: no añadimos no.' : 'El grupo negativo está después del verbo: usamos no delante de es.'} El significado negativo se mantiene.</p>
    <button type="button" data-action="third" onClick={() => { setThird(true); setSelected(null); setChecked(false); setHelp(false); setReveal(false); }}>RECIBIR EL TERCER DATO</button>
    {third && <div className="sx-new-evidence"><h3>El horario es imposible</h3><p>{contrastTask.prompt}</p><div className="sx-choice-options">{contrastTask.options.map((option, i) => <button type="button" key={option} data-action={`choose-${i}`} aria-pressed={selected === i} onClick={() => { setSelected(i); setChecked(false); setReveal(false); setHelp(false); }}>{option}</button>)}</div><div className="sx-actions"><button type="button" data-action="check" disabled={selected === null} onClick={() => setChecked(true)}>COMPROBAR</button><button type="button" data-action="hint" onClick={() => setHelp(true)}>PISTA</button><button type="button" data-action="retry" onClick={() => { setSelected(null); setChecked(false); setReveal(false); setHelp(false); }}>REINTENTAR</button><button type="button" data-action="reveal" onClick={() => setReveal(true)}>VER SOLUCIÓN</button></div>{checked && <p role="status">{accepts(contrastTask, selected) ? `RELACIÓN VÁLIDA. ${contrastTask.feedback}` : 'VUELVE A MIRAR: el horario sí plantea una dificultad.'}</p>}{help && <p>{contrastTask.hint}</p>}{reveal && <p role="status">Solución: {contrastTask.options[1]}</p>}<p>Ahora responde a tu amiga en dos turnos: corrige sus dos suposiciones y explica la dificultad real.</p></div>}
    <button type="button" data-action="reset" onClick={reset}>REINICIAR CONTRASTE</button>
  </section>;
}

export function ReferentStation() {
  const [clues, setClues] = useState([false, false]);
  const [checked, setChecked] = useState(false);
  const [help, setHelp] = useState(false);
  const [known, setKnown] = useState(false);
  const matches = matchingCandidates(clues);
  const reset = () => { setClues([false, false]); setChecked(false); setHelp(false); setKnown(false); };
  return <section className="sx-manipulation sx-reference-station"><h2>Encuentra a quien puede recibirte esta noche</h2><p>Necesitas a la persona de recepción del turno de noche. Cada dato por separado deja dos posibilidades: activa las pistas necesarias y comprueba la referencia.</p>
    <div className="sx-candidate-directory">{candidates.map(person => <article key={person.name} data-matches={matches.includes(person)}><h3>{person.name}</h3><p>{person.place} · {person.shift}</p><span>{matches.includes(person) ? 'Coincide' : 'Descartada por la pista'}</span></article>)}</div>
    <div className="sx-actions">{['trabaja en recepción', 'atiende de noche'].map((clue, i) => <button type="button" key={clue} data-action={`clue-${i}`} aria-pressed={clues[i]} onClick={() => { setClues(clues.map((value, j) => j === i ? !value : value)); setChecked(false); setHelp(false); setKnown(false); }}>que {clue}</button>)}</div>
    <p role="status">{matches.length} {matches.length === 1 ? 'candidato' : 'candidatos'}: {matches.map(person => person.name).join(', ')}.</p>
    <p className="sx-composed">Busco a la persona{clues[0] ? ' que trabaja en recepción' : ''}{clues[1] ? `${clues[0] ? ' y' : ' que'} atiende de noche` : ''}.</p>
    <div className="sx-actions"><button type="button" data-action="check" onClick={() => setChecked(true)}>COMPROBAR REFERENCIA</button><button type="button" data-action="hint" onClick={() => setHelp(true)}>PISTA</button><button type="button" data-action="reset" onClick={reset}>REINICIAR BÚSQUEDA</button></div>
    {help && <p>Compara Ana con Eva y Ana con Luz: ¿qué rasgo distingue cada pareja?</p>}
    {checked && <p role="status">{matches.length === 1 ? 'REFERENTE IDENTIFICADO: Ana. Las dos pistas juntas seleccionan a una sola persona.' : 'Todavía hay varias personas posibles. Añade el dato que falta.'}</p>}
    {checked && matches.length === 1 && <div><button type="button" data-action="known" onClick={() => setKnown(value => !value)}>AHORA YA SABEMOS QUIÉN ES</button>{known && <><p className="sx-composed">Ana, que trabaja en recepción, puede ayudarte. / Ana, quien trabaja en recepción, puede ayudarte.</p><p>Ahora el nombre identifica a Ana. El dato entre comas es adicional; que y quien son válidos. Al identificar entre varias personas sin comas, usamos que en estas estructuras.</p></>}</div>}
  </section>;
}

export function RecallStage({ data }: { data: SyntaxLabData }) {
  const [index, setIndex] = useState(0);
  const [help, setHelp] = useState(false);
  const [assisted, setAssisted] = useState(false);
  const [observed, setObserved] = useState(false);
  const resetAttempt = () => { setHelp(false); setAssisted(false); setObserved(false); };
  const item = data.retrieval[index];
  return <section className="sx-manipulation"><h2>Recupera sin mirar el banco</h2><p>Intento oral {index + 1} de {data.retrieval.length}. El docente escucha; la aplicación no evalúa la respuesta.</p><h3>{item.prompt}</h3>
    <div className="sx-actions"><button type="button" data-action="help" onClick={() => { setHelp(value => !value); setAssisted(true); setObserved(false); }}>{help ? 'OCULTAR APOYO' : 'PEDIR APOYO'}</button><button type="button" data-action="observe" onClick={() => setObserved(true)}>DOCENTE: REGISTRAR INTENTO</button><button type="button" data-action="retry" onClick={resetAttempt}>REPETIR SIN APOYO</button><button type="button" data-action="next" onClick={() => { setIndex((index + 1) % data.retrieval.length); resetAttempt(); }}>OTRA SITUACIÓN</button><button type="button" data-action="reset" onClick={() => { setIndex(0); resetAttempt(); }}>REINICIAR RECUPERACIÓN</button></div>
    {help && <div className="sx-hint"><p>{item.challenge}</p><p>{oralGuidance[data.slug].help}</p></div>}{observed && <p role="status">Intento observado {assisted ? 'con apoyo' : 'sin apoyo'}; el docente decide qué reformular. Se aceptan respuestas naturales diferentes del modelo.</p>}
  </section>;
}

export function OralStage({ data }: { data: SyntaxLabData }) {
  const [marks, setMarks] = useState([false, false, false]);
  const [changed, setChanged] = useState(false);
  const [help, setHelp] = useState(false);
  const guide = oralGuidance[data.slug];
  const reset = () => { setMarks([false, false, false]); setChanged(false); setHelp(false); };
  return <section className="sx-manipulation sx-oral-stage"><small>CIERRE · 10 MINUTOS</small><h2>{data.finalTask.split(':')[0]}</h2><p>{data.finalTask}</p><p>En el recorrido de hoy, elige un contexto. Habla, escucha la repregunta y responde. Las demás situaciones quedan para otra clase.</p><button type="button" data-action="change" onClick={() => { setChanged(true); setMarks([false, false, false]); setHelp(false); }}>DOCENTE: CAMBIAR UN DATO</button>{changed && <p className="sx-new-evidence">{guide.change}</p>}
    <fieldset><legend>Observación del docente · sin puntuación automática</legend>{guide.criteria.map((criterion, i) => <button type="button" key={criterion} data-action={`criterion-${i}`} aria-pressed={marks[i]} disabled={i === 2 && !changed} onClick={() => setMarks(marks.map((value, j) => j === i ? !value : value))}>{marks[i] ? '✓ ' : '○ '}{criterion}</button>)}</fieldset>
    {marks.every(Boolean) && <p role="status">Intervención observada por el docente. Revisen juntos una frase y una respuesta al cambio.</p>}
    <p>{guide.recap}</p><div className="sx-actions"><button type="button" data-action="help" onClick={() => { setHelp(value => !value); setMarks([false, false, false]); }}>APOYO OPCIONAL</button><button type="button" data-action="reset" onClick={reset}>REINTENTAR CIERRE</button></div>{help && <p>APOYO PARA EMPEZAR: {guide.help}</p>}
  </section>;
}

export function RepairSession({ data }: { data: SyntaxLabData }) {
  const [mode, setMode] = useState<'guided' | 'recall' | 'oral'>('guided');
  const [pattern, setPattern] = useState(0);
  const [bank, setBank] = useState(false);
  return <div className="sx-repair-session">
    <nav className="sx-stage-nav" aria-label="Etapas de la clase"><button type="button" data-action="guided" aria-pressed={mode === 'guided'} onClick={() => setMode('guided')}>NOTAR Y MANIPULAR</button><button type="button" data-action="recall" aria-pressed={mode === 'recall'} onClick={() => setMode('recall')}>RECUPERAR SIN APOYO</button><button type="button" data-action="oral" aria-pressed={mode === 'oral'} onClick={() => setMode('oral')}>USAR ORALMENTE</button></nav>
    <div hidden={mode !== 'guided'}>
    <section className="sx-repair-heading"><small>{data.pcic}</small><h1>{data.title}</h1><p>{data.subtitle}</p><p><b>Objetivo:</b> {data.goal}</p><details><summary>RECORRIDO DOCENTE · 45 minutos estimados</summary><p>Clase guiada, individual o en pareja. 5 min: pares 1–2; 7 min: tres modelos; 8 min: manipulación; 7 min: decisiones 1–4 y reformulaciones 1 y 4; 8 min: recuperación 1–2; 10 min: cierre oral y respuesta al cambio. Detenete después del cierre. El banco restante es opcional, no una tarea para completar hoy.</p><p>Prerrequisitos: {data.level === 'A2' ? 'presente y formas de infinitivo conocidas' : 'estructuras básicas y tiempos de indicativo conocidos'}. Consignas con voseo. Los ejemplos admiten otras variedades naturales del español. El docente evalúa la producción; no hay reconocimiento de voz. Progreso de esta sesión: al recargar o reiniciar se borra.</p></details><p className="sx-boundary"><b>LÍMITE {data.level}</b> {data.boundaries}</p></section>
      <section className="sx-manipulation"><h2>Primero, escucha e interpreta</h2><p>{data.activation.instruction}</p><p>El docente lee los pares 1 y 2 sin decir la etiqueta; el alumno explica la relación. Después comparan con el mapa.</p><details><summary>PARES PARA EL DOCENTE · 5 MIN</summary>{data.activation.cards.map(card => <p key={card.first}>{card.first} / {card.second} <b>({card.intention})</b></p>)}</details></section>
      <section className="sx-manipulation"><h2>Un modelo, una relación · 7 min</h2><div className="sx-actions">{data.patterns.map((item, i) => <button type="button" key={item.key} aria-pressed={pattern === i} onClick={() => setPattern(i)}>{item.label}</button>)}</div><h3>{data.patterns[pattern].formula}</h3><p className="sx-composed">{data.patterns[pattern].example}</p><p>{data.patterns[pattern].explanation}</p></section>
      {data.mode === 'timeline' ? <TimelineStation /> : data.mode === 'contrast' ? <ContrastStation /> : <ReferentStation />}
      <section className="sx-bank"><h2>Elige según el contexto · 7 min</h2><p>Recorrido central: decisiones 1, 2, 3 y 4; reformulaciones 1 y 4. Discute por qué una alternativa puede ser posible pero no conservar el mensaje.</p><div className="sx-actions"><button type="button" data-action="toggle-bank" aria-pressed={bank} onClick={() => setBank(value => !value)}>{bank ? 'VOLVER AL RECORRIDO CENTRAL' : 'ABRIR BANCO OPCIONAL COMPLETO'}</button></div>
      {data.decisions.map((item, index) => <div key={`d-${index}`} hidden={!bank && index >= 4}><CheckedChoice item={item} index={index} kind="decisions" slug={data.slug} /></div>)}
      {data.repairs.map((item, index) => <div key={`r-${index}`} hidden={!bank && index !== 0 && index !== 3}><CheckedChoice item={item} index={index} kind="repairs" slug={data.slug} /></div>)}</section>
      <section className="sx-manipulation"><h2>Ahora quita los modelos</h2><p>Pasa a recuperación para dos intentos orales, con apoyo solo si hace falta. Esta vista oculta el mapa, las respuestas y las pistas del banco.</p><button type="button" onClick={() => setMode('recall')}>RECUPERAR SIN APOYO</button></section>
      <details className="sx-manipulation"><summary>EXTENSIONES OPCIONALES · OTRA CLASE</summary>{data.production.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.prompt}</p><ul>{item.checklist.map(point => <li key={point}>{point}</li>)}</ul></article>)}{data.conversation.map(item => <article key={item.question}><h3>{item.question}</h3><details><summary>APOYO OPCIONAL</summary><p>{item.starter}</p><p>{item.followUp}</p></details></article>)}</details>
    </div>
    <div hidden={mode !== 'recall'}><RecallStage data={data} /></div>
    <div hidden={mode !== 'oral'}><OralStage data={data} /></div>
  </div>;
}

export default function RepairSyntaxLab({ data }: { data: SyntaxLabData }) {
  const [session, setSession] = useState(0);
  return <main className={`sx-app sx-repaired sx-${data.mode}`} style={{ '--sx-accent': data.accent, '--sx-accent-2': data.accent2 } as CSSProperties}>
    <header className="sx-topbar"><Link href="/" aria-label="SPANISHCUE, inicio"><SpanishCueBrand variant="compact" tone="dark" /></Link><div><small>{data.module}</small><b>{data.level} · ≈ 45 MIN</b></div><button type="button" data-action="reset-lesson" onClick={() => setSession(value => value + 1)}>REINICIAR LECCIÓN</button></header>

    <RepairSession key={session} data={data} />
    <footer className="sx-footer"><Link href="/">← VOLVER A GRAMÁTICA</Link><span>SPANISHCUE · {data.level}</span></footer>
  </main>;
}
