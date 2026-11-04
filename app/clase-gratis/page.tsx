import type { Metadata } from 'next';
import Link from 'next/link';
import { SpanishCueBrand } from '../SpanishCueBrand';
import { GrowthFooter } from '../growth/components';
import { GIFT_LANDING_PATH, GIFT_LESSON_LEVEL, GIFT_LESSON_TITLE, GIFT_PREVIEW_POSTER, GIFT_PREVIEW_VIDEO } from '../newsletter/gift';
import { GiftPitch, GiftSignupForm } from '../newsletter/GiftSignup';
import growth from '../growth/growth.module.css';
import styles from '../newsletter/newsletter.module.css';

const title = `Clase gratis de subjuntivo para profes de ELE: ${GIFT_LESSON_TITLE} | SPANISHCUE`;
const description = `Desbloquea con tu email una clase PRO de gramática ${GIFT_LESSON_LEVEL} lista para dar en vivo: ${GIFT_LESSON_TITLE.toLowerCase()}, con explicación, práctica, escucha y conversación.`;
export const metadata: Metadata = { title, description, alternates: { canonical: GIFT_LANDING_PATH }, openGraph: { title, description, url: GIFT_LANDING_PATH } };

export default function ClaseGratisPage() {
  return <>
    <main className={growth.page} lang="es">
      <div className={growth.shell}>
        <div className={growth.topbar}><Link href="/" aria-label="SpanishCue"><SpanishCueBrand variant="compact" /></Link></div>
        <section className={styles.giftLayout}>
          <div className={styles.card}>
            <GiftPitch heading="h1" />
            <img className={styles.mascot} src="/brand/mascot/pointing.webp" alt="" width={140} height={186} />
            <GiftSignupForm source={GIFT_LANDING_PATH} />
          </div>
          <figure className={styles.preview}>
            <video src={GIFT_PREVIEW_VIDEO} poster={GIFT_PREVIEW_POSTER} autoPlay muted loop playsInline preload="metadata" width={640} height={360} aria-label={`Vista previa de la clase ${GIFT_LESSON_TITLE}`} />
            <figcaption>Así se ve la clase que desbloqueas: la proyectas en tu pantalla y la das en vivo.</figcaption>
          </figure>
        </section>
      </div>
    </main>
    <GrowthFooter emailGift={false} />
  </>;
}
