import '../teachers.css';
import { readOffer } from '../../db/offer';
import { usd,discountedCents } from '../offer';
export const dynamic='force-dynamic';
export default async function Access(){const offer=await readOffer();return <div className="teacher-app"><main className="teacher-main"><a href="/">← Biblioteca</a><section className="teacher-intro" style={{marginTop:40}}><p>ACCESO COMPLETO</p><h1>Esta clase está bloqueada.</h1><div>Probá las muestras gratuitas mientras preparamos el lanzamiento.</div></section><section className="teacher-offer"><div><b>{usd(discountedCents(offer))}/mes durante {offer.months} meses</b><span>Primeros {offer.maxTeachers} profesores · {offer.discountPercent}% de descuento. Luego, precio estándar vigente.</span></div></section><p>Precio estándar actual: {usd(offer.baseCents)}/mes. Cobros desactivados durante las pruebas.</p><p><a href="/signin-with-chatgpt?return_to=%2Fcuenta" target="_top">Ingresar con ChatGPT →</a></p></main></div>}
