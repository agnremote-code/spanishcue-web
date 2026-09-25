'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import content from './content.json';

export type Choice = { id: string; label: string; reaction: string; question: string; teacher: string; scene?: string; goTo?: string };
export type Stop = {
  id: string; name: string; sign: string; x: number; y: number; scene: string; topic: string; minutes: string;
  description: string; question: string; choices: Choice[];
  twist: { description: string; question: string; choices: Choice[] };
};

export function CityDialogue({ stop, choice, twist, style, onChoice, onTwist, onReconsider, onReturn, onTravel }: {
  stop: Stop; choice: Choice | null; twist: boolean; style: CSSProperties;
  onChoice: (choice: Choice) => void; onTwist: () => void; onReconsider: () => void; onReturn: () => void; onTravel: (id: string) => void;
}) {
  const heading = useRef<HTMLHeadingElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const situation = twist ? stop.twist : stop;
  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
    panel.current?.scrollTo({ top: 0, behavior: 'instant' });
  }, [choice, twist]);

  const destination = content.stops.find(item => item.id === choice?.goTo);
  return <section className="city-encounter" aria-labelledby="city-encounter-title">
    <div className={`city-scene-image${(choice?.scene || stop.scene) === 'street' ? ' is-street-detail' : ''}`} style={style} />
    <div className="city-cinema-bars" aria-hidden="true" />
    <button className="city-scene-back" onClick={onReturn}>← VOLVER A LA CALLE <kbd>Esc</kbd></button>
    <div className="city-scene-caption"><span>{stop.topic}</span><strong>{stop.name}</strong><i>{twist ? 'OTRA MIRADA' : 'ACERCATE'}</i></div>
    <div className="city-dialogue" ref={panel}>
      <div className="city-kicker">{twist ? 'ALGO CAMBIA' : 'ESTÁS ACÁ'} <span className="city-dialogue-place">{stop.sign}</span></div>
      {choice ? <>
        <div className="city-your-choice">ELEGISTE <strong>{choice.label}</strong></div>
        <p className="city-reaction">{choice.reaction}</p>
        <h2 id="city-encounter-title" ref={heading} tabIndex={-1}>{choice.question}</h2>
        <div className="city-speaking-cue">Contá por qué. Sumá un ejemplo.</div>
        <details className="city-teacher-follow" key={`${twist}-${choice.id}`}><summary>Una pregunta más</summary><p>{choice.teacher}</p></details>
        <details className="city-language-help" key={`help-${twist}-${choice.id}`}><summary>Una mano para empezar</summary><ul>{content.help.map(phrase => <li key={phrase}>{phrase}</li>)}</ul></details>
        <div className="city-dialogue-actions">
          {!twist && <button className="city-primary" onClick={onTwist}>ALGO CAMBIA <span>↗</span></button>}
          {destination ? <button className={twist ? 'city-primary' : 'city-secondary'} onClick={() => onTravel(destination.id)}>CAMINAR HASTA {destination.sign.replace(/^EL |^LA /, '')} →</button> : <button className={twist ? 'city-primary' : 'city-secondary'} onClick={onReturn}>SEGUIR EXPLORANDO →</button>}
          <button className="city-reconsider" onClick={onReconsider}>Probar otra respuesta</button>
        </div>
      </> : <>
        <p className="city-situation">{situation.description}</p>
        <h2 id="city-encounter-title" ref={heading} tabIndex={-1}>{situation.question}</h2>
        <div className="city-choices" role="group" aria-label="Elegí una opción para conversar">
          {situation.choices.map((item, index) => <button key={item.id} onClick={() => onChoice(item)}><span>{String.fromCharCode(65 + index)}</span><strong>{item.label}</strong><i>↗</i></button>)}
        </div>
        <p className="city-choice-note">Elegí lo que harías vos. Después, lo conversamos.</p>
      </>}
    </div>
  </section>;
}

export function CityGuide({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { dialog.current?.showModal(); }, []);
  const sections = [
    ['Para qué', content.teacher.objective], ['Una clase de 45 minutos', content.teacher.timing],
    ['De lo cercano a lo más amplio', content.teacher.progression], ['Durante la conversación', content.teacher.method],
    ['Si necesita ayuda', content.teacher.scaffolding], ['Producción final', content.teacher.closing],
  ];
  return <dialog ref={dialog} className="city-modal" onCancel={onClose} aria-labelledby="city-guide-title">
    <button className="city-modal-close" onClick={onClose} aria-label="Cerrar la guía docente">×</button>
    <div className="city-kicker">GUÍA DOCENTE · B1</div><h2 id="city-guide-title">La conversación marca el ritmo.</h2>
    {sections.map(([title, description]) => <section key={title}><h3>{title}</h3><p>{description}</p></section>)}
    <section><h3>Controles</h3><p>Flechas ← y → para caminar. Enter o espacio para acercarse. También podés tocar un lugar o elegirlo en «El barrio». En celular, mantené presionadas las flechas. Esc vuelve a la calle. Tab recorre los botones.</p></section>
    <button className="city-primary" onClick={onClose}>VOLVER A LA CLASE <span>→</span></button>
  </dialog>;
}
