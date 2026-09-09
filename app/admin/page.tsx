import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ownerFromHeaders, samplesByLevel, samplesByCategory } from '../access-policy';
import { lessons } from '../lesson-catalog';
import { readOffer } from '../../db/offer';
import OfferEditor from './OfferEditor';
import '../teachers.css';
export const dynamic='force-dynamic';
export default async function Admin(){const h=await headers();if(!h.get('oai-authenticated-user-id'))redirect('/signin-with-chatgpt?return_to=%2Fadmin');if(!ownerFromHeaders(h))redirect('/cuenta');return <div className="teacher-app"><main className="teacher-main"><a href="/">← Mi biblioteca</a><section className="teacher-intro" style={{marginTop:32}}><p>SOLO VOS · ADMINISTRACIÓN</p><h1>Tu CHESPANISH.</h1><div>Acceso completo a todas las clases.</div></section><p><a href="/?vista=profesor">Probar la vista de profesor →</a></p><OfferEditor initial={await readOffer()}/><section className="teacher-world"><p>MUESTRAS GRATUITAS FIJAS</p><h2>Lo que pueden probar los profesores</h2><p>Se ofrece la unión de ambas selecciones. Una misma clase puede cubrir nivel y categoría; cambiar filtros no cambia permisos.</p><div className="teacher-grid">{Object.entries({...samplesByLevel,...samplesByCategory}).map(([group,ids])=><article key={group} className="teacher-card teacher-card-body"><h3>{group}</h3><ul>{ids.map(id=><li key={id}>{lessons.find(l=>l.id===id)?.title??`Pendiente: ${id}`}</li>)}</ul></article>)}</div></section><p className="sample-note" style={{marginTop:30}}>Cobros desactivados. No se crean suscripciones ni se asignan cupos. El sitio sigue privado durante las pruebas.</p></main></div>}
