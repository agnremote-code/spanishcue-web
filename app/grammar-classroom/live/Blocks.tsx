'use client';
import { useState, type ReactNode } from 'react';
import type { Block, ChoiceItem, Discuss } from './types';
import { English, Rich, useLive } from './Rich';
import { LiveVisual } from './visuals';

function Card({ kind, title, children, actions }: { kind: string; title?: string; children: ReactNode; actions?: ReactNode }) {
  return <section className={`gl-card gl-${kind}`} data-block={kind}>
    {(title || actions) && <header className="gl-card-head">{title && <h3><Rich text={title} /></h3>}{actions}</header>}
    {children}
  </section>;
}

function RevealAll({ open, onToggle, label = 'respuestas' }: { open: boolean; onToggle: () => void; label?: string }) {
  return <button type="button" className="gl-chip-button" data-reveal-all aria-pressed={open} onClick={onToggle}>{open ? `Ocultar ${label}` : `Mostrar ${label}`}</button>;
}

/** Questions for the teacher to ask; each model answer opens on demand. */
function Questions({ items, title = 'Para comentar' }: { items: Discuss[]; title?: string }) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const all = items.every((_, i) => open[i]);
  return <div className="gl-questions">
    <div className="gl-subhead"><h4>{title}</h4>{items.some(item => item.answer) && <RevealAll open={all} onToggle={() => setOpen(Object.fromEntries(items.map((_, i) => [i, !all])))} />}</div>
    <ol>{items.map((item, i) => <li key={item.q}>
      <p><Rich text={item.q} /></p><English text={item.en} />
      {item.answer && <>
        <button type="button" className="gl-link" data-answer-toggle aria-expanded={!!open[i]} onClick={() => setOpen(prev => ({ ...prev, [i]: !prev[i] }))}>{open[i] ? 'Ocultar respuesta' : 'Ver respuesta'}</button>
        {open[i] && <p className="gl-answer"><Rich text={item.answer} /></p>}
      </>}
    </li>)}</ol>
  </div>;
}

function MarksToggle({ on, set }: { on: boolean; set: (v: boolean) => void }) {
  return <button type="button" className="gl-chip-button" data-marks aria-pressed={on} onClick={() => set(!on)}>{on ? 'Quitar colores' : 'Marcar expresiones de tiempo'}</button>;
}

export function Legend() {
  const { legend } = useLive();
  return <p className="gl-legend" aria-label="Colores">{legend.map(item => <span key={item.tone} className={`gl-tone-${item.tone}`}>{item.label}</span>)}</p>;
}

function Choice({ title, hint, items }: { title: string; hint?: string; items: ChoiceItem[] }) {
  const [picked, setPicked] = useState<Record<number, number>>({});
  const [shown, setShown] = useState(false);
  return <Card kind="choice" title={title} actions={<RevealAll open={shown} onToggle={() => setShown(v => !v)} />}>
    <ol className="gl-exercise-list">{items.map((item, i) => {
      const choice = shown ? item.answer : picked[i];
      const right = choice === item.answer;
      const parts = item.prompt.split('___');
      return <li key={item.prompt} className="gl-choice-item" data-state={choice === undefined ? 'open' : right ? 'right' : 'wrong'}>
        <p className="gl-prompt">{parts[0]}{parts.length > 1 && <span className="gl-blank">{choice === undefined ? '_____' : item.options[choice]}</span>}{parts.slice(1).join('___')}</p>
        <div className="gl-options" role="group" aria-label={`Opciones ${i + 1}`}>
          {item.options.map((option, o) => <button type="button" key={option} data-option={o} aria-pressed={choice === o} className={choice === o ? (right ? 'is-right' : 'is-wrong') : ''} onClick={() => { setShown(false); setPicked(prev => ({ ...prev, [i]: o })); }}>{option}</button>)}
        </div>
        {choice !== undefined && <p className="gl-feedback" aria-live="polite"><b>{right ? '✓ Correcto.' : '✗ Revisa.'}</b> {right ? item.explanation : hint || 'Vuelve a la explicación y prueba otra opción.'}</p>}
      </li>;
    })}</ol>
  </Card>;
}

function Classify({ block }: { block: Extract<Block, { kind: 'classify' }> }) {
  const [picked, setPicked] = useState<Record<number, string>>({});
  const [shown, setShown] = useState(false);
  return <Card kind="classify" title={block.title} actions={<RevealAll open={shown} onToggle={() => setShown(v => !v)} />}>
    <ol className="gl-exercise-list">{block.items.map((item, i) => {
      const choice = shown ? item.answer : picked[i];
      const right = choice === item.answer;
      return <li key={item.text} className="gl-classify-item" data-state={choice === undefined ? 'open' : right ? 'right' : 'wrong'}>
        <p className="gl-prompt">{item.text}</p>
        <div className="gl-options" role="group" aria-label={item.text}>{block.categories.map(category => <button type="button" key={category.id} data-category={category.id} aria-pressed={choice === category.id} className={`gl-tone-${category.tone} ${choice === category.id ? (right ? 'is-right' : 'is-wrong') : ''}`} onClick={() => { setShown(false); setPicked(prev => ({ ...prev, [i]: category.id })); }}>{category.label}</button>)}</div>
        {choice !== undefined && <p className="gl-feedback" aria-live="polite"><b>{right ? '✓' : '✗ Revisa.'}</b> {right ? item.explanation : block.hint || ''}</p>}
      </li>;
    })}</ol>
  </Card>;
}

function RevealList({ block }: { block: Extract<Block, { kind: 'reveal' }> }) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const all = block.items.every((_, i) => open[i]);
  return <Card kind={`reveal gl-${block.style}`} title={block.title} actions={<RevealAll open={all} onToggle={() => setOpen(Object.fromEntries(block.items.map((_, i) => [i, !all])))} />}>
    <ol className="gl-exercise-list">{block.items.map((item, i) => <li key={item.prompt} className="gl-reveal-item">
      <p className="gl-prompt">{block.style === 'fix' && <span className="gl-flag" aria-label="Frase con error">✗</span>}<span className={block.style === 'fix' ? 'gl-wrong-text' : ''}>{item.prompt}</span></p>
      <button type="button" className="gl-link" data-answer-toggle aria-expanded={!!open[i]} onClick={() => setOpen(prev => ({ ...prev, [i]: !prev[i] }))}>{open[i] ? 'Ocultar' : block.style === 'fix' ? 'Ver corrección' : 'Ver una respuesta'}</button>
      {open[i] && <div className="gl-answer"><p>✓ {item.answer}</p>{item.note && <small>{item.note}</small>}</div>}
    </li>)}</ol>
  </Card>;
}

/** Tap the events in order. A fixed starting shuffle keeps server and client in sync. */
function Order({ block }: { block: Extract<Block, { kind: 'order' }> }) {
  const shuffled = [3, 0, 5, 2, 4, 1, 7, 6].filter(i => i < block.items.length);
  const [chosen, setChosen] = useState<number[]>([]);
  const done = chosen.length === block.items.length;
  const pool = shuffled.filter(i => !chosen.includes(i));
  return <Card kind="order" title={block.title} actions={<button type="button" className="gl-chip-button" data-order-solution onClick={() => setChosen(block.items.map((_, i) => i))}>Mostrar el orden</button>}>
    <p className="gl-hint">Toca los hechos en orden. Explica cada elección en voz alta.</p>
    <div className="gl-order">
      <ol className="gl-order-chosen" aria-label="Tu orden">{chosen.map((item, position) => <li key={item} className={done ? (item === position ? 'is-right' : 'is-wrong') : ''}><span>{position + 1}</span>{block.items[item]}</li>)}
        {!chosen.length && <li className="gl-order-empty">Aquí aparece la historia ordenada.</li>}</ol>
      {!done && <div className="gl-order-pool" role="group" aria-label="Hechos para ordenar">{pool.map(item => <button type="button" key={item} data-order-item={item} onClick={() => setChosen(prev => [...prev, item])}>{block.items[item]}</button>)}</div>}
    </div>
    <div className="gl-row">
      <button type="button" className="gl-chip-button" disabled={!chosen.length} onClick={() => setChosen(prev => prev.slice(0, -1))}>Deshacer</button>
      <button type="button" className="gl-chip-button" disabled={!chosen.length} onClick={() => setChosen([])}>Empezar de nuevo</button>
      {done && <p className="gl-feedback" aria-live="polite"><b>{chosen.every((item, position) => item === position) ? '✓ Orden correcto.' : '✗ Hay elementos fuera de lugar. Revisen juntos los que están en rojo.'}</b></p>}
    </div>
    {done && <Questions items={block.after} title="Y ahora, conversen" />}
  </Card>;
}

function Roleplays({ block }: { block: Extract<Block, { kind: 'roleplay' }> }) {
  const [active, setActive] = useState(0);
  const [teacherRole, setTeacherRole] = useState(false);
  const [twist, setTwist] = useState(false);
  const [support, setSupport] = useState(true);
  const item = block.items[active];
  const pick = (i: number) => { setActive(i); setTeacherRole(false); setTwist(false); };
  return <div className="gl-roleplay">
    <div className="gl-role-tabs" role="tablist" aria-label="Situaciones">{block.items.map((role, i) => <button type="button" role="tab" key={role.title} data-role={i} aria-selected={i === active} onClick={() => pick(i)}><span aria-hidden="true">{role.icon}</span>{role.title}</button>)}</div>
    <Card kind="role" title={`${item.icon} ${item.title}`}>
      <div className="gl-role-grid">
        <article className="gl-role-student"><h4>Tu misión</h4><p>{item.student}</p></article>
        <article className="gl-role-teacher"><h4>Papel del profesor</h4>{teacherRole ? <p>{item.teacher}</p> : <button type="button" className="gl-link" data-teacher-role onClick={() => setTeacherRole(true)}>Mostrar el papel del profesor</button>}</article>
      </div>
      <div className="gl-row">
        <button type="button" className="gl-chip-button" data-support aria-pressed={support} onClick={() => setSupport(v => !v)}>{support ? 'Ocultar lenguaje útil' : 'Mostrar lenguaje útil'}</button>
        <button type="button" className="gl-chip-button gl-accent" data-twist aria-pressed={twist} onClick={() => setTwist(v => !v)}>{twist ? 'Quitar complicación' : '＋ Añadir una complicación'}</button>
      </div>
      {support && <ul className="gl-phrases" aria-label="Lenguaje útil">{item.language.map(phrase => <li key={phrase}>{phrase}</li>)}</ul>}
      {twist && <p className="gl-twist" aria-live="polite"><b>Complicación:</b> {item.twist}</p>}
    </Card>
  </div>;
}

function Conversation({ block }: { block: Extract<Block, { kind: 'conversation' }> }) {
  const [group, setGroup] = useState(0);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [talked, setTalked] = useState<Record<string, boolean>>({});
  const current = block.groups[group];
  return <div className="gl-conversation">
    <div className="gl-role-tabs" role="tablist" aria-label="Temas">{block.groups.map((g, i) => <button type="button" role="tab" key={g.title} data-topic={i} aria-selected={i === group} onClick={() => setGroup(i)}><span aria-hidden="true">{g.icon}</span>{g.title}</button>)}</div>
    <div className="gl-talk-grid">{current.questions.map(question => {
      const key = question.q;
      return <article className={`gl-talk ${talked[key] ? 'is-talked' : ''}`} key={key}>
        <p className="gl-talk-q">{question.q}</p>
        <button type="button" className="gl-link" data-follow-ups aria-expanded={!!open[key]} onClick={() => setOpen(prev => ({ ...prev, [key]: !prev[key] }))}>{open[key] ? 'Ocultar repreguntas' : 'Repreguntar ↓'}</button>
        {open[key] && <ul className="gl-follow">{question.followUps.map(f => <li key={f}>{f}</li>)}{question.deeper && <li className="gl-deeper"><b>Para profundizar:</b> {question.deeper}</li>}</ul>}
        <button type="button" className="gl-talked" aria-pressed={!!talked[key]} onClick={() => setTalked(prev => ({ ...prev, [key]: !prev[key] }))}>{talked[key] ? '✓ Conversada' : 'Marcar como conversada'}</button>
      </article>;
    })}</div>
    <p className="gl-swap"><span aria-hidden="true">⇄</span> {block.swap}</p>
  </div>;
}

function Task({ block }: { block: Extract<Block, { kind: 'task' }> }) {
  const [version, setVersion] = useState(0);
  const [done, setDone] = useState<Record<number, boolean>>({});
  return <Card kind="task">
    <p className="gl-purpose"><Rich text={block.purpose} /></p>
    <ol className="gl-task-steps">{block.steps.map(step => <li key={step}>{step}</li>)}</ol>
    <div className="gl-versions" role="group" aria-label="Nivel de apoyo">{block.versions.map((v, i) => <button type="button" key={v.label} aria-pressed={i === version} onClick={() => setVersion(i)}><b>{v.label}</b><small>{v.text}</small></button>)}</div>
    <div className="gl-success"><h4>Lo conseguiste si…</h4><ul>{block.success.map((line, i) => <li key={line}><label><input type="checkbox" checked={!!done[i]} onChange={() => setDone(prev => ({ ...prev, [i]: !prev[i] }))} /> {line}</label></li>)}</ul></div>
  </Card>;
}

function Mistakes({ block }: { block: Extract<Block, { kind: 'mistakes' }> }) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const all = block.items.every((_, i) => open[i]);
  return <Card kind="mistakes" title={block.title} actions={block.reveal ? <RevealAll open={all} label="correcciones" onToggle={() => setOpen(Object.fromEntries(block.items.map((_, i) => [i, !all])))} /> : undefined}>
    <ul>{block.items.map((item, i) => {
      const visible = !block.reveal || open[i];
      return <li key={item.wrong}>
        <span className="gl-wrong"><i aria-hidden="true">✗</i><s>{item.wrong}</s></span>
        {visible ? <span className="gl-right"><i aria-hidden="true">✓</i>{item.right}</span> : <button type="button" className="gl-link" data-answer-toggle onClick={() => setOpen(prev => ({ ...prev, [i]: true }))}>¿Cómo se dice?</button>}
        {visible && <small>{item.why}</small>}
      </li>;
    })}</ul>
  </Card>;
}

function Dialogue({ block }: { block: Extract<Block, { kind: 'dialogue' }> }) {
  const [marks, setMarks] = useState(false);
  const speakers = [...new Set(block.lines.map(line => line.who))];
  return <Card kind="dialogue" title={block.title} actions={<MarksToggle on={marks} set={setMarks} />}>
    <p className="gl-setting">{block.setting}</p>
    {marks && <Legend />}
    <div className="gl-chat">{block.lines.map((line, i) => <div key={i} className={`gl-bubble gl-side-${speakers.indexOf(line.who) % 2}`}><b>{line.who}</b><p><Rich text={line.text} marks={marks} /></p><English text={line.en} /></div>)}</div>
    <Questions items={block.questions} />
  </Card>;
}

function Reading({ block }: { block: Extract<Block, { kind: 'reading' }> }) {
  const [marks, setMarks] = useState(false);
  return <Card kind="reading" title={block.title} actions={<MarksToggle on={marks} set={setMarks} />}>
    {marks && <Legend />}
    <article className="gl-message"><small>{block.from}</small><p><Rich text={block.text} marks={marks} /></p><English text={block.en} /></article>
    <Questions items={block.questions} />
  </Card>;
}

function Audio({ block }: { block: Extract<Block, { kind: 'audio' }> }) {
  const [error, setError] = useState(false);
  const [transcript, setTranscript] = useState(false);
  return <Card kind="audio" title={block.title}>
    <ol className="gl-plan">{block.plan.map(step => <li key={step}>{step}</li>)}</ol>
    <audio controls preload="none" src={block.src} onError={() => setError(true)} aria-label={block.title}>Tu navegador no puede reproducir este audio.</audio>
    {error && <p className="gl-error" role="alert">No se pudo cargar el audio. Abre la transcripción y léela en voz alta con tu profesor.</p>}
    <button type="button" className="gl-chip-button" data-transcript aria-pressed={transcript} onClick={() => setTranscript(v => !v)}>{transcript ? 'Ocultar transcripción' : 'Transcripción · después de escuchar'}</button>
    {transcript && <><Legend /><p className="gl-transcript"><Rich text={block.transcript} /></p></>}
    <Questions items={block.questions} />
  </Card>;
}

export function LiveBlock({ block }: { block: Block }) {
  const { teacher } = useLive();
  switch (block.kind) {
    case 'lead': return <div className="gl-lead"><p><Rich text={block.text} /></p><English text={block.en} /></div>;
    case 'scenes': return <div className="gl-scenes">{block.items.map(scene => <article key={scene.place}><span aria-hidden="true">{scene.icon}</span><small>{scene.place}</small><p>«{scene.line}»</p><English text={scene.en} /><em>{scene.why}</em></article>)}</div>;
    case 'goals': return <Card kind="goals" title={block.title}><ol>{block.items.map(goal => <li key={goal.text}><span><Rich text={goal.text} /></span><English text={goal.en} /></li>)}</ol></Card>;
    case 'prompts': return <Card kind="prompts" title={block.title}><ol>{block.items.map(item => <li key={item}><Rich text={item} /></li>)}</ol></Card>;
    case 'concept': return <section className={`gl-concept gl-tone-${block.tone}`} data-block="concept">
      <header><span className="gl-badge">{block.label}</span><h3>{block.question}</h3>{block.en && <em lang="en">{block.en}</em>}</header>
      <div className="gl-formulas">{block.formula.map(f => <code key={f}>{f}</code>)}</div>
      <p className="gl-meaning"><Rich text={block.meaning} /></p>
      <ul className="gl-examples">{block.examples.map(example => <li key={example.es}><span><Rich text={example.es} /></span><English text={example.en} /></li>)}</ul>
      {block.note && <p className="gl-note"><Rich text={block.note} /></p>}
    </section>;
    case 'contrast': return <Card kind="contrast" title={block.title}><div className="gl-contrast-grid">{block.items.map(item => <article key={item.sentence} className={`gl-tone-${item.tone}`}>
      <svg viewBox="0 0 200 40" aria-hidden="true" className="gl-shape">{item.shape === 'point' ? <><line x1="8" y1="20" x2="192" y2="20" /><circle cx="70" cy="20" r="9" /></> : <><line x1="8" y1="20" x2="192" y2="20" /><rect x="70" y="13" width="115" height="14" rx="7" /></>}<text x="186" y="38" textAnchor="end">hoy</text></svg>
      <p><Rich text={item.sentence} /></p><English text={item.en} /><small>{item.verdict}</small>
    </article>)}</div></Card>;
    case 'table': return <Card kind="table" title={block.title}><div className="gl-grid-table" role="table" aria-label={block.title}>
      <div role="row" className="gl-table-head">{block.head.map(h => <span role="columnheader" key={h}>{h}</span>)}</div>
      {block.rows.map(row => <div role="row" key={row.join()}>{row.map((cell, i) => <span role="cell" key={i} data-label={block.head[i]}><Rich text={cell} /></span>)}</div>)}
    </div>{block.caption && <p className="gl-hint">{block.caption}</p>}</Card>;
    case 'tip': return <aside className="gl-tip"><span aria-hidden="true">{block.icon}</span><div><h4>{block.title}</h4><p><Rich text={block.text} /></p><English text={block.en} /></div></aside>;
    case 'mistakes': return <Mistakes block={block} />;
    case 'visual': return <LiveVisual visual={block.visual} />;
    case 'dialogue': return <Dialogue block={block} />;
    case 'reading': return <Reading block={block} />;
    case 'audio': return <Audio block={block} />;
    case 'choice': return <Choice title={block.title} hint={block.hint} items={block.items} />;
    case 'classify': return <Classify block={block} />;
    case 'reveal': return <RevealList block={block} />;
    case 'order': return <Order block={block} />;
    case 'roleplay': return <Roleplays block={block} />;
    case 'conversation': return <Conversation block={block} />;
    case 'task': return <Task block={block} />;
    case 'recap': return <div className="gl-recap">{block.items.map(item => <article key={item.label} className={`gl-tone-${item.tone}`}><span className="gl-badge">{item.label}</span>{item.en && <em lang="en">{item.en}</em>}<code>{item.formula}</code><p>{item.example}</p><small>{item.caption}</small></article>)}</div>;
    case 'teacher': return teacher ? <aside className="gl-teacher-note" data-teacher-note><b>Nota para el profesor</b><p>{block.text}</p></aside> : null;
  }
}
