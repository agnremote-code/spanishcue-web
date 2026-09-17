import { requireChatGPTUser, chatGPTSignOutPath } from '../chatgpt-auth';
import { headers } from 'next/headers';
import { getUserSessionFromHeaders } from '../access-policy';
import { readOffer } from '../../db/offer';
import { usd, discountedCents } from '../offer';
import '../teachers.css';

export const dynamic = 'force-dynamic';

export type TabKey = 'inicio' | 'alumnos' | 'historial' | 'favoritos' | 'suscripcion' | 'ajustes';

export default async function AccountPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const user = await requireChatGPTUser('/cuenta');
  const h = await headers();
  const session = getUserSessionFromHeaders(h);
  const offer = await readOffer();
  const params = await searchParams;

  const activeTab: TabKey = (
    ['inicio', 'alumnos', 'historial', 'favoritos', 'suscripcion', 'ajustes'].includes(params.tab || '')
      ? params.tab
      : 'inicio'
  ) as TabKey;

  const roleLabel = session.isOwner
    ? 'Propietario · Acceso completo'
    : session.isPro
    ? 'Suscripción PRO · Acceso completo'
    : 'Profesor · Acceso gratuito';

  const badgeClass = session.isOwner ? 'owner' : session.isPro ? 'pro' : 'free';

  return (
    <div className="teacher-app">
      <main className="teacher-main">
        <a href="/">← Biblioteca de clases</a>

        <div className="account-header">
          <div>
            <p style={{ color: 'var(--blue)', fontSize: 12, letterSpacing: 2, fontWeight: 'bold', margin: '0 0 6px' }}>
              MI CUENTA
            </p>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', margin: 0, letterSpacing: '-1px' }}>
              {user.displayName}
            </h1>
            <p style={{ color: 'var(--muted)', margin: '6px 0 0', fontSize: 15 }}>{user.email}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
            <span className={`account-badge ${badgeClass}`}>{roleLabel}</span>
            {session.isOwner && (
              <a href="/admin" style={{ fontSize: 13, color: 'var(--blue)', fontWeight: 'bold' }}>
                Administrar precios y promoción →
              </a>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="account-tabs" aria-label="Secciones de la cuenta">
          <a
            href="/cuenta?tab=inicio"
            className={`account-tab-item ${activeTab === 'inicio' ? 'is-active' : ''}`}
          >
            Inicio
          </a>
          <a
            href="/cuenta?tab=alumnos"
            className={`account-tab-item ${activeTab === 'alumnos' ? 'is-active' : ''}`}
          >
            Mis alumnos
          </a>
          <a
            href="/cuenta?tab=historial"
            className={`account-tab-item ${activeTab === 'historial' ? 'is-active' : ''}`}
          >
            Historial de clases
          </a>
          <a
            href="/cuenta?tab=favoritos"
            className={`account-tab-item ${activeTab === 'favoritos' ? 'is-active' : ''}`}
          >
            Favoritos
          </a>
          <a
            href="/cuenta?tab=suscripcion"
            className={`account-tab-item ${activeTab === 'suscripcion' ? 'is-active' : ''}`}
          >
            Suscripción
          </a>
          <a
            href="/cuenta?tab=ajustes"
            className={`account-tab-item ${activeTab === 'ajustes' ? 'is-active' : ''}`}
          >
            Ajustes
          </a>
        </nav>

        {/* TAB 1: INICIO */}
        {activeTab === 'inicio' && (
          <div className="account-grid-2">
            <div className="account-card">
              <h2>Estado actual de tu cuenta</h2>
              <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6 }}>
                Estás registrado como <b>{user.displayName}</b> ({user.email}). Tu tipo de acceso actual es:{' '}
                <span className={`account-badge ${badgeClass}`} style={{ marginLeft: 6 }}>
                  {roleLabel}
                </span>
              </p>
              <div style={{ marginTop: 24 }}>
                <a href="/" className="dialog-primary" style={{ display: 'inline-block', textAlign: 'center' }}>
                  Ir a la biblioteca de clases →
                </a>
              </div>
            </div>

            <div className="account-card">
              <h2>Resumen de actividad</h2>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6 }}>
                Tenés acceso inmediato a las clases de muestra gratuitas de cada nivel y categoría.
              </p>
              <ul style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
                <li>2 muestras por nivel y 2 por categoría sin costo.</li>
                <li>Uso libre para dictar tus lecciones online o presenciales.</li>
                <li>Sesión de usuario activa e identificada en el servidor.</li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 2: MIS ALUMNOS */}
        {activeTab === 'alumnos' && (
          <div className="account-card">
            <h2>Mis alumnos</h2>
            <div style={{ background: '#101e30', border: '1px solid var(--line)', padding: 24, borderRadius: 10 }}>
              <p style={{ color: '#76c2ff', fontWeight: 'bold', margin: '0 0 8px', fontSize: 14 }}>
                MÓDULO EN PREPARACIÓN (PRÓXIMAMENTE)
              </p>
              <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                Pronto podrás registrar a tus alumnos, crear grupos, asignarles lecciones específicas de la biblioteca
                y dar seguimiento a su progreso de conversación y aprendizaje.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: HISTORIAL DE CLASES */}
        {activeTab === 'historial' && (
          <div className="account-card">
            <h2>Historial de clases</h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6 }}>
              Abrir o explorar el contenido de una lección para preparar tu clase no la registra automáticamente como
              dictada. El seguimiento formal de clases impartidas estará integrado con la gestión de alumnos.
            </p>
            <div style={{ background: '#101e30', padding: 20, borderRadius: 10, marginTop: 16 }}>
              <p style={{ color: 'var(--muted)', margin: 0, fontSize: 14 }}>
                No tenés lecciones registradas en tu historial por el momento.
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <a href="/" style={{ color: 'var(--blue)', fontWeight: 'bold', fontSize: 14 }}>
                Explorar catálogo de lecciones →
              </a>
            </div>
          </div>
        )}

        {/* TAB 4: FAVORITOS */}
        {activeTab === 'favoritos' && (
          <div className="account-card">
            <h2>Lecciones favoritas</h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6 }}>
              Guardá acá tus lecciones preferidas para acceder rápidamente durante tus clases.
            </p>
            <div style={{ background: '#101e30', padding: 20, borderRadius: 10, marginTop: 16 }}>
              <p style={{ color: 'var(--muted)', margin: 0, fontSize: 14 }}>
                Aún no guardaste ninguna lección en tus favoritos.
              </p>
            </div>
          </div>
        )}

        {/* TAB 5: SUSCRIPCIÓN */}
        {activeTab === 'suscripcion' && (
          <div className="account-card">
            <h2>Tu suscripción</h2>

            <div className="account-info-list" style={{ marginBottom: 24 }}>
              <div className="account-info-row">
                <span>Estado de suscripción:</span>
                <b>{roleLabel}</b>
              </div>
              <div className="account-info-row">
                <span>Cobros y facturación:</span>
                <b>{session.isOwner ? 'Cuenta Propietario (Sin cobros)' : 'Sin cobros activos'}</b>
              </div>
            </div>

            {!session.isOwner && !session.isPro && (
              <div
                style={{
                  background: '#282519',
                  border: '1px solid #6e602b',
                  borderRadius: 12,
                  padding: 24,
                  marginTop: 20,
                }}
              >
                <p style={{ color: '#ffe59e', fontWeight: 'bold', fontSize: 18, margin: '0 0 8px' }}>
                  Oferta de Lanzamiento SpanishCue PRO
                </p>
                <p style={{ color: '#d7d0ba', fontSize: 15, lineHeight: 1.6, margin: '0 0 16px' }}>
                  <b>
                    {usd(discountedCents(offer))}/mes durante {offer.months} meses
                  </b>{' '}
                  ({offer.discountPercent}% de descuento para los primeros {offer.maxTeachers} profesores).
                  Posteriormente, precio estándar de {usd(offer.baseCents)}/mes.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: 13, margin: 0, lineHeight: 1.5 }}>
                  La integración de pago seguro con PayPal Sandbox/Live se activará en la siguiente fase de desarrollo.
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB 6: AJUSTES */}
        {activeTab === 'ajustes' && (
          <div className="account-card">
            <h2>Ajustes de cuenta</h2>

            <div className="account-info-list" style={{ marginBottom: 28 }}>
              <div className="account-info-row">
                <span>Nombre de usuario:</span>
                <b>{user.displayName}</b>
              </div>
              <div className="account-info-row">
                <span>Correo electrónico:</span>
                <b>{user.email}</b>
              </div>
              <div className="account-info-row">
                <span>Proveedor de identidad:</span>
                <b>ChatGPT / OpenAI Sites OAuth</b>
              </div>
              <div className="account-info-row">
                <span>Idioma de interfaz:</span>
                <b>Español</b>
              </div>
            </div>

            <div style={{ background: '#101e30', padding: 20, borderRadius: 10, marginBottom: 28 }}>
              <p style={{ color: '#76c2ff', fontWeight: 'bold', margin: '0 0 6px', fontSize: 14 }}>
                Seguridad y Contraseña
              </p>
              <p style={{ color: 'var(--muted)', margin: 0, fontSize: 14, lineHeight: 1.5 }}>
                Tu sesión utiliza inicio de sesión mediante ChatGPT OAuth. La autenticación y credenciales de acceso
                son gestionadas directamente por OpenAI, por lo que no requerís contraseña local.
              </p>
            </div>

            <a href={chatGPTSignOutPath('/')} target="_top" className="account-link" style={{ color: '#ff8a8a', borderColor: '#6b3232' }}>
              Cerrar sesión
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
