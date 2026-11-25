import Link from 'next/link';
import type { ReactNode } from 'react';

/** The shared top bar of the classic classes: brand and way back, the class name, and the class's own controls. */
export function ClassicTopBar({ title, context = 'Conversación', children }: { title: string; context?: string; children?: ReactNode }) {
  return <header className="cx-top">
    <Link className="cx-top-brand" href="/" aria-label="SPANISHCUE, volver a la biblioteca">
      <img src="/brand/spanishcue-logo.png" alt="" width="256" height="256" />
      <span>SPANISHCUE<small>← Biblioteca · {context}</small></span>
    </Link>
    <p className="cx-top-title">{title}</p>
    <div className="cx-top-end">{children}</div>
  </header>;
}
