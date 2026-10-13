'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import CheckoutButton from '../acceso/CheckoutButton';

/** What a Homework learner sees of a premium class: real stages first, a visual lock after. */
export type PreviewGateConfig = {
  /** Lesson path to open after a verified payment. */
  lessonPath: string;
  lessonTitle: string;
  /** Where «Volver a Homework» goes (a validated Autoestudio path). */
  returnTo: string;
  signedIn: boolean;
  /** Stages the preview includes in full. */
  unlocked: readonly string[];
  /** Present when the learner opened the class from a pass: events reach the teacher. */
  track?: { lessonId: number; category: string; moduleId: string } | null;
};

export function logPreviewEvent(track: PreviewGateConfig['track'], kind: 'previewed' | 'gated') {
  if (!track) return;
  try {
    void fetch('/api/autoestudio/events', { method: 'POST', credentials: 'same-origin', keepalive: true, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ kind, ...track }) }).catch(() => undefined);
  } catch { /* Tracking never affects the class. */ }
}

export function LockPanel({ gate, onUnlock }: { gate: PreviewGateConfig; onUnlock: () => void }) {
  return <div className="gc-lock" role="region" aria-label="Contenido de la clase completa">
    <div className="gc-lock-lines" aria-hidden="true"><span/><span/><span/><span/></div>
    <div className="gc-lock-card">
      <span className="gc-lock-icon" aria-hidden="true">🔒</span>
      <h3>Aquí continúa la clase completa</h3>
      <p>Esta parte de «{gate.lessonTitle}» es contenido PRO de SpanishCue. Lo que acabas de leer es la clase auténtica; el resto se desbloquea con tu acceso.</p>
      <div className="gc-lock-actions">
        <button type="button" data-unlock onClick={onUnlock}>Desbloquear la clase completa</button>
        <Link href={gate.returnTo}>Volver a Homework</Link>
      </div>
    </div>
  </div>;
}

export function UnlockModal({ gate, onClose }: { gate: PreviewGateConfig; onClose: () => void }) {
  const closeButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  useEffect(() => {
    closeButton.current?.focus();
    const previous = document.body.style.overflow; document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); return; }
      if (e.key !== 'Tab' || !dialog.current) return;
      const focusable = dialog.current.querySelectorAll<HTMLElement>('button:not(:disabled),[href],[tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = previous; };
  }, [onClose]);
  return createPortal(<div className="gc-unlock-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div ref={dialog} className="gc-unlock" role="dialog" aria-modal="true" aria-labelledby="gc-unlock-title">
      <button ref={closeButton} type="button" className="gc-unlock-close" onClick={onClose} aria-label="Cerrar y seguir con la demostración">✕</button>
      <p className="gc-eyebrow">SPANISHCUE PRO</p>
      <h2 id="gc-unlock-title">Sigue aprendiendo con SpanishCue</h2>
      <p>Estás explorando nuestra clase interactiva <b>{gate.lessonTitle}</b>. Desbloquea la clase completa y sigue practicando con nuestras herramientas de aprendizaje: explicaciones, audio, conversación y escritura con apoyo docente.</p>
      <div className="gc-unlock-checkout">
        <CheckoutButton signedIn={gate.signedIn} returnTo={gate.lessonPath} />
      </div>
      <p className="gc-caption">El acceso se activa solo cuando SpanishCue verifica el pago en el servidor. Si pagas sin cuenta, te pediremos un correo verificado para vincular tu compra y poder recuperar el acceso en cualquier dispositivo. <Link href={`/acceso?returnTo=${encodeURIComponent(gate.lessonPath)}`}>Ver todas las opciones de acceso</Link>.</p>
      <div className="gc-unlock-footer">
        <Link href={gate.returnTo}>← Volver a Homework</Link>
        <button type="button" className="gc-text-button" onClick={onClose}>Seguir viendo la demostración</button>
      </div>
    </div>
  </div>, document.body);
}
