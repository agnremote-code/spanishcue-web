"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { cleanName, createHub, passport, restoreHub, serialiseHub, visit } from "./progress.mjs";
import { HUB_PATH, HUB_STORAGE_KEY, HUB_WORLDS } from "./worlds.mjs";

/** What the server sends for one world: catalog facts and the door it may use. */
export type HubCard = { id: number; title: string; level: string; image: string; href: string | null };

type Locale = "es" | "en";
type InstallEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

const copy = {
  es: {
    kicker: "SpanishCue · Jugar",
    title: "Tu español se juega.",
    lead: "Cada mundo es una historia en 3D. Entra, habla con su gente y resuelve sus escenas en español. Tu pasaporte guarda lo que vas viviendo.",
    start: "Empezar por Noche abierta",
    resume: "Seguir en",
    install: "Instalar en mi teléfono",
    installed: "App instalada",
    iosHint: "En iPhone: toca Compartir y luego «Añadir a pantalla de inicio».",
    passport: "Pasaporte",
    namePlaceholder: "Tu nombre",
    nameLabel: "Nombre del viajero",
    scenes: (n: number) => (n === 1 ? "1 escena vivida" : `${n} escenas vividas`),
    toNext: (n: number, rank: string) => (n === 1 ? `Falta 1 escena para ${rank}` : `Faltan ${n} escenas para ${rank}`),
    topRank: "Ya hablas como alguien de aquí.",
    openTitle: "Mundos abiertos",
    openLead: "Entra cuando quieras, desde el teléfono o la computadora.",
    lockedTitle: "Se abren con tu profesor",
    lockedLead: "Estos mundos se juegan en clase con un profesor de SpanishCue. Tu progreso en ellos también aparece en tu pasaporte.",
    lockedHow: "¿Ya tienes profesor? Abre en este dispositivo el enlace que te envió y vuelve aquí: se abren todos.",
    passOn: "Pase de tu profesor activo: todos los mundos están abiertos.",
    passLost: "Tu pase no está activo en este dispositivo. Abre otra vez el enlace que te envió tu profesor.",
    locked: "Con tu profesor",
    play: "Jugar",
    again: "Volver a entrar",
    done: "Completo",
    progress: (done: number, total: number) => `${done} de ${total} escenas`,
    visited: "Explorado",
    fresh: "Sin estrenar",
    story: "Historia",
    country: "País",
    stampsTitle: "Sellos",
    stampsLead: "Un sello por cada mundo que pisas. Se vuelve dorado cuando terminas todas sus escenas.",
    milestonesTitle: "Lo que ya lograste",
    saved: "Tu progreso se guarda en este dispositivo.",
    account: "Crea tu cuenta gratis para seguir jugando después de los primeros minutos.",
    accountCta: "Crear cuenta gratis",
  },
  en: {
    kicker: "SpanishCue · Play",
    title: "Play your Spanish.",
    lead: "Every world is a story in 3D. Step in, talk to its people and solve its scenes in Spanish. Your passport keeps what you live.",
    start: "Start with Noche abierta",
    resume: "Continue in",
    install: "Install on my phone",
    installed: "App installed",
    iosHint: "On iPhone: tap Share, then “Add to Home Screen”.",
    passport: "Passport",
    namePlaceholder: "Your name",
    nameLabel: "Traveller's name",
    scenes: (n: number) => (n === 1 ? "1 scene lived" : `${n} scenes lived`),
    toNext: (n: number, rank: string) => (n === 1 ? `1 more scene to reach ${rank}` : `${n} more scenes to reach ${rank}`),
    topRank: "You already sound like a local.",
    openTitle: "Open worlds",
    openLead: "Step in whenever you like, on your phone or your computer.",
    lockedTitle: "They open with your teacher",
    lockedLead: "These worlds are played in class with a SpanishCue teacher. Your progress in them shows in your passport too.",
    lockedHow: "Already have a teacher? Open the link they sent you on this device and come back here: every world opens.",
    passOn: "Your teacher's pass is active: every world is open.",
    passLost: "Your pass is not active on this device. Open the link your teacher sent you again.",
    locked: "With your teacher",
    play: "Play",
    again: "Step back in",
    done: "Complete",
    progress: (done: number, total: number) => `${done} of ${total} scenes`,
    visited: "Explored",
    fresh: "Brand new",
    story: "Story",
    country: "Country",
    stampsTitle: "Stamps",
    stampsLead: "One stamp for every world you set foot in. It turns gold when you finish all its scenes.",
    milestonesTitle: "What you have done so far",
    saved: "Your progress is saved on this device.",
    account: "Create your free account to keep playing after the first minutes.",
    accountCta: "Create free account",
  },
};

const readSave = (key: string) => {
  try { return window.localStorage.getItem(key); } catch { return null; }
};
const emptyRead = () => null;

export default function StudentHub({ cards, locale, signedIn, fullAccess, studentPass, alias, passLost }: { cards: HubCard[]; locale: Locale; signedIn: boolean; fullAccess: boolean; studentPass: boolean; alias: string; passLost: boolean }) {
  const t = copy[locale];
  const [hub, setHub] = useState(createHub);
  const [ready, setReady] = useState(false);
  const [installEvent, setInstallEvent] = useState<InstallEvent | null>(null);
  const [standalone, setStandalone] = useState(false);
  const [ios, setIos] = useState(false);

  useEffect(() => {
    const load = () => {
      setHub(restoreHub(readSave(HUB_STORAGE_KEY)));
      setStandalone(window.matchMedia("(display-mode: standalone)").matches || (navigator as Navigator & { standalone?: boolean }).standalone === true);
      setIos(/iPhone|iPad|iPod/.test(navigator.userAgent));
      setReady(true);
    };
    load();
    // Installing from the hub installs the student app, not the teacher library.
    document.querySelector('link[rel="manifest"]')?.setAttribute("href", `${HUB_PATH}/manifest`);
    // Coming back from a world (back button, bfcache) shows fresh progress.
    window.addEventListener("pageshow", load);
    const onPrompt = (event: Event) => { event.preventDefault(); setInstallEvent(event as InstallEvent); };
    const onInstalled = () => { setInstallEvent(null); setStandalone(true); };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("pageshow", load);
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const save = useCallback((next: ReturnType<typeof createHub>) => {
    setHub(next);
    try { window.localStorage.setItem(HUB_STORAGE_KEY, serialiseHub(next)); } catch { /* private mode: the hub still works */ }
  }, []);

  const book = useMemo(() => passport(ready ? readSave : emptyRead, hub), [ready, hub]);
  const statusOf = useMemo(() => new Map(book.statuses.map((status) => [status.id, status])), [book]);
  const worldOf = useMemo(() => new Map(HUB_WORLDS.map((world) => [world.id, world])), []);
  const open = cards.filter((card) => card.href);
  const locked = cards.filter((card) => !card.href);
  const resume = open.find((card) => card.id === book.continueId) ?? null;
  const go = resume ?? open[0] ?? null;
  const rankName = book.rank[locale];

  async function install() {
    if (!installEvent) return;
    await installEvent.prompt();
    await installEvent.userChoice.catch(() => null);
    setInstallEvent(null);
  }

  function card(item: HubCard) {
    const world = worldOf.get(item.id);
    const status = statusOf.get(item.id);
    if (!world || !status) return null;
    const label = status.complete ? t.done : status.total && status.done > 0 ? t.progress(status.done, status.total) : status.started ? t.visited : t.fresh;
    const percent = status.total ? Math.round((status.done / status.total) * 100) : status.started ? 100 : 0;
    const body = (
      <>
        <span className="jg-card-art">
          <img src={item.image} alt="" width="640" height="400" loading="lazy" decoding="async" />
          {status.complete ? <span className="jg-card-seal" aria-hidden="true">✓</span> : null}
        </span>
        <span className="jg-card-meta">{world.kind === "pais" ? t.country : t.story} · {item.level}</span>
        <b className="jg-card-title">{item.title}</b>
        <span className="jg-card-progress" data-state={status.state}>
          <span className="jg-card-bar" aria-hidden="true"><i style={{ width: `${percent}%` }} /></span>
          <span>{label}</span>
        </span>
        <span className="jg-card-action">{item.href ? (status.started ? t.again : t.play) : t.locked}{item.href ? <i aria-hidden="true"> →</i> : null}</span>
      </>
    );
    const style = { "--jg-tint": world.tint } as React.CSSProperties;
    return item.href ? (
      <li key={item.id}>
        <a className="jg-card" style={style} href={item.href} onClick={() => save(visit(hub, item.id))}>{body}</a>
      </li>
    ) : (
      <li key={item.id}>
        <div className="jg-card jg-card-locked" style={style} aria-disabled="true">{body}</div>
      </li>
    );
  }

  return (
    <>
      <section className="jg-hero" aria-labelledby="jg-title">
        <div className="jg-hero-copy">
          <p className="jg-kicker">{t.kicker}</p>
          <h1 id="jg-title">{t.title}</h1>
          <p className="jg-lead">{t.lead}</p>
          <div className="jg-hero-actions">
            {go?.href ? (
              <a className="jg-primary" href={go.href} onClick={() => save(visit(hub, go.id))}>
                {resume ? `${t.resume} ${resume.title}` : t.start} <i aria-hidden="true">→</i>
              </a>
            ) : null}
            {standalone ? <span className="jg-installed">{t.installed}</span> : installEvent ? <button type="button" className="jg-secondary" onClick={install}>{t.install}</button> : null}
          </div>
          {!standalone && !installEvent && ios ? <p className="jg-hint">{t.iosHint}</p> : null}
        </div>

        <aside className="jg-passport" aria-label={t.passport}>
          <p className="jg-passport-head"><span>{t.passport}</span><span className="jg-passport-rank">{rankName}</span></p>
          <label className="jg-passport-name">
            <span className="jg-sr">{t.nameLabel}</span>
            <input value={hub.name || alias} maxLength={24} placeholder={t.namePlaceholder} autoComplete="given-name" onChange={(event) => save({ ...hub, name: cleanName(event.target.value) })} />
          </label>
          <p className="jg-passport-scenes">{t.scenes(book.summary.scenes)}</p>
          <p className="jg-passport-next">{book.next ? t.toNext(book.toNext, book.next[locale]) : t.topRank}</p>
          <ul className="jg-passport-stamps" aria-hidden="true">
            {book.statuses.slice(0, 8).map((status) => (
              <li key={status.id} data-state={status.state} style={{ "--jg-tint": worldOf.get(status.id)?.tint } as React.CSSProperties} />
            ))}
          </ul>
        </aside>
      </section>

      {studentPass ? <p className="jg-account-note jg-pass-on">{t.passOn}</p> : null}
      {passLost ? <p className="jg-account-note jg-pass-lost" role="status">{t.passLost}</p> : null}

      {!signedIn && !studentPass ? (
        <p className="jg-account-note">
          <span>{t.account}</span>
          <a href="/ingresar?modo=registro&returnTo=%2Fjugar">{t.accountCta} →</a>
        </p>
      ) : null}

      <section className="jg-section" aria-labelledby="jg-open-title">
        <div className="jg-section-head">
          <h2 id="jg-open-title">{t.openTitle}</h2>
          <p>{t.openLead}</p>
        </div>
        <ul className="jg-grid">{open.map(card)}</ul>
      </section>

      {locked.length && !fullAccess ? (
        <section className="jg-section" aria-labelledby="jg-locked-title">
          <div className="jg-section-head">
            <h2 id="jg-locked-title">{t.lockedTitle}</h2>
            <p>{t.lockedLead} {t.lockedHow}</p>
          </div>
          <ul className="jg-grid">{locked.map(card)}</ul>
        </section>
      ) : null}

      <section className="jg-section jg-book" aria-labelledby="jg-stamps-title">
        <div className="jg-section-head">
          <h2 id="jg-stamps-title">{t.stampsTitle}</h2>
          <p>{t.stampsLead}</p>
        </div>
        <ul className="jg-stamps">
          {cards.map((item) => {
            const status = statusOf.get(item.id);
            return (
              <li key={item.id} data-state={status?.state ?? "nuevo"} style={{ "--jg-tint": worldOf.get(item.id)?.tint } as React.CSSProperties}>
                <span className="jg-stamp" aria-hidden="true"><img src={item.image} alt="" width="160" height="100" loading="lazy" decoding="async" /></span>
                <span className="jg-stamp-name">{item.title}</span>
              </li>
            );
          })}
        </ul>
        <h3 className="jg-milestones-title">{t.milestonesTitle}</h3>
        <ul className="jg-milestones">
          {book.milestones.map((milestone) => (
            <li key={milestone.id} data-met={milestone.met}>
              <b>{milestone[locale][0]}</b>
              <span>{milestone[locale][1]}</span>
            </li>
          ))}
        </ul>
        <p className="jg-saved">{t.saved}</p>
      </section>
    </>
  );
}
