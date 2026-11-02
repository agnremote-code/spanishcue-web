"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useI18n } from "../i18n/LocaleProvider";
import { trackMarketingEvent } from "./analytics";

/** «Ver cómo funciona»: two classes playing on their own, uninterrupted, right under the hero for
 *  visitors without PRO. One grammar class and one 3D world, both real free classes, so the
 *  visitor sees the product move before reading a single argument. Videos are the same muted
 *  hover previews the library already ships (small MP4s), looped inline. */
const FREE_DEMO_PATH = "/demo/noche-abierta";
const CLIPS = [
  { key: "gramatica", src: "/grammar-previews/40.mp4", poster: "/grammar-thumbnails/40.webp", href: "/la-fabrica-de-los-nombres", lessonId: 40 },
  { key: "mundo3d", src: "/noche-abierta/como-funciona.mp4", poster: "/noche-abierta/preview.webp", href: FREE_DEMO_PATH, lessonId: 223 },
] as const;

const copy = {
  es: {
    kicker: "VER CÓMO FUNCIONA",
    title: "Así se ve una clase de SPANISHCUE en tu pantalla.",
    lead: "Dos clases reales, corriendo solas: una de gramática y un mundo 3D de conversación. Sin registro para mirar.",
    gramatica: ["Clase de gramática", "Teoría primero, práctica después y conversación al final. Una pantalla, listo para compartir."],
    mundo3d: ["Mundo 3D de conversación", "Un videojuego en 3D con siete niveles, de principiante absoluto a C2: tu alumno habla porque quiere resolver la escena."],
    open: "Abrir esta clase",
    primary: "Probar una clase gratis",
    secondary: "Ver precios",
  },
  en: {
    kicker: "SEE HOW IT WORKS",
    title: "This is what a SPANISHCUE lesson looks like on your screen.",
    lead: "Two real lessons, running on their own: a grammar lesson and a 3D conversation world. No sign-up to watch.",
    gramatica: ["Grammar lesson", "Theory first, practice next and conversation to close. One screen, ready to share."],
    mundo3d: ["3D conversation world", "A 3D video game with seven levels, from absolute beginner to C2: your student talks because they want to solve the scene."],
    open: "Open this lesson",
    primary: "Try a free lesson",
    secondary: "See pricing",
  },
} as const;

export default function HowItWorksVideos() {
  const { locale } = useI18n();
  const c = copy[locale === "es" ? "es" : "en"];
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    // Autoplay policies: muted inline video starts by itself, but some browsers pause it when the
    // element is created off-screen. Nudge playback when the section scrolls into view.
    const section = ref.current;
    if (!section || typeof IntersectionObserver === "undefined") return;
    const videos = Array.from(section.querySelectorAll("video"));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      }
    }, { threshold: 0.2 });
    videos.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);
  return <section ref={ref} className="mk-section mk-watch" id="ver-como-funciona" aria-labelledby="mk-watch-title">
    <div className="mk-section-heading">
      <span>{c.kicker}</span>
      <h2 id="mk-watch-title">{c.title}</h2>
      <p>{c.lead}</p>
    </div>
    <div className="mk-watch-grid">
      {CLIPS.map((clip) => {
        const [title, description] = c[clip.key];
        return <article key={clip.key} className={`mk-watch-card mk-watch-${clip.key}`}>
          <div className="mk-watch-screen">
            <video src={clip.src} poster={clip.poster} autoPlay muted loop playsInline preload="metadata" aria-label={title} disablePictureInPicture />
          </div>
          <div className="mk-watch-copy">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={clip.href} onClick={() => trackMarketingEvent("lesson_preview_open", { lesson_id: clip.lessonId, category: clip.key, access: "free", placement: "how_it_works_video" })}>{c.open} →</a>
          </div>
        </article>;
      })}
    </div>
    <div className="mk-watch-actions">
      <a href={FREE_DEMO_PATH} className="mk-watch-primary" onClick={() => { trackMarketingEvent("cta_click", { placement: "how_it_works_video", cta_type: "view_lesson", destination: FREE_DEMO_PATH }); trackMarketingEvent("teacher_demo_started", { placement: "how_it_works_video" }); }}>{c.primary}</a>
      <Link href="/pricing" className="mk-watch-secondary" onClick={() => trackMarketingEvent("cta_click", { placement: "how_it_works_video", cta_type: "buy", destination: "/pricing" })}>{c.secondary}</Link>
    </div>
  </section>;
}
