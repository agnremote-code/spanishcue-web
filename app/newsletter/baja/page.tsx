import type { Metadata } from 'next';
import Link from 'next/link';
import { SpanishCueBrand } from '../../SpanishCueBrand';
import growth from '../../growth/growth.module.css';

export const metadata: Metadata = { title: 'Newsletter | SPANISHCUE', robots: { index: false, follow: false } };
type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function NewsletterLeavePage({ searchParams }: Props) {
  const ok = (await searchParams).estado === 'ok';
  return <main className={growth.page} lang="es">
    <div className={growth.shell}>
      <div className={growth.topbar}><Link href="/" aria-label="SpanishCue"><SpanishCueBrand variant="compact" /></Link></div>
      <section className={growth.hero}>
        <h1 className={growth.title}>{ok ? 'Listo, ya no vas a recibir la newsletter.' : 'Este enlace de baja no es válido.'}</h1>
        <p className={growth.lead}>{ok ? 'La clase que desbloqueaste sigue abierta en tu navegador.' : 'Si quieres darte de baja, usa el enlace del último email que recibiste.'}</p>
        <div className={growth.heroActions}><Link className={growth.primaryButton} href="/">Ir a SpanishCue</Link></div>
      </section>
    </div>
  </main>;
}
