'use client';
import { useEffect, useRef, useState } from 'react';
import { filterLessons, availableLevels, levelForCategory } from './library-filters.mjs';
import { type Offer, discountedCents, usd } from './offer';
import type { UserSession } from './access-policy';
import './teachers.css';

export type CatalogItem = {
  id: number;
  title: string;
  subtitle: string;
  level: string;
  levels?: string[];
  displayLevel?: string;
  category: string;
  duration: string;
  tag: string;
  image?: string;
  path: string;
  free: boolean;
};

const categories = ['Gramática', 'Conversación', 'Escucha', 'Fonética', 'Vocabulario'];

export default function Library({
  lessons,
  session,
  owner,
  fullAccess,
  offer,
}: {
  lessons: CatalogItem[];
  session?: UserSession;
  owner: boolean;
  fullAccess: boolean;
  offer: Offer;
}) {
  const [level, setLevel] = useState('Todos');
  const [category, setCategory] = useState('Todas');
  const [query, setQuery] = useState('');
  const [onlyFree, setOnlyFree] = useState(false);
  const [modal, setModal] = useState<'offer' | 'locked' | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const visible = filterLessons(lessons, { level, category, query }).filter(
    (l: CatalogItem) => !onlyFree || l.free
  ) as CatalogItem[];

  useEffect(() => {
    if (fullAccess) return;
    let elapsed = 0;
    try {
      elapsed = Number(sessionStorage.getItem('chespanish-browse-ms') || 0);
      if (sessionStorage.getItem('chespanish-offer-seen')) return;
    } catch {}
    const timer = setInterval(() => {
      if (document.visibilityState !== 'visible' || document.querySelector('dialog[open]')) return;
      elapsed += 1000;
      try {
        sessionStorage.setItem('chespanish-browse-ms', String(elapsed));
      } catch {}
      if (elapsed >= 60000) {
        try {
          sessionStorage.setItem('chespanish-offer-seen', '1');
        } catch {}
        setModal('offer');
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [fullAccess]);

  useEffect(() => {
    if (modal) dialog.current?.showModal();
    else dialog.current?.close();
  }, [modal]);

  const chooseCategory = (value: string) => {
    setCategory(value);
    setLevel(levelForCategory(lessons, level, value));
  };

  const isUserLoggedIn = session ? session.isAuthenticated : owner;

  return (
    <div className="teacher-app">
      <header className="teacher-top">
        <a href="/" className="teacher-brand">
          <img src="/mascots/mate.png" alt="" />
          <span>
            <b>CHE</b>SPANISH<small>CLASES PARA PROFESORES</small>
          </span>
        </a>
        <nav aria-label="Tu cuenta">
          {isUserLoggedIn ? (
            <>
              {owner && (
                <a href={fullAccess ? '/?vista=profesor' : '/'}>
                  {fullAccess ? 'Ver como profesor' : 'Volver a mi acceso completo'}
                </a>
              )}
              {owner && (
                <a className="account-link" href="/admin">
                  Mi panel
                </a>
              )}
              <a className="account-link" href="/cuenta">
                {session?.displayName || 'Mi cuenta'}
              </a>
            </>
          ) : (
            <a className="account-link" href="/signin-with-chatgpt?return_to=%2Fcuenta" target="_top">
              Ingresar con ChatGPT ↗
            </a>
          )}
        </nav>
      </header>

      {owner && (
        <div className="owner-strip">
          {fullAccess
            ? 'Tu acceso de propietario · Todas las clases disponibles'
            : 'Vista de profesor · Probá las muestras y los bloqueos'}
        </div>
      )}

      <main className="teacher-main">
        <section className="teacher-intro">
          <p>PARA PROFESORES Y TUTORES DE ESPAÑOL</p>
          <h1>
            NAVEGÁ. ELEGÍ. <span>ENSEÑÁ.</span>
          </h1>
          <div>Clases listas para abrir y enseñar.</div>
        </section>

        <section className="teacher-offer" aria-label="Lanzamiento">
          <div>
            <b>Primeros {offer.maxTeachers} profesores</b>
            <span>
              {offer.discountPercent}% de descuento · {usd(discountedCents(offer))}/mes durante {offer.months} meses.
            </span>
          </div>
          <button onClick={() => setModal('offer')}>Ver lanzamiento ↗</button>
        </section>

        <section className="teacher-library" aria-label="Biblioteca de clases">
          <div className="teacher-library-head">
            <h2>
              Elegí tu próxima clase<span>{lessons.length} clases</span>
            </h2>
            <label className="sample-toggle">
              <input type="checkbox" checked={onlyFree} onChange={(e) => setOnlyFree(e.target.checked)} /> Solo
              gratuitas
            </label>
          </div>

          <div className="teacher-filters">
            <label className="teacher-search">
              Buscar clase
              <input
                type="search"
                placeholder="Tema o palabra clave"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
            <label>
              Categoría
              <select value={category} onChange={(e) => chooseCategory(e.target.value)}>
                <option value="Todas">Todas las categorías</option>
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <label>
              {category === 'Todas' ? 'Nivel' : `Nivel en ${category}`}
              <select value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="Todos">Todos los niveles</option>
                {availableLevels(lessons,category).map((l: string) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </label>
          </div>

          <p className="sample-note">
            2 clases de muestra por nivel + 2 por categoría. Gratis, sin tarjeta. Las selecciones pueden coincidir.
          </p>

          <div className="teacher-results" role="status">
            {visible.length} {visible.length === 1 ? 'clase' : 'clases'}
            {(query || level !== 'Todos' || category !== 'Todas' || onlyFree) && (
              <button
                onClick={() => {
                  setQuery('');
                  setLevel('Todos');
                  setCategory('Todas');
                  setOnlyFree(false);
                }}
              >
                Limpiar filtros
              </button>
            )}
          </div>

          <div className="teacher-grid">
            {visible.map((l) => {
              const locked = !fullAccess && !l.free;
              return (
                <article key={l.id} className={`teacher-card ${locked ? 'is-locked' : ''}`}>
                  <div className="teacher-card-art">
                    {l.image ? (
                      <img src={l.image} alt="" loading="lazy" />
                    ) : (
                      <div className="teacher-card-type" aria-hidden="true">
                        {l.category === 'Gramática'
                          ? 'Aa'
                          : l.category === 'Escucha'
                          ? '♫'
                          : l.category === 'Fonética'
                          ? 'ɾ'
                          : l.category === 'Vocabulario'
                          ? 'Ab'
                          : '¿?'}
                      </div>
                    )}
                    {locked && (
                      <span className="lock-symbol" aria-hidden="true">
                        ▣
                      </span>
                    )}
                    <span className={`access-pill ${l.free ? 'free' : ''}`}>
                      {l.free ? 'GRATIS' : fullAccess ? 'TU ACCESO COMPLETO' : 'ACCESO COMPLETO'}
                    </span>
                  </div>
                  <div className="teacher-card-body">
                    <div className="teacher-card-meta">
                      <b>{l.displayLevel || l.level}</b>
                      <span>{l.category}</span>
                    </div>
                    <h3>{l.title}</h3>
                    <p>{l.subtitle}</p>
                    <div className="teacher-card-footer">
                      <span>{l.duration}</span>
                      {locked ? (
                        <button aria-label={`Ver acceso para ${l.title}`} onClick={() => setModal('locked')}>
                          Desbloquear ↗
                        </button>
                      ) : (
                        <a href={l.path}>Abrir clase →</a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {!visible.length && (
            <div className="teacher-empty">
              <h3>No hay clases con estos filtros.</h3>
              <p>Elegí otro nivel o categoría.</p>
            </div>
          )}
        </section>

        <section className="teacher-world">
          <p>UN IDIOMA. MUCHAS BANDERAS.</p>
          <h2>Tu español tiene lugar acá.</h2>
          <div className="brand-sheets">
            {[1, 2, 3].map((n) => (
              <img
                key={n}
                src={`/brand/chespanish-countries-0${n}.png`}
                alt={
                  n === 1
                    ? 'España, Argentina, México, Colombia, Perú, Chile y Uruguay'
                    : n === 2
                    ? 'Bolivia, Ecuador, Paraguay, Venezuela, Costa Rica, Panamá y Nicaragua'
                    : 'Guatemala, Honduras, El Salvador, Cuba, República Dominicana, Puerto Rico y Guinea Ecuatorial'
                }
                loading="lazy"
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="teacher-footer">
        <b>CHESPANISH</b>
        <span>NAVEGÁ, ELEGÍ, ENSEÑÁ.</span>
      </footer>

      <dialog
        ref={dialog}
        className="teacher-dialog"
        onCancel={() => setModal(null)}
        onClose={() => setModal(null)}
        onClick={(e) => {
          if (e.target === dialog.current) setModal(null);
        }}
      >
        <div>
          <button className="dialog-close" aria-label="Cerrar" onClick={() => setModal(null)}>
            ×
          </button>
          <p className="dialog-kicker">CHESPANISH · LANZAMIENTO</p>
          <h2>
            {modal === 'locked'
              ? 'Esta clase forma parte del acceso completo.'
              : `Un lugar para los primeros ${offer.maxTeachers} profes.`}
          </h2>
          <p>
            {offer.discountPercent}% de descuento: {usd(discountedCents(offer))}/mes durante {offer.months} meses.
            Después, precio estándar vigente. Hoy: {usd(offer.baseCents)}/mes.
          </p>
          <p>Mientras tanto, probá las clases gratuitas y usalas con tus alumnos.</p>
          <button
            className="dialog-primary"
            onClick={() => {
              setOnlyFree(true);
              setCategory('Todas');
              setLevel('Todos');
              setQuery('');
              setModal(null);
            }}
          >
            Explorar clases gratuitas →
          </button>
          <small>Sin tarjeta. Sin cobros ni reservas de cupo.</small>
        </div>
      </dialog>
    </div>
  );
}
