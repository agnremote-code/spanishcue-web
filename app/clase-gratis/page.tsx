import type { Metadata } from 'next';
import Link from 'next/link';
import { SpanishCueBrand } from '../SpanishCueBrand';
import { GrowthFooter } from '../growth/components';
import { GIFT_LANDING_PATH, GIFT_LESSON_TITLE } from '../newsletter/gift';
import { GiftPitch, GiftSignupForm } from '../newsletter/GiftSignup';
import growth from '../growth/growth.module.css';
import styles from '../newsletter/newsletter.module.css';

const title = `Clase gratis de subjuntivo para profes de ELE: ${GIFT_LESSON_TITLE} | SPANISHCUE`;
const description = 'Desbloquea con tu email una clase PRO de gramática B1 lista para dar en vivo: creo que + indicativo, no creo que + subjuntivo, con audio y práctica.';
export const metadata: Metadata = { title, description, alternates: { canonical: GIFT_LANDING_PATH }, openGraph: { title, description, url: GIFT_LANDING_PATH } };

export default function ClaseGratisPage() {
  return <>
    <main className={growth.page} lang="es">
      <div className={growth.shell}>
        <div className={growth.topbar}><Link href="/" aria-label="SpanishCue"><SpanishCueBrand variant="compact" /></Link></div>
        <section className={growth.hero}>
          <div className={styles.card}>
            <GiftPitch heading="h1" />
            <img className={styles.mascot} src="/brand/mascot/pointing.webp" alt="" width={140} height={186} />
            <GiftSignupForm source={GIFT_LANDING_PATH} />
          </div>
        </section>
      </div>
    </main>
    <GrowthFooter emailGift={false} />
  </>;
}
