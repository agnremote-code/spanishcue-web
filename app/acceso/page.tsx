import { headers } from 'next/headers';
import '../teachers.css';
import { readOffer } from '../../db/offer';
import { usd, discountedCents } from '../offer';
import { getUserSessionFromHeaders } from '../access-policy';
import { chatGPTSignInPath, safeRelativeReturnPath } from '../chatgpt-auth';

export const dynamic = 'force-dynamic';

export default async function Access({
  searchParams,
}: {
  searchParams: Promise<{ return_to?: string }>;
}) {
  const offer = await readOffer();
  const params = await searchParams;
  const h = await headers();
  const session = getUserSessionFromHeaders(h);
  const targetPath = params.return_to ? safeRelativeReturnPath(params.return_to) : '/cuenta';

  return (
    <div className="teacher-app">
      <main className="teacher-main">
        <a href="/">← Biblioteca</a>
        <section className="teacher-intro" style={{ marginTop: 40 }}>
          <p>ACCESO COMPLETO</p>
          <h1>Esta clase está bloqueada.</h1>
          <div>
            {session.isAuthenticated
              ? `Hola, ${session.displayName}. Esta lección requiere una suscripción PRO activa.`
              : 'Probá las muestras gratuitas o ingresá a tu cuenta.'}
          </div>
        </section>

        <section className="teacher-offer">
          <div>
            <b>
              {usd(discountedCents(offer))}/mes durante {offer.months} meses
            </b>
            <span>
              Primeros {offer.maxTeachers} profesores · {offer.discountPercent}% de descuento. Luego, precio estándar
              vigente.
            </span>
          </div>
        </section>

        <p>Precio estándar actual: {usd(offer.baseCents)}/mes. Cobros desactivados durante las pruebas.</p>

        {session.isAuthenticated ? (
          <div style={{ marginTop: 24, display: 'flex', gap: 16, alignItems: 'center' }}>
            <a href="/cuenta?tab=suscripcion" className="account-link">
              Ver suscripción →
            </a>
            <a href="/" style={{ color: 'var(--blue)' }}>
              Explorar clases gratuitas
            </a>
          </div>
        ) : (
          <div style={{ marginTop: 24 }}>
            <a href={chatGPTSignInPath(targetPath)} target="_top" className="account-link">
              Ingresar con ChatGPT →
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
