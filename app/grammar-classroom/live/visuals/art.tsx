import type { ReactElement } from 'react';
import type { ArtKey } from '../types';

/** Flat illustrations for concept cards: decorative, so hidden from screen readers. */
export function ConceptArt({ art }: { art: ArtKey }) {
  return <figure className="gl-art" aria-hidden="true">{drawings[art]}</figure>;
}

const days = [0, 1, 2, 3, 4].flatMap(col => [0, 1, 2].map(row => ({ x: 62 + col * 19, y: 78 + row * 17 })));

const drawings: Record<ArtKey, ReactElement> = {
  // desde: one day marked on the calendar, and a line that keeps going until today.
  'calendar-start': <svg viewBox="0 0 240 170">
    <circle cx="104" cy="88" r="74" fill="#eef4ff" />
    <g transform="rotate(-5 100 90)">
      <rect x="46" y="38" width="112" height="104" rx="16" fill="#fff" stroke="#d3deec" strokeWidth="2" />
      <path d="M46 54a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16v10H46z" fill="#1667d9" />
      <rect x="70" y="30" width="6" height="16" rx="3" fill="#0b2144" /><rect x="128" y="30" width="6" height="16" rx="3" fill="#0b2144" />
      <text x="102" y="59" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600" letterSpacing="1.5">MARZO</text>
      {days.map((d, i) => i === 7 || i === 8 ? null : <circle key={i} cx={d.x} cy={d.y} r="3.5" fill="#d3deec" />)}
      <circle cx={days[8].x} cy={days[8].y} r="9" fill="#1667d9" />
      <path d={`M${days[8].x} ${days[8].y - 9}v-22`} stroke="#0b2144" strokeWidth="2.5" strokeLinecap="round" />
      <path d={`M${days[8].x} ${days[8].y - 31}l15 5.5-15 5.5z`} fill="#f4a52d" />
    </g>
    <path d="M166 104h44" stroke="#1667d9" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 8" />
    <path d="M206 97l9 7-9 7" fill="none" stroke="#1667d9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="182" y="120" width="44" height="24" rx="12" fill="#0b2144" />
    <text x="204" y="136" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">hoy</text>
  </svg>,
  // desde hace: time measured from the start until now.
  'duration-clock': <svg viewBox="0 0 240 170">
    <circle cx="110" cy="84" r="74" fill="#e8f7f1" />
    <rect x="100" y="16" width="20" height="12" rx="4" fill="#0b2144" />
    <circle cx="110" cy="80" r="50" fill="#fff" stroke="#d3deec" strokeWidth="2" />
    <path d="M110 40a40 40 0 1 1 -38 27.6" fill="none" stroke="#0c8a6c" strokeWidth="10" strokeLinecap="round" />
    <circle cx="72" cy="67.6" r="7" fill="#1667d9" stroke="#fff" strokeWidth="3" />
    <path d="M110 80V54M110 80l16 10" stroke="#0b2144" strokeWidth="4" strokeLinecap="round" />
    <circle cx="110" cy="80" r="5" fill="#0b2144" />
    <rect x="150" y="122" width="80" height="30" rx="15" fill="#0c8a6c" />
    <text x="190" y="142" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">7 años</text>
  </svg>,
  // hace + pasado: a finished trip, counted back from today.
  'past-trip': <svg viewBox="0 0 240 170">
    <circle cx="96" cy="90" r="72" fill="#fff1e6" />
    <path d="M78 58v-12a8 8 0 0 1 8-8h22a8 8 0 0 1 8 8v12" fill="none" stroke="#0b2144" strokeWidth="6" strokeLinecap="round" />
    <rect x="50" y="58" width="94" height="78" rx="16" fill="#d9661f" />
    <path d="M72 58v78M122 58v78" stroke="#b9500f" strokeWidth="6" />
    <circle cx="72" cy="142" r="6" fill="#0b2144" /><circle cx="122" cy="142" r="6" fill="#0b2144" />
    <g transform="rotate(10 152 74)">
      <rect x="138" y="62" width="34" height="24" rx="5" fill="#fff" stroke="#d3deec" strokeWidth="2" />
      <path d="M147 74l5 5 10-10" fill="none" stroke="#0c8a6c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <path d="M214 120c-14 26-50 30-66 14" fill="none" stroke="#d9661f" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 8" />
    <path d="M156 128l-9 6 3 10" fill="none" stroke="#d9661f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="186" y="92" width="44" height="24" rx="12" fill="#0b2144" />
    <text x="208" y="108" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">hoy</text>
  </svg>,
};
