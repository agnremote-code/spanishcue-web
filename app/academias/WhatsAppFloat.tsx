'use client';

import { trackMarketingEvent } from '../marketing/analytics';
import { BAUTI_WHATSAPP } from '../bauti/copy';

/** Floating WhatsApp contact for academy pages (bottom right; Bauti sits bottom left). */
export default function WhatsAppFloat({ es }: { es: boolean }) {
  const message = es ? 'Hola, quiero información sobre SpanishCue para mi academia.' : 'Hi, I would like information about SpanishCue for my school.';
  return <a className="academy-whatsapp-float" href={`https://wa.me/${BAUTI_WHATSAPP}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" aria-label={es ? 'Escribir por WhatsApp' : 'Message us on WhatsApp'} onClick={() => trackMarketingEvent('cta_click', { placement: 'academy_whatsapp_float', cta_type: 'contact' })}>
    <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.6c-2 0-3.9-.5-5.6-1.5l-.4-.2-3.9 1 1-3.8-.3-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.7 5 .8.4 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4z" /></svg>
    <span>WhatsApp</span>
  </a>;
}
